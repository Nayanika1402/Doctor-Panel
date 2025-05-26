import React from "react";
import { FiBell } from "react-icons/fi";
import OverviewCards from "./OverviewCards";
import PatientGraph from "./PatientGraph";
import AppointmentRequests from "./AppointmentRequests";
import AppointmentSidebar from "./AppointmentSidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      <div className="xl:col-span-3 space-y-6">
        {/* Top Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search type of keywords"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
            <FiBell className="text-gray-600 text-xl" />
          </div>
        </div>

        {/* Overview Cards */}
        <OverviewCards />

        {/* Patients Overview Graph */}
        <PatientGraph />

        {/* Appointment Requests Table */}
        <AppointmentRequests />
      </div>

      {/* Sidebar with Calendar + Appointments */}
      <AppointmentSidebar />
    </div>
  );
};

export default Dashboard;
