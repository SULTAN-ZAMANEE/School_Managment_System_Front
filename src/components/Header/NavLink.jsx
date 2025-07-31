import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



const NavLink = ({ 
  to = "/", 
  children, 
  className = "",
  isActive = false 
}) => {
  return (
    <li className="nav-item w-auto text-white">
      <a 
        className={`nav-link text-white px-3 py-2 ${isActive ? 'active' : ''} ${className}`} 
        href={to}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;