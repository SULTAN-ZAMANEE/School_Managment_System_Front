import React, {useState} from "react";
import { Users, BookOpen, FileText, MessageCircle, Eye, Bell,  } from 'lucide-react';
import '../../App.css';
import StatCard from "../../components/common/UI/StatCard";
import ContainerCard from "../../components/common/UI/ContainerCard";
import IconButton from "../../components/Header/IconButton";


const TeacherOverview = ({ stats= {}, schedule }) => {
    return (
        <div>
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
                                <IconButton icon={Bell } />
                                <div>
                                    <h6 className="mb-1">واجب جديد مستحق</h6>
                                    <p className="mb-1 small">الصف الثالث أ - الرياضيات</p>
                                    <small className="text-muted">منذ ساعتين</small>
                                </div>
                            </div>
                            <div className="list-group-item d-flex align-items-start">
                                <IconButton icon={MessageCircle} />
                                <div>
                                    <h6 className="mb-1">رسالة من ولي أمر</h6>
                                    <p className="mb-1 small">استفسار عن درجات فاطمة</p>
                                    <small className="text-muted">منذ 3 ساعات</small>
                                </div>
                            </div>
                            <div className="list-group-item d-flex align-items-start">
                                <IconButton icon={Users} />
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
};

export default TeacherOverview;
