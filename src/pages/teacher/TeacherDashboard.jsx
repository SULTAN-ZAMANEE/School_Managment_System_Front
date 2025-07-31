import React, { useState, useEffect } from 'react';
import { Calendar, Users, BookOpen, FileText, MessageCircle, Home, Upload, Plus, Eye, Edit, Trash2, Download, Bell, Settings, BarChart3 } from 'lucide-react';
import '../../App.css';
import StatCard from '../../components/common/UI/StatCard';
import ContainerCard from '../../components/common/UI/ContainerCard';
import DataTable from '../../components/common/Layout/DataTable';
import TeacherOverview from './TeacherOverview';
import TeacherSchedule from './TeacherSchedule';
import TeacherSidebar from './TeacherSidebar';
import IconButton from '../../components/Header/IconButton';
import TeacherAssignments from './TeacherAssignments';
import AddStudentGrade  from './StudentsGrades';
import StudentsTable from './StudentsTable';
import UploadSchedule from './UploadSchedule';
import CreateAssignment from './CreateAssignment';

// المكونات المشتركة


const Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
  <button 
    className={`btn btn-${variant} btn-${size} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const Modal = ({ show, onHide, title, children, size = 'lg' }) => (
  <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
    <div className={`modal-dialog modal-${size}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="btn-close" onClick={onHide}></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
);

const menuItems = [
      // {
      //   key: 'dashboard',
      //   icon: Home,
      //   label: 'الرئيسية',
      //   title: 'لوحة التحكم الرئيسية'
      // },
      // {
      //   key: 'students',
      //   icon: BookOpen,
      //   label: 'مواد الدراسة',
      //   title: 'المواد الدراسية الخاصة بي'
      // },
      {
        key: 'schedule',
        icon: Calendar,
        label: 'جدولي',
        title: 'الجدول الدراسي الأسبوعي'
      },
      {
        key: 'assignments',
        icon: MessageCircle,
        label: 'الرسائل',
        title: 'التواصل مع المعلمين'
      },
      // {
      //   key: 'grades',
      //   icon: MessageCircle,
      //   label: 'الرسائل',
      //   title: 'التواصل مع المعلمين'
      // }
    ];



// المكون الرئيسي
const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const menuItems = [
      {
        key: 'dashboard',
        icon: Home,
        label: 'الرئيسية',
        title: 'لوحة التحكم الرئيسية'
      },
      {
        key: 'students',
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
        key: 'assignments',
        icon: MessageCircle,
        label: 'الرسائل',
        title: 'التواصل مع المعلمين'
      },
      {
        key: 'grades',
        icon: MessageCircle,
        label: 'الرسائل',
        title: 'التواصل مع المعلمين'
      }
    ];

  // بيانات وهمية للتطوير
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

  const renderDashboard = () => (
    <div>
      {/* <TeacherSidebar userData={teacherData} menuItems={menuItems} /> */}
      <div className="row mb-4">
        <StatCard icon={Users} title="إجمالي الطلاب" value={stats.totalStudents} color="primary" />
        <StatCard icon={BookOpen} title="الصفوف" value={stats.totalClasses} color="success" />
        <StatCard icon={FileText} title="الواجبات المعلقة" value={stats.pendingAssignments} color="warning" />
        <StatCard icon={MessageCircle} title="الرسائل الجديدة" value={stats.messages} color="info" />
      </div>

      <div className="row">
        <div className="col-md-8">
          <ContainerCard title="الجدول الدراسي اليوم">
            <div className="row">
              {schedule.map((item, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card border-start main-border-color border-4">
                    <div className="card-body py-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">{item.time}</h6>
                          <p className="mb-0 text-muted small">{item.class} - {item.subject}</p>
                          <small className="text-muted">{item.room}</small>
                        </div>
                        <IconButton icon={Eye} variant="outline-dark" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContainerCard>
        </div>

        <div className="col-md-4">
          <ContainerCard className='mb-3' title="الإشعارات الحديثة">
            <div className="list-group list-group-flush">
              <div className="list-group-item d-flex align-items-start">
                <Bell size={16} className="text-warning me-2 mt-1" />
                <div>
                  <h6 className="mb-1">واجب جديد مستحق</h6>
                  <p className="mb-1 small">الصف الثالث أ - الرياضيات</p>
                  <small className="text-muted">منذ ساعتين</small>
                </div>
              </div>
              <div className="list-group-item d-flex align-items-start">
                <MessageCircle size={16} className="text-info me-2 mt-1" />
                <div>
                  <h6 className="mb-1">رسالة من ولي أمر</h6>
                  <p className="mb-1 small">استفسار عن درجات فاطمة</p>
                  <small className="text-muted">منذ 3 ساعات</small>
                </div>
              </div>
              <div className="list-group-item d-flex align-items-start">
                <Users size={16} className="text-success me-2 mt-1" />
                <div>
                  <h6 className="mb-1">طالب جديد</h6>
                  <p className="mb-1 small">انضم للصف الرابع ب</p>
                  <small className="text-muted">أمس</small>
                </div>
              </div>
            </div>
          </ContainerCard>
        </div>
      </div>
    </div>
  );


  const renderGrades = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>إدارة الدرجات</h4>
        <div className="d-flex gap-2">
          <select className="form-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">اختر الصف</option>
            {teacherData.classes.map((cls, index) => (
              <option key={index} value={cls}>{cls}</option>
            ))}
          </select>
          <select className="form-select" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="">اختر المادة</option>
            {teacherData.subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
          <Button onClick={() => openModal('addGrades')}>
            <Plus size={16} className="mx-1" /> إضافة درجات
          </Button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-primary">متوسط الصف</h5>
              <h2 className="text-success">87.5%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-info">أعلى درجة</h5>
              <h2 className="text-success">98%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-warning">أقل درجة</h5>
              <h2 className="text-danger">65%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-secondary">المتميزون</h5>
              <h2 className="text-primary">12</h2>
            </div>
          </ContainerCard>
        </div>
      </div>

      <ContainerCard>
        <DataTable
          headers={['اسم الطالب', 'الاختبار الأول', 'الاختبار الثاني', 'الواجبات', 'المشاركة', 'المعدل النهائي']}
          data={[
            ['محمد أحمد', '88', '85', '90', '85', '87%'],
            ['فاطمة علي', '95', '90', '98', '95', '94.5%'],
            ['عبدالله سالم', '75', '80', '70', '75', '75%'],
            ['نور الهدى', '98', '95', '100', '98', '97.75%']
          ]}
          actions={[
            { icon: <Edit size={14} />, variant: 'outline-warning', title: 'تعديل درجات', onClick: (index) => openModal('editGrades') },
            { icon: <Eye size={14} />, variant: 'outline-info', title: 'تفاصيل', onClick: (index) => openModal('gradeDetails') }
          ]}
        />
      </ContainerCard>
    </div>
  );

  const renderAssignments = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>إدارة الواجبات والأنشطة</h4>
        <Button onClick={() => openModal('createAssignment')}>
          <Plus size={16} className="me-1" /> إنشاء واجب جديد
        </Button>
      </div>

      <ContainerCard>
        <DataTable
          headers={['عنوان الواجب', 'الصف', 'تاريخ التسليم', 'المشاركون', 'الحالة']}
          data={assignments}
          actions={[
            { icon: <Eye size={14} />, variant: 'outline-info', title: 'عرض التفاصيل', onClick: (index) => openModal('viewAssignment') },
            { icon: <Edit size={14} />, variant: 'outline-warning', title: 'تعديل', onClick: (index) => openModal('editAssignment') },
            { icon: <Download size={14} />, variant: 'outline-success', title: 'تحميل الإجابات', onClick: (index) => {} },
            { icon: <Trash2 size={14} />, variant: 'outline-danger', title: 'حذف', onClick: (index) => {} }
          ]}
        />
      </ContainerCard>
    </div>
  );

  const renderSchedule = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>الجدول الدراسي وإدارة الحصص</h4>
        <Button onClick={() => openModal('uploadSchedule')}>
          <Upload size={16} className="me-1" /> رفع جدول جديد
        </Button>
      </div>

      <div className="row">
        <div className="col-md-8">
          <ContainerCard title="الجدول الأسبوعي">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>الوقت</th>
                    <th>الأحد</th>
                    <th>الاثنين</th>
                    <th>الثلاثاء</th>
                    <th>الأربعاء</th>
                    <th>الخميس</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">08:00-09:00</td>
                    <td className="bg-light">الصف 3أ<br/><small>رياضيات</small></td>
                    <td className="bg-primary text-white">الصف 4ب<br/><small>علوم</small></td>
                    <td className="bg-light">الصف 3أ<br/><small>رياضيات</small></td>
                    <td className="bg-success text-white">الصف 5أ<br/><small>رياضيات</small></td>
                    <td className="bg-light">الصف 3أ<br/><small>علوم</small></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">09:00-10:00</td>
                    <td className="bg-primary text-white">الصف 4ب<br/><small>علوم</small></td>
                    <td className="bg-light">الصف 3أ<br/><small>رياضيات</small></td>
                    <td className="bg-success text-white">الصف 5أ<br/><small>رياضيات</small></td>
                    <td className="bg-light">الصف 4ب<br/><small>علوم</small></td>
                    <td className="bg-primary text-white">الصف 4ب<br/><small>علوم</small></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">10:30-11:30</td>
                    <td className="bg-success text-white">الصف 5أ<br/><small>رياضيات</small></td>
                    <td className="bg-success text-white">الصف 5أ<br/><small>رياضيات</small></td>
                    <td className="bg-light">الصف 4ب<br/><small>علوم</small></td>
                    <td className="bg-light">الصف 3أ<br/><small>رياضيات</small></td>
                    <td className="bg-success text-white">الصف 5أ<br/><small>رياضيات</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContainerCard>
        </div>

        <div className="col-md-4">
          <ContainerCard title="إحصائيات الحصص">
            <div className="list-group list-group-flush">
              <div className="list-group-item d-flex justify-content-between">
                <span>حصص هذا الأسبوع</span>
                <span className="badge bg-primary">15</span>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>حصص الرياضيات</span>
                <span className="badge bg-success">8</span>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>حصص العلوم</span>
                <span className="badge bg-info">7</span>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>الحصص المتبقية اليوم</span>
                <span className="badge bg-warning">3</span>
              </div>
            </div>
          </ContainerCard>

          <ContainerCard title="ملفات الجدول" className="mt-3">
            <div className="d-grid gap-2">
              <Button variant="outline-primary">
                <Download size={16} className="me-1" /> تحميل الجدول الحالي
              </Button>
              <Button variant="outline-success" onClick={() => openModal('uploadSchedule')}>
                <Upload size={16} className="me-1" /> رفع جدول جديد
              </Button>
            </div>
          </ContainerCard>
        </div>
      </div>
    </div>
  );

  const renderModal = () => {
    if (!showModal) return null;

    const getModalContent = () => {
      switch (modalType) {
        case 'createAssignment':
          return (
            <CreateAssignment closeModal={closeModal} teacherData={teacherData} />
          );
        case 'uploadSchedule':
          return (
            <UploadSchedule closeModal={closeModal} />
          );

        case 'addGrades':
          return (
            <AddStudentGrade closeModal={closeModal} teacherData={teacherData} />
            // <form>
            //   <div className="row mb-3">
            //     <div className="col-md-6">
            //       <label className="form-label">الصف</label>
            //       <select className="form-select">
            //         <option>اختر الصف</option>
            //         {teacherData.classes.map((cls, index) => (
            //           <option key={index} value={cls}>{cls}</option>
            //         ))}
            //       </select>
            //     </div>
            //     <div className="col-md-6">
            //       <label className="form-label">المادة</label>
            //       <select className="form-select">
            //         <option>اختر المادة</option>
            //         {teacherData.subjects.map((subject, index) => (
            //           <option key={index} value={subject}>{subject}</option>
            //         ))}
            //       </select>
            //     </div>
            //   </div>
            //   <div className="mb-3">
            //     <label className="form-label">نوع التقييم</label>
            //     <select className="form-select">
            //       <option>اختبار شهري</option>
            //       <option>اختبار نصف فصلي</option>
            //       <option>واجبات</option>
            //       <option>مشاركة</option>
            //       <option>أنشطة</option>
            //     </select>
            //   </div>
            //   <div className="table-responsive">
            //     <table className="table table-bordered">
            //       <thead>
            //         <tr>
            //           <th>اسم الطالب</th>
            //           <th>الدرجة</th>
            //           <th>من</th>
            //           <th>ملاحظات</th>
            //         </tr>
            //       </thead>
            //       <tbody>
            //         {['محمد أحمد', 'فاطمة علي', 'عبدالله سالم', 'نور الهدى'].map((name, index) => (
            //           <tr key={index}>
            //             <td>{name}</td>
            //             <td><input type="number" className="form-control form-control-sm" /></td>
            //             <td><input type="number" className="form-control form-control-sm" defaultValue="100" /></td>
            //             <td><input type="text" className="form-control form-control-sm" /></td>
            //           </tr>
            //         ))}
            //       </tbody>
            //     </table>
            //   </div>
            //   <div className="d-flex justify-content-end gap-2">
            //     <Button variant="secondary" onClick={closeModal}>إلغاء</Button>
            //     <Button onClick={closeModal}>حفظ الدرجات</Button>
            //   </div>
            // </form>
          );

        default:
          return <p>محتوى النافذة المنبثقة</p>;
      }
    };

    return (
      <Modal show={showModal} onHide={closeModal} title={getModalTitle()} size="xl">
        {getModalContent()}
      </Modal>
    );
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'createAssignment': return 'إنشاء واجب جديد';
      case 'uploadSchedule': return 'رفع جدول حصص جديد';
      case 'addGrades': return 'إضافة درجات';
      default: return 'نافذة منبثقة';
    }
  };

  return (
    <div className="container-fluid" dir="rtl">
      <TeacherSidebar userData={teacherData} menuItems={menuItems} />
      {/* Sidebar */}
      {/* Navigation Tabs */}
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          {/* <button 
            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 size={16} className="me-1" /> لوحة التحكم
          </button> */}
        </li>
        <li className="nav-item">
          {/* <button 
            className={`nav-link ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <Users size={16} className="me-1" /> الطلاب
          </button> */}
        </li>
        <li className="nav-item">
          {/* <button 
            className={`nav-link ${activeTab === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveTab('grades')}
          >
            <FileText size={16} className="me-1" /> الدرجات
          </button> */}
        </li>
        <li className="nav-item">
          {/* <button 
            className={`nav-link ${activeTab === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <BookOpen size={16} className="me-1" /> الواجبات
          </button> */}
        </li>
        <li className="nav-item">
          {/* <button 
            className={`nav-link ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <Calendar size={16} className="me-1" /> الجدول والحصص
          </button> */}
        </li>
      </ul>

      {/* Content */}
      <div className="tab-content">
        {/* {activeTab === 'dashboard' && renderDashboard()} */}
        {/* {activeTab === 'students  ' && renderStudents()} */}
        {/* {activeTab === 'grades' && renderGrades()} */}
        {/* {activeTab === 'assignments' && renderAssignments()} */}
        {/* {activeTab === 'schedule' && (<TeacherSchedule/>)} */}
      </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
};



export default TeacherDashboard;