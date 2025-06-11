// src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-gray-600">Total Leads</h4>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-gray-600">Qualified Leads</h4>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-gray-600">WhatsApp Sent</h4>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
