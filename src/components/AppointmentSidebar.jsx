import React from "react";

const appointments = [
  {
    time: "08:30 am - 10:30 am",
    title: "Nurse Visit 20",
    doctor: "Dr. Carol D. Pollack-rundle",
    color: "blue",
  },
  {
    time: "10:45 am - 11:15 am",
    title: "Annual Visit 15",
    doctor: "Dr. Donald F. Watren",
    color: "orange",
  },
  {
    time: "01:00 pm - 01:30 pm",
    title: "Established Patient 30",
    doctor: "Dr. Gina F. Durham",
    color: "green",
  },
];

const AppointmentSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
      {/* Calendar */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📅 <span>May, 2025</span>
        </h3>

        <div className="grid grid-cols-7 text-sm text-gray-500 font-medium mb-2 gap-y-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-center">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 text-sm text-gray-700 gap-y-2 gap-x-1">
          {[...Array(31).keys()].map((d) => {
            const day = d + 1;
            const isToday = day === 26;

            return (
              <div
                key={day}
                className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isToday
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "hover:bg-blue-100 hover:text-blue-600"}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Appointments */}
<div>
  <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
    🩺 <span className="underline-offset-4">Upcoming Appointments</span>
  </h3>

  <div className="space-y-4">
    {appointments.map((app, idx) => (
      <div
        key={idx}
        className={`relative pl-4 border-l-4 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 
          border-${app.color}-500`}
      >
        {/* Badge-like time */}
        <div className="text-[13px] font-medium text-gray-500 mb-1">
          <span className={`inline-block px-2 py-0.5 rounded-full bg-${app.color}-100 text-${app.color}-600`}>
            {app.time}
          </span>
        </div>

        {/* Appointment Title */}
        <div className="text-base font-semibold text-gray-800">{app.title}</div>

        {/* Doctor name with label */}
        <div className="text-xs text-gray-500 mt-1">
          <span className="font-medium text-gray-700">Doctor:</span> {app.doctor}
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  );
};

export default AppointmentSidebar;
