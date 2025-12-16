import React, { useState } from 'react';
import { School, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#demo' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Training', href: '#training' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 animate-grid-move" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <School className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">NextGen ERP</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-sm leading-relaxed">
              Complete school management solution trusted by 500+ institutions across India.
            </p>
            
            {/* Contact */}
            <div className="flex items-center gap-2 text-sm group cursor-pointer mb-4">
              <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors">contact@nextgenerp.com</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2 bg-gray-800 rounded-lg hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`product-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className={`w-3 h-3 transform transition-all duration-300 ${hoveredLink === `product-${idx}` ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`company-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className={`w-3 h-3 transform transition-all duration-300 ${hoveredLink === `company-${idx}` ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`support-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className={`w-3 h-3 transform transition-all duration-300 ${hoveredLink === `support-${idx}` ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2024 <span className="text-white font-semibold">NextGen ERP</span>. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-grid-move {
          animation: grid-move 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;