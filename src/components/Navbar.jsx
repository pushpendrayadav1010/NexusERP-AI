import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 flex justify-between items-center">

      <h1 className="text-3xl text-white font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-800 rounded-xl pl-10 pr-4 py-2 text-white outline-none"
          />

        </div>

        <button className="bg-slate-800 p-3 rounded-xl text-white hover:bg-violet-600 transition">

          <Bell size={20} />

        </button>

        <div className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
          P
        </div>

      </div>

    </div>
  );
}

export default Navbar;