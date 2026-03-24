import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScopeAnimation from '../../../components/illustrations/ScopeAnimation';
import CheckAnimation from '../../../components/illustrations/CheckAnimation';

const products = [
  {
    id: 'scope',
    title: 'Wyre Scope',
    headline: 'Transform construction documents into structured scopes — automatically.',
    description: 'Wyre Scopes analyzes your entire document set, identifies every scope of work, and delivers organized, traceable scope packages ready for your team to review and refine.',
    tagline: 'From Bidding to Buyout, we\'ve got you covered.',
    features: [
      { 
        title: 'Scope Package Identification', 
        text: 'Automatically classify drawing sheets into logical trade-based scope packages.',
        icon: '01'
      },
      { 
        title: 'Scope Item Generation', 
        text: 'Extract granular scope details directly from architectural and engineering documents.',
        icon: '02'
      },
      { 
        title: 'Color Coded References', 
        text: 'Trace every scope item back to its visual source on the drawing with high-contrast references.',
        icon: '03'
      },
      { 
        title: 'Scope Matrix', 
        text: 'A structured, interactive matrix ensuring total coverage across your entire project.',
        icon: '04'
      }
    ],
    animation: <ScopeAnimation />
  },
  {
    id: 'check',
    title: 'Wyre Check',
    headline: 'Most RFIs don\'t start in the field — they start in the documents.',
    description: 'Wyre Check is an AI-assisted document validation platform that identifies conflicts and gaps between drawings and specifications, helping teams reduce risk and protect margins before the project starts',
    tagline: 'Before you bid it. Before you build it. Wyre Check it.',
    features: [
      { 
        title: 'Auto Generate Precon RFIs', 
        text: 'Draft high-impact RFIs instantly based on document discrepancies.',
        icon: '01'
      },
      { 
        title: 'Instant Discrepancy Detection', 
        text: 'AI-powered detection of conflicts between different drawing sets and specs.',
        icon: '02'
      },
      { 
        title: 'Color Coded References', 
        text: 'Maintain clear documented proof for every discrepancy found by the system.',
        icon: '03'
      },
      { 
        title: 'Advanced Search', 
        text: 'Search through thousands of documents using keyword intelligence and visual patterns.',
        icon: '04'
      }
    ],
    animation: <CheckAnimation />
  }
];

export default function UrbisProducts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="urbis-split">
      {/* Hero Header */}
      <div className="urbis-split__hero">
        <div className="urbis-split__container">
          <motion.p 
            className="urbis-split__eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            TWO PRODUCTS. ONE MISSION
          </motion.p>
          <motion.h2 
            className="urbis-split__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Eliminate risk and ambiguity from your <br />
            <span className="urbis-split__title-accent">preconstruction workflow.</span>
          </motion.h2>
        </div>
      </div>

      <div className="urbis-split__container">
        {/* Main Stage: Two Columns */}
        <div className="urbis-split__stage">
          
          {/* LEFT: Product Switcher & Details */}
          <div className="urbis-split__info">
            
            {/* Tab Pills */}
            <div className="urbis-split__tabs">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  className={`urbis-split__tab ${activeTab === i ? 'urbis-split__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {p.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="urbis-split__details"
              >
                <h3 className="urbis-split__headline">{products[activeTab].headline}</h3>
                <p className="urbis-split__desc">{products[activeTab].description}</p>
                
                {/* Feature Grid */}
                <div className="urbis-split__nodes">
                  {products[activeTab].features.map((f, i) => (
                    <div key={i} className="urbis-split__node">
                      <div className="urbis-split__node-icon">{f.icon}</div>
                      <div className="urbis-split__node-body">
                        <h4 className="urbis-split__node-title">{f.title}</h4>
                        <p className="urbis-split__node-text">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="urbis-split__footer">
                  <p className="urbis-split__tagline">{products[activeTab].tagline}</p>
                  <a href="#book-demo" className="urbis-split__cta">Book Demo</a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Vertically Centered Animation Visual */}
          <div className="urbis-split__visual">
            <div className="urbis-split__stage-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="urbis-split__screen"
                >
                  <div className="urbis-split__animation-wrap">
                    {products[activeTab].animation}
                  </div>
                  {/* Digital Framing Accents */}
                  <div className="urbis-split-corner urbis-split-corner--tl" />
                  <div className="urbis-split-corner urbis-split-corner--br" />
                </motion.div>
              </AnimatePresence>
              
              {/* Background Technical Grid for Right Side */}
              <div className="urbis-split-grid" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
