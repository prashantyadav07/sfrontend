import React from 'react';
import { TrendingUp, Zap, CheckCircle, Clock } from 'lucide-react';

const ROISection = () => {
  // CHANGE PERCENTAGES HERE
  const stats = [
    {
      percentage: 97,
      label: "Increased teacher satisfaction",
      icon: TrendingUp,
      color: "from-orange-400 to-orange-600",
    },
    {
      percentage: 23,
      label: "Faster administrative execution",
      icon: Zap,
      color: "from-purple-400 to-purple-600",
    },
    {
      percentage: 45,
      label: "Increased on-time report completion",
      icon: CheckCircle,
      color: "from-emerald-400 to-emerald-600",
    },
    {
      percentage: 88,
      label: "Decreased time on manual tasks",
      icon: Clock,
      color: "from-cyan-400 to-cyan-600",
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 relative">
          <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
            ROI
          </div>
          
          {/* Typography fixed: Smaller on mobile, Larger on desktop */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
            Business Value of School ERP**
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            Research demonstrates the transformative impact School ERP has on administrative efficiency and teacher satisfaction.
          </p>
          
          <button className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
            Read the full report 
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                // Reduced padding (p-6) and adjusted shadow/hover effects
                className="group relative bg-white rounded-2xl md:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500`}></div>

                {/* Icon Circle - Significantly reduced size */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6">
                  {/* Static Circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-gray-100 flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${stat.color} rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Static Percentage - Scaled down for mobile */}
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-2 tracking-tight">
                    {stat.percentage}%
                  </div>
                  
                  {/* Label - Adjusted font size */}
                  <div className="text-gray-600 font-semibold text-sm md:text-base leading-snug px-1 min-h-[2.5rem] flex items-center justify-center">
                    {stat.label}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 md:mt-16 text-xs md:text-sm text-gray-500 px-4">
          ** Based on comprehensive research findings from educational institutions worldwide
        </div>
      </div>
    </div>
  );
};

export default ROISection;