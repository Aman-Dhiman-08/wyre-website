import { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function AnimatedNumber({ value, suffix = '', duration = 1.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));

  if (isInView) spring.set(value);

  return (
    <span ref={ref} className="urbis-metrics__stat-value">
      <motion.span>{display}</motion.span>
      <span className="urbis-metrics__stat-suffix">{suffix}</span>
    </span>
  );
}

const stats = [
  {
    value: 5,
    suffix: 'x',
    label: 'Faster scoping',
    description: 'Analyze drawings and specs in hours',
  },
  {
    value: 80,
    suffix: '%',
    label: 'Less scope creation time',
    description: 'Automate extraction, eliminate manual effort',
  },
  {
    value: 10,
    suffix: 'x',
    label: 'Faster document analysis',
    description: 'Complex docs turned into structured insights',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Faster risk identification',
    description: 'Gaps and compliance issues caught in minutes',
  },
];

export default function UrbisMetrics() {
  return (
    <section className="urbis-metrics">
      {/* Blueprint grid lines */}
      <div className="urbis-metrics__blueprint" />

      {/* Faint vertical accent line */}
      <div className="urbis-metrics__accent-line" />

      <div className="urbis-metrics__container">

        {/* ---- Eyebrow ---- */}
        <motion.p
          className="urbis-metrics__eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="urbis-metrics__eyebrow-dash">— —</span>
          why wyre
          <span className="urbis-metrics__eyebrow-dash">— —</span>
        </motion.p>

        {/* ---- Headline ---- */}
        <motion.h2
          className="urbis-metrics__headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Results that speak <br />
          <span className="urbis-metrics__headline-accent">for themselves.</span>
        </motion.h2>

        {/* ---- Stats Row ---- */}
        <div className="urbis-metrics__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="urbis-metrics__stat"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <div className="urbis-metrics__stat-number">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <p className="urbis-metrics__stat-label">{s.label}</p>
              <p className="urbis-metrics__stat-desc">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ---- Summary Tagline ---- */}
        <motion.div 
          className="urbis-metrics__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="urbis-metrics__summary-text">
            Purpose-built for construction teams who <span>can't afford to miss a scope.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
