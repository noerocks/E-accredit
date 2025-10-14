const AreaFilePage = async ({
  params,
}: {
  params: Promise<{ areaFileId: string }>;
}) => {
  const { areaFileId } = await params;
  return (
    <div>
      <p>{areaFileId}</p>
    </div>
  );
};

export default AreaFilePage;
