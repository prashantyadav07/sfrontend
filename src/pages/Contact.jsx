import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SEO_CONFIG from '../config/seo-config';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Support',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Topics for the professional chip selection
  const topics = ["Support", "Sales", "Partnership", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', subject: 'Support', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans text-slate-900 relative overflow-hidden">
      {/* ==================== SEO META TAGS ==================== */}
      <SEOHead
        pageName="contact"
        schemas={[
          SEO_CONFIG.structuredData.organization,
          SEO_CONFIG.structuredData.localBusiness
        ]}
      />

      {/* --- Subtle Background (Original Theme) --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50" />
      </div>

      {/* --- Main Card (Medium Size: max-w-4xl) --- */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">

        {/* --- LEFT SIDE: Info (Slate-50 Background) --- */}
        <div className="w-full md:w-5/12 bg-slate-50 p-6 md:p-8 flex flex-col justify-between relative border-r border-slate-100">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Contact Us
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Let's talk.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Ask us anything or just say hi. We are here to help you grow.
            </p>

            <div className="space-y-5">
              <ContactItem icon={Mail} title="Email" content="029mohitkumar@gmail.com" />
              <ContactItem icon={Phone} title="Phone" content="+91 88698 83042" />
              <ContactItem icon={MapPin} title="Office" content=" E-150, Delta 1, Gr. Noida, India" />
            </div>
          </div>

          {/* Social / Bottom decorative */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 hidden md:block">
            <p className="text-xs text-slate-400">© 2024 School ERP Inc.</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: Compact Form --- */}
        <div className="w-full md:w-7/12 p-6 md:p-8 bg-white relative">

          {isSubmitted ? (
            <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-sm text-slate-500 mt-1">We'll get back to you soon.</p>
              <button onClick={() => setIsSubmitted(false)} className="mt-5 text-sm font-medium text-blue-600 hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                <InputGroup label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
              </div>

              <InputGroup label="Email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />

              {/* Topic Selection Chips */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Topic</label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: t })}
                      className={`text-xs px-3 py-1.5 rounded-md border transition-all ${formData.subject === t
                          ? 'bg-slate-800 text-white border-slate-800'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm mt-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Small Reusable Components ---

const ContactItem = ({ icon: Icon, title, content }) => (
  <div className="flex items-center gap-3 group">
    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shadow-sm">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</p>
      <p className="text-sm font-medium text-slate-700">{content}</p>
    </div>
  </div>
);

const InputGroup = ({ label, name, type = "text", placeholder, value, onChange }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
    />
  </div>
);

export default Contact;