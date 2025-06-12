import React from 'react';

const FilterBar = ({ statusFilter, setStatusFilter, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
      {/* Status Filter */}
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium">Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-1 rounded text-sm"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="qualified">Qualified</option>
        </select>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium">Search:</label>
        <input
          type="text"
          placeholder="Name or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-1 rounded text-sm"
        />
      </div>
    </div>
  );
};

export default FilterBar;
