import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Smartphone } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';

// Child playing in Montessori classroom - reliable CDN image
const heroChildImage = 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop';

const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="relative w-full overflow-hidden" style={{ background: '#FFF8E7' }}>

      {/* ===== BACKGROUND ORGANIC BLOBS (SVG with defined edges) ===== */}
      <svg className="absolute top-0 right-0 w-[500px] h-[420px] pointer-events-none" viewBox="0 0 500 420" fill="none" preserveAspectRatio="none">
        <path d="M450 50C520 100 510 200 480 290C450 380 350 420 250 400C150 380 100 300 110 220C120 140 180 60 280 30C350 10 400 20 450 50Z" fill="#FDE68A" opacity="0.5" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[340px] h-[300px] pointer-events-none" viewBox="0 0 400 350" fill="none" preserveAspectRatio="none">
        <path d="M300 30C350 80 370 180 330 260C290 340 190 350 110 310C30 270 -10 180 10 100C30 20 100 -20 180 10C220 25 260 -10 300 30Z" fill="#FDE68A" opacity="0.45" />
      </svg>
      <svg className="absolute bottom-0 right-[15%] w-[220px] h-[200px] pointer-events-none" viewBox="0 0 300 260" fill="none" preserveAspectRatio="none">
        <path d="M220 30C270 70 280 150 240 210C200 260 120 270 60 230C0 190 -10 110 30 50C70 -10 170 -10 220 30Z" fill="#FDE68A" opacity="0.35" />
      </svg>

      {/* ===== MAIN GRID ===== */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left relative pt-8">

            {/* Deco: Green squiggle */}
            <svg className="hidden lg:block absolute -top-1 left-0" width="42" height="22" viewBox="0 0 42 22" fill="none">
              <path d="M3 18C3 18 8 3 14 10C20 17 22 3 28 10C34 17 39 5 39 5" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" />
            </svg>

            {/* Deco: Red crown */}
            <svg className="hidden lg:block absolute -top-8 left-[38%]" width="28" height="22" viewBox="0 0 30 22" fill="none">
              <path d="M3 18L6 6L11.5 13L15 3L18.5 13L24 6L27 18H3Z" fill="#F43F5E" />
              <rect x="3" y="18" width="24" height="3" rx="1" fill="#F43F5E" />
            </svg>

            {/* Deco: Bunting flags */}
            <svg className="hidden lg:block absolute top-1 left-[30%]" width="56" height="16" viewBox="0 0 56 16" fill="none">
              <line x1="2" y1="3" x2="54" y2="3" stroke="#D1D5DB" strokeWidth="1" />
              <path d="M8,3 L13,3 L10.5,12Z" fill="#60A5FA" opacity="0.8" />
              <path d="M18,3 L23,3 L20.5,12Z" fill="#FBBF24" opacity="0.8" />
              <path d="M28,3 L33,3 L30.5,12Z" fill="#34D399" opacity="0.8" />
              <path d="M38,3 L43,3 L40.5,12Z" fill="#F472B6" opacity="0.8" />
            </svg>

            {/* Heading */}
            <h1 className="animate-on-scroll text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-5">
              <span className="block">Transform Your School</span>
              <span className="block">with <span style={{ color: '#00000' }}>EdNora</span> <span style={{ color: '#F43F5E' }}>ERP.</span></span>
            </h1>

            {/* Paragraph */}
            <p className="animate-on-scroll text-[0.95rem] text-gray-500 leading-relaxed mb-7 max-w-[420px] mx-auto lg:mx-0">
              Complete cloud-based solution for student management, attendance, fee collection,
              communication, and analytics. Everything in one platform.
            </p>

            {/* Buttons */}
            <div className="animate-on-scroll flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <a
                href="https://aierpadmin.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-[#FBBF24] text-gray-900 rounded-[10px] font-bold text-sm hover:bg-[#F59E0B] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Admin Login
              </a>
              <a
                href="https://aierpteacher.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-white text-gray-900 rounded-[10px] font-bold text-sm border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Teacher Login
              </a>
              <a
                href="https://aierpstudent.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-white text-gray-900 rounded-[10px] font-bold text-sm border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Student Login
              </a>
            </div>

            {/* Download Apps */}
            <div className="animate-on-scroll flex items-center justify-center lg:justify-start">
              <Link
                to="/school-apps"
                className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Smartphone className="w-4 h-4" />
                </div>
                Download the Apps
              </Link>
            </div>
          </div>

          {/* ===== RIGHT: IMAGE WITH FRAME ===== */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]">

              {/* IMAGE FRAME */}
              <div
                className="w-full overflow-hidden shadow-xl"
                style={{
                  aspectRatio: '3.5 / 4',
                  borderRadius: '24px 24px 24px 70px',
                  border: '7px solid #fff',
                  transform: 'rotate(2deg)',
                }}
              >
                <img
                  src={heroChildImage}
                  alt="School ERP Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* STAR BADGE (top right) */}
              <div
                className="absolute z-20 flex items-center justify-center"
                style={{
                  top: '-14px', right: '-10px',
                  width: '50px', height: '50px',
                  background: '#FBBF24',
                  borderRadius: '50%',
                  border: '3px solid #92400E',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#B45309">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              </div>

              {/* YELLOW SPIRAL (bottom center-left) */}
              <svg className="absolute z-10" style={{ bottom: '-20px', left: '25%' }} width="64" height="32" viewBox="0 0 64 32" fill="none">
                <path d="M4 28C4 28 8 4 16 16C24 28 24 4 32 16C40 28 40 4 48 16C56 28 60 8 60 8" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" />
              </svg>

              {/* RAINBOW (bottom right) */}
              <svg className="absolute z-20" style={{ bottom: '-16px', right: '-8px' }} width="44" height="28" viewBox="0 0 44 28" fill="none">
                <path d="M4 26A18 18 0 0 1 40 26" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" />
                <path d="M12 26A10 10 0 0 1 32 26" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" />
                <path d="M18 26A4 4 0 0 1 26 26" stroke="#34D399" strokeWidth="5" strokeLinecap="round" />
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;