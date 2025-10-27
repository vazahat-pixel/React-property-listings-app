import React from "react";

const PModel = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">✕</button>
        <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-md mb-3" />
        <h2 className="text-2xl font-bold">{property.name}</h2>
        <p className="text-gray-600 mb-2">{property.type}</p>
        <p className="text-gray-800">📍 {property.location}</p>
        <p className="text-blue-600 font-semibold mt-2">₹ {property.price.toLocaleString()}</p>
        <p className="mt-3 text-gray-700">{property.description}</p>
      </div>
    </div>
  );
};

export default PModel;
