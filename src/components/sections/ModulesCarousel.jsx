import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Bus, Award, FileText, UserCheck, ClipboardList, BookMarked, Settings } from 'lucide-react';
import { modules } from '../../data/schoolERPData';

const iconMap = {
  BookOpen,
  Bus,
  Award,
  FileText,
  UserCheck,
  ClipboardList,
  BookMarked,
  Settings
};

const ModulesCarousel = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % modules.length);
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + modules.length) % modules.length);
  };

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete School Management Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated modules covering every aspect of school operations
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => {
            const IconComponent = iconMap[module.iconName];
            return (
              <div 
                key={idx}
                className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`bg-linear-to-br ${module.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition transform`}>
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{module.name}</h4>
                <p className="text-sm text-gray-600">{module.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentModule * 100}%)` }}
            >
              {modules.map((module, idx) => {
                const IconComponent = iconMap[module.iconName];
                return (
                  <div key={idx} className="w-full shrink-0 px-4">
                    <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
                      <div className={`bg-linear-to-br ${module.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 mx-auto`}>
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-center text-xl">{module.name}</h4>
                      <p className="text-gray-600 text-center">{module.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button 
            onClick={prevModule}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            onClick={nextModule}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {modules.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentModule(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === currentModule ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesCarousel;
