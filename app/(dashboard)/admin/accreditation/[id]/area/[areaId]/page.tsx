const AreaFolderPage = async ({
  params,
}: {
  params: Promise<{ areaId: string }>;
}) => {
  const { areaId } = await params;
  return (
    <div>
      <p>{areaId}</p>
    </div>
  );
};

export default AreaFolderPage;
