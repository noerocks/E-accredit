import { columns } from "@/components/admin/user/columns";
import { DataTable } from "@/components/admin/user/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPendingUserCount, getUsers } from "@/lib/dal/user";
import { Plus } from "lucide-react";
import Link from "next/link";

const UsersPage = async (props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const pendingCount = await getPendingUserCount();
  const users = await getUsers();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex flex-col mb-10">
        <div className="flex items-center justify-between mb-5">
          <p className="text-3xl">Users</p>
          <div className="flex items-center gap-2">
            <Button>
              <span className="flex items-center gap-2">
                <Plus />
                New
              </span>
            </Button>
            <div className="relative">
              <Link href={"/admin/users/pending"}>
                <Button variant="outline">
                  <span className="flex items-center gap-2">Requests</span>
                </Button>
              </Link>
              {pendingCount ? (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full font-mono tabular-nums"
                >
                  {pendingCount}
                </Badge>
              ) : null}
            </div>
          </div>
        </div>
        <Card className="bg-background">
          <CardContent>
            <DataTable columns={columns} data={users} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsersPage;
