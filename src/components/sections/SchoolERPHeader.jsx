import React, { useState, useEffect } from 'react';
import { Menu, X, School, ChevronDown } from 'lucide-react';

const SchoolERPHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <School className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent leading-tight">
                NextGen ERP
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                Education Management
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#features" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Features
            </a>
            <a href="#modules" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Modules
            </a>
            <a href="#pricing" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Pricing
            </a>
            <a href="#testimonials" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Testimonials
            </a>
            <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-5 py-2.5 text-gray-700 hover:text-blue-600 font-semibold transition-colors rounded-lg hover:bg-gray-50">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              <a 
                href="#features" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#modules" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </a>
              <a 
                href="#pricing" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
                <button className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-semibold text-left hover:bg-gray-50 rounded-lg transition-colors">
                  Sign In
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
    </header>
  );
};

export default SchoolERPHeader;