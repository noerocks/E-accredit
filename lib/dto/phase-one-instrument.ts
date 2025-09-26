import {
  Area,
  AreaFolder,
  EvidenceFile,
  Indicator,
  IndicatorFolder,
  InstrumentFolder,
  Parameter,
  ParameterFolder,
} from "../generated/prisma";

export type PhaseOneInstrumentDTO = InstrumentFolder & {
  areaFolders: AreaFolderDTO[];
};
export type AreaFolderDTO = AreaFolder & {
  area: Area;
  parameterFolders: ParameterFolderDTO[];
};
export type ParameterFolderDTO = ParameterFolder & {
  parameter: Parameter;
  indicatorFolders: IndicatorFolderDTO[];
};
export type IndicatorFolderDTO = IndicatorFolder & {
  evidenceFiles: EvidenceFileDTO[];
};
export type EvidenceFileDTO = EvidenceFile & { indicator: Indicator };
