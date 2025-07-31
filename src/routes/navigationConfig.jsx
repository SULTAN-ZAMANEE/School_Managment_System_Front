
// ===============================
// src/routes/navigationConfig.js
// ===============================

import {
  FaHome,
  FaSchool,
  FaUsers,
  FaUserTie,
  FaBook,
  FaCalendarAlt,
  FaClipboardCheck,
  FaGraduationCap,
  FaChartBar,
  FaCog,
  FaUserCog,
  FaShieldAlt,
  FaDatabase,
  FaFileAlt,
  FaComments,
  FaBell,
  FaQuestionCircle,
  FaLifeRing
} from 'react-icons/fa';

export const getNavigationConfig = (userRole) => {
  const baseConfig = [
    {
      title: 'الرئيسية',
      icon: FaHome,
      path: '/dashboard',
      roles: ['all']
    }
  ];

  const roleSpecificConfig = {
    ministry: [
      {
        title: 'لوحة التحكم',
        icon: FaHome,
        path: '/ministry/dashboard'
      },
      {
        title: 'المدارس',
        icon: FaSchool,
        path: '/ministry/schools'
      },
      {
        title: 'المناطق التعليمية',
        icon: FaUsers,
        path: '/ministry/regions'
      },
      {
        title: 'الإحصائيات',
        icon: FaChartBar,
        path: '/ministry/statistics'
      },
      {
        title: 'التقارير',
        icon: FaFileAlt,
        path: '/ministry/reports'
      },
      {
        title: 'السياسات',
        icon: FaShieldAlt,
        path: '/ministry/policies'
      },
      {
        title: 'المناهج',
        icon: FaBook,
        path: '/ministry/curriculum'
      },
      {
        title: 'الميزانية',
        icon: FaDatabase,
        path: '/ministry/budget'
      }
    ],
    admin: [
      {
        title: 'لوحة التحكم',
        icon: FaHome,
        path: '/admin/dashboard'
      },
      {
        title: 'إدارة المستخدمين',
        icon: FaUsers,
        path: '/admin/users'
      },
      {
        title: 'إدارة الأدوار',
        icon: FaUserCog,
        path: '/admin/roles'
      },
      {
        title: 'الصلاحيات',
        icon: FaShieldAlt,
        path: '/admin/permissions'
      },
      {
        title: 'إعدادات النظام',
        icon: FaCog,
        path: '/admin/settings'
      },
      {
        title: 'النسخ الاحتياطي',
        icon: FaDatabase,
        path: '/admin/backup'
      },
      {
        title: 'سجلات النظام',
        icon: FaFileAlt,
        path: '/admin/logs'
      }
    ],
    region_admin: [
      {
        title: 'لوحة التحكم',
        icon: FaHome,
        path: '/region/dashboard'
      },
      {
        title: 'المدارس',
        icon: FaSchool,
        path: '/region/schools'
      },
      {
        title: 'المعلمين',
        icon: FaUserTie,
        path: '/region/teachers'
      },
      {
        title: 'الطلاب',
        icon: FaGraduationCap,
        path: '/region/students'
      },
      {
        title: 'التقارير',
        icon: FaFileAlt,
        path: '/region/reports'
      },
      {
        title: 'الأنشطة',
        icon: FaCalendarAlt,
        path: '/region/activities'
      }
    ],
    school_admin: [
      {
        title: 'لوحة التحكم',
        icon: FaHome,
        path: '/school/dashboard'
      },
      {
        title: 'الصفوف',
        icon: FaSchool,
        path: '/school/classes'
      },
      {
        title: 'الطلاب',
        icon: FaGraduationCap,
        path: '/school/students'
      },
      {
        title: 'المعلمين',
        icon: FaUserTie,
        path: '/school/teachers'
      },
      {
        title: 'المواد',
        icon: FaBook,
        path: '/school/subjects'
      },
      {
        title: 'الجدولة',
        icon: FaCalendarAlt,
        path: '/school/schedule'
      },
      {
        title: 'الحضور',
        icon: FaClipboardCheck,
        path: '/school/attendance'
      },
      {
        title: 'الدرجات',
        icon: FaChartBar,
        path: '/school/grades'
      },
      {
        title: 'التقارير',
        icon: FaFileAlt,
        path: '/school/reports'
      }
    ],
    teacher: [
      {
        title: 'لوحة التحكم',
        icon: FaHome,
        path: '/teacher/dashboard'
      },
      {
        title: 'صفوفي',
        icon: FaSchool,
        path: '/teacher/classes'
      },]
  }
}