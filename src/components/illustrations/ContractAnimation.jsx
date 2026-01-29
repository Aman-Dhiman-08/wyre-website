import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contractPrime from '../../assets/contract_prime.png';
import contractSub from '../../assets/contract_sub.jpg';
import contractChangeOrder from '../../assets/contract_change_order.jpg';
import contractPaymentApp from '../../assets/contract_payment_app.jpg';

// --- Configuration ---
const CARD_HEIGHT = 450; 
const CARD_GAP = 30;
const SCROLL_SPEED = 0.8;
const SCAN_TIME = 2.0; 
const READ_TIME = 0.5; 
const TOTAL_CYCLE = SCROLL_SPEED + READ_TIME + SCAN_TIME; 

// --- Assets (Contract Data) ---
const PAGES = [
  { 
      src: contractPrime,
      name: 'Prime Contract',
      highlights: [
          { top: '27.5%', left: '7%', width: '42%', height: '18%', type: 'risk', delay: 0.8 }, 
      ],
      cards: [
          { side: 'right', top: '26%', type: 'risk', title: 'FEE VERIFICATION', content: 'Sum of breakdown items ($14,650) exceeds the Contract Price total by $150.' }
      ]
  },
  { 
      src: contractSub,
      name: 'Subcontractor Agreement',
      highlights: [
          { top: '48%', left: '60%', width: '32%', height: '15%', type: 'risk', delay: 0.8 }, 
          { top: '46%', left: '6%', width: '41%', height: '10%', type: 'risk', delay: 1.2 }  
      ],
      cards: [
          { side: 'right', top: '48%', type: 'risk', title: 'INSURANCE GAP', content: 'Subcontractor General Liability limits ($1M) do not meet the $2M prime requirement.' },
          { side: 'left', top: '45.5%', type: 'risk', title: 'TRADE SCOPE', content: 'Verify if plumbing fabrication and shop drawings are included in base fee.' }
      ]
  },
  { 
      src: contractChangeOrder,
      name: 'Change Order',
      highlights: [
          { top: '35%', left: '50.5%', width: '41%', height: '26%', type: 'risk', delay: 0.8 }, 
      ],
      cards: [
          { side: 'left', top: '35%', type: 'risk', title: 'MARKUP OVERAGE', content: 'Requested 15% overhead & profit exceeds the fixed 10% contract allowance.' }
      ]
  },
  { 
      src: contractPaymentApp,
      name: 'Application for Payment',
      highlights: [
          { top: '15%', left: '42.5%', width: '51%', height: '58%', type: 'risk', delay: 0.8 }, 
      ],
      cards: [
          { side: 'left', top: '24%', type: 'risk', title: 'OVER-BILLING RISK', content: 'Line item 14 (Finance) shows 98% completion; field report estimates 85%.' }
      ]
  }
];

// --- Brand Palette ---
const COLORS = {
  risk: { main: '#ef4444', bg: 'rgba(239, 68, 68, 0.06)', glow: 'rgba(239, 68, 68, 0.25)' }, 
};

// --- Components ---

const DocumentRenderer = ({ page }) => (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'transparent', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <img 
            src={page.src} 
            alt={page.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', padding: '0px' }} 
        />
    </div>
);

const ScannerLine = ({ isActive }) => (
  <motion.div
    initial={{ top: '0%', opacity: 0 }}
    animate={isActive ? { top: ['0%', '95%'], opacity: [0, 1, 1, 0] } : { opacity: 0 }}
    transition={{ duration: SCAN_TIME, ease: "linear", delay: 0.2 }}
    style={{
      position: 'absolute', left: 0, width: '100%', height: '10px', 
      zIndex: 30, pointerEvents: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}
  >
      <div style={{
          width: '100%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #ef4444, transparent)', 
          boxShadow: '0 0 10px 1px rgba(239, 68, 68, 0.5), 0 0 2px 0px rgba(239, 68, 68, 0.8)',
      }} />
  </motion.div>
);

const RiskBox = ({ id, top, left, width, height, isActive, colorKey = 'risk', delay = 0, isFocused, onHover }) => {
  const color = COLORS[colorKey] || COLORS.risk;
  const opacity = isActive ? 1 : 0;
  const borderColor = isFocused ? color.main : `${color.main}80`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity, scale: isFocused ? 1.02 : 1 }}
      transition={{ duration: 0.4, delay: delay }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: 'absolute', top, left, width, height,
        border: `1.5px solid ${borderColor}`,
        backgroundColor: isFocused ? color.glow : color.bg,
        borderRadius: '2px',
        zIndex: isFocused ? 25 : 20, 
        cursor: 'pointer',
        boxShadow: isFocused ? `0 0 15px ${color.main}30` : 'none',
        transition: 'all 0.3s ease'
      }}
    />
  );
};

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
          if (hoveredId !== id) return null;

          const highlight = highlights[i];
          if (!highlight) return null;

          const isLeft = card.side === 'left';
          const cardY = parseFloat(card.top) + 6;
          const cardX = isLeft ? 4 : 96;
          
          const boxY = parseFloat(highlight.top) + (parseFloat(highlight.height) / 2);
          const boxX = isLeft 
            ? parseFloat(highlight.left) 
            : parseFloat(highlight.left) + parseFloat(highlight.width);

          return (
            <React.Fragment key={`conn-${i}`}>
                <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                x1={`${cardX}%`} y1={`${cardY}%`}
                x2={`${boxX}%`} y2={`${boxY}%`}
                stroke={COLORS.risk.main}
                strokeWidth="1.5"
                strokeDasharray="4"
                />
            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </svg>
  );
};

const RiskCard = ({ id, type, title, content, side, top, isActive, delay, onHover }) => {
  const config = COLORS[type] || COLORS.risk;
  const isLeft = side === 'left';
  
  return (
    <motion.div
    initial={{ opacity: 0, x: isLeft ? -20 : 20, scale: 0.9 }}
    animate={{ opacity: isActive ? 1 : 0, x: 0, scale: isActive ? 1 : 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 25, delay: isActive ? delay : 0 }}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
    style={{
        position: 'absolute', 
        top: top,
        [isLeft ? 'right' : 'left']: '97%', 
        width: '185px',
        zIndex: 50, fontFamily: 'Inter, sans-serif',
        cursor: 'default',
        pointerEvents: 'auto'
    }}
    >
        <div style={{
            background: 'white', 
            border: `1px solid ${config.main}20`, 
            borderLeft: `4px solid ${config.main}`,
            borderRadius: '8px',
            padding: '12px 14px', 
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 5px 10px -5px rgba(0,0,0,0.04)',
            position: 'relative'
        }}>
            <div style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' 
            }}>
                <span style={{ fontSize: '9px', fontWeight: '900', color: config.main, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    RISK FOUND
                </span>
            </div>
            
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a', lineHeight: '1.2', marginBottom: '4px' }}>
                {title}
            </div>
            <div style={{ fontSize: '10px', color: '#475569', lineHeight: '1.4' }}>
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
            <DocumentRenderer page={page} />
            
            <ScannerLine isActive={isActive} />

            <ConnectorLines cards={page.cards} highlights={page.highlights} isActive={isActive} hoveredId={hoveredId} />

            {page.highlights.map((h, i) => {
                const id = `item-${i}`;
                return (
                    <RiskBox 
                        key={id} id={id}
                        top={h.top} left={h.left} width={h.width} height={h.height}
                        isActive={isActive} delay={h.delay}
                        isFocused={hoveredId === id}
                        onHover={setHoveredId}
                    />
                );
            })}

            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {page.cards.map((c, i) => {
                    const id = `item-${i}`;
                    const highlightDelay = page.highlights[i] ? page.highlights[i].delay : 0;
                    
                    return (
                        <RiskCard 
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

export default function ContractAnimation() {
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
      <div style={{ width: '320px', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        onClick={() => { if (!isCurrent) setStep(logicalIndex); }}
                        style={{
                            height: `${CARD_HEIGHT}px`, width: '100%', 
                            background: 'white',
                            borderRadius: '4px', 
                            flexShrink: 0, position: 'relative',
                            zIndex: isCurrent ? 50 : 1, 
                            opacity: isCurrent ? 1 : 0.6,
                            scale: isCurrent ? 1 : 0.95,
                            transition: 'all 0.5s ease-out',
                            boxShadow: isCurrent ? '0 10px 30px -5px rgba(0,0,0,0.1)' : 'none',
                            cursor: isCurrent ? 'default' : 'pointer'
                        }}
                    >
                        {!isCurrent && <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'transparent' }} />}
                        <PageRenderer page={PAGES[pageIndex]} isActive={isCurrent} />
                    </div>
                );
            })}
        </motion.div>
      </div>
    </div>
  );
}
