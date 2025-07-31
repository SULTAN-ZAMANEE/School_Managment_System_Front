import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp } from 'lucide-react';
import StatCard from '../../components/common/UI/StatCard'; // تأكد من وجود هذا المكون في المسار الصحيح
import ContainerCard from '../../components/common/UI/ContainerCard'; // تأكد من وجود هذا المكون في المسار الصحيح
import GradeDetails from '../student/GradeDetails'; // تأكد من وجود هذا المكون في المسار الصحيح
import '../../App.css';
import UserInfoCard from '../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../components/common/UI/SidebarNavigation';
import TeacherSchedule from './TeacherSchedule';
import DataTable from '../../components/common/Layout/DataTable';
import IconButton from '../../components/Header/IconButton';
import TeacherOverview from './TeacherOverview';
import StudentsTable from './StudentsTable'; // تأكد من وجود هذا المكون في المسار الصحيح
import TeacherAssignments from './TeacherAssignments';
import StudentsGrades from './StudentsGrades';



const TeacherSidebar = ({
    // بيانات المستخدم
    UserData = {
        id: 1,
        name: 'محمد علي',
        email: 'ahmed@example.com',
        avatar: 'https://via.placeholder.com/50',
        role: 'معلم'
    },

    // الإحصائيات
    // stats = [],

    // الإشعارات
    notifications = [],

    // المواد الدراسية
    subjects = [],

    // الجدول الدراسي
    scheduleData = [],

    // بيانات المعلمين
    teachers = [],

    // التبويب النشط الافتراضي
    defaultActiveTab = "dashboard",

    // التبويبات المخصصة حسب دور المستخدم
    tabs = [
        {
            key: 'dashboard',
            icon: BarChart3,
            label: 'الرئيسية',
            title: 'لوحة التحكم الرئيسية'
        },
        {
            key: 'students',
            icon: Users,
            label: 'الطلاب',
            title: 'إدارة الطلاب'   
        },
        {
            key: 'schedule',
            icon: Calendar,
            label: 'جدولي',
            title: 'الجدول الدراسي وإدارة الحصص'
        },
        {
            key: 'assignments',
            icon: BookOpen,
            label: 'الواجبات',
            title: 'إدارة الواجبات والأنشطة'
        },
        {
            key: 'grades',
            icon: FileText,
            label: 'الدرجات',
            title: 'إدارة الدرجات'
        }
    ],

    // إعدادات الـ Sidebar
  title = "لوحة تحكم المعلم",
  subtitle = "مرحباً بك في نظام إدارة المدارس",
  logo = GraduationCap,
  width = "280px",

}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    //   const [activeTab, setActiveTab] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');


    const [teacherData] = useState({
        name: 'أحمد محمد علي',
        school: 'مدرسة النور الابتدائية',
        subjects: ['الرياضيات', 'العلوم'],
        classes: ['الصف الثالث أ', 'الصف الرابع ب', 'الصف الخامس أ']
    });

    const [stats, setStats] = useState({
        totalStudents: 85,
        totalClasses: 3,
        pendingAssignments: 12,
        messages: 7
    });

    const [students] = useState([
        ['محمد أحمد', 'الصف الثالث أ', 'حاضر', '85%', 'ممتاز'],
        ['فاطمة علي', 'الصف الثالث أ', 'حاضر', '92%', 'ممتاز'],
        ['عبدالله سالم', 'الصف الرابع ب', 'غائب', '78%', 'جيد جداً'],
        ['نور الهدى', 'الصف الخامس أ', 'حاضر', '95%', 'ممتاز']
    ]);

    const [assignments] = useState([
        ['واجب الرياضيات - الجمع والطرح', 'الصف الثالث أ', '2024-01-25', '15 طالب', 'مفتوح'],
        ['تجربة العلوم - الماء', 'الصف الرابع ب', '2024-01-23', '20 طالب', 'مغلق'],
        ['مراجعة الجبر', 'الصف الخامس أ', '2024-01-26', '5 طلاب', 'مفتوح']
    ]);

    const [schedule] = useState([
        { time: '08:00', class: 'الصف الثالث أ', subject: 'الرياضيات', room: 'غرفة 101' },
        { time: '09:00', class: 'الصف الرابع ب', subject: 'العلوم', room: 'معمل العلوم' },
        { time: '10:30', class: 'الصف الخامس أ', subject: 'الرياضيات', room: 'غرفة 203' },
        { time: '11:30', class: 'الصف الثالث أ', subject: 'العلوم', room: 'معمل العلوم' }
    ]);

    const openModal = (type, data = null) => {
        setModalType(type);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
    };

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
            case 'dashboard':
                return (
                    <TeacherOverview stats={stats} schedule={schedule} />
                );

            case 'students':
                return (
                    <StudentsTable openModal={openModal} teacherData={teacherData} students={students} onEdit={(student) => openModal('editStudent', student)} onDelete={(student) => openModal('deleteStudent', student)} />
                );

            case 'schedule':
                return <TeacherSchedule scheduleData={scheduleData} />;

            case 'assignments':
                return <TeacherAssignments openModal={openModal} assignments={assignments} />;
            case 'grades':
                return <StudentsGrades openModal={openModal} teacherData={teacherData} students={students} />;

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

    // const LogoIcon = logo;

    return (
        <div className="d-flex flex-md-column" dir="rtl">

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
                className={`position-fixed rounded position-lg-sticky top-10 end-0 bg-white shadow-lg d-lg-block `}
                style={{
                    width: width,
                    maxHeight: '100vh',
                    zIndex: 1040,
                    transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out',
                    overflowY: 'auto'
                }}
            >

                <ContainerCard className="" title={title} subtitle={subtitle}>


                    <UserInfoCard UserData= {UserData}/>

                    <SidebarNavigation menuItems={menuItems} closeSidebar={closeSidebar} />
                </ContainerCard>
            </div>

            {/* Main Content Area */}
            <div
                    className="flex-grow-1 "
                    style={{
                      marginRight: isMobile ? '0' : width
                    }}
                  >
                    <div className="container-fluid">

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

export default TeacherSidebar;