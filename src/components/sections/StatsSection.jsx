import React from 'react';
import { TrendingUp, Zap, CheckCircle, Clock } from 'lucide-react';

const ROISection = () => {
  // CHANGE PERCENTAGES HERE - Edit these numbers as needed
  const stats = [
    {
      percentage: 97,  // Change this number
      label: "Increased teacher satisfaction",
      icon: TrendingUp,
      color: "from-orange-400 to-orange-600",
    },
    {
      percentage: 23,  // Change this number
      label: "Faster administrative execution",
      icon: Zap,
      color: "from-purple-400 to-purple-600",
    },
    {
      percentage: 45,  // Change this number
      label: "Increased on-time report completion",
      icon: CheckCircle,
      color: "from-emerald-400 to-emerald-600",
    },
    {
      percentage: 88,  // Change this number
      label: "Decreased time on manual tasks",
      icon: Clock,
      color: "from-cyan-400 to-cyan-600",
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-6">
            ROI
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Business Value of School ERP**
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Research demonstrates the transformative impact School ERP has on administrative efficiency and teacher satisfaction.
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Read the full report 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                {/* Icon Circle */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {/* Static Circle */}
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${stat.color} rounded-full w-24 h-24 flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Static Percentage */}
                <div className="text-center">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-3 tracking-tight">
                    {stat.percentage}%
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-600 font-semibold text-base leading-snug px-2 min-h-[3rem] flex items-center justify-center">
                    {stat.label}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-sm text-gray-500">
          ** Based on comprehensive research findings from educational institutions worldwide
        </div>
      </div>
    </div>
  );
};

export default ROISection;