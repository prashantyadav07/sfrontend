import React, { useRef } from 'react';
import { useScrollAnimation, useGoogleFonts } from '../hooks/useAnimations';
import SchoolERPHeader from '../components/sections/SchoolERPHeader';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ModulesCarousel from '../components/sections/ModulesCarousel';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/Footer';

const SchoolERP = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  // Custom hooks for animations and fonts
  useScrollAnimation();
  useGoogleFonts();

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <SchoolERPHeader />
      <HeroSection heroRef={heroRef} />
      <StatsSection />
      <FeaturesSection />
      <ModulesCarousel />
      <PricingSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SchoolERP;
