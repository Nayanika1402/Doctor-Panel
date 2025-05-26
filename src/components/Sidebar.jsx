import React, { useState } from "react";
import {
  FiGrid,
  FiCalendar,
  FiClipboard,
  FiFileText,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const navItems = [
  { icon: <FiGrid />, label: "Dashboard" },
  { icon: <FiCalendar />, label: "Appointment" },
  { icon: <FiClipboard />, label: "Appointment History" },
  { icon: <FiFileText />, label: "Prescription" },
  { icon: <FiDollarSign />, label: "Payment" },
  { icon: <FiBarChart2 />, label: "Stats" },
  { icon: <FiSettings />, label: "Settings" },
  { icon: <FiLogOut />, label: "Logout" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col items-center py-6 overflow-y-auto">
      <div className="text-blue-600 text-2xl font-bold mb-6">
        Happy<span className="text-black">care</span>
      </div>

      <div className="mb-6 text-center">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="doctor"
          className="rounded-full w-24 h-24 mx-auto mb-2"
        />
        <div className="text-blue-600 font-semibold">Dr. William Collins</div>
        <div className="text-sm text-gray-500">MBBS, MS, FCFS</div>
      </div>

      <nav className="flex-1 w-full px-4 space-y-5">
        {navItems.map((item, index) => {
          const isActive = item.label === active;

          return (
            <div
              key={index}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200
                ${isActive ? "bg-blue-700 text-white" : "text-gray-700 hover:bg-blue-100"}`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
