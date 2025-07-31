import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp } from 'lucide-react';

import '../../App.css';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import UserInfoCard from '../../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../../components/common/UI/SidebarNavigation';
import StudentSchedule from '../../student/StudentSchedule';
// import 


const UserData = {
    id: 1,
    name: 'طه سليمان',
    email: 'ahmed@example.com',
    avatar: 'https://via.placeholder.com/50',
    role: 'parent'
}

const AdminSidebar = ({
    // بيانات المستخدم
    UserData = {
        id: 1,
        name: 'محمد علي',
        email: 'ahmed@example.com',
        avatar: 'https://via.placeholder.com/50',
        role: 'parent'
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

    renderContent = () => null,

    // التبويب النشط الافتراضي
    defaultActiveTab = "dashboard",

    // التبويبات المخصصة حسب دور المستخدم
    tabs = [],

    // إعدادات الـ Sidebar
    title = "لوحة تحكم الإداريين",
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
            case 'unit-home':
                return (
                    <h1>لوحة التحكم الرئيسية</h1> 
                );

            case 'unit-schools':
                return (
                    <h1>إدارة المدارس</h1> // يمكن إضافة محتوى المدارس هنا
                );

            case 'unit-teachers':
                return (
                    <h1>إدارة المعلمين</h1> // يمكن إضافة محتوى المعلمين هنا
                );

            case 'unit-students':
                return (
                    <h1>إدارة الطلاب</h1> // يمكن إضافة محتوى الطلاب هنا
                );

            case 'unit-reports':
                return (
                    <h1>التقارير الإقليمية</h1> // يمكن إضافة محتوى التقارير هنا
                );
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

                <ContainerCard className="overflow-auto" title={title} subtitle={subtitle}>


                    <UserInfoCard >{UserData.name}</UserInfoCard>

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

export default AdminSidebar;