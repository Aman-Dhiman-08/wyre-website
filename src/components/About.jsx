import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import {  useEffect, useState } from 'react';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric part
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(value.includes('.') ? 1 : 0));
    });
  }, [springValue, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="about" className="py-24 bg-white overflow-hidden border-t border-slate-100 relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur rounded-full mb-6 border border-blue-100">
               <span className="w-1.5 h-1.5 bg-[#046BD2] rounded-full animate-pulse" />
               <span className="text-xs font-bold text-[#046BD2] uppercase tracking-wide">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-suisse tracking-tight uppercase leading-none">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#046BD2] to-[#60a5fa]">Wyre AI</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Wyre AI was founded by construction veterans and AI researchers with a single mission: to eliminate the manual grunt work in preconstruction.
              </p>
              <p>
                We understand that every minute spent manually reviewing drawings or highlighting contracts is a minute lost on strategic decision-making. Our technology doesn't just digitize documents; it understands them.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div>
                   <div className="text-4xl font-bold text-[#046BD2] mb-1 tracking-tighter flex items-center">
                     <Counter value="1000" suffix="M+" />
                   </div>
                   <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Pages Processed</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-[#046BD2] mb-1 tracking-tighter flex items-center">
                     <Counter value="99.9" suffix="%" />
                   </div>
                   <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Uptime</div>
                </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="group inline-flex items-center gap-2 text-[#046BD2] font-semibold text-sm uppercase tracking-wide">
                <span className="border-b border-transparent group-hover:border-[#046BD2] transition-colors">Meet the Team</span>
                <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#046BD2] group-hover:text-white transition-all">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            style={{ y }}
            className="relative lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl -rotate-3 scale-[1.02] blur-sm" />
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative h-full aspect-[4/5] lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
                alt="Construction team meeting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
