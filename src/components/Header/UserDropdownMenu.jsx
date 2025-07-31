import {User} from 'lucide-react';
import React,{useState} from 'react';

const UserDropdown = ({ 
  userMenuItems = [],
  userName = "user" 
}) => {

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <User size={18} className="me-1" />
        {userName}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {userMenuItems.map((item, index) => (
          <li key={index}>
            {item.divider ? (
              <hr className="dropdown-divider" />
            ) : (
              <a className="dropdown-item" href={item.href}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;