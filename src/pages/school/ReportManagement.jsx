import React from "react";
import { Download, Award, TrendingUp, ClipboardList, PieChart  } from "lucide-react";

const ReportManagement = () => (
    <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h2 fw-bold text-dark">الدرجات والتقارير</h2>
            <button className="btn d-flex align-items-center gap-2" style={{ backgroundColor: '#7c3aed', color: 'white' }}>
                <Download size={20} />
                تصدير التقارير
            </button>
        </div>

        <div className="row g-3 mb-4">
            <div className="col-md-3">
                <div className="card bg-primary bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-primary fw-medium mb-1 small">متوسط الدرجات</p>
                            <p className="h3 fw-bold text-primary mb-0">85.4</p>
                        </div>
                        <Award size={32} className="text-primary" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card bg-success bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-success fw-medium mb-1 small">طلاب متفوقين</p>
                            <p className="h3 fw-bold text-success mb-0">67</p>
                        </div>
                        <TrendingUp size={32} className="text-success" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card bg-warning bg-opacity-10 border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-warning fw-medium mb-1 small">يحتاج متابعة</p>
                            <p className="h3 fw-bold text-warning mb-0">12</p>
                        </div>
                        <ClipboardList size={32} className="text-warning" />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card border-0 h-100" style={{ backgroundColor: '#f3e8ff' }}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="fw-medium mb-1 small" style={{ color: '#7c3aed' }}>اكتمال التقييم</p>
                            <p className="h3 fw-bold mb-0" style={{ color: '#5b21b6' }}>92%</p>
                        </div>
                        <PieChart size={32} style={{ color: '#7c3aed' }} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row g-4">
            <div className="col-lg-6">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">أداء الصفوف</h5>
                        <div className="d-flex flex-column gap-3">
                            {['الأول أ', 'الثاني ب', 'الثالث أ', 'الرابع أ', 'الخامس ب'].map((grade, i) => {
                                const percentage = 85 + Math.random() * 10;
                                return (
                                    <div key={i} className="d-flex justify-content-between align-items-center">
                                        <span className="fw-medium">{grade}</span>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="progress" style={{ width: '128px', height: '8px' }}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <span className="small text-muted">{percentage.toFixed(1)}%</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">أداء المواد</h5>
                        <div className="d-flex flex-column gap-3">
                            {['الرياضيات', 'العربية', 'العلوم', 'الإنجليزية', 'التربية الإسلامية'].map((subject, i) => {
                                const percentage = 80 + Math.random() * 15;
                                return (
                                    <div key={i} className="d-flex justify-content-between align-items-center">
                                        <span className="fw-medium">{subject}</span>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="progress" style={{ width: '128px', height: '8px' }}>
                                                <div
                                                    className="progress-bar bg-success"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <span className="small text-muted">{percentage.toFixed(1)}%</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default ReportManagement;