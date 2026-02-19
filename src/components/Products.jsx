import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScopeAnimation from './illustrations/ScopeAnimation';
import CheckAnimation from './illustrations/CheckAnimation';
import ContractAnimation from './illustrations/ContractAnimation';

const products = [
    {
        id: 'scopes',
        title: 'Wyre Scopes',
        tagline: 'Transform construction documents into structured scopes - automatically.',
        description: "Analyze your entire document set, identify every scope of work, and deliver organized, traceable scope packages - ready for your team to review and refine.",
        cta: "From Bidding to Buyout, we’ve got you covered.",
        features: ['Scope Identification', 'Bid Item Generation', 'Color Coded References', 'Scope Matrix'],
        color: '#046BD2',
        component: <ScopeAnimation />
    },
    {
        id: 'check',
        title: 'Wyre Check',
        tagline: "Most RFIs don't start in the field. They start in the documents.",
        description: "Wyre Check is an AI-assisted document validation platform that identifies conflicts and gaps between drawings and specifications - helping construction teams reduce risk, prevent change orders, and protect margins before the project even starts.",
        cta: "Before you bid it. Before you build it. Wyre Check it.",
        features: ['Auto-drafted RFIs', 'Document References', 'Advanced Search'],
        color: '#FF6B35',
        component: <CheckAnimation />
    },
    {
        id: 'contracts',
        title: 'Wyre Contracts',
        tagline: 'Risk Analysis & Negotiation Leverage',
        description: "Instantly analyze construction contracts to identify high-risk liability clauses and improved negotiation leverage. Our AI reviews contract language to ensure you're protected.",
        cta: "Protect your margins. Protect your business.",
        features: ['Risk Identification', 'Clause Comparison', 'Negotiation Insights'],
        color: '#8B5CF6',
        component: <ContractAnimation />
    }
];

export default function Products() {
    const [activeTab, setActiveTab] = useState(0);

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

                                    <p className="text-sm font-bold mb-4" style={{ color: product.color }}>
                                        {product.cta}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold" style={{ color: product.color }}>
                                        Explore {product.title}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
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
                                    {products[activeTab].title} Focus
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
