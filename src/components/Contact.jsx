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

      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <>
      {/* Book Demo Section */}
      <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
              <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">Book a Demo</span>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#E8632B] mb-4 font-suisse tracking-tight italic">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
              Whether you're exploring our tools or ready to dive in, we'd love to show you how Wyre AI can work for your team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <p className="text-base text-slate-500 mb-8 leading-relaxed font-light">
                Schedule a personalized demo to see how we can save your team hours every week. Because time, accuracy and margins matter.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#004f8a] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">Email Us</h4>
                    <a href="mailto:sales@wyreai.io" className="text-slate-500 hover:text-[#004f8a] transition-colors">sales@wyreai.io</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#004f8a] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">Headquarters</h4>
                    <p className="text-slate-500">Brambleton, VA</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
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
                  <div className="space-y-1.5">
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

                <div className="space-y-1.5">
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

                <div className="space-y-1.5">
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
                  {status.loading ? 'Sending...' : 'Book a Demo'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
              <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">Contact Us</span>
            </div>
            <p className="text-lg text-slate-500 mb-2 font-light">
              Because time, accuracy and margins matter.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-suisse tracking-tight">
              Let's build something great together!
            </h3>
            <a
              href="mailto:sales@wyreai.io"
              className="inline-flex items-center gap-2 text-[#004f8a] font-semibold hover:text-[#FF6B35] transition-colors text-lg"
            >
              Get in touch with us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
