// src/pages/ConnectFacebook.jsx
import React from "react";

const ConnectFacebook = () => {
  const handleRedirect = () => {
    window.open(
      "https://www.make.com/en/templates/facebook-leads-to-google-sheet-flowpilot", // replace with your Make template URL
      "_blank"
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Connect Facebook Form</h2>
      <p className="mb-4 text-gray-600">
        Connect your Facebook Lead Form with FlowPilot automation using Make.com.
      </p>
      <button
        onClick={handleRedirect}
        className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
      >
        Connect via Make.com
      </button>
    </div>
  );
};

export default ConnectFacebook;
