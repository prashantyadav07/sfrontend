import React, { useRef } from 'react';
import { Users, GraduationCap, Calendar, DollarSign, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Users,
  GraduationCap,
  Calendar,
  DollarSign,
  MessageSquare,
  BarChart3
};

// School ERP Data
const features = [
  {
    iconName: 'Users',
    color: 'text-blue-600',
    title: 'Student Management',
    description: 'Comprehensive student profiles, attendance tracking, and academic records.',
    tags: ['FULL TIME', 'DIGITAL', 'B2B']
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
    tags: ['AUTOMATION', 'AI POWERED']
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
    tags: ['REAL-TIME', 'MOBILE APP']
  },
  {
    iconName: 'BarChart3',
    color: 'text-indigo-600',
    title: 'Analytics & Reports',
    description: 'Data-driven insights and comprehensive reports to make informed decisions.',
    tags: ['INSIGHTS', 'EXPORTABLE']
  }
];

// Initial positions (Scattered look)
const initialPositions = [
  { x: -100, y: -80, r: -5 },
  { x: 120, y: -100, r: 4 },
  { x: -150, y: 50, r: -6 },
  { x: 100, y: 80, r: 5 },
  { x: 0, y: 0, r: -2 },
  { x: 180, y: 20, r: 3 },
];

const SchoolFeatures = () => {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#FEFEFE] overflow-hidden flex flex-col items-center justify-center relative p-4">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-yellow-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-200/20 rounded-full blur-[100px]"></div>
      </div>

      {/* HEADINGS */}
      <div className="z-10 text-center mb-12 pointer-events-none max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Powerful Features for Modern Schools
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Everything you need to manage your educational institution efficiently
        </p>
      </div>

      {/* Interactive Card Area */}
      <div ref={containerRef} className="w-full max-w-7xl h-[70vh] flex items-center justify-center relative perspective-1000">
        
        {features.map((feature, idx) => {
          const IconComponent = iconMap[feature.iconName];
          const pos = initialPositions[idx] || { x: 0, y: 0, r: 0 };

          return (
            <motion.div
              key={idx}
              // Drag properties removed here 
              
              // Initial Placement
              initial={{ x: pos.x, y: pos.y, rotate: pos.r }}
              
              // Continuous Floating Animation
              animate={{ 
                y: [pos.y - 15, pos.y + 15, pos.y - 15], 
                rotate: [pos.r - 2, pos.r + 2, pos.r - 2],
              }}
              transition={{
                duration: 5, // Smooth floating speed
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5 // Staggered start so they don't move together
              }}

              // Only Hover Interaction kept (removed drag interactions)
              whileHover={{ scale: 1.05, zIndex: 50 }}
              
              className="absolute w-[290px] bg-[#fdfdfd] rounded-[24px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 flex flex-col justify-between select-none backdrop-blur-sm transition-shadow hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-gray-50 border border-gray-100 ${feature.color}`}>
                  {IconComponent && <IconComponent size={18} />}
                </div>
                <span className="font-bold text-gray-600 text-xs tracking-wide uppercase">SchoolERP</span>
              </div>

              {/* Card Body */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {feature.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] font-bold text-slate-500 bg-gray-100 rounded-md border border-gray-200 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer: Learn More */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Glossy Overlay */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolFeatures;