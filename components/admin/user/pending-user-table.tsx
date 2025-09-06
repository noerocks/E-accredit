import { Table, TableHead, TableHeader, TableRow } from "../../ui/table";
import { getPendingUsers } from "@/lib/dal/user";
import PendingUserTableBody from "./pending-user-table-body";
import { getProgramNamesAndID } from "@/lib/dal/program";

const PendingUserTable = async () => {
  const users = await getPendingUsers();
  const programs = await getProgramNamesAndID();
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
      <PendingUserTableBody users={users} programs={programs} />
    </Table>
  );
};

export default PendingUserTable;
