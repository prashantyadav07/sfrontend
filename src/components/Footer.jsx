import React from 'react';
import {
  School, Twitter, Linkedin, Github,
  Sparkles, ArrowRight, ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* LEFT SECTION: BRAND & DESC */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-600">
                  <School className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900 tracking-tight">EdNora</span>
                    {/* BMC LINK RESTORED */}
                    <a
                      href="https://aierpowner-7lu9.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-blue-600/60 hover:text-blue-600 transition-all border border-blue-600/20 px-1.5 py-0.5 rounded bg-blue-50"
                      title="Admin Console"
                    >
                      [ BMC ]
                    </a>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">System Online</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              The advanced operating system for modern educational institutions.
            </p>
          </div>

          {/* MIDDLE SECTION: LINKS (PLATFORM, COMPANY, LEGAL) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
            {[
              { title: 'Platform', items: ['Intelligence', 'Workflow', 'Analytics'] },
              { title: 'Company', items: ['Mission', 'Careers', 'Contact'] },
              { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors flex items-center gap-1 group">
                        <ChevronRight className="hidden lg:block w-3 h-3 text-yellow-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT SECTION: NEWSLETTER (RESTORED BUT STYLED) */}
          <div className="lg:col-span-3">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-900">Join the ecosystem</span>
                </div>

                <div className="relative flex w-full">
                  <input
                    type="email"
                    placeholder="Enter email..."
                    className="w-full bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 rounded-l-lg py-2.5 pl-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-r-lg px-3 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM YELLOW BAR (HORIZON STYLE) */}
      <div className="w-full bg-[#F5C344] py-5 px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-4 text-[11px] font-bold text-gray-800 font-mono tracking-tight">
            <span>© 2025 EdNora</span>
            <span className="opacity-50">///</span>
            <span>STATUS: OPTIMAL</span>
          </div>

          <div className="flex gap-6">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-800 hover:text-white transition-colors transform hover:scale-110 duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;