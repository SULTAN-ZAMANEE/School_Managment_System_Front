import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp, Building, School, Settings } from 'lucide-react';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import UserInfoCard from '../../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../../components/common/UI/SidebarNavigation';
import StatCard from '../../../components/common/UI/StatCard';
import IconButton from '../../../components/Header/IconButton';


// Data Table Component
const DataTable = ({ headers, data, actions }) => (
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {actions && <th>الإجراءات</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            {actions && (
              <td>
                {actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className={`btn btn-sm btn-${action.variant} me-1`}
                    onClick={() => action.onClick(row)}
                  >
                    {action.label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Modal Component
const Modal = ({ show, title, children, onClose, onSave, saveLabel = "حفظ" }) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              إغلاق
            </button>
            {onSave && (
              <button type="button" className="btn btn-primary" onClick={onSave}>
                {saveLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const LocalityAdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 992 : false);

  // User Data
  const UserData = {
    id: 1,
    name: 'أحمد محمد علي',
    email: 'ahmed@example.com',
    avatar: 'https://via.placeholder.com/50',
    role: 'مدير المحلية'
  };

  // Navigation Tabs
  const tabs = [
    { key: 'dashboard', label: 'نظرة عامة', title: 'لوحة التحكم الرئيسية', icon: Home },
    { key: 'units', label: 'الوحدات السكنية', title: 'إدارة الوحدات السكنية', icon: Building },
    { key: 'schools', label: 'المدارس', title: 'إدارة المدارس', icon: School },
    { key: 'content', label: 'المحتوى التعليمي', title: 'إدارة المحتوى التعليمي', icon: BookOpen },
    { key: 'reports', label: 'التقارير', title: 'التقارير والإحصائيات', icon: BarChart3 },
    { key: 'settings', label: 'الإعدادات', title: 'إعدادات النظام', icon: Settings }
  ];

  // Sample Data
  const overviewStats = [
    { title: "إجمالي الوحدات", value: "12", subtitle: "وحدة سكنية", icon: Building, color: "primary" },
    { title: "إجمالي المدارس", value: "48", subtitle: "مدرسة", icon: School, color: "success" },
    { title: "إجمالي المعلمين", value: "324", subtitle: "معلم/معلمة", icon: Users, color: "info" },
    { title: "إجمالي الطلاب", value: "5,847", subtitle: "طالب/طالبة", icon: GraduationCap, color: "warning" }
  ];

  const unitsData = [
    { name: "وحدة الشمال", schools: 6, teachers: 42, students: 876, performance: "ممتاز" },
    { name: "وحدة الجنوب", schools: 4, teachers: 28, students: 645, performance: "جيد جداً" },
    { name: "وحدة الشرق", schools: 5, teachers: 35, students: 723, performance: "ممتاز" },
    { name: "وحدة الغرب", schools: 3, teachers: 21, students: 456, performance: "جيد" }
  ];

  const schoolsData = [
    { name: "مدرسة النهضة الابتدائية", unit: "وحدة الشمال", type: "ابتدائية", students: 145, teachers: 8, status: "نشطة" },
    { name: "مدرسة الأمل المتوسطة", unit: "وحدة الشرق", type: "متوسطة", students: 234, teachers: 12, status: "نشطة" },
    { name: "مدرسة المستقبل الثانوية", unit: "وحدة الجنوب", type: "ثانوية", students: 189, teachers: 15, status: "نشطة" }
  ];

  const contentData = [
    { title: "الرياضيات - الصف السادس", type: "فيديو", status: "معتمد", uploads: 12, views: 1250 },
    { title: "العلوم - الصف الثامن", type: "ملف PDF", status: "قيد المراجعة", uploads: 8, views: 890 },
    { title: "اللغة العربية - الصف العاشر", type: "فيديو", status: "معتمد", uploads: 15, views: 2100 }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const handleViewDetails = (item) => {
    openModal(`تفاصيل ${item.name}`, (
      <div>
        <p><strong>الاسم:</strong> {item.name}</p>
        {item.schools && <p><strong>عدد المدارس:</strong> {item.schools}</p>}
        {item.teachers && <p><strong>عدد المعلمين:</strong> {item.teachers}</p>}
        {item.students && <p><strong>عدد الطلاب:</strong> {item.students}</p>}
        {item.performance && <p><strong>التقييم:</strong> {item.performance}</p>}
        {item.type && <p><strong>النوع:</strong> {item.type}</p>}
        {item.unit && <p><strong>الوحدة:</strong> {item.unit}</p>}
        {item.status && <p><strong>الحالة:</strong> {item.status}</p>}
      </div>
    ));
  };

  const actions = [
    { label: "عرض التفاصيل", variant: "primary", onClick: handleViewDetails },
    { label: "تحرير", variant: "warning", onClick: (item) => console.log("Edit", item) },
    { label: "تقرير", variant: "info", onClick: (item) => console.log("Report", item) }
  ];

  const menuItems = tabs.map(tab => ({
    icon: tab.icon,
    label: tab.label,
    active: activeTab === tab.key,
    onClick: () => setActiveTab(tab.key),
    key: tab.key
  }));

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <div className="row mb-4">
              {overviewStats.map((stat, index) => (
                <StatCard {...stat} />
              ))}
            </div>

            <div className="row">
              <div className="col-md-6">
                <ContainerCard title={"أداء الوحدات السكنية"}>
                  {unitsData.slice(0, 3).map((unit, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                      <span>{unit.name}</span>
                      <span className={`badge bg-${unit.performance === 'ممتاز' ? 'success' : 'primary'}`}>
                        {unit.performance}
                      </span>
                    </div>
                  ))}
                </ContainerCard>


              </div>

              <div className="col-md-6">
                <ContainerCard title={"الإحصائيات السريعة"}>
                  <div className="mb-3">
                    <small className="text-muted">معدل الحضور اليومي</small>
                    <div className="progress">
                      <div className="progress-bar bg-success" style={{ width: '92%' }}>92%</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <small className="text-muted">المحتوى المعتمد</small>
                    <div className="progress">
                      <div className="progress-bar bg-info" style={{ width: '78%' }}>78%</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <small className="text-muted">رضا المعلمين</small>
                    <div className="progress">
                      <div className="progress-bar bg-warning" style={{ width: '85%' }}>85%</div>
                    </div>
                  </div>
                </ContainerCard>
              </div>
            </div>
          </div>
        );

      case 'units':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <IconButton className="btn btn-primary" icon={Plus} userName='إضافة وحدة جديدة' />
            </div>

            <DataTable
              headers={["اسم الوحدة", "عدد المدارس", "عدد المعلمين", "عدد الطلاب", "التقييم"]}
              data={unitsData.map(unit => ({
                name: unit.name,
                schools: unit.schools,
                teachers: unit.teachers,
                students: unit.students,
                performance: unit.performance
              }))}
              actions={actions}
            />
          </div>
        );

      case 'schools':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>إدارة المدارس</h4>
              <div>
                <button className="btn btn-success me-2">
                  <FileText size={16} className="me-2" />
                  تصدير التقرير
                </button>
                <button className="btn btn-primary">
                  <Plus size={16} className="me-2" />
                  إضافة مدرسة
                </button>
              </div>
            </div>

            <DataTable
              headers={["اسم المدرسة", "الوحدة", "النوع", "عدد الطلاب", "عدد المعلمين", "الحالة"]}
              data={schoolsData.map(school => ({
                name: school.name,
                unit: school.unit,
                type: school.type,
                students: school.students,
                teachers: school.teachers,
                status: school.status
              }))}
              actions={actions}
            />
          </div>
        );

      case 'content':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>إدارة المحتوى التعليمي</h4>
              <div>
                <button className="btn btn-info me-2">
                  <Eye size={16} className="me-2" />
                  مراجعة المحتوى
                </button>
                <button className="btn btn-primary">
                  <Plus size={16} className="me-2" />
                  رفع محتوى جديد
                </button>
              </div>
            </div>

            <DataTable
              headers={["عنوان المحتوى", "النوع", "الحالة", "عدد الرفعات", "عدد المشاهدات"]}
              data={contentData.map(content => ({
                title: content.title,
                type: content.type,
                status: content.status,
                uploads: content.uploads,
                views: content.views
              }))}
              actions={[
                { label: "معاينة", variant: "info", onClick: (item) => console.log("Preview", item) },
                { label: "اعتماد", variant: "success", onClick: (item) => console.log("Approve", item) },
                { label: "رفض", variant: "danger", onClick: (item) => console.log("Reject", item) }
              ]}
            />
          </div>
        );

      case 'reports':
        return (
          <div>
            <h4 className="mb-4">التقارير والإحصائيات</h4>
            <div className="row mb-4">
              <StatCard
                title="التقارير الشهرية"
                value="24"
                subtitle="تقرير متاح"
                icon={FileText}
                color="success"
                onClick={() => openModal("التقارير الشهرية", <p>قائمة التقارير الشهرية المتاحة</p>)}
              />
              <StatCard
                title="تقارير الأداء"
                value="12"
                subtitle="تقرير جديد"
                icon={TrendingUp}
                color="primary"
                onClick={() => openModal("تقارير الأداء", <p>تقارير الأداء التفصيلية</p>)}
              />
              <StatCard
                title="التحليلات"
                value="8"
                subtitle="تحليل متقدم"
                icon={BarChart3}
                color="info"
                onClick={() => openModal("التحليلات المتقدمة", <p>التحليلات والبيانات المتقدمة</p>)}
              />
            </div>

            <ContainerCard title={"تقارير سريعة"}>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-outline-primary w-100 mb-2">
                    تقرير الحضور والغياب
                  </button>
                  <button className="btn btn-outline-success w-100 mb-2">
                    تقرير الدرجات والتقييمات
                  </button>
                  <button className="btn btn-outline-info w-100 mb-2">
                    تقرير استخدام المنصة
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-warning w-100 mb-2">
                    تقرير المعلمين والموظفين
                  </button>
                  <button className="btn btn-outline-danger w-100 mb-2">
                    تقرير المشاكل والشكاوى
                  </button>
                  <button className="btn btn-outline-secondary w-100 mb-2">
                    تقرير الموارد والميزانية
                  </button>
                </div>
              </div>
            </ContainerCard>

          </div>
        );

      case 'settings':
        return (
          <div>
            {/* <h4 className="mb-4">إعدادات النظام</h4> */}
            <div className="row">
              <div className="col-md-6">
                <ContainerCard title={"الإعدادات العامة"}>
                  <div className="mb-3">
                    <label className="form-label">اسم المحلية</label>
                    <input type="text" className="form-control" value="المحلية الشمالية" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">رمز المحلية</label>
                    <input type="text" className="form-control" value="LOC001" />
                  </div>
                  <button className="btn btn-primary">حفظ التغييرات</button>
                </ContainerCard>

              </div>
              <div className="col-md-6">
                <ContainerCard title={"إعدادات الإشعارات"}>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="emailNotif" defaultChecked />
                    <label className="form-check-label" htmlFor="emailNotif">
                      إشعارات البريد الإلكتروني
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="smsNotif" />
                    <label className="form-check-label" htmlFor="smsNotif">
                      إشعارات الرسائل النصية
                    </label>
                  </div>
                  <button className="btn btn-primary">حفظ الإعدادات</button>
                </ContainerCard>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center text-muted mt-5">
            <p>المحتوى غير متاح حالياً</p>
          </div>
        );
    }
  };

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

      {/* Sidebar */}
      <div
        className={`position-fixed rounded position-lg-sticky shadow-lg d-lg-block`}
        style={{
          width: '280px',
          zIndex: 1040,
          transform: isOpen || !isMobile ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        <ContainerCard
          title="لوحة تحكم مدير المحلية"
          subtitle="نظام إدارة المدارس الموحد"
        >
          <UserInfoCard role={UserData.role}>{UserData.name}</UserInfoCard>
          <SidebarNavigation menuItems={menuItems} closeSidebar={closeSidebar} />
        </ContainerCard>
      </div>

      {/* Main Content Area */}
      <div
        className="flex-grow-1"
        style={{
          marginRight: isMobile ? '0' : '280px'
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

      {/* Modal */}
      <Modal
        show={showModal}
        title={modalContent.title}
        onClose={() => setShowModal(false)}
        onSave={() => {
          console.log("Save action");
          setShowModal(false);
        }}
      >
        {modalContent.content}
      </Modal>
    </div>
  );
};

export default LocalityAdminDashboard;