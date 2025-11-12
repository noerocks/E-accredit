import { getProgramCount } from "@/lib/dal/program";
import { getUserById, getUserCount } from "@/lib/dal/user";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getActiveAccreditationsCount } from "@/lib/dal/accreditation";
import {
  getOpenForActualSurveyCount,
  getOpenForSelfSurveyCount,
} from "@/lib/dal/survey-visit";
import {
  Award,
  Landmark,
  LayoutDashboard,
  Megaphone,
  SearchCheck,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { getLoginActivities } from "@/lib/dal/audit";
import { DataTable } from "./accreditation/activity-data-table";
import { columns } from "./accreditation/activity-columns";
import { verifySession } from "@/lib/action/session";

const AdminDashboard = async () => {
  const userCount = await getUserCount();
  const programCount = await getProgramCount();
  const activeAccreditionsCount = await getActiveAccreditationsCount();
  const openForSelfSurveyCount = await getOpenForSelfSurveyCount();
  const openForActualSurveyCount = await getOpenForActualSurveyCount();
  const logInActivities = await getLoginActivities();
  const { user } = await verifySession();
  const admin = await getUserById(user.id);
  const sectionCards = [
    {
      count: userCount,
      label: "Active Users",
      icon: <Users />,
      style: "text-blue-500 p-3 bg-blue-500/20 rounded-md",
    },
    {
      count: programCount,
      label: "Programs",
      icon: <Landmark />,
      style: "text-red-500 p-3 bg-red-500/20 rounded-md",
    },
    {
      count: activeAccreditionsCount,
      label: "Active Accreditations",
      icon: <Award />,
      style: "text-yellow-500 p-3 bg-yellow-500/20 rounded-md",
    },
    {
      count: openForSelfSurveyCount,
      label: "Open Self Survey",
      icon: <SearchCheck />,
      style: "text-green-400 p-3 bg-green-400/20 rounded-md",
    },
    {
      count: openForActualSurveyCount,
      label: "Open Actual Survey",
      icon: <SearchCheck />,
      style: "text-green-500 p-3 bg-green-500/20 rounded-md",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-5 m-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">Welcome to your dashboard</p>
            <p>{user.name}</p>
          </div>
          <p className="flex items-center gap-2 text-lg text-muted-foreground">
            <LayoutDashboard size={15} />
            Admin Dashboard
          </p>
        </div>
        <div className="flex gap-5">
          {sectionCards.map((card) => (
            <Card className="flex-1" key={card.label}>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                  {card.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className={card.style}>{card.icon}</p>
                  <p className="text-2xl">{card.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Tabs defaultValue="activity">
          <TabsList className="bg-background border">
            <TabsTrigger value="activity">User Session Log</TabsTrigger>
          </TabsList>
          <TabsContent value="activity">
            <Card className="bg-background">
              <CardContent>
                <DataTable columns={columns} data={logInActivities} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default AdminDashboard;
