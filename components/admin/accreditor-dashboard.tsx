import { verifySession } from "@/lib/action/session";
import { getAllAreaFolders } from "@/lib/dal/area-folder";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { ScrollArea } from "../ui/scroll-area";
import {
  icons,
  LayoutDashboard,
  SearchCheck,
  UserRoundSearchIcon,
  UserStar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DataTable } from "./accreditation/activity-data-table";
import { columns } from "./accreditation/activity-columns";
import { getActivitiesByUserId } from "@/lib/dal/audit";

const AccreditorDashboard = async () => {
  const { user } = await verifySession();
  const areaFolders = await getAllAreaFolders();
  const surveyVisits = await getAllSurveyVisit();
  const activities = await getActivitiesByUserId(user.id);
  const areaChairAssignmentCount = areaFolders.reduce(
    (sum, area) =>
      (sum += area.areaChair.filter(
        (chair) => chair.user.id === user.id
      ).length),
    0
  );
  const coordinatorAssignmentCount = surveyVisits?.reduce(
    (sum, visit) =>
      (sum += visit.surveyTeam.filter(
        (team) => team.teamLeadId === user.id
      ).length),
    0
  );
  const assignedSelfSurveyCount = surveyVisits?.filter((visit) =>
    visit.surveyTeam.find(
      (team) =>
        team.type === "INTERNAL" &&
        team.areaChairs.some((areaChair) => areaChair.userId === user.id)
    )
  ).length;
  const assignedActualSurveyCount = surveyVisits?.filter((visit) =>
    visit.surveyTeam.find(
      (team) =>
        team.type === "EXTERNAL" &&
        (team.areaChairs.some((areaChair) => areaChair.userId === user.id) ||
          team.teamLeadId === user.id)
    )
  ).length;
  const sectionCards = [
    {
      count: areaChairAssignmentCount || 0,
      label: "Area Chair Assignment",
      icon: <UserRoundSearchIcon />,
      style: "text-blue-500 p-3 bg-blue-500/20 rounded-md",
    },
    {
      count: coordinatorAssignmentCount || 0,
      label: "Coordinator Assignment",
      icon: <UserStar />,
      style: "text-yellow-500 p-3 bg-yellow-500/20 rounded-md",
    },
    {
      count: assignedSelfSurveyCount || 0,
      label: "Assigned Self Survey",
      icon: <SearchCheck />,
      style: "text-green-500 p-3 bg-green-500/20 rounded-md",
    },
    {
      count: assignedActualSurveyCount || 0,
      label: "Assigned Actual Survey",
      icon: <SearchCheck />,
      style: "text-green-500 p-3 bg-green-500/20 rounded-md",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-5 m-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-lg">
            <p className="text-muted-foreground">Welcome to your dashboard</p>
            <p>{user.name}</p>
          </div>
          <p className="flex items-center gap-2 text-lg text-muted-foreground">
            <LayoutDashboard size={15} />
            Accreditor Dashboard
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
            <TabsTrigger value="activity">Recent Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="activity">
            <Card className="bg-background">
              <CardContent>
                <DataTable columns={columns} data={activities} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default AccreditorDashboard;
