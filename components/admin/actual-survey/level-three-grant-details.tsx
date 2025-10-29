const LevelThreeGrantDetails = ({
  programName,
  level,
}: {
  programName: string;
  level: string;
}) => {
  return (
    <>
      <p className="text-sm">
        The program <strong>{programName}</strong> has successfully passed the{" "}
        <strong>{level} Phase 1</strong> accreditation survey. The coordinator
        may now confirm this result in the system.
      </p>
      <p className="text-sm text-muted-foreground">
        The institution will then be responsible for preparing the corresponding
        evidences for the <strong>{level} Phase 2</strong> evaluation.
      </p>
    </>
  );
};

export default LevelThreeGrantDetails;
