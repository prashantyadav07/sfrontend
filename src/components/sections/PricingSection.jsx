import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/month',
    color: 'from-blue-500 to-blue-600',
    popular: false,
    features: [
      'Up to 500 students',
      'Student & Teacher Management',
      'Attendance Tracking',
      'Basic Reports',
      'Email Support',
      '5 GB Storage'
    ]
  },
  {
    name: 'Professional',
    price: '₹2,499',
    period: '/month',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    features: [
      'Up to 2000 students',
      'All Basic Features',
      'Fee Management',
      'Exam & Gradebook',
      'Parent Portal',
      'SMS Notifications',
      'Advanced Reports',
      'Priority Support',
      '50 GB Storage'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    color: 'from-purple-500 to-pink-600',
    popular: false,
    features: [
      'Unlimited Students',
      'All Professional Features',
      'Custom Modules',
      'API Access',
      'Dedicated Account Manager',
      'On-premise Deployment',
      '24/7 Premium Support',
      'Unlimited Storage'
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your school
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-1 ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${plan.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-sm`}>
                <Award className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg' 
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;