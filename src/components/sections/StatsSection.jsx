import React from 'react';
import { TrendingUp, Zap, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ROISection = () => {
  const stats = [
    {
      percentage: 97,
      label: "Increased teacher satisfaction",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      percentage: 23,
      label: "Faster administrative execution",
      icon: Zap,
      color: "from-purple-500 to-indigo-500",
      bg: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      percentage: 45,
      label: "Increased on-time report completion",
      icon: CheckCircle,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      percentage: 88,
      label: "Decreased time on manual tasks",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decor (Optional Subtle Blur) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Typography Optimized for Responsiveness */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold tracking-wide uppercase mb-4 md:mb-6 border border-blue-100">
            Proven Results
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Real Impact on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Efficiency</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10 px-4">
            Our ERP doesn't just digitize data; it transforms how your school operates. 
            See the measurable value driven by our technology.
          </p>

          <button className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Read the Impact Report
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stats Grid - Professional Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                {/* Icon Container - Sleeker and Smaller */}
                <div className={`mb-6 p-4 rounded-2xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Percentage */}
                <div className="relative mb-2">
                   <span className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} tracking-tight`}>
                    {stat.percentage}%
                  </span>
                </div>

                {/* Label */}
                <p className="text-sm md:text-base font-medium text-gray-600 text-center leading-snug">
                  {stat.label}
                </p>

                {/* Bottom Active Line (Hover Effect) */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 bg-gradient-to-r ${stat.color} transition-all duration-500 rounded-t-full opacity-0 group-hover:opacity-100`}></div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 md:mt-16 text-center border-t border-gray-100 pt-8">
          <p className="text-xs md:text-sm text-gray-400 font-medium">
            ** Data gathered from 500+ partner schools over the 2023-2024 academic year.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ROISection;