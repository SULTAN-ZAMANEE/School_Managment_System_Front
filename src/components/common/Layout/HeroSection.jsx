import React from "react";
import { Container, Button} from 'react-bootstrap';
import '../../../App.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <div className="hero-video-container mb-4">
        
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://youtu.be/bvX1n47aYcg" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          متصفحك لا يدعم تشغيل الفيديو
        </video>
        
        
        <div className="hero-overlay"></div>
        
        
        <div className="hero-content">
          <Container>
            <h1 className="display-4 text-white">أهلاً بكم في البوابة التعليمية السودانية</h1>
            <p className="lead text-white">بوابتكم نحو مستقبلٍ تعليميٍ مشرق ومبتكر، من أجل بناء وطنٍ عظيم</p>
            <p className="lead text-white">فالعظمة تُصنع حين يتّحد العلم مع القوة</p>
            <Link to="/login">
              <Button variant="light" size="lg">تسجيل الدخول</Button>
            </Link>
          </Container>
        </div>
      </div>
    </>
  )
};

export default HeroSection;
