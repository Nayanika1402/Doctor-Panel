import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

// Include `path` for each nav item to ensure routing works
const navItems = [
  { icon: <FiGrid />, label: "Dashboard", path: "/" },
  { icon: <FiCalendar />, label: "Appointment", path: "/appointment" },
  { icon: <FiClipboard />, label: "Appointment History", path: "/history" },
  { icon: <FiFileText />, label: "Prescription", path: "/prescription" },
  { icon: <FiDollarSign />, label: "Payment", path: "/payment" },
  { icon: <FiBarChart2 />, label: "Stats", path: "/stats" },
  { icon: <FiSettings />, label: "Settings", path: "/settings" },
  { icon: <FiLogOut />, label: "Logout" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.label === "Logout") {
      // Handle logout logic here
      console.log("Logging out...");
    }
  };

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
        <div className="text-sm text-gray-500">MBBS, MS, FCPS</div>
      </div>

      <nav className="flex-1 w-full px-4 space-y-5">
        {navItems.map((item, index) => {
          const isActive = item.path && location.pathname === item.path;

          return (
            <div
              key={index}
              onClick={() => handleNavClick(item)}
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
