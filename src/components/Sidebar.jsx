function Sidebar() {
  const menu = [
    "Dashboard",
    "Employees",
    "Customers",
    "Inventory",
    "Sales",
    "Finance",
    "Reports",
    "Settings",
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen p-6">

      <h1 className="text-3xl font-bold text-violet-400">
        NexusERP AI
      </h1>

      <ul className="mt-10 space-y-3">

        {menu.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-xl px-4 py-3 hover:bg-violet-600 transition"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Sidebar;