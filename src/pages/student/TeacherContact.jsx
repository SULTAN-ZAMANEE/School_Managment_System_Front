import React from "react";
import { useState, useEffect } from 'react';
import '../../App.css'
import ContainerCard from "../../components/common/UI/ContainerCard";



const TeacherContact = () => {
    return (
        <div className="mt-5 d-lg-flex justify-content-between">
            <ContainerCard className="mb-3 col-lg-7" title='الرسائل'>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">أ. سعد أحمد - معلم الرياضيات</h6>
                            <small>منذ 3 أيام</small>
                        </div>
                        <p className="mb-1">أداء أحمد في الرياضيات جيد، لكن يحتاج لمزيد من التدريب على الكسور.</p>
                        <small>اضغط للرد</small>
                    </div>
                    <div className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">أ. نور محمد - معلمة اللغة العربية</h6>
                            <small>منذ أسبوع</small>
                        </div>
                        <p className="mb-1">أحمد متميز في القراءة والإملاء، استمروا في التشجيع.</p>
                    </div>
                </div>
            </ContainerCard>

            <ContainerCard className="mb-3 col-lg-4" title='معلومات اللإتصال'>
                <div className="mb-3">
                    <strong>إدارة المدرسة</strong><br />
                    <small>هاتف: 123-456-7890</small><br />
                    <small>بريد: info@school.edu</small>
                </div>
                <div className="mb-3">
                    <strong>معلم الفصل</strong><br />
                    <small>أ. سعد أحمد</small><br />
                    <small>هاتف: 098-765-4321</small>
                </div>
                <button className="btn btn-primary w-100 mb-2">إرسال رسالة جديدة</button>
                <button className="btn btn-outline-secondary w-100">طلب موعد</button>
            </ContainerCard>

        </div>
    );
}


export default TeacherContact;