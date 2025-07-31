import React from "react";

const Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '', disabled = false }) => (
  <button 
    className={`btn btn-${variant} btn-${size} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const CreateAssignment = ({ closeModal, teacherData }) => {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">عنوان الواجب</label>
                <input type="text" className="form-control" placeholder="أدخل عنوان الواجب" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="form-label">الصف</label>
                    <select className="form-select">
                        <option>اختر الصف</option>
                        {teacherData.classes.map((cls, index) => (
                            <option key={index} value={cls}>{cls}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">المادة</label>
                    <select className="form-select">
                        <option>اختر المادة</option>
                        {teacherData.subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">تاريخ التسليم</label>
                <input type="date" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">وصف الواجب</label>
                <textarea className="form-control" rows="4" placeholder="اكتب تفاصيل الواجب هنا..."></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">رفع ملفات مرفقة</label>
                <input type="file" className="form-control" multiple />
            </div>
            <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={closeModal}>إلغاء</Button>
                <Button onClick={closeModal}>إنشاء الواجب</Button>
            </div>
        </form>
    );
};

export default CreateAssignment;