import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Menu, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp, Bell, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatCard from '../../components/common/UI/StatCard';
import UserInfoCard from '../../components/common/UI/UserInfoCard';
import ContainerCard from '../../components/common/UI/ContainerCard';
import SidebarNavigation from '../../components/common/UI/SidebarNavigation';
// import GradeDetails from './GradeDetails';
import StudentSchedule from './StudentSchedule';
import TeacherContact from './TeacherContact';

// مكون ChildNavbar (للطلاب يمكن أن يكون فارغ أو يحتوي على معلومات إضافية)
const ChildNavbar = ({ studentInfo }) => (
  <div className="row mb-3">
    <div className="col-12">
      <div className="alert alert-info">
        <strong>مرحباً {studentInfo?.name}</strong> - {studentInfo?.grade} - {studentInfo?.school}
      </div>
    </div>
  </div>
);

// مكون GradeDetails للدرجات
const GradeDetails = ({ subject }) => (
  <div className="col-md-4 mb-3">
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0">{subject.name}</h6>
        <span className={`badge bg-${subject.grade >= 85 ? 'success' : subject.grade >= 70 ? 'warning' : 'danger'}`}>
          {subject.grade}%
        </span>
      </div>
      <div className="card-body">
        <div className="mb-2">
          <small className="text-muted">الاختبار الأول:</small>
          <div className="progress mb-1" style={{height: '6px'}}>
            <div className="progress-bar" style={{width: `${subject.firstExam}%`}}></div>
          </div>
          <small>{subject.firstExam}%</small>
        </div>
        <div className="mb-2">
          <small className="text-muted">الاختبار الثاني:</small>
          <div className="progress mb-1" style={{height: '6px'}}>
            <div className="progress-bar bg-warning" style={{width: `${subject.secondExam}%`}}></div>
          </div>
          <small>{subject.secondExam}%</small>
        </div>
        <div className="mb-2">
          <small className="text-muted">الأنشطة:</small>
          <div className="progress mb-1" style={{height: '6px'}}>
            <div className="progress-bar bg-info" style={{width: `${subject.activities}%`}}></div>
          </div>
          <small>{subject.activities}%</small>
        </div>
      </div>
    </div>
  </div>
);

// مكون StudentSchedule للجدول الدراسي
// const StudentSchedule = ({ scheduleData }) => (
//   <ContainerCard title="الجدول الدراسي الأسبوعي">
//     <div className="table-responsive">
//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>الوقت</th>
//             <th>الأحد</th>
//             <th>الاثنين</th>
//             <th>الثلاثاء</th>
//             <th>الأربعاء</th>
//             <th>الخميس</th>
//           </tr>
//         </thead>
//         <tbody>
//           {scheduleData.map((row, index) => (
//             <tr key={index}>
//               <td className="fw-bold">{row.time}</td>
//               {row.days.map((subject, dayIndex) => (
//                 <td key={dayIndex} className={subject.bgClass}>
//                   {subject.name}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </ContainerCard>
// );

// مكون TeacherContact للتواصل مع المعلمين
// const TeacherContact = ({ teachers }) => (
//   <div className="row">
//     {teachers.map(teacher => (
//       <div key={teacher.id} className="col-md-6 mb-3">
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex align-items-center mb-3">
//               <img 
//                 src={teacher.avatar || 'https://via.placeholder.com/50'} 
//                 alt={teacher.name}
//                 className="rounded-circle me-3"
//                 width="50"
//                 height="50"
//               />
//               <div>
//                 <h6 className="mb-0">{teacher.name}</h6>
//                 <small className="text-muted">{teacher.subject}</small>
//               </div>
//             </div>
//             <div className="d-flex gap-2">
//               <button className="btn btn-primary btn-sm flex-fill">
//                 <MessageCircle size={16} className="me-1" />
//                 رسالة
//               </button>
//               <button className="btn btn-outline-primary btn-sm">
//                 <User size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// المكون الرئيسي Sidebar
const Sidebar = ({
  userData = {
    name: "أحمد محمد عبدالله",
    grade: "الصف التاسع",
    section: "شعبة أ",
    school: "مدرسة النهضة المتوسطة",
    attendance: 95,
    overall_grade: 87,
    avatar: "https://via.placeholder.com/60"
  },
  
  mockUserData = {
    id: 1,
    name: 'أحمد محمد عبدالله',
    email: 'ahmed@example.com',
    avatar: 'https://via.placeholder.com/60',
    role: 'طالب',
  },

  stats = [
    { title: "المعدل التراكمي", value: "4.2", icon: TrendingUp, color: "success" },
    { title: "الترتيب في الصف", value: "#3", icon: TrendingUp, color: "warning" },
    { title: "نسبة الحضور", value: "95%", icon: CheckCircle, color: "info" },
    { title: "الواجبات المكتملة", value: "12/15", icon: CheckCircle, color: "primary" }
  ],

  notifications = [
    {
      id: 1,
      title: "اختبار الرياضيات",
      message: "سيعقد اختبار الرياضيات يوم الأحد القادم",
      date: "منذ ساعتين",
      type: "exam",
      read: false
    },
    {
      id: 2,
      title: "درجات العلوم",
      message: "تم رفع درجات اختبار العلوم",
      date: "منذ 4 ساعات",
      type: "grade",
      read: false
    },
    {
      id: 3,
      title: "واجب اللغة العربية",
      message: "لديك واجب جديد في اللغة العربية",
      date: "أمس",
      type: "assignment",
      read: true
    }
  ],

  subjects = [
    {
      id: 1,
      name: "الرياضيات",
      grade: 87,
      firstExam: 85,
      secondExam: 90,
      activities: 88
    },
    {
      id: 2,
      name: "العلوم",
      grade: 89,
      firstExam: 90,
      secondExam: 85,
      activities: 92
    },
    {
      id: 3,
      name: "اللغة العربية",
      grade: 88,
      firstExam: 88,
      secondExam: 90,
      activities: 85
    },
    {
      id: 4,
      name: "اللغة الإنجليزية",
      grade: 85,
      firstExam: 82,
      secondExam: 88,
      activities: 85
    },
    {
      id: 5,
      name: "الدراسات الاجتماعية",
      grade: 88,
      firstExam: 90,
      secondExam: 85,
      activities: 88
    },
    {
      id: 6,
      name: "التربية الإسلامية",
      grade: 92,
      firstExam: 90,
      secondExam: 95,
      activities: 90
    }
  ],

  scheduleData = [
    {
      time: "8:00 - 8:45",
      days: [
        { name: "رياضيات", bgClass: "bg-primary text-white" },
        { name: "علوم", bgClass: "bg-success text-white" },
        { name: "عربي", bgClass: "bg-warning text-dark" },
        { name: "انجليزي", bgClass: "bg-info text-white" },
        { name: "تاريخ", bgClass: "bg-secondary text-white" }
      ]
    },
    {
      time: "8:45 - 9:30",
      days: [
        { name: "علوم", bgClass: "bg-success text-white" },
        { name: "عربي", bgClass: "bg-warning text-dark" },
        { name: "رياضيات", bgClass: "bg-primary text-white" },
        { name: "جغرافيا", bgClass: "bg-secondary text-white" },
        { name: "انجليزي", bgClass: "bg-info text-white" }
      ]
    },
    {
      time: "9:30 - 10:00",
      days: [
        { name: "استراحة", bgClass: "text-center bg-light" },
        { name: "استراحة", bgClass: "text-center bg-light" },
        { name: "استراحة", bgClass: "text-center bg-light" },
        { name: "استراحة", bgClass: "text-center bg-light" },
        { name: "استراحة", bgClass: "text-center bg-light" }
      ]
    },
    {
      time: "10:00 - 10:45",
      days: [
        { name: "عربي", bgClass: "bg-warning text-dark" },
        { name: "رياضيات", bgClass: "bg-primary text-white" },
        { name: "علوم", bgClass: "bg-success text-white" },
        { name: "انجليزي", bgClass: "bg-info text-white" },
        { name: "تربية إسلامية", bgClass: "bg-danger text-white" }
      ]
    }
  ],

  teachers = [
    {
      id: 1,
      name: "أ. محمد أحمد",
      subject: "الرياضيات",
      avatar: "https://via.placeholder.com/50"
    },
    {
      id: 2,
      name: "أ. فاطمة محمد",
      subject: "العلوم",
      avatar: "https://via.placeholder.com/50"
    },
    {
      id: 3,
      name: "أ. عبدالله علي",
      subject: "اللغة العربية",
      avatar: "https://via.placeholder.com/50"
    },
    {
      id: 4,
      name: "أ. مريم حسن",
      subject: "اللغة الإنجليزية",
      avatar: "https://via.placeholder.com/50"
    }
  ],

  title = "وزارة التعليم",
  subtitle = "نظام إدارة المدارس",
  logo = GraduationCap,
  width = "280px",
  defaultActiveTab = "overview",

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
  const [selectedChild, setSelectedChild] = useState(userData);

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
    const currentTab = tabs.find(tab => tab.key === activeTab);

    switch (activeTab) {
      case 'overview':
        return (
          <div>
            {/* الإحصائيات */}
            <div className="row mb-4">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>

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
                        {notification.type === 'exam' ? 'امتحان' : notification.type === 'assignment' ? 'واجب' : 'درجات'}
                      </span>
                    </div>
                  </div>
                ))}
              </ContainerCard>
            )}

            {/* الواجبات القادمة */}
            <ContainerCard title="الواجبات القادمة">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">تمارين الرياضيات</h6>
                    <small className="text-muted">الفصل الثالث - التفاضل</small>
                  </div>
                  <span className="badge bg-danger">غداً</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">بحث العلوم</h6>
                    <small className="text-muted">الطاقة المتجددة</small>
                  </div>
                  <span className="badge bg-warning">خلال 3 أيام</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">موضوع تعبير</h6>
                    <small className="text-muted">التلوث البيئي</small>
                  </div>
                  <span className="badge bg-info">خلال أسبوع</span>
                </div>
              </div>
            </ContainerCard>
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
        return <StudentSchedule/>;

      case 'communications':
        return <TeacherContact teachers={teachers} />;

      default:
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

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
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

      {/* Sidebar */}
      <div
        className={`position-fixed rounded bg-white shadow-lg d-lg-block`}
        style={{
          width: width,
          zIndex: 1040,
          transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <ContainerCard className="" title={title} subtitle={subtitle}>
          {/* Close button for mobile */}
          <button
            onClick={closeSidebar}
            className="btn btn-sm btn-outline-secondary position-absolute d-lg-none"
            style={{ top: '10px', left: '10px' }}
          >
            <X size={16} />
          </button>

          {/* Student Info */}
          <UserInfoCard UserData={mockUserData} />
          {/* </UserInfoCard> */}
          
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
          <ChildNavbar studentInfo={userData} />
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