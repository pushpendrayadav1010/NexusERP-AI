import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Navbar */}
        <Navbar />

        {/* Welcome */}
        <div className="mt-8">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Here's what's happening in your business today.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <DashboardCard
            title="Employees"
            value="120"
          />

          <DashboardCard
            title="Customers"
            value="540"
          />

          <DashboardCard
            title="Products"
            value="890"
          />

          <DashboardCard
            title="Revenue"
            value="₹8,50,000"
          />

        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          {/* Recent Orders */}
          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-white text-2xl font-bold">
              Recent Orders
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex justify-between text-gray-300">
                <span>Order #1001</span>
                <span className="text-green-400">Completed</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Order #1002</span>
                <span className="text-yellow-400">Pending</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Order #1003</span>
                <span className="text-red-400">Cancelled</span>
              </div>

            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-white text-2xl font-bold">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-5">

              <button className="bg-violet-600 hover:bg-violet-700 rounded-xl py-3 text-white font-semibold">
                Add Employee
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-semibold">
                Add Customer
              </button>

              <button className="bg-green-600 hover:bg-green-700 rounded-xl py-3 text-white font-semibold">
                Add Product
              </button>

              <button className="bg-orange-600 hover:bg-orange-700 rounded-xl py-3 text-white font-semibold">
                Generate Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;