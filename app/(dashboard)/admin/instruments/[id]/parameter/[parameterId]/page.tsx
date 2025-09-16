import { getParameterStructureById } from "@/lib/dal/parameter";

const ParameterPage = async ({
  params,
}: {
  params: Promise<{ parameterId: number }>;
}) => {
  const { parameterId } = await params;
  const parameter = await getParameterStructureById(Number(parameterId));
  const categoryIndex = { SYSTEM: 0, IMPLEMENTATION: 1, OUTCOME: 2 };
  const [systemCount, implementationCount, outcomeCount] =
    parameter?.indicator.reduce(
      (counts, indicator) => {
        counts[categoryIndex[indicator.category]]++;
        return counts;
      },
      [0, 0, 0]
    ) || [0, 0, 0];
  return <p>ParameterPage</p>;
};

export default ParameterPage;
