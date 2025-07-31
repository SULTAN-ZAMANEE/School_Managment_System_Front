import React, {useState} from "react";

// Alert Component
export default AlertComponent = ({ 
  type = 'info',
  dismissible = false,
  onClose,
  children,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`alert alert-${type} ${dismissible ? 'alert-dismissible' : ''} ${className}`} {...props}>
      {children}
      {dismissible && (
        <button type="button" className="btn-close" onClick={handleClose}></button>
      )}
    </div>
  );
};
