import React, { useState } from 'react';
import { Mail, Lock, User, Users, Building, GraduationCap, Heart, BookOpen, MapPin, Home, Users2 } from 'lucide-react';
import ContainerCard from '../../components/common/UI/ContainerCard';
import SidebarNavigation from '../../components/common/UI/SidebarNavigation';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    // بيانات المستخدمين الافتراضية للتطوير
    const developmentUsers = [
        {
            role: 'ministry_admin',
            email: 'ministry@edu.gov',
            name: 'إدارة وزارة التعليم',
            icon: Building,
            color: 'btn-secondary',
            description: 'الإشراف العام على جميع المدارس',
            route: '/adminDashboard'
        },
        {
            role: 'state_admin', 
            email: 'state@edu.gov',
            name: 'إدارة الولاية',
            icon: MapPin,
            color: 'btn-secondary',
            description: 'الإشراف على مستوى الولاية',
            route: '/stateDashboard'
        },
        {
            role: 'locality_admin', 
            email: 'locality@edu.gov',
            name: 'إدارة المحلية',
            icon: Users2,
            color: 'btn-secondary',
            description: 'الإشراف على مستوى المحلية',
            route: '/localityDashboard'
        },
        {
            role: 'unit_admin', 
            email: 'unit@edu.gov',
            name: 'إدارة الوحدة',
            icon: Home,
            color: 'btn-secondary',
            description: 'الإشراف على مستوى الوحدة',
            route: '/unitDashboard'
        },
        {
            role: 'school_principal',
            email: 'principal@school.edu',
            name: 'مدير المدرسة',
            icon: GraduationCap,
            color: 'btn-secondary',
            description: 'إدارة المدرسة والطلاب والمعلمين',
            route: '/Schoolmaster'
        },
        {
            role: 'school',
            email: 'school@school.edu',
            name: 'المدرسة',
            icon: Building,
            color: 'btn-secondary',
            description: 'نظام إدارة المدرسة',
            route: '/School'
        },
        {
            role: 'teacher',
            email: 'teacher@school.edu', 
            name: 'المعلم',
            icon: User,
            color: 'btn-secondary',
            description: 'إدارة التدريس والتقييم',
            route: '/teacher'
        },
        {
            role: 'student',
            email: 'student@school.edu', 
            name: 'الطالب',
            icon: BookOpen,
            color: 'btn-secondary',
            description: 'الوصول للدروس والواجبات',
            route: '/student'
        },
        {
            role: 'parent',
            email: 'parent@family.com',
            name: 'ولي الأمر',
            icon: Heart,
            color: 'btn-secondary',
            description: 'متابعة أداء الأبناء',
            route: '/parent'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleQuickLogin = (userType) => {
        setFormData({
            email: userType.email,
            password: '12345678'
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // محاكاة عملية تسجيل الدخول
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // التحقق من صحة البيانات
            const user = developmentUsers.find(u => u.email === formData.email);
            if (user && formData.password === '12345678') {
                // التوجه للوحة التحكم المناسبة
                window.location.href = user.route;
            } else {
                setError('بيانات تسجيل الدخول غير صحيحة');
            }
        } catch (err) {
            setError('حدث خطأ في تسجيل الدخول');
        }
        
        setLoading(false);
    };

    return (
        <>
            <style>{`
                    body {
                        background: linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%);
                        min-height: 100vh;
                    }
                // .gradient-bg {
                //     background: linear-gradient(135deg, #3f51b5 0%, #673ab7 100%);
                // }
                .btn-purple {
                    // background-color: #673ab7;
                    // border-color: #673ab7;   
                    color: white;
                }
                .btn-purple:hover {
                    background-color: #5e35b1;
                    border-color: #5e35b1;
                    color: white;
                }
                .user-btn {
                    transition: all 0.2s ease;
                }
                .user-btn:hover {
                    transform: scale(1.05);
                }
                .loading-spinner {
                    width: 1.25rem;
                    height: 1.25rem;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .form-control:focus {
                    border-color: #3f51b5;
                    box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.25);
                }
                .input-icon {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 5;
                    color: #6c757d;
                }
                .input-with-icon {
                    padding-right: 2.5rem !important;
                }
                .user-grid {
                    display: grid;
                    gap: 0.75rem;
                    max-height: 500px;
                    overflow-y: auto;
                }
            `}</style>
            
            <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
                                <ContainerCard title={"نظام إدارة المدارس"} subtitle={"تسجيل دخول سريع للتطوير"} className='col-md-7'>
                <div className="container-fluid" style={{maxWidth: '1200px'}}>
                    {/* <div className="card shadow-lg border-0 rounded-3 overflow-hidden"> */}
                        <div className="row g-0">
                            {/* Left Panel - Quick Login Options */}
                            <div className="col-md-7 gradient-bg text-white p-4">
                                                                
                                <div>
                                    <h3 className="h5 fw-semibold mb-3 text-dark text-center">اختر نوع المستخدم</h3>
                                    <div className="user-grid">

                                        
                                        {developmentUsers.map((user, index) => {
                                            const IconComponent = user.icon;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => handleQuickLogin(user)}
                                                    className={`btn ${user.color} text-start user-btn p-3 d-flex align-items-center`}
                                                >
                                                    <IconComponent size={20} className="me-3" />
                                                    <div className="flex-grow-1 text-end">
                                                        <div className="fw-semibold">{user.name}</div>
                                                        <div className="small opacity-75">{user.description}</div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                
                                <div className="mt-4 p-3 bg-white bg-opacity-10 rounded">
                                    <p className="small text-center mb-0">
                                        <strong>كلمة المرور الموحدة:</strong> 12345678
                                    </p>
                                </div>
                            </div>
                            {/* Right Panel - Login Form */}
                            <div className="col-md-5 p-4">
                                <div className="text-center mb-4">
                                    <h1 className="h2 fw-bold text-dark mb-2">تسجيل الدخول</h1>
                                    <p className="text-muted">أدخل بياناتك للوصول للنظام</p>
                                </div>

                                <div>
                                    {error && (
                                        <div className="alert alert-danger text-center" role="alert">
                                            {error}
                                        </div>
                                    )}

                                    <div className="mb-3 position-relative">
                                        <Mail className="input-icon" size={20} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="البريد الإلكتروني"
                                            className="form-control input-with-icon py-3 text-end"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3 position-relative">
                                        <Lock className="input-icon" size={20} />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="كلمة المرور"
                                            className="form-control input-with-icon py-3 text-end"
                                            required
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                                        style={{backgroundColor: '#3f51b5', borderColor: '#3f51b5'}}
                                    >
                                        {loading ? (
                                            <div className="loading-spinner"></div>
                                        ) : (
                                            <>
                                                <span className="me-2">تسجيل الدخول</span>
                                                <User size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <div className="alert alert-light border">
                                        <strong>ملاحظة للمطورين:</strong><br />
                                        استخدم الأزرار السريعة على اليسار أو أدخل البيانات يدوياً
                                    </div>
                                </div>

                                {/* Display selected user info */}
                                {formData.email && (
                                    <div className="alert alert-info">
                                        <p className="small text-center mb-0">
                                            <strong>المستخدم المحدد:</strong> {developmentUsers.find(u => u.email === formData.email)?.name || 'مستخدم مخصص'}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                    {/* </div> */}
                </div>
                                </ContainerCard>
            </div>
        </>
    );
};

export default Login;