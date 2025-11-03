import AccreditationOfficerDashboard from "@/components/admin/accreditation-officer-dashboard";
import AccreditorDashboard from "@/components/admin/accreditor-dashboard";
import AdminDashboard from "@/components/admin/admin-dashboard";
import { verifySession } from "@/lib/action/session";

const AdminHome = async () => {
  const { user } = await verifySession();
  return (
    <>
      {user.role === "ADMIN" && <AdminDashboard />}
      {user.role === "ACCREDITATION_OFFICER" && (
        <AccreditationOfficerDashboard />
      )}
      {user.role === "ACCREDITOR" && <AccreditorDashboard />}
    </>
  );
};

export default AdminHome;
