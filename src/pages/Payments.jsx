import React from "react";
import { FiSearch } from "react-icons/fi";

const paymentData = [
  {
    id: "PMT1001",
    patient: "John Doe",
    date: "May 24, 2025",
    amount: "$150",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "PMT1002",
    patient: "Emily Clark",
    date: "May 25, 2025",
    amount: "$200",
    status: "Pending",
    method: "Cash",
  },
  {
    id: "PMT1003",
    patient: "Michael Smith",
    date: "May 26, 2025",
    amount: "$100",
    status: "Paid",
    method: "Online",
  },
];

const Payments = () => {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by patient or ID"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-6 py-3">Payment ID</th>
              <th className="px-6 py-3">Patient</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Method</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{payment.id}</td>
                <td className="px-6 py-4">{payment.patient}</td>
                <td className="px-6 py-4">{payment.date}</td>
                <td className="px-6 py-4">{payment.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4">{payment.method}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-white hover:underline">
                    View Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
