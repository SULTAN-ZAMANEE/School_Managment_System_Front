import React from "react";
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, Trash2, User, Download } from 'lucide-react';
import IconButton from "../../components/Header/IconButton";
import ContainerCard from "../../components/common/UI/ContainerCard";
import DataTable from "../../components/common/Layout/DataTable";


const TeacherAssignments = ({openModal, assignments}) => {
    let Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <IconButton className="main-bg-color" userName="إنشاء واجب جديد" icon={Plus} onClick={() => openModal('createAssignment')}/>
            </div>

            <ContainerCard title={"جدول تسليم الواجبات"}>
                <DataTable
                    headers={['عنوان الواجب', 'الصف', 'تاريخ التسليم', 'المشاركون', 'الحالة']}
                    data={assignments}
                    actions={[
                        { icon: <Eye size={14} />, variant: 'outline-info', title: 'عرض التفاصيل', onClick: (index) => openModal('viewAssignment') },
                        { icon: <Edit size={14} />, variant: 'outline-warning', title: 'تعديل', onClick: (index) => openModal('editAssignment') },
                        { icon: <Download size={14} />, variant: 'outline-success', title: 'تحميل الإجابات', onClick: (index) => { } },
                        { icon: <Trash2 size={14} />, variant: 'outline-danger', title: 'حذف', onClick: (index) => { } }
                    ]}
                />
            </ContainerCard>
        </div>
    );
}

export default TeacherAssignments;