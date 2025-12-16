import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause, TrendingUp, Users, Award, Clock } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Principal, Delhi Public School",
    content: "NextGen ERP has transformed how we manage our institution. The intuitive interface and comprehensive features have streamlined our operations significantly.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Rajesh Kumar",
    role: "Director, Springdale International",
    content: "Outstanding platform! Our administrative efficiency has increased by 60%. The support team is incredibly responsive and helpful.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Anita Verma",
    role: "Academic Head, Modern School",
    content: "The reporting and analytics features are exceptional. We can now make data-driven decisions that benefit our students and faculty.",
    rating: 5,
    image: "👩‍🏫"
  },
  {
    name: "Vikram Singh",
    role: "Administrator, Cambridge Academy",
    content: "Implementation was seamless and the ROI has been remarkable. This system has become indispensable to our daily operations.",
    rating: 5,
    image: "👨‍💻"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50">
            <Award className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Trusted by Leading
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Educational Institutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Discover why hundreds of schools choose NextGen ERP for their management needs
          </p>
        </div>

        {/* Desktop Infinite Scroll */}
        <div className="hidden lg:block mb-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll-smooth">
            {/* Original testimonials */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`original-${idx}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex-shrink-0 w-96"
              >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : ''}`}></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10">
                {/* Avatar with professional styling */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-3xl shadow-md transform group-hover:scale-110 transition-transform duration-500">
                    {testimonial.image}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-blue-600 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-600/20" />
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 pt-4 border-t border-gray-100">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-current transform transition-transform duration-300"
                      style={{ 
                        transitionDelay: hoveredCard === idx ? `${i * 50}ms` : '0ms',
                        transform: hoveredCard === idx ? 'scale(1.2)' : 'scale(1)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
            
            {/* Duplicate testimonials for infinite scroll */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`duplicate-${idx}`}
                onMouseEnter={() => setHoveredCard(idx + testimonials.length)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex-shrink-0 w-96"
              >
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 transition-opacity duration-500 ${hoveredCard === idx + testimonials.length ? 'opacity-100' : ''}`}></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="relative z-10">
                  {/* Avatar with professional styling */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-3xl shadow-md transform group-hover:scale-110 transition-transform duration-500">
                      {testimonial.image}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-semibold">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-600/20" />
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 pt-4 border-t border-gray-100">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-amber-400 fill-current transform transition-transform duration-300"
                        style={{ 
                          transitionDelay: hoveredCard === idx + testimonials.length ? `${i * 50}ms` : '0ms',
                          transform: hoveredCard === idx + testimonials.length ? 'scale(1.2)' : 'scale(1)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
                    
                    <div className="relative z-10">
                      {/* Avatar */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-4xl shadow-lg">
                          {testimonial.image}
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <Quote className="w-10 h-10 text-blue-600/20 mb-4 mx-auto" />
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-700 mb-6 leading-relaxed text-center">
                        {testimonial.content}
                      </p>
                      
                      {/* Author */}
                      <div className="text-center pt-6 border-t border-gray-200">
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-blue-600 font-semibold mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-2' 
                      : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-blue-600" />
            ) : (
              <Play className="w-4 h-4 text-blue-600" />
            )}
          </button>
        </div>

        {/* Stats Section - Professional Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { icon: Users, value: "500+", label: "Partner Schools", color: "from-blue-600 to-blue-700" },
            { icon: TrendingUp, value: "50K+", label: "Active Students", color: "from-indigo-600 to-indigo-700" },
            { icon: Award, value: "98%", label: "Satisfaction Rate", color: "from-blue-600 to-indigo-600" },
            { icon: Clock, value: "24/7", label: "Expert Support", color: "from-indigo-600 to-blue-700" }
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
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

        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 35s linear infinite;
        }

        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;