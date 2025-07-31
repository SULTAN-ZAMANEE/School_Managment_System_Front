import React, { useState } from 'react';
import {
    Users,
    GraduationCap,
    BookOpen,
    Calendar,
    BarChart3,
    Bell,
    Settings,
    UserCheck,
    FileText,
    TrendingUp,
    School,
    UserPlus,
    ClipboardList,
    MessageSquare,
    Award,
    PieChart,
    Filter,
    Search,
    Plus,
    Edit,
    Eye,
    Download,
    Clock
} from 'lucide-react';
import StudentManagement from './StudentManagement';
import TeacherManagement from './TeacherManagement';    
import GradesReports from './ReportManagement';
import AttendanceSystem from './AttendanceManagement';

const SchoolDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const [userRole] = useState('school_principal');

    // بيانات وهمية للعرض
    const schoolStats = {
        totalStudents: 450,
        totalTeachers: 25,
        totalClasses: 18,
        attendanceRate: 94.5,
        primaryStudents: 280,
        middleStudents: 120,
        highStudents: 50
    };

    const recentActivities = [
        { id: 1, type: 'attendance', message: 'تم تسجيل الحضور للصف الأول أ', time: 'منذ 10 دقائق' },
        { id: 2, type: 'grade', message: 'تم إدخال درجات امتحان الرياضيات للصف الثالث', time: 'منذ 30 دقيقة' },
        { id: 3, type: 'parent', message: 'استفسار جديد من ولي أمر الطالب أحمد محمد', time: 'منذ ساعة' },
        { id: 4, type: 'teacher', message: 'طلب إجازة من المعلمة سارة أحمد', time: 'منذ ساعتين' }
    ];

    

    const menuItems = [
        { id: 'overview', label: 'لوحة التحكم', icon: BarChart3 },
        { id: 'students', label: 'إدارة الطلاب', icon: Users },
        { id: 'teachers', label: 'إدارة المعلمين', icon: GraduationCap },
        { id: 'grades', label: 'الدرجات والتقارير', icon: Award },
        { id: 'attendance', label: 'الحضور والغياب', icon: UserCheck },
        { id: 'communication', label: 'التواصل', icon: MessageSquare },
        { id: 'settings', label: 'الإعدادات', icon: Settings }
    ];

    

    
    

    const ParentCommunication = () => (
        <div className="container-fluid">
            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-primary fw-medium mb-1 small">إجمالي الطلاب</p>
                                <p className="display-6 fw-bold text-primary mb-0">{schoolStats.totalStudents}</p>
                                <p className="text-primary mb-0" style={{ fontSize: '0.75rem' }}>جميع المراحل</p>
                            </div>
                            <Users size={40} className="text-primary" />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-success bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-success fw-medium mb-1 small">المعلمون</p>
                                <p className="display-6 fw-bold text-success mb-0">{schoolStats.totalTeachers}</p>
                                <p className="text-success mb-0" style={{ fontSize: '0.75rem' }}>نشط</p>
                            </div>
                            <GraduationCap size={40} className="text-success" />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f3e8ff' }}>
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="fw-medium mb-1 small" style={{ color: '#7c3aed' }}>الصفوف</p>
                                <p className="display-6 fw-bold mb-0" style={{ color: '#5b21b6' }}>{schoolStats.totalClasses}</p>
                                <p className="mb-0" style={{ color: '#7c3aed', fontSize: '0.75rem' }}>فصل دراسي</p>
                            </div>
                            <BookOpen size={40} style={{ color: '#7c3aed' }} />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-warning bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-warning fw-medium mb-1 small">نسبة الحضور</p>
                                <p className="display-6 fw-bold text-warning mb-0">{schoolStats.attendanceRate}%</p>
                                <p className="text-warning mb-0" style={{ fontSize: '0.75rem' }}>اليوم</p>
                            </div>
                            <UserCheck size={40} className="text-warning" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4 d-flex align-items-center gap-2">
                                <Bell size={20} className="text-primary" />
                                الأنشطة الحديثة
                            </h5>
                            <div className="d-flex flex-column gap-3">
                                {recentActivities.map(activity => (
                                    <div key={activity.id} className="d-flex align-items-start gap-3 p-3 rounded hover-bg-light">
                                        <div className={`rounded-circle mt-2 ${activity.type === 'attendance' ? 'bg-success' :
                                            activity.type === 'grade' ? 'bg-primary' :
                                                activity.type === 'parent' ? 'bg-warning' :
                                                    'bg-info'
                                            }`} style={{ width: '8px', height: '8px' }}></div>
                                        <div className="flex-grow-1">
                                            <p className="text-dark small mb-1">{activity.message}</p>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4 d-flex align-items-center gap-2">
                                <BarChart3 size={20} className="text-success" />
                                توزيع الطلاب
                            </h5>
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small fw-medium">الابتدائية</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="progress" style={{ width: '96px', height: '8px' }}>
                                            <div className="progress-bar bg-primary" style={{ width: '83%' }}></div>
                                        </div>
                                        <span className="small text-muted">{schoolStats.primaryStudents}</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small fw-medium">المتوسطة</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="progress" style={{ width: '96px', height: '8px' }}>
                                            <div className="progress-bar bg-success" style={{ width: '50%' }}></div>
                                        </div>
                                        <span className="small text-muted">{schoolStats.middleStudents}</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small fw-medium">الثانوية</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="progress" style={{ width: '96px', height: '8px' }}>
                                            <div className="progress-bar" style={{ width: '20%', backgroundColor: '#7c3aed' }}></div>
                                        </div>
                                        <span className="small text-muted">{schoolStats.highStudents}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    const Overview = () => (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h2 fw-bold text-dark">التواصل مع أولياء الأمور</h2>
                <button className="btn btn-success d-flex align-items-center gap-2">
                    <MessageSquare size={20} />
                    رسالة جديدة
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card bg-primary bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-primary fw-medium mb-1 small">رسائل اليوم</p>
                                <p className="h3 fw-bold text-primary mb-0">15</p>
                            </div>
                            <MessageSquare size={32} className="text-primary" />
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-success bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-success fw-medium mb-1 small">تم الرد عليها</p>
                                <p className="h3 fw-bold text-success mb-0">12</p>
                            </div>
                            <UserCheck size={32} className="text-success" />
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-warning bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-warning fw-medium mb-1 small">في الانتظار</p>
                                <p className="h3 fw-bold text-warning mb-0">3</p>
                            </div>
                            <Clock size={32} className="text-warning" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4">الرسائل الحديثة</h5>
                            <div className="d-flex flex-column gap-3">
                                {[
                                    { name: 'أحمد محمد', message: 'استفسار عن درجات ابني في الرياضيات', time: 'منذ 5 دقائق', status: 'جديد' },
                                    { name: 'فاطمة علي', message: 'طلب موعد لمقابلة معلمة اللغة العربية', time: 'منذ 15 دقيقة', status: 'تم الرد' },
                                    { name: 'محمد سالم', message: 'تبرير غياب الطالبة سارة لظروف صحية', time: 'منذ 30 دقيقة', status: 'معلق' },
                                    { name: 'نورا أحمد', message: 'شكر على الجهود المبذولة مع الطلاب', time: 'منذ ساعة', status: 'تم الرد' }
                                ].map((msg, i) => (
                                    <div key={i} className="border-bottom pb-3">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <span className="fw-medium">{msg.name}</span>
                                                    <span className={`badge ${msg.status === 'جديد' ? 'bg-danger' :
                                                        msg.status === 'تم الرد' ? 'bg-success' :
                                                            'bg-warning'
                                                        }`}>
                                                        {msg.status}
                                                    </span>
                                                </div>
                                                <p className="text-muted small mb-1">{msg.message}</p>
                                                <p className="text-muted" style={{ fontSize: '0.75rem' }}>{msg.time}</p>
                                            </div>
                                            <button className="btn btn-sm btn-outline-primary">
                                                رد
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4">إرسال إشعار جماعي</h5>
                            <div className="d-flex flex-column gap-3">
                                <div>
                                    <label className="form-label small fw-medium">إلى:</label>
                                    <select className="form-select">
                                        <option>جميع أولياء الأمور</option>
                                        <option>أولياء أمور الصف الأول</option>
                                        <option>أولياء أمور الصف الثاني</option>
                                        <option>أولياء أمور الصف الثالث</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label small fw-medium">الموضوع:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="اكتب موضوع الرسالة"
                                    />
                                </div>
                                <div>
                                    <label className="form-label small fw-medium">الرسالة:</label>
                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        placeholder="اكتب نص الرسالة هنا..."
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary w-100">
                                    إرسال الإشعار
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa', fontFamily: 'Arial', direction: 'rtl' }}>
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <div className="d-flex align-items-center gap-3">
                            <School size={32} className="text-primary" />
                            <div>
                                <h1 className="h4 fw-bold text-dark mb-0">مدرسة النور الابتدائية</h1>
                                <p className="small text-muted mb-0">نظام إدارة المدارس - المرحلة الأولى</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-link text-muted position-relative p-2">
                                <Bell size={24} />
                                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                                    3
                                </span>
                            </button>
                            <div className="d-flex align-items-center gap-2">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '32px', height: '32px' }}>
                                    م
                                </div>
                                <span className="small fw-medium">مدير المدرسة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container-fluid py-4">
                <div className="row g-4">
                    {/* Sidebar */}
                    <aside className="col-md-3 col-lg-2">
                        <div className="card shadow-sm">
                            <div className="card-body p-3">
                                <nav className="d-flex flex-column gap-1">
                                    {menuItems.map(item => {
                                        const IconComponent = item.icon;
                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => setActiveTab(item.id)}
                                                className={`btn d-flex align-items-center gap-2 justify-content-start text-end ${activeTab === item.id
                                                    ? 'btn-primary'
                                                    : 'btn-outline-light text-dark border-0'
                                                    }`}
                                            >
                                                <IconComponent size={20} />
                                                {item.label}
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="col-md-9 col-lg-10">
                        {activeTab === 'overview' && <Overview />}
                        {activeTab === 'students' && <StudentManagement />}
                        {activeTab === 'teachers' && <TeacherManagement />}
                        {activeTab === 'grades' && <GradesReports />}
                        {activeTab === 'attendance' && <AttendanceSystem />}
                        {activeTab === 'communication' && <ParentCommunication />}
                        {activeTab === 'settings' && (
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h2 className="h2 fw-bold text-dark mb-4">الإعدادات</h2>
                                    <p className="text-muted">صفحة الإعدادات قيد التطوير...</p>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>


            {/* Bootstrap CSS */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

            {/* Custom CSS for RTL and hover effects */}
            <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        
        .btn:focus {
          box-shadow: none;
        }
        
        .table th, .table td {
          border-color: #e9ecef;
        }
        
        .progress {
          background-color: #e9ecef;
        }
        
        .card {
          transition: box-shadow 0.15s ease-in-out;
        }
        
        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
        </div>
    );




};

export default SchoolDashboard;