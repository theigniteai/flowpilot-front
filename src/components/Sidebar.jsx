// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Upload Leads", path: "/upload" },
    { name: "Connect Facebook", path: "/facebook" },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-8">FlowPilot</h1>
      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block p-2 rounded ${
                isActive(item.path)
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
