"use server";

import { createAreaFolder } from "../dal/area-folder";
import { createIndicatorFolder } from "../dal/indicator-folder";
import { getInstrumentStructureById } from "../dal/instrument";
import { createParameterFolder } from "../dal/parameter-folder";
import { createSurveyVisit as createSurveyVisitDAL } from "../dal/survey-visit";
import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";
import { Category } from "../generated/prisma";
import { createFolder } from "./drive";
import { createInstrumentFolder } from "./instrument-folder";

export async function createSurveyVisit(
  program: ProgramDTO,
  level: LevelDTO | undefined,
  instrument: InstrumentDisplayDTO | undefined
) {
  const category = [
    { name: "SYSTEM", label: "System - Inputs and Processes" },
    { name: "IMPLEMENTATION", label: "Implementation" },
    { name: "OUTCOME", label: "Outcome/s" },
  ];
  if (!level || !program || !instrument || !program.accreditation)
    throw new Error("Parameters must be defined");
  const levelAndPhase = `${level.label} ${
    ["Level IV", "Level III"].includes(level.label)
      ? level.phase
          .split("_")
          .map((word) => word[0] + word.slice(1).toLocaleLowerCase())
          .join(" ")
      : ""
  }`;
  const surveyVisit = await createSurveyVisitDAL(
    program.accreditation.id,
    level.id,
    instrument.id
  );
  if (!surveyVisit || !surveyVisit.phaseOneRequirements)
    throw new Error("Error in creating survey visit");
  const { id: instrumentFolderId } = await createFolder(
    levelAndPhase,
    program.folderId
  );
  if (!instrumentFolderId)
    throw new Error("Error in creating instrument folder in drive");
  const instrumentFolder = await createInstrumentFolder(
    surveyVisit.phaseOneRequirements?.id,
    instrumentFolderId
  );
  if (!instrumentFolder?.id)
    throw new Error("Error in creating instrument folder");
  const instrumentStructure = await getInstrumentStructureById(instrument.id);
  instrumentStructure?.area.forEach(async (area) => {
    const { id: areaFolderId } = await createFolder(
      area.label,
      instrumentFolderId
    );
    if (!areaFolderId)
      throw new Error("Error in creating area folder in drive");
    const areaFolder = await createAreaFolder(
      instrumentFolder?.id,
      area.id,
      areaFolderId
    );
    if (!areaFolder?.id) throw new Error("Error in creatinf area folder");
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
      if (!parameterFolder?.id)
        throw new Error("Error in creating parameter folder");
      category.forEach(async (category) => {
        const { id: categoryFolderId } = await createFolder(
          category.label,
          parameterFolderId
        );
        if (!categoryFolderId)
          throw new Error("Error in careating category folder");
        const categoryFolder = await createIndicatorFolder(
          parameterFolder.id,
          categoryFolderId,
          category.name as Category
        );
      });
    });
  });
}
