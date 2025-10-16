import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LevelDTO } from "./dto/level";
import { ParameterFolderDTO } from "./dto/accreditation-instrument";
import { SurveyTeamType } from "./generated/prisma";

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

export function calculateParameterGrandMean(
  parameterFolder: ParameterFolderDTO,
  surveyType: SurveyTeamType
) {}
