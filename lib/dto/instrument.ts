import { Instrument, Area, Parameter, Indicator } from "../generated/prisma";

export type InstrumentDTO = { area: AreaDTO[] } & Instrument;

export type AreaDTO = { parameter: ParameterDTO[] } & Area;

export type ParameterDTO = { indicator: IndicatorDTO[] } & Parameter;

export type IndicatorDTO = Indicator;
