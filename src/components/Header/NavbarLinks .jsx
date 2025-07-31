// components/NavbarLinks.jsx
import NavItem from './NavLink';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarLinks = ({
  item = [
    { to: '/', label: 'الرئيسية' },
    { to: '/about', label: 'عن البوابة' },
    { to: '/pageNotFound', label: 'الخدمات' },
    { to: '/contact-us', label: 'اتصل بنا' },
    { to: '/pageNotFound', label: 'الأخبار'},
    { to: '/parent', label: 'الإدارة'},
    { to: '/login', label: 'تسجيل الدخول' }
  ]
}) => {
  
  
  return (
    <ul className="navbar-nav navbar-nav ms-5 mb-2 mb-lg-0 text-white">
      {item.map((link, index) => (
        <NavItem key={index} to={link.to} className="nav-link">
          {link.label}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavbarLinks;
