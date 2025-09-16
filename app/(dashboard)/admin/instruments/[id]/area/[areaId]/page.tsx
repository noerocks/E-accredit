import { getAreaStructureById } from "@/lib/dal/area";

const AreaPage = async ({
  params,
}: {
  params: Promise<{ areaId: number }>;
}) => {
  const { areaId } = await params;
  const area = await getAreaStructureById(Number(areaId));
  const parameterCount = area?.parameter.length;
  const indicatorCount = area?.parameter
    .map((parameter) => parameter.indicator)
    .flat().length;
  return (
    <div>
      <p>{areaId}</p>
    </div>
  );
};

export default AreaPage;
