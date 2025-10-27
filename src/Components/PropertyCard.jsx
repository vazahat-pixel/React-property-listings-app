import React from "react";

const PropertyCard = ({ property, onView }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-semibold">{property.name}</h2>
      <p className="text-gray-600">{property.type}</p>
      <p className="text-gray-700">📍 {property.location}</p>
      <p className="text-blue-600 font-bold mt-1">₹ {property.price.toLocaleString()}</p>
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{property.description}</p>
      <button
        onClick={() => onView(property)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        View
      </button>
    </div>
  );
};

export default PropertyCard;
