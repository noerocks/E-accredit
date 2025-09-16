import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { getAreaById } from "@/lib/dal/area";
import { getParameterStructureById } from "@/lib/dal/parameter";
import clsx from "clsx";
import {
  ClipboardList,
  Info,
  Pen,
  PlayCircle,
  Settings,
  Trophy,
  Zap,
} from "lucide-react";

const ParameterPage = async ({
  params,
}: {
  params: Promise<{ parameterId: number }>;
}) => {
  const { parameterId } = await params;
  const parameter = await getParameterStructureById(Number(parameterId));
  const area = await getAreaById(parameter?.areaId);
  const categoryIndex = { SYSTEM: 0, IMPLEMENTATION: 1, OUTCOME: 2 };
  const [systemCount, implementationCount, outcomeCount] =
    parameter?.indicator.reduce(
      (counts, indicator) => {
        counts[categoryIndex[indicator.category]]++;
        return counts;
      },
      [0, 0, 0]
    ) || [0, 0, 0];
  const components = [
    { label: "System", count: systemCount },
    { label: "Implementation", count: implementationCount },
    { label: "Outcome/s", count: outcomeCount },
  ];
  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col gap-10">
      <p className="text-3xl">Parameter</p>
      <Card>
        <CardContent className="flex flex-col gap-5">
          <p className="text-3xl flex items-center gap-2">
            <ClipboardList />
            {`${parameter?.label}: ${parameter?.description}`}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-foreground">{`${area?.label}: ${area?.description}`}</p>
            <div>
              <Pen size={20} />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5">
        <p className="text-2xl text-foreground">Indicators</p>
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
                    <Settings />
                  ) : index === 1 ? (
                    <Zap />
                  ) : (
                    <Trophy />
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
        <Alert className="bg-blue-400/10 border border-blue-400 text-blue-400">
          <Info />
          <AlertTitle>What is a Parameter?</AlertTitle>
          <AlertDescription className="text-blue-400">
            A parameter is a specific dimension or aspect under an area of the
            instrument. It breaks down the area into more focused elements,
            helping evaluators assess compliance in a structured way. Parameters
            serve as guideposts to identify which indicators should be measured
            and provide clarity on how each area will be evaluated.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default ParameterPage;
