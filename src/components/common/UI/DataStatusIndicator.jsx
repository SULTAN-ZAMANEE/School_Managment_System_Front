// DataStatusIndicator.jsx
import React from 'react';
import { Activity, CheckCircle, AlertCircle, Wifi, WifiOff } from 'lucide-react';

const DataStatusIndicator = ({ 
  hasLiveData = false,
  liveDataTypes = [],
  liveText = "البيانات الحية متاحة",
  staticText = "عرض البيانات التجريبية",
  title = "حالة البيانات:",
  alertType = "info", // info, success, warning, danger
  showIcon = true,
  customIcon = null,
  direction = "rtl",
  className = "mb-4"
}) => {
  const getStatusIcon = () => {
    if (customIcon) return customIcon;
    
    if (hasLiveData) {
      return <CheckCircle className="mx-1" size={16} />;
    } else {
      return <AlertCircle className="mx-1" size={16} />;
    }
  };

  const getStatusColor = () => {
    if (hasLiveData) return 'text-success';
    return 'text-warning';
  };

  const getMainIcon = () => {
    if (hasLiveData) return <Wifi className="mx-2" size={20} />;
    return <WifiOff className="mx-2" size={20} />;
  };

  const getStatusText = () => {
    if (hasLiveData) {
      if (liveDataTypes.length > 0) {
        return `${liveText} (${liveDataTypes.join(', ')})`;
      }
      return liveText;
    }
    return staticText;
  };

  return (
    <div className={`alert alert-${alertType} d-flex align-items-center ${className}`} role="alert" dir={direction}>
      {showIcon && getMainIcon()}
      <div>
        <strong>{title}</strong> 
        <span className={`${getStatusColor()} mx-2`}>
          {showIcon && getStatusIcon()}
          {getStatusText()}
        </span>
      </div>
    </div>
  );
};

export default DataStatusIndicator;