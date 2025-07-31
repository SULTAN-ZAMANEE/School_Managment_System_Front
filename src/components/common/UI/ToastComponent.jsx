import React, { useState } from "react";

// Toast Component
export default ToastComponent = ({ 
  show = false,
  onClose,
  type = 'info',
  title,
  message,
  autoHide = true,
  delay = 3000,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(show);

  React.useEffect(() => {
    if (show && autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [show, autoHide, delay, onClose]);

  if (!isVisible) return null;

  const bgClass = {
    success: 'bg-success',
    error: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info'
  }[type] || 'bg-info';

  return (
    <div className={`toast show ${className}`} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }} {...props}>
      <div className={`toast-header ${bgClass} text-white`}>
        <strong className="me-auto">{title}</strong>
        <button type="button" className="btn-close btn-close-white" onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}></button>
      </div>
      <div className="toast-body">
        {message}
      </div>
    </div>
  );
};
