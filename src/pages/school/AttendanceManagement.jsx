import React from "react";
import { Download, UserCheck, Users, Calendar, Bell } from "lucide-react";




const schoolStats = {
    totalStudents: 450,
    totalTeachers: 25,
    totalClasses: 18,
    attendanceRate: 94.5,
    primaryStudents: 280,
    middleStudents: 120,
    highStudents: 50
};
const AttendanceManagement = () => (
    <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h2 fw-bold text-dark">نظام الحضور والغياب</h2>
            <div className="d-flex gap-2">
                <button className="btn btn-success">
                    تسجيل الحضور
                </button>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <Download size={20} />
                    تقرير الحضور
                </button>
            </div>
        </div>

        <div className="row g-3 mb-4">
            <div className="col-md-3">
                <div className="card bg-success bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-success fw-medium mb-1 small">نسبة الحضور</p>
                            <p className="h3 fw-bold text-success mb-0">{schoolStats.attendanceRate}%</p>
                        </div>
                        <UserCheck size={32} className="text-success" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card bg-primary bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-primary fw-medium mb-1 small">حاضرين اليоم</p>
                            <p className="h3 fw-bold text-primary mb-0">425</p>
                        </div>
                        <Users size={32} className="text-primary" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card bg-danger bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-danger fw-medium mb-1 small">غائبين اليوم</p>
                            <p className="h3 fw-bold text-danger mb-0">25</p>
                        </div>
                        <Calendar size={32} className="text-danger" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card bg-warning bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-warning fw-medium mb-1 small">متأخرين</p>
                            <p className="h3 fw-bold text-warning mb-0">8</p>
                        </div>
                        <Bell size={32} className="text-warning" />
                    </div>
                </div>
            </div>
        </div>

        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title fw-semibold mb-4">سجل الحضور اليومي</h5>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th className="text-end">الصف</th>
                                <th className="text-end">إجمالي الطلاب</th>
                                <th className="text-end">حاضرين</th>
                                <th className="text-end">غائبين</th>
                                <th className="text-end">متأخرين</th>
                                <th className="text-end">نسبة الحضور</th>
                                <th className="text-end">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['الأول أ', 'الثاني أ', 'الثالث أ', 'الرابع أ', 'الخامس أ'].map((grade, i) => {
                                const total = 25 + Math.floor(Math.random() * 10);
                                const present = total - Math.floor(Math.random() * 5);
                                const absent = total - present;
                                const late = Math.floor(Math.random() * 3);
                                const rate = ((present / total) * 100).toFixed(1);

                                return (
                                    <tr key={i}>
                                        <td className="text-end">{grade}</td>
                                        <td className="text-end">{total}</td>
                                        <td className="text-end">
                                            <span className="badge bg-success">{present}</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge bg-danger">{absent}</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge bg-warning">{late}</span>
                                        </td>
                                        <td className="text-end">{rate}%</td>
                                        <td className="text-end">
                                            <button className="btn btn-sm btn-outline-primary">
                                                عرض التفاصيل
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default AttendanceManagement;