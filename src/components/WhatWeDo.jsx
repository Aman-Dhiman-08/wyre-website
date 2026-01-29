import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: "Planning",
    desc: "Analyze plans & identify scopes instantly.",
    bg: "bg-orange-50",
    text: "text-brand-orange",
    icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
    )
  },
  {
    title: "Workflow",
    desc: "Streamline tasks & remove manual entry.",
    bg: "bg-blue-50",
    text: "text-brand-blue",
    icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
  },
  {
    title: "Decisions",
    desc: "Turn complex data into simple insights.",
    bg: "bg-purple-50",
    text: "text-purple-600",
    icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    )
  }
];

export default function WhatWeDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="what-we-do" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="md:col-span-1 pr-8"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Our Approach</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 font-suisse leading-tight">
               Built for modern <br/> <span className="text-[#046BD2]">preconstruction.</span>
             </h2>
             <p className="text-slate-500 leading-relaxed text-lg font-light mb-8">
               We replace manual highlighter workflows with intelligent automation that learns from your documents, getting smarter with every project.
             </p>
             
             <a href="#contact" className="text-[#046BD2] font-semibold border-b border-[#046BD2]/30 hover:border-[#046BD2] transition-colors pb-0.5">
                Learn about our technology
             </a>
          </motion.div>
          
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
            {features.map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                 whileHover={{ y: -10 }}
                 className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 group cursor-default"
               >
                   <div 
                      className={`w-12 h-12 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                   >
                     {item.icon}
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
