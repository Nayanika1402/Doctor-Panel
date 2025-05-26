import React from "react";
import { FiLock, FiSun, FiUserPlus } from "react-icons/fi";

const cards = [
  {
    icon: <FiLock className="text-2xl text-blue-600" />,
    title: "Total Patients(till Today)",
    count: "2K+",
  },
  {
    icon: <FiSun className="text-2xl text-yellow-500" />,
    title: "Today Patients",
    count: "23",
  },
  {
    icon: <FiUserPlus className="text-2xl text-green-500" />,
    title: "New Appointment",
    count: "2",
    subtext: "+201",
  },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg p-4 shadow flex flex-col gap-2"
        >
          <div>{card.icon}</div>
          <div className="text-sm text-gray-500">{card.title}</div>
          <div className="text-2xl font-bold">{card.count}</div>
          {card.subtext && <div className="text-green-500 text-sm">{card.subtext}</div>}
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
