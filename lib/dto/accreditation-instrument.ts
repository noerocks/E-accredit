import {
  Area,
  AreaChair,
  AreaFile,
  AreaFolder,
  Comment,
  EvidenceFile,
  FileVersion,
  Indicator,
  IndicatorFolder,
  InstrumentFolder,
  Parameter,
  ParameterFolder,
  PhaseTwoAreaFolder,
  PhaseTwoFolder,
} from "../generated/prisma";
import { AreaChairDTO, RatingDTO } from "./survey-visit";
import { TaskforceDTO } from "./taskforce";

export type PhaseTwoInstrumentDTO = PhaseTwoFolder & {
  phaseTwoAreaFolders: PhaseTwoAreaFolderDTO[];
};

export type PhaseOneInstrumentDTO = InstrumentFolder & {
  areaFolders: AreaFolderDTO[];
};
export type AreaFolderDTO = AreaFolder & {
  areaChair: AreaChairDTO[];
  area: Area;
  strengths: Comment[];
  weaknesses: Comment[];
  recommendations: Comment[];
  parameterFolders: ParameterFolderDTO[];
  areaFiles: AreaFile[];
  taskForce: TaskforceDTO;
};
export type PhaseTwoAreaFolderDTO = PhaseTwoAreaFolder & {
  area: Area;
  areaFiles: AreaFile[];
  taskForce: TaskforceDTO | null;
};
export type ParameterFolderDTO = ParameterFolder & {
  parameter: Parameter;
  indicatorFolders: IndicatorFolderDTO[];
  areaFolder: AreaFolderDTO;
};
export type IndicatorFolderDTO = IndicatorFolder & {
  evidenceFiles: EvidenceFileDTO[];
};
export type EvidenceFileDTO = EvidenceFile & {
  indicator: Indicator;
  fileVersions: FileVersion[];
  ratings: RatingDTO[] | null;
};
export type AreaFileDTO = AreaFile & {
  fileVersions: FileVersion[];
};
