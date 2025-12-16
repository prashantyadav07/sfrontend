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
    description: 'Comprehensive profiles, attendance tracking, and records.',
    tags: ['FULL TIME', 'DIGITAL']
  },
  {
    iconName: 'GraduationCap',
    color: 'text-purple-600',
    title: 'Academic Excellence',
    description: 'Manage curriculum, assignments, grades, and performance.',
    tags: ['PROJECT', 'REMOTE']
  },
  {
    iconName: 'Calendar',
    color: 'text-green-600',
    title: 'Smart Scheduling',
    description: 'Automated timetables, exam scheduling, and events.',
    tags: ['AUTOMATION', 'AI']
  },
  {
    iconName: 'DollarSign',
    color: 'text-yellow-600',
    title: 'Finance & Fee',
    description: 'Handle fee collection, expenses, and financial reports.',
    tags: ['ACCOUNTS', 'SECURE']
  },
  {
    iconName: 'MessageSquare',
    color: 'text-pink-600',
    title: 'Communication Hub',
    description: 'Connect teachers, students, and parents easily.',
    tags: ['REAL-TIME', 'APP']
  },
  {
    iconName: 'BarChart3',
    color: 'text-indigo-600',
    title: 'Analytics & Reports',
    description: 'Data-driven insights to make informed decisions.',
    tags: ['INSIGHTS', 'DATA']
  }
];

// --- 1. DESKTOP POSITIONS (UNTOUCHED) ---
const desktopPositions = [
  { x: -120, y: -90, r: -4 },
  { x: 140, y: -110, r: 3 },
  { x: -160, y: 60, r: -5 },
  { x: 120, y: 90, r: 4 },
  { x: 0, y: 0, r: -2 },
  { x: 190, y: 20, r: 2 },
];

// --- 2. TABLET POSITIONS (UNTOUCHED) ---
const tabletPositions = [
  { x: -160, y: -180, r: -3 }, 
  { x: 160, y: -180, r: 3 },  
  { x: 0, y: -50, r: 0 },     
  { x: -180, y: 100, r: 4 },  
  { x: 180, y: 100, r: -4 },  
  { x: 0, y: 220, r: 2 },     
];

// --- 3. MOBILE POSITIONS (UNTOUCHED) ---
const mobilePositions = [
  { x: 0, y: -400, r: -2 },
  { x: 0, y: -240, r: 2 },
  { x: 0, y: -80, r: -1 },
  { x: 0, y: 80, r: 1 },
  { x: 0, y: 240, r: -2 },
  { x: 0, y: 400, r: 2 },
];

const SchoolFeatures = () => {
  const [screenMode, setScreenMode] = useState('desktop');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenMode('desktop');
      } else if (width >= 768) {
        setScreenMode('tablet');
      } else {
        setScreenMode('mobile');
      }
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (!mounted) return null;

  const getPosition = (index) => {
    if (screenMode === 'desktop') return desktopPositions[index];
    if (screenMode === 'tablet') return tabletPositions[index];
    return mobilePositions[index];
  };

  // CHANGE: Reduced heights to remove excess vertical space
  // Mobile: 1000px (was 1100), Tablet: 600px (was 800), Desktop: 500px (was 650)
  const containerHeight = screenMode === 'mobile' ? 'h-[1000px]' : screenMode === 'tablet' ? 'h-[600px]' : 'h-[500px]';

  return (
    // CHANGE: Removed 'min-h-screen', added 'py-10' to reduce top/bottom gaps
    <div className="w-full bg-[#FEFEFE] flex flex-col items-center justify-start relative p-4 py-10 md:py-20 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-yellow-200/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-[80px]"></div>
      </div>

      {/* HEADINGS */}
      <div className="z-10 text-center mb-4 md:mb-8 max-w-4xl px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
          Powerful Features
        </h2>
        <p className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Manage your educational institution efficiently
        </p>
      </div>

      {/* CONTAINER AREA */}
      <div className={`w-full max-w-7xl relative transition-all duration-500 flex items-center justify-center ${containerHeight}`}>
        <AnimatePresence mode='wait'>
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName];
            const pos = getPosition(idx);

            return (
              <motion.div
                key={`${screenMode}-${idx}`}
                
                initial={{ 
                  x: pos.x, 
                  y: pos.y + 50, 
                  rotate: pos.r, 
                  opacity: 0, 
                  scale: 0.8 
                }}
                
                animate={{ 
                  x: pos.x, 
                  y: [pos.y - 10, pos.y + 10, pos.y - 10], 
                  rotate: [pos.r - 2, pos.r + 2, pos.r - 2],
                  opacity: 1,
                  scale: 1
                }}
                
                transition={{
                  duration: 4 + idx, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 }
                }}

                whileHover={{ scale: 1.05, zIndex: 50 }}

                className={`
                  absolute
                  bg-[#fdfdfd] border border-white/60 shadow-sm backdrop-blur-sm
                  flex flex-col justify-between group
                  rounded-[24px] p-5 shadow-xl
                  ${screenMode === 'desktop' ? 'w-[280px]' : 'w-[90%] max-w-[300px]'}
                `}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gray-50 border border-gray-100 ${feature.color}`}>
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                    <span className="font-bold text-gray-400 text-[10px] tracking-widest uppercase">
                      ERP Module
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                   <div className="flex gap-2 flex-wrap">
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