"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Users, Calendar, Activity } from "lucide-react";

interface ActivityChartProps {
  data: { date: string; count: number }[];
  totalActions: number;
  busiestDay: string;
  mostActiveUser: string;
}

const ActivityLineChart = ({
  data,
  totalActions,
  busiestDay,
  mostActiveUser,
}: ActivityChartProps) => {
  return (
    <Card className="w-full bg-background">
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent className="h-96 flex flex-col gap-4">
        {/* Minimal insights with icons */}
        <div className="flex justify-around text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{totalActions} Actions</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>Busiest Day: {busiestDay}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span>Top User: {mostActiveUser}</span>
          </div>
        </div>

        {/* Line chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityLineChart;
