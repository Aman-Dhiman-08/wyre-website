import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import {  useEffect, useState } from 'react';

function Counter({ value, suffix = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { duration: 2500, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric part
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
          springValue.set(numericValue);
      }, delay * 1000);
    }
  }, [isInView, numericValue, springValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(value.includes('.') ? 1 : 0));
    });
  }, [springValue, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function WhyWyre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="py-32 bg-[#046BD2] text-white relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <motion.div 
         style={{ y: bgY }}
         className="absolute inset-0 opacity-10"
      >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </motion.div>
      
      {/* Decorative Glows */}
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
             <div className="md:pr-8 md:text-right flex flex-col justify-center">
                 <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold tracking-tight mb-2 leading-tight"
                 >
                    Why General Contractors choose Wyre
                 </motion.h3>
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-1 bg-white/20 rounded mt-4 ml-auto w-12 origin-right" 
                 />
             </div>
             
             {[
                 { val: "10x", label: "Faster Bidding", delay: 0 },
                 { val: "0%", label: "Missed Scopes", delay: 0.2 },
                 { val: "24/7", label: "Automated Review", delay: 0.4 }
             ].map((stat, i) => (
                 <motion.div 
                    key={i} 
                    className="pt-8 md:pt-0 md:pl-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                 >
                     <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 flex items-baseline">
                        {stat.val === "24/7" ? (
                            "24/7"
                        ) : (
                            <Counter value={stat.val} suffix={stat.val.replace(/[0-9.]/g, '')} delay={stat.delay} />
                        )}
                     </div>
                     <div className="text-blue-100 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                        {stat.label}
                     </div>
                 </motion.div>
             ))}
        </div>
      </div>
    </section>
  );
}
