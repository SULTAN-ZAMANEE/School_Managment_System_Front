import React from "react";
import { Upload, Download, } from 'lucide-react';
import '../../App.css';
import ContainerCard from "../../components/common/UI/ContainerCard";
import IconButton from "../../components/Header/IconButton";



const TeacherSchedule = ({ openModal }) => {

    const Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );

    return (
        <>
            <div>
                <div className="d-flex justify-content-between align-items-center mb-3">

                    <IconButton className="main-bg-color"  userName="رفع جدول جديد" icon={Upload} onClick={() => openModal('uploadSchedule')}/>
                </div>

                <div className="row d-flex flex-column">
                    <div className="mb-4 overflow-auto">
                        <ContainerCard className="flex-shrink-0" title="الجدول الأسبوعي">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-primary flex-shrink-0">
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
                                            <td className="bg-light">الصف 3أ<br /><small>رياضيات</small></td>
                                            <td className="bg-primary text-white">الصف 4ب<br /><small>علوم</small></td>
                                            <td className="bg-light">الصف 3أ<br /><small>رياضيات</small></td>
                                            <td className="bg-success text-white">الصف 5أ<br /><small>رياضيات</small></td>
                                            <td className="bg-light">الصف 3أ<br /><small>علوم</small></td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">09:00-10:00</td>
                                            <td className="bg-primary text-white">الصف 4ب<br /><small>علوم</small></td>
                                            <td className="bg-light">الصف 3أ<br /><small>رياضيات</small></td>
                                            <td className="bg-success text-white">الصف 5أ<br /><small>رياضيات</small></td>
                                            <td className="bg-light">الصف 4ب<br /><small>علوم</small></td>
                                            <td className="bg-primary text-white">الصف 4ب<br /><small>علوم</small></td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">10:30-11:30</td>
                                            <td className="bg-success text-white">الصف 5أ<br /><small>رياضيات</small></td>
                                            <td className="bg-success text-white">الصف 5أ<br /><small>رياضيات</small></td>
                                            <td className="bg-light">الصف 4ب<br /><small>علوم</small></td>
                                            <td className="bg-light">الصف 3أ<br /><small>رياضيات</small></td>
                                            <td className="bg-success text-white">الصف 5أ<br /><small>رياضيات</small></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ContainerCard>
                    </div>

                    <div className="">
                        <ContainerCard title="إحصائيات الحصص">
                            <div className="list-group list-group-flush flex-shrink-0">
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
        </>
    );
};

export default TeacherSchedule;
