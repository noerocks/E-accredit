import PendingUserTable from "@/components/admin/user/pending-user-table";
import Search from "@/components/admin/user/search";

const UsersPendingPage = () => {
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="mb-10 flex items-center justify-between">
        <div className="text-2xl">Pending Users</div>
        <Search />
      </div>
      <PendingUserTable />
    </div>
  );
};

export default UsersPendingPage;
