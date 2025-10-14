import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LevelDTO } from "./dto/level";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function screamingSnakeToTitle(text: string) {
  return text
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatLevelName(level: LevelDTO) {
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
    ? `${name} - ${screamingSnakeToTitle(level.phase)}`
    : name;
}

export function formatAccreditationName(programCode: string, level: LevelDTO) {
  return `${programCode} - ${formatLevelName(level)}`;
}
