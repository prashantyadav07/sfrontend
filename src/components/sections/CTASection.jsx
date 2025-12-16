import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { text: 'No credit card required', icon: Shield },
    { text: '14-day free trial', icon: CheckCircle2 },
    { text: 'Setup in 5 minutes', icon: Zap },
    { text: 'Cancel anytime', icon: CheckCircle2 }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Main Content */}
        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-bold text-blue-700 tracking-wide">TRUSTED BY 500+ SCHOOLS</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Ready to Transform
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Your Institution?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Join hundreds of schools revolutionizing education management. 
            Experience the power of <span className="font-bold text-blue-600">NextGen ERP</span> today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-xl font-bold text-base shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
                <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>
            </button>
            
            <button className="group relative px-10 py-4 bg-white text-gray-700 rounded-xl font-bold text-base border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-blue-600 transition-colors">
                Schedule Demo
                <Zap className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
              </span>
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Features List - Professional Grid */}
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-100 shadow-lg">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                >
                  <IconComponent className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-gray-500 font-medium mb-4">Trusted by leading educational institutions</p>
          <div className="flex justify-center items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{
                  animation: `pulseSmooth 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30 rounded-full"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSmooth {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.3); 
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;