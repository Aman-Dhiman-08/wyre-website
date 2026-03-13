import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Set these in your .env file
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Template parameters - customize your email content here
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_name: 'Wyre AI Team',
      to_email: 'info@amandhiamn.info',
      subject: `New Contact from ${formData.name} - ${formData.company || 'Wyre AI'}`,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
               <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
               <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">Contact Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-suisse tracking-tight">
              Ready to transform your workflow?
            </h2>
            
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
              Schedule a personalized demo to see how Wyre AI can save your team hours every week.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#004f8a]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                        <a href="mailto:info@wyreai.io" className="text-slate-500 hover:text-[#004f8a] transition-colors">info@wyreai.io</a>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#004f8a]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">Headquarters</h4>
                        <p className="text-slate-500">Brambleton, VA</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#004f8a] focus:ring-1 focus:ring-[#004f8a] outline-none transition-all bg-white"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">Work Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#004f8a] focus:ring-1 focus:ring-[#004f8a] outline-none transition-all bg-white"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-slate-900">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#004f8a] focus:ring-1 focus:ring-[#004f8a] outline-none transition-all bg-white"
                        placeholder="Construction Co."
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-900">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#004f8a] focus:ring-1 focus:ring-[#004f8a] outline-none transition-all bg-white resize-none"
                        placeholder="Tell us about your needs..."
                    />
                </div>

                {status.success && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                        Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                {status.error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {status.error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status.loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
