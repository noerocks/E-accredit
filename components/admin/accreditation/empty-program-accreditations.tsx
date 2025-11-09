import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileArchive } from "lucide-react";
import Link from "next/link";

const EmptyAccreditationPrograms = () => {
  return (
    <Card className="h-100 w-full flex flex-col items-center justify-center bg-background">
      <CardContent className="flex flex-col gap-5 items-center">
        <p className="text-xl">
          {`There are no programs accredited with this status`}
        </p>
        <p className="text-muted-foreground">
          {`When a new program gets accredited with this status, it will appear here.`}
        </p>
        <Link href="/admin/accreditation">
          <Button>
            <FileArchive />
            View Survey Visit Portfolios
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EmptyAccreditationPrograms;
