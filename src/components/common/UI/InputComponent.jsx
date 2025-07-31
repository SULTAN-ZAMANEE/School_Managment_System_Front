import React, {useState} from "react";

// Input Component
const InputComponent = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  label,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="mb-3">
      {label && (
        <label className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          // onChange(e.target.value);
        }}
        disabled={disabled}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputComponent;