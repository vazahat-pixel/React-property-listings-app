import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties = [], onView, filterType, searchTerm }) => {
  const filtered = properties.filter((p) => {
    const matchesType = !filterType || p.type === filterType;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesType && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filtered.map((property) => (
        <PropertyCard key={property.id} property={property} onView={onView} />
      ))}
    </div>
  );
};

export default PropertyList;
