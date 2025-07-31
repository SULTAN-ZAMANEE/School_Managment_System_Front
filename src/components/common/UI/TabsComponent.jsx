import React from "react";

// Tabs Component
export default TabsComponent = ({ 
  tabs = [],
  activeTab = 0,
  onTabChange,
  className = '',
  ...props 
}) => {
  return (
    <div className={className} {...props}>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <button
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => onTabChange(index)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active show' : ''}`}
          >
            {activeTab === index && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
