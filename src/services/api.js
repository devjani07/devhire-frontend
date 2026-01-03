import axios from 'axios';

// ✅ Use environment variable (Vercel) OR fallback to localhost (local dev)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ======================
// Application APIs
// ======================
export const submitApplication = async (formData) => {
  const response = await api.post('/applications', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// ======================
// Admin APIs
// ======================
export const adminLogin = async (credentials) => {
  const response = await api.post('/admin/login', credentials);
  return response.data;
};

export const adminRegister = async (data) => {
  const response = await api.post('/admin/register', data);
  return response.data;
};

export const getAdminProfile = async () => {
  const response = await api.get('/admin/profile');
  return response.data;
};

export const getApplications = async (params) => {
  const response = await api.get('/admin/applications', { params });
  return response.data;
};

export const getApplication = async (id) => {
  const response = await api.get(`/admin/applications/${id}`);
  return response.data;
};

export const updateApplicationStatus = async (id, status) => {
  const response = await api.put(`/admin/applications/${id}`, { status });
  return response.data;
};

export const deleteApplication = async (id) => {
  const response = await api.delete(`/admin/applications/${id}`);
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await api.get('/admin/stats');
  return response.data;
};

export default api;
