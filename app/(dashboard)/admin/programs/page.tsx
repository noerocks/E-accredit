import CreateProgramForm from "@/components/admin/create-program-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPrograms } from "@/lib/dal/program";

const ProgramsPage = async () => {
  const programs = await getPrograms();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10 px-4">
        <p className="text-2xl">Programs</p>
        <CreateProgramForm />
      </div>
      <div className="flex flex-wrap gap-5">
        {programs.map((program) => (
          <Card
            key={program.id}
            className="basis-[calc(25%-1rem)] grow-0 shrink"
          >
            <CardHeader>
              <CardTitle>{program.code}</CardTitle>
              <CardDescription>{program.name}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
