import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../components/Logo';

// Assets
import heroImg from '../../assets/cons/v4_hero.jpg';
import project1 from '../../assets/cons/project_hotel.png';
import project2 from '../../assets/cons/project_school.png';
import team1 from '../../assets/cons/team_1.png';
import team2 from '../../assets/cons/team_2.png';
import team3 from '../../assets/cons/team_3.png';

const ORANGE = '#E67E22';

/* ─────────────────── STYLES ─────────────────── */

const SHAPES = {
  TL: 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)',
  TR: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
  BL: 'polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0 calc(100% - 60px))',
  BR: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)',
  TR_BL: 'polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 80px 100%, 0 calc(100% - 80px))',
  TL_BR: 'polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)',
};

/* ─────────────────── COMPONENTS ─────────────────── */

function Navbar() {
  const links = ['Home', 'About', 'Products', 'Team', 'Contact'];
  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-white/80 backdrop-blur-xl border-b border-black/5 h-20">
      <div className="max-w-[1440px] mx-auto h-full px-10 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Logo className="h-7 w-auto" forceColor="black" buildingOrange={true} />
        </div>
        
        {/* Center: Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <li key={l}>
              <a href="#" className={`text-[12px] font-black uppercase tracking-[0.2em] ${l === 'Home' ? 'text-black' : 'text-black/30 hover:text-black'} transition-colors`}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-6">
           <button className="w-10 h-10 flex items-center justify-center bg-black/5 rounded-xl hover:bg-black/10 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z M3 6h18 M16 10a4 4 0 01-8 0" /></svg>
           </button>
           <button className="bg-black text-white px-8 py-3 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#E67E22] transition-colors shadow-2xl">
              Log In
           </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-[180px] pb-32 bg-[#F8F9FA] overflow-hidden min-h-screen">
      <div className="max-w-[1440px] mx-auto px-10 relative z-10 flex flex-col items-center">
        
        {/* AI-POWERED Pill */}
        <div className="inline-flex items-center gap-4 mb-16 px-6 py-2 bg-white rounded-full border border-black/5 shadow-sm">
           <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black opacity-20 italic">AI-POWERED</span>
           <span className="w-4 h-[1px] bg-black/10" />
           <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black italic">PRECONSTRUCTION</span>
        </div>
        
        <h1 className="text-[clamp(44px,9vw,120px)] font-black text-slate-950 leading-[0.85] tracking-tighter uppercase text-center mb-12">
           SEE EVERY RISK.<br />
           <span className="text-slate-200">BEFORE YOU BUILD.</span>
        </h1>
        
        <p className="max-w-xl text-center text-lg text-slate-400 font-bold italic mb-16 opacity-60 leading-relaxed uppercase tracking-tight">
           Wyre AI turns drawings and specifications into structured scopes, risk insights, and traceable decisions — automatically.
        </p>
        
        <button className="bg-[#E67E22] text-white px-16 py-7 rounded-2xl text-[14px] font-black uppercase tracking-[0.3em] shadow-[0_30px_60px_-15px_rgba(230,126,34,0.4)] hover:scale-105 transition-all mb-32">
           Get started now
        </button>

        {/* 3-Image Grid */}
        <div className="grid grid-cols-3 gap-10 items-center w-full max-w-[1240px] pb-20">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="h-[450px] shadow-2xl relative overflow-hidden bg-slate-100"
             style={{ clipPath: SHAPES.TL }}
           >
              <img src={heroImg} className="w-full h-full object-cover grayscale opacity-80" />
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2 }}
             className="h-[550px] shadow-3xl relative z-20 scale-105 bg-slate-200"
             style={{ clipPath: SHAPES.TR_BL }}
           >
              <img src={project1} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="h-[450px] shadow-2xl relative translate-y-10 bg-slate-100"
             style={{ clipPath: SHAPES.TR }}
           >
              <img src={project2} className="w-full h-full object-cover grayscale opacity-80" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ subtitle, title, description }) {
  return (
     <div className="text-center mb-32 flex flex-col items-center">
        <div className="inline-flex items-center gap-4 mb-10 px-6 py-2 bg-black/5 rounded-full border border-black/5 shadow-sm">
           <div className="w-2 h-2 bg-[#E67E22] rounded-full" />
           <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">{subtitle}</p>
        </div>
        <h2 className="text-[clamp(40px,7vw,90px)] font-black tracking-tighter uppercase leading-[0.8] mb-12 text-slate-950">
           {title}
        </h2>
        {description && (
          <p className="max-w-2xl mx-auto text-lg font-bold italic opacity-40 leading-relaxed uppercase tracking-tight italic pt-10 border-t border-black/5 whitespace-pre-line">
             {description}
          </p>
        )}
     </div>
  );
}

function Stats() {
  return (
    <section className="py-44 bg-white relative z-0">
       <div className="max-w-[1440px] mx-auto px-10">
          <SectionHeading 
            subtitle="About Our Company"
            title={<>Built on Experience.<br />Driven by Quality.</>}
            description={"With over 15 years in the industry, we bring a hands-on,\nclient-first approach to every project."}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             <div className="bg-[#F8F9FA] p-12 flex flex-col justify-between shadow-2xl relative" style={{ clipPath: SHAPES.TL }}>
                <Logo className="h-10 w-auto mb-20" forceColor="black" buildingOrange={true} />
                <h3 className="text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">1600k+</h3>
             </div>

             <div className="flex flex-col gap-10">
                <div className="bg-white border border-slate-100 p-12 text-center flex flex-col items-center shadow-xl" style={{ clipPath: SHAPES.TR }}>
                   <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-8">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                   </div>
                   <h4 className="text-xl font-black uppercase text-slate-950">Modern Tech</h4>
                </div>
                <div className="bg-white border border-slate-100 p-12 text-center flex flex-col items-center shadow-xl" style={{ clipPath: SHAPES.BL }}>
                   <h4 className="text-6xl font-black tracking-tighter text-slate-950 mb-2">25m</h4>
                   <p className="text-[10px] font-black uppercase text-[#E67E22]">Client Success</p>
                </div>
             </div>

             <div className="bg-slate-950 p-14 flex flex-col justify-between text-white shadow-3xl" style={{ clipPath: SHAPES.TR }}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-20 border border-white/10">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                   <h4 className="text-8xl font-black tracking-tighter mb-4 text-white">98%</h4>
                   <p className="text-xs font-black uppercase tracking-[0.3em] opacity-40">Success Rate</p>
                </div>
             </div>

             <div className="bg-[#F8F9FA] p-12 flex flex-col justify-between shadow-2xl h-full" style={{ clipPath: SHAPES.BR }}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-16 shadow-xl shadow-black/5">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 100-8 4 4 0 000 8z" /></svg>
                </div>
                <div>
                   <h4 className="text-2xl font-black uppercase text-slate-950 leading-none mb-6">Expert Talent</h4>
                   <button className="text-[11px] font-black uppercase tracking-widest border-b-2 border-slate-950 pb-1 hover:border-[#E67E22] transition-colors">More Details</button>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-44 bg-[#F8F9FA] overflow-hidden relative z-0">
       <div className="max-w-[1440px] mx-auto px-10 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
             <div className="absolute -inset-10 bg-slate-200 opacity-20 -rotate-3 group-hover:rotate-0 transition-transform duration-1000" style={{ clipPath: SHAPES.TR }} />
             <div className="relative h-[800px] shadow-3xl bg-slate-300 overflow-hidden group" style={{ clipPath: SHAPES.TR }}>
                <img src={heroImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             </div>
          </div>
          
          <div>
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-16 h-[2px] bg-[#E67E22]" />
                 <p className="text-[12px] font-black uppercase tracking-[0.4em] text-[#E67E22]">Why Choose Us</p>
              </div>
              <h2 className="text-[clamp(40px,7vw,100px)] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter mb-14">
                 Why Builders<br />Trust Wyre AI
              </h2>
              <div className="flex flex-col gap-10">
                 {[
                   { t: 'Experienced Team', d: 'Decades of experience with certified specialists.' },
                   { t: 'Precision Planning', d: 'Sustainable and innovative solutions for construction.' },
                   { t: 'Focus on Clients', d: 'Collaborative results aligned with your vision.' },
                 ].map((f, i) => (
                   <div key={i} className="bg-white p-12 flex items-start gap-10 shadow-xl border border-black/5 group" style={{ clipPath: SHAPES.TR }}>
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-slate-300 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">0{i+1}</div>
                      <div>
                         <h4 className="text-2xl font-black uppercase text-slate-950 mb-3">{f.t}</h4>
                         <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{f.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
          </div>
       </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-44 bg-white relative z-0">
       <div className="max-w-[1440px] mx-auto px-10">
          <SectionHeading 
            subtitle="Our Process"
            title={<>Our 4-Step Process<br />To Successful Build.</>}
            description={"At Wyre AI, we don't just build — we design for success."}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {['Vision Discovery', 'Budget Planning', 'Master Construction', 'Final Delivery'].map((step, i) => (
                <div key={i} className="relative group pt-16">
                   <span className="absolute top-0 left-0 text-[180px] font-black text-slate-100 opacity-50 italic select-none leading-none -z-0">0{i+1}</span>
                   <div className="relative z-10 p-14 bg-white border border-slate-100 shadow-xl group-hover:-translate-y-4 shadow-black/5 transition-all" style={{ clipPath: SHAPES.TR }}>
                      <h4 className="text-2xl font-black uppercase text-slate-950 mb-6 leading-tight">{step}</h4>
                      <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Systematic approach ensuring project excellence.</p>
                      <div className="mt-14 w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-[#E67E22] transition-all duration-1000" />
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-44 bg-[#F8F9FA] relative z-0">
       <div className="max-w-[1440px] mx-auto px-10">
          <SectionHeading 
            subtitle="Our Team"
            title={<>The Experts Behind<br />Wyre AI</>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
             {[team1, team2, team3].map((img, i) => (
                <div key={i} className="group flex flex-col items-center">
                   <div className="aspect-[4/5] w-full shadow-3xl overflow-hidden shadow-black/10 transition-all duration-1000 border border-black/5" style={{ clipPath: SHAPES.TL }}>
                      <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                   </div>
                   <h4 className="text-4xl font-black uppercase tracking-tighter mt-12 mb-2 text-slate-950">Expert Specialist</h4>
                   <p className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Civil Lead</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-44 bg-white relative z-0">
       <div className="max-w-[1440px] mx-auto px-10">
          <SectionHeading 
            subtitle="Testimonials"
            title={<>What our<br />Clients Say</>}
          />
          
          <div className="max-w-[1240px] mx-auto bg-[#F8F9FA] p-24 relative shadow-3xl overflow-hidden group" style={{ clipPath: SHAPES.TR_BL }}>
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="aspect-square relative overflow-hidden shadow-2xl" style={{ clipPath: SHAPES.TL }}>
                   <img src={team1} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="text-left">
                   <div className="flex gap-2 mb-10">
                      {[1,2,3,4,5].map(s => <div key={s} className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#E67E22] font-black">★</div>)}
                   </div>
                   <p className="text-[clamp(24px,4vw,44px)] font-black leading-[1.05] tracking-tighter uppercase mb-14 italic text-slate-950">
                      "Unmatched accuracy. Catch scope gaps in minutes before it's too late!"
                   </p>
                   <div>
                      <h5 className="text-3xl font-black uppercase text-slate-950 leading-none">Marcus Reed</h5>
                      <p className="text-[12px] font-black uppercase tracking-[0.3em] text-[#E67E22] mt-3">Director @ Wyre Partners</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-44 bg-white flex justify-center relative z-0">
       <div className="w-full max-w-[1440px] px-10">
          <div className="bg-[#E6DCCF] p-40 text-center relative overflow-hidden group shadow-3xl" style={{ clipPath: SHAPES.TR_BL }}>
             <h2 className="text-[clamp(40px,8vw,120px)] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter mb-16">
                Ready to Lead<br />Preconstruction?
             </h2>
             <div className="flex items-center justify-center gap-10">
                <button className="bg-slate-950 text-white px-20 py-8 rounded-[40px] text-sm font-black uppercase tracking-[0.4em] hover:bg-[#E67E22] hover:scale-105 transition-all shadow-2xl">Request Demo</button>
             </div>
          </div>
       </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 pt-44 pb-20 px-10 text-white relative z-0">
       <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-44">
             <div>
                <Logo className="h-10 w-auto mb-20" forceColor="white" buildingOrange={true} />
                <h2 className="text-[clamp(50px,9vw,140px)] font-black uppercase tracking-tighter leading-[0.8] italic mb-20 text-white/90 uppercase">Have a Project?<br /><span className="text-white/10 not-italic uppercase">Let's Build it.</span></h2>
                <div className="relative max-w-2xl">
                   <input type="email" placeholder="Your Email address..." className="w-full bg-white/5 border-2 border-white/10 rounded-[60px] py-10 px-14 text-xl focus:outline-none focus:border-[#E67E22] transition-all" />
                   <button className="absolute right-6 top-6 bottom-6 bg-[#E67E22] text-white px-10 rounded-[40px] text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Let's Talk</button>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-20 pt-20">
                <div className="flex flex-col gap-6 uppercase">
                   <span className="text-[#E67E22] font-black tracking-widest text-[10px]">Contact</span>
                   <span className="text-2xl text-white tracking-tighter font-black lowercase">hello@wyreai.io</span>
                </div>
                <div className="flex flex-col gap-6 uppercase">
                   <span className="text-[#E67E22] font-black tracking-widest text-[10px]">Location</span>
                   <span className="text-sm text-white/40 leading-relaxed font-bold">New Jersey, USA</span>
                </div>
             </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 opacity-10 text-[10px] font-black uppercase tracking-[0.5em] text-center">
             <p>© 2025 WYRE AI TECHNOLOGY GROUP. ALL RIGHTS RESERVED.</p>
          </div>
       </div>
    </footer>
  );
}

export default function V5Page() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-jakarta overflow-x-hidden selection:bg-[#E67E22] selection:text-white isolate">
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Process />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
