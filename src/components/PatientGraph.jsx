import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", Male: 500, Female: 4000 },
  { month: "Feb", Male: 2300, Female: 3000 },
  { month: "Mar", Male: 2700, Female: 3300 },
  { month: "Apr", Male: 3200, Female: 3500 },
  { month: "May", Male: 3700, Female: 2800 },
  { month: "Jun", Male: 4500, Female: 2300 },
  { month: "Jul", Male: 5100, Female: 2700 },
  { month: "Aug", Male: 5124, Female: 3000 },
  { month: "Sep", Male: 6000, Female: 3100 },
  { month: "Oct", Male: 6700, Female: 3200 },
  { month: "Nov", Male: 7100, Female: 3400 },
  { month: "Dec", Male: 7500, Female: 3600 },
];

const yearlyData = [
  { year: "2018", Male: 12000, Female: 17000 },
  { year: "2019", Male: 15000, Female: 16500 },
  { year: "2020", Male: 18000, Female: 19000 },
  { year: "2021", Male: 21000, Female: 20000 },
  { year: "2022", Male: 25000, Female: 24000 },
  { year: "2023", Male: 28000, Female: 27000 },
  { year: "2024", Male: 31000, Female: 30000 },
];

const PatientGraph = () => {
  const [view, setView] = useState("Monthly");

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const data = view === "Monthly" ? monthlyData : yearlyData;
  const xKey = view === "Monthly" ? "month" : "year";

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Patients Overview ({view})
        </h3>
        <select
          value={view}
          onChange={handleChange}
          className="text-sm border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Male" stroke="#3B82F6" strokeWidth={2} />
          <Line type="monotone" dataKey="Female" stroke="#EC4899" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientGraph;
