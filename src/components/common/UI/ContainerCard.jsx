import React from "react";


const ContainerCard = ({ children, className = '', title, subtitle }) => (
  <div className={`card shadow-sm ${className}`}>
    {title && (
      <div className="card-header main-bg-color">
        <h5 className="card-title m-2">{title}</h5>
        <small className="text-white opacity-75">{subtitle}</small>
      </div>
    )}
    <div className="card-body">{children}</div>
  </div>
);

export default ContainerCard;