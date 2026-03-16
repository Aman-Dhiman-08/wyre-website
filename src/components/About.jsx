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
    <section ref={containerRef} id="about" className="py-16 lg:py-24 bg-white overflow-hidden border-t border-slate-100 relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
               <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
               <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">Who We Are</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-suisse tracking-tight uppercase leading-tight">
              Built by Builders. Powered by AI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004f8a] to-[#0066a8]">Focused on Preconstruction.</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p className="italic text-slate-700 border-l-4 border-[#004f8a] pl-4">
                "The biggest risk in construction isn't what happens in the field — it's what gets overlooked and or missed in the documents before the shovel hits the ground."
              </p>
              <p>
                Wyre AI was created to solve real-world preconstruction challenges. We combine <span className="font-medium">deep industry expertise</span> with <span className="font-medium">cutting-edge AI</span> to help teams <span className="font-medium">plan smarter, work faster, and reduce risk</span> — long before the first shovel hits the ground.
              </p>
              <p>
                <span className="text-slate-900 font-medium">We're not just another AI company.</span><br />
                We're construction industry experts building intelligent solutions to solve real problems.
              </p>
            </div>

          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            style={{ y }}
            className="relative lg:h-[450px] xl:h-[600px]"
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
