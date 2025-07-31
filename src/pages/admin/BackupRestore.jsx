import React, { useState, useRef, useEffect } from 'react';
import { 
  User,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Shield,
  ChevronDown,
  UserCircle,
  Lock,
  Globe,
  Moon,
  Sun,
  Languages,
  Phone,
  Mail,
  MapPin,
  Building2,
  School
} from 'lucide-react';

const BackupRestore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRole, setActiveRole] = useState('unit');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar');
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }; 

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getRoleInfo = () => {
    const roles = {
      ministry: {
        name: 'أحمد محمد الحسن',
        title: 'وزير التربية والتعليم',
        organization: 'وزارة التربية والتعليم',
        location: 'الخرطوم، السودان'
      },
      state: {
        name: 'فاطمة علي أحمد',
        title: 'مدير إدارة ولاية الخرطوم',
        organization: 'إدارة ولاية الخرطوم',
        location: 'الخرطوم، السودان'
      },
      locality: {
        name: 'محمد عثمان إبراهيم',
        title: 'مدير المحلية',
        organization: 'محلية الخرطوم',
        location: 'الخرطوم، السودان'
      },
      unit: {
        name: 'طه سليمان',
        title: 'مدير إدارة الوحدة',
        organization: 'وحدة شرق النيل',
        location: 'الخرطوم، السودان'
      },
      school: {
        name: 'عائشة محمد النور',
        title: 'مديرة المدرسة',
        organization: 'مدرسة النيل الأساسية',
        location: 'الخرطوم، السودان'
      }
    };
    return roles[activeRole] || roles.unit;
  };

  const userInfo = getRoleInfo();

  const menuItems = [
    {
      icon: UserCircle,
      label: 'الملف الشخصي',
      action: () => console.log('الملف الشخصي'),
      colorClass: 'text-primary'
    },
    {
      icon: Settings,
      label: 'الإعدادات',
      action: () => console.log('الإعدادات'),
      colorClass: 'text-secondary'
    },
    {
      icon: Bell,
      label: 'الإشعارات',
      badge: '12',
      action: () => console.log('الإشعارات'),
      colorClass: 'text-warning'
    },
    {
      icon: Shield,
      label: 'الأمان والخصوصية',
      action: () => console.log('الأمان'),
      colorClass: 'text-success'
    },
    {
      icon: HelpCircle,
      label: 'المساعدة والدعم',
      action: () => console.log('المساعدة'),
      colorClass: 'text-info'
    },
    {
      icon: Phone,
      label: 'اتصل بنا',
      action: () => console.log('اتصل بنا'),
      colorClass: 'text-dark'
    }
  ];

  return (
    <>
      {/* إضافة Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
        <style>{`
            .user-avatar {
            width: 32px;
            height: 32px;
            background-color: #0d6efd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            }
            
            .user-avatar-large {
            width: 48px;
            height: 48px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            }
            
            .dropdown-toggle-custom {
            background-color: #343a40;
            color: white;
            border: none;
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transition: background-color 0.15s ease-in-out;
            }
            
            .dropdown-toggle-custom:hover {
            background-color: #495057;
            }
            
            .dropdown-menu-custom {
            width: 320px;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            }
            
            .dropdown-header-custom {
            background: linear-gradient(to right, #0d6efd, #0056b3);
            color: white;
            border-radius: 0.5rem 0.5rem 0 0;
            padding: 1rem;
            }
            
            .dropdown-item-custom {
            padding: 0.75rem 1rem;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: background-color 0.15s ease-in-out;
            }
            
            .dropdown-item-custom:hover {
            background-color: #f8f9fa;
            }
            
            .toggle-switch {
            position: relative;
            display: inline-block;
            width: 36px;
            height: 20px;
            }
            
            .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
            }
            
            .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 20px;
            }
            
            .slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
            }
            
            input:checked + .slider {
            background-color: #0d6efd;
            }
            
            input:checked + .slider:before {
            transform: translateX(16px);
            }
            
            .chevron-rotate {
            transition: transform 0.2s ease-in-out;
            }
            
            .chevron-rotate.rotated {
            transform: rotate(180deg);
            }
            
            .feature-card {
            padding: 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid;
            text-align: center;
            }
            
            .feature-card.primary {
            background-color: #cfe2ff;
            border-color: #b6d4fe;
            }
            
            .feature-card.success {
            background-color: #d1e7dd;
            border-color: #badbcc;
            }
            
            .feature-card.info {
            background-color: #d1ecf1;
            border-color: #bee5eb;
            }
            
            .feature-card.warning {
            background-color: #fff3cd;
            border-color: #ffecb5;
            }
            
            .feature-card.secondary {
            background-color: #f8f9fa;
            border-color: #e9ecef;
            }
            
            .feature-card.danger {
            background-color: #f8d7da;
            border-color: #f5c2c7;
            }
        `}</style>

      <div className="container-fluid bg-light" style={{ minHeight: '100vh', padding: '2rem' }}>
        {/* محاكاة Header النظام */}
        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <School className="text-primary" size={32} />
                <h1 className="h4 mb-0 fw-bold text-dark">نظام إدارة المدارس</h1>
              </div>

              {/* شريط التنقل */}
              <nav className="d-none d-md-flex align-items-center gap-4">
                <a href="#" className="text-decoration-none text-secondary fw-medium">الرئيسية</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">عن الولاية</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">الخدمات</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">اتصل بنا</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">الأخبار</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">الإدارة</a>
                <a href="#" className="text-decoration-none text-secondary fw-medium">تسجيل الدخول</a>
              </nav>

              {/* قائمة المستخدم المنسدلة */}
              <div className="position-relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="dropdown-toggle-custom"
                >
                  <div className="user-avatar">
                    <User size={18} className="text-white" />
                  </div>
                  <div className="d-none d-md-block text-end">
                    <div className="small fw-medium">{userInfo.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>{userInfo.title}</div>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`chevron-rotate ${isOpen ? 'rotated' : ''}`} 
                  />
                </button>

                {/* القائمة المنسدلة */}
                {isOpen && (
                  <div className="dropdown-menu dropdown-menu-custom show position-absolute end-0 mt-2">
                    {/* معلومات المستخدم */}
                    <div className="dropdown-header-custom">
                      <div className="d-flex align-items-center gap-3">
                        <div className="user-avatar-large">
                          <User size={24} className="text-white" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold mb-1">{userInfo.name}</h6>
                          <p className="mb-1 opacity-75 small">{userInfo.title}</p>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <Building2 size={12} className="opacity-75" />
                            <span className="small opacity-75">{userInfo.organization}</span>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <MapPin size={12} className="opacity-75" />
                            <span className="small opacity-75">{userInfo.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* مبدل نوع المستخدم للاختبار */}
                    <div className="p-3 bg-light border-bottom">
                      <label className="form-label small fw-medium text-muted mb-2">نوع المستخدم (للاختبار):</label>
                      <select 
                        value={activeRole} 
                        onChange={(e) => setActiveRole(e.target.value)}
                        className="form-select form-select-sm"
                      >
                        <option value="ministry">وزير التربية والتعليم</option>
                        <option value="state">مدير إدارة الولاية</option>
                        <option value="locality">مدير المحلية</option>
                        <option value="unit">مدير إدارة الوحدة</option>
                        <option value="school">مدير المدرسة</option>
                      </select>
                    </div>

                    {/* عناصر القائمة */}
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={item.action}
                          className={`dropdown-item-custom ${item.colorClass}`}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <item.icon size={18} />
                            <span className="fw-medium">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className="badge bg-danger rounded-pill">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* إعدادات سريعة */}
                    <div className="border-top p-3 bg-light">
                      <div className="d-flex flex-column gap-3">
                        {/* تبديل الوضع المظلم */}
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                            <span className="small fw-medium">الوضع المظلم</span>
                          </div>
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={isDarkMode}
                              onChange={(e) => setIsDarkMode(e.target.checked)}
                            />
                            <span className="slider"></span>
                          </label>
                        </div>

                        {/* تغيير اللغة */}
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <Languages size={16} />
                            <span className="small fw-medium">اللغة</span>
                          </div>
                          <select 
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}
                            className="form-select form-select-sm"
                            style={{ width: 'auto' }}
                          >
                            <option value="ar">العربية</option>
                            <option value="en">English</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* تسجيل الخروج */}
                    <div className="border-top">
                      <button
                        onClick={() => console.log('تسجيل الخروج')}
                        className="dropdown-item-custom text-danger"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <LogOut size={18} />
                          <span className="fw-medium">تسجيل الخروج</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* شرح القائمة */}
        <div className="card shadow-lg">
          <div className="card-body p-5 text-center">
            <h2 className="h3 fw-bold text-dark mb-4">قائمة المستخدم المنسدلة</h2>
            <p className="text-muted mb-5">
              اضغط على اسم المستخدم في الأعلى لفتح القائمة المنسدلة
            </p>

            <div className="row g-4 mt-4">
              <div className="col-md-6 col-lg-4">
                <div className="feature-card primary">
                  <UserCircle className="text-primary mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-primary mb-2">معلومات المستخدم</h5>
                  <p className="small text-primary mb-0">عرض الاسم والمنصب والمنظمة والموقع</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="feature-card success">
                  <Settings className="text-success mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-success mb-2">الإعدادات السريعة</h5>
                  <p className="small text-success mb-0">الوضع المظلم، تغيير اللغة، وإعدادات أخرى</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="feature-card info">
                  <Bell className="text-info mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-info mb-2">الإشعارات</h5>
                  <p className="small text-info mb-0">عرض الإشعارات مع العداد</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="feature-card warning">
                  <Shield className="text-warning mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-warning mb-2">الأمان</h5>
                  <p className="small text-warning mb-0">إعدادات الأمان والخصوصية</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="feature-card secondary">
                  <HelpCircle className="text-secondary mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-secondary mb-2">المساعدة</h5>
                  <p className="small text-secondary mb-0">الدعم الفني والمساعدة</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="feature-card danger">
                  <LogOut className="text-danger mx-auto mb-3" size={32} />
                  <h5 className="fw-semibold text-danger mb-2">تسجيل الخروج</h5>
                  <p className="small text-danger mb-0">خروج آمن من النظام</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackupRestore;