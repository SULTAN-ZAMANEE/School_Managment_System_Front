import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp, School, Video, ChartBar } from 'lucide-react';
import '../../../App.css';
import { FaChalkboardTeacher } from 'react-icons/fa';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import UserInfoCard from '../../../components/common/UI/UserInfoCard';
import SidebarNavigation from '../../../components/common/UI/SidebarNavigation';
import StatCard from '../../../components/common/UI/StatCard';
import IconButton from '../../../components/Header/IconButton';
// import DataTable from '../../../components/common/Layout/DataTable';
import '../../../App.css'

// Component للجداول
const DataTable = ({ className = '', title, headers, data, actions = [] }) => (
  <div className="card my-4">
    <div className="card-header main-bg-color text-white">
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              {actions.length > 0 && <th>الإجراءات</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
                {actions.length > 0 && (
                  <td>
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`btn btn-${action.color} btn-sm me-1`}
                        onClick={() => action.onClick(row)}
                      >
                        {React.createElement(action.icon, { size: 16 })} {action.label}
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


// Component للنماذج
const FormModal = ({ show, onHide, title, children, onSave }) => (
  <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="btn-close btn-close-white" onClick={onHide}></button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onHide}>إلغاء</button>
          <button type="button" className="btn btn-primary" onClick={onSave}>حفظ</button>
        </div>
      </div>
    </div>
  </div>
);

// الواجهة الرئيسية
const UnitManagerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
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
    role: 'إدراة وحدة'
  };

  // التبويبات
  const tabs = [
    { key: 'dashboard', label: 'نظرة عامة', title: 'لوحة التحكم الرئيسية', icon: Home },
    { key: 'schools', label: 'المدارس', title: 'إدارة المدارس', icon: School },
    { key: 'teachers', label: 'المعلمون', title: 'إدارة المعلمين', icon: FaChalkboardTeacher },
    { key: 'content', label: 'المحتوى التعليمي', title: 'إدارة المحتوى التعليمي', icon: Video },
    { key: 'reports', label: 'التقارير', title: 'التقارير والإحصائيات', icon: ChartBar },
    { key: 'messages', label: 'الرسائل', title: 'الرسائل والإشعارات', icon: MessageCircle }
  ];

  // بيانات وهمية للعرض
  const stats = [
    { title: "عدد المدارس", value: "12", icon: School, color: "primary" },
    { title: "إجمالي الطلاب", value: "2,450", icon: Users, color: "success" },
    { title: "عدد المعلمين", value: "185", icon: FaChalkboardTeacher, color: "info" },
    { title: "معدل الحضور", value: "94%", icon: TrendingUp, color: "warning" }
  ];

  const schools = [
    { name: "مدرسة النور الابتدائية", type: "ابتدائية", students: 250, teachers: 15, status: "نشطة" },
    { name: "مدرسة الأمل المتوسطة", type: "متوسطة", students: 180, teachers: 12, status: "نشطة" },
    { name: "مدرسة المستقبل الثانوية", type: "ثانوية", students: 320, teachers: 22, status: "نشطة" },
  ];

  const teachers = [
    { name: "أحمد محمد علي", school: "مدرسة النور", subject: "الرياضيات", experience: "5 سنوات", rating: "ممتاز" },
    { name: "فاطمة حسن محمد", school: "مدرسة الأمل", subject: "اللغة العربية", experience: "8 سنوات", rating: "جيد جداً" },
    { name: "محمد عبدالله أحمد", school: "مدرسة المستقبل", subject: "الفيزياء", experience: "12 سنة", rating: "ممتاز" },
  ];

  const content = [
    { title: "درس الجبر - الصف التاسع", subject: "الرياضيات", teacher: "أحمد محمد", status: "معتمد", date: "2024-01-15" },
    { title: "قواعد النحو - الصف الثامن", subject: "اللغة العربية", teacher: "فاطمة حسن", status: "قيد المراجعة", date: "2024-01-14" },
    { title: "تجارب الكيمياء", subject: "الكيمياء", teacher: "محمد عبدالله", status: "معتمد", date: "2024-01-13" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
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

  const schoolActions = [
    { label: "عرض", icon: Eye, color: "info", onClick: (row) => console.log("عرض", row) },
    { label: "تقرير", icon: FileText, color: "primary", onClick: (row) => console.log("تقرير", row) }
  ];

  const teacherActions = [
    { label: "ملف شخصي", icon: User, color: "info", onClick: (row) => console.log("ملف شخصي", row) },
    { label: "تقييم", icon: BarChart3, color: "warning", onClick: (row) => console.log("تقييم", row) }
  ];

  const contentActions = [
    { label: "معاينة", icon: Eye, color: "success", onClick: (row) => console.log("معاينة", row) },
    { label: "اعتماد", icon: Edit, color: "primary", onClick: (row) => console.log("اعتماد", row) }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            {/* Statistics Cards */}
            <div className="row mb-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Overview Content */}
            <div className="row">
              <div className="col-md-8">
                <ContainerCard title={"آخر الأنشطة"}>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">تم رفع محتوى جديد من مدرسة النور</h6>
                        <small className="text-muted">منذ ساعة واحدة</small>
                      </div>
                      <span className="badge bg-primary rounded-pill">جديد</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">تقرير شهري من مدرسة الأمل</h6>
                        <small className="text-muted">منذ 3 ساعات</small>
                      </div>
                      <span className="badge bg-success rounded-pill">مكتمل</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">طلب موافقة على نشاط مدرسي</h6>
                        <small className="text-muted">منذ يوم واحد</small>
                      </div>
                      <span className="badge bg-warning rounded-pill">معلق</span>
                    </div>
                  </div>
                </ContainerCard>
              </div>
              <div className="col-md-4">
                <ContainerCard title={"الإجراءات السريعة"} className=''>
                  <IconButton userName='إضافة نشاط جديد' icon={Plus} className='text-dark w-100 my-1' onClick={() => handleShowModal('activity')} />
                  <IconButton userName='إنشاء تقرير' icon={FileText} className='text-dark w-100 my-1' />
                  <IconButton userName=' إرسال إشعار عام' icon={MessageCircle} className='text-dark w-100 my-1' />
                  <IconButton userName=' جدولة اجتماع' icon={Calendar} className='text-dark w-100 my-1' />
                </ContainerCard>
              </div>
            </div>
          </div>
        );
      case 'schools':
        return (
          <div>
            <IconButton userName='إضافة مدرسة جديدة' icon={Plus} className='btn main-bg-color' onClick={() => handleShowModal('school')} />
              <DataTable
                title="قائمة المدارس في الوحدة"
                headers={["اسم المدرسة", "النوع", "عدد الطلاب", "عدد المعلمين", "الحالة"]}
                data={schools.map(school => ({
                  name: school.name,
                  type: school.type,
                  students: school.students,
                  teachers: school.teachers,
                  status: <span className="badge bg-success">{school.status}</span>
                }))}
                actions={schoolActions}
              />
          </div>
        );

      case 'teachers':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <IconButton className="btn main-bg-color" onClick={() => handleShowModal('teacher')}icon={Plus} userName='إضافة معلم جديد'/>
            </div>
            <DataTable
              title="قائمة المعلمين في الوحدة"
              headers={["اسم المعلم", "المدرسة", "المادة", "سنوات الخبرة", "التقييم"]}
              data={teachers.map(teacher => ({
                name: teacher.name,
                school: teacher.school,
                subject: teacher.subject,
                experience: teacher.experience,
                rating: <span className="badge bg-success">{teacher.rating}</span>
              }))}
              actions={teacherActions}
            />
          </div>
        );

      case 'content':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <IconButton className="btn main-bg-color" onClick={() => handleShowModal('content')} icon ={Plus} userName = 'رفع محتوى جديد'/>
            </div>
            <DataTable
              title="المحتوى التعليمي المرفوع"
              headers={["عنوان المحتوى", "المادة", "المعلم", "الحالة", "تاريخ الرفع"]}
              data={content.map(item => ({
                title: item.title,
                subject: item.subject,
                teacher: item.teacher,
                status: <span className={`badge ${item.status === 'معتمد' ? 'bg-success' : 'bg-warning'}`}>{item.status}</span>,
                date: item.date
              }))}
              actions={contentActions}
            />
          </div>
        );

      case 'reports':
        return (
          <div className="row">
            <div className="col-md-6">
              <ContainerCard title={"تقارير الأداء"} className='mb-2'>
                <div className="list-group">

                  <IconButton className="list-group-item list-group-item-action rounded-0 rounded-top" icon={BarChart3} userName='تقرير الأداء الأكاديمي الشامل' />
                  <IconButton className="list-group-item list-group-item-action rounded-0" icon={Users} userName=' إحصائيات الحضور والغياب' />
                  <IconButton className="list-group-item list-group-item-action rounded-0" icon={FaChalkboardTeacher} userName=' تقييم أداء المعلمين' />
                  <IconButton className="list-group-item list-group-item-action rounded-0 rounded-bottom" icon={GraduationCap} userName=' تقرير نتائج الطلاب' />

                </div>
              </ContainerCard>
            </div>
            <div className="col-md-6">
              <ContainerCard title={"تقارير المقارنة"}>
                <div className="list-group">
                  <IconButton icon={TrendingUp} className="list-group-item list-group-item-action rounded-0 rounded-top" userName=' مقارنة أداء المدارس' />
                  <IconButton icon={BarChart3} className="list-group-item list-group-item-action rounded-0" userName=' اتجاهات الأداء عبر الزمن' />
                  <IconButton icon={BookOpen} className="list-group-item list-group-item-action rounded-0" userName=' أفضل الممارسات' />
                  <IconButton icon={FileText} className="list-group-item list-group-item-action rounded-0 rounded-bottom" userName=' نقاط التحسين المطلوبة' />
                </div>
              </ContainerCard>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="row">
            <div className="col-md-8">
              <ContainerCard title={"الرسائل الواردة"}>
                <div className="list-group">
                  <div className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">طلب موافقة على نشاط - مدرسة النور</h6>
                      <small>منذ 3 أيام</small>
                    </div>
                    <p className="mb-1">يرجى الموافقة على النشاط الثقافي المقترح...</p>
                    <small>مدير مدرسة النور</small>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">تقرير شهري - مدرسة الأمل</h6>
                      <small>منذ أسبوع</small>
                    </div>
                    <p className="mb-1">التقرير الشهري لأداء الطلاب والمعلمين...</p>
                    <small>مدير مدرسة الأمل</small>
                  </div>
                </div>
              </ContainerCard>
            </div>
            <div className="col-md-4">
              <ContainerCard title={"إرسال رسالة جديدة"}>
                <form>
                  <div className="mb-3">
                    <label className="form-label">المرسل إليه</label>
                    <select className="form-select">
                      <option>جميع المدارس</option>
                      <option>مدرسة النور</option>
                      <option>مدرسة الأمل</option>
                      <option>مدرسة المستقبل</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">الموضوع</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">الرسالة</label>
                    <textarea className="form-control" rows="4"></textarea>
                  </div>

                  <IconButton type="submit" className="btn main-bg-color" icon={MessageCircle} userName={"إرسال"} />
                </form>
              </ContainerCard>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center text-muted mt-5">
            <p>محتوى غير متاح حالياً</p>
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
        className={`position-fixed rounded position-lg-sticky top-10 end-0 bg-white shadow-lg d-lg-block`}
        style={{
          width: '280px',
          maxHeight: '100vh',
          zIndex: 1040,
          transform: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 992) ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        <ContainerCard
          title="لوحة تحكم مدير الوحدة"
          subtitle="مرحباً بك في نظام إدارة المدارس"
        >
          <UserInfoCard role={UserData.role} >{UserData.name}</UserInfoCard>
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

      {/* Modal */}
      <FormModal
        show={showModal}
        onHide={handleCloseModal}
        title={`إضافة ${modalType === 'school' ? 'مدرسة' : modalType === 'teacher' ? 'معلم' : modalType === 'content' ? 'محتوى' : 'نشاط'} جديد`}
        onSave={() => {
          console.log(`حفظ ${modalType}`);
          handleCloseModal();
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">الاسم</label>
              <input type="text" className="form-control" placeholder="أدخل الاسم" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">النوع</label>
              <select className="form-select">
                <option>اختر النوع</option>
                <option>ابتدائية</option>
                <option>متوسطة</option>
                <option>ثانوية</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">الوصف</label>
              <textarea className="form-control" rows="3" placeholder="أدخل الوصف"></textarea>
            </div>
          </div>
        </div>
      </FormModal>
    </div>
  );
};

export default UnitManagerDashboard;