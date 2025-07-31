import React, { useState } from 'react';
import {User, Users, BookOpen, Calendar, MessageSquare, BarChart3, Settings, Bell, Search, Plus, FileText, UserCheck, Home, GraduationCap, ClipboardList, Megaphone, Eye, Edit, Trash2, Download} from 'lucide-react';
import ContainerCard from '../../../components/common/UI/ContainerCard';
import DataStatusIndicator from '../../../components/common/UI/DataStatusIndicator';
import SchoolPrincipalSidebar from './SchoolmasterSidebar';

const SchoolPrincipalDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(5);

  // Sample data
  const schoolStats = {
    totalStudents: 450,
    totalTeachers: 25,
    totalClasses: 18,
    attendance: 92
  };

  const recentActivities = [
    { id: 1, type: 'teacher', message: 'المعلم أحمد محمد رفع فيديو تعليمي جديد', time: '10:30 ص' },
    { id: 2, type: 'student', message: 'تم تسجيل 15 طالب جديد في الصف الرابع', time: '09:15 ص' },
    { id: 3, type: 'parent', message: 'ولي أمر الطالبة فاطمة أرسل استفسار', time: '08:45 ص' },
    { id: 4, type: 'system', message: 'تم تحديث الجدول الدراسي للصف الخامس', time: '08:00 ص' }
  ];

  const teachers = [
    { id: 1, name: 'أحمد محمد علي', subject: 'الرياضيات', classes: 'الرابع، الخامس', status: 'نشط' },
    { id: 2, name: 'فاطمة أحمد', subject: 'اللغة العربية', classes: 'الأول، الثاني', status: 'نشط' },
    { id: 3, name: 'محمد عبدالله', subject: 'العلوم', classes: 'الثالث، السادس', status: 'غائب' },
    { id: 4, name: 'مريم حسن', subject: 'التربية الإسلامية', classes: 'جميع الصفوف', status: 'نشط' }
  ];

  const students = [
    { id: 1, name: 'عمر أحمد محمد', class: 'الصف الرابع أ', attendance: 95, grade: 'ممتاز' },
    { id: 2, name: 'فاطمة علي حسن', class: 'الصف الخامس ب', attendance: 88, grade: 'جيد جداً' },
    { id: 3, name: 'محمد عبدالرحمن', class: 'الصف الثالث أ', attendance: 92, grade: 'ممتاز' },
    { id: 4, name: 'عائشة محمود', class: 'الصف السادس أ', attendance: 85, grade: 'جيد' }
  ];

  const renderDashboard = () => (
    <div className="row">
      {/* Statistics Cards */}
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white h-100">
              <div className="card-body d-flex align-items-center">
                <Users className="me-3" size={40} />
                <div>
                  <h5 className="card-title mb-0">{schoolStats.totalStudents}</h5>
                  <p className="card-text mb-0">إجمالي الطلاب</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white h-100">
              <div className="card-body d-flex align-items-center">
                <GraduationCap className="me-3" size={40} />
                <div>
                  <h5 className="card-title mb-0">{schoolStats.totalTeachers}</h5>
                  <p className="card-text mb-0">إجمالي المعلمين</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-info text-white h-100">
              <div className="card-body d-flex align-items-center">
                <Home className="me-3" size={40} />
                <div>
                  <h5 className="card-title mb-0">{schoolStats.totalClasses}</h5>
                  <p className="card-text mb-0">إجمالي الصفوف</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-white h-100">
              <div className="card-body d-flex align-items-center">
                <UserCheck className="me-3" size={40} />
                <div>
                  <h5 className="card-title mb-0">{schoolStats.attendance}%</h5>
                  <p className="card-text mb-0">معدل الحضور</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}

      {/* <ContainerCard title={"الأنشطة الأخيرة"}  */}
      <div className="col-lg-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">الأنشطة الأخيرة</h5>
            <button className="btn btn-sm btn-outline-primary">عرض الكل</button>
          </div>
          <div className="card-body">
            {recentActivities.map(activity => (
              <div key={activity.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                <div className="me-3">
                  {activity.type === 'teacher' && <GraduationCap className="text-success" size={24} />}
                  {activity.type === 'student' && <Users className="text-primary" size={24} />}
                  {activity.type === 'parent' && <MessageSquare className="text-warning" size={24} />}
                  {activity.type === 'system' && <Settings className="text-info" size={24} />}
                </div>
                <div className="flex-grow-1">
                  <p className="mb-1">{activity.message}</p>
                  <small className="text-muted">{activity.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">إجراءات سريعة</h5>
          </div>
          <div className="card-body">
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <Plus className="me-2" size={16} />
                إضافة معلم جديد
              </button>
              <button className="btn btn-outline-success btn-sm">
                <Users className="me-2" size={16} />
                تسجيل طالب جديد
              </button>
              <button className="btn btn-outline-info btn-sm">
                <Megaphone className="me-2" size={16} />
                إرسال إعلان
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <BarChart3 className="me-2" size={16} />
                عرض التقارير
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">إدارة المعلمين</h5>
        <button className="btn btn-primary">
          <Plus className="me-2" size={16} />
          إضافة معلم جديد
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <Search size={16} />
              </span>
              <input type="text" className="form-control" placeholder="البحث عن معلم..." />
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>اسم المعلم</th>
                <th>التخصص</th>
                <th>الصفوف المُدرسة</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.classes}</td>
                  <td>
                    <span className={`badge ${teacher.status === 'نشط' ? 'bg-success' : 'bg-danger'}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <Eye size={14} />
                      </button>
                      <button className="btn btn-outline-warning">
                        <Edit size={14} />
                      </button>
                      <button className="btn btn-outline-danger">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">إدارة الطلاب</h5>
        <button className="btn btn-primary">
          <Plus className="me-2" size={16} />
          تسجيل طالب جديد
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <Search size={16} />
              </span>
              <input type="text" className="form-control" placeholder="البحث عن طالب..." />
            </div>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option value="">جميع الصفوف</option>
              <option value="1">الصف الأول</option>
              <option value="2">الصف الثاني</option>
              <option value="3">الصف الثالث</option>
              <option value="4">الصف الرابع</option>
              <option value="5">الصف الخامس</option>
              <option value="6">الصف السادس</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>اسم الطالب</th>
                <th>الصف</th>
                <th>نسبة الحضور</th>
                <th>التقدير</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>
                    <div className="progress" style={{height: '20px'}}>
                      <div 
                        className="progress-bar" 
                        style={{width: `${student.attendance}%`}}
                        aria-valuenow={student.attendance}
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      >
                        {student.attendance}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${
                      student.grade === 'ممتاز' ? 'bg-success' : 
                      student.grade === 'جيد جداً' ? 'bg-info' : 'bg-warning'
                    }`}>
                      {student.grade}
                    </span>
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <Eye size={14} />
                      </button>
                      <button className="btn btn-outline-warning">
                        <Edit size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="row">
      <div className="col-12 mb-4">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">التقارير والإحصائيات</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card border-primary">
                  <div className="card-body text-center">
                    <BarChart3 className="text-primary mb-3" size={48} />
                    <h6>تقرير الأداء الأكاديمي</h6>
                    <p className="text-muted small">تقرير شامل عن أداء الطلاب والصفوف</p>
                    <button className="btn btn-outline-primary btn-sm">
                      <Download className="me-2" size={14} />
                      تحميل التقرير
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-success">
                  <div className="card-body text-center">
                    <UserCheck className="text-success mb-3" size={48} />
                    <h6>تقرير الحضور والغياب</h6>
                    <p className="text-muted small">إحصائيات مفصلة عن حضور الطلاب</p>
                    <button className="btn btn-outline-success btn-sm">
                      <Download className="me-2" size={14} />
                      تحميل التقرير
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-info">
                  <div className="card-body text-center">
                    <GraduationCap className="text-info mb-3" size={48} />
                    <h6>تقرير المعلمين</h6>
                    <p className="text-muted small">تقرير عن أداء وأنشطة المعلمين</p>
                    <button className="btn btn-outline-info btn-sm">
                      <Download className="me-2" size={14} />
                      تحميل التقرير
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnnouncements = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">الإعلانات والتواصل</h5>
        <button className="btn btn-primary">
          <Plus className="me-2" size={16} />
          إعلان جديد
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-md-8">
            <textarea 
              className="form-control" 
              rows="4" 
              placeholder="اكتب إعلانك هنا..."
            ></textarea>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">المرسل إليه</label>
              <select className="form-select">
                <option value="all">جميع المستخدمين</option>
                <option value="teachers">المعلمين فقط</option>
                <option value="parents">أولياء الأمور فقط</option>
                <option value="students">الطلاب فقط</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">الأولوية</label>
              <select className="form-select">
                <option value="normal">عادي</option>
                <option value="important">مهم</option>
                <option value="urgent">عاجل</option>
              </select>
            </div>
            <button className="btn btn-success w-100">
              <Megaphone className="me-2" size={16} />
              إرسال الإعلان
            </button>
          </div>
        </div>
        
        <hr />
        
        <h6>الإعلانات الأخيرة</h6>
        <div className="list-group">
          <div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">اجتماع أولياء الأمور</h6>
              <small>منذ 3 أيام</small>
            </div>
            <p className="mb-1">يُرجى من جميع أولياء الأمور حضور الاجتماع الدوري يوم الخميس القادم</p>
            <small className="text-muted">مرسل لجميع أولياء الأمور</small>
          </div>
          <div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">تحديث الجداول الدراسية</h6>
              <small>منذ أسبوع</small>
            </div>
            <p className="mb-1">تم تحديث الجداول الدراسية لجميع الصفوف. يُرجى مراجعة التحديثات</p>
            <small className="text-muted">مرسل للمعلمين والطلاب</small>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid" dir="rtl">
      <div className="row">
        <SchoolPrincipalSidebar />
        {/* Sidebar */}
        {/* <div className="col-lg-2 mb-4">
          <div className="card">
            <div className="card-body p-0">
              <div className="nav nav-pills flex-column">
                <button 
                  className={`nav-link text-end ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <BarChart3 className="me-2" size={16} />
                  لوحة التحكم
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'teachers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('teachers')}
                >
                  <GraduationCap className="me-2" size={16} />
                  المعلمون
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'students' ? 'active' : ''}`}
                  onClick={() => setActiveTab('students')}
                >
                  <Users className="me-2" size={16} />
                  الطلاب
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'classes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('classes')}
                >
                  <Home className="me-2" size={16} />
                  الصفوف
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'schedule' ? 'active' : ''}`}
                  onClick={() => setActiveTab('schedule')}
                >
                  <Calendar className="me-2" size={16} />
                  الجداول
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'reports' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reports')}
                >
                  <FileText className="me-2" size={16} />
                  التقارير
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'announcements' ? 'active' : ''}`}
                  onClick={() => setActiveTab('announcements')}
                >
                  <Megaphone className="me-2" size={16} />
                  الإعلانات
                </button>
                <button 
                  className={`nav-link text-end ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="me-2" size={16} />
                  الإعدادات
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        {/* <div className="col-lg-10">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'teachers' && renderTeachers()}
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'announcements' && renderAnnouncements()}
          {activeTab === 'classes' && (
            <div className="alert alert-info">
              <h5>إدارة الصفوف</h5>
              <p>هذا القسم قيد التطوير ويتضمن إدارة الصفوف والشعب وتوزيع الطلاب.</p>
            </div>
          )}
          {activeTab === 'schedule' && (
            <div className="alert alert-info">
              <h5>إدارة الجداول الدراسية</h5>
              <p>هذا القسم قيد التطوير ويتضمن إنشاء وتعديل الجداول الدراسية.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="alert alert-info">
              <h5>إعدادات المدرسة</h5>
              <p>هذا القسم قيد التطوير ويتضمن إعدادات المدرسة العامة.</p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default SchoolPrincipalDashboard;