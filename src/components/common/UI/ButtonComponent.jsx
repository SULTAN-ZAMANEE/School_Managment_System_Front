import React ,{useState} from "react";
import { Link } from "react-router-dom";
// Button Component
const ButtonComponent = ({ 
  to='/',
  type = 'success', 
  size = 'md', 
  disabled = false, 
  loading = false,
  onClick,
  children,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn';
  const typeClass = `btn-${type}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';
  
  return (
    <button 
      className={`${baseClass} ${typeClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      )}
      <a href={to} className="btn-link text-decoration-none text-white">{children}</a>
    </button>
  );
};

export default ButtonComponent;
