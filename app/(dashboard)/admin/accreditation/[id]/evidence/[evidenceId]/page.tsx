const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  return (
    <div>
      <p>{evidenceId}</p>
    </div>
  );
};

export default EvidencePage;
