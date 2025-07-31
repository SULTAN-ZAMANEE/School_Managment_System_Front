import React, { useState } from 'react';
import {
    X,
    GraduationCap,
    Menu,
    Home,
    BookOpen,
    Calendar,
    MessageCircle,
    User,
    TrendingUp
} from 'lucide-react';

// مكون بطاقة الإحصائيات
const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="col-md-3 mb-3">
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div className={`rounded-circle bg-${color} bg-opacity-10 p-3 me-3`}>
                        <Icon className={`text-${color}`} size={24} />
                    </div>
                    <div>
                        <h6 className="card-title mb-1">{title}</h6>
                        <h4 className="mb-0">{value}</h4>
                        {change && (
                            <small className={`text-${change > 0 ? 'success' : 'danger'}`}>
                                {change > 0 ? '+' : ''}{change}%
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// مكون البطاقة الحاوية
const ContainerCard = ({ title, children, className = '' }) => (
    <div className={`card border-0 shadow-sm ${className}`}>
        <div className="card-header bg-white border-0">
            <h5 className="mb-0">{title}</h5>
        </div>
        <div className="card-body">
            {children}
        </div>
    </div>
);

// مكون تفاصيل المواد
const GradeDetails = ({ subject }) => (
    <div className="col-md-6 mb-3">
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <h6 className="card-title">{subject.name}</h6>
                <div className="d-flex justify-content-between">
                    <span>الدرجة: {subject.grade}%</span>
                    <span className={`badge bg-${subject.grade >= 80 ? 'success' : subject.grade >= 60 ? 'warning' : 'danger'}`}>
                        {subject.grade >= 80 ? 'ممتاز' : subject.grade >= 60 ? 'جيد' : 'يحتاج تحسين'}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

// مكون الجدول الدراسي
const StudentSchedule = ({ scheduleData = [] }) => (
    <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
            <h5 className="mb-0">الجدول الدراسي</h5>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>اليوم</th>
                            <th>الحصة الأولى</th>
                            <th>الحصة الثانية</th>
                            <th>الحصة الثالثة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.length > 0 ? scheduleData.map((day, index) => (
                            <tr key={index}>
                                <td>{day.day}</td>
                                <td>{day.period1}</td>
                                <td>{day.period2}</td>
                                <td>{day.period3}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">لا توجد بيانات متاحة</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

// مكون التواصل مع المعلمين
const TeacherContact = ({ teachers = [] }) => (
    <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
            <h5 className="mb-0">التواصل مع المعلمين</h5>
        </div>
        <div className="card-body">
            <div className="row">
                {teachers.length > 0 ? teachers.map((teacher, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h6>{teacher.name} - {teacher.subject}</h6>
                                <p className="mb-2">آخر رسالة: {teacher.lastMessage}</p>
                                <button className="btn btn-primary btn-sm">إرسال رسالة</button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-12 text-center text-muted">
                        لا توجد معلمين متاحين للتواصل
                    </div>
                )}
            </div>
        </div>
    </div>
);

const Sidebar = ({
    // بيانات الطالب
    studentData = {
        name: "غير محدد",
        grade: "غير محدد",
        section: "غير محدد",
        attendance: 0,
        overall_grade: 0
    },

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
    defaultActiveTab = "overview"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const menuItems = [
        {
            icon: Home,
            label: 'نظرة عامة',
            active: activeTab === 'overview',
            onClick: () => setActiveTab('overview')
        },
        {
            icon: BookOpen,
            label: 'المواد الدراسية',
            active: activeTab === 'subjects',
            onClick: () => setActiveTab('subjects')
        },
        {
            icon: Calendar,
            label: 'الجدول الدراسي',
            active: activeTab === 'schedule',
            onClick: () => setActiveTab('schedule')
        },
        {
            icon: MessageCircle,
            label: 'التواصل',
            active: activeTab === 'communications',
            onClick: () => setActiveTab('communications')
        }
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const renderContent = () => {
        if (activeTab === 'overview') {
            return (
                <div>
                    {/* الإحصائيات */}
                    {stats.length > 0 && (
                        <div className="row mb-4">
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    title={stat.title}
                                    value={stat.value}
                                    icon={stat.icon}
                                    color={stat.color}
                                    change={stat.change}
                                />
                            ))}
                        </div>
                    )}

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
                            <p>لا توجد بيانات متاحة في النظرة العامة</p>
                        </div>
                    )}
                </div>
            );
        }

        if (activeTab === 'subjects') {
            return (
                <div className="row">
                    {subjects.length > 0 ? subjects.map(subject => (
                        <GradeDetails key={subject.id} subject={subject} />
                    )) : (
                        <div className="col-12 text-center text-muted mt-5">
                            <p>لا توجد مواد دراسية متاحة</p>
                        </div>
                    )}
                </div>
            );
        }

        if (activeTab === 'schedule') {
            return <StudentSchedule scheduleData={scheduleData} />;
        }

        if (activeTab === 'communications') {
            return <TeacherContact teachers={teachers} />;
        }
    };

    const LogoIcon = logo;

    return (
        <div className="d-flex" dir="rtl">
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="btn btn-primary position-fixed d-lg-none"
                style={{
                    top: '20px',
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
            {isOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
                    style={{ zIndex: 1040 }}
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`position-fixed position-lg-sticky top-0 end-0 bg-white shadow-lg d-lg-block ${isOpen ? 'd-block' : 'd-none'}`}
                style={{
                    width: width,
                    height: '100vh',
                    zIndex: 1040,
                    transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out',
                    overflowY: 'auto'
                }}
            >
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between p-4 border-bottom text-white bg-primary">
                    <div className="d-flex align-items-center">
                        <div
                            className="rounded d-flex align-items-center justify-content-center me-3 bg-white bg-opacity-20"
                            style={{ width: '32px', height: '32px' }}
                        >
                            <LogoIcon className="text-white" size={20} />
                        </div>
                        <div>
                            <h6 className="fw-bold mb-0 text-white">{title}</h6>
                            <small className="text-white opacity-75">{subtitle}</small>
                        </div>
                    </div>
                    <button
                        onClick={closeSidebar}
                        className="btn btn-sm text-white d-lg-none"
                        style={{ opacity: 0.8 }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Student Info */}
                <div className="p-3 bg-light border-bottom">
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                            <User className="text-white" size={20} />
                        </div>
                        <div>
                            <h6 className="mb-0">{studentData.name}</h6>
                            <small className="text-muted">{studentData.grade} - {studentData.section}</small>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-3 px-3">
                    <div className="nav flex-column">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`nav-link d-flex align-items-center py-3 px-3 rounded mb-1 text-decoration-none border-0 w-100 text-start ${item.active ? 'bg-primary bg-opacity-10 text-primary border-end border-primary border-4' : 'text-dark bg-transparent'
                                    }`}
                                style={{ transition: 'all 0.3s' }}
                                onClick={() => {
                                    item.onClick();
                                    if (window.innerWidth < 992) {
                                        closeSidebar();
                                    }
                                }}
                            >
                                <item.icon className="me-2" size={20} />
                                <span className="fw-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content Area */}
            <div
                className="flex-grow-1 p-4"
                style={{
                    marginRight: width,
                    '@media (max-width: 991px)': {
                        marginRight: '0'
                    }
                }}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">
                                {activeTab === 'overview' && 'نظرة عامة'}
                                {activeTab === 'subjects' && 'المواد الدراسية'}
                                {activeTab === 'schedule' && 'الجدول الدراسي'}
                                {activeTab === 'communications' && 'التواصل مع المعلمين'}
                            </h2>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// مثال على الاستخدام
const App = () => {
    // بيانات الطالب
    const studentData = {
        name: "أحمد محمد",
        grade: "الصف الخامس",
        section: "شعبة أ",
        attendance: 95,
        overall_grade: 87
    };

    // الإحصائيات
    const stats = [
        {
            title: "نسبة الحضور",
            value: `${studentData.attendance}%`,
            icon: Calendar,
            color: "success",
            change: 2
        },
        {
            title: "المعدل العام",
            value: `${studentData.overall_grade}%`,
            icon: TrendingUp,
            color: "primary",
            change: 5
        },
        {
            title: "الواجبات المكتملة",
            value: "34/36",
            icon: BookOpen,
            color: "info",
            change: -1
        },
        {
            title: "الرسائل الجديدة",
            value: "3",
            icon: MessageCircle,
            color: "warning"
        }
    ];

    // الإشعارات
    const notifications = [
        {
            id: 1,
            title: "امتحان الرياضيات",
            message: "امتحان الرياضيات يوم الأحد القادم",
            date: "منذ ساعتين",
            type: "exam",
            read: false
        },
        {
            id: 2,
            title: "واجب العلوم",
            message: "يجب تسليم واجب العلوم غداً",
            date: "منذ يوم",
            type: "assignment",
            read: true
        }
    ];

    // المواد الدراسية
    const subjects = [
        { id: 1, name: "الرياضيات", grade: 85 },
        { id: 2, name: "العلوم", grade: 90 },
        { id: 3, name: "العربية", grade: 78 },
        { id: 4, name: "الإنجليزية", grade: 82 }
    ];

    // الجدول الدراسي
    const scheduleData = [
        { day: "الأحد", period1: "الرياضيات", period2: "العربية", period3: "العلوم" },
        { day: "الاثنين", period1: "الإنجليزية", period2: "التاريخ", period3: "الرياضة" },
        { day: "الثلاثاء", period1: "العلوم", period2: "الرياضيات", period3: "الفنون" }
    ];

    // المعلمين
    const teachers = [
        {
            name: "أ. محمد أحمد",
            subject: "الرياضيات",
            lastMessage: "منذ يومين"
        },
        {
            name: "أ. فاطمة علي",
            subject: "العربية",
            lastMessage: "منذ أسبوع"
        }
    ];

    return (
        <Sidebar
            studentData={studentData}
            stats={stats}
            notifications={notifications}
            subjects={subjects}
            scheduleData={scheduleData}
            teachers={teachers}
            title="وزارة التعليم"
            subtitle="نظام إدارة المدارس"
            defaultActiveTab="overview"
        />
    );
};

export default Sidebar;