import React from "react";
import { useState } from "react";


// Tooltip Component
const TooltipComponent = ({ 
  children,
  content,
  position = 'top',
  className = '',
  ...props 
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`position-relative d-inline-block ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      {...props}
    >
      {children}
      {show && (
        <div
          className={`tooltip bs-tooltip-${position} show position-absolute`}
          style={{
            [position]: position === 'top' ? '-40px' : position === 'bottom' ? '40px' : '0',
            left: position === 'left' ? '-100px' : position === 'right' ? '100px' : '50%',
            transform: position === 'top' || position === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)',
            zIndex: 1070
          }}
        >
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default TooltipComponent; 