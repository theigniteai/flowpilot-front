import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeadRow from '../components/LeadRow';
import FilterBar from '../components/FilterBar';
import AddLeadModal from '../components/AddLeadModal';

const LeadsDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Fetch leads from API
  const fetchLeads = async () => {
    try {
      const res = await axios.get('/api/leads');
      setLeads(res.data);
    } catch (err) {
      console.error('Failed to load leads:', err);
    }
  };

  // Load leads on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...leads];

    if (statusFilter) {
      result = result.filter((lead) => lead.status === statusFilter);
    }

    if (searchQuery) {
      result = result.filter(
        (lead) =>
          lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.phone?.includes(searchQuery)
      );
    }

    setFilteredLeads(result);
  }, [leads, statusFilter, searchQuery]);

  // Delete lead
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  // Edit lead (not implemented yet)
  const handleEdit = (lead) => {
    alert('Edit modal coming soon');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Lead Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Lead
        </button>
      </div>

      <FilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-600 uppercase">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Phone</th>
              <th className="px-3 py-2">Budget</th>
              <th className="px-3 py-2">Looking For</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">WhatsApp</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-400">
                  No leads found.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <LeadRow
                  key={lead._id}
                  lead={lead}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <AddLeadModal
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            fetchLeads();
            setShowAddModal(false);
          }}
        />
      )}
    </div>
  );
};

export default LeadsDashboard;
