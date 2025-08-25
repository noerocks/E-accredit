import RegisterForm from "@/components/register-form";

const RegisterPage = () => {
  return (
    <div className="min-h-svh flex justify-center items-center gap-30">
      <div className="max-w-lg">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
