import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield, Star } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    { text: 'No credit card required', icon: Shield },
    { text: '14-day free trial', icon: Star },
    { text: 'Setup in 5 minutes', icon: Zap },
    { text: 'Cancel anytime', icon: CheckCircle2 }
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8FAFC]">
      {/* 1. Background Elements (Original Theme Preserved & Enhanced) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Soft Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-80"></div>
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', 
               backgroundSize: '24px 24px',
               opacity: 0.4 
             }}>
        </div>

        {/* Floating Orbs for Depth */}
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 2. Main Container - Glass Card Effect */}
      <div 
        ref={sectionRef}
        className={`relative max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-blue-900/10 p-6 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Top Decorative Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

          <div className="text-center relative z-10">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600 tracking-wide uppercase">
                Trusted by 500+ Schools
              </span>
            </div>

            {/* Headline - Optimized for Mobile & Desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Ready to Transform <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Your Institution?
              </span>
            </h2>

            {/* Subtext - Readable on all devices */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Join hundreds of schools revolutionizing education management. 
              Experience the power of <span className="text-blue-700 font-bold bg-blue-50 px-1 rounded">NextGen ERP</span> today.
            </p>

            {/* CTA Buttons - Stack on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto sm:max-w-none mb-12">
              
              {/* Primary Button */}
              <button className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-blue-600/40 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                {/* Shine animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group w-full sm:w-auto min-w-[200px] px-8 py-4 bg-white text-gray-700 rounded-xl font-bold text-lg border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95">
                <Zap className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                Schedule Demo
              </button>
            </div>

            {/* Features List - Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left group cursor-default">
                    <div className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-blue-700 transition-colors">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default CTASection;