import axios from "axios";

// Create an Axios instance with your backend base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // picks the backend from your .env
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
