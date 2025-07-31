import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus } from 'lucide-react';
import '../../../App.css';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import UserInfoCard from '../../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../../components/common/UI/SidebarNavigation';
import StatCard from '../../../components/common/UI/StatCard';

// Components للإعادة الاستخدام
// const ContainerCard = ({ title, subtitle, children, className = "" }) => (
//   <div className={`bg-white rounded shadow-sm ${className}`}>
//     <div className="p-3 border-bottom">
//       <h5 className="mb-1 fw-bold">{title}</h5>
//       {subtitle && <small className="text-muted">{subtitle}</small>}
//     </div>
//     <div className="p-3">
//       {children}
//     </div>
//   </div>
// );

// const UserInfoCard = ({ children }) => (
//   <div className="bg-light rounded p-3 mb-3 text-center">
//     <div className="mb-2">
//       <img 
//         src="https://via.placeholder.com/50" 
//         alt="Profile" 
//         className="rounded-circle" 
//         width="50" 
//         height="50" 
//       />
//     </div>
//     <h6 className="mb-1">{children}</h6>
//     <small className="text-muted">مدير الولاية</small>
//   </div>
// );



// Component للإحصائيات
// const StatCard = ({ title, value, icon, color = "primary", trend = null }) => (
//   <div className="col-md-6 col-lg-3 mb-3">
//     <div className={`card border-${color} h-100`}>
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6 className="card-title text-muted mb-2">{title}</h6>
//             <h3 className={`text-${color} mb-0`}>{value}</h3>
//             {trend && (
//               <small className={`text-${trend.type}`}>
//                 <i className={`fas fa-arrow-${trend.type === 'success' ? 'up' : 'down'} me-1`}></i>
//                 {trend.value}
//               </small>
//             )}
//           </div>
//           <div className={`text-${color} fs-1 opacity-50`}>
//             <i className={icon}></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// Component للجداول
const DataTable = ({ title, headers, data, actions = [] }) => (
  <div className="card mb-4">
    <div className="card-header bg-light">
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              {actions.length > 0 && <th>الإجراءات</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
                {actions.length > 0 && (
                  <td>
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`btn btn-sm btn-${action.color} me-1`}
                        onClick={() => action.onClick(rowIndex)}
                      >
                        <i className={action.icon}></i> {action.text}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Component للرسوم البيانية البسيطة
const SimpleChart = ({ title, data }) => (
  <div className="card mb-4">
    <div className="card-header bg-light">
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className="card-body">
      <div className="progress-stacked mb-3">
        {data.map((item, index) => (
          <div key={index} className="progress" role="progressbar" style={{width: `${item.percentage}%`}}>
            <div className={`progress-bar bg-${item.color}`} style={{width: '100%'}}>
              {item.label}: {item.value}
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-6 mb-2">
            <small className="text-muted">
              <span className={`badge bg-${item.color} me-2`}></span>
              {item.label}: {item.value} ({item.percentage}%)
            </small>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Component للتنبيهات
const AlertCard = ({ type, title, message, time }) => (
  <div className={`alert alert-${type} alert-dismissible mb-2`} role="alert">
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <h6 className="alert-heading mb-1">{title}</h6>
        <p className="mb-1">{message}</p>
        <small className="text-muted">{time}</small>
      </div>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  </div>
);

const StateManagerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 992 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // بيانات المستخدم
  const UserData = {
    id: 1,
    name: 'أحمد محمد علي',
    email: 'ahmed@example.com',
    avatar: 'https://via.placeholder.com/50',
    role: ' مدير الولاية'
  };

  // بيانات وهمية للعرض
  const statsData = [
    { title: 'إجمالي المحليات', value: '12', icon: 'fas fa-building', color: 'primary' },
    { title: 'إجمالي المدارس', value: '245', icon: 'fas fa-school', color: 'success' },
    { title: 'إجمالي الطلاب', value: '48,750', icon: 'fas fa-user-graduate', color: 'info' },
    { title: 'إجمالي المعلمين', value: '2,890', icon: 'fas fa-chalkboard-teacher', color: 'warning' }
  ];

  const localitiesData = [
    ['الخرطوم', '25', '6,850', '425', 'ممتاز'],
    ['أم درمان', '22', '5,920', '380', 'جيد جداً'],
    ['بحري', '18', '4,780', '295', 'جيد'],
    ['شرق النيل', '15', '3,650', '240', 'مقبول']
  ];

  const performanceData = [
    { label: 'ممتاز', value: 45, percentage: 45, color: 'success' },
    { label: 'جيد جداً', value: 30, percentage: 30, color: 'info' },
    { label: 'جيد', value: 20, percentage: 20, color: 'warning' },
    { label: 'مقبول', value: 5, percentage: 5, color: 'danger' }
  ];

  const reportsData = [
    ['تقرير الأداء الشهري', 'يناير 2024', '15/01/2024', 'مكتمل'],
    ['تقرير الحضور والغياب', 'يناير 2024', '20/01/2024', 'قيد المراجعة'],
    ['تقرير المحتوى التعليمي', 'ديسمبر 2023', '28/12/2023', 'مكتمل'],
    ['تقرير الميزانية', 'الربع الأول 2024', '05/01/2024', 'مطلوب']
  ];

  const alerts = [
    { type: 'warning', title: 'تحديث مطلوب', message: 'محلية الخرطوم تحتاج تحديث بياناتها', time: 'منذ 2 ساعة' },
    { type: 'info', title: 'تقرير جديد', message: 'تم رفع التقرير الشهري لمحلية أم درمان', time: 'منذ 4 ساعات' },
    { type: 'success', title: 'اكتمال التدريب', message: 'تم إنهاء دورة التدريب للمعلمين بنجاح', time: 'منذ يوم واحد' }
  ];

  const tabs = [
    { key: 'dashboard', label: 'لوحة التحكم', icon: 'fas fa-tachometer-alt', title: 'لوحة التحكم الرئيسية' },
    { key: 'localities', label: 'إدارة المحليات', icon: 'fas fa-building', title: 'إدارة المحليات' },
    { key: 'schools', label: 'المدارس', icon: 'fas fa-school', title: 'إدارة المدارس' },
    { key: 'content', label: 'المحتوى التعليمي', icon: 'fas fa-book', title: 'إدارة المحتوى التعليمي' },
    { key: 'reports', label: 'التقارير والإحصائيات', icon: 'fas fa-chart-bar', title: 'التقارير والإحصائيات' },
    { key: 'policies', label: 'السياسات التعليمية', icon: 'fas fa-clipboard-list', title: 'السياسات التعليمية' },
    { key: 'budget', label: 'الميزانية', icon: 'fas fa-dollar-sign', title: 'إدارة الميزانية' },
    { key: 'training', label: 'برامج التدريب', icon: 'fas fa-graduation-cap', title: 'برامج التدريب' },
    { key: 'projects', label: 'المشاريع التعليمية', icon: 'fas fa-project-diagram', title: 'المشاريع التعليمية' },
    { key: 'settings', label: 'الإعدادات', icon: 'fas fa-cog', title: 'الإعدادات' }
  ];

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
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* الإحصائيات الرئيسية */}
            <div className="row mb-4">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* الرسم البياني والتنبيهات */}
            <div className="row">
              <div className="col-lg-8">
                <SimpleChart title="توزيع أداء المحليات" data={performanceData} />
                <DataTable
                  title="أفضل المحليات أداءً"
                  headers={['المحلية', 'عدد المدارس', 'عدد الطلاب', 'عدد المعلمين', 'التقييم']}
                  data={localitiesData}
                  actions={[
                    { text: 'عرض', icon: 'fas fa-eye', color: 'primary', onClick: (index) => console.log('عرض', index) },
                    { text: 'تقرير', icon: 'fas fa-file-alt', color: 'info', onClick: (index) => console.log('تقرير', index) }
                  ]}
                />
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header bg-light">
                    <h5 className="mb-0">التنبيهات والإشعارات</h5>
                  </div>
                  <div className="card-body">
                    {alerts.map((alert, index) => (
                      <AlertCard key={index} {...alert} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'localities':
        return (
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>إدارة المحليات</h2>
                <button className="btn btn-primary">
                  <i className="fas fa-plus me-2"></i>إضافة محلية جديدة
                </button>
              </div>
              <DataTable
                title="جميع المحليات في الولاية"
                headers={['المحلية', 'عدد المدارس', 'عدد الطلاب', 'عدد المعلمين', 'التقييم', 'آخر تحديث']}
                data={[
                  ...localitiesData.map(row => [...row, '15/01/2024']),
                  ['كرري', '14', '3,200', '210', 'جيد', '12/01/2024'],
                  ['الحلفايا', '10', '2,850', '185', 'مقبول', '10/01/2024']
                ]}
                actions={[
                  { text: 'عرض التفاصيل', icon: 'fas fa-eye', color: 'primary', onClick: (index) => console.log('عرض', index) },
                  { text: 'تعديل', icon: 'fas fa-edit', color: 'warning', onClick: (index) => console.log('تعديل', index) },
                  { text: 'تقرير', icon: 'fas fa-file-alt', color: 'info', onClick: (index) => console.log('تقرير', index) }
                ]}
              />
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>التقارير والإحصائيات</h2>
                <button className="btn btn-success">
                  <i className="fas fa-download me-2"></i>تصدير التقارير
                </button>
              </div>
              <DataTable
                title="التقارير الحديثة"
                headers={['نوع التقرير', 'الفترة', 'تاريخ الإنشاء', 'الحالة']}
                data={reportsData}
                actions={[
                  { text: 'تحميل', icon: 'fas fa-download', color: 'success', onClick: (index) => console.log('تحميل', index) },
                  { text: 'مشاهدة', icon: 'fas fa-eye', color: 'primary', onClick: (index) => console.log('مشاهدة', index) }
                ]}
              />
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">إدارة المحتوى التعليمي</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <i className="fas fa-video fa-3x text-primary mb-3"></i>
                      <h5>الفيديوهات التعليمية</h5>
                      <p className="text-muted">1,250 فيديو</p>
                      <button className="btn btn-primary">إدارة الفيديوهات</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <i className="fas fa-book fa-3x text-success mb-3"></i>
                      <h5>المناهج الدراسية</h5>
                      <p className="text-muted">85 منهج</p>
                      <button className="btn btn-success">إدارة المناهج</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <i className="fas fa-tasks fa-3x text-info mb-3"></i>
                      <h5>الأنشطة والتمارين</h5>
                      <p className="text-muted">2,890 نشاط</p>
                      <button className="btn btn-info">إدارة الأنشطة</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-5">
            <i className="fas fa-construction fa-3x text-muted mb-3"></i>
            <h3>قيد التطوير</h3>
            <p className="text-muted">هذا القسم قيد التطوير وسيكون متاحاً قريباً</p>
          </div>
        );
    }
  };

  const title = "منصة التعليم الموحد";
  const subtitle = "لوحة تحكم مدير الولاية";
  const width = "280px";

  return (
    <div className="d-flex flex-md-column min-vh-100 bg-light" dir="rtl">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`btn btn-primary position-fixed d-lg-none ${isOpen ? 'd-none' : 'd-block'} text-white`}
        style={{
          top: '20px',
          right: '20px',
          zIndex: 1050,
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        aria-label="فتح القائمة"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="position-fixed w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ zIndex: 1030 }}
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`position-fixed rounded position-lg-sticky top-0 end-0 bg-white shadow-lg d-lg-block`}
        style={{
          width: width,
          height: '100vh',
          zIndex: 1040,
          transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        <ContainerCard title={title} subtitle={subtitle}>
          <UserInfoCard role={UserData.role}>{UserData.name}</UserInfoCard>
          <SidebarNavigation menuItems={menuItems} closeSidebar={closeSidebar} />
        </ContainerCard>
      </div>

      {/* Main Content Area */}
      <div
        className="flex-grow-1"
        style={{
          marginRight: isMobile ? '0' : width
        }}
      >
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">
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

export default StateManagerDashboard;