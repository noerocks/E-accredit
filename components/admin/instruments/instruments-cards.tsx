import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FolderOpen } from "lucide-react";

const InstrumentCards = ({
  instruments,
}: {
  instruments: { id: string; name: string }[] | null;
}) => {
  return (
    <div className="flex flex-wrap gap-5">
      {instruments?.map((instrument) => (
        <Card
          key={instrument.id}
          className="basis-[calc(33.33%-1rem)] grow-0 shrink"
        >
          <CardHeader>
            <CardTitle className="text-lg">{instrument.name}</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button size="icon">
              <FolderOpen />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default InstrumentCards;
