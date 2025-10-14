const SelfSurveyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default SelfSurveyPage;
