import React from "react";

// Textarea Component
export default TextareaComponent = ({ 
  label,
  placeholder,
  value,
  onChange,
  rows = 3,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <textarea
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};