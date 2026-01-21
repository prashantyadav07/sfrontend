import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Quote, Star, Users, TrendingUp, Award, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom'; // Navigation ke liye

// --- Utility for Cleaner Classes ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Principal",
    org: "Delhi Public School",
    content: "eduTally has transformed how we manage our institution. The intuitive interface and comprehensive features have streamlined our operations significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
    color: "blue"
  },
  {
    name: "Rajesh Kumar",
    role: "Director",
    org: "Springdale Intl.",
    content: "Outstanding platform! Our administrative efficiency has increased by 60%. The support team is incredibly responsive and helpful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    color: "indigo"
  },
  {
    name: "Anita Verma",
    role: "Academic Head",
    org: "Modern School",
    content: "The reporting and analytics features are exceptional. We can now make data-driven decisions that benefit our students and faculty.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    color: "violet"
  },
  {
    name: "Vikram Singh",
    role: "Administrator",
    org: "Cambridge Academy",
    content: "Implementation was seamless and the ROI has been remarkable. This system has become indispensable to our daily operations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200",
    color: "blue"
  },
  {
    name: "Harshdeep Sharma",
    role: "IT Coordinator",
    org: "RP Public School",
    content: "The security features and data privacy compliance gave us peace of mind. Best ed-tech investment we've made in a decade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=200&h=200",
    color: "indigo"
  }
];

const stats = [
  { icon: Users, value: "25+", label: "Partner Schools", color: "text-gray-600" },
  { icon: TrendingUp, value: "15K+", label: "Active Students", color: "text-gray-600" },
  { icon: Award, value: "98%", label: "Satisfaction", color: "text-gray-600" },
  { icon: Clock, value: "24/7", label: "Expert Support", color: "text-gray-600" }
];

// --- Components ---

const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 mx-4 h-full">
      <div className="relative group h-full">
        <div className="absolute -inset-0.5 bg-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        
        <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-50 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-3 h-3 text-gray-800" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-0.5">{item.role}</p>
                  <p className="text-xs text-gray-400">{item.org}</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-gray-100 group-hover:text-gray-200 transition-colors duration-300 fill-current" />
            </div>

            <p className="text-gray-600 leading-relaxed text-[15px] mb-6 font-medium">
              "{item.content}"
            </p>
          </div>

          <div className="flex items-center gap-1 border-t border-gray-50 pt-4 mt-auto">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-auto text-xs font-medium text-gray-400">Verified User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Marquee = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="relative flex overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none"></div>
      
      <motion.div
        className="flex py-10"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }} 
      >
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.name}-${idx}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {value}
    </motion.span>
  );
};

const ProfessionalTestimonials = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 md:py-32">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-gray-600 uppercase">Trusted by Education Leaders</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            Loved by schools, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
               built for excellence.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Join hundreds of forward-thinking institutions that have modernized their campus management with eduTally.
          </motion.p>
        </div>

        <div className="relative -mx-4 md:-mx-0 mb-20">
           <Marquee items={testimonials} speed={50} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className={cn("mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 bg-slate-50 shadow-sm", stat.color)}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tracking-tight">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Updated CTA Box with Animated Airy Orange Gradient --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready to transform your school?</h3>
              <p className="text-gray-500 text-lg">Join the fastest growing education network today.</p>
            </div>
            
            {/* Contact Us Button with Airy Orange Animated Gradient */}
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 flex items-center gap-2 overflow-hidden border border-orange-200"
            >
              {/* Background Animated Gradient Layer */}
              <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-r from-orange-400/40 via-orange-200/20 to-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              />
              
              <span className="relative z-10">Contact Us</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProfessionalTestimonials;