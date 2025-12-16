import React, { useRef, useState, useEffect } from 'react';
import { Users, GraduationCap, Calendar, DollarSign, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Users,
  GraduationCap,
  Calendar,
  DollarSign,
  MessageSquare,
  BarChart3
};

const features = [
  {
    iconName: 'Users',
    color: 'text-blue-600',
    title: 'Student Management',
    description: 'Comprehensive student profiles, attendance tracking, and academic records.',
    tags: ['FULL TIME', 'DIGITAL']
  },
  {
    iconName: 'GraduationCap',
    color: 'text-purple-600',
    title: 'Academic Excellence',
    description: 'Manage curriculum, assignments, grades, and academic performance.',
    tags: ['PROJECT BASED', 'REMOTE']
  },
  {
    iconName: 'Calendar',
    color: 'text-green-600',
    title: 'Smart Scheduling',
    description: 'Automated timetables, exam scheduling, and event management.',
    tags: ['AUTOMATION', 'AI']
  },
  {
    iconName: 'DollarSign',
    color: 'text-yellow-600',
    title: 'Finance & Fee',
    description: 'Handle fee collection, expenses, payroll, and generate financial reports.',
    tags: ['ACCOUNTS', 'SECURE']
  },
  {
    iconName: 'MessageSquare',
    color: 'text-pink-600',
    title: 'Communication Hub',
    description: 'Connect teachers, students, and parents through integrated messaging.',
    tags: ['REAL-TIME', 'APP']
  },
  {
    iconName: 'BarChart3',
    color: 'text-indigo-600',
    title: 'Analytics & Reports',
    description: 'Data-driven insights and comprehensive reports to make informed decisions.',
    tags: ['INSIGHTS', 'DATA']
  }
];

// Desktop positions (Scattered layout)
const desktopPositions = [
  { x: -120, y: -90, r: -4 },
  { x: 140, y: -110, r: 3 },
  { x: -160, y: 60, r: -5 },
  { x: 120, y: 90, r: 4 },
  { x: 0, y: 0, r: -2 },
  { x: 190, y: 20, r: 2 },
];

const SchoolFeatures = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkSize = () => {
      // 1024px se upar hi "Floating" effect dikhega
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (!mounted) return null; // Hydration fix

  return (
    <div className="min-h-screen bg-[#FEFEFE] flex flex-col items-center justify-center relative p-4 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-yellow-200/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-[80px]"></div>
      </div>

      {/* HEADINGS */}
      <div className="z-10 text-center mb-8 md:mb-12 max-w-4xl px-4 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-5 leading-tight">
          Powerful Features for Modern Schools
        </h2>
        <p className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Everything you need to manage your educational institution efficiently
        </p>
      </div>

      {/* 
        LOGIC SWITCH:
        Hum 'AnimatePresence' aur 'key' ka use kar rahe hain taaki jab
        Screen Size change ho, toh React pura structure re-render kare.
        Isse "Gayab hone wala bug" fix ho jayega.
      */}
      <div className={`w-full max-w-7xl relative transition-all duration-500 ${isDesktop ? 'h-[650px] flex items-center justify-center' : 'h-auto block'}`}>
        <AnimatePresence mode='wait'>
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName];
            const pos = desktopPositions[idx] || { x: 0, y: 0, r: 0 };

            return (
              <motion.div
                // Key change hone se React isko naya element maanta hai (Fixes positioning bugs)
                key={`${isDesktop ? 'desktop' : 'mobile'}-${idx}`}
                
                // --- ANIMATION LOGIC ---
                initial={isDesktop 
                  ? { x: pos.x, y: pos.y, rotate: pos.r, opacity: 0, scale: 0.8 } // Laptop Start
                  : { y: 50, opacity: 0, scale: 0.95 } // Mobile Start
                }
                
                animate={isDesktop 
                  ? { 
                      y: [pos.y - 10, pos.y + 10, pos.y - 10], // Floating Effect
                      rotate: [pos.r - 2, pos.r + 2, pos.r - 2],
                      opacity: 1,
                      scale: 1
                    }
                  : { 
                      y: 0, // No Floating on Mobile (Fixes "One floating" issue)
                      rotate: 0,
                      opacity: 1,
                      scale: 1
                    }
                }
                
                transition={isDesktop 
                  ? {
                      duration: 4 + idx, // Random speed for natural float
                      repeat: Infinity,
                      ease: "easeInOut",
                      opacity: { duration: 0.8 }
                    }
                  : {
                      duration: 0.5,
                      delay: idx * 0.1, // Simple list animation
                      ease: "easeOut"
                    }
                }

                whileHover={isDesktop ? { scale: 1.05, zIndex: 50 } : { scale: 1.02 }}

                // --- STYLING (Mobile vs Laptop) ---
                className={`
                  bg-[#fdfdfd] border border-white/60 shadow-sm backdrop-blur-sm
                  flex flex-col justify-between group
                  
                  ${isDesktop 
                    ? 'absolute w-[280px] rounded-[24px] p-5 shadow-xl'  // Laptop Style
                    : 'relative w-full mb-4 rounded-xl p-4 min-h-[160px]' // Mobile Style (Grid/List)
                  }
                `}
              >
                {/* Card Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gray-50 border border-gray-100 ${feature.color}`}>
                      {IconComponent && <IconComponent size={isDesktop ? 20 : 18} />}
                    </div>
                    <span className="font-bold text-gray-400 text-[10px] tracking-widest uppercase">
                      ERP Module
                    </span>
                  </div>

                  <h3 className={`font-bold text-gray-900 leading-tight mb-2 ${isDesktop ? 'text-lg' : 'text-base'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-500 font-medium leading-relaxed ${isDesktop ? 'text-sm' : 'text-xs'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Tags & Link */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                   <div className="flex gap-2">
                     {feature.tags.map((tag, i) => (
                       <span key={i} className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SchoolFeatures;