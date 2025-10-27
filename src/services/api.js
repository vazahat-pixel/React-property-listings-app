import axios from "axios";

const API_URL = "http://localhost:5000/properties";

// Fetch all properties
export const getProperties = () => axios.get(API_URL);

// Add a new property
export const addProperty = (data) => axios.post(API_URL, data);
