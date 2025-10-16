import {
  Area,
  AreaFile,
  AreaFolder,
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
import { RatingDTO } from "./survey-visit";
import { TaskforceDTO } from "./taskforce";

export type PhaseTwoInstrumentDTO = PhaseTwoFolder & {
  phaseTwoAreaFolders: PhaseTwoAreaFolderDTO[];
};

export type PhaseOneInstrumentDTO = InstrumentFolder & {
  areaFolders: AreaFolderDTO[];
};
export type AreaFolderDTO = AreaFolder & {
  area: Area;
  parameterFolders: ParameterFolderDTO[];
  areaFiles: AreaFile[];
  taskForce: TaskforceDTO;
};
export type PhaseTwoAreaFolderDTO = PhaseTwoAreaFolder & {
  area: Area;
  areaFiles: AreaFile[];
};
export type ParameterFolderDTO = ParameterFolder & {
  parameter: Parameter & { area: Area };
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
