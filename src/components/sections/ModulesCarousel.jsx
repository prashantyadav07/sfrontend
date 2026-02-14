import React, { useState } from 'react';
import { 
  LayoutDashboard, GraduationCap, Users, CreditCard, 
  School, Bus, FileText, Library, Box, Bell, X, CheckCircle2, 
  Crown, Sparkles, Star, Flower2, Heart, Zap
} from 'lucide-react';

// --- 1. ERP DATA (Content) ---
const modules = [
  { 
    id: 1,
    name: "Admin Control", 
    desc: "360° Analytics", 
    icon: LayoutDashboard, 
    color: "bg-blue-600",
    sticker: Crown, 
    stickerColor: "text-yellow-400 fill-yellow-400",
    rotate: "rotate-12",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Admin Dashboard & Analytics",
      description: "Complete control over your institution. Monitor admissions, fee collection, and staff attendance in real-time.",
      features: ["Daily Admission Stats", "Fee Collection Reports", "Staff Attendance", "Expense Tracker"]
    }
  },
  { 
    id: 2,
    name: "Student Info", 
    desc: "Admission to Alumni", 
    icon: GraduationCap, 
    color: "bg-emerald-600",
    sticker: Flower2,
    stickerColor: "text-pink-400 fill-pink-400",
    rotate: "-rotate-12",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Student Information System",
      description: "Manage the complete student lifecycle from online inquiry to final certification and alumni management.",
      features: ["Online Admission Forms", "Digital Profiles", "ID Card Generation", "Parent Communication"]
    }
  },
  { 
    id: 3,
    name: "HR & Payroll", 
    desc: "Staff Management", 
    icon: Users, 
    color: "bg-orange-500",
    sticker: Star,
    stickerColor: "text-blue-400 fill-blue-400",
    rotate: "rotate-6",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Human Resource Management",
      description: "Automate staff attendance via biometrics and generate accurate payroll with one click.",
      features: ["Biometric Sync", "Auto-Payslip Gen", "Leave Management", "Performance Reviews"]
    }
  },
  { 
    id: 4,
    name: "Fee Manager", 
    desc: "Auto Invoicing", 
    icon: CreditCard, 
    color: "bg-purple-600",
    sticker: Sparkles,
    stickerColor: "text-purple-400 fill-purple-400",
    rotate: "-rotate-6",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Fee & Finance Engine",
      description: "Send automated fee reminders and accept online payments securely. No more long queues.",
      features: ["Online Payment Gateway", "Auto-Reminders (SMS)", "Defaulter Lists", "Scholarship Mgmt"]
    }
  },
  { 
    id: 5,
    name: "Academics", 
    desc: "Timetable & LMS", 
    icon: School, 
    color: "bg-indigo-600",
    sticker: Heart,
    stickerColor: "text-red-400 fill-red-400",
    rotate: "rotate-12",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Academic Management",
      description: "Create conflict-free timetables and manage lesson plans. Share homework and notes digitally.",
      features: ["Timetable Builder", "Homework Module", "Syllabus Tracking", "E-Learning Resources"]
    }
  },
  { 
    id: 6,
    name: "Transport", 
    desc: "GPS Tracking", 
    icon: Bus, 
    color: "bg-yellow-500",
    sticker: Zap,
    stickerColor: "text-yellow-500 fill-yellow-500",
    rotate: "-rotate-12",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Transport Management",
      description: "Ensure student safety with real-time bus tracking and automated route optimization.",
      features: ["Live Parent App", "Route Optimization", "Driver Management", "Vehicle Maintenance"]
    }
  },
  { 
    id: 7,
    name: "Examination", 
    desc: "Results & Cards", 
    icon: FileText, 
    color: "bg-cyan-600",
    sticker: Star,
    stickerColor: "text-orange-400 fill-orange-400",
    rotate: "rotate-45",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Exam Controller",
      description: "Conduct offline or online exams and generate report cards instantly.",
      features: ["Admit Card Gen", "Report Card Builder", "Marks Entry App", "Question Bank"]
    }
  },
  { 
    id: 8,
    name: "Library", 
    desc: "Digital Catalog", 
    icon: Library, 
    color: "bg-amber-600",
    sticker: Sparkles,
    stickerColor: "text-green-400 fill-green-400",
    rotate: "-rotate-6",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Library Automation",
      description: "Manage books, issue/returns, and fines efficiently with barcode support.",
      features: ["Barcode Scanning", "Fine Calculation", "Book Reservation", "OPAC Search"]
    }
  }
];

// --- 2. MODAL COMPONENT ---
const FeatureModal = ({ module, onClose }) => {
  if (!module) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
        <button onClick={onClose} className="absolute top-3 right-3 z-20 p-2 bg-gray-100/80 backdrop-blur-sm rounded-full hover:bg-gray-200 transition">
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
            <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
                <img src={module.image} alt={module.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${module.color} opacity-30`}></div>
            </div>
            <div className="p-6 md:p-8 md:w-3/5 overflow-y-auto">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${module.color} bg-opacity-10 text-xs font-bold uppercase tracking-wide mb-3`}>
                   <module.icon size={14} className="text-gray-700"/>
                   <span className="text-gray-800">{module.name}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{module.details.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{module.details.description}</p>
                <div className="space-y-2">
                    {module.details.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                            <span>{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. RESPONSIVE CARD DESIGN ---
const PlayfulCard = ({ item, onClick }) => {
  const Sticker = item.sticker;
  return (
    <div 
      onClick={() => onClick(item)} 
      className="group relative flex-shrink-0 w-[280px] md:w-[290px] mx-4 pt-16 cursor-pointer transition-transform hover:-translate-y-2"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-32 h-32 md:w-36 md:h-36">
        <div className="relative w-full h-full">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full rounded-full object-cover border-[5px] border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute -top-1 -right-2 ${item.rotate} drop-shadow-md bg-white p-1.5 rounded-full`}>
               <Sticker className={`w-7 h-7 md:w-8 md:h-8 ${item.stickerColor}`} />
            </div>
        </div>
      </div>

      <div className="bg-[#FFF5F5] pt-20 pb-6 px-5 rounded-[2.5rem] text-center shadow-sm border border-pink-100 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 h-[260px] flex flex-col items-center">
        <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2 font-sans tracking-tight mt-2">
          {item.name}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mb-4 leading-relaxed line-clamp-3 px-1">
           {item.details.description}
        </p>
        <div className="mt-auto inline-block text-[10px] md:text-xs font-extrabold text-[#7CB89D] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-sm">
           {item.desc}
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN LAYOUT ---
const ErpModulesSection = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  // Data triplicated for smooth infinite scroll
  const scrollData = [...modules, ...modules, ...modules];

  // --- 🔥 Scroll Function (Added Here) ---
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth animation
    });
  };

  return (
    <div className="relative bg-[#FFFCF3] w-full overflow-hidden font-sans">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FDE6A6] rounded-br-[100%] rounded-bl-[40%] opacity-30 -translate-x-20 -translate-y-20 z-0 pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FDE6A6] rounded-tl-full opacity-30 translate-x-10 translate-y-10 z-0 pointer-events-none blur-2xl"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 md:py-16">
        
        {/* --- HEADER --- */}
        <div className="text-center px-4 mb-8">
          <h4 className="text-[#7CB89D] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            // INTEGRATED CAMPUS ERP
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4 tracking-tight leading-tight">
            Orchestrate Your Entire Campus <br className="hidden md:block" /> Every Department
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            From seamless admissions to automated payroll, our modules work in perfect harmony to digitalize every heartbeat of your institution.
          </p>
          
          {/* --- 🔥 Updated Button with onClick --- */}
          <button 
            onClick={handleScrollToTop}
            className="bg-[#F4C446] text-[#2D2D2D] text-sm font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#e0b134] hover:scale-105 transition-all shadow-yellow-500/20"
          >
            Explore Modules
          </button>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="relative w-full">
           <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#FFFCF3] to-transparent z-20 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#FFFCF3] to-transparent z-20 pointer-events-none"></div>

           <div className="flex overflow-hidden py-10 md:py-16"> 
             <div className="flex animate-marquee hover:pause-marquee pl-4">
               {scrollData.map((item, index) => (
                 <PlayfulCard 
                   key={`${item.id}-${index}`} 
                   item={item} 
                   onClick={setSelectedModule} 
                 />
               ))}
             </div>
           </div>
        </div>

      </div>

      {/* Modal Popup */}
      {selectedModule && (
        <FeatureModal module={selectedModule} onClose={() => setSelectedModule(null)} />
      )}

      {/* --- ANIMATION STYLES --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ErpModulesSection;