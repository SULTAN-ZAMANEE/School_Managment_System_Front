import React from "react";
import { Upload } from 'lucide-react';
import '../../App.css';


const Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
  <button 
    className={`btn btn-${variant} btn-${size} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const UploadSchedule = ({ closeModal }) => {
    return (
        <div>
            <div className="text-center mb-4">
                <Upload size={48} className="text-primary mb-3" />
                <h5>رفع جدول حصص جديد</h5>
                <p className="text-muted">يمكنك رفع ملف Excel أو PDF للجدول الدراسي</p>
            </div>
            <div className="mb-3">
                <label className="form-label">اختر ملف الجدول</label>
                <input type="file" className="form-control" accept=".xlsx,.xls,.pdf" />
                <div className="form-text">الملفات المدعومة: Excel (.xlsx, .xls) أو PDF</div>
            </div>
            <div className="mb-3">
                <label className="form-label">الفصل الدراسي</label>
                <select className="form-select">
                    <option>الفصل الدراسي الأول</option>
                    <option>الفصل الدراسي الثاني</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">ملاحظات إضافية</label>
                <textarea className="form-control" rows="3" placeholder="أي ملاحظات حول الجدول الجديد..."></textarea>
            </div>
            <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={closeModal}>إلغاء</Button>
                <Button onClick={closeModal}>رفع الجدول</Button>
            </div>
        </div>
    );
};

export default UploadSchedule;
