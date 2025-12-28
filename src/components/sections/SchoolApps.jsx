import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  UserCog, 
  GraduationCap, 
  Users, 
  Bus, 
  ArrowLeft,
  Download
} from 'lucide-react';

const SchoolApps = () => {
  const apps = [
    {
      title: "Admin App",
      description: "Manage school operations, staff records, and financial analytics from a single dashboard.",
      icon: <UserCog className="w-5 h-5 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", 
      isAvailable: false
    },
    {
      title: "Teacher App",
      description: "Automate attendance, manage digital gradebooks, and share study materials instantly.",
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop",
      isAvailable: false
    },
    {
      title: "Parent App",
      description: "Track your child's real-time progress, pay fees online, and stay updated with school events.",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1000&auto=format&fit=crop", 
      isAvailable: false
    },
    {
      title: "Driver App",
      description: "Ensure child safety with live route tracking and instant SOS notifications for drivers.",
      icon: <Bus className="w-5 h-5 text-orange-600" />,
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop",
      isAvailable: true,
      apkPath: "/assets/driverapp.apk"
    }
  ];

  const handleInteraction = (app) => {
    if (app.isAvailable) {
      // Logic for downloading APK
      const link = document.createElement('a');
      link.href = app.apkPath;
      link.download = `${app.title}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Show Available Soon alert
      alert("Available Soon!");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group"
        >
          <div className="p-1.5 rounded-lg border border-slate-200 bg-white shadow-sm group-hover:bg-slate-50">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-full"
        >
          Smart ERP Ecosystem
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
        >
          Integrated <span className="text-blue-600">Digital Portals</span>
        </motion.h1>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleInteraction(app)}
            className="group relative bg-white border border-slate-200 rounded-[24px] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-500 cursor-pointer flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-44 overflow-hidden">
              <img 
                src={app.image} 
                alt={app.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-lg border border-white/20">
                {app.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {app.title}
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                {app.description}
              </p>

              {/* Action Button with Requested Motion Effect */}
              <div className="mt-auto">
                <div className="relative w-full overflow-hidden bg-slate-900 text-white py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                  
                  {/* The Requested Gradient Animation Effect */}
                  <motion.div 
                    className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400/40 via-blue-200/20 to-transparent"
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
                  
                  {/* Button Content */}
                  <Download className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">Download App</span>
                </div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shine" />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/50 rounded-full border border-slate-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-600 text-[12px] font-bold uppercase tracking-widest">
            Systems Online & Secured
          </span>
        </div>
        <p className="mt-6 text-slate-400 text-xs">
          &copy; 2025 Indian School ERP. All Rights Reserved.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}} />

    </div>
  );
};

export default SchoolApps;