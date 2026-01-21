import React, { useState, useEffect } from 'react';
import { School, Menu, X, Phone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const SchoolERPHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigate = useNavigate(); // 2. Initialize hook

  const centerNavItems = [
    { name: 'Features', id: 'features' },
    { name: 'Modules', id: 'modules' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    // Check if we are on the home page ('/')
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/'); // Logo click par Home page par le jaye
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // 3. New Function for Contact Navigation
  const handleContactClick = () => {
    navigate('/contact'); // Yeh seedha /contact page par le jayega
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        style={{
          transform: (isVisible || isMenuOpen) 
            ? 'translateX(-50%) translateY(0)' 
            : 'translateX(-50%) translateY(-150%)'
        }}
        className={`fixed z-50 left-1/2 
          w-[95%] md:w-[90%] lg:w-[80%] max-w-6xl
          transition-all duration-500 ease-in-out
          top-4 md:top-6
          bg-white/90 backdrop-blur-md shadow-lg border border-white/40 
          ${isMenuOpen ? 'rounded-3xl' : 'rounded-full'}
          py-2 md:py-3
        `}
      >
        <div className="px-4 md:px-6 relative">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer select-none group z-10"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-1.5 rounded-lg shadow-md group-hover:scale-105 transition-transform">
                <School className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-900 leading-none">
                  eduTally
                </span>
                <span className="text-[8px] md:text-[9px] font-bold text-blue-600 tracking-wider uppercase">
                  
                </span>
              </div>
            </div>

            {/* CENTER NAV */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
              {centerNavItems.map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-sm rounded-full transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3 z-10">
              {/* Desktop Contact Button -> Updated onClick */}
              <button 
                 onClick={handleContactClick} 
                 className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm bg-gray-900 text-white font-bold rounded-full hover:bg-black hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <Phone size={14} />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>

          {/* MOBILE MENU DROPDOWN */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[350px] opacity-100 mt-4 pb-2' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              {centerNavItems.map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="block p-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Contact Button -> Updated onClick */}
              <button 
                onClick={handleContactClick}
                className="w-full mt-2 flex items-center justify-center gap-2 p-3 bg-blue-600 text-white font-bold rounded-xl active:scale-95 transition-all cursor-pointer"
              >
                Contact Us
                <ChevronRight size={16} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-24 w-full"></div>
    </>
  );
};

export default SchoolERPHeader;