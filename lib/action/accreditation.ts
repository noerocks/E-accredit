"use server";

import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";
import {
  AreaFileType,
  Category,
  FileStatus,
  Phase,
  Progress,
  SurveyVisitType,
} from "../generated/prisma";
import { createSurveyVisit as createSurveyVisitDAL } from "../dal/survey-visit";
import { getInstrumentStructureById } from "../dal/instrument";
import { createAreaFolder } from "../dal/area-folder";
import { createInstrumentFolder } from "../dal/instrument-folder";
import { createParameterFolder } from "../dal/parameter-folder";
import { createIndicatorFolder } from "../dal/indicator-folder";
import { revalidateTag } from "next/cache";
import { createManyEvidenceFiles } from "../dal/evidence";
import { createManyAreaFiles } from "../dal/area-file";
import { createTaskforce } from "../dal/taskforce";

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
  const surveyVisit = await createSurveyVisitDAL(
    program.accreditation.id,
    actualSurveyDate,
    SurveyVisitType.FIRST,
    level.id,
    Progress.IN_PROGRESS,
    instrument.id
  );
  revalidateTag("accreditations");
  if (!surveyVisit) throw new Error("Error in creating survey visit");
  const instrumentStructure = await getInstrumentStructureById(instrument.id);
  if (level.phase === Phase.PHASE_1) {
    const category: { name: Category; label: string }[] = [
      { name: Category.SYSTEM, label: "System - Inputs and Processes" },
      { name: Category.IMPLEMENTATION, label: "Implementation" },
      { name: Category.OUTCOME, label: "Outcome/s" },
    ];
    const instrumentFolder = await createInstrumentFolder(
      surveyVisit.phaseOneRequirements?.id!
    );
    if (!instrumentFolder)
      throw new Error("Error in creating instrument folder");
    instrumentStructure?.area.forEach(async (area) => {
      const areaFolder = await createAreaFolder(
        instrumentFolder?.id,
        area.id,
        Progress.IN_PROGRESS
      );
      if (!areaFolder) throw new Error("Error in creating area folder");
      const areaFiles = await createManyAreaFiles([
        {
          phaseOneAreaFolderId: areaFolder.id,
          type: AreaFileType.PPP,
          status: FileStatus.EMPTY,
        },
        {
          phaseOneAreaFolderId: areaFolder.id,
          type: AreaFileType.COMPLIANCE_REPORT,
          status: FileStatus.EMPTY,
        },
      ]);
      const taskforce = await createTaskforce(areaFolder.id);
      area.parameter.forEach(async (parameter) => {
        const parameterFolder = await createParameterFolder(
          areaFolder.id,
          parameter.id
        );
        if (!parameterFolder)
          throw new Error("Error in creating parameter folder");
        category.forEach(async (category) => {
          const indicatorFolder = await createIndicatorFolder(
            parameterFolder.id,
            category.name
          );
          if (!indicatorFolder)
            throw new Error("Error in creating indicator folder");
          const evidenceFiles = parameter.indicator
            .filter((indicator) => indicator.category === category.name)
            .map((indicator) => ({
              indicatorFolderId: indicatorFolder.id,
              indicatorId: indicator.id,
              status: FileStatus.EMPTY,
            }));
          await createManyEvidenceFiles(evidenceFiles);
        });
      });
    });
  } else {
  }
}
