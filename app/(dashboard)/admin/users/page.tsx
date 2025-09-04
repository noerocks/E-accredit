import Search from "@/components/admin/user/search";
import UserTable from "@/components/admin/user/user-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPendingUserCount } from "@/lib/dal/user";
import { Plus } from "lucide-react";
import Link from "next/link";

const UsersPage = async (props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const pendingCount = await getPendingUserCount();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex items-center justify-between mb-10">
        <p className="text-2xl">Users</p>
        <div className="flex items-center gap-2">
          <Search />
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
      <UserTable query={searchParams?.query} />
    </div>
  );
};

export default UsersPage;
