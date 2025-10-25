"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
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
      color: "var(--chart-2)",
    },
  };
  const chartData = areaFolders
    .filter((area) => area.area.weight > 0)
    .map((area) => {
      const score = calculateAttentionScore(area, surveyType);
      chartConfig[area.area.label] = {
        label: area.area.label,
        color: "var(--chart-1)",
      };
      return {
        area: area.area.label,
        priority: Number(score.toFixed(2)),
      };
    })
    .sort((a, b) => b.priority - a.priority);

  return (
    <Card className="flex-1 bg-background flex flex-col">
      <CardHeader>
        <CardTitle>Critical Areas</CardTitle>
        <CardDescription>Weighted attention scores by area</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="area"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string | number): string => {
                const key = String(value);
                const label =
                  chartConfig[key as keyof typeof chartConfig]?.label ?? key;
                return String(label);
              }}
            />
            <XAxis dataKey="priority" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="priority" fill="var(--chart-2)" radius={5}>
              <LabelList
                dataKey="priority"
                position="right"
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none">
          Based on weighted priority scores of areas
        </div>
      </CardFooter>
    </Card>
  );
}
