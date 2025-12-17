import React, { useRef, useState } from 'react';
import { useScrollAnimation, useGoogleFonts } from '../hooks/useAnimations';
import SchoolERPHeader from '../components/sections/SchoolERPHeader';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ModulesCarousel from '../components/sections/ModulesCarousel';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/Footer';

// --- Floating WhatsApp Component ---
const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Updated number as requested (removed spaces and + for API compatibility)
  const phoneNumber = "918869883042"; 
  const message = "Hello! I want to know more about the School ERP System.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Label (Visible on Hover) */}
      <div 
        className={`bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition-all duration-300 origin-right border border-gray-100 ${
          isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
        }`}
      >
        Chat with us
      </div>

      {/* WhatsApp Button Circle */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform duration-300 transform group-hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]">
        {/* WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="white"
          className="relative z-10"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c.93.509 1.995.78 3.091.78h.005c3.181 0 5.767-2.586 5.768-5.766.001-1.541-.597-2.989-1.685-4.075-1.088-1.086-2.536-1.684-4.075-1.686zm-4.634 9.172l.465-.467c-.237-.282-.524-.606-.811-.843l-.466.467c-.452-.224-.86-.549-1.214-.945-.396-.354-.721-.762-.945-1.214l.467-.466c.162-.162.247-.394.218-.624-.132-1.05-.132-1.29-.132-1.396 0-.309-.251-.56-.56-.56h-1.047c-.309 0-.56.251-.56.56 0 3.322 2.693 6.015 6.015 6.015.309 0 .56-.251.56-.56v-1.047c0-.309-.251-.56-.56-.56-.106 0-.346 0-1.396-.132-.23-.029-.462.056-.624.218z" fill="none"/> 
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </a>
  );
};

const SchoolERP = () => {
  const heroRef = useRef(null);
  
  // Custom hooks
  useScrollAnimation();
  useGoogleFonts();

  return (
    <div className="min-h-screen bg-[#FEFEFE] relative"> {/* Added relative for positioning context */}
      {/* HEADER */}
      <SchoolERPHeader />
      
      {/* HERO SECTION */}
      <HeroSection heroRef={heroRef} />
      
      {/* STATS SECTION */}
      <StatsSection />
      
      {/* 1. FEATURES SECTION ID */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* 2. MODULES SECTION ID */}
      <div id="modules">
        <ModulesCarousel />
      </div>
    
      {/* 3. TESTIMONIALS SECTION ID */}
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>

      {/* 4. CTA / CONTACT SECTION ID */}
      <div id="cta">
        <CTASection />
      </div>
      
      <Footer />

      {/* Floating WhatsApp Button (Always Visible) */}
      <FloatingWhatsApp />
    </div>
  );
};

export default SchoolERP;