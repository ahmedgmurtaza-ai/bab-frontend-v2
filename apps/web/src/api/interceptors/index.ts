import axiosClient from "../axiosClient";

// Request interceptor to add auth token to requests
axiosClient.interceptors.request.use(
  (config) => {
    // Get token from wherever it's stored (localStorage, zustand store, etc.)
    const token = localStorage.getItem("token"); // Adjust based on your auth implementation

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

export {};
