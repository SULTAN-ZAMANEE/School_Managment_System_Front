import React, { useState } from "react";
import { BarChart3, FileText, Users, Plus, Eye, Edit, Menu, GraduationCap, Home, BookOpen, Calendar, MessageCircle, User, TrendingUp } from 'lucide-react';
import ContainerCard from "../../components/common/UI/ContainerCard";
import DataTable from "../../components/common/Layout/DataTable";

const StudentsGrades = ({ teacherData, openModal }) => {
  let Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex gap-2">
          <select className="form-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">اختر الصف</option>
            {teacherData.classes.map((cls, index) => (
              <option key={index} value={cls}>{cls}</option>
            ))}
          </select>
          <select className="form-select" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="">اختر المادة</option>
            {teacherData.subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
          <Button onClick={() => openModal('addGrades')}>
            <Plus size={16} className="me-1" /> إضافة درجات
          </Button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-primary">متوسط الصف</h5>
              <h2 className="text-success">87.5%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-info">أعلى درجة</h5>
              <h2 className="text-success">98%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-warning">أقل درجة</h5>
              <h2 className="text-danger">65%</h2>
            </div>
          </ContainerCard>
        </div>
        <div className="col-md-3">
          <ContainerCard>
            <div className="text-center">
              <h5 className="text-secondary">المتميزون</h5>
              <h2 className="text-primary">12</h2>
            </div>
          </ContainerCard>
        </div>
      </div>

      <ContainerCard title={"جدول درجات الطلاب"}>
        <DataTable
          headers={['اسم الطالب', 'الاختبار الأول', 'الاختبار الثاني', 'الواجبات', 'المشاركة', 'المعدل النهائي']}
          data={[
            ['محمد أحمد', '88', '85', '90', '85', '87%'],
            ['فاطمة علي', '95', '90', '98', '95', '94.5%'],
            ['عبدالله سالم', '75', '80', '70', '75', '75%'],
            ['نور الهدى', '98', '95', '100', '98', '97.75%']
          ]}
          actions={[
            { icon: <Edit size={14} />, variant: 'outline-warning', title: 'تعديل درجات', onClick: (index) => openModal('editGrades') },
            { icon: <Eye size={14} />, variant: 'outline-info', title: 'تفاصيل', onClick: (index) => openModal('gradeDetails') }
          ]}
        />
      </ContainerCard>
    </div>
  );
}

export default StudentsGrades;