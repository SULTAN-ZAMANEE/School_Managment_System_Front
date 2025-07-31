import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


const IconButton = ({ 
  icon: Icon, 
  onClick = () => {}, 
  badge = null,
  className = "",
  variant = "outline-light" ,
  userName = ''
}) => {
  return (
    <button 
      className={`btn btn-${variant}  border position-relative mx-2 ${className}`}
      onClick={onClick}
    >
      <Icon size={20} />
      {badge && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {badge}
        </span>
      )}
      <span>{userName}</span>
    </button>
  );
};

export default IconButton;