"use server";

import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";

export async function createSurveyVisit(
  program: ProgramDTO,
  level: LevelDTO | undefined,
  instrument: InstrumentDisplayDTO | undefined,
  actualSurveyDate: Date
) {
  console.log(program, level, instrument, actualSurveyDate);
}
