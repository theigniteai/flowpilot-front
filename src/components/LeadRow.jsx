import React from 'react';

const LeadRow = ({ lead, onEdit, onDelete }) => {
  return (
    <tr className="border-b text-sm hover:bg-gray-50 transition">
      <td className="px-3 py-2">{lead.name}</td>
      <td className="px-3 py-2">{lead.email}</td>
      <td className="px-3 py-2">{lead.phone}</td>
      <td className="px-3 py-2">{lead.budget}</td>
      <td className="px-3 py-2">{lead.lookingFor}</td>
      <td className="px-3 py-2 capitalize">{lead.status}</td>
      <td className="px-3 py-2">
        {lead.whatsappSent ? (
          <span className="text-green-600 font-semibold">✔ Sent</span>
        ) : (
          <span className="text-red-500">✖</span>
        )}
      </td>
      <td className="px-3 py-2 space-x-2">
        <button
          onClick={() => onEdit(lead)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(lead._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default LeadRow;
