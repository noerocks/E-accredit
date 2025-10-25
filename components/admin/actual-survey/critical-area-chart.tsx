"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { calculateAttentionScore } from "@/lib/utils";
import { SurveyTeamType } from "@/lib/generated/prisma";

export const description = "Bar chart of critical areas needing attention";

export function CriticalAreaChart({
  areaFolders,
  surveyType,
}: {
  areaFolders: AreaFolderDTO[];
  surveyType: SurveyTeamType;
}) {
  const chartConfig: ChartConfig = {
    priority: {
      label: "Priority",
    },
  };
  const chartData = areaFolders
    .filter((area) => area.area.weight > 0)
    .map((area, i) => {
      const score = calculateAttentionScore(area, surveyType);
      chartConfig[area.area.label] = {
        label: area.area.label,
        color: `var(--chart-${i + 1})`,
      };
      return {
        area: area.area.label,
        priority: Number(score.toFixed(2)),
        fill: `var(--chart-${i + 1})`,
      };
    })
    .sort((a, b) => b.priority - a.priority);

  return (
    <Card className="bg-background flex-1">
      <CardHeader>
        <CardTitle>Critical Areas</CardTitle>
        <CardDescription>
          Scores indicating which areas need the most attention, based on weight
          and rating
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="area"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="priority" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="priority" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none">
          Based on weighted priority scores of areas
        </div>
        <p className="text-sm text-muted-foreground">
          Priority = Area Weight × (Maximum Possible Score − Area Score)
        </p>
      </CardFooter>
    </Card>
  );
}
