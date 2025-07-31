import React, { useState, useEffect } from 'react';
import { Bell, User, Calendar, BookOpen, TrendingUp, MessageCircle, Home, Download, Eye } from 'lucide-react';
import '../../App.css'
import NotificationBell from '../../components/notifications/NotificationBell';
import IconButton from '../../components/Header/IconButton';
import Sidebar from '../../components/common/UI/Sidebar';



// بيانات وهمية للأطفال
const mockChildren = [
  {
    id: 1,
    name: 'أحمد محمد علي',
    grade: 'الصف الثالث الابتدائي',
    school: 'مدرسة النور الابتدائية',
    avatar: 'https://via.placeholder.com/50',
    attendance: 95,
    overall_grade: 88
  },
  {
    id: 2,
    name: 'فاطمة محمد علي',
    grade: 'الصف الخامس الابتدائي',
    school: 'مدرسة النور الابتدائية',
    avatar: 'https://via.placeholder.com/50',
    attendance: 92,
    overall_grade: 94
  }
];

// بيانات المواد
const mockSubjects = [
  {
    id: 1,
    name: 'الرياضيات',
    teacher: 'أ. سعد أحمد',
    firstPeriod: { score: 85, total: 100, status: 'passed' },
    secondPeriod: { score: 88, total: 100, status: 'passed' },
    assignments: 12,
    completed: 10,
    color: 'primary'
  },
  {
    id: 2,
    name: 'اللغة العربية',
    teacher: 'أ. نور محمد',
    firstPeriod: { score: 92, total: 100, status: 'passed' },
    secondPeriod: { score: 89, total: 100, status: 'passed' },
    assignments: 8,
    completed: 8,
    color: 'success'
  },
  {
    id: 3,
    name: 'العلوم',
    teacher: 'أ. علي حسن',
    firstPeriod: { score: 78, total: 100, status: 'passed' },
    secondPeriod: { score: 82, total: 100, status: 'passed' },
    assignments: 10,
    completed: 8,
    color: 'info'
  },
  {
    id: 4,
    name: 'التربية الإسلامية',
    teacher: 'أ. محمد عبدالله',
    firstPeriod: { score: 95, total: 100, status: 'passed' },
    secondPeriod: { score: 93, total: 100, status: 'passed' },
    assignments: 6,
    completed: 6,
    color: 'warning'
  }
];

// الإشعارات
const mockNotifications = [
  {
    id: 1,
    title: 'اختبار الرياضيات القادم',
    message: 'يوجد اختبار في الرياضيات يوم الأحد القادم في الوحدة الثالثة',
    date: '2024-01-15',
    type: 'exam',
    read: false
  },
  {
    id: 2,
    title: 'واجب العلوم',
    message: 'تم تكليف الطالب بواجب في العلوم، آخر موعد للتسليم الخميس',
    date: '2024-01-14',
    type: 'assignment',
    read: false
  },
  {
    id: 3,
    title: 'غياب اليوم',
    message: 'تم تسجيل غياب للطالب في الحصة الثانية اليوم',
    date: '2024-01-13',
    type: 'attendance',
    read: true
  }
];



// المكون الرئيسي
const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState(mockChildren);
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    {
      key: 'overview',
      icon: Home,
      label: 'الرئيسية',
      title: 'لوحة التحكم الرئيسية'
    },
    {
      key: 'subjects',
      icon: BookOpen,
      label: 'مواد الدراسة',
      title: 'المواد الدراسية الخاصة بي'
    },
    {
      key: 'schedule',
      icon: Calendar,
      label: 'جدولي',
      title: 'الجدول الدراسي الأسبوعي'
    },
    {
      key: 'communications',
      icon: MessageCircle,
      label: 'الرسائل',
      title: 'التواصل مع المعلمين'
    }
  ];

  return (
    <>
      <div className="min-vh-100 bg-light d-lg-flex pt-3 flex-column">
        
        <Sidebar className="" menuItems={menuItems}
          userData={mockChildren[0]}
          userName="أحمد محمد علي"
          mockChildren={mockChildren}
          notifications={mockNotifications}
          subjects={mockSubjects}
          title="لوحة تحكم ولي الأمر"
          subtitle="مرحباً بك في نظام إدارة المدارس"
          direction="rtl"
          width="256px"
          logoSize={20}
          logoColor="primary"
          activeItemClass="bg-primary bg-opacity-10 text-primary border-end main-border-color border-4"
          inactiveItemClass="text-dark"
        />

          </div>

    </>
  );
};

export default ParentDashboard;