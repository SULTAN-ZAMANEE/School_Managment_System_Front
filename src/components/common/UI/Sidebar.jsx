import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Menu, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp } from 'lucide-react';
import StatCard from './StatCard'; 
import ContainerCard from './ContainerCard';
import GradeDetails from '../../../pages/student/GradeDetails';
import '../../../App.css';
import UserInfoCard from './UserInfoCard';
import SidebarNavigation from './SidebarNavigation';
import ChildNavbar from '../../../pages/parent/ChildNavbar';
import StudentSchedule from '../../../pages/student/StudentSchedule';
import TeacherContact from '../../../pages/student/TeacherContact';



const Sidebar = ({
  // بيانات الطالب
  userData = {
    name: "غير محدد",
    grade: "غير محدد",
    section: "غير محدد",
    attendance: 0,
    overall_grade: 0
  },
  // بيانات المستخدم
  mockUserData = {
    id: 1,
    name: 'محمد علي',
    email: 'ahmed@example.com',
    avatar: 'https://via.placeholder.com/50',
    role: 'ولي أمر'
  },
  // بيانات الأطفال
  mockChildren = [{
    id: 1,
    name: '',
    grade: '',
    school: '',
    avatar: 'https://via.placeholder.com/50',
    attendance: 95,
    overall_grade: 88
  }],
  // الإحصائيات
  stats = [],

  // الإشعارات
  notifications = [],

  // المواد الدراسية
  subjects = [],

  // الجدول الدراسي
  scheduleData = [],

  // بيانات المعلمين
  teachers = [],

  // إعدادات الـ Sidebar
  title = "وزارة التعليم",
  subtitle = "نظام إدارة المدارس",
  logo = GraduationCap,
  width = "280px",

  // التبويب النشط الافتراضي
  defaultActiveTab = "overview",

  // التبويبات المخصصة حسب دور المستخدم
  tabs = [
    {
      key: 'overview',
      icon: Home,
      label: 'نظرة عامة',
      title: 'نظرة عامة'
    },
    {
      key: 'subjects',
      icon: BookOpen,
      label: 'المواد الدراسية',
      title: 'المواد الدراسية'
    },
    {
      key: 'schedule',
      icon: Calendar,
      label: 'الجدول الدراسي',
      title: 'الجدول الدراسي'
    },
    {
      key: 'communications',
      icon: MessageCircle,
      label: 'التواصل',
      title: 'التواصل مع المعلمين'
    }
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [selectedChild, setSelectedChild] = useState(mockChildren);

  const menuItems = tabs.map(tab => ({
    icon: tab.icon,
    label: tab.label,
    active: activeTab === tab.key,
    onClick: () => setActiveTab(tab.key),
    key: tab.key
  }));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const renderContent = () => {
    // البحث عن التبويب الحالي للحصول على المحتوى المناسب
    const currentTab = tabs.find(tab => tab.key === activeTab);

    switch (activeTab) {
      case 'overview':
        return (
          <div >
            {/* الإشعارات */}
            {notifications.length > 0 && (
              <ContainerCard className='mb-3' title='أحدث الإشعارات'>
                {notifications.map(notification => (
                  <div key={notification.id} className={`p-3 mb-2 rounded border-start border-primary border-3 ${!notification.read ? 'bg-light' : ''}`}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 className="mb-1">{notification.title}</h6>
                        <p className="text-muted mb-1">{notification.message}</p>
                        <small className="text-muted">{notification.date}</small>
                      </div>
                      <span className={`badge bg-${notification.type === 'exam' ? 'danger' : notification.type === 'assignment' ? 'warning' : 'info'}`}>
                        {notification.type === 'exam' ? 'امتحان' : notification.type === 'assignment' ? 'واجب' : 'حضور'}
                      </span>
                    </div>
                  </div>
                ))}
              </ContainerCard>
            )}

            {/* إذا لم توجد بيانات */}
            {stats.length === 0 && notifications.length === 0 && (
              <div className="text-center text-muted mt-5">
                <p>لا توجد بيانات متاحة في {currentTab?.title || 'هذا القسم'}</p>
              </div>
            )}
          </div>
        );

      case 'subjects':
        return (
          <div className="row">
            {subjects.length > 0 ? subjects.map(subject => (
              <GradeDetails key={subject.id} subject={subject} />
            )) : (
              <div className="col-12 text-center text-muted mt-5">
                <p>لا توجد بيانات متاحة في {currentTab?.title || 'هذا القسم'}</p>
              </div>
            )}
          </div>
        );

      case 'schedule':
        return <StudentSchedule scheduleData={scheduleData} />;

      case 'communications':
        return <TeacherContact teachers={teachers} />;

      default:
        // إذا كان هناك تبويب مخصص غير معروف
        return (
          <div className="text-center text-muted mt-5">
            <p>محتوى {currentTab?.title || 'غير معروف'} غير متاح حالياً</p>
          </div>
        );
    }
  };

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 992 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const LogoIcon = logo;

  return (
    <div className="d-flex" dir="rtl">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`btn main-bg-color position-fixed d-lg-none ${isOpen ? 'd-none' : 'd-block'} text-white`}
        style={{
          top: '70px',
          right: '20px',
          zIndex: 1050,
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        aria-label="فتح القائمة"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}


      {/* Sidebar */}
      <div
        className={`position-fixed rounded position-lg-sticky top-10 bg-white shadow-lg d-lg-block `}
        style={{
          width: width,
          maxHeight: '100vh',
          zIndex: 1040,
          transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <ContainerCard className="" title={title} subtitle={subtitle}>

          {/* Student Info */}
          <UserInfoCard UserData={mockUserData} />
          {/* Navigation */}
          <SidebarNavigation menuItems={menuItems} closeSidebar={closeSidebar} />
        </ContainerCard>
      </div>

      {/* Main Content Area */}
      <div
        className="flex-grow-1 p-4"
        style={{
          marginRight: isMobile ? '0' : width
        }}
      >
        <div className="container-fluid">
          <ChildNavbar
            mockChildren={mockChildren}
            selectedChild={selectedChild}
            setSelectedChild={setSelectedChild}
          />
          <div className="row">
            <div className="col-12">
              <h2 className="my-4">
                {tabs.find(tab => tab.key === activeTab)?.title || 'غير محدد'}
              </h2>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;