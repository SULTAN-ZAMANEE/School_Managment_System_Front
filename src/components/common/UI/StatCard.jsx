// StatCard.jsx
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const LoadingSkeleton = ({ height = "100px", className = "" }) => (
  <div className={`card shadow-sm border-0 ${className}`}>
    <div className="card-body p-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="flex-grow-1">
          <div className="bg-light rounded" style={{ height: '16px', width: '60%', marginBottom: '12px' }}></div>
          <div className="bg-light rounded" style={{ height: '24px', width: '40%', marginBottom: '8px' }}></div>
          <div className="bg-light rounded" style={{ height: '12px', width: '80%' }}></div>
        </div>
        <div className="bg-light rounded" style={{ width: '48px', height: '48px' }}></div>
      </div>
    </div>
  </div>
);

const StatCard = ({
  title = "عنوان البطاقة",
  value = 0,
  change = 0,
  icon: Icon = null,
  color = "primary",
  isLoading = false,
  isLive = false,
  liveLabel = "حي",
  direction = "rtl",
  className = ""
}) => {
  const isPositive = change > 0;

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm border-0 h-100" style={{ transition: 'all 0.3s ease' }} dir={direction}>
          <div className="card-body p-4 ">
            <div className="d-flex align-items-center justify-content-between ">
              <div className={`flex-grow-1`}>
                <p className="text-muted mb-1 small fw-medium">{title}</p>
                <h3 className="fw-bold mb-0 text-dark">
                  {typeof value === 'number' ? value.toLocaleString() : value}
                  {/* {isLive && <span className="badge bg-success ms-2 small">{liveLabel}</span>} */}
                </h3>
                <div className="d-flex align-items-center mt-2">
                  {isPositive ? (
                    <TrendingUp className="text-success me-1" size={16} />
                  ) : (
                    <TrendingDown className="text-danger me-1" size={16} />
                  )}
                  <span className={`small fw-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
                    {Math.abs(change)}%
                  </span>
                  <span className="small m-2 text-muted ms-2">من الشهر الماضي</span>
                </div>
              </div>
              {Icon && (
                <div
                  className={`rounded d-flex align-items-center justify-content-center bg-${color}`}
                  style={{ width: '48px', height: '48px' }}
                >
                  <Icon className="text-white" size={24} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;