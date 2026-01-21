import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { 
  School, ArrowRight, Twitter, Linkedin, Github, 
  Sparkles, ChevronRight 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- 3D Background ---
const ParticleRing = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

// --- Spotlight Card ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/80 text-gray-200 shadow-2xl",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

// --- MAIN FOOTER ---
const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#050505] overflow-hidden antialiased font-sans">
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="hidden lg:block absolute top-[-20%] right-[-10%] w-[600px] h-[600px] opacity-60">
          <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}> 
            <ParticleRing />
          </Canvas>
        </div>

        <div className="block lg:hidden absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-blue-600/5 blur-[60px]" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-8 lg:py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <School className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white tracking-tight">eduTally</span>
                  {/* BMC LINK INTEGRATED NEXT TO NAME */}
                  <a 
                    href="https://aierpowner-7lu9.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-blue-500/30 hover:text-blue-400 transition-all border border-blue-500/10 px-1.5 py-0.5 rounded bg-blue-500/5"
                    title="Admin Console"
                  >
                    [ BMC ]
                  </a>
                </div>
                <span className="text-[10px] text-blue-400/60 font-mono tracking-[0.2em] uppercase">System Online</span>
              </div>
            </div>
            
            <p className="hidden lg:block text-sm text-gray-400 leading-relaxed font-medium">
              The advanced operating system for modern educational institutions. 
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 lg:gap-8">
            {[
              { title: 'Platform', items: ['Intelligence', 'Workflow', 'Analytics'] },
              { title: 'Company', items: ['Mission', 'Careers', 'Contact'] },
              { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] lg:text-xs font-bold text-white mb-3 uppercase tracking-widest opacity-80">
                  {section.title}
                </h4>
                <ul className="space-y-2 lg:space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        <ChevronRight className="hidden lg:block w-3 h-3 text-blue-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <SpotlightCard className="p-4 lg:p-5 bg-gray-900/40 backdrop-blur-sm border-white/5">
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-xs lg:text-sm font-semibold text-white">Join the ecosystem</span>
                </div>
                
                <div className="relative flex w-full">
                  <input
                    type="email"
                    placeholder="Enter email..."
                    className="w-full bg-black/50 border border-gray-700 text-xs lg:text-sm text-white placeholder-gray-500 rounded-l-lg py-2.5 pl-3 focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg px-4 flex items-center justify-center border-t border-b border-r border-blue-500">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 lg:mt-12 pt-6 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] lg:text-xs text-gray-500 font-medium font-mono">
            <span>© 2025 eduTally</span>
            <span className="hidden md:inline">///</span>
            <span>STATUS: OPTIMAL</span>
          </div>

          <div className="flex gap-5">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
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