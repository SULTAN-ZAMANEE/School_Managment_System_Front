import React, { useState } from 'react';

// Card Component
export default CardComponent = ({ 
  title,
  subtitle,
  children,
  footer,
  className = '',
  ...props 
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h5 className="card-title mb-0">{title}</h5>}
          {subtitle && <p className="card-text text-muted">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};