import React, { useState, useEffect } from 'react';
import { Menu, X, School, ChevronRight } from 'lucide-react';

const SchoolERPHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Scroll to Top (Logo Click)
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // 3. Smooth Scroll to Section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Features', 'Modules', 'Testimonials', 'Contact'];

  return (
    <>
      {/* MAIN HEADER
        Update:
        - Used 'fixed' instead of 'absolute'.
        - Ab ye mobile aur desktop dono par screen k top par stick rahega.
      */}
      <header 
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          w-[90%] md:w-[80%] lg:w-[75%] max-w-5xl
          ${isScrolled 
            ? 'top-4 bg-white/90 shadow-2xl border-white/50 py-2' // Scroll karne par thoda compact ho jayega
            : 'top-6 bg-white/95 border-white/40 shadow-xl py-3'  // Shuru me thoda niche rahega
          }
          rounded-full 
          border backdrop-blur-xl
        `}
      >
        {/* Inner Container */}
        <div className="px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO SECTION */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center gap-2 md:gap-3 cursor-pointer select-none group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <School className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-none">
                  NextGen
                </span>
                <span className="text-[9px] font-extrabold text-blue-600 tracking-[0.2em] uppercase mt-0.5">
                  ERP System
                </span>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center bg-gray-100/60 p-1 rounded-full border border-gray-200/50 ml-4">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="px-5 py-2 text-xs font-bold text-gray-600 hover:text-blue-700 hover:bg-white hover:shadow-md rounded-full transition-all duration-300 ease-out"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE BUTTON */}
            <div className="hidden lg:flex items-center">
              <button className="px-6 py-2.5 text-xs bg-gray-900 text-white font-bold rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                Get Started 
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 bg-gray-100/80 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors active:scale-95"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* MOBILE MENU EXPANDABLE */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isMenuOpen ? 'max-h-[500px] opacity-100 mt-4 pb-2' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-1 pt-2 border-t border-gray-100">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="p-3 text-center text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 px-1">
                <button className="w-full py-3 text-sm font-bold text-white bg-gray-900 hover:bg-black rounded-xl shadow-lg transition-all">
                  Get Started Free
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* SPACER DIV - Isko bada rakha hai taaki content header ke niche na chupe */}
      <div className="h-32 md:h-40 w-full"></div>
    </>
  );
};

export default SchoolERPHeader;