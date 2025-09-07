import { getUsers } from "@/lib/dal/user";

const ProgramPersonnelList = async ({ params }: { params: { id: string } }) => {
  const users = await getUsers();
  return (
    <div>
      <p>{params.id}</p>
      {users?.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
};

export default ProgramPersonnelList;
