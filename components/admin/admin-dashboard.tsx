import { getProgramCount } from "@/lib/dal/program";
import { getUserCount } from "@/lib/dal/user";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getActiveAccreditationsCount } from "@/lib/dal/accreditation";
import {
  getOpenForActualSurveyCount,
  getOpenForSelfSurveyCount,
} from "@/lib/dal/survey-visit";
import { Award, icons, Landmark, SearchCheck, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const AdminDashboard = async () => {
  const userCount = await getUserCount();
  const programCount = await getProgramCount();
  const activeAccreditionsCount = await getActiveAccreditationsCount();
  const openForSelfSurveyCount = await getOpenForSelfSurveyCount();
  const openForActualSurveyCount = await getOpenForActualSurveyCount();
  const sectionCards = [
    {
      count: userCount,
      label: "Active Users",
      icon: <Users />,
      color: "text-blue-500",
    },
    { count: programCount, label: "Programs", icon: <Landmark /> },
    {
      count: activeAccreditionsCount,
      label: "Active Accreditations",
      icon: <Award />,
      color: "text-yellow-500",
    },
    {
      count: openForSelfSurveyCount,
      label: "Open Self Survey",
      icon: <SearchCheck />,
      color: "text-green-400",
    },
    {
      count: openForActualSurveyCount,
      label: "Open Actual Survey",
      icon: <SearchCheck />,
      color: "text-green-500",
    },
  ];
  return (
    <ScrollArea className="h-full p-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          {sectionCards.map((card) => (
            <Card className="flex-1" key={card.label}>
              <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">
                  {card.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className={card.color}>{card.icon}</p>
                  <p className="text-3xl">{card.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Tabs>
          <TabsList className="bg-background border">
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default AdminDashboard;
