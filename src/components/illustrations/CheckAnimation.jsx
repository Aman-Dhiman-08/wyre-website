import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
const CARD_HEIGHT = 340; 
const CARD_GAP = 50;
const SCROLL_SPEED = 0.8;
const SCAN_TIME = 2.0; 
const READ_TIME = 0.5; 
const TOTAL_CYCLE = SCROLL_SPEED + READ_TIME + SCAN_TIME; 

// --- Assets (Issues Data) ---
const PAGES = [
  { 
      src: '/assets/page_cover.png',
      name: 'Project Cover',
      highlights: [
          { top: '65%', left: '15%', width: '15%', height: '15%', type: 'issue', delay: 0.8 }, // Map Issue
          { top: '62%', left: '48%', width: '40%', height: '4%', type: 'issue', delay: 1.2 }   // Index Issue
      ],
      cards: [
          { side: 'left', top: '55%', type: 'issue', title: 'PAGE NUMBER CONFLICT', content: 'Civil drawings referenced do not match set.' },
          { side: 'right', top: '50%', type: 'issue', title: 'OUTDATED INDEX', content: 'Sheet A-102 revision delta missing.' }
      ]
  },
  { 
      src: '/assets/page_foundation.png',
      name: 'Foundation Plan',
      highlights: [
          { top: '22%', left: '18%', width: '12%', height: '12%', type: 'issue', delay: 0.8 }, // Footing Issue
          { top: '35%', left: '60%', width: '30%', height: '5%', type: 'issue', delay: 1.2 }   // Schedule Issue
      ],
      cards: [
          { side: 'left', top: '20%', type: 'issue', title: 'FOOTING CLASH', content: 'Spread footing overlaps with utility trench.' },
          { side: 'right', top: '35%', type: 'issue', title: 'REBAR SPEC ERROR', content: 'Schedule calls for #5, Plan calls for #6.' }
      ]
  },
  { 
      src: '/assets/page_level1.png',
      name: 'Floor Plan L1',
      highlights: [
          { top: '28%', left: '42%', width: '8%', height: '10%', type: 'issue', delay: 0.8 }, // Door Swing
          { top: '65%', left: '15%', width: '12%', height: '10%', type: 'issue', delay: 1.2 }  // ADA Issue
      ],
      cards: [
          { side: 'left', top: '30%', type: 'issue', title: 'DOOR SWING', content: 'Door swings into casework clearance zone.' },
          { side: 'left', top: '65%', type: 'issue', title: 'ADA COMPLIANCE', content: 'Turning radius insufficient in Office 104.' }
      ]
  },
  { 
      src: '/assets/page_elevations.png',
      name: 'Elevations',
      highlights: [
          { top: '15%', left: '22%', width: '25%', height: '15%', type: 'issue', delay: 0.8 }, // Window Height
          { top: '72%', left: '68%', width: '25%', height: '4%', type: 'issue', delay: 1.2 }   // Material Match
      ],
      cards: [
          { side: 'left', top: '15%', type: 'issue', title: 'ELEVATION MISMATCH', content: 'Head height does not match Floor Plan.' },
          { side: 'right', top: '65%', type: 'issue', title: 'SPEC CONFLICT', content: 'Brick veneer color code undefined.' }
      ]
  },
  { 
      src: '/assets/page_details.png',
      name: 'Details & Schedules',
      highlights: [
          { top: '15%', left: '15%', width: '15%', height: '25%', type: 'issue', delay: 0.8 }, // Wall Section
          { top: '18%', left: '62%', width: '28%', height: '4%', type: 'issue', delay: 1.2 }   // Door Config
      ],
      cards: [
          { side: 'left', top: '20%', type: 'issue', title: 'INCOMPLETE DETAIL', content: 'Flashing gauge not specified @ parapet.' },
          { side: 'right', top: '15%', type: 'issue', title: 'HARDWARE SET', content: 'Panic bar missing from exterior door.' }
      ]
  }
];

// --- Styles ---
const COLORS = {
  issue: { main: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)', glow: 'rgba(239, 68, 68, 0.4)' }, // Red
};

// --- Components ---

const ScannerLine = ({ isActive }) => (
  <motion.div
    initial={{ top: '0%', opacity: 0 }}
    animate={isActive ? { top: ['0%', '90%'], opacity: [0, 1, 1, 0] } : { opacity: 0 }}
    transition={{ duration: SCAN_TIME, ease: "linear", delay: 0.2 }}
    style={{
      position: 'absolute', left: 0, width: '100%', height: '10px', 
      zIndex: 30, pointerEvents: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}
  >
      <div style={{
          width: '100%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #ef4444, transparent)', // Red Scanner
          boxShadow: '0 0 10px 1px rgba(239, 68, 68, 0.5), 0 0 2px 0px rgba(239, 68, 68, 0.8)',
      }} />
  </motion.div>
);

// Bounding Box with Caution Mark
const IssueBox = ({ id, top, left, width, height, isActive, colorKey = 'issue', delay = 0, isFocused, onClick }) => {
  const color = COLORS[colorKey] || COLORS.issue;
  
  const borderColor = isFocused ? color.main : color.main;
  const bgColor = isFocused ? color.glow : color.bg;
  const scale = isFocused ? 1.05 : 1;
  const opacity = isActive ? 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity, scale }}
      transition={{ duration: 0.5, delay: delay }}
      onClick={(e) => { e.stopPropagation(); onClick(id); }}
      style={{
        position: 'absolute', top, left, width, height,
        border: `2px solid ${borderColor}`,
        backgroundColor: bgColor,
        borderRadius: '3px',
        zIndex: isFocused ? 25 : 20, 
        cursor: 'pointer',
        boxShadow: isFocused ? `0 0 15px ${borderColor}` : `0 0 12px -2px ${color.glow}`
      }}
    >
        {/* Caution Mark - Always visible once scanned */}
        <div style={{ 
            position: 'absolute', top: -12, right: -12, 
            background: color.main, color: 'white', borderRadius: '50%', 
            width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: 30
        }}>!</div>
    </motion.div>
  );
};

// Connector Line
const ConnectorLines = ({ cards, highlights, isActive, hoveredId }) => {
  return (
    <svg 
      style={{ 
        position: 'absolute', inset: 0, width: '100%', height: '100%', 
        pointerEvents: 'none', zIndex: 35, overflow: 'visible' 
      }}
    >
      <AnimatePresence>
        {isActive && cards.map((card, i) => {
          const id = `item-${i}`;
          // Show line ONLY if this specific item is hovered
          if (hoveredId !== id) return null;

          const highlight = highlights[i];
          if (!highlight) return null;

          const isLeft = card.side === 'left';
          const cardY = parseFloat(card.top) + 5;
          const cardX = isLeft ? 8 : 92;
          
          const boxY = parseFloat(highlight.top) + (parseFloat(highlight.height) / 2);
          const boxX = isLeft 
            ? parseFloat(highlight.left) 
            : parseFloat(highlight.left) + parseFloat(highlight.width);

          return (
            <React.Fragment key={`conn-${i}`}>
                <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                x1={`${cardX}%`} y1={`${cardY}%`}
                x2={`${boxX}%`} y2={`${boxY}%`}
                stroke={COLORS.issue.main}
                strokeWidth="2"
                strokeDasharray="4"
                />
                <motion.circle 
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     cx={`${boxX}%`} cy={`${boxY}%`} r="3"
                     fill={COLORS.issue.main}
                 />
            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </svg>
  );
};

// Issue Detail Card
const IssueCard = ({ id, type, title, content, side, top, isActive, delay, onHover }) => {
  const config = COLORS[type] || COLORS.issue;
  const isLeft = side === 'left';
  
  return (
    <motion.div
    initial={{ opacity: 0, x: isLeft ? -10 : 10, scale: 0.9 }}
    animate={{ opacity: isActive ? 1 : 0, x: 0, scale: isActive ? 1 : 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 25, delay: isActive ? delay : 0 }}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
    style={{
        position: 'absolute', 
        top: top,
        [isLeft ? 'right' : 'left']: '92%', 
        width: '150px',
        zIndex: 40, fontFamily: 'Inter, sans-serif',
        cursor: 'default',
        pointerEvents: 'auto' // Re-enable pointer events for hover
    }}
    >
        <div style={{
            background: 'white', 
            border: `1px solid ${config.main}40`, 
            borderLeft: `4px solid ${config.main}`,
            borderRadius: '6px',
            padding: '10px 12px', 
            boxShadow: '0 8px 30px -5px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' 
            }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: config.main, textTransform: 'uppercase' }}>
                    ISSUE FOUND
                </span>
            </div>
            
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2', marginBottom: '4px' }}>
                {title}
            </div>
            <div style={{ fontSize: '10px', color: '#64748b', lineHeight: '1.4' }}>
                {content}
            </div>
        </div>
    </motion.div>
  );
};

// --- Page Renderer ---

const PageRenderer = ({ page, isActive }) => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'transparent' }}>
            <img 
                src={page.src} 
                alt={page.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px' }} 
            />
            
            <ScannerLine isActive={isActive} />

            <ConnectorLines cards={page.cards} highlights={page.highlights} isActive={isActive} hoveredId={hoveredId} />

            {/* Render Highlights (Issues) */}
            {page.highlights.map((h, i) => {
                const id = `item-${i}`;
                return (
                    <IssueBox 
                        key={id} id={id}
                        top={h.top} left={h.left} width={h.width} height={h.height}
                        isActive={isActive} delay={h.delay}
                        isFocused={true}
                        onClick={() => {}}
                        onHover={setHoveredId}
                    />
                );
            })}

            {/* Render Cards */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {page.cards.map((c, i) => {
                    const id = `item-${i}`;
                    const highlightDelay = page.highlights[i] ? page.highlights[i].delay : 0;
                    
                    return (
                        <IssueCard 
                            key={id} id={id}
                            side={c.side} top={c.top}
                            type={c.type} title={c.title} content={c.content}
                            isActive={isActive} delay={highlightDelay + 0.1}
                            onHover={setHoveredId}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// --- Main ---

export default function CheckAnimation() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, TOTAL_CYCLE * 1000); 
    
    return () => clearInterval(timer);
  }, [isPaused, step]); 

  return (
    <div 
      style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Inter, sans-serif', 
        overflowY: 'hidden', overflowX: 'visible',
        position: 'relative',
        background: 'transparent',
        cursor: isPaused ? 'grab' : 'default'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ width: '440px', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
            initial={false}
            animate={{ y: -(step + 5) * (CARD_HEIGHT + CARD_GAP) }} // Fixed 5-page buffer offset
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            style={{
                position: 'absolute', 
                top: '50%', 
                marginTop: -CARD_HEIGHT / 2, 
                width: '100%', 
                display: 'flex', flexDirection: 'column', gap: `${CARD_GAP}px`
            }}
        >
            {[...Array(step + 10)].map((_, i) => {
                const logicalIndex = i - 5;
                const pageIndex = ((logicalIndex % PAGES.length) + PAGES.length) % PAGES.length;
                const isCurrent = step === logicalIndex;
                
                return (
                    <div 
                        key={i}
                        onClick={() => {
                          if (!isCurrent) setStep(logicalIndex);
                        }}
                        style={{
                            height: `${CARD_HEIGHT}px`, width: '100%', 
                            background: 'white',
                            borderRadius: '4px', 
                            flexShrink: 0, position: 'relative',
                            zIndex: isCurrent ? 50 : 1, 
                            opacity: isCurrent ? 1 : 0.6,
                            scale: isCurrent ? 1 : 0.95,
                            filter: 'none',
                            transition: 'all 0.5s ease-out',
                            boxShadow: isCurrent ? '0 10px 30px -5px rgba(0,0,0,0.1)' : 'none',
                            overflow: 'visible',
                            cursor: isCurrent ? 'default' : 'pointer'
                        }}
                    >
                        {!isCurrent && (
                          <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'transparent' }} />
                        )}
                        
                        <PageRenderer page={PAGES[pageIndex]} isActive={isCurrent} />
                    </div>
                );
            })}
        </motion.div>
      </div>
    </div>
  );
}
