import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../components/Logo';
import ScopeAnimation from '../../components/illustrations/ScopeAnimation';
import CheckAnimation from '../../components/illustrations/CheckAnimation';
import heroWorker from '../../assets/cons/v4_hero.jpg';
import projectHotel from '../../assets/cons/project_hotel.png';
import projectSchool from '../../assets/cons/project_school.png';
import team1 from '../../assets/cons/team_1.png';
import team2 from '../../assets/cons/team_2.png';
import team3 from '../../assets/cons/team_3.png';

const DARK_BLUE = '#004f8a';
const DARK = '#1A1A1A';
const BG_LIGHT = '#F7F7EC';

/* ─────────────────── COMPONENTS ─────────────────── */

function Navbar() {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'About', 'Project', 'Contact us'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center px-10 py-8">
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        <div className="flex items-center gap-20">
          {/* Logo */}
          <Logo className="h-8 w-auto text-white" forceColor="white" buildingOrange={true} />

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className={`text-[15px] font-medium transition-colors ${
                    active === link ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action */}
        <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
          Get started
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left side Yellow */}
      <div className="md:w-[55%] bg-[#004f8a] flex flex-col justify-center px-10 md:px-24 pt-40 pb-20 text-white">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-white/60">-- THE NEW STANDARD IN PRECONSTRUCTION --</p>
          <h1 className="text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] mb-10 tracking-tight text-white">
            AI-Powered<br />Preconstruction Risk<br />Management Platform
          </h1>
          <p className="text-[16px] text-white/80 max-w-md mb-10 leading-relaxed font-medium">
            Transform drawings & specifications into structured scopes, risk insights, and traceable decisions — automatically. <strong className="text-white">Wyre AI</strong> helps contractors identify scope gaps, reduce RFIs, and protect margins before construction even begins.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
              Get started
            </button>
            <button className="flex items-center gap-3 font-bold text-sm group">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors overflow-hidden p-2">
                 <Logo className="w-full h-full" forceColor="white" buildingOrange={true} />
              </div>
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right side Image */}
      <div className="md:w-[45%] relative min-h-[500px]">
        <img src={heroWorker} alt="Hero Worker" className="w-full h-full object-cover" />
        
        {/* Floating cards / elements from image */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="absolute bottom-20 left-10 bg-[#F7F7EC]/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-[280px]"
        >
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-500 text-sm">★</span>)}
          </div>
          <p className="text-[13px] text-black/60 font-medium mb-4 leading-relaxed">
            "Wyre AI has completely transformed our preconstruction workflow. We're catching scope gaps in minutes that used to take days of manual review."
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">MARCUS REED</p>
              <p className="text-[11px] text-black/40">V.P. of Preconstruction</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>
          </div>
        </motion.div>

        {/* Small box details from image */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#004f8a]/80" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-10 md:px-24" style={{ backgroundColor: BG_LIGHT }}>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
           <p className="text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-black/40">-- WHO WE ARE --</p>
           <h2 className="text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] mb-8 tracking-tight">
             Built by Builders. Powered by AI. Focused on Preconstruction.
           </h2>
           <p className="text-[18px] text-black/70 italic border-l-4 border-black pl-4 mb-6 font-medium">
             "The biggest risk in construction isn't what happens in the field — it's what gets overlooked or missed in the documents before the shovel hits the ground."
           </p>
           <p className="text-[16px] text-black/50 mb-12 max-w-lg leading-relaxed">
             Wyre AI was created to solve real-world preconstruction challenges. We combine deep industry expertise with cutting-edge AI to help teams plan smarter, work faster, and reduce risk — long before the first shovel hits the ground.
           </p>

           <div className="flex gap-16 items-center mt-12 pt-12 border-t border-black/10">
             <div className="flex-1">
               <p className="text-4xl font-bold mb-1">4.9</p>
               <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Rate Client</p>
             </div>
             <div className="w-[1px] h-12 bg-black/10 hidden md:block" />
             <div className="flex-1">
               <p className="text-4xl font-bold mb-1">850+</p>
               <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Total Project Done</p>
             </div>
             <div className="w-[1px] h-12 bg-black/10 hidden md:block" />
             <div className="flex-1">
               <p className="text-4xl font-bold mb-1">$5.87B</p>
               <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Total Revenue</p>
             </div>
           </div>
        </div>

        <div className="relative group overflow-hidden rounded-[40px] shadow-2xl">
          <img src={projectHotel} alt="About Us" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const [hovered, setHovered] = useState(null);
  const solutions = [
    { 
      title: 'Smarter Scoping', 
      id: '01',
      desc: 'Instantly analyze drawings & specifications to identify every scope of work automatically.'
    },
    { 
      title: 'Workflow Optimization', 
      id: '02',
      desc: 'Streamline tasks, cut down on manual entry, and save hours with AI-driven document mapping.'
    },
    { 
      title: 'Better Decisions, Faster', 
      id: '03',
      desc: 'Turn complex documents into simple, actionable insights ready for your team to review.'
    },
    { 
      title: 'Risk Management', 
      id: '04',
      desc: 'Identify scope gaps and conflicts before bidding or construction even begins.'
    },
    { 
      title: 'Strategic Planning', 
      id: '05',
      desc: 'Enhance your preconstruction strategy with data-driven insights from thousand of pages.'
    },
  ];

  return (
    <section id="services" className="py-40 bg-[#1A1A1A] text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10">
          <div>
            <p className="text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-white/30">-- WHAT WE DO --</p>
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold leading-tight tracking-tight max-w-2xl">
              AI tools built for the way you actually work!
            </h2>
          </div>
          <p className="text-[16px] text-white/40 max-w-sm mt-12 leading-relaxed">
            Eliminate risk and ambiguity from your preconstruction workflow with purpose-built intelligence.
          </p>
        </div>

        <div className="flex flex-col relative z-10">
          {solutions.map((s) => (
            <motion.div
               key={s.id}
               className="group border-t border-white/10 last:border-b py-10 cursor-pointer relative"
               onMouseEnter={() => setHovered(s.id)}
               onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="flex items-center gap-10">
                   <span className="text-xl font-bold text-white/20">{s.id}</span>
                   <h3 className={`text-[clamp(24px,4vw,48px)] font-semibold transition-all duration-300 ${
                      hovered === s.id ? 'text-white translate-x-4' : 'text-white/40'
                   }`}>
                     {s.title}
                   </h3>
                </div>
                
                <AnimatePresence>
                  {hovered === s.id && (
                    <motion.div
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: 20 }}
                       className="max-w-md"
                    >
                       <p className="text-[15px] text-white/60 leading-relaxed">
                         {s.desc}
                       </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="hidden lg:block relative w-12 h-12">
                   <motion.div
                      animate={{ 
                        rotate: hovered === s.id ? 45 : 0,
                        backgroundColor: hovered === s.id ? '#FF6B35' : 'transparent',
                        borderColor: hovered === s.id ? '#FF6B35' : 'rgba(255,255,255,0.2)'
                      }}
                      className="w-full h-full border rounded-full flex items-center justify-center transition-colors"
                   >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                     </svg>
                   </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Summary() {
  const products = [
    {
      id: 'scopes',
      title: 'Wyre Scopes',
      tagline: 'Transform construction documents into structured scopes.',
      desc: 'Wyre Scopes analyzes your entire document set, identifies every scope of work, and delivers organized, traceable scope packages ready for your team.',
      features: ['Scope Package Identification', 'Scope Item Generation', 'Traceable References'],
      component: <ScopeAnimation />,
      label: 'New Generalizing'
    },
    {
      id: 'check',
      title: 'Wyre Check',
      tagline: "RFIs don't start in the field — they start in the documents.",
      desc: 'AI-assisted document validation platform that identifies conflicts and gaps between drawings and specs to protect margins.',
      features: ['Precon RFI Generation', 'Discrepancy Detection', 'Advanced Document Search'],
      component: <CheckAnimation />,
      label: 'Private Project'
    }
  ];

  return (
    <section id="project" className="py-40 px-10 md:px-24" style={{ backgroundColor: BG_LIGHT }}>
       <div className="max-w-[1400px] mx-auto">
         {/* Separator */}
         <div className="h-[1px] bg-black/5 mb-24 w-full" />
         
         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
           <div>
             <p className="text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-black/30">-- OUR PRODUCTS --</p>
             <h2 className="text-[clamp(32px,5vw,64px)] font-bold leading-tight tracking-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
               Two Products. One Mission.
             </h2>
           </div>
           
           <p className="text-[16px] text-black/40 max-w-sm mt-12 leading-relaxed">
             Eliminate risk and ambiguity from your preconstruction workflow with our purpose-built intelligence.
           </p>
         </div>

         <div className="grid md:grid-cols-2 gap-16">
           {products.map((p, i) => (
             <motion.div 
               key={p.id}
               whileHover={{ y: -10 }}
               duration={0.6}
               className={`flex flex-col gap-10 group ${i === 1 ? 'md:translate-y-20' : ''}`}
             >
               <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative shadow-2xl bg-white border border-black/5 p-8">
                 <div className="w-full h-full scale-[0.85] origin-center">
                    {p.component}
                 </div>
                 
                 <div className="absolute top-8 left-8 w-12 h-12 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center p-2.5 shadow-sm border border-white/50">
                    <Logo className="w-full h-full" buildingOrange={true} />
                 </div>
               </div>

               <div className="px-6 flex flex-col gap-6">
                 <div className="flex flex-wrap gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-black text-white rounded-full">
                     {p.label}
                   </span>
                   {p.features.map(f => (
                      <span key={f} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-black/5 rounded-full border border-black/5">
                        {f}
                      </span>
                   ))}
                 </div>
                 
                 <div>
                    <h3 className="text-3xl font-bold leading-tight mb-2">{p.title}</h3>
                    <p className="text-sm font-bold text-[#FF6B35] mb-4 italic">"{p.tagline}"</p>
                    <p className="text-[16px] text-black/50 leading-relaxed font-light line-clamp-3">
                      {p.desc}
                    </p>
                 </div>

                 <div className="pt-6 border-t border-black/5 group-hover:border-black/20 transition-colors">
                    <button className="text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-4 group">
                       Learn more
                       <span className="w-8 h-[1px] bg-black/20 group-hover:w-12 group-hover:bg-black transition-all"></span>
                    </button>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: 'NOEL ARTHUR', role: 'Foundation worker', img: team1 },
    { name: 'ESTHER HOWARD', role: 'Ready building worker', img: team2 },
    { name: 'JIMMY WILSON', role: 'Ready CIA', img: team3 },
  ];

  return (
    <section className="py-60 px-10 md:px-24" style={{ backgroundColor: BG_LIGHT }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Separator */}
        <div className="h-[1px] bg-black/5 mb-32 w-full" />
        
        <div className="grid md:grid-cols-2 gap-20 mb-32 items-end">
          <div>
            <p className="text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-black/40">-- OUR TEAM --</p>
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold leading-tight tracking-tight">
              Meet the industry experts building smarter solutions
            </h2>
          </div>
          <div className="flex justify-end">
             <p className="text-[16px] text-black/40 max-w-xs text-right italic leading-relaxed">
               Our team combines deep construction knowledge with world-class AI engineering to solve the industry's toughest challenges.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
             <motion.div
               key={m.name}
               whileHover={{ y: -10 }}
               className="rounded-[40px] overflow-hidden group shadow-xl"
               style={{ backgroundColor: BG_LIGHT }}
             >
               <div className="h-[300px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
               </div>
               <div className="p-8">
                  <div className="bg-black/5 px-4 py-2 rounded-xl inline-block mb-3">
                    <p className="font-bold text-sm tracking-tight">{m.name}</p>
                  </div>
                  <p className="text-[11px] text-black/40 font-bold uppercase tracking-widest">{m.role}</p>
               </div>
             </motion.div>
          ))}

          <div className="bg-[#1A1A1A] rounded-[40px] p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group border border-white/5">
             <div className="absolute top-6 right-6 w-12 h-12 border-4 border-white/10 group-hover:scale-125 transition-transform" />
             <div className="absolute top-10 right-10 w-12 h-12 border-4 border-white/10 group-hover:scale-125 transition-transform" />
             
             <div>
               <h3 className="text-3xl font-bold leading-tight mb-4">Do you want to see all member?</h3>
               <button className="text-[12px] font-bold tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-colors">See all member</button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact-us" className="bg-[#1A1A1A] text-white py-40 px-10 md:px-24">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <p className="text-[13px] font-bold tracking-[0.2em] mb-10 uppercase text-white/40">-- READY TO WORK WITH US? --</p>
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] mb-12 tracking-tight">
            Ready to eliminate risk from your next project?
          </h2>
          <button className="bg-[#F7F7EC] text-black px-10 py-5 rounded-full text-base font-bold shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform active:scale-95">
            Book a Demo &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-12 mt-10">
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">Office Address</p>
             <p className="text-[14px] font-medium leading-relaxed">
               123 Tech Way,<br />San Francisco, CA 94105
             </p>
           </div>
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">Phone Number</p>
             <p className="text-[14px] font-medium leading-relaxed">
               +1 415 555 0123
             </p>
           </div>
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">Email</p>
             <p className="text-[14px] font-medium leading-relaxed">
               hello@wyreai.io
             </p>
           </div>
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">Website</p>
             <p className="text-[14px] font-medium leading-relaxed underline">
               www.wyreai.io
             </p>
           </div>
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">LinkedIn</p>
             <p className="text-[14px] font-medium leading-relaxed">
               @wyre-ai
             </p>
           </div>
           <div>
             <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-white/30 uppercase">X</p>
             <p className="text-[14px] font-medium leading-relaxed">
               @wyre_ai
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 px-10 md:px-24">
       <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 h-[200px] md:h-auto">
            <h2 className="text-[clamp(60px,20vw,240px)] font-black text-white/5 tracking-tighter absolute left-1/2 -translate-x-1/2 -z-0 pointer-events-none uppercase">WYRE AI</h2>
            <div className="hidden md:block" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-bold text-white/30 relative z-10 pt-10 border-t border-white/5">
             <a href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</a>
             <p className="uppercase">Copyright 2025 WYRE AI. All Rights Reserved</p>
             <a href="#" className="hover:text-white transition-colors uppercase">Term & Condition</a>
          </div>
       </div>
    </footer>
  );
}

export default function CONSPage() {
  return (
    <div className="min-h-screen font-jakarta" style={{ backgroundColor: BG_LIGHT }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Summary />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
