import React, { useRef } from 'react';
import { useScrollAnimation, useGoogleFonts } from '../hooks/useAnimations';
import SchoolERPHeader from '../components/sections/SchoolERPHeader';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ModulesCarousel from '../components/sections/ModulesCarousel';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/Footer';

const SchoolERP = () => {
  const heroRef = useRef(null);
  
  // Custom hooks for animations and fonts
  useScrollAnimation();
  useGoogleFonts();

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
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
    </div>
  );
};

export default SchoolERP;