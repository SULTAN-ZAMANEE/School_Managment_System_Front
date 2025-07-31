// src/pages/HomePage.jsx
import React from "react";
import Footer from "../../components/common/Layout/Footer";
import HeroSection from "../../components/common/Layout/HeroSection";
import RoleCard from "../../components/common/Layout/RoleCard";
import DataStatusIndicator from "../../components/common/UI/DataStatusIndicator";
import StatCard from "../../components/common/UI/StatCard";
import { Activity, Users, UserCheck, School } from 'lucide-react';


function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto">

        <DataStatusIndicator
          hasLiveData={true}
          liveDataTypes={['الطلاب', 'المعلمين']}
          liveText="البيانات الحية متاحة"
          staticText="عرض البيانات التجريبية"
          title="حالة البيانات:"
          alertType="info"
          showIcon={true}
          customIcon={<Activity className="me-1" size={16} />}
          direction="rtl"
        />

        <div className="hero-content ">
          <div className="container border-1 border-dark my-2 text-black">
            <h1 className="display-3  mb-4">مستقبل التعليم السوداني يبدأ من هنا</h1>
            <p className="lead  mb-4">بوابتك الشاملة للتعليم الإلكتروني والتطوير المهني في السودان</p>
            <p className=" mb-5">انضم إلى آلاف الطلاب والمعلمين في رحلة تعليمية تفاعلية تجمع بين الأصالة والحداثة</p>
          </div>
        </div>

      </div>
      <div className="image-background-container">
        {/* يمكنك إضافة محتوى هنا إذا أردت */}
        <div className="row w-100">
          <StatCard
            title="عدد الطلاب"
            value={12000}
            change={5}
            icon={Users}
            color="primary"
            isLoading={false}
            isLive={true}
            liveLabel="فعلي"
            className="op opacity-25"
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
        </div>
      </div>
    </>
  );
}

export default HomePage;
