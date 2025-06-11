// src/pages/UploadLeads.jsx
import React, { useState } from "react";
import Papa from "papaparse";

const UploadLeads = () => {
  const [csvData, setCsvData] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data);
        setMessage(`${result.data.length} leads parsed successfully.`);
        // Optionally send to backend here via fetch/axios
      },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Leads</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {message}
        </div>
      )}
      {csvData.length > 0 && (
        <div className="overflow-auto max-h-96">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-100 text-left">
                {Object.keys(csvData[0]).map((key) => (
                  <th key={key} className="p-2 border-b">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(0, 10).map((row, i) => (
                <tr key={i} className="border-t">
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="p-2 border-b">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">
            Showing first 10 of {csvData.length} rows.
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadLeads;
