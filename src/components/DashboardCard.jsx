import { TrendingUp } from "lucide-react";

function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <TrendingUp className="text-white" />
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;