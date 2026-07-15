import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-20 mx-auto mb-3"
          />

          <h1 className="text-3xl font-bold text-indigo-700">
            NexusERP AI
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome Back 👋
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full border rounded-lg p-3 pr-16 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-indigo-600 font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mb-6">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />

            Remember Me

          </label>

          <a
            href="#"
            className="text-indigo-600 hover:underline"
          >
            Forgot Password?
          </a>

        </div>

        {/* Button */}

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 rounded-lg font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;