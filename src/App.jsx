// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UploadLeads from "./pages/UploadLeads";
import ConnectFacebook from "./pages/ConnectFacebook";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadLeads />} />
            <Route path="/facebook" element={<ConnectFacebook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
