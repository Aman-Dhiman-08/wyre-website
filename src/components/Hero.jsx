import { motion } from 'framer-motion';
import constructionHero from '../assets/construction-hero-light.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white selection:bg-[#046BD2] selection:text-white">
      {/* Background - Video & Sophisticated Overlays */}
      <div className="absolute inset-0 overflow-hidden">
         <img 
            src={constructionHero}
            alt="Minimalist construction site"
            className="absolute min-w-full min-h-full object-cover scale-[1.05] brightness-[1.02]"
         />
         
         {/* Adaptive Gradients - Optimized for Light Image */}
         <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]" />
         <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
         <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 opacity-20" />
         
         {/* Refined Grid Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#046BD2_1px,transparent_1px),linear-gradient(to_bottom,#046BD2_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
            
            {/* Tag / Badge */}
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-blue-50/80 backdrop-blur border border-blue-100/50 rounded-full mb-10 shadow-sm"
            >
                <div className="flex h-2 w-2 relative">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></div>
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-[#046BD2]"></div>
                </div>
                <span className="text-[12px] font-bold text-[#046BD2] uppercase tracking-[0.1em]">
                    The New Standard in Preconstruction
                </span>
            </motion.div>

            {/* Main Headline */}
            <div className="max-w-4xl mb-10">
                <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold text-slate-900 tracking-[-0.03em] leading-[0.9] font-suisse">
                    <motion.span 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="block"
                    >
                        Construction data,
                    </motion.span>
                    <motion.span 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="block text-gradient-blue pb-4 italic"
                    >
                        simplified by AI.
                    </motion.span>
                </h1>
            </div>

            {/* Subheadline/Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl font-light leading-relaxed text-balance"
            >
              Automate scope extraction, risk analysis, and QA/QC with human-like precision. 
              <span className="text-slate-900 font-medium"> Stop reviewing documents manually.</span>
            </motion.p>

            {/* Premium CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#contact" className="btn-primary min-w-[200px] h-14 text-base shadow-lg shadow-orange-500/20 group relative overflow-hidden rounded-xl">
                 <span className="relative z-10 block transition-transform group-hover:scale-105">Book Demo</span>
                 <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </a>

              <a href="#products" className="inline-flex items-center justify-center min-w-[200px] h-14 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-200 hover:text-[#046BD2] transition-all duration-300 group relative overflow-hidden shadow-sm">
                 <div className="relative z-10 flex items-center transition-transform group-hover:scale-105">
                    Explore Products
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                 </div>
                 <div className="absolute inset-0 bg-[#046BD2]/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </a>
            </motion.div>


            {/* Scroll Indicator - Minimal Line */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-10 flex flex-col items-center"
            >
                <div className="w-px h-12 bg-slate-200 relative overflow-hidden">
                    <motion.div 
                        animate={{ 
                            top: ['-100%', '100%']
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute w-full h-full bg-[#046BD2]"
                    />
                </div>
            </motion.div>

            {/* Trusted By - Enhanced Horizontal Scale */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.2, duration: 1.5 }}
                className="mt-16 w-full pt-12 border-t border-slate-100/50"
            >
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by Global Infrastructure Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10 grayscale-[0.8] opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-700">
                    {['DPR', 'TURNER', 'AECOM', 'SKANSKA', 'PCL'].map((logo) => (
                        <span key={logo} className="text-2xl font-bold font-suisse tracking-tighter text-slate-900 cursor-default hover:text-[#046BD2] transition-colors">{logo}</span>
                    ))}
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
