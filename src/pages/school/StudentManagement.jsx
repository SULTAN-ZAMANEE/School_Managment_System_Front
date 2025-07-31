import React, { useState } from "react";

import { UserPlus, School, BookOpen, GraduationCap, Users, Search, Eye, Edit } from "lucide-react";


const schoolStats = {
    totalStudents: 450,
    totalTeachers: 25,
    totalClasses: 18,
    attendanceRate: 94.5,
    primaryStudents: 280,
    middleStudents: 120,
    highStudents: 50
};

const StudentManagement = () => {
const [selectedGrade, setSelectedGrade] = useState('all');
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h2 fw-bold text-dark">إدارة الطلاب</h2>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <UserPlus size={20} />
                    إضافة طالب جديد
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-primary fw-medium mb-1 small">المرحلة الابتدائية</p>
                                <p className="h3 fw-bold text-primary mb-0">{schoolStats.primaryStudents}</p>
                            </div>
                            <School size={32} className="text-primary" />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-success bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-success fw-medium mb-1 small">المرحلة المتوسطة</p>
                                <p className="h3 fw-bold text-success mb-0">{schoolStats.middleStudents}</p>
                            </div>
                            <BookOpen size={32} className="text-success" />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f3e8ff' }}>
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="fw-medium mb-1 small" style={{ color: '#7c3aed' }}>المرحلة الثانوية</p>
                                <p className="h3 fw-bold mb-0" style={{ color: '#5b21b6' }}>{schoolStats.highStudents}</p>
                            </div>
                            <GraduationCap size={32} style={{ color: '#7c3aed' }} />
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-warning bg-opacity-10 border-0 h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-warning fw-medium mb-1 small">إجمالي الطلاب</p>
                                <p className="h3 fw-bold text-warning mb-0">{schoolStats.totalStudents}</p>
                            </div>
                            <Users size={32} className="text-warning" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="card-title fw-semibold">قائمة الطلاب</h5>
                        <div className="d-flex gap-2">
                            <select
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                className="form-select"
                                style={{ width: 'auto' }}
                            >
                                <option value="all">جميع الصفوف</option>
                                <option value="1">الصف الأول</option>
                                <option value="2">الصف الثاني</option>
                                <option value="3">الصف الثالث</option>
                                <option value="4">الصف الرابع</option>
                                <option value="5">الصف الخامس</option>
                                <option value="6">الصف السادس</option>
                            </select>
                            <div className="position-relative">
                                <Search size={20} className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted" />
                                <input
                                    type="text"
                                    placeholder="البحث عن طالب..."
                                    className="form-control ps-5"
                                    style={{ width: '250px' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-end">اسم الطالب</th>
                                    <th className="text-end">الصف</th>
                                    <th className="text-end">ولي الأمر</th>
                                    <th className="text-end">معدل الحضور</th>
                                    <th className="text-end">المعدل الأكاديمي</th>
                                    <th className="text-end">الإجراءات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <tr key={i}>
                                        <td className="text-end">أحمد محمد علي</td>
                                        <td className="text-end">الثالث أ</td>
                                        <td className="text-end">محمد علي أحمد</td>
                                        <td className="text-end">
                                            <span className="badge bg-success">95%</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge bg-primary">ممتاز</span>
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
}

export default StudentManagement;