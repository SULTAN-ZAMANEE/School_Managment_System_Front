
// ===============================
// src/routes/ProtectedRoute.jsx
// ===============================

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout/Layout';
import LoadingSpinner from '../components/common/Loading/LoadingSpinner';

const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;