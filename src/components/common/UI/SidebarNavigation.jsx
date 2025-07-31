import React from "react";
import '../../../App.css'

const SidebarNavigation = ({ menuItems, closeSidebar }) => {
    return(
        <nav className="mt-3">
          <div className="nav flex-column px-0">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`nav-link d-flex align-items-center p-3 rounded text-decoration-none  w-100 main-border-color ${
                  item.active ? 'bg-primary bg-opacity-10 border-end border-4' : 'text-dark bg-transparent'
                }`}
                style={{transition: 'all 0.3s'}}
                onClick={() => {
                  item.onClick();
                  if (window.innerWidth < 992) {
                    closeSidebar();
                  }
                }}
              >
                <item.icon className="mx-2" size={20} />
                <span className="fw-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
    );
}


export default SidebarNavigation;