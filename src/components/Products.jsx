import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScopeAnimation from './illustrations/ScopeAnimation';
import CheckAnimation from './illustrations/CheckAnimation';
// import ContractAnimation from './illustrations/ContractAnimation';

const products = [
    {
        id: 'scopes',
        title: 'Wyre Scopes',
        tagline: 'Transform construction documents into structured scopes — automatically.',
        description: "Wyre Scopes analyzes your entire document set, identifies every scope of work, and delivers organized, traceable scope packages ready for your team to review and refine.",
        cta: "From Bidding to Buyout, we've got you covered.",
        features: ['Scope Package Identification', 'Scope Item Generation', 'Color Coded References', 'Scope Matrix'],
        color: '#004f8a',
        component: <ScopeAnimation />
    },
    {
        id: 'check',
        title: 'Wyre Check',
        tagline: "Most RFIs don't start in the field — they start in the documents.",
        description: "Wyre Check is an AI-assisted document validation platform that identifies conflicts and gaps between drawings and specifications, helping teams reduce risk and protect margins before the project starts.",
        cta: "Before you bid it. Before you build it. Wyre Check it.",
        features: ['Auto Generate Precon RFIs', 'Instant Discrepancy Detection', 'Color Coded References', 'Advanced Search'],
        color: '#FF6B35',
        component: <CheckAnimation />
    }
    // Wyre Contracts - Hidden for now
    // {
    //     id: 'contracts',
    //     title: 'Wyre Contracts',
    //     tagline: 'Risk Analysis & Negotiation Leverage',
    //     description: "Instantly analyze construction contracts to identify high-risk liability clauses and improved negotiation leverage. Our AI reviews contract language to ensure you're protected.",
    //     cta: "Protect your margins. Protect your business.",
    //     features: ['Risk Identification', 'Clause Comparison', 'Negotiation Insights'],
    //     color: '#8B5CF6',
    //     component: <ContractAnimation />
    // }
];

export default function Products() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="products" className="py-16 lg:py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Centered Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                        <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">Our Products</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#E8632B] mb-4 font-suisse tracking-tight italic">
                        Two Products. One Mission
                    </h2>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
                        Eliminate risk and ambiguity from your preconstruction workflow.
                    </p>
                </motion.div>

                {/* Product Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
                >

                    {/* LEFT: Navigation / Text */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                onClick={() => setActiveTab(index)}
                                className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${activeTab === index
                                        ? 'bg-slate-50 border-slate-200 shadow-sm'
                                        : 'bg-white border-transparent hover:bg-slate-50'
                                    }`}
                            >
                                <h3
                                    className={`text-xl font-bold mb-1 transition-colors ${activeTab === index ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'
                                        }`}
                                >
                                    {product.title}
                                </h3>

                                <div className={`transition-all duration-500 overflow-hidden ${activeTab === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-sm font-bold text-slate-800 mb-3 leading-tight italic">
                                        "{product.tagline}"
                                    </p>
                                    <p className="text-base text-slate-600 mb-4 leading-relaxed font-light">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-sm font-bold mb-4 text-[#E8632B]">
                                        {product.cta}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Visual Display */}
                    <div className="lg:col-span-7 h-[350px] sm:h-[450px] lg:h-[480px] xl:h-[600px] relative">
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
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
