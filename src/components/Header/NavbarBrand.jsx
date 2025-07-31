import React from "react";
import { Link } from "react-router-dom";


const Brand = ({ 
  to = '/',
  text = "School System", 
  textColor = "text-white", 
  fontSize = "fs-3", 
  fontWeight = "fw-bold" 
}) => {
  return (
    <div className="navbar-brand">
      <h1 className={`${fontSize} ${fontWeight} ${textColor} m-0`}>
        <a className="text-white text-decoration-none" href={to}>{text}</a>
      </h1>
    </div>
  );
};

export default Brand;