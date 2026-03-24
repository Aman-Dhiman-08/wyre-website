import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Upload Documents',
    text: 'Feed your full drawing set, specifications, and project documents into Wyre AI.',
  },
  {
    number: '02',
    title: 'Wyre AI Analysis',
    text: 'Wyre AI digs deep into every page, identifying scopes, conflicts, and gaps automatically.',
  },
  {
    number: '03',
    title: 'Review & Refine',
    text: 'Your team reviews organized, color-coded outputs with traceable references.',
  },
  {
    number: '04',
    title: 'Bid & Build',
    text: 'Your team reviews organized, color-coded outputs with traceable references.',
  },
];

export default function UrbisHowItWorks() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="how-it-works" className="urbis-hiw">
      {/* 100vh Sticky Wrapper */}
      <div className="urbis-hiw__sticky-wrapper">
        <div className="urbis-hiw__container">
          
          {/* Left: Static info while pinned */}
          <div className="urbis-hiw__content-left">
            <motion.p
              className="urbis-hiw__eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="urbis-hiw__eyebrow-dash">— —</span>
              how it works
              <span className="urbis-hiw__eyebrow-dash">— —</span>
            </motion.p>
            <h2 className="urbis-hiw__headline">
              We know how construction<br />
              <span className="urbis-hiw__headline-accent">documents are wired.</span>
            </h2>
            <p className="urbis-hiw__subtitle">
              A purpose-built AI platform that understands the full structure of preconstruction documentation.
            </p>
            
            {/* Scroll Progress Bar */}
            <div className="urbis-hiw__progress-info">
              <div className="urbis-hiw__progress-track">
                <motion.div 
                  className="urbis-hiw__progress-bar"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>
              <span className="urbis-hiw__progress-label">Scroll</span>
            </div>
          </div>

          {/* Right: The Cards Stack Area */}
          <div className="urbis-hiw__stack-area">
            {steps.map((step, i) => {
              // Calculate appearance and stacking
              // Range for current card animation
              const start = i * 0.25;
              const end = (i + 1) * 0.25;
              
              // Slide in only if it's not the first card.
              // First card should be in place immediately.
              const translateY = useTransform(
                scrollYProgress, 
                [start - 0.1, start, end], 
                [i === 0 ? 0 : 900, 0, 0]
              );

              // Scale down/fade slightly as NEXT card comes on top
              // Skip for the last card
              const nextStart = (i + 1) * 0.25;
              const scale = useTransform(
                scrollYProgress,
                [nextStart, nextStart + 0.05],
                [1, 0.94]
              );
              const opacity = useTransform(
                scrollYProgress,
                [nextStart, nextStart + 0.05],
                [1, 0.3]
              );

              return (
                <motion.div
                  key={step.number}
                  className="urbis-hiw__card-outer"
                  style={{ 
                    y: translateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: i + 1,
                  }}
                >
                  <div className="urbis-hiw__step-card">
                    <div className="urbis-hiw__card-bg-grid" />
                    <div className="urbis-hiw__card-body">
                      <span className="urbis-hiw__step-num">{step.number}</span>
                      <h3 className="urbis-hiw__step-title">{step.title}</h3>
                      <p className="urbis-hiw__step-text">{step.text}</p>
                      
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
