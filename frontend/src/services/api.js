import axios from "axios";

const API_URL = "https://social-media-2-0lp4.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const submitUserData = async (formData) => {
  const response = await api.post("/submissions", formData);
  return response.data;
};

export const createAdmin = async (username, password, secretKey) => {
  const response = await api.post("/admin/create", {
    username,
    password,
    secretKey,
  });
  return response.data;
};

export const loginAdmin = async (username, password) => {
  const response = await api.post("/admin/login", { username, password });
  return response.data.token;
};

export const getSubmissions = async () => {
  const response = await api.get("/admin/submissions");
  return response.data;
};

export default api;
