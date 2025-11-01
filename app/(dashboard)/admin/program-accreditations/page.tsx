import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award } from "lucide-react";

const ProgramAccreditationsPage = () => {
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10">
        <p className="text-3xl flex items-center gap-2 mb-10">
          <Award />
          Program Accreditations
        </p>
        <Tabs defaultValue="accredited">
          <TabsList className="bg-background border">
            <TabsTrigger value="accredited">Accredited Programs</TabsTrigger>
            <TabsTrigger value="toBeAccredited">
              Programs to be Accredited
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default ProgramAccreditationsPage;
