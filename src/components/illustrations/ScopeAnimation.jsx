import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pageCover from '../../assets/page_cover.png';
import pageFoundation from '../../assets/page_foundation.png';
import pageLevel1 from '../../assets/page_level1.png';
import pageElevations from '../../assets/page_elevations.png';
import pageDetails from '../../assets/page_details.png';

// --- Configuration ---
const CARD_HEIGHT = 340; 
const CARD_GAP = 50;
const SCROLL_SPEED = 0.8;
const SCAN_TIME = 2.0; 
const READ_TIME = 0.5; 
const TOTAL_CYCLE = SCROLL_SPEED + READ_TIME + SCAN_TIME; 

// --- Assets ---
const PAGES = [
  { 
      src: pageCover,
      name: 'Project Cover',
      // Coordinates for extraction
      highlights: [
          { top: '18%', left: '8%', width: '35%', height: '12%', type: 'scope', delay: 0.8 }, // Title Block -> General Req
          { top: '65%', left: '15%', width: '15%', height: '15%', type: 'bid', delay: 1.2 },   // Map -> Mobilization
          { top: '80%', left: '48%', width: '40%', height: '4%', type: 'bid', delay: 1.5 },   // Index -> Printing
          { top: '62%', left: '48%', width: '40%', height: '4%', type: 'bid', delay: 1.8 }    // Index -> Permits
      ],
      cards: [
          { side: 'left', top: '15%', type: 'scope', title: 'GENERAL REQUIREMENTS' },
          { side: 'left', top: '65%', type: 'bid', title: 'MOBILIZATION' },
          { side: 'right', top: '60%', type: 'bid', title: 'BUILDING PERMITS' },
          { side: 'right', top: '80%', type: 'bid', title: 'PROJECT PRINTING' }
      ]
  },
  { 
      src: pageFoundation,
      name: 'Foundation Plan',
      highlights: [
          { top: '22%', left: '18%', width: '8%', height: '8%', type: 'scope', delay: 0.8 }, // Footing -> Cast In Place
          { top: '15%', left: '66%', width: '28%', height: '3%', type: 'bid', delay: 1.0 },  // Sched -> 3000 PSI
          { top: '35%', left: '66%', width: '28%', height: '3%', type: 'bid', delay: 1.3 },  // Sched -> Rebar
          { top: '58%', left: '48%', width: '8%', height: '8%', type: 'bid', delay: 1.6 }   // Footing -> Excavation
      ],
      cards: [
          { side: 'left', top: '20%', type: 'scope', title: 'CAST-IN-PLACE CONCRETE' },
          { side: 'right', top: '15%', type: 'bid', title: '3000 PSI CONCRETE' },
          { side: 'right', top: '35%', type: 'bid', title: '#4 REBAR GRADE 60' },
          { side: 'left', top: '60%', type: 'bid', title: 'FTG EXCAVATION' }
      ]
  },
  { 
      src: pageLevel1,
      name: 'Floor Plan L1',
      highlights: [
          { top: '25%', left: '15%', width: '12%', height: '10%', type: 'scope', delay: 0.8 }, // Room -> Flooring
          { top: '12%', left: '66%', width: '28%', height: '3%', type: 'bid', delay: 1.0 },  // Sched -> LVT
          { top: '25%', left: '45%', width: '12%', height: '10%', type: 'bid', delay: 1.3 }, // Room -> Paint
          { top: '65%', left: '15%', width: '12%', height: '10%', type: 'bid', delay: 1.6 }  // Room -> Base
      ],
      cards: [
          { side: 'left', top: '22%', type: 'scope', title: 'FLOORING' },
          { side: 'right', top: '12%', type: 'bid', title: 'LUXURY VINYL TILE' },
          { side: 'left', top: '42%', type: 'bid', title: 'PAINT WALLS P-1' },
          { side: 'left', top: '65%', type: 'bid', title: 'RUBBER BASE 4"' }
      ]
  },
  { 
      src: pageElevations,
      name: 'Elevations',
      highlights: [
          { top: '15%', left: '22%', width: '8%', height: '8%', type: 'scope', delay: 0.8 }, // Window -> Glazing
          { top: '35%', left: '38%', width: '6%', height: '10%', type: 'bid', delay: 1.0 }, // Door -> Alum Storefront
          { top: '72%', left: '68%', width: '25%', height: '4%', type: 'bid', delay: 1.3 }, // Legend -> Brick
          { top: '58%', left: '22%', width: '45%', height: '25%', type: 'bid', delay: 1.6 } // Elevation -> Install
      ],
      cards: [
          { side: 'left', top: '15%', type: 'scope', title: 'GLAZING' },
          { side: 'left', top: '35%', type: 'bid', title: 'ALUM. STOREFRONT' },
          { side: 'right', top: '72%', type: 'bid', title: 'MODULAR BRICK' },
          { side: 'left', top: '58%', type: 'bid', title: 'INSTALL CURTAIN WALL' }
      ]
  },
  { 
      src: pageDetails,
      name: 'Details & Schedules',
      highlights: [
          { top: '18%', left: '62%', width: '28%', height: '2.5%', type: 'scope', delay: 0.8 }, // Sched -> Doors
          { top: '22%', left: '62%', width: '28%', height: '2.5%', type: 'bid', delay: 1.0 }, // Sched -> HM Door
          { top: '12%', left: '10%', width: '12%', height: '28%', type: 'bid', delay: 1.3 }, // Detail -> Batts
          { top: '25%', left: '38%', width: '15%', height: '15%', type: 'bid', delay: 1.6 }  // Detail -> Railing
      ],
      cards: [
          { side: 'right', top: '15%', type: 'scope', title: 'DOORS & FRAMES' },
          { side: 'right', top: '35%', type: 'bid', title: 'HM DOOR 3070' },
          { side: 'left', top: '20%', type: 'bid', title: 'R-19 BATT INSUL' },
          { side: 'left', top: '45%', type: 'bid', title: 'PIPE RAIL. PAINTED' }
      ]
  }
];

// --- Brand Palette ---
const COLORS = {
  scope: { main: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)', glow: 'rgba(34, 197, 94, 0.4)' }, // Green
  issues: { main: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', glow: 'rgba(168, 85, 247, 0.4)' }, // Purple
  bid: { main: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', glow: 'rgba(245, 158, 11, 0.4)' }, // Amber
  material: { main: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)', glow: 'rgba(59, 130, 246, 0.4)' }, // Blue
  detect: { main: '#FF6B35', bg: 'rgba(255, 107, 53, 0.15)' },
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
          background: 'linear-gradient(90deg, transparent, #FF6B35, transparent)',
          boxShadow: '0 0 10px 1px rgba(255, 107, 53, 0.5), 0 0 2px 0px rgba(255, 107, 53, 0.8)',
      }} />
  </motion.div>
);

// Highlight Box on the Blueprint
const OcrBox = ({ id, top, left, width, height, isActive, colorKey = 'detect', delay = 0, isFocused, onHover, isVerified }) => {
  const color = COLORS[colorKey] || COLORS.detect;
  
  // Dynamic styles based on verification or focus
  const borderColor = isVerified ? '#22c55e' : (isFocused ? color.main : color.main);
  const bgColor = isVerified ? 'rgba(34, 197, 94, 0.2)' : (isFocused ? color.glow : color.bg);
  const scale = isFocused ? 1.05 : 1;
  const opacity = isActive ? 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity, scale }}
      transition={{ duration: 0.5, delay: delay }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
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
        {isVerified && (
            <div style={{ 
                position: 'absolute', top: -10, right: -10, 
                background: '#22c55e', color: 'white', borderRadius: '50%', 
                width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>✓</div>
        )}
    </motion.div>
  );
};

// Connector Lines SVG Overlay
const ConnectorLines = ({ cards, highlights, isActive, focusedId }) => {
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
          // Show line only if this item is focused
          if (focusedId !== id) return null;

          const highlight = highlights[i];
          if (!highlight) return null;

          const isLeft = card.side === 'left';
          
          // Parse percentage positions to numbers for calculations
          const cardY = parseFloat(card.top) + 5; // +5% to approximate vertical center of card
          const cardX = isLeft ? 8 : 92; // Edge of the card content area
          
          const boxY = parseFloat(highlight.top) + (parseFloat(highlight.height) / 2);
          const boxX = isLeft 
            ? parseFloat(highlight.left) 
            : parseFloat(highlight.left) + parseFloat(highlight.width);

          return (
            <motion.line
              key={`line-${i}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              x1={`${cardX}%`} y1={`${cardY}%`}
              x2={`${boxX}%`} y2={`${boxY}%`}
              stroke={card.type === 'scope' ? COLORS.scope.main : (card.type === 'bid' ? COLORS.bid.main : '#FF6B35')}
              strokeWidth="2"
              strokeDasharray="4"
            />
          );
        })}
      </AnimatePresence>
      {/* Add dots at connection points */}
      <AnimatePresence>
         {isActive && cards.map((card, i) => {
             const id = `item-${i}`;
             if (focusedId !== id) return null;

             const highlight = highlights[i];
             if (!highlight) return null;
             const isLeft = card.side === 'left';
             const boxY = parseFloat(highlight.top) + (parseFloat(highlight.height) / 2);
             const boxX = isLeft 
                ? parseFloat(highlight.left) 
                : parseFloat(highlight.left) + parseFloat(highlight.width);
             
             return (
                 <motion.circle 
                     key={`dot-${i}`}
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     cx={`${boxX}%`} cy={`${boxY}%`} r="3"
                     fill={card.type === 'scope' ? COLORS.scope.main : COLORS.bid.main}
                 />
             )
         })}
      </AnimatePresence>
    </svg>
  );
};

// Extraction Card (Side)
const SideCard = ({ id, type, title, content, side, top, delay, isActive, isFocused, onHover, onClick, isVerified }) => {
  const config = COLORS[type] || COLORS.scope;
  const isLeft = side === 'left';
  
  // Visual state
  const opacity = isActive ? 1 : 0;
  const cardBorder = isVerified ? '#22c55e' : (isFocused ? config.main : `${config.main}40`);
  const cardShadow = isFocused ? '0 8px 25px -5px rgba(0,0,0,0.15)' : '0 4px 15px -3px rgba(0,0,0,0.1)';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20, scale: 0.9 }}
      animate={{ opacity, x: 0, scale: isFocused ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: isActive ? delay : 0 }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => { e.stopPropagation(); onClick(id); }}
      style={{
        position: 'absolute', 
        top: top,
        [isLeft ? 'right' : 'left']: '92%', 
        width: '140px',
        zIndex: 40, fontFamily: 'Inter, sans-serif',
        cursor: 'pointer'
      }}
    >
        {/* Card Content */}
        <motion.div 
            animate={{ 
                borderColor: cardBorder, 
                borderLeftWidth: isVerified ? '1px' : '4px',
                backgroundColor: isVerified ? '#f0fdf4' : 'white'
            }}
            style={{
                background: 'white', 
                border: `1px solid ${config.main}40`, 
                borderLeft: `4px solid ${config.main}`,
                borderRadius: '6px',
                padding: '8px 10px', 
                boxShadow: cardShadow,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
             <div style={{ 
                 display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1px' 
             }}>
                 <span style={{ fontSize: '9px', fontWeight: '800', color: isVerified ? '#16a34a' : config.main, textTransform: 'uppercase' }}>
                     {isVerified ? 'VERIFIED' : (type === 'scope' ? 'SCOPE PACKAGE' : (type === 'bid' ? 'SCOPE ITEM' : type.replace('_', ' ')))}
                 </span>
                 {isVerified && <span style={{ color: '#16a34a', fontSize: '10px' }}>✓</span>}
             </div>
             
             <div style={{ fontSize: '11px', fontWeight: '700', color: isVerified ? '#15803d' : '#1e293b', lineHeight: '1.2' }}>
                 {title}
             </div>
        </motion.div>
    </motion.div>
  );
};

// --- Page Renderer ---

const PageRenderer = ({ page, isActive }) => {
    const [focusedId, setFocusedId] = useState(null);
    const [verifiedItems, setVerifiedItems] = useState(new Set());

    useEffect(() => {
        // Reset state when page becomes inactive or changes? 
        // Actually, keeping verification state during the scroll session is cool.
        // But if isActive turns off, we effectively reset visuals.
    }, [isActive]);

    const handleVerify = (id) => {
        setVerifiedItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); // Toggle
            else next.add(id);
            return next;
        });
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'transparent' }}>
            <img 
                src={page.src} 
                alt={page.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px' }} 
            />
            
            <ScannerLine isActive={isActive} />

            <ConnectorLines cards={page.cards} highlights={page.highlights} isActive={isActive} focusedId={focusedId} />

            {/* Render Highlights */}
            {page.highlights.map((h, i) => {
                const id = `item-${i}`;
                return (
                    <OcrBox 
                        key={id} id={id}
                        top={h.top} left={h.left} width={h.width} height={h.height}
                        isActive={isActive} colorKey={h.type} delay={h.delay}
                        isFocused={focusedId === id}
                        onHover={setFocusedId}
                        isVerified={verifiedItems.has(id)}
                    />
                );
            })}

            {/* Render Cards */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {page.cards.map((c, i) => {
                    const id = `item-${i}`;
                    // Sync delay with bounding box
                    const highlightDelay = page.highlights[i] ? page.highlights[i].delay : 0;
                    
                    return (
                        <SideCard 
                            key={id} id={id}
                            side={c.side} top={c.top}
                            type={c.type} title={c.title} content={c.content}
                            isActive={isActive} delay={highlightDelay + 0.1} 
                            isFocused={focusedId === id}
                            onHover={setFocusedId}
                            onClick={handleVerify}
                            isVerified={verifiedItems.has(id)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// --- Main ---

export default function ScopeAnimation() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, TOTAL_CYCLE * 1000); 
    
    return () => clearInterval(timer);
  }, [isPaused, step]); // Add step dependency to reset timer on manual change

  return (
    <div 
      style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Inter, sans-serif', 
        overflowY: 'hidden', overflowX: 'visible', // Visible horizontally to show side cards
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
            {/* Render infinite loop of pages with buffer */}
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
                            // Focus effects
                            zIndex: isCurrent ? 50 : 1, // Ensure active card is on top
                            opacity: isCurrent ? 1 : 0.6,
                            scale: isCurrent ? 1 : 0.95,
                            filter: 'none',
                            transition: 'all 0.5s ease-out',
                            boxShadow: isCurrent ? '0 10px 30px -5px rgba(0,0,0,0.1)' : 'none',
                            overflow: 'visible',
                            cursor: isCurrent ? 'default' : 'pointer'
                        }}
                    >
                        {/* Interactive overlay for non-active cards */}
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