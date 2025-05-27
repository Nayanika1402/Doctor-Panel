import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SettingsPage from "./pages/Settings"; 
import Payment from "./pages/Payments";


function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-hidden flex bg-gray-100 text-gray-800">
        {/* Sidebar */}
        <div className="w-64 flex min-h-screen shadow-md bg-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
