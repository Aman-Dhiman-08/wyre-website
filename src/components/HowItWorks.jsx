import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Upload Documents",
    desc: "Feed your full drawing set, specifications, and project documents into Wyre AI.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Wyre AI Analysis",
    desc: "Wyre AI digs deep into every page, identifying scopes, conflicts, and gaps automatically.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Review & Refine",
    desc: "Your team reviews organized, color-coded outputs with traceable references.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Bid & Build",
    desc: "Move forward with confidence — accurate scopes, fewer RFIs, and reduced risk from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
              <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">How It Works</span>
            </div>

            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#E8632B] mb-4 font-suisse tracking-tight italic">
              We know how construction documents are wired
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
              A purpose-built AI platform that understands the full structure of preconstruction documentation.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] bg-gradient-to-r from-[#004f8a]/20 via-[#004f8a]/30 to-[#004f8a]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[#004f8a]/20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-[#004f8a]/50 group-hover:shadow-md transition-all duration-300">
                  <span className="text-[#004f8a] group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>
                </div>

                {/* Step Number */}
                <div className="text-xs font-bold text-[#004f8a]/40 uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
