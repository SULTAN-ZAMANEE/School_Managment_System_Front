import React, {useState} from "react";

// Checkbox Component
export default CheckboxComponent = ({ 
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`form-check ${className}`}>
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
};