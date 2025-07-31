// // src/routes/index.js
// import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
// import ProtectedRoute from './ProtectedRoute';
// import PublicRoute from './PublicRoute';
// import RoleBasedRoute from './RoleBasedRoute';
// import ErrorBoundary from '../components/common/Error/ErrorBoundary';
// import NotFound from '../components/common/Error/NotFound';
// import ServerError from '../components/common/Error/ServerError';

// // Auth Pages
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import ForgotPassword from '../pages/auth/ForgotPassword';
// import ResetPassword from '../pages/auth/ResetPassword';
// import VerifyEmail from '../pages/auth/VerifyEmail';
// import Profile from '../pages/auth/Profile';

// // Ministry Pages
// import MinistryDashboard from '../pages/ministry/MinistryDashboard';
// import SchoolsOverview from '../pages/ministry/SchoolsOverview';
// import RegionsManagement from '../pages/ministry/RegionsManagement';
// import EducationStatistics from '../pages/ministry/EducationStatistics';
// import PerformanceReports from '../pages/ministry/PerformanceReports';
// import PolicyManagement from '../pages/ministry/PolicyManagement';
// import CurriculumManagement from '../pages/ministry/CurriculumManagement';
// import BudgetManagement from '../pages/ministry/BudgetManagement';
// import SystemSettings from '../pages/ministry/SystemSettings';

// // Admin Pages
// import AdminDashboard from '../pages/admin/AdminDashboard';
// import UserManagement from '../pages/admin/UserManagement';
// import RoleManagement from '../pages/admin/RoleManagement';
// import PermissionManagement from '../pages/admin/PermissionManagement';
// import AdminSystemSettings from '../pages/admin/SystemSettings';
// import BackupRestore from '../pages/admin/BackupRestore';
// import SystemLogs from '../pages/admin/SystemLogs';
// import Maintenance from '../pages/admin/Maintenance';

// // Region Pages
// import RegionDashboard from '../pages/region/RegionDashboard';
// import RegionSchools from '../pages/region/RegionSchools';
// import RegionTeachers from '../pages/region/RegionTeachers';
// import RegionStudents from '../pages/region/RegionStudents';
// import RegionReports from '../pages/region/RegionReports';
// import RegionActivities from '../pages/region/RegionActivities';
// import RegionSettings from '../pages/region/RegionSettings';

// // School Pages
// import SchoolDashboard from '../pages/school/SchoolDashboard';
// import ClassManagement from '../pages/school/ClassManagement';
// import StudentManagement from '../pages/school/StudentManagement';
// import TeacherManagement from '../pages/school/TeacherManagement';
// import SubjectManagement from '../pages/school/SubjectManagement';
// import ScheduleManagement from '../pages/school/ScheduleManagement';
// import AttendanceManagement from '../pages/school/AttendanceManagement';
// import GradeManagement from '../pages/school/GradeManagement';
// import ActivityManagement from '../pages/school/ActivityManagement';
// import ReportManagement from '../pages/school/ReportManagement';
// import LibraryManagement from '../pages/school/LibraryManagement';
// import ResourceManagement from '../pages/school/ResourceManagement';
// import SchoolSettings from '../pages/school/SchoolSettings';

// // Teacher Pages
// import TeacherDashboard from '../pages/teacher/TeacherDashboard';
// import MyClasses from '../pages/teacher/MyClasses';
// import MyStudents from '../pages/teacher/MyStudents';
// import GradeBook from '../pages/teacher/GradeBook';
// import AttendanceTracker from '../pages/teacher/AttendanceTracker';
// import AssignmentManagement from '../pages/teacher/AssignmentManagement';
// import TestManagement from '../pages/teacher/TestManagement';
// import LessonPlans from '../pages/teacher/LessonPlans';
// import TeacherSchedule from '../pages/teacher/TeacherSchedule';
// import ParentCommunication from '../pages/teacher/ParentCommunication';
// import StudentReports from '../pages/teacher/StudentReports';
// import TeacherProfile from '../pages/teacher/TeacherProfile';

// // Student Pages
// import StudentDashboard from '../pages/student/StudentDashboard';
// import MyGrades from '../pages/student/MyGrades';
// import MySchedule from '../pages/student/MySchedule';
// import MyAttendance from '../pages/student/MyAttendance';
// import MyAssignments from '../pages/student/MyAssignments';
// import MyTests from '../pages/student/MyTests';
// import MyActivities from '../pages/student/MyActivities';
// import MyReports from '../pages/student/MyReports';
// import ClassmateDirectory from '../pages/student/ClassmateDirectory';
// import TeacherContact from '../pages/student/TeacherContact';
// import LibraryAccess from '../pages/student/LibraryAccess';
// import StudentProfile from '../pages/student/StudentProfile';

// // Parent Pages
// import ParentDashboard from '../pages/parent/ParentDashboard';
// import ChildProgress from '../pages/parent/ChildProgress';
// import ChildGrades from '../pages/parent/ChildGrades';
// import ChildAttendance from '../pages/parent/ChildAttendance';
// import ChildSchedule from '../pages/parent/ChildSchedule';
// import ChildActivities from '../pages/parent/ChildActivities';
// import TeacherCommunication from '../pages/parent/TeacherCommunication';
// import SchoolCommunication from '../pages/parent/SchoolCommunication';
// import ChildReports from '../pages/parent/ChildReports';
// import ParentMeetings from '../pages/parent/ParentMeetings';
// import ParentProfile from '../pages/parent/ParentProfile';

// // Shared Pages
// import Dashboard from '../pages/shared/Dashboard';
// import Settings from '../pages/shared/Settings';
// import Help from '../pages/shared/Help';
// import Support from '../pages/shared/Support';
// import About from '../pages/shared/About';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorBoundary />,
//     children: [
//       // Public Routes
//       {
//         path: '',
//         element: <PublicRoute />,
//         children: [
//           {
//             index: true,
//             element: <Login />
//           },
//           {
//             path: 'login',
//             element: <Login />
//           },
//           {
//             path: 'register',
//             element: <Register />
//           },
//           {
//             path: 'forgot-password',
//             element: <ForgotPassword />
//           },
//           {
//             path: 'reset-password/:token',
//             element: <ResetPassword />
//           },
//           {
//             path: 'verify-email/:token',
//             element: <VerifyEmail />
//           }
//         ]
//       },

//       // Protected Routes
//       {
//         path: '/',
//         element: <ProtectedRoute />,
//         children: [
//           // General Protected Routes
//           {
//             path: 'dashboard',
//             element: <Dashboard />
//           },
//           {
//             path: 'profile',
//             element: <Profile />
//           },
//           {
//             path: 'settings',
//             element: <Settings />
//           },
//           {
//             path: 'help',
//             element: <Help />
//           },
//           {
//             path: 'support',
//             element: <Support />
//           },
//           {
//             path: 'about',
//             element: <About />
//           },

//           // Ministry Routes
//           {
//             path: 'ministry',
//             element: <RoleBasedRoute allowedRoles={['ministry']} />,
//             children: [
//               {
//                 index: true,
//                 element: <MinistryDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <MinistryDashboard />
//               },
//               {
//                 path: 'schools',
//                 element: <SchoolsOverview />
//               },
//               {
//                 path: 'regions',
//                 element: <RegionsManagement />
//               },
//               {
//                 path: 'statistics',
//                 element: <EducationStatistics />
//               },
//               {
//                 path: 'reports',
//                 element: <PerformanceReports />
//               },
//               {
//                 path: 'policies',
//                 element: <PolicyManagement />
//               },
//               {
//                 path: 'curriculum',
//                 element: <CurriculumManagement />
//               },
//               {
//                 path: 'budget',
//                 element: <BudgetManagement />
//               },
//               {
//                 path: 'settings',
//                 element: <SystemSettings />
//               }
//             ]
//           },

//           // Admin Routes
//           {
//             path: 'admin',
//             element: <RoleBasedRoute allowedRoles={['admin']} />,
//             children: [
//               {
//                 index: true,
//                 element: <AdminDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <AdminDashboard />
//               },
//               {
//                 path: 'users',
//                 element: <UserManagement />
//               },
//               {
//                 path: 'roles',
//                 element: <RoleManagement />
//               },
//               {
//                 path: 'permissions',
//                 element: <PermissionManagement />
//               },
//               {
//                 path: 'settings',
//                 element: <AdminSystemSettings />
//               },
//               {
//                 path: 'backup',
//                 element: <BackupRestore />
//               },
//               {
//                 path: 'logs',
//                 element: <SystemLogs />
//               },
//               {
//                 path: 'maintenance',
//                 element: <Maintenance />
//               }
//             ]
//           },

//           // Region Routes
//           {
//             path: 'region',
//             element: <RoleBasedRoute allowedRoles={['region_admin']} />,
//             children: [
//               {
//                 index: true,
//                 element: <RegionDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <RegionDashboard />
//               },
//               {
//                 path: 'schools',
//                 element: <RegionSchools />
//               },
//               {
//                 path: 'teachers',
//                 element: <RegionTeachers />
//               },
//               {
//                 path: 'students',
//                 element: <RegionStudents />
//               },
//               {
//                 path: 'reports',
//                 element: <RegionReports />
//               },
//               {
//                 path: 'activities',
//                 element: <RegionActivities />
//               },
//               {
//                 path: 'settings',
//                 element: <RegionSettings />
//               }
//             ]
//           },

//           // School Routes
//           {
//             path: 'school',
//             element: <RoleBasedRoute allowedRoles={['school_admin', 'principal']} />,
//             children: [
//               {
//                 index: true,
//                 element: <SchoolDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <SchoolDashboard />
//               },
//               {
//                 path: 'classes',
//                 element: <ClassManagement />
//               },
//               {
//                 path: 'students',
//                 element: <StudentManagement />
//               },
//               {
//                 path: 'teachers',
//                 element: <TeacherManagement />
//               },
//               {
//                 path: 'subjects',
//                 element: <SubjectManagement />
//               },
//               {
//                 path: 'schedule',
//                 element: <ScheduleManagement />
//               },
//               {
//                 path: 'attendance',
//                 element: <AttendanceManagement />
//               },
//               {
//                 path: 'grades',
//                 element: <GradeManagement />
//               },
//               {
//                 path: 'activities',
//                 element: <ActivityManagement />
//               },
//               {
//                 path: 'reports',
//                 element: <ReportManagement />
//               },
//               {
//                 path: 'library',
//                 element: <LibraryManagement />
//               },
//               {
//                 path: 'resources',
//                 element: <ResourceManagement />
//               },
//               {
//                 path: 'settings',
//                 element: <SchoolSettings />
//               }
//             ]
//           },

//           // Teacher Routes
//           {
//             path: 'teacher',
//             element: <RoleBasedRoute allowedRoles={['teacher']} />,
//             children: [
//               {
//                 index: true,
//                 element: <TeacherDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <TeacherDashboard />
//               },
//               {
//                 path: 'classes',
//                 element: <MyClasses />
//               },
//               {
//                 path: 'students',
//                 element: <MyStudents />
//               },
//               {
//                 path: 'gradebook',
//                 element: <GradeBook />
//               },
//               {
//                 path: 'attendance',
//                 element: <AttendanceTracker />
//               },
//               {
//                 path: 'assignments',
//                 element: <AssignmentManagement />
//               },
//               {
//                 path: 'tests',
//                 element: <TestManagement />
//               },
//               {
//                 path: 'lessons',
//                 element: <LessonPlans />
//               },
//               {
//                 path: 'schedule',
//                 element: <TeacherSchedule />
//               },
//               {
//                 path: 'parents',
//                 element: <ParentCommunication />
//               },
//               {
//                 path: 'reports',
//                 element: <StudentReports />
//               },
//               {
//                 path: 'profile',
//                 element: <TeacherProfile />
//               }
//             ]
//           },

//           // Student Routes
//           {
//             path: 'student',
//             element: <RoleBasedRoute allowedRoles={['student']} />,
//             children: [
//               {
//                 index: true,
//                 element: <StudentDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <StudentDashboard />
//               },
//               {
//                 path: 'grades',
//                 element: <MyGrades />
//               },
//               {
//                 path: 'schedule',
//                 element: <MySchedule />
//               },
//               {
//                 path: 'attendance',
//                 element: <MyAttendance />
//               },
//               {
//                 path: 'assignments',
//                 element: <MyAssignments />
//               },
//               {
//                 path: 'tests',
//                 element: <MyTests />
//               },
//               {
//                 path: 'activities',
//                 element: <MyActivities />
//               },
//               {
//                 path: 'reports',
//                 element: <MyReports />
//               },
//               {
//                 path: 'classmates',
//                 element: <ClassmateDirectory />
//               },
//               {
//                 path: 'teachers',
//                 element: <TeacherContact />
//               },
//               {
//                 path: 'library',
//                 element: <LibraryAccess />
//               },
//               {
//                 path: 'profile',
//                 element: <StudentProfile />
//               }
//             ]
//           },

//           // Parent Routes
//           {
//             path: 'parent',
//             element: <RoleBasedRoute allowedRoles={['parent']} />,
//             children: [
//               {
//                 index: true,
//                 element: <ParentDashboard />
//               },
//               {
//                 path: 'dashboard',
//                 element: <ParentDashboard />
//               },
//               {
//                 path: 'progress',
//                 element: <ChildProgress />
//               },
//               {
//                 path: 'grades',
//                 element: <ChildGrades />
//               },
//               {
//                 path: 'attendance',
//                 element: <ChildAttendance />
//               },
//               {
//                 path: 'schedule',
//                 element: <ChildSchedule />
//               },
//               {
//                 path: 'activities',
//                 element: <ChildActivities />
//               },
//               {
//                 path: 'teachers',
//                 element: <TeacherCommunication />
//               },
//               {
//                 path: 'school',
//                 element: <SchoolCommunication />
//               },
//               {
//                 path: 'reports',
//                 element: <ChildReports />
//               },
//               {
//                 path: 'meetings',
//                 element: <ParentMeetings />
//               },
//               {
//                 path: 'profile',
//                 element: <ParentProfile />
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   // Error Routes
//   {
//     path: '/500',
//     element: <ServerError />
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   }
// ]);

// export default router;