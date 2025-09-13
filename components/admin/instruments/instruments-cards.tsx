import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

const InstrumentCards = ({
  instruments,
}: {
  instruments: { id: string; name: string; accreditingBody: string }[] | null;
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
            <CardDescription>{instrument.accreditingBody}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Link
              href={`/admin/instruments/${instrument.id}?instrumentName=${instrument.name}`}
            >
              <Button size="icon" variant="outline">
                <FolderOpen />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default InstrumentCards;
