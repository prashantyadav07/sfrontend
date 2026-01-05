import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, GraduationCap, Users, CreditCard, 
  School, CalendarCheck, Bus, CalendarRange, 
  Briefcase, FileText, BookOpen, Library, 
  Building2, Box, Receipt, MessageSquareWarning, Bell, X, CheckCircle2 
} from 'lucide-react';

// --- 1. DATA (All Real Images) ---
const modules = [
  { 
    id: 1,
    name: "Admin Dashboard", 
    desc: "360° Campus Analytics", 
    icon: LayoutDashboard, 
    color: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Central Command Center",
      description: "Get a bird's-eye view of your entire institution's health. Monitor attendance, fee collection, and academic performance in real-time.",
      features: ["Real-time KPI Tracking", "Customizable Widgets", "Daily Admission Stats", "Revenue Graphs"]
    }
  },
  { 
    id: 2,
    name: "Student Lifecycle", 
    desc: "Admission to Alumni", 
    icon: GraduationCap, 
    color: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Student Information System",
      description: "Manage the complete journey of a student from the moment they enquire to the day they become alumni.",
      features: ["Online Admission Forms", "Digital Student Profiles", "Document Repository", "Alumni Network"]
    }
  },
  { 
    id: 3,
    name: "Faculty Hub", 
    desc: "Staff & Payroll", 
    icon: Users, 
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Teacher & Staff Management",
      description: "Empower your faculty with digital tools while simplifying HR processes like payroll and leave management.",
      features: ["Biometric Attendance Sync", "Auto-Payroll Generation", "Performance Reviews", "Digital Service Books"]
    }
  },
  { 
    id: 4,
    name: "Smart Fees", 
    desc: "Automated Billing", 
    icon: CreditCard, 
    color: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Fee & Finance Engine",
      description: "Eliminate queues and manual errors. Automate invoice generation and accept payments online securely.",
      features: ["Payment Gateway Integration", "Auto-Reminders via SMS", "Scholarship Management", "Defaulter Reports"]
    }
  },
  { 
    id: 5,
    name: "Classroom Manager", 
    desc: "Timetable & Subjects", 
    icon: School, 
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Academic Scheduling",
      description: "Create conflict-free timetables for hundreds of classes and teachers in minutes.",
      features: ["Drag-and-Drop Builder", "Substitute Teacher Allocation", "Syllabus Tracking", "Section Management"]
    }
  },
  { 
    id: 6,
    name: "Transport & GPS", 
    desc: "Live Bus Tracking", 
    icon: Bus, 
    color: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Transport Management",
      description: "Ensure student safety with real-time GPS tracking and automated route optimization.",
      features: ["Live Parent App Tracking", "Route Optimization", "Driver Management", "Vehicle Maintenance Logs"]
    }
  },
  { 
    id: 7,
    name: "Examination", 
    desc: "Results & Cards", 
    icon: FileText, 
    color: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Exam Controller",
      description: "Streamline the entire examination process from admit card generation to result publication.",
      features: ["GPA/CGB Calculation", "Automatic Report Cards", "Exam Seating Plan", "Question Paper Bank"]
    }
  },
  { 
    id: 8,
    name: "e-Library", 
    desc: "Digital Catalog", 
    icon: Library, 
    color: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Library Automation",
      description: "Transform your library into a digital knowledge hub with barcode integration.",
      features: ["Barcode Scanning", "Fine Calculation", "Book Reservation", "Online OPAC Search"]
    }
  },
  { 
    id: 9,
    name: "Inventory", 
    desc: "Asset Management", 
    icon: Box, 
    color: "bg-lime-600",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Store & Inventory",
      description: "Keep track of every piece of equipment, stationery, and furniture in your institution.",
      features: ["Vendor Management", "Purchase Orders", "Stock Alerts", "Asset Depreciation"]
    }
  },
  { 
    id: 10,
    name: "Communication", 
    desc: "SMS & Notifications", 
    icon: Bell, 
    color: "bg-violet-600",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    details: {
      title: "Alert System",
      description: "Bridge the gap between parents and the school with instant notifications.",
      features: ["Bulk SMS/Email", "Push Notifications", "Event Reminders", "Circular Management"]
    }
  }
];

const firstRow = modules.slice(0, 5);
const secondRow = modules.slice(5, 10);

// --- 2. MODAL COMPONENT (Responsive) ---
const FeatureModal = ({ module, onClose }) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container: 95% width on mobile, max-3xl on desktop */}
      <div className="bg-white rounded-2xl shadow-2xl w-[95%] max-w-3xl overflow-hidden animate-scale-up relative max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-gray-800 transition"
        >
          <X size={20} />
        </button>

        {/* Left: Image Side (Full width mobile, 40% desktop) */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
          <img src={module.image} alt={module.name} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${module.color} opacity-20 mix-blend-multiply`}></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <div className={`p-2 rounded-lg ${module.color} inline-block shadow-lg mb-2`}>
              <module.icon size={24} />
            </div>
            <h3 className="text-xl font-bold shadow-black/20 drop-shadow-md">{module.name}</h3>
          </div>
        </div>

        {/* Right: Content Side */}
        <div className="w-full md:w-3/5 p-6 md:p-8 bg-white">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">{module.details.title}</h4>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            {module.details.description}
          </p>
          
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Features</h5>
            {module.details.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{feat}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={onClose}
            className={`mt-8 w-full py-3 rounded-lg ${module.color} text-white font-semibold hover:opacity-90 transition shadow-lg shadow-${module.color}/30`}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. RESPONSIVE CARD COMPONENT ---
const ScrollerCard = ({ item, onClick }) => {
  const Icon = item.icon;
  return (
    <div 
      onClick={() => onClick(item)}
      className="relative group flex-shrink-0 mx-3 md:mx-5
                 w-[280px] h-[100px] 
                 md:w-[400px] md:h-[140px]
                 bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 
                 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex h-full">
        {/* Left: Image - Responsive Width */}
        <div className="w-24 md:w-40 relative overflow-hidden shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition"></div>
        </div>

        {/* Right: Content - Responsive Text & Padding */}
        <div className="flex-1 p-3 md:p-5 flex flex-col justify-center relative bg-white">
          <div className="flex items-center gap-2 mb-1.5 md:mb-2">
            <div className={`p-1.5 md:p-2 rounded-lg ${item.color} text-white`}>
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-bold text-gray-900 leading-tight text-base md:text-xl">
              {item.name}
            </h4>
          </div>
          
          <p className="text-gray-500 font-medium pl-1 line-clamp-2 text-xs md:text-sm">
            {item.desc}
          </p>
          
          <span className="absolute bottom-2 right-3 md:bottom-3 md:right-4 text-xs md:text-xs text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            Click to view →
          </span>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN SCROLLER SECTION ---
const InfiniteModuleScroller = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef1 = React.useRef(null);
  const scrollRef2 = React.useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedModule(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleMouseDown = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12 md:mb-20 animate-fade-in">
        <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs md:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200">
          Integrated Ecosystem
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Orchestrate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Entire Campus</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          From seamless admissions to automated payroll, our modules work in perfect harmony to digitalize every heartbeat of your institution.
        </p>
      </div>

      {/* --- SCROLLER CONTAINER --- */}
      <div className="relative w-full space-y-6 md:space-y-12">
        
        {/* Gradient Masks (Fade edges) */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Moves Left */}
        <div 
          ref={scrollRef1}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing group"
          onMouseDown={(e) => handleMouseDown(e, scrollRef1)}
          onMouseMove={(e) => handleMouseMove(e, scrollRef1)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex animate-scroll-left group-hover:pause-animation py-2">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((item, idx) => (
              <ScrollerCard key={`r1-${idx}`} item={item} onClick={setSelectedModule} />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div 
          ref={scrollRef2}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing group"
          onMouseDown={(e) => handleMouseDown(e, scrollRef2)}
          onMouseMove={(e) => handleMouseMove(e, scrollRef2)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex animate-scroll-right group-hover:pause-animation py-2">
             {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((item, idx) => (
              <ScrollerCard key={`r2-${idx}`} item={item} onClick={setSelectedModule} />
            ))}
          </div>
        </div>

      </div>

      {/* --- MODAL --- */}
      {selectedModule && (
        <FeatureModal module={selectedModule} onClose={() => setSelectedModule(null)} />
      )}

      {/* --- ANIMATIONS & STYLES --- */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-up {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        
        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
          width: max-content;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .group-hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default InfiniteModuleScroller;