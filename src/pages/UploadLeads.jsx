// UploadLeads.jsx
import React, { useState } from "react";
import Papa from "papaparse";

const UploadLeads = () => {
  const [csvData, setCsvData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data);
        setMessage(`${result.data.length} leads parsed. Now click Submit.`);
      },
    });
  };

  const handleSubmit = async () => {
    if (!csvData.length) return;

    try {
      setLoading(true);
      const res = await fetch("https://flowpilot-backend-z59q.onrender.com/api/leads/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leads: csvData }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage(`${data.inserted} leads uploaded successfully.`);
      } else {
        setMessage("Upload failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error uploading leads.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Leads</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {csvData.length > 0 && (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Submitting..." : "Submit to Backend"}
        </button>
      )}
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default UploadLeads;
