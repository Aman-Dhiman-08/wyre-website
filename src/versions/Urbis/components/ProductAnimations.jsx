import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Assets Mockup (Simplified for code-only implementation) ---
const SCOPE_ITEMS = [
  { id: 1, title: 'Steel Framing', type: 'Structural', color: '#FF6B35' },
  { id: 2, title: 'Metal Doors', type: 'Openings', color: '#FF6B35' },
  { id: 3, title: 'Drywall Tech', type: 'Finishes', color: '#FF6B35' }
];

/**
 * Enhanced Scope Animation: "The 3D Document Carousel"
 * Reimagines the original infinite scroll with a modern architectural 3D perspective.
 */
export const ScopeAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="urbis-animation-stage">
      {/* 3D Stack of Documents */}
      <div className="urbis-stack-container">
        {[0, 1, 2].map((i) => {
          const offset = (i - index + 3) % 3;
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              className={`urbis-stack-card ${isActive ? 'urbis-stack-card--active' : ''}`}
              animate={{
                z: isActive ? 0 : -100 * offset,
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.8,
                rotateX: isActive ? 0 : 20,
                y: isActive ? 0 : offset * 40,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="urbis-card-header">Drawing A-10{i + 1}</div>
              <div className="urbis-card-body">
                {/* Blueprint Mesh */}
                <div className="urbis-blueprint-mesh">
                  <div className="urbis-mesh-line" style={{ top: '20%' }} />
                  <div className="urbis-mesh-line" style={{ top: '50%' }} />
                  <div className="urbis-mesh-line" style={{ top: '80%' }} />
                  <div className="urbis-mesh-line-v" style={{ left: '30%' }} />
                  <div className="urbis-mesh-line-v" style={{ left: '70%' }} />
                  
                  {/* Active Scan Effect */}
                  {isActive && (
                    <motion.div 
                      className="urbis-card-scanner"
                      animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Highlight Nodes */}
                  {isActive && [0, 1, 2].map(n => (
                    <motion.div 
                      key={n}
                      className="urbis-card-node"
                      style={{ top: 30 + n * 40, left: 20 + n * 30 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 0.8] }}
                      transition={{ delay: 0.5 + n * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Result Cards (The "Extracted" Data) */}
      <div className="urbis-extracted-side">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="urbis-extracted-card"
          >
            <div className="urbis-extracted-badge">Scope Package</div>
            <div className="urbis-extracted-title">{SCOPE_ITEMS[index].title}</div>
            <div className="urbis-extracted-type">{SCOPE_ITEMS[index].type}</div>
            <div className="urbis-extracted-line" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/**
 * Enhanced Check Animation: "The Discrepancy X-Ray Radar"
 * Reimagines the verification concept with high-end holographic radar patterns.
 */
export const CheckAnimation = () => {
  return (
    <div className="urbis-animation-stage">
      <div className="urbis-radar-container">
        {/* Radar Circles */}
        <div className="urbis-radar-circle" style={{ width: '80%', height: '80%' }} />
        <div className="urbis-radar-circle" style={{ width: '50%', height: '50%' }} />
        
        {/* Rotating Scan Beam */}
        <motion.div 
          className="urbis-radar-beam"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Drawing Sheet */}
        <motion.div 
          className="urbis-radar-sheet"
          animate={{ y: [0, -10, 0], rotateX: [10, 15, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="urbis-card-header">System Check</div>
          <div className="urbis-card-body">
            <div className="urbis-blueprint-mesh">
              {/* Conflict Markers */}
              {[
                { top: '30%', left: '40%', label: 'CONFLICT' },
                { top: '60%', left: '20%', label: 'GAP' }
              ].map((m, i) => (
                <motion.div 
                  key={i}
                  className="urbis-radar-marker"
                  style={{ top: m.top, left: m.left }}
                  animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.5] }}
                  transition={{ delay: i * 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  <div className="urbis-marker-box" />
                  <div className="urbis-marker-tag">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Validation Terminal (Modern UI) */}
        <div className="urbis-radar-terminal">
          <div className="urbis-terminal-line">SCANNING DRAWINGS...</div>
          <motion.div 
            className="urbis-terminal-line urbis-terminal-line--active"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            VALIDATING SPECIFICATIONS_
          </motion.div>
        </div>
      </div>
    </div>
  );
};
