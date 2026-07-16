import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
      alert("Login Successful!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-slate-950">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-700 to-indigo-900 items-center justify-center">

        <div className="text-center text-white px-10">

          <h1 className="text-7xl font-bold">
            NexusERP AI
          </h1>

          <p className="mt-4 text-2xl text-gray-200">
            Smart Business Management Platform
          </p>

          <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">
            Manage HR, Inventory, Finance, Sales,
            CRM and Reports from one dashboard.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="w-full max-w-lg bg-slate-1900 rounded-3xl shadow-2xl p-10">

          <h2 className="text-5xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="text-gray-400 mt-2 text-lg">
            Login to your ERP account
          </p>

          {/* Email */}

          <div className="mt-8">

            <label className="block text-gray-300 mb-2 ml-10">
              Email Address
            </label>

            <div className="flex items-center gap-3">

              <div className="w-8 flex justify-center">
                <FaEnvelope className="text-gray-400 text-xl" />
              </div>

              <input
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 rounded-xl bg-slate-800 border border-slate-700 px-4 text-white outline-none focus:border-violet-500"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label className="block text-gray-300 mb-2 ml-10">
              Password
            </label>

            <div className="flex items-center gap-3">

              <div className="w-8 flex justify-center">
                <FaLock className="text-gray-400 text-xl" />
              </div>

              <div className="relative flex-1">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 rounded-xl bg-slate-800 border border-slate-700 px-4 pr-12 text-white outline-none focus:border-violet-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

          </div>
                    {/* Remember Me */}

          <div className="flex justify-between items-center mt-6">

            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-violet-600"
              />

              Remember Me

            </label>

            <a
              href="#"
              className="text-violet-400 hover:text-violet-300"
            >
              Forgot Password?
            </a>

          </div>

          {/* Error */}

          {error && (
            <div className="mt-5 bg-red-500/20 border border-red-500 rounded-xl p-3 text-red-300">
              {error}
            </div>
          )}

          {/* Login Button */}

          <button
            onClick={handleLogin}
            className="w-full mt-8 h-14 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition text-white font-bold text-lg"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;