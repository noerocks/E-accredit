const ProgramAccreditationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <p></p>
    </div>
  );
};

export default ProgramAccreditationPage;
