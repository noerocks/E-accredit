import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserCheck } from "lucide-react";

const Accreditors = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <UserCheck />
          Accreditors
        </Button>
      </SheetTrigger>
      <SheetContent className="px-4">
        <SheetHeader>
          <SheetTitle>Accreditors</SheetTitle>
        </SheetHeader>
        <Card className="rounded-md bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground text-center">
              Internal Area Chair
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default Accreditors;
