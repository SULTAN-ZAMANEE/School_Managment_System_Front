// RegionCard.jsx
import React from 'react';
import { MapPin } from 'lucide-react';

const LoadingSkeleton = ({ height = "140px" }) => (
  <div className="card shadow-sm border-0 h-100">
    <div className="card-body p-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="bg-light rounded" style={{ height: '16px', width: '60%' }}></div>
        <div className="bg-light rounded" style={{ height: '16px', width: '30%' }}></div>
      </div>
      <div className="mb-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="d-flex justify-content-between align-items-center mb-2">
            <div className="bg-light rounded" style={{ height: '12px', width: '40%' }}></div>
            <div className="bg-light rounded" style={{ height: '12px', width: '30%' }}></div>
          </div>
        ))}
      </div>
      <div className="pt-3 border-top">
        <div className="d-flex align-items-center justify-content-between">
          <div className="bg-light rounded" style={{ height: '12px', width: '40%' }}></div>
          <div className="bg-light rounded" style={{ height: '8px', width: '100px' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const RegionCard = ({ 
  region = {
    name: "منطقة افتراضية",
    schools: 100,
    students: 10000,
    teachers: 500,
    performance: 85
  },
  index = 0,
  isLoading = false,
  isLive = false,
  liveLabel = "محدث",
  direction = "rtl",
  customIcon = MapPin,
  showPerformance = true,
  performanceColor = "success",
  fields = [
    { key: 'schools', label: 'المدارس' },
    { key: 'students', label: 'الطلاب' },
    { key: 'teachers', label: 'المعلمون' }
  ]
}) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const Icon = customIcon;

  return (
    <div className="card shadow-sm border-0 h-100" style={{transition: 'all 0.3s ease'}} dir={direction}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="fw-semibold mb-0 text-dark">
            {region.name}
            {isLive && <span className="badge bg-primary ms-2 small">{liveLabel}</span>}
          </h6>
          <div className="d-flex align-items-center text-muted small">
            <Icon className="me-1" size={16} />
            <span>منطقة {index + 1}</span>
          </div>
        </div>
        
        <div className="mb-3">
          {fields.map(field => (
            <div key={field.key} className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-muted">{field.label}</span>
              <span className="fw-medium">
                {typeof region[field.key] === 'number' 
                  ? region[field.key].toLocaleString() 
                  : region[field.key] || 0
                }
              </span>
            </div>
          ))}
        </div>

        {showPerformance && region.performance && (
          <div className="pt-3 border-top">
            <div className="d-flex align-items-center justify-content-between">
              <span className="small text-muted">مؤشر الأداء</span>
              <div className="d-flex align-items-center">
                <div className="progress me-2" style={{width: '80px', height: '8px'}}>
                  <div 
                    className={`progress-bar bg-${performanceColor}`}
                    style={{ width: `${region.performance}%`, transition: 'all 0.5s ease' }}
                  ></div>
                </div>
                <span className={`small fw-medium text-${performanceColor}`}>
                  {region.performance}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionCard;