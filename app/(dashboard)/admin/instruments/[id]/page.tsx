import { getInstrumentStructureById } from "@/lib/dal/instrument";

const InstrumentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const instrument = await getInstrumentStructureById(id);
  const areaCount = instrument?.area.length;
  const parameterCount = instrument?.area
    .map((area) => area.parameter.length)
    .reduce((total, areaCount) => (total += areaCount), 0);
  const indicatorCount = instrument?.area
    .map((area) => area.parameter)
    .flat()
    .map((parameter) => parameter.indicator.length)
    .reduce((total, indicatorCount) => (total += indicatorCount), 0);

  return (
    <div className="w-3/4 mt-10 mx-auto">
      <p className="text-2xl">{instrument?.name}</p>
      <p className="text-foreground">{instrument?.accreditingBody}</p>
    </div>
  );
};

export default InstrumentPage;
