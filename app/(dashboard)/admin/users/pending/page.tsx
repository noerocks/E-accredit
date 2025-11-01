import { columns } from "@/components/admin/user/columns";
import { DataTable } from "@/components/admin/user/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getPendingUsers } from "@/lib/dal/user";

const UsersPendingPage = async () => {
  const pendingUsers = await getPendingUsers();
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto mt-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="text-3xl">Pending Users</div>
        </div>
        <Card className="bg-background">
          <CardContent>
            <DataTable columns={columns} data={pendingUsers} />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default UsersPendingPage;
