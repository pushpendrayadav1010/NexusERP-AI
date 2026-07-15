function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-700 to-indigo-900 items-center justify-center">

        <div className="text-center text-white px-12">

          <h1 className="text-6xl font-bold">
            NexusERP AI
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Smart Business Management Platform
          </p>

          <div className="mt-10 bg-white/10 p-6 rounded-xl backdrop-blur">
            Manage Production, HR, Inventory,
            Finance and Reports from one dashboard.
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center p-8">

        <div className="w-full max-w-md bg-slate-900 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="text-gray-400 mt-2">
            Login to your ERP account
          </p>

          {/* Email */}

          <div className="mt-8">

            <label className="text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="john@company.com"
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none"
            />

          </div>

          {/* Password */}

          <div className="mt-5">

            <label className="text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none"
            />

          </div>

          <button className="w-full mt-8 bg-violet-600 hover:bg-violet-700 transition p-4 rounded-xl text-white font-semibold">
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;