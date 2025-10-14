"use server";

import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";
import {
  AreaFileType,
  Category,
  FileStatus,
  LevelEnum,
  Phase,
  Progress,
  SurveyTeamType,
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
import {
  createPhaseOneRequirements,
  createPhaseTwoRequirements,
} from "../dal/requirements";
import { createPhaseTwoAreaFolder } from "../dal/phase-two-area-folder";
import { createManySurveyTeam } from "../dal/survey-team";
import { getLevelById } from "../dal/levels";

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
    Progress.IN_PROGRESS
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
    const surveyTeam = await createManySurveyTeam([
      {
        surveyVisitId: surveyVisit.id,
        type: SurveyTeamType.INTERNAL,
      },
      {
        surveyVisitId: surveyVisit.id,
        type: SurveyTeamType.EXTERNAL,
      },
    ]);
    const phaseOneRequirements = await createPhaseOneRequirements(
      surveyVisit.id,
      instrument.id
    );
    if (!phaseOneRequirements)
      throw new Error("Error in creating phase one requirements");
    const instrumentFolder = await createInstrumentFolder(
      phaseOneRequirements.id
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
        ...(level.label !== LevelEnum.PRELIMINARY_SURVEY_VISIT
          ? [
              {
                phaseOneAreaFolderId: areaFolder.id,
                type: AreaFileType.COMPLIANCE_REPORT,
                status: FileStatus.EMPTY,
              },
            ]
          : []),
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
  } else if (level.phase === Phase.PHASE_2) {
    const phaseTwoRequirements = await createPhaseTwoRequirements(
      surveyVisit.id,
      instrument.id
    );
    if (!phaseTwoRequirements)
      throw new Error("Error in creating phase two requirements");
    instrumentStructure?.area.forEach(async (area) => {
      const areaFolder = await createPhaseTwoAreaFolder(
        phaseTwoRequirements.phaseTwoFolder?.id!,
        area.id
      );
      if (!areaFolder)
        throw new Error("Error in creating phase two area folder");
      const areaFiles = await createManyAreaFiles([
        {
          phaseTwoAreaFolderId: areaFolder.id,
          type: AreaFileType.NARRATIVE_PROFILE,
          status: FileStatus.EMPTY,
        },
        {
          phaseTwoAreaFolderId: areaFolder.id,
          type: AreaFileType.COMPLIANCE_REPORT,
          status: FileStatus.EMPTY,
        },
      ]);
    });
  }
}
