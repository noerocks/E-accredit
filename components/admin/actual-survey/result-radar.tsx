"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { calculateAreaMean } from "@/lib/utils";
import { SurveyTeamType } from "@/lib/generated/prisma";

export const description =
  "Radar chart comparing self and actual survey results";

const chartConfig = {
  selfSurvey: {
    label: "Self-survey",
    color: "var(--chart-1)",
  },
  actualSurvey: {
    label: "Actual-survey",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartRadarLegend({
  areaFolders,
}: {
  areaFolders: AreaFolderDTO[];
}) {
  const chartData = areaFolders.map((area) => ({
    area: area.area.label,
    selfSurvey: calculateAreaMean(area, SurveyTeamType.INTERNAL) ?? 0,
    actualSurvey: calculateAreaMean(area, SurveyTeamType.EXTERNAL) ?? 0,
  }));

  return (
    <Card className="bg-background flex-1">
      <CardHeader className="items-center pb-4">
        <CardTitle>Performance Consistency by Area</CardTitle>
        <CardDescription>
          Comparison between self-survey and actual survey ratings
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[320px]"
        >
          <RadarChart data={chartData} margin={{ top: 0, bottom: 0 }}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="area" />

            <Radar
              name="Self-survey"
              dataKey="selfSurvey"
              stroke="var(--chart-1)"
              fill="var(--chart-1)"
              fillOpacity={0.4}
            />

            <Radar
              name="Actual-survey"
              dataKey="actualSurvey"
              stroke="var(--chart-2)"
              fill="var(--chart-2)"
              fillOpacity={0.3}
            />

            <ChartLegend className="mt-6" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none">
          AACCUP Accreditation Summary
        </div>
      </CardFooter>
    </Card>
  );
}
