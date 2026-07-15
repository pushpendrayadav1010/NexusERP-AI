import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success("Login Successful 🎉");

      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 px-4">

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-6">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-20 mx-auto mb-4"
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

          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

        </div>

        {/* Password */}

        <div className="mb-3">

          <label className="block mb-2 font-semibold">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 pr-16 focus:ring-2 focus:ring-indigo-500 outline-none"
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

        {/* Remember */}

        <div className="flex justify-between items-center mb-6">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />

            Remember Me

          </label>

          <a href="#" className="text-indigo-600 hover:underline">
            Forgot Password?
          </a>

        </div>

        {/* Button */}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}

export default Login;