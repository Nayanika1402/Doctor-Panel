import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 flex min-h-screen  shadow-md bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
