import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { getIndicatorById } from "@/lib/dal/indicator";
import { getParameterById } from "@/lib/dal/parameter";
import clsx from "clsx";
import { CheckCircle, Info, Pen, SearchCheck, Tag } from "lucide-react";

const IndicatorPage = async ({
  params,
}: {
  params: Promise<{ indicatorId: number }>;
}) => {
  const { indicatorId } = await params;
  const indicator = await getIndicatorById(Number(indicatorId));
  const parameter = await getParameterById(indicator?.parameterId);
  const categories = {
    SYSTEM: "System",
    IMPLEMENTATION: "Implementation",
    OUTCOME: "Outcome/s",
  };
  const metadata = [
    {
      label: "Category",
      value: indicator ? categories[indicator.category] : "",
    },
    {
      label: "Evidence",
      value: indicator?.evidence,
    },
  ];

  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col gap-10">
      <p className="text-3xl">Indicator</p>
      <Card>
        <CardContent className="flex flex-col gap-5">
          <p className="text-3xl flex items-center gap-2">
            <CheckCircle />
            {`${indicator?.label}: ${indicator?.description}`}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-foreground">{`${parameter?.label}: ${parameter?.description}`}</p>
            <div>
              <Pen size={20} />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5">
        <p className="text-2xl text-foreground">Metadata</p>
        <div className="flex gap-5">
          {metadata.map((data, index) => (
            <Card key={index} className="flex-1 rounded-md">
              <CardContent className="flex items-center gap-5">
                <div
                  className={clsx("p-4 rounded-full", {
                    "bg-blue-400/30 text-blue-400": index === 0,
                    "bg-green-400/30 text-green-400": index === 1,
                  })}
                >
                  {index === 0 ? <Tag /> : <SearchCheck />}
                </div>
                <div>
                  <p className="text-2xl font-bold">{data.value}</p>
                  <p>{data.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Alert className="bg-blue-400/10 border border-blue-400 text-blue-400">
        <Info />
        <AlertTitle>What is an Indicator?</AlertTitle>
        <AlertDescription className="text-blue-400">
          Indicators specify the measurable evidence used to assess whether a
          parameter is achieved. Each indicator should clearly describe the
          expected practice, outcome, or document that demonstrates compliance
          with accreditation standards.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default IndicatorPage;
