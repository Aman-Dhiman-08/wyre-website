import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScopeAnimation from './illustrations/ScopeAnimation';
import CheckAnimation from './illustrations/CheckAnimation';
import ContractAnimation from './illustrations/ContractAnimation';

const products = [
  {
    id: 'scopes',
    title: 'Wyre Scopes',
    tagline: 'Scope Extraction',
    description: "Our AI engine reads thousands of drawing pages to identify, categorize, and extract every single scope item requiring action.",
    color: '#046BD2',
    component: <ScopeAnimation />
  },
  {
    id: 'check',
    title: 'Wyre Check',
    tagline: 'QA/QC Automation',
    description: "Catch conflicts, code violations, and missing details before they become expensive RFI's. Your automated second set of eyes.",
    color: '#FF6B35',
    component: <CheckAnimation />
  },
  {
    id: 'contracts',
    title: 'Wyre Contracts',
    tagline: 'Risk Analysis',
    description: "Instantly analyze construction contracts to identify high-risk liability clauses and improved negotiation leverage.",
    color: '#8B5CF6',
    component: <ContractAnimation />
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate tabs if user hasn't interacted? 
  // Maybe better to let user explore to avoid UX frustration
  
  return (
    <section id="products" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
            
            {/* LEFT: Navigation / Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                 <div className="mb-8">
                     <h2 className="text-4xl font-bold text-slate-900 mb-4 font-suisse">
                         Products
                     </h2>
                     <p className="text-slate-500 text-lg">
                         A suite of specialized AI agents for every phase of preconstruction.
                     </p>
                 </div>

                 {products.map((product, index) => (
                     <div 
                        key={product.id}
                        onClick={() => setActiveTab(index)}
                        className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                            activeTab === index 
                            ? 'bg-slate-50 border-slate-200 shadow-sm' 
                            : 'bg-white border-transparent hover:bg-slate-50'
                        }`}
                     >
                         <h3 
                            className={`text-xl font-bold mb-3 transition-colors ${
                                activeTab === index ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'
                            }`}
                         >
                             {product.title}
                         </h3>
                         <p 
                             className={`text-base leading-relaxed transition-all duration-500 overflow-hidden ${
                                 activeTab === index ? 'max-h-40 opacity-100 text-slate-600' : 'max-h-0 opacity-0'
                             }`}
                         >
                             {product.description}
                         </p>
                         
                         {activeTab === index && (
                             <div className="mt-4 flex items-center gap-2 text-sm font-bold" style={{ color: product.color }}>
                                 Explore
                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                 </svg>
                             </div>
                         )}
                     </div>
                 ))}
            </div>

            {/* RIGHT: Visual Display */}
            <div className="lg:col-span-7 h-[600px] relative">
                 <div className="absolute inset-0 bg-slate-100 rounded-3xl border border-slate-200">
                      {/* Background Grid */}
                      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
                      
                      {/* Content Container */}
                      <div className="relative w-full h-full">
                         <AnimatePresence mode='wait'>
                             <motion.div 
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full"
                             >
                                 {products[activeTab].component}
                             </motion.div>
                         </AnimatePresence>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur border border-white/50 px-4 py-2 rounded-lg shadow-sm">
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                             {products[activeTab].tagline}
                          </span>
                      </div>
                 </div>
            </div>

        </motion.div>
      </div>
    </section>
  );
}
