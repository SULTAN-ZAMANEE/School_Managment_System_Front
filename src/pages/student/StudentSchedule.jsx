import React from "react";
import { useState, useEffect } from 'react';
import '../../App.css'
import ContainerCard from "../../components/common/UI/ContainerCard";



const StudentSchedule = () => {
    return (
        <ContainerCard className="mb-3" title='الجدول الدراسي الأسبوعي'>
            <div className="table-responsive ">
                <table className="table table-bordered main-text-color">
                    <thead className="table-primary">
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
                            <td className="fw-bold">8:00 - 8:45</td>
                            <td>الرياضيات</td>
                            <td>اللغة العربية</td>
                            <td>العلوم</td>
                            <td>الرياضيات</td>
                            <td>التربية الإسلامية</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">8:45 - 9:30</td>
                            <td>اللغة العربية</td>
                            <td>الرياضيات</td>
                            <td>التربية الإسلامية</td>
                            <td>العلوم</td>
                            <td>اللغة العربية</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">9:30 - 10:00</td>
                            <td colSpan="5" className="text-center bg-light">استراحة</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">10:00 - 10:45</td>
                            <td>العلوم</td>
                            <td>التربية الإسلامية</td>
                            <td>الرياضيات</td>
                            <td>اللغة العربية</td>
                            <td>العلوم</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">10:45 - 11:30</td>
                            <td>التربية البدنية</td>
                            <td>التربية الفنية</td>
                            <td>الحاسوب</td>
                            <td>التربية البدنية</td>
                            <td>المكتبة</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ContainerCard>
    );
}

export default StudentSchedule;