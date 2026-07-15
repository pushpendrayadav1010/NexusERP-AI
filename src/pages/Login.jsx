import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-700 to-blue-700 text-white justify-center items-center flex-col p-12">

        <h1 className="text-5xl font-bold mb-6">
          NexusERP AI
        </h1>

        <p className="text-xl text-center max-w-md">
          Smart Business Management Platform for Inventory,
          HR, CRM, Finance and Analytics.
        </p>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center bg-white">

        <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Sign in to continue
          </p>

          <div className="space-y-5">

            <Input
              type="email"
              placeholder="Email Address"
            />

            <PasswordInput />

            <Button>
              Login
            </Button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;