import React from "react";
import { Upload } from 'lucide-react';
import '../../App.css';


const addStudentGrade = ({teacherData}) =>{
    return(
        <form>
              <div className="row mb-3">
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
                <label className="form-label">نوع التقييم</label>
                <select className="form-select">
                  <option>اختبار شهري</option>
                  <option>اختبار نصف فصلي</option>
                  <option>واجبات</option>
                  <option>مشاركة</option>
                  <option>أنشطة</option>
                </select>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>اسم الطالب</th>
                      <th>الدرجة</th>
                      <th>من</th>
                      <th>ملاحظات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['محمد أحمد', 'فاطمة علي', 'عبدالله سالم', 'نور الهدى'].map((name, index) => (
                      <tr key={index}>
                        <td>{name}</td>
                        <td><input type="number" className="form-control form-control-sm" /></td>
                        <td><input type="number" className="form-control form-control-sm" defaultValue="100" /></td>
                        <td><input type="text" className="form-control form-control-sm" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={closeModal}>إلغاء</Button>
                <Button onClick={closeModal}>حفظ الدرجات</Button>
              </div>
            </form>
    );
}


export default addStudentGrade;