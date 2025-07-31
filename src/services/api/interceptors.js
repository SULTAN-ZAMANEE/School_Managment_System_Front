// src/services/api/interceptors.js
import apiClient from './apiClient';

export const setupInterceptors = (store) => {
  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // أو من Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // مثلاً: تسجيل خروج تلقائي
        store.dispatch({ type: 'auth/logout' });
      }
      return Promise.reject(error);
    }
  );
};
