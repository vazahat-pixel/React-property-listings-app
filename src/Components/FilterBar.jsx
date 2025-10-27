import React from "react";

const FilterBar = ({ filterType, setFilterType, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 bg-white p-4 shadow rounded-lg mb-6">
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/2"
      />
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Retail Store">Retail Store</option>
        <option value="Plot">Plot</option>
      </select>
    </div>
  );
};

export default FilterBar;
