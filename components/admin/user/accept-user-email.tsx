export function AcceptUserEmail({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div style={{ fontFamily: "Arial", fontSize: 16 }}>
      <h2>Welcome {name}!</h2>
      <p>Your account has been approved.</p>
      <p>
        Your assigned role: <b>{role}</b>
      </p>

      <p>
        Thank you,
        <br />
        E-Accredit System
      </p>
    </div>
  );
}
