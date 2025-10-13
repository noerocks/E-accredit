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
};
export type PhaseTwoAreaFolderDTO = PhaseTwoAreaFolder & {
  area: Area;
  areaFiles: AreaFile[];
};
export type ParameterFolderDTO = ParameterFolder & {
  parameter: Parameter;
  indicatorFolders: IndicatorFolderDTO[];
};
export type IndicatorFolderDTO = IndicatorFolder & {
  evidenceFiles: EvidenceFileDTO[];
};
export type EvidenceFileDTO = EvidenceFile & {
  indicator: Indicator;
  fileVersions: FileVersion[];
};
export type AreaFileDTO = AreaFile & {
  fileVersions: FileVersion[];
};
