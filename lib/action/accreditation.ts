"use server";

import { InstrumentDisplayDTO } from "../dto/instrument";
import { LevelDTO } from "../dto/level";
import { ProgramDTO } from "../dto/programs";
import {
  AccreditationStatus,
  AreaFileType,
  Category,
  FileStatus,
  Level,
  LevelEnum,
  Phase,
  Progress,
  SurveyResultStatus,
  SurveyStatus,
  SurveyTeamType,
  SurveyVisitType,
} from "../generated/prisma";
import {
  createSurveyVisit as createSurveyVisitDAL,
  getSurveyVisitStructureById,
  updateSurveyVisitById,
} from "../dal/survey-visit";
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
import { updateAccreditationById } from "../dal/accreditation";
import { screamingSnakeToTitle } from "../utils";

export async function createSurveyVisit(
  program: ProgramDTO | undefined,
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
  try {
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
    return { success: { message: "Portfolio is initialized successfully" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function grantAccreditedStatus(
  accreditationId: string | undefined,
  surveyVisitId: string | undefined,
  level: Level | undefined
) {
  if (!accreditationId || !level)
    return { failure: { error: "Invalid input" } };
  try {
    const currentDate = new Date();
    const endsAt = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + level.yearsEffective)
    );
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      surveyResultStatus: SurveyResultStatus.GRANTED,
      openForActualSurvey: false,
    });
    const accreditation = await updateAccreditationById({
      id: accreditationId,
      currentLevel: level.id,
      startsAt: new Date(),
      endsAt,
      status: AccreditationStatus.ACTIVE,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSelfSurvey");
    revalidateTag("surveyVisitActualSurvey");
    let status =
      level?.label === "PRELIMINARY_SURVEY_VISIT" ? "CANDIDATE" : level?.label;
    status = screamingSnakeToTitle(status!)
      ?.split(" ")
      .map((word, i) => (i === 1 ? word.toUpperCase() : word))
      .join(" ");
    return {
      succecss: { message: `Program is now granted with ${status} status` },
    };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function denyAccreditationStatus(
  surveyVisitId: string,
  actualSurveyDate: Date
) {
  if (!surveyVisitId || !actualSurveyDate)
    return {
      failure: { error: "Invalid Input" },
    };
  try {
    const prevSurveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      surveyResultStatus: SurveyResultStatus.NOT_GRANTED,
      openForActualSurvey: false,
    });
    const newSurveyVisit = await createSurveyVisit(
      prevSurveyVisit?.accreditation.program as unknown as ProgramDTO,
      prevSurveyVisit?.level,
      prevSurveyVisit?.phaseOneRequirements?.instrument,
      actualSurveyDate
    );
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSelfSurvey");
    revalidateTag("surveyVisitActualSurvey");
    return { success: { message: "Full resurvey has been scheduled" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
