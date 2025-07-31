// src/routes/routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard";
import Students from "../pages/students";
import Teachers from "../pages/teachers";
import Schools from "../pages/schools";
import Regions from "../pages/regions";
import RequireAuth from "./RequireAuth"; // الحماية حسب الدور
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
         <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes with Layout */}
        <Route element={<RequireAuth allowedRoles={["admin", "teacher"]} />}>  
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/regions" element={<Regions />} />
          </Route>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
