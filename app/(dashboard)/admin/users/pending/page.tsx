import PendingUserTable from "@/components/admin/user/pending-user-table";

const UsersPendingPage = () => {
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="mb-10">
        <div className="text-2xl">Pending Users</div>
      </div>
      <PendingUserTable />
    </div>
  );
};

export default UsersPendingPage;
