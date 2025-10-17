import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LevelDTO } from "./dto/level";
import {
  AreaFolderDTO,
  ParameterFolderDTO,
} from "./dto/accreditation-instrument";
import { SurveyTeamType } from "./generated/prisma";
import { RatingDTO } from "./dto/survey-visit";

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
