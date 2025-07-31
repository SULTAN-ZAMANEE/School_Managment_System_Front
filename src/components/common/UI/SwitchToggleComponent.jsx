import React from "react";

// Switch/Toggle Component
export default SwitchToggleComponent = ({ 
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`form-check form-switch ${className}`}>
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