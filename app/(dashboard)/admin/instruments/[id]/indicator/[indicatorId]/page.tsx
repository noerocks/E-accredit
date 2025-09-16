const IndicatorPage = async ({
  params,
}: {
  params: Promise<{ indicatorId: number }>;
}) => {
  const { indicatorId } = await params;
  return <p>IndicatorPage</p>;
};

export default IndicatorPage;
