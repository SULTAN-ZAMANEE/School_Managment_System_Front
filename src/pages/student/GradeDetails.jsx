import React, {useState} from "react";
import { Eye ,Download, MessageCircle } from "lucide-react";

// مكون SubjectCard قابل لإعادة الاستخدام
const GradeDetails = ({ subject }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className={`card border-${subject.color} h-100`}>
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">{subject.name}</h6>
                        <button
                            className={`btn btn-sm btn-outline-${subject.color}`}
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            <Eye size={16} />
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="text-muted small mb-2">المعلم: {subject.teacher}</p>

                        <div className="row mb-3">
                            <div className="col-6">
                                <small className="text-muted">الفترة الأولى</small>
                                <div className={`fw-bold ${subject.firstPeriod.status === 'passed' ? 'text-success' : 'text-danger'}`}>
                                    {subject.firstPeriod.score}/{subject.firstPeriod.total}
                                </div>
                            </div>
                            <div className="col-6">
                                <small className="text-muted">الفترة الثانية</small>
                                <div className={`fw-bold ${subject.secondPeriod.status === 'passed' ? 'text-success' : 'text-danger'}`}>
                                    {subject.secondPeriod.score}/{subject.secondPeriod.total}
                                </div>
                            </div>
                        </div>

                        <div className="progress mb-2" style={{ height: '8px' }}>
                            <div
                                className={`progress-bar bg-${subject.color}`}
                                style={{ width: `${(subject.completed / subject.assignments) * 100}%` }}
                            ></div>
                        </div>
                        <small className="text-muted">
                            الواجبات: {subject.completed}/{subject.assignments}
                        </small>

                        {showDetails && (
                            <div className="mt-3 p-3 bg-light rounded">
                                <h6 className="mb-3">تفاصيل المادة</h6>

                                <div className="mb-3">
                                    <strong>امتحان الفترة الأولى:</strong>
                                    <ul className="list-unstyled mt-2">
                                        <li>• الدرجة: {subject.firstPeriod.score}/100</li>
                                        <li>• التاريخ: 15 نوفمبر 2023</li>
                                        <li>• نوع الامتحان: اختبار شامل</li>
                                        <li>• الملاحظات: أداء جيد، يحتاج تحسين في الهندسة</li>
                                    </ul>
                                </div>

                                <div className="mb-3">
                                    <strong>امتحان الفترة الثانية:</strong>
                                    <ul className="list-unstyled mt-2">
                                        <li>• الدرجة: {subject.secondPeriod.score}/100</li>
                                        <li>• التاريخ: 20 ديسمبر 2023</li>
                                        <li>• نوع الامتحان: اختبار نهائي</li>
                                        <li>• الملاحظات: تحسن ملحوظ، استمر على هذا المستوى</li>
                                    </ul>
                                </div>

                                <div className="mb-3">
                                    <strong>تفاصيل الواجبات:</strong>
                                    <ul className="list-unstyled mt-2">
                                        <li>• المكتملة: {subject.completed} واجب</li>
                                        <li>• المتبقية: {subject.assignments - subject.completed} واجب</li>
                                        <li>• آخر واجب: حل تمارين الكسور</li>
                                        <li>• التاريخ المطلوب: 25 يناير 2024</li>
                                    </ul>
                                </div>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-primary">
                                        <MessageCircle size={14} className="m-1" />
                                        تواصل مع المعلم
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary">
                                        <Download size={14} className="m-1" />
                                        تحميل التقرير
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


export default GradeDetails;