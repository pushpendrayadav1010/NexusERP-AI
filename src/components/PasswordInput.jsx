<div className="mt-5">
  <label className="block mb-2 text-gray-300 font-medium">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full h-14 pl-12 pr-4 text-lg rounded-xl bg-slate-800 border-2 border-slate-700 text-white placeholder:text-gray-400 focus:border-violet-500 outline-none"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-white"
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
</div>