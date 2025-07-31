import React, { useState, useEffect } from 'react';
import {
    X,
    GraduationCap,
    Menu,
    Home,
    BookOpen,
    Calendar,
    MessageCircle,
    User,
    TrendingUp,
    Users,
    BarChart3,
    Settings,
    Bell,
    Search,
    Plus,
    FileText,
    UserCheck,
    ClipboardList,
    Megaphone,
    Eye,
    Edit,
    Trash2,
    Download
} from 'lucide-react';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import IconButton from '../../../components/Header/IconButton';
import StatCard from '../../../components/common/UI/StatCard';
import UserInfoCard from '../../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../../components/common/UI/SidebarNavigation';
import ReportsCard from './ReportsCard';
// import IconButton from 



const SchoolPrincipalSidebar = ({
    // بيانات مدير المدرسة
    userData = {
        name: "أحمد محمد علي",
        school: "مدرسة النور الابتدائية",
        role: 'principal'
    },
    
    // بيانات المستخدم
    UserData = {
        id: 1,
        name: 'أحمد محمد علي',
        email: 'principal@school.edu',
        avatar: 'https://via.placeholder.com/50',
        role: "مدير المدرسة"
    },

    // الإحصائيات
    stats = [
        { id: 1, title: 'إجمالي الطلاب', value: 450, icon: Users, color: 'primary' },
        { id: 2, title: 'إجمالي المعلمين', value: 25, icon: GraduationCap, color: 'success' },
        { id: 3, title: 'إجمالي الصفوف', value: 18, icon: Home, color: 'info' },
        { id: 4, title: 'معدل الحضور', value: '92%', icon: UserCheck, color: 'warning' }
    ],

    // الإشعارات
    notifications = [
        { id: 1, title: 'طلب إجازة معلم', message: 'المعلم أحمد محمد طلب إجازة لمدة يومين', date: '2024-01-15', type: 'request', read: false },
        { id: 2, title: 'تسجيل طالب جديد', message: 'تم تسجيل الطالب محمد علي في الصف الرابع', date: '2024-01-14', type: 'student', read: false },
        { id: 3, title: 'اجتماع أولياء الأمور', message: 'موعد اجتماع أولياء الأمور يوم الخميس القادم', date: '2024-01-13', type: 'meeting', read: true }
    ],

    // بيانات المعلمين
    teachers = [
        { id: 1, name: 'أحمد محمد علي', subject: 'الرياضيات', classes: 'الرابع، الخامس', status: 'نشط' },
        { id: 2, name: 'فاطمة أحمد', subject: 'اللغة العربية', classes: 'الأول، الثاني', status: 'نشط' },
        { id: 3, name: 'محمد عبدالله', subject: 'العلوم', classes: 'الثالث، السادس', status: 'غائب' },
        { id: 4, name: 'مريم حسن', subject: 'التربية الإسلامية', classes: 'جميع الصفوف', status: 'نشط' }
    ],

    // بيانات الطلاب
    students = [
        { id: 1, name: 'عمر أحمد محمد', class: 'الصف الرابع أ', attendance: 95, grade: 'ممتاز' },
        { id: 2, name: 'فاطمة علي حسن', class: 'الصف الخامس ب', attendance: 88, grade: 'جيد جداً' },
        { id: 3, name: 'محمد عبدالرحمن', class: 'الصف الثالث أ', attendance: 92, grade: 'ممتاز' },
        { id: 4, name: 'عائشة محمود', class: 'الصف السادس أ', attendance: 85, grade: 'جيد' }
    ],

    // إعدادات الـ Sidebar
    title = "نظام إدارة المدارس",
    subtitle = "مدرسة النور الابتدائية",
    logo = GraduationCap,
    width = "280px",

    // التبويب النشط الافتراضي
    defaultActiveTab = "overview",

    // التبويبات المخصصة لمدير المدرسة
    tabs = [
        {
            key: 'overview',
            icon: Home,
            label: 'لوحة التحكم',
            title: 'لوحة التحكم الرئيسية'
        },
        {
            key: 'teachers',
            icon: GraduationCap,
            label: 'المعلمون',
            title: 'إدارة المعلمين'
        },
        {
            key: 'students',
            icon: Users,
            label: 'الطلاب',
            title: 'إدارة الطلاب'
        },
        {
            key: 'classes',
            icon: BookOpen,
            label: 'الصفوف',
            title: 'إدارة الصفوف والشعب'
        },
        {
            key: 'schedule',
            icon: Calendar,
            label: 'الجداول',
            title: 'إدارة الجداول الدراسية'
        },
        {
            key: 'reports',
            icon: FileText,
            label: 'التقارير',
            title: 'التقارير والإحصائيات'
        },
        {
            key: 'announcements',
            icon: Megaphone,
            label: 'الإعلانات',
            title: 'الإعلانات والتواصل'
        },
        {
            key: 'settings',
            icon: Settings,
            label: 'الإعدادات',
            title: 'إعدادات المدرسة'
        }
    ]
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

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

    // الأنشطة الأخيرة
    const recentActivities = [
        { id: 1, type: 'teacher', message: 'المعلم أحمد محمد رفع فيديو تعليمي جديد', time: '10:30 ص' },
        { id: 2, type: 'student', message: 'تم تسجيل 15 طالب جديد في الصف الرابع', time: '09:15 ص' },
        { id: 3, type: 'parent', message: 'ولي أمر الطالبة فاطمة أرسل استفسار', time: '08:45 ص' },
        { id: 4, type: 'system', message: 'تم تحديث الجدول الدراسي للصف الخامس', time: '08:00 ص' }
    ];

    const renderOverview = () => (
        <div>
            {/* الإحصائيات */}
            <div className="row mb-4">
                {stats.map(stat => (
                    <StatCard key={stat.id} {...stat} />
                ))}
            </div>


            {/* الأنشطة الأخيرة */}
            <ContainerCard title="الأنشطة الأخيرة" className="mb-4">
                {recentActivities.map(activity => (
                    <div key={activity.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                        <div className="mx-3">
                            {activity.type === 'teacher' && <GraduationCap className="text-success" size={24} />}
                            {activity.type === 'student' && <Users className="text-primary" size={24} />}
                            {activity.type === 'parent' && <MessageCircle className="text-warning" size={24} />}
                            {activity.type === 'system' && <Settings className="text-info" size={24} />}
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-1">{activity.message}</p>
                            <small className="text-muted">{activity.time}</small>
                        </div>
                    </div>
                ))}
            </ContainerCard>

            {/* الإشعارات */}
            {notifications.length > 0 && (
                <ContainerCard title="أحدث الإشعارات">
                    {notifications.map(notification => (
                        <div key={notification.id} className={`p-3 mb-2 rounded border-start border-primary border-3 ${!notification.read ? 'bg-light' : ''}`}>
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <h6 className="mb-1">{notification.title}</h6>
                                    <p className="text-muted mb-1">{notification.message}</p>
                                    <small className="text-muted">{notification.date}</small>
                                </div>
                                <span className={`badge bg-${notification.type === 'request' ? 'warning' : notification.type === 'student' ? 'primary' : 'info'}`}>
                                    {notification.type === 'request' ? 'طلب' : notification.type === 'student' ? 'طالب' : 'اجتماع'}
                                </span>
                            </div>
                        </div>
                    ))}
                </ContainerCard>
            )}
        </div>
    );

    const renderTeachers = () => (
        <ContainerCard title="إدارة المعلمين">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{ maxWidth: '300px' }}>
                    <span className="input-group-text rounded-0 rounded-end">
                        <Search size={16} />
                    </span>
                    <input type="text" className="form-control rounded-0" placeholder="البحث عن معلم..." />
                </div>
                <IconButton userName='إضافة معلم جديد' icon={Plus} className='main-bg-color'/>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>اسم المعلم</th>
                            <th>التخصص</th>
                            <th>الصفوف المُدرسة</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.name}</td>
                                <td>{teacher.subject}</td>
                                <td>{teacher.classes}</td>
                                <td>
                                    <span className={`badge ${teacher.status === 'نشط' ? 'bg-success' : 'bg-danger'}`}>
                                        {teacher.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="btn-group btn-group-sm">

                                        <button className="btn btn-outline-info  rounded">
                                            <Eye size={14} />
                                        </button>
                                        <button className="btn btn-outline-warning  rounded mx-1">
                                            <Edit size={14} />
                                        </button>
                                        <button className="btn btn-outline-danger  rounded">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ContainerCard>
    );

    const renderStudents = () => (
        <ContainerCard title="إدارة الطلاب">
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text rounded-0 rounded-end">
                            <Search size={16} />
                        </span>
                        <input type="text" className="form-control rounded-0" placeholder="البحث عن طالب..." />
                    </div>
                </div>
                <div className="col-md-3">
                    <select className="form-select">
                        <option value="">جميع الصفوف</option>
                        <option value="1">الصف الأول</option>
                        <option value="2">الصف الثاني</option>
                        <option value="3">الصف الثالث</option>
                        <option value="4">الصف الرابع</option>
                        <option value="5">الصف الخامس</option>
                        <option value="6">الصف السادس</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <IconButton userName='تسجيل طالب جديد' icon={Plus} className='main-bg-color'/>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>اسم الطالب</th>
                            <th>الصف</th>
                            <th>نسبة الحضور</th>
                            <th>التقدير</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.class}</td>
                                <td>
                                    <div className="progress" style={{ height: '20px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${student.attendance}%` }}
                                            aria-valuenow={student.attendance}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {student.attendance}%
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`badge ${student.grade === 'ممتاز' ? 'bg-success' :
                                            student.grade === 'جيد جداً' ? 'bg-info' : 'bg-warning'
                                        }`}>
                                        {student.grade}
                                    </span>
                                </td>
                                <td>
                                    <div className="btn-group btn-group-sm">
                                        <button className="btn btn-outline-info mx-1 rounded">
                                            <Eye size={14} />
                                        </button>
                                        <button className="btn btn-outline-warning mx-1 rounded">
                                            <Edit size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ContainerCard>
    );

    const renderReports = () => (
        <div className="row">
            <ReportsCard icon={BarChart3} title="تقرير الأداء الأكاديمي" descryption="تقرير شامل عن أداء الطلاب والصفوف" />
            <ReportsCard icon={UserCheck} title="تقرير الحضور والغياب" descryption="إحصائيات مفصلة عن حضور الطلاب" className='text-success' varince='outline-success' />
            <ReportsCard icon={GraduationCap} title="تقرير المعلمين" descryption="تقرير عن أداء وأنشطة المعلمين" className='text-info' varince='outline-info' />
        </div>
    );

    const renderAnnouncements = () => (
        <ContainerCard title="الإعلانات والتواصل">
            <div className="d-flex justify-content-end mb-3">
                <IconButton userName='إعلان جديد' icon={Plus} className='main-bg-color'/>
            </div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="اكتب إعلانك هنا..."
                    ></textarea>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">المرسل إليه</label>
                        <select className="form-select">
                            <option value="all">جميع المستخدمين</option>
                            <option value="teachers">المعلمين فقط</option>
                            <option value="parents">أولياء الأمور فقط</option>
                            <option value="students">الطلاب فقط</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">الأولوية</label>
                        <select className="form-select">
                            <option value="normal">عادي</option>
                            <option value="important">مهم</option>
                            <option value="urgent">عاجل</option>
                        </select>
                    </div>
                    <IconButton userName='إرسال الإعلان'  icon={Megaphone} className='btn-success w-100'/>
                </div>
            </div>

            <hr />

            <h6>الإعلانات الأخيرة</h6>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">اجتماع أولياء الأمور</h6>
                        <small>منذ 3 أيام</small>
                    </div>
                    <p className="mb-1">يُرجى من جميع أولياء الأمور حضور الاجتماع الدوري يوم الخميس القادم</p>
                    <small className="text-muted">مرسل لجميع أولياء الأمور</small>
                </div>
                <div className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">تحديث الجداول الدراسية</h6>
                        <small>منذ أسبوع</small>
                    </div>
                    <p className="mb-1">تم تحديث الجداول الدراسية لجميع الصفوف. يُرجى مراجعة التحديثات</p>
                    <small className="text-muted">مرسل للمعلمين والطلاب</small>
                </div>
            </div>
        </ContainerCard>
    );

    const renderContent = () => {
        const currentTab = tabs.find(tab => tab.key === activeTab);

        switch (activeTab) {
            case 'overview':
                return renderOverview();
            case 'teachers':
                return renderTeachers();
            case 'students':
                return renderStudents();
            case 'reports':
                return renderReports();
            case 'announcements':
                return renderAnnouncements();
            case 'classes':
                return (
                    <div className="alert alert-info">
                        <h5>إدارة الصفوف</h5>
                        <p>هذا القسم قيد التطوير ويتضمن إدارة الصفوف والشعب وتوزيع الطلاب.</p>
                    </div>
                );
            case 'schedule':
                return (
                    <div className="alert alert-info">
                        <h5>إدارة الجداول الدراسية</h5>
                        <p>هذا القسم قيد التطوير ويتضمن إنشاء وتعديل الجداول الدراسية.</p>
                    </div>
                );
            case 'settings':
                return (
                    <div className="alert alert-info">
                        <h5>إعدادات المدرسة</h5>
                        <p>هذا القسم قيد التطوير ويتضمن إعدادات المدرسة العامة.</p>
                    </div>
                );
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

            {/* Sidebar */}
            <div
                className={`position-fixed rounded position-lg-sticky top-10 end-0 bg-white shadow-lg d-lg-block`}
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
                <ContainerCard title={title} subtitle={subtitle}>
                    {/* Principal Info */}
                    <UserInfoCard role={UserData.role}>{UserData.name}</UserInfoCard>

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
                    {/* Header with notifications */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>
                            {tabs.find(tab => tab.key === activeTab)?.title || 'غير محدد'}
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolPrincipalSidebar;