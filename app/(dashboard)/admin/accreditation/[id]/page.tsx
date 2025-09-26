const ProgramAccreditationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <p>Program Accreditation</p>
    </div>
  );
};

export default ProgramAccreditationPage;
