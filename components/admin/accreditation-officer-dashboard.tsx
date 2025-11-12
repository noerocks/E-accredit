import { FileUp, Layers, LayoutDashboard, User, UserStar } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { getAllAreaFolders } from "@/lib/dal/area-folder";
import { verifySession } from "@/lib/action/session";
import { getAllPhaseTwoAreaFolders } from "@/lib/dal/phase-two-area-folder";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getAllFileVersions } from "@/lib/dal/file-version";
import { getActivitiesByUserId } from "@/lib/dal/audit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DataTable } from "./accreditation/activity-data-table";
import { columns } from "./accreditation/activity-columns";

const AccreditationOfficerDashboard = async () => {
  const { user } = await verifySession();
  const areaFolders = await getAllAreaFolders();
  const phaseTwoAreaFolders = await getAllPhaseTwoAreaFolders();
  const fileVersions = await getAllFileVersions();
  const activities = await getActivitiesByUserId(user.id);
  const fileUploadsCount = fileVersions.filter(
    (file) => file.uploader?.id === user.id
  ).length;
  const chairPersonAssignments = areaFolders.filter(
    (area) => area.taskForce?.chairPerson?.user.id === user.id
  );
  const chairPersonAssignmentsPhaseTwo = phaseTwoAreaFolders.filter(
    (area) => area.taskForce?.chairPerson?.user.id === user.id
  );
  const taskForceMemberAssignmentsCount = areaFolders.filter((area) =>
    area.taskForce?.taskForceMember.some(
      (member) => member.programPersonnel.user.id === user.id
    )
  ).length;
  const chairPersonAssignmentCount =
    chairPersonAssignments.length + chairPersonAssignmentsPhaseTwo.length;
  const assignedAreasCount =
    taskForceMemberAssignmentsCount + chairPersonAssignmentCount;
  const sectionCards = [
    {
      count: chairPersonAssignmentCount,
      label: "Chairperson Assignments",
      icon: <UserStar />,
      style: "text-green-500 p-3 bg-green-500/20 rounded-md",
    },
    {
      count: taskForceMemberAssignmentsCount,
      label: "Taskforce Member Assignments",
      icon: <User />,
      style: "text-yellow-500 p-3 bg-yellow-500/20 rounded-md",
    },
    {
      count: assignedAreasCount,
      label: "Assigned Areas",
      icon: <Layers />,
      style: "text-purple-500 p-3 bg-purple-500/20 rounded-md",
    },
    {
      count: fileUploadsCount,
      label: "File Uploads",
      icon: <FileUp />,
      style: "text-blue-500 p-3 bg-blue-500/20 rounded-md",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-5 m-10">
        <p className="flex items-center gap-2 text-2xl">
          <LayoutDashboard />
          Accreditation Officer Dashboard
        </p>
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

export default AccreditationOfficerDashboard;
