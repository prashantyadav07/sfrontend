import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Bus, DollarSign, Smartphone, BarChart3, ArrowRight, BookOpen, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Users,
  GraduationCap,
  Bus,
  DollarSign,
  Smartphone,
  BarChart3,
  BookOpen,
  Briefcase
};

const features = [
  {
    iconName: 'Users',
    title: 'Student Management',
    description: 'Comprehensive profiles, attendance tracking, and records.',
    tags: ['FULL TIME', 'DIGITAL'],
    gradient: 'from-blue-50/90 via-white/80 to-blue-100/90',
    border: 'border-blue-200/50',
    iconColor: 'text-blue-600',
    tagBg: 'bg-blue-100/50 text-blue-700'
  },
  {
    iconName: 'GraduationCap',
    title: 'Academic Excellence',
    description: 'Manage curriculum, assignments, grades, and performance.',
    tags: ['PROJECT', 'REMOTE'],
    gradient: 'from-purple-50/90 via-white/80 to-fuchsia-100/90',
    border: 'border-purple-200/50',
    iconColor: 'text-purple-600',
    tagBg: 'bg-purple-100/50 text-purple-700'
  },
  {
    iconName: 'Bus',
    title: 'Live Bus Tracking',
    description: 'Real-time GPS tracking for school buses and transport.',
    tags: ['GPS', 'SAFETY'],
    gradient: 'from-emerald-50/90 via-white/80 to-teal-100/90',
    border: 'border-emerald-200/50',
    iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-100/50 text-emerald-700'
  },
  {
    iconName: 'DollarSign',
    title: 'Finance & Fee',
    description: 'Handle fee collection, expenses, and financial reports.',
    tags: ['ACCOUNTS', 'SECURE'],
    gradient: 'from-amber-50/90 via-white/80 to-orange-100/90',
    border: 'border-amber-200/50',
    iconColor: 'text-amber-600',
    tagBg: 'bg-amber-100/50 text-amber-700'
  },
  {
    iconName: 'Smartphone',
    title: 'Dedicated Mobile Apps',
    description: 'Custom apps for parents, students, and staff members.',
    tags: ['IOS', 'ANDROID'],
    gradient: 'from-rose-50/90 via-white/80 to-pink-100/90',
    border: 'border-pink-200/50',
    iconColor: 'text-pink-600',
    tagBg: 'bg-pink-100/50 text-pink-700'
  },
  {
    iconName: 'BarChart3',
    title: 'Analytics & Reports',
    description: 'Data-driven insights to make informed decisions.',
    tags: ['INSIGHTS', 'DATA'],
    gradient: 'from-indigo-50/90 via-white/80 to-violet-100/90',
    border: 'border-indigo-200/50',
    iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-100/50 text-indigo-700'
  },
  {
    iconName: 'BookOpen',
    title: 'Library Management',
    description: 'Track book inventory, issues, returns and digital catalog.',
    tags: ['LMS', 'BOOKS'],
    gradient: 'from-cyan-50/90 via-white/80 to-sky-100/90',
    border: 'border-cyan-200/50',
    iconColor: 'text-cyan-600',
    tagBg: 'bg-cyan-100/50 text-cyan-700'
  },
  {
    iconName: 'Briefcase',
    title: 'HR & Payroll',
    description: 'Manage staff attendance, leave requests and salary slips.',
    tags: ['STAFF', 'PAYROLL'],
    gradient: 'from-red-50/90 via-white/80 to-orange-100/90',
    border: 'border-red-200/50',
    iconColor: 'text-red-600',
    tagBg: 'bg-red-100/50 text-red-700'
  }
];

// --- 1. DESKTOP POSITIONS (BALANCED CLUSTER) ---
// Brought closer (X range reduced from 380 to 280)
// Added a center card and a top peak to fill gaps
const desktopPositions = [
  { x: -220, y: -160, r: -4 }, // Top Left
  { x: 220, y: -160, r: 3 },   // Top Right
  { x: -280, y: 30, r: -2 },   // Mid Left (Outer)
  { x: 280, y: 30, r: 2 },     // Mid Right (Outer)
  { x: -110, y: 170, r: -3 },  // Bottom Left (Inner)
  { x: 110, y: 170, r: 3 },    // Bottom Right (Inner)
  { x: 0, y: -40, r: 0 },      // DEAD CENTER (Fills the gap)
  { x: 0, y: -270, r: 0 },     // TOP PEAK (Creates height)
];

// --- 2. TABLET POSITIONS (TIGHTER GRID) ---
const tabletPositions = [
  { x: -160, y: -280, r: -3 }, 
  { x: 160, y: -280, r: 3 },  
  { x: -200, y: -80, r: 2 },  
  { x: 200, y: -80, r: -2 },
  { x: -160, y: 120, r: -3 },
  { x: 160, y: 120, r: 3 },
  { x: 0, y: 300, r: 0 },     // Bottom
  { x: 0, y: -420, r: 0 },    // Top
];

// --- 3. MOBILE POSITIONS (VERTICAL STACK) ---
const mobilePositions = [
  { x: 0, y: -560, r: -2 },
  { x: 0, y: -400, r: 2 },
  { x: 0, y: -240, r: -1 },
  { x: 0, y: -80, r: 1 },
  { x: 0, y: 80, r: -2 },
  { x: 0, y: 240, r: 2 },
  { x: 0, y: 400, r: -1 },
  { x: 0, y: 560, r: 1 },
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
    const safeIndex = index % 8; 
    if (screenMode === 'desktop') return desktopPositions[safeIndex];
    if (screenMode === 'tablet') return tabletPositions[safeIndex];
    return mobilePositions[safeIndex];
  };

  const containerHeight = screenMode === 'mobile' ? 'h-[1400px]' : screenMode === 'tablet' ? 'h-[900px]' : 'h-[650px]';

  return (
    <div className="w-full bg-[#FEFEFE] flex flex-col items-center justify-start relative p-4 py-10 md:py-20 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-yellow-200/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="z-10 text-center mb-4 md:mb-8 max-w-4xl px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
          Powerful Features
        </h2>
        <p className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Manage your educational institution efficiently
        </p>
      </div>

      <div className={`w-full max-w-7xl relative transition-all duration-500 flex items-center justify-center ${containerHeight}`}>
        <AnimatePresence mode='wait'>
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName];
            const pos = getPosition(idx);

            const isEven = idx % 2 === 0;
            const floatX = isEven ? 10 : -10; // Reduced float distance slightly for cleaner look
            const floatY = isEven ? -10 : 10;

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
                  x: [pos.x, pos.x + floatX, pos.x - (floatX/2), pos.x], 
                  y: [pos.y, pos.y + floatY, pos.y - (floatY/2), pos.y], 
                  rotate: [pos.r, pos.r - 2, pos.r + 2, pos.r],
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 6 + idx, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 }
                }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className={`
                  absolute
                  bg-gradient-to-br ${feature.gradient}
                  border ${feature.border}
                  backdrop-blur-md shadow-lg
                  flex flex-col justify-between group
                  rounded-[32px] p-6
                  ${screenMode === 'desktop' ? 'w-[280px]' : 'w-[90%] max-w-[300px]'}
                `}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-white shadow-sm ${feature.iconColor}`}>
                      {IconComponent && <IconComponent size={22} />}
                    </div>
                    <span className="font-bold text-gray-500/80 text-[10px] tracking-widest uppercase">
                      ERP Module
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-800 text-xl leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/40 flex justify-between items-center">
                   <div className="flex gap-2 flex-wrap">
                     {feature.tags.map((tag, i) => (
                       <span key={i} className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${feature.tagBg}`}>
                         {tag}
                       </span>
                     ))}
                   </div>
                   <div className="p-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors">
                      <ArrowRight className={`w-4 h-4 ${feature.iconColor}`} />
                   </div>
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