"use server";

import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";
import {
  AccreditationStatus,
  Category,
  Phase,
  SurveyVisitType,
} from "../generated/prisma";
import { createFolder } from "./drive";
import { createSurveyVisit as createSurveyVisitDAL } from "../dal/survey-visit";
import { getInstrumentStructureById } from "../dal/instrument";
import { createAreaFolder } from "../dal/area-folder";
import { createInstrumentFolder } from "./instrument-folder";
import { createParameterFolder } from "../dal/parameter-folder";
import { createIndicatorFolder } from "../dal/indicator-folder";

export async function createSurveyVisit(
  program: ProgramDTO,
  level: LevelDTO | undefined,
  instrument: InstrumentDisplayDTO | undefined,
  actualSurveyDate: Date
) {
  if (
    !program ||
    !program.accreditation ||
    !level ||
    !instrument ||
    !actualSurveyDate
  )
    throw new Error("Invalid parameter values");
  const label = `${level.label} ${
    ["Level IV", "Level III"].includes(level.label)
      ? level.phase
          .split("_")
          .map((word) => word[0] + word.slice(1).toLocaleLowerCase())
          .join(" ")
      : ""
  }`;
  const { id: surveyVisitFolderId } = await createFolder(
    label,
    program.folderId
  );
  if (!surveyVisitFolderId)
    throw new Error("Error in creating survey visit folder in drive");
  const surveyVisit = await createSurveyVisitDAL(
    program.accreditation.id,
    actualSurveyDate,
    SurveyVisitType.FIRST,
    level.id,
    AccreditationStatus.IN_PROGRESS,
    instrument.id
  );
  if (!surveyVisit) throw new Error("Error in creating survey visit");
  const instrumentStructure = await getInstrumentStructureById(instrument.id);
  if (level.phase === Phase.PHASE_1) {
    const category: { name: Category; label: string }[] = [
      { name: Category.SYSTEM, label: "System - Inputs and Processes" },
      { name: Category.IMPLEMENTATION, label: "Implementation" },
      { name: Category.OUTCOME, label: "Outcome/s" },
    ];
    const instrumentFolder = await createInstrumentFolder(
      surveyVisit.phaseOneRequirements?.id!,
      surveyVisitFolderId
    );
    if (!instrumentFolder)
      throw new Error("Error in creating instrument folder");
    instrumentStructure?.area.forEach(async (area) => {
      const { id: areaFolderId } = await createFolder(
        area.label,
        surveyVisitFolderId
      );
      if (!areaFolderId)
        throw new Error("Error in creating area folder in drive");
      const areaFolder = await createAreaFolder(
        instrumentFolder?.id,
        area.id,
        areaFolderId
      );
      if (!areaFolder) throw new Error("Error in creating area folder");
      area.parameter.forEach(async (parameter) => {
        const { id: parameterFolderId } = await createFolder(
          parameter.label,
          areaFolderId
        );
        if (!parameterFolderId)
          throw new Error("Error in creating parameter folder in drive");
        const parameterFolder = await createParameterFolder(
          areaFolder.id,
          parameter.id,
          parameterFolderId
        );
        if (!parameterFolder)
          throw new Error("Error in creating parameter folder");
        category.forEach(async (category) => {
          const { id: categoryFolderId } = await createFolder(
            category.label,
            parameterFolderId
          );
          if (!categoryFolderId)
            throw new Error("Error in creating category folder");
          await createIndicatorFolder(
            parameterFolderId,
            categoryFolderId,
            category.name
          );
        });
      });
    });
  } else {
  }
}
