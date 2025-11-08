import ProgramAccreditationCards from "@/components/admin/accreditation/program-accreditations-cards";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAccreditations } from "@/lib/dal/accreditation";
import { getLevels } from "@/lib/dal/levels";
import { AccreditationDisplayDTO } from "@/lib/dto/accreditation";
import { getStatusFromLevel } from "@/lib/utils";
import { groupCollapsed } from "console";
import { Award } from "lucide-react";

const ProgramAccreditationsPage = async () => {
  const accreditations = await getAccreditations();
  const levels = await getLevels();
  const filteredAndSortedLevels =
    levels
      ?.sort((a, b) => b.rank - a.rank)
      .filter((level) => level.rank !== 2 && level.rank !== 4) || [];
  const accreditationsByLevel = accreditations.reduce(
    (group, accreditation) => {
      (group[accreditation.level.label] =
        group[accreditation.level.label] ?? []).push(
        accreditation as unknown as AccreditationDisplayDTO
      );
      return group;
    },
    {} as Record<string, AccreditationDisplayDTO[]>
  );
  console.log(accreditationsByLevel);
  console.log(filteredAndSortedLevels);
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10">
        <p className="text-3xl flex items-center gap-2 mb-10">
          <Award />
          Program Accreditations
        </p>
        <Tabs defaultValue={filteredAndSortedLevels[0].label}>
          <TabsList className="bg-background border">
            {filteredAndSortedLevels?.map((level) => (
              <TabsTrigger value={level.label} key={level.label}>
                {getStatusFromLevel(level)}
              </TabsTrigger>
            ))}
          </TabsList>
          {filteredAndSortedLevels.map((level) => (
            <TabsContent value={level.label} key={level.id}>
              {accreditationsByLevel[level.label]?.map((accreditation) => (
                <ProgramAccreditationCards
                  programAccreditation={accreditation}
                  key={accreditation.id}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default ProgramAccreditationsPage;
