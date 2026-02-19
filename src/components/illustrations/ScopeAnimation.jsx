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
    src: pageElevations,
    name: 'Elevations',
    highlights: [
      { top: '12%', left: '64%', width: '12%', height: '4%', type: 'scope', delay: 0.8 },  // Top right - BRICK VENEER (orange)
      { top: '24%', left: '66%', width: '15%', height: '5%', type: 'bid', delay: 1.0 },    // Middle - windows (blue)
      { top: '29%', left: '5%', width: '14%', height: '5%', type: 'scope', delay: 1.2 },  // Left - Masonry Scope (orange)
      { top: '22%', left: '8%', width: '14%', height: '5%', type: 'bid', delay: 1.4 }       // Top left - Install Brick Masonry (blue)
    ],
    cards: [
      { side: 'right', top: '0%', type: 'scope', title: 'Masonry Scope' },
      { side: 'right', top: '28%', type: 'bid', title: 'Provide Curtain Wall' },
      { side: 'left', top: '28%', type: 'scope', title: 'Masonry Scope' },
      { side: 'left', top: '0%', type: 'bid', title: 'Install Brick Masonry' }
    ]
  },
  {
    src: pageFoundation,
    name: 'Foundation Plan',
    highlights: [
      { top: '5%', left: '64%', width: '23%', height: '32%', type: 'scope', delay: 0.8 },
      { top: '14%', left: '65%', width: '21%', height: '4%', type: 'bid', delay: 1.0 },
      { top: '24%', left: '65%', width: '21%', height: '4%', type: 'bid', delay: 1.3 }
    ],
    cards: [
      { side: 'right', top: '0%', type: 'scope', title: 'Concrete Scope' },
      { side: 'right', top: '21%', type: 'bid', title: 'Place Concrete Footings' },
      { side: 'right', top: '42%', type: 'bid', title: 'Place Foundation Walls' }
    ]
  },
  {
    src: pageLevel1,
    name: 'Floor Plan L1',
    highlights: [
      { top: '6%', left: '67%', width: '20%', height: '42%', type: 'scope', delay: 0.8 },
      { top: '15%', left: '68%', width: '18%', height: '4%', type: 'bid', delay: 1.2 },
      { top: '24%', left: '68%', width: '18%', height: '4%', type: 'bid', delay: 1.5 },
      { top: '36%', left: '68%', width: '18%', height: '4%', type: 'bid', delay: 1.8 }
    ],
    cards: [
      { side: 'right', top: '0%', type: 'scope', title: 'Finishes scope' },
      { side: 'right', top: '21%', type: 'bid', title: 'Install Carpet Tile' },
      { side: 'right', top: '42%', type: 'bid', title: 'Install Wood Paneling' },
      { side: 'right', top: '63%', type: 'bid', title: 'Provide Ceiling Finish' }
    ]
  },
  {
    src: pageDetails,
    name: 'Details & Schedules',
    highlights: [
      { top: '6.5%', left: '58.5%', width: '29.5%', height: '78%', type: 'scope', delay: 0.8 }, // Width increased by 2% to right
      { top: '22.5%', left: '60%', width: '28%', height: '6%', type: 'bid', delay: 1.0 },   // Row 1
      { top: '32.5%', left: '60%', width: '28%', height: '6%', type: 'bid', delay: 1.1 },   // Row 3
      { top: '46.5%', left: '60%', width: '28%', height: '6%', type: 'bid', delay: 1.2 },   // Row 7
      { top: '62.5%', left: '60%', width: '28%', height: '6%', type: 'bid', delay: 1.3 },   // Row 11
      { top: '23%', left: '21%', width: '10%', height: '2.5%', type: 'scope', delay: 1.4 },  // Wall 1 Drywall
      { top: '17%', left: '21%', width: '10%', height: '2.5%', type: 'bid', delay: 1.5 },   // Wall 1 Studs
      { top: '21%', left: '46%', width: '10%', height: '2.5%', type: 'scope', delay: 1.6 },  // Stair 2 Structural
      { top: '15%', left: '46%', width: '10%', height: '2.5%', type: 'bid', delay: 1.7 },    // Stair 2 Handrail
      { top: '68%', left: '21%', width: '10%', height: '2.5%', type: 'scope', delay: 1.8 }, // Wall 3 Drywall
      { top: '73%', left: '21%', width: '10%', height: '2.5%', type: 'bid', delay: 1.9 }    // Wall 3 Gypsum
    ],
    cards: [
      { side: 'right', top: '0%', type: 'scope', title: 'Doors & Frames Hardware Scope' },
      { side: 'right', top: '21%', type: 'bid', title: 'Install Door Frame' },
      { side: 'right', top: '42%', type: 'bid', title: 'Provide Window Unit' },
      { side: 'right', top: '63%', type: 'bid', title: 'Install Window Glazing' },
      { side: 'right', top: '84%', type: 'bid', title: 'Provide Door Finish' },
      { side: 'left', top: '0%', type: 'bid', title: 'Install Stair Handrail' },
      { side: 'left', top: '18%', type: 'bid', title: 'Provide Stud Framing' },
      { side: 'left', top: '36%', type: 'scope', title: 'Drywall Scope' },
      { side: 'left', top: '54%', type: 'scope', title: 'Structural Steel Scope' },
      { side: 'left', top: '72%', type: 'scope', title: 'Drywall Scope' },
      { side: 'left', top: '90%', type: 'bid', title: 'Install Gypsum Board' }
    ]
  },
  {
    src: pageCover,
    name: 'Project Cover',
    highlights: [
      { top: '11%', left: '5%', width: '70%', height: '22%', type: 'scope', delay: 0.8 },
      { top: '65%', left: '15%', width: '15%', height: '15%', type: 'bid', delay: 1.2 }
    ],
    cards: [
      { side: 'left', top: '15%', type: 'scope', title: 'GENERAL REQUIREMENTS' },
      { side: 'left', top: '65%', type: 'bid', title: 'MOBILIZATION' }
    ]
  }
];

// --- Brand Palette ---
const COLORS = {
  scope: { main: '#FF6B35', bg: 'rgba(255, 107, 53, 0.15)', glow: 'rgba(255, 107, 53, 0.4)' }, // Orange
  bid: { main: '#046BD2', bg: 'rgba(4, 107, 210, 0.15)', glow: 'rgba(4, 107, 210, 0.4)' }, // Blue
  issues: { main: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', glow: 'rgba(168, 85, 247, 0.4)' }, // Purple
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