
// ===============================
// src/routes/routeConstants.js
// ===============================

export const ROUTES = {
  // Auth Routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/verify-email',
  PROFILE: '/profile',

  // Ministry Routes
  MINISTRY: {
    DASHBOARD: '/ministry/dashboard',
    SCHOOLS: '/ministry/schools',
    REGIONS: '/ministry/regions',
    STATISTICS: '/ministry/statistics',
    REPORTS: '/ministry/reports',
    POLICIES: '/ministry/policies',
    CURRICULUM: '/ministry/curriculum',
    BUDGET: '/ministry/budget',
    SETTINGS: '/ministry/settings'
  },

  // Admin Routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    ROLES: '/admin/roles',
    PERMISSIONS: '/admin/permissions',
    SETTINGS: '/admin/settings',
    BACKUP: '/admin/backup',
    LOGS: '/admin/logs',
    MAINTENANCE: '/admin/maintenance'
  },

  // Region Routes
  REGION: {
    DASHBOARD: '/region/dashboard',
    SCHOOLS: '/region/schools',
    TEACHERS: '/region/teachers',
    STUDENTS: '/region/students',
    REPORTS: '/region/reports',
    ACTIVITIES: '/region/activities',
    SETTINGS: '/region/settings'
  },

  // School Routes
  SCHOOL: {
    DASHBOARD: '/school/dashboard',
    CLASSES: '/school/classes',
    STUDENTS: '/school/students',
    TEACHERS: '/school/teachers',
    SUBJECTS: '/school/subjects',
    SCHEDULE: '/school/schedule',
    ATTENDANCE: '/school/attendance',
    GRADES: '/school/grades',
    ACTIVITIES: '/school/activities',
    REPORTS: '/school/reports',
    LIBRARY: '/school/library',
    RESOURCES: '/school/resources',
    SETTINGS: '/school/settings'
  },

  // Teacher Routes
  TEACHER: {
    DASHBOARD: '/teacher/dashboard',
    CLASSES: '/teacher/classes',
    STUDENTS: '/teacher/students',
    GRADEBOOK: '/teacher/gradebook',
    ATTENDANCE: '/teacher/attendance',
    ASSIGNMENTS: '/teacher/assignments',
    TESTS: '/teacher/tests',
    LESSONS: '/teacher/lessons',
    SCHEDULE: '/teacher/schedule',
    PARENTS: '/teacher/parents',
    REPORTS: '/teacher/reports',
    PROFILE: '/teacher/profile'
  },

  // Student Routes
  STUDENT: {
    DASHBOARD: '/student/dashboard',
    GRADES: '/student/grades',
    SCHEDULE: '/student/schedule',
    ATTENDANCE: '/student/attendance',
    ASSIGNMENTS: '/student/assignments',
    TESTS: '/student/tests',
    ACTIVITIES: '/student/activities',
    REPORTS: '/student/reports',
    CLASSMATES: '/student/classmates',
    TEACHERS: '/student/teachers',
    LIBRARY: '/student/library',
    PROFILE: '/student/profile'
  },

  // Parent Routes
  PARENT: {
    DASHBOARD: '/parent/dashboard',
    PROGRESS: '/parent/progress',
    GRADES: '/parent/grades',
    ATTENDANCE: '/parent/attendance',
    SCHEDULE: '/parent/schedule',
    ACTIVITIES: '/parent/activities',
    TEACHERS: '/parent/teachers',
    SCHOOL: '/parent/school',
    REPORTS: '/parent/reports',
    MEETINGS: '/parent/meetings',
    PROFILE: '/parent/profile'
  },

  // Shared Routes
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  HELP: '/help',
  SUPPORT: '/support',
  ABOUT: '/about',

  // Error Routes
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500'
};

export const ROLE_PERMISSIONS = {
  ministry: [
    'view_all_schools',
    'manage_regions',
    'view_statistics',
    'manage_policies',
    'manage_curriculum',
    'manage_budget'
  ],
  admin: [
    'manage_users',
    'manage_roles',
    'manage_permissions',
    'system_settings',
    'backup_restore',
    'view_logs',
    'system_maintenance'
  ],
  region_admin: [
    'view_region_schools',
    'manage_region_teachers',
    'view_region_students',
    'region_reports',
    'region_activities'
  ],
  school_admin: [
    'manage_classes',
    'manage_students',
    'manage_teachers',
    'manage_subjects',
    'manage_schedule',
    'view_attendance',
    'view_grades',
    'school_reports'
  ],
  principal: [
    'view_classes',
    'view_students',
    'view_teachers',
    'view_subjects',
    'view_schedule',
    'view_attendance',
    'view_grades',
    'school_reports'
  ],
  teacher: [
    'view_my_classes',
    'manage_my_students',
    'manage_grades',
    'track_attendance',
    'manage_assignments',
    'manage_tests',
    'lesson_plans',
    'parent_communication'
  ],
  student: [
    'view_my_grades',
    'view_my_schedule',
    'view_my_attendance',
    'view_my_assignments',
    'view_my_tests',
    'view_activities',
    'contact_teachers'
  ],
  parent: [
    'view_child_progress',
    'view_child_grades',
    'view_child_attendance',
    'view_child_schedule',
    'teacher_communication',
    'school_communication',
    'view_child_reports'
  ]
};

export default ROUTES;