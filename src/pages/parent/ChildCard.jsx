import React from "react";


const ChildCard = ({ child= {}, isSelected, onSelect }) => {
  return (
    <div 
      className={`card h-100 cursor-pointer ${isSelected ? 'border-dark' : ''}`}
      onClick={() => onSelect(child)}
      style={{cursor: 'pointer'}}
    >
      <div className="card-body text-center">
        <img 
          src={child.avatar} 
          alt={child.name}
          className="rounded-circle mb-3"
          width="60"
          height="60"
        />
        <h6 className="card-title">{child.name}</h6>
        <p className="card-text text-muted small">{child.grade}</p>
        <p className="card-text text-muted small">{child.school}</p>
        <div className="row text-center mt-3">
          <div className="col-6">
            <small className="text-muted">الحضور</small>
            <div className="fw-bold text-success">{child.attendance}%</div>
          </div>
          <div className="col-6">
            <small className="text-muted">المعدل</small>
            <div className="fw-bold text-primary">{child.overall_grade}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCard