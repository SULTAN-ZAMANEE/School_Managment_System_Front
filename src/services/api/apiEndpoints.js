// src/services/api/apiEndpoints.js
const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  schools: {
    all: '/schools',
    single: (id) => `/schools/${id}`,
    create: '/schools',
    update: (id) => `/schools/${id}`,
    delete: (id) => `/schools/${id}`,
  },
  students: {
    all: '/students',
    bySchool: (schoolId) => `/schools/${schoolId}/students`,
  },
  teachers: {
    all: '/teachers',
    assign: '/teachers/assign',
  },
  // ضيف باقي الروابط حسب احتياجك
};

export default API_ENDPOINTS;
