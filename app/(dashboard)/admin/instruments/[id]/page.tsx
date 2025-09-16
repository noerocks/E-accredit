import { Card, CardContent } from "@/components/ui/card";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import {
  CheckCircle,
  ClipboardList,
  Folder,
  Info,
  Layers,
  Pen,
} from "lucide-react";
import clsx from "clsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const InstrumentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const instrument = await getInstrumentStructureById(id);
  const areaCount = instrument?.area.length;
  const parameterCount = instrument?.area
    .map((area) => area.parameter.length)
    .reduce((total, areaCount) => (total += areaCount), 0);
  const indicatorCount = instrument?.area
    .map((area) => area.parameter)
    .flat()
    .map((parameter) => parameter.indicator.length)
    .reduce((total, indicatorCount) => (total += indicatorCount), 0);
  const components = [
    { label: "Areas", count: areaCount },
    { label: "Parameters", count: parameterCount },
    { label: "Indicators", count: indicatorCount },
  ];

  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col gap-10">
      <p className="text-3xl">Instrument</p>
      <Card>
        <CardContent className="flex flex-col gap-5">
          <p className="text-3xl">{instrument?.name}</p>
          <div className="flex justify-between items-center">
            <p className="text-foreground">{instrument?.accreditingBody}</p>
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
                    "bg-blue-400/30 text-blue-400": index === 0,
                    "bg-green-400/30 text-green-400": index === 1,
                    "bg-yellow-400/30 text-yellow-400": index === 2,
                  })}
                >
                  {index === 0 ? (
                    <Layers />
                  ) : index === 1 ? (
                    <ClipboardList />
                  ) : (
                    <CheckCircle />
                  )}
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
        <AlertTitle>What is an Accreditation Instrument?</AlertTitle>
        <AlertDescription className="text-blue-400">
          An instrument is the official evaluation tool provided by the
          accrediting body. It contains areas, parameters, and indicators used
          to assess the quality and compliance of academic programs. Programs
          are linked to instruments to ensure standardized evaluation and proper
          documentation for accreditation.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default InstrumentPage;
