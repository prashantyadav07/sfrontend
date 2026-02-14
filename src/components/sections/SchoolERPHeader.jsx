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
            ? 'translateY(0)'
            : 'translateY(-100%)'
        }}
        className={`fixed z-50 top-0 left-0 w-full
          transition-all duration-500 ease-in-out
          bg-white/90 backdrop-blur-md shadow-md border-b border-white/20
          py-3 md:py-4
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <div
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 cursor-pointer select-none group z-10"
            >
              {/* Custom Logo Shapes: Yellow Square, Red Circle, Teal Circle */}
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FBBF24] rounded-sm group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#F43F5E] rounded-full group-hover:scale-110 transition-transform duration-300 delay-75"></div>
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#2DD4BF] rounded-full group-hover:-translate-y-1 transition-transform duration-300 delay-150"></div>
              </div>

              {/* Text Stack */}
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-gray-700 transition-colors">
                  EdNora
                </span>
                <span className="text-[10px] md:text-xs font-medium text-gray-500 tracking-widest uppercase leading-none mt-0.5 group-hover:text-gray-400 transition-colors">
                  School ERP
                </span>
              </div>
            </div>

            {/* CENTER NAV */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {centerNavItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-amber-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 z-10">
              {/* Desktop Contact Button */}
              <button
                onClick={handleContactClick}
                className="hidden md:flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-500 transition-colors shadow-sm"
              >
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* MOBILE MENU DROPDOWN */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[350px] opacity-100 mt-4 pb-2' : 'max-h-0 opacity-0'
              }`}
          >
            <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              {centerNavItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="block p-3 text-center text-sm font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-all"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Contact Button */}
              <button
                onClick={handleContactClick}
                className="w-full mt-2 flex items-center justify-center gap-2 p-3 bg-amber-400 text-gray-900 font-bold rounded-xl active:scale-95 transition-all cursor-pointer shadow-sm hover:bg-amber-500"
              >
                Contact Us
                <ChevronRight size={18} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-16 w-full"></div>
    </>
  );
};

export default SchoolERPHeader;