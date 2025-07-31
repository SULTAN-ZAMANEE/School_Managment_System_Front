import React, { useState } from "react";

// Badge Component
export default BadgeComponent = ({ 
  type = 'primary',
  pill = false,
  children,
  className = '',
  ...props 
}) => {
  const pillClass = pill ? 'rounded-pill' : '';
  
  return (
    <span className={`badge bg-${type} ${pillClass} ${className}`} {...props}>
      {children}
    </span>
  );
};