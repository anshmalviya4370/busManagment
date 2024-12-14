import axios from "axios";

// Base URL for JSONBin
const baseURL = "https://api.jsonbin.io/v3/b/675d4866e41b4d34e46539a1";

// API Key (replace with your actual key for private bins, if required)
const apiKey = "YOUR_API_KEY"; // Omit if your bin is public

// Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": apiKey, // Add if bin requires authentication
  },
});

// Function to fetch data (GET)
export const fetchData = async () => {
  try {
    const response = await axiosInstance.get();
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to create data (POST)
export const createData = async (newData) => {
  try {
    const response = await axiosInstance.post("/", newData);
    console.log("Data created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

// Function to update data (PUT)
export const updateData = async (updatedData) => {
  try {
    const response = await axiosInstance.put("/", updatedData);
    console.log("Data updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to delete data (DELETE)
export const deleteData = async () => {
  try {
    const response = await axiosInstance.delete();
    console.log("Data deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
