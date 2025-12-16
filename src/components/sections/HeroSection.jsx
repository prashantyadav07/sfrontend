import React, { useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Users, GraduationCap, Calendar, DollarSign, MessageSquare, BarChart3 } from 'lucide-react';
import { features } from '../../data/schoolERPData';
import { AuroraText } from '@/components/ui/aurora-text';
import editedImage from '../../assets/edited.jpeg';


const iconMap = {
  Users,
  GraduationCap,
  Calendar,
  DollarSign,
  MessageSquare,
  BarChart3
};

const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="pt-32 pb-20 px-8 lg:px-16">
      <div className="max-w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              #1 School Management System in India 🏆
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your School with{' '}
              <AuroraText className="whitespace-nowrap">
                Smart ERP
              </AuroraText>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete cloud-based solution for student management, attendance, fee collection, 
              communication, and analytics. Everything your school needs in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition font-semibold text-lg flex items-center justify-center group">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg transition font-semibold text-lg flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Free 30-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                No credit card required
              </div>
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="transform hover:scale-105 transition duration-500 overflow-hidden max-w-xl mx-auto">
              <img 
                src={editedImage} 
                alt="School ERP Dashboard" 
                className="w-full h-auto rounded-3xl object-cover"
                style={{ maxHeight: '600px' }}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;