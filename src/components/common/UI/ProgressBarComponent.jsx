import React from "react";

// Progress Bar Component
export default ProgressBarComponent = ({ 
  value = 0,
  max = 100,
  label,
  striped = false,
  animated = false,
  color = 'primary',
  height = '1rem',
  className = '',
  ...props 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={`progress ${className}`} style={{ height }} {...props}>
      <div
        className={`progress-bar bg-${color} ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''}`}
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {label && `${Math.round(percentage)}%`}
      </div>
    </div>
  );
};