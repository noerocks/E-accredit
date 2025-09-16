import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { getAreaStructureById } from "@/lib/dal/area";
import { getInstrumentById } from "@/lib/dal/instrument";
import clsx from "clsx";
import { CheckCircle, ClipboardList, Info, Layers, Pen } from "lucide-react";

const AreaPage = async ({
  params,
}: {
  params: Promise<{ areaId: number }>;
}) => {
  const { areaId } = await params;
  const area = await getAreaStructureById(Number(areaId));
  const instrument = await getInstrumentById(area?.instrumentId);
  const parameterCount = area?.parameter.length;
  const indicatorCount = area?.parameter
    .map((parameter) => parameter.indicator)
    .flat().length;
  const components = [
    { label: "Parameters", count: parameterCount },
    { label: "Indicators", count: indicatorCount },
  ];

  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col gap-10">
      <p className="text-3xl">Area</p>
      <Card>
        <CardContent className="flex flex-col gap-5">
          <p className="text-3xl flex items-center gap-2">
            <Layers />
            {`${area?.label}: ${area?.description}`}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-foreground">{instrument?.name}</p>
            <div>
              <Pen size={20} />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5">
        <p className="text-2xl text-foreground">Components</p>
        <div className="flex gap-5">
          {components.map((component, index) => (
            <Card key={index} className="flex-1 rounded-md">
              <CardContent className="flex items-center gap-5">
                <div
                  className={clsx("p-4 rounded-full", {
                    "bg-green-400/30 text-green-400": index === 0,
                    "bg-yellow-400/30 text-yellow-400": index === 1,
                  })}
                >
                  {index === 0 ? <ClipboardList /> : <CheckCircle />}
                </div>
                <div>
                  <p className="text-2xl font-bold">{component.count}</p>
                  <p>{component.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Alert className="bg-blue-400/10 border border-blue-400 text-blue-400">
        <Info />
        <AlertTitle>What is an Area?</AlertTitle>
        <AlertDescription className="text-blue-400">
          An area represents a major category within an accreditation instrument
          (e.g., Faculty, Curriculum, Research). Each area is further broken
          down into parameters and indicators. Areas help organize the
          evaluation process and ensure that all key aspects of a program are
          assessed systematically.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AreaPage;
