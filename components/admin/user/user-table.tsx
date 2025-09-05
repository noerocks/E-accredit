import { Table, TableHead, TableHeader, TableRow } from "../../ui/table";
import { getUsers } from "@/lib/dal/user";
import UserTableBody from "./user-table-body";

const UserTable = async ({ query }: { query: string | undefined }) => {
  const users = await getUsers();
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Registration Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <UserTableBody users={users} />
    </Table>
  );
};

export default UserTable;
