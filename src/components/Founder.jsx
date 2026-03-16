import { motion } from 'framer-motion';
import founderImg from '../assets/founder.png';

const milestones = [
  {
    title: 'Co-founder of Pype',
    description: 'Creator of AutoSpecs and Closeout — industry-leading SaaS products adopted by thousands of construction firms nationwide.',
    color: '#FF6B35',
  },
  {
    title: 'Acquired by Autodesk (2020)',
    description: 'Scaled Pype to 80+ employees and hundreds of enterprise customers before successful acquisition.',
    color: '#004f8a',
  },
  {
    title: 'IITM · Virginia Tech · Autodesk',
    description: 'Civil Engineering, Construction Management, and Industry Strategy — the full stack of construction expertise.',
    color: '#FF6B35',
  },
];

export default function Founder() {
  return (
    <section id="founder" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
            <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">About Our Founder</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-suisse tracking-tight italic">
            We know technology — and even better, we understand construction.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: Photo & Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative max-w-xs 2xl:max-w-sm rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 mb-6">
              <img
                src={founderImg}
                alt="Sunil Dorairajan - Founder & CEO of Wyre AI"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-suisse uppercase tracking-wide">
              Sunil Dorairajan
            </h3>
            <p className="text-[#004f8a] font-semibold text-lg">
              Founder/CEO, <span className="text-[#FF6B35]">Wyre AI</span>
            </p>
            <a
              href="https://www.linkedin.com/in/sunildorairajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#004f8a] hover:text-[#FF6B35] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>

          {/* Right: Bio & Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-light mb-10">
              <p>
                <a href="https://www.linkedin.com/in/sunildorairajan/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] font-semibold hover:underline">Sunil Dorairajan</a>, co-founder of Pype and a construction technology entrepreneur, brings <span className="font-semibold text-slate-900">over 20 years of experience bridging construction and technology.</span>
              </p>
              <p>
                After successfully building and exiting a construction tech startup, Sunil founded <span className="font-semibold text-slate-900">Wyre AI</span> to tackle <span className="font-semibold text-slate-900">one of the industry's biggest challenges:</span> preconstruction accuracy and efficiency.
              </p>
              <p>
                Today, under his leadership, Wyre AI empowers construction teams to <span className="font-semibold text-slate-900">reduce errors, save time, and win more projects</span> — long before the shovel hits the ground.
              </p>
            </div>

            {/* Milestones */}
            <div className="space-y-6">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="border-l-4 pl-5"
                  style={{ borderColor: item.color }}
                >
                  <h4 className="font-bold text-lg italic" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-base font-light mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
