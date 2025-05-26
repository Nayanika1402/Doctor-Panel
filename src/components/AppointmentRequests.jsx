import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const requests = [
  { name: "Jenny Wilson", date: "May 28, 2025", problem: "Skin Rashes", status: "Confirmed" },
  { name: "Albert Flores", date: "May 28, 2025", problem: "Hair Loss", status: "Incoming" },
  { name: "Floyd Miles", date: "May 28, 2025", problem: "Cold Sores", status: "Confirmed" },
  { name: "Marvin McKinney", date: "May 28, 2025", problem: "Pimples", status: "Cancelled" },
];

const statusStyles = {
  Confirmed: "bg-blue-100 text-blue-600",
  Incoming: "bg-yellow-100 text-yellow-600",
  Cancelled: "bg-red-100 text-red-600",
};

const AppointmentRequests = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Daily Appointment Requests
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b border-gray-200">
              <th className="pb-3">Patient Name</th>
              <th>Date In</th>
              <th>Problem</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req, idx) => (
              <tr
                key={idx}
                className="bg-gray-50 rounded-lg hover:shadow-md transition duration-200"
              >
                <td className="py-4 px-2 font-medium text-gray-800">{req.name}</td>
                <td className="text-gray-600">{req.date}</td>
                <td className="text-gray-600">{req.problem}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[req.status]}`}
                  >
                    {req.status}
                  </span>
                </td>
                <td>
                  <div className="flex justify-center gap-3">
                    <FiEdit className="text-blue-500 hover:text-blue-600 cursor-pointer transition-transform hover:scale-110" />
                    <FiTrash className="text-red-500 hover:text-red-600 cursor-pointer transition-transform hover:scale-110" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentRequests;
