import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';

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
    <section ref={containerRef} className="py-32 bg-[#004f8a] text-white relative overflow-hidden">
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
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
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
            { val: "5x", label: "Faster Risk Identification", desc: "Compared to traditional legal review", delay: 0 },
            { val: "80%", label: "Time Reduction in Scope Identification and Creation", desc: "AI-trained on thousands of construction documents", delay: 0.2 }
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
                <Counter value={stat.val} suffix={stat.val.replace(/[0-9.]/g, '')} delay={stat.delay} />
              </div>
              <div className="mt-4">
                <div className="text-blue-100 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  {stat.label}
                </div>
                <p className="text-blue-200/70 text-xs mt-2 font-light">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-400/20">
          {[
            { icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ), title: "Prevent scope gaps", desc: "Catch missing scopes before they become costly change orders" },
            { icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ), title: "Improve bid accuracy", desc: "Data-driven insights for more competitive and precise bids" },
            { icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ), title: "Increase estimator productivity", desc: "Free up your team to focus on high-value decisions" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-200">
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-blue-200/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
