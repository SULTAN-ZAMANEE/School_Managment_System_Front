// src/routes/RequireAuth.js
import { Outlet, Navigate } from "react-router-dom";

// ممكن تجيب الدور من localStorage أو context أو أي state manager
const getCurrentUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || null;
};

const RequireAuth = ({ allowedRoles }) => {
  const userRole = getCurrentUserRole();

  if (!userRole) {
    // المستخدم غير مسجل دخول
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    // المستخدم ما عندو صلاحية الوصول
    return <h1>🚫 ما عندك صلاحية للدخول</h1>;
  }

  return <Outlet />;
};

export default RequireAuth;
