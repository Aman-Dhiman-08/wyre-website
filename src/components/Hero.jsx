import { motion } from 'framer-motion';
import constructionHero from '../assets/construction-hero-light.png';
import mcnImg from '../assets/MCN.png';
import shockeyImg from '../assets/Shocky.png';
import dciImg from '../assets/DCI.png';
import bekImg from '../assets/bek-removebg-preview.png';
import carlsonImg from '../assets/carlson-removebg-preview.png';
import kulkaImg from '../assets/kulka-removebg-preview.png';
import millerDavisImg from '../assets/miller_Davis-removebg-preview.png';
import winmarImg from '../assets/winmar-removebg-preview.png';

export default function Hero() {
    return (
        <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white selection:bg-[#004f8a] selection:text-white">
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#004f8a_1px,transparent_1px),linear-gradient(to_bottom,#004f8a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.05]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Tag / Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-blue-50 rounded-full mb-10 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 bg-[#004f8a] rounded-full" />
                        <span className="text-sm font-bold text-[#004f8a] uppercase tracking-[0.1em]">
                            The New Standard in Preconstruction
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="max-w-full mb-10">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] 2xl:text-[90px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.1] font-suisse">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="block"
                            >
                                AI-Powered Preconstruction Risk
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block text-gradient-blue italic"
                            >
                                Management Platform
                            </motion.span>
                        </h1>
                    </div>

                    {/* Subheadline/Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 mb-12 max-w-3xl font-light leading-relaxed text-balance"
                    >
                        Transform drawings & specifications into structured scopes, risk insights, and traceable decisions — automatically.
                        <br /><br />
                        <span className="text-slate-900 font-medium">Wyre AI</span> helps contractors identify scope gaps, reduce RFIs, and protect margins before construction even begins.
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

                        <a href="#products" className="inline-flex items-center justify-center min-w-[200px] h-14 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-200 hover:text-[#004f8a] transition-all duration-300 group relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex items-center transition-transform group-hover:scale-105">
                                Explore Products
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-[#004f8a]/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
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
                                className="absolute w-full h-full bg-[#004f8a]"
                            />
                        </div>
                    </motion.div>

                    {/* Trusted By - Infinite Carousel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="mt-16 w-full pt-12 border-t border-slate-100/50"
                    >
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by Global Infrastructure Leaders</p>
                        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <div className="flex items-center gap-x-12 sm:gap-x-16 grayscale opacity-60 animate-scroll w-max">
                                {[
                                    { name: 'DCI', src: dciImg, h: "h-14" },
                                    { name: 'Howard Shockey', src: shockeyImg, h: "h-12" },
                                    { name: 'MCN Build', src: mcnImg, h: "h-12" },
                                    { name: 'BEK', src: bekImg, h: "h-12" },
                                    { name: 'Carlson', src: carlsonImg, h: "h-12" },
                                    { name: 'Kulka', src: kulkaImg, h: "h-12" },
                                    { name: 'Miller Davis', src: millerDavisImg, h: "h-12" },
                                    { name: 'Winmar', src: winmarImg, h: "h-12" },
                                    { name: 'DCI', src: dciImg, h: "h-14" },
                                    { name: 'Howard Shockey', src: shockeyImg, h: "h-12" },
                                    { name: 'MCN Build', src: mcnImg, h: "h-12" },
                                    { name: 'BEK', src: bekImg, h: "h-12" },
                                    { name: 'Carlson', src: carlsonImg, h: "h-12" },
                                    { name: 'Kulka', src: kulkaImg, h: "h-12" },
                                    { name: 'Miller Davis', src: millerDavisImg, h: "h-12" },
                                    { name: 'Winmar', src: winmarImg, h: "h-12" }
                                ].map((logo, i) => (
                                    <img key={`${logo.name}-${i}`} src={logo.src} alt={logo.name} className={`${logo.h} w-auto object-contain flex-shrink-0`} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
