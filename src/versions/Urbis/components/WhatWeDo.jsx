import { motion } from 'framer-motion';

const items = [
  {
    title: 'Smarter Scoping',
    text: 'Analyze drawing sets and specifications to identify detailed scopes in hours. Our AI understands every layer of preconstruction documentation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: 'Workflow Optimization',
    text: 'Automate repetitive scope extraction tasks. Cut manual data entry by over 70% and reclaim your team’s most valuable resource: time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    title: 'Precision Decisions',
    text: 'Turn fragmented data into actionable insights instantly. Access traceable cross-references that link every insight to its source.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    title: 'Risk Mitigation',
    text: 'Catch scope gaps and spec inconsistencies before they become field issues. Protect overall project margins by finding what others miss.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  }
];

export default function UrbisWhatWeDo() {
  return (
    <section id="what-we-do" className="urbis-wwd">
      <div className="urbis-wwd__container">
        
        {/* Header Block with Line Decorators */}
        <div className="urbis-wwd__header">
          <motion.div
            className="urbis-wwd__label-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="urbis-wwd__label">
              <span className="urbis-wwd__label-dash">— —</span>
              what do we do
              <span className="urbis-wwd__label-dash">— —</span>
            </p>
          </motion.div>

          <motion.div
            className="urbis-wwd__intro-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="urbis-wwd__headline">
              AI tools built for the way you <span className="urbis-wwd__headline-accent">actually work.</span>
            </h2>
            <p className="urbis-wwd__subtitle">
              We eliminate the ambiguity from your preconstruction workflow, providing clarity where there was complexity.
            </p>
          </motion.div>
        </div>

        {/* The Grid / Matrix */}
        <div className="urbis-wwd__matrix">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="urbis-wwd__node"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="urbis-wwd__node-icon">
                {item.icon}
              </div>
              <h3 className="urbis-wwd__node-title">{item.title}</h3>
              <p className="urbis-wwd__node-text">{item.text}</p>
              
              {/* Architectural accent corner */}
              <div className="urbis-wwd__node-decor">
                <div className="urbis-wwd__decor-line" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
