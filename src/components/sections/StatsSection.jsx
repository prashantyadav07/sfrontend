import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, BarChart3, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatsSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: Cards scroll hone par thoda upar move karenge
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -100]); 

  return (
    <section 
      ref={sectionRef} 
      // UPDATED: Padding kam kar di hai (py-10 md:py-16)
      className="relative w-full py-10 md:py-16 overflow-hidden" 
      style={{ backgroundColor: '#A3E7D3' }}
    >
      
      {/* --- BACKGROUND DECORATIVE LINES --- */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 1440 900" fill="none">
        <path d="M-100 0 C 100 400 300 100 600 500 S 1100 300 1600 600" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
        <path d="M-50 200 C 150 500 350 200 650 600 S 1150 400 1650 700" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* ===== LEFT COLUMN: TEXT (Sticky) ===== */}
          <div className="flex flex-col justify-center text-left lg:sticky lg:top-24 h-fit">
            <span className="text-gray-700 font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-70">
              // WHY CHOOSE US
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Why <br /><span className="text-gray-800">EdNora ERP?</span>
            </h2>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 max-w-lg font-medium opacity-90">
              We streamline your school's complex operations into one simple dashboard. From admission to alumni management, EdNora ERP empowers educators to focus less on paperwork and more on student success.
            </p>

            <div>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-gray-900 bg-[#FACC15] rounded-xl hover:bg-[#EAB308] hover:scale-105 transition-all duration-300 shadow-md"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* ===== RIGHT COLUMN: ANIMATED ZIGZAG CARDS ===== */}
          <motion.div 
            style={{ y: yParallax }} 
            className="flex flex-col gap-5 w-full mt-4 lg:mt-0"
          >

            {/* CARD 1 */}
            <div className="self-end w-full md:w-[75%] bg-white rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative">
              <div className="absolute -top-4 left-6 bg-[#BFDBFE] w-10 h-10 rounded-lg flex items-center justify-center rotate-3 shadow-sm border-2 border-white">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                Secure Data Management
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Bank-grade encryption and role-based access control ensure student records and financial data remain private and compliant.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="self-start w-full md:w-[75%] bg-[#F87171] rounded-[24px] p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative text-white mt-1">
              <div className="absolute -top-4 left-6 bg-[#FECACA] w-10 h-10 rounded-lg flex items-center justify-center -rotate-3 shadow-md border-2 border-[#F87171]">
                <BarChart3 className="text-[#991B1B] w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">
                Smart Analytics & Insights
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Track attendance trends, academic performance, and fee collections instantly with real-time reports to drive growth.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="self-end w-full md:w-[75%] bg-white rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative mt-1">
              <div className="absolute -top-4 left-6 bg-[#BBF7D0] w-10 h-10 rounded-lg flex items-center justify-center rotate-3 shadow-sm border-2 border-white">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                Paperless Operations
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Automate daily tasks like digital attendance, fee reminders, and report card generation to simplify workflow for staff.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;