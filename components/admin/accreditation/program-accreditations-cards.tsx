import { Card, CardTitle } from "@/components/ui/card";
import { AccreditationDisplayDTO } from "@/lib/dto/accreditation";

const ProgramAccreditationCards = ({
  programAccreditation,
}: {
  programAccreditation: AccreditationDisplayDTO;
}) => {
  return (
    <Card>
      <CardTitle>{programAccreditation.program.code}</CardTitle>
    </Card>
  );
};

export default ProgramAccreditationCards;
