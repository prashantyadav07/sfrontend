import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 md:p-6 font-sans text-slate-900">
      
      {/* Background Decoration - Professional & Subtle */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Main Card: Balanced Width (max-w-5xl) for Professional Look */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Contact Info (Sidebar Style) --- */}
        <div className="w-full md:w-5/12 bg-slate-50 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
          
          {/* Top Section */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Contact Sales</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Let's build something <br />
              <span className="text-blue-600">great together.</span>
            </h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We help educational institutions streamline their testing process. Schedule a call or drop us a message.
            </p>

            <div className="space-y-4">
              <ContactRow icon={Mail} text="support@notes2test.ai" />
              <ContactRow icon={Phone} text="+1 (555) 000-1234" />
              <ContactRow icon={MapPin} text="San Francisco, CA" />
            </div>
          </div>

          {/* Bottom Section: Social/Trust */}
          <div className="relative z-10 mt-8 md:mt-0 pt-8 border-t border-slate-200/60">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Trusted Partners</p>
            <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {/* Simple geometric placeholders for logos */}
              <div className="h-6 w-20 bg-slate-300 rounded" />
              <div className="h-6 w-20 bg-slate-300 rounded" />
              <div className="h-6 w-16 bg-slate-300 rounded" />
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 200L200 0H0V200Z" fill="currentColor"/>
             </svg>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form --- */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white relative">
          
          {/* Success State */}
          {isSubmitted ? (
            <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
              <p className="text-slate-500 text-center max-w-xs">
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-sm text-slate-500 mt-1">We typically reply in under 5 mins.</p>
                </div>
                <div className="hidden sm:flex w-10 h-10 bg-blue-50 text-blue-600 rounded-full items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField 
                    label="First Name" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    placeholder="John" 
                  />
                  <InputField 
                    label="Last Name" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    placeholder="Doe" 
                  />
                </div>

                <InputField 
                  label="Work Email" 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@company.com" 
                />

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable Components for consistency

const ContactRow = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
      <Icon className="w-4 h-4" />
    </div>
    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{text}</span>
  </div>
);

const InputField = ({ label, type = "text", ...props }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>
    <input
      type={type}
      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
      {...props}
    />
  </div>
);

export default Contact;