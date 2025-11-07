import CreateAccreditationDialog from "@/components/admin/accreditation/createAccreditationDialog";
import PortfolioCards from "@/components/admin/accreditation/portfolio-cards";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { verifySession } from "@/lib/action/session";
import { getAccreditations } from "@/lib/dal/accreditation";
import { getInstrumentByName, getInstruments } from "@/lib/dal/instrument";
import { getLevels } from "@/lib/dal/levels";
import { getPrograms } from "@/lib/dal/program";
import { FileArchive } from "lucide-react";

const Accreditation = async () => {
  const { user } = await verifySession();
  const programs = await getPrograms();
  const instruments = await getInstruments();
  const levels = await getLevels();
  const accreditations = await getAccreditations();
  const filteredAccreditations = accreditations?.filter(
    (accreditation) => accreditation.surveyVisits.length > 0
  );
  const levelThreePhaseTwoInstrument = await getInstrumentByName(
    "Level III Phase 2",
    "Criterias"
  );
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10">
        <div className="flex justify-between items-center mb-10">
          <p className="text-3xl flex items-center gap-2">
            <FileArchive />
            Survey Visit Portfolios
          </p>
          <CreateAccreditationDialog
            programs={programs}
            instruments={instruments || []}
            levels={levels}
            levelThreePhaseTwoInstrument={levelThreePhaseTwoInstrument}
          />
        </div>
        <Tabs defaultValue="all">
          <TabsList className="bg-background border">
            <TabsTrigger value="all">All Portfolios</TabsTrigger>
            {user.role === "ACCREDITATION_OFFICER" && (
              <TabsTrigger value="assignments">My Assignments</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="all">
            {filteredAccreditations && (
              <Tabs defaultValue={filteredAccreditations[0].program.code}>
                <TabsList className="bg-background border">
                  {filteredAccreditations?.map((accreditation) => (
                    <TabsTrigger
                      value={accreditation.program.code}
                      key={accreditation.id}
                    >
                      {accreditation.program.code}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {filteredAccreditations.map((accreditation) => (
                  <TabsContent
                    value={accreditation.program.code}
                    key={accreditation.id}
                  >
                    <PortfolioCards
                      program={accreditation.program}
                      surveyVisits={accreditation.surveyVisits.sort(
                        (a, b) =>
                          new Date(b.createdAt).getTime() -
                          new Date(a.createdAt).getTime()
                      )}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default Accreditation;
