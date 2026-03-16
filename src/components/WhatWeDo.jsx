import { motion } from 'framer-motion';

const features = [
  {
    title: "Smarter Scoping",
    desc: "Instantly analyze drawings & specifications & identify scopes",
    bg: "bg-orange-50",
    text: "text-[#FF6B35]",
    border: "border-orange-100",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Workflow Optimization",
    desc: "Streamline tasks, cut down on manual entry and save hours.",
    bg: "bg-blue-50",
    text: "text-[#004f8a]",
    border: "border-blue-100",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Better Decisions, Faster",
    desc: "Turn complex data into simple, actionable insights.",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
            <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">What We Do</span>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-[#E8632B] mb-4 font-suisse leading-tight italic">
            AI tools built for the way you <span className="underline">actually work!</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            Purpose-built intelligence that fits into your existing preconstruction workflow.
          </p>
        </motion.div>

        {/* Feature Cards - Full Width */}
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl border ${item.border} bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group cursor-default`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
