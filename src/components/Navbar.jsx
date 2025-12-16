import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    { label: "School ERP", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavClick = (item) => {
    navigate(item.href);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: isMobile ? '1rem' : '1.5rem 1rem',
      position: 'relative',
      backgroundColor: 'transparent'
    }}>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav style={{
          height: '80px',
          width: '100%',
          maxWidth: '1000px',
          background: '#faf5f0',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
          overflow: 'hidden',
          position: 'relative',
          padding: '0.5rem'
        }}>
          <div style={{ 
            height: '100%', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <GooeyNav
              items={items}
              particleCount={12}
              particleDistances={[70, 8]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={200}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onNavClick={handleNavClick}
            />
          </div>
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <>
          <nav style={{
            height: '60px',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'relative'
          }}>
            {/* Logo/Brand */}
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Logo
            </div>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                zIndex: 1001
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                width: '25px',
                height: '3px',
                background: '#1e293b',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
              }} />
              <span style={{
                width: '25px',
                height: '3px',
                background: '#1e293b',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }} />
              <span style={{
                width: '25px',
                height: '3px',
                background: '#1e293b',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
              }} />
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div style={{
            position: 'fixed',
            top: '80px',
            left: isMobileMenuOpen ? '0' : '-100%',
            width: '100%',
            height: 'calc(100vh - 80px)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            transition: 'left 0.3s ease',
            zIndex: 1000,
            padding: '2rem 1rem',
            overflowY: 'auto'
          }}>
            <GooeyNav
              items={items}
              onNavClick={handleNavClick}
              isMobile={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;