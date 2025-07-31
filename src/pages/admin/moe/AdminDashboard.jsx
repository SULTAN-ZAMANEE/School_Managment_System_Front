import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { School, Users, UserCheck, BookOpen, BarChart3, Settings, Bell, Download, TrendingUp, TrendingDown, Activity, MapPin, Calendar, Filter, Search, Menu, X, ChevronDown, Home, GraduationCap, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';



import DataStatusIndicator from '../../../components/common/UI/DataStatusIndicator';
import StatCard from '../../../components/common/UI/StatCard';
import UnitCard from '../../../components/common/UI/UnitCard';

import AdminSidebar from "../AdminSidebar";

const tabs = [
  {
    key: 'dashboard',
    icon: BarChart3,
    label: 'الرئيسية',
    // title: 'لوحة التحكم الرئيسية'
  },
  {
    key: 'students',
    icon: Users,
    label: 'الطلاب',
    // title: 'إدارة الطلاب'   
  },
  {
    key: 'schedule',
    icon: Calendar,
    label: 'جدولي',
    // title: 'الجدول الدراسي وإدارة الحصص'
  },
  {
    key: 'assignments',
    icon: BookOpen,
    label: 'الواجبات',
    // title: 'إدارة الواجبات والأنشطة'
  },
  {
    key: 'grades',
    icon: FileText,
    label: 'الدرجات',
    // title: 'إدارة الدرجات'
  }
];


const UserData = {
  id: 1,
  name: 'طه سليمان',
  email: 'ahmed@example.com',
  avatar: 'https://via.placeholder.com/50',
  role: 'parent'
}
const MinistryDashboard = ({ }) => {
  return (
    <>
      <DataStatusIndicator
        hasLiveData={true}
        liveDataTypes={['الطلاب', 'المعلمين']}
        staticText="عرض البيانات التجريبية"
        title="حالة البيانات:"
        alertType="info"
        customIcon={<Activity className="mx-2" size={20} />}
        className='container mt-3 mb-4'
      />
      <div className="container mt-3 d-flex">
        <div className="col-md-3">
          <AdminSidebar UserData={UserData} />
        </div>

        <div className="mb-4">

        <h1 className="">لوحة تحكم وزارة التعليم</h1>
        <div className="row">

          <StatCard
            title="عدد الطلاب"
            value={12000}
            change={5}
            icon={Users}
            color="primary"
            isLoading={false}
            isLive={true}
            liveLabel="حي"
          />


          <StatCard
            title="عدد المعلمين"
            value={500}
            change={-2}
            icon={UserCheck}
            color="success"
            isLoading={false}
          />


          <StatCard
            title="عدد المدارس"
            value={200}
            change={3}
            icon={School}
            color="warning"
            isLoading={false}
          />


          <UnitCard
            title="المدارس في المنطقة"
            value={50}
            isLoading={false}
          />


        </div>
      </div>
      </div>
    </>
  );
}

export default MinistryDashboard;