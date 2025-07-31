import React, { useState } from "react";

// Radio Component
export default RadioBottonComponent = ({ 
  name,
  options = [],
  value,
  onChange,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={className} {...props}>
      {options.map((option, index) => (
        <div key={index} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            disabled={disabled}
          />
          <label className="form-check-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};