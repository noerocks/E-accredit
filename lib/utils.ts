import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LevelDTO } from "./dto/level";
import {
  AreaFolderDTO,
  ParameterFolderDTO,
} from "./dto/accreditation-instrument";
import { SurveyTeamType } from "./generated/prisma";
import { RatingDTO, SurveyVisitDTO } from "./dto/survey-visit";
import { Area } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function screamingSnakeToTitle(text: string) {
  return text
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatLevelNameAndPhase(level: LevelDTO) {
  const label = level.label;
  if (level.label === "PRELIMINARY_SURVEY_VISIT") {
    return screamingSnakeToTitle(label);
  }
  const name = level.label
    .split("_")
    .map((word, i) =>
      i > 0
        ? word.toUpperCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
  return level.rank <= 4
    ? `${name} ${screamingSnakeToTitle(level.phase)}`
    : name;
}

export function formatAccreditationName(programCode: string, level: LevelDTO) {
  return `${programCode} - ${formatLevelNameAndPhase(level)}`;
}

export async function formatLevelName(level: LevelDTO) {
  return level.label
    .split("_")
    .map((word, i) =>
      i === 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(" ");
}

export function calculateParameterMean(
  parameterFolder: ParameterFolderDTO,
  surveyType: SurveyTeamType
) {
  const ratings = parameterFolder.indicatorFolders
    .flatMap((indicator) =>
      indicator.evidenceFiles.flatMap((evidence) => evidence.ratings)
    )
    .filter(
      (rating): rating is RatingDTO =>
        !rating?.NA && rating?.type === surveyType
    );
  if (ratings.length > 0) {
    const sum = ratings.reduce(
      (sum, rating) => (sum += rating.finalRate ?? 0),
      0
    );
    return sum / ratings.length;
  }
  return undefined;
}

export function calculateAreaMean(
  areaFolder: AreaFolderDTO,
  surveyType: SurveyTeamType
) {
  const parameterRatings = areaFolder.parameterFolders
    .map((parameter) => calculateParameterMean(parameter, surveyType))
    .filter((rating): rating is number => rating !== undefined);
  if (parameterRatings.length > 0) {
    const sum = parameterRatings.reduce(
      (sum, rating) => (sum += rating ?? 0),
      0
    );
    return sum / parameterRatings.length;
  }
  return undefined;
}

export function calculateWeightedAreaMean(
  areaFolder: AreaFolderDTO,
  surveyType: SurveyTeamType
) {
  const mean = calculateAreaMean(areaFolder, surveyType);
  const weightedMean = mean && mean * (areaFolder.area.weight / 100);
  return weightedMean;
}

export function calculateGrandMean(
  areaFolders: AreaFolderDTO[],
  surveyType: SurveyTeamType
) {
  const validAreas = areaFolders
    .map((areaFolder) => ({
      weight: areaFolder.area.weight / 100,
      weightedMean: calculateWeightedAreaMean(areaFolder, surveyType),
    }))
    .filter((area) => area.weightedMean !== undefined);
  if (validAreas.length === 0) return undefined;
  const totalWeights = validAreas.reduce(
    (sum, area) => (sum += area.weight),
    0
  );
  const totalWeightedAreas = validAreas.reduce(
    (sum, area) => (sum += area.weightedMean ?? 0),
    0
  );
  return totalWeightedAreas / totalWeights;
}

export function calculateRange(
  areaFolders: AreaFolderDTO[],
  surveyType: SurveyTeamType
):
  | {
      min: { area: Area; mean: number | undefined };
      max: { area: Area; mean: number | undefined };
      range: number;
    }
  | undefined {
  const areas = areaFolders
    .map((area) => ({
      area: area.area,
      mean: calculateAreaMean(area, surveyType),
    }))
    .filter((area) => area.mean !== undefined);
  if (areas.length === 0) return undefined;
  const min = areas.reduce(
    (min, area) => ((area.mean || 0) < (min.mean || 0) ? area : min),
    {
      area: {} as Area,
      mean: Number.MAX_SAFE_INTEGER,
    }
  );
  const max = areas.reduce(
    (max, area) => ((area.mean || 0) > (max.mean || 0) ? area : max),
    {
      area: {} as Area,
      mean: Number.MIN_SAFE_INTEGER,
    }
  );
  return {
    min,
    max,
    range: (max.mean || 0) - (min.mean || 0),
  };
}

export function calculateWeightedVariance(
  areaFolders: AreaFolderDTO[],
  surveyType: SurveyTeamType
) {
  const grandMean = calculateGrandMean(areaFolders, surveyType);
  const totalWeight = areaFolders.reduce(
    (sum, area) => (sum += area.area.weight / 100),
    0
  );
  const squaredDeviationsXweight = areaFolders.map(
    (area) =>
      (area.area.weight / 100) *
      (grandMean! - calculateAreaMean(area, surveyType)!) ** 2
  );
  return (
    squaredDeviationsXweight.reduce((sum, x) => (sum += x), 0) / totalWeight
  );
}

export function getSDDescriptiveRating(
  sd: number,
  grandMean: number,
  requiredMean = 4.0
): string {
  if (sd < 0) {
    return "Invalid value";
  }

  let consistency = "";
  if (sd <= 0.1) {
    consistency = "Very Consistent";
  } else if (sd <= 0.3) {
    consistency = "Highly Consistent";
  } else if (sd <= 0.6) {
    consistency = "Moderately Consistent";
  } else if (sd <= 1.0) {
    consistency = "Variable";
  } else {
    consistency = "Highly Variable";
  }

  if (grandMean < requiredMean) {
    return `${consistency} – However, the overall grand mean (${grandMean.toFixed(
      2
    )}) did not meet the required standard (${requiredMean.toFixed(
      2
    )}), indicating uniform but below-standard performance.`;
  } else {
    return `${consistency} – The performance across areas reflects acceptable consistency and meets the required standard.`;
  }
}

export function getGrandMeanDescriptiveRating(grandMean: number) {
  if (grandMean) {
    if (grandMean >= 4.5 && grandMean <= 5.0) {
      return "Excellent";
    } else if (grandMean >= 3.5 && grandMean <= 4.49) {
      return "Very Good (or Very Satisfactory)";
    } else if (grandMean >= 2.5 && grandMean <= 3.49) {
      return "Good";
    } else if (grandMean >= 1.5 && grandMean <= 2.49) {
      return "Fair";
    } else if (grandMean >= 1.0 && grandMean <= 1.49) {
      return "Poor";
    } else if (grandMean === 0) {
      return "Not Functioning";
    }
  }
}
