
// ===============================
// src/routes/PublicRoute.jsx
// ===============================

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/common/Loading/LoadingSpinner';

const PublicRoute = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPath = getDashboardPath(user?.role);
    return <Navigate to={dashboardPath} replace />;
  }

  return <Outlet />;
};

const getDashboardPath = (role) => {
  switch (role) {
    case 'ministry':
      return '/ministry/dashboard';
    case 'admin':
      return '/admin/dashboard';
    case 'region_admin':
      return '/region/dashboard';
    case 'school_admin':
    case 'principal':
      return '/school/dashboard';
    case 'teacher':
      return '/teacher/dashboard';
    case 'student':
      return '/student/dashboard';
    case 'parent':
      return '/parent/dashboard';
    default:
      return '/dashboard';
  }
};

export default PublicRoute;