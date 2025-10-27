import React, { useState } from "react";

const PropertyForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    image: "https://via.placeholder.com/400x200",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.type) return alert("Please fill all required fields");
    onAdd(formData);
    setFormData({
      name: "",
      type: "",
      price: "",
      location: "",
      description: "",
      image: "https://via.placeholder.com/400x200",
    });
    console.log("Property added:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow-md mt-8 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Property</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Retail Store">Retail Store</option>
          <option value="Plot">Plot</option>
        </select>
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" className="border p-2 rounded" />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
      </div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded w-full mt-3"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">
        Add Property
      </button>
    </form>
  );
};

export default PropertyForm;
