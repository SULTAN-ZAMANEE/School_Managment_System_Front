import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart, Globe } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import NavbarLinks from './NavbarLinks ';
import Brand from './NavbarBrand';
import IconButton from './IconButton';
import SelectLangBtn from '../common/UI/SelectLangBtn';
import NotificationBell from '../notifications/NotificationBell';
import '../../App.css';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg main-bg-color text-white sticky-top z-3 shadow">
      <div className="container-fluid px-2 px-sm-3 px-md-4 d-flex justify-content-between">

        <div className="d-flex justify-content-between w-100 w-lg-25 flex-sm-shrink-1">
          {/* Brand/Logo */}
          <div className="navbar-brand d-flex align-content-start ms-lg-5 me-lg-0">
            <Brand text='نظام إدارة المدارس'/>
          </div>

          {/* Mobile menu button */}
          <button 
            className="navbar-toggler border-0 p-1 text-white" 
            type="button" 
            onClick={toggleNavbar}
            aria-controls="navbarNav" 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
        </div>

        {/* Navigation Content */}
        <div className={`collapse d-lg-flex justify-content-between flex-md-shrink-0 navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          
          {/* Navigation Links - محاذاة مختلفة للموبايل والديسكتوب */}
          <div className="navbar-nav mb-2 mb-lg-0 mt-3 mt-lg-0">
            <div className="d-flex flex-column flex-lg-row ms-auto align-items-lg-center">
              <NavbarLinks />
            </div>
          </div>

          {/* Right side icons - تظهر في الأسفل في الموبايل */}
          <div className="navbar-nav">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0 w-100">
              
              {/* Icons for larger screens */}
              <div className="d-none d-lg-flex align-items-center">
                <div className="ms-2">
                  <SelectLangBtn/>
                </div>
                <div>
                  {/* <IconButton to='/d' icon={User} /> */}
                  {isLoggedIn &&(<NotificationBell/>)}
                </div>
                <div>
                  {/* <IconButton to='/d' icon={User} /> */}
                  <IconButton userName='الملف الشخصي' icon={User} variant='outline-light' className=''/>
                </div>
              </div>

              {/* Mobile menu items */}
              <div className="d-flex d-lg-none flex-column w-100">
                <div className="d-flex justify-content-start align-items-center py-2 border-top border-secondary mt-2 pt-3">
                  <div className="me-3">
                    <IconButton className='btn-outline-light' icon={Globe} userName='اللغة'/>
                  </div>
                  <div>
                    <IconButton icon={User} userName='الملف الشخصي' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;