import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { Calendar } from "lucide-react";
import ScheduleRevisit from "./schedule-revisit";

const Deferred = ({ failedAreas }: { failedAreas: AreaFolderDTO[] }) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <p className="text-sm text-muted-foreground">Evaluation Outcome</p>
          <p className="text-yellow-500 font-medium">Deferred</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm">
          The program meets the overall minimum requirements, but some areas did
          not meet the required standards.
        </p>
        {failedAreas.length > 0 && (
          <p className="text-sm text-muted-foreground">
            The following area{failedAreas.length > 1 ? "s" : ""} require a
            revisit: {failedAreas.map((area) => area.area.label).join(", ")}.
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          The affected area{failedAreas.length > 1 ? "s" : ""} must be revisited
          within the period set by the accrediting body to finalize the
          evaluation.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <ScheduleRevisit failedAreas={failedAreas} />
      </CardFooter>
    </Card>
  );
};

export default Deferred;
