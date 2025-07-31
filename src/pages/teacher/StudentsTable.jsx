import React, {useState} from "react";
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp } from 'lucide-react';
import IconButton from "../../components/Header/IconButton";
import ContainerCard from "../../components/common/UI/ContainerCard";
import DataTable from "../../components/common/Layout/DataTable";


const StudentsTable = ({ students, teacherData, openModal, onEdit, onDelete }) => {
    const [selectedClass, setSelectedClass] = useState('');

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
        <div className="row">
            <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                        <select className="form-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                            <option value="">كل الصفوف</option>
                            {teacherData.classes.map((cls, index) => (
                                <option key={index} value={cls}>{cls}</option>
                            ))}
                        </select>
                        <IconButton userName="إضافة طالب" className="main-bg-color" icon={Plus} onClick={() => openModal('addStudent')} />
                    </div>
                </div>

                <ContainerCard>
                    <DataTable
                        headers={['اسم الطالب', 'الصف', 'الحضور', 'المعدل', 'التقدير']}
                        data={students}
                        actions={[
                            { icon: <Eye size={14} />, variant: 'outline-info', title: 'عرض', onClick: (index) => openModal('viewStudent', students[index]) },
                            { icon: <Edit size={14} />, variant: 'outline-warning', title: 'تعديل', onClick: (index) => openModal('editStudent', students[index]) },
                            { icon: <MessageCircle size={14} />, variant: 'outline-success', title: 'رسالة لولي الأمر', onClick: (index) => openModal('sendMessage', students[index]) }
                        ]}
                    />
                </ContainerCard>
            </div>
        </div>
    );
};

export default StudentsTable;