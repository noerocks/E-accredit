import CreateAccreditationDialog from "@/components/admin/accreditation/createAccreditationDialog";
import PortfolioCards from "@/components/admin/accreditation/portfolio-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAccreditations } from "@/lib/dal/accreditation";
import { getInstruments } from "@/lib/dal/instrument";
import { getLevels } from "@/lib/dal/levels";
import { getPrograms } from "@/lib/dal/program";
import { FileArchive } from "lucide-react";

const Accreditation = async () => {
  const programs = await getPrograms();
  const instruments = await getInstruments();
  const levels = await getLevels();
  const accreditations = await getAccreditations();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl flex items-center gap-2">
          <FileArchive />
          Survey Visit Portfolios
        </p>
        <CreateAccreditationDialog
          programs={programs}
          instruments={instruments}
          levels={levels}
        />
      </div>
      {accreditations && (
        <Tabs defaultValue={accreditations[0].program.code}>
          <TabsList className="bg-background border">
            {accreditations?.map((accreditation) => (
              <TabsTrigger
                value={accreditation.program.code}
                key={accreditation.id}
              >
                {accreditation.program.code}
              </TabsTrigger>
            ))}
          </TabsList>
          {accreditations.map((accreditation) => (
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
    </div>
  );
};

export default Accreditation;
