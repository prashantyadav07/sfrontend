import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Trophy, Smartphone } from 'lucide-react'; // Smartphone icon add kiya hai
import { AuroraText } from '@/components/ui/aurora-text';
import editedImage from '../../assets/edited.jpeg';

const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="pt-12 md:pt-16 pb-10 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start items-center">
          
          {/* --- Left Content Section --- */}
          <div className="animate-on-scroll">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border border-blue-200">
              <Trophy className="w-3 h-3" />
              <span>#1 School Management System</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transform Your School with{' '}
              <AuroraText className="whitespace-nowrap">
                Smart ERP
              </AuroraText>
            </h1>
            
            {/* Paragraph */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-lg">
              Complete cloud-based solution for student management, attendance, fee collection, 
              communication, and analytics. Everything in one platform.
            </p>
            
            {/* --- Buttons Section --- */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* 1. Admin Login */}
              <a 
                href="https://aierpadmin.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Admin Login
              </a>

              {/* 2. Teacher Login */}
              <a 
                href=" https://aierpteacher.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Teacher Login
              </a>

              {/* 3. Student Login */}
              <a 
                href="https://aierpstudent.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm"
              >
                <LogIn className="mr-2 w-4 h-4" />
                Student Login
              </a>
            </div>

            {/* --- Clickable "Download the Apps" Link --- */}
            <div className="flex items-center">
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

          {/* --- Right Image Section --- */}
          <div className="animate-on-scroll flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full flex justify-center lg:justify-end">
              <img 
                src={editedImage} 
                alt="School ERP Dashboard" 
                className="
                  w-full h-auto 
                  object-cover
                  max-w-[300px]       
                  sm:max-w-[350px]     
                  md:max-w-[400px]     
                  lg:max-w-[450px]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
