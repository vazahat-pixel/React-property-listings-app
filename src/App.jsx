import React, { useEffect, useState } from "react";
import PropertyList from "./Components/PropertyList";
import PropertyForm from "./Components/PropertyForm";
import PModel from "./Components/PModel";
import FilterBar from "./Components/FilterBar";
import { addProperty, getProperties } from "./services/Api";

const App = () => {
  const [properties, setProperties] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getProperties();
    console.log(res.data);
    setProperties(res.data);
  };

  const handleAdd = async (data) => {
    await addProperty(data);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        🏡 Property Listings Dashboard
      </h1>
      <FilterBar
        filterType={filterType}
        setFilterType={setFilterType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <PropertyList
        properties={properties}
        filterType={filterType}
        searchTerm={searchTerm}
        onView={setSelectedProperty}
      />
      <PropertyForm onAdd={handleAdd} />
      <PModel property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
};

export default App;
