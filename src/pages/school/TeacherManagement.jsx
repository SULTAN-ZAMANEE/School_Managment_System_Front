import React from "react";
import { UserPlus, Users, Edit, Eye, Calendar, UserCheck } from "lucide-react";


const schoolStats = {
        totalStudents: 450,
        totalTeachers: 25,
        totalClasses: 18,
        attendanceRate: 94.5,
        primaryStudents: 280,
        middleStudents: 120,
        highStudents: 50
    };

const TeacherManagement = () => (
    <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h2 fw-bold text-dark">إدارة المعلمين</h2>
            <button className="btn btn-success d-flex align-items-center gap-2">
                <UserPlus size={20} />
                إضافة معلم جديد
            </button>
        </div>

        <div className="row g-3 mb-4">
            <div className="col-md-4">
                <div className="card bg-success bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-success fw-medium mb-1 small">إجمالي المعلمين</p>
                            <p className="h3 fw-bold text-success mb-0">{schoolStats.totalTeachers}</p>
                        </div>
                        <Users size={32} className="text-success" />
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-primary bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-primary fw-medium mb-1 small">معلمين نشطين</p>
                            <p className="h3 fw-bold text-primary mb-0">23</p>
                        </div>
                        <UserCheck size={32} className="text-primary" />
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-warning bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-warning fw-medium mb-1 small">في إجازة</p>
                            <p className="h3 fw-bold text-warning mb-0">2</p>
                        </div>
                        <Calendar size={32} className="text-warning" />
                    </div>
                </div>
            </div>
        </div>

        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title fw-semibold mb-4">قائمة المعلمين</h5>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th className="text-end">اسم المعلم</th>
                                <th className="text-end">التخصص</th>
                                <th className="text-end">الصفوف المُدرسة</th>
                                <th className="text-end">سنوات الخبرة</th>
                                <th className="text-end">الحالة</th>
                                <th className="text-end">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map(i => (
                                <tr key={i}>
                                    <td className="text-end">سارة أحمد محمد</td>
                                    <td className="text-end">الرياضيات</td>
                                    <td className="text-end">الثالث أ، الرابع ب</td>
                                    <td className="text-end">8 سنوات</td>
                                    <td className="text-end">
                                        <span className="badge bg-success">نشط</span>
                                    </td>
                                    <td className="text-end">
                                        <div className="d-flex gap-1">
                                            <button className="btn btn-sm btn-outline-primary">
                                                <Eye size={16} />
                                            </button>
                                            <button className="btn btn-sm btn-outline-success">
                                                <Edit size={16} />
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
    </div>
);

export default TeacherManagement;