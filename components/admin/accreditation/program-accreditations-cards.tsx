import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AccreditationDisplayDTO } from "@/lib/dto/accreditation";
import { screamingSnakeToTitle } from "@/lib/utils";
import { Award, Calendar, CircleDot } from "lucide-react";

const ProgramAccreditationCards = ({
  programAccreditation,
}: {
  programAccreditation: AccreditationDisplayDTO;
}) => {
  return (
    <Card className="basis-[calc(33.33%-1rem)]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {programAccreditation.program.code}
          <Award className="text-yellow-500" />
        </CardTitle>
        <CardDescription>{programAccreditation.program.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <CircleDot size={15} />
            Status
          </p>
          <p className="text-sm">
            {screamingSnakeToTitle(programAccreditation.status)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar size={15} />
            Effective from
          </p>
          <p className="text-sm">
            {new Date(programAccreditation.startsAt!).toLocaleDateString(
              "en-US"
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar size={15} />
            Expires on
          </p>
          <p className="text-sm">
            {new Date(programAccreditation.endsAt!).toLocaleDateString("en-US")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramAccreditationCards;
