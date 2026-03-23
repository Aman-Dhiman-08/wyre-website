import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../components/Logo';
import heroImg from '../../assets/cons/v4_hero.jpg';
import projectHotel from '../../assets/cons/project_hotel.png';
import projectSchool from '../../assets/cons/project_school.png';
import team1 from '../../assets/cons/team_1.png';
import team2 from '../../assets/cons/team_2.png';
import team3 from '../../assets/cons/team_3.png';

/* ─────────────────── COMPONENTS ─────────────────── */

function Navbar() {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'About', 'Products', 'Team', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center px-10 py-10 transition-all">
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Logo className="h-8 w-auto" forceColor="white" buildingOrange={true} />
        </div>

        <ul className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#FF6B35] ${
                  active === link ? 'text-[#FF6B35]' : 'text-white/40'
                }`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-white text-black px-10 py-4 rounded-md text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#FF6B35] hover:text-white transition-all shadow-xl">
               Get started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Hero Background" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-10 pt-32 pb-24">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           className="max-w-[750px]"
        >
          <p className="text-[12px] font-black tracking-[0.3em] text-[#FF6B35] uppercase italic mb-8">-- THE NEW STANDARD IN PRECONSTRUCTION --</p>
          
          <h1 className="text-[clamp(28px,5vw,56px)] font-semibold leading-[1.2] text-white mb-10 tracking-tight uppercase">
            AI-Powered<br />Preconstruction Risk<br />Management Platform
          </h1>
          
          <p className="text-[17px] text-white/70 max-w-xl mb-12 leading-relaxed font-semibold">
             Transform drawings & specifications into structured scopes, risk insights, and traceable decisions — automatically. <span className="text-white">Wyre AI</span> helps contractors identify scope gaps, reduce RFIs, and protect margins before construction even begins.
          </p>

          <div className="flex items-center gap-6">
             <button className="bg-[#FF6B35] text-white px-10 py-5 rounded-md text-[13px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-black transition-all">
                Get started &rarr;
             </button>
             <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-md text-[13px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl">
                Watch Video
             </button>
          </div>
        </motion.div>
      </div>

      {/* Pure Anchor bar */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/60 backdrop-blur-3xl border-t border-white/5 hidden lg:flex items-center">
         <div className="max-w-[1440px] mx-auto w-full px-10 flex justify-between items-center">
            <div className="flex items-center gap-12 text-white/40">
               {[
                 { l: 'Scope Gaps', i: '🔍' },
                 { l: 'Risk Analysis', i: '📊' },
                 { l: 'Automated Insight', i: '⚡' },
                 { l: 'Margin Protection', i: '🛡️' },
               ].map(item => (
                 <div key={item.l} className="flex items-center gap-4 group cursor-pointer">
                    <span className="text-xl group-hover:scale-125 transition-transform opacity-60 group-hover:opacity-100">{item.i}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{item.l}</span>
                 </div>
               ))}
            </div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">-- Redefining Preconstruction with AI --</p>
         </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-44 px-10 bg-white">
       <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div>
             <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-12 h-[1px] bg-[#FF6B35]" />
                  <p className="text-[12px] font-black tracking-[0.2em] text-[#FF6B35] uppercase italic">Who We Are</p>
                </div>
                <h2 className="text-4xl font-semibold leading-[1.2] tracking-tight uppercase text-slate-900 pr-10">
                  Built by Builders. Powered by AI. Focused on Preconstruction.
                </h2>
                <div className="w-40 h-4 bg-slate-900 my-10" />
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-semibold italic border-l-4 border-[#FF6B35] pl-6">
                  "The biggest risk in construction isn't what happens in the field — it's what gets overlooked or missed in the documents before the shovel hits the ground."
                </p>
                <p className="text-base text-slate-500 mb-14 leading-relaxed font-medium">
                  Wyre AI was created to solve real-world preconstruction challenges. We combine deep industry expertise with cutting-edge AI to help teams plan smarter, work faster, and reduce risk — long before the first shovel hits the ground.
                </p>
                
                <div className="grid grid-cols-3 gap-10 py-10 border-t border-slate-100">
                   <div>
                      <p className="text-4xl font-bold text-slate-900 mb-2">4.9</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6B35]">Rating</p>
                   </div>
                   <div>
                      <p className="text-4xl font-bold text-slate-900 mb-2">850+</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6B35]">Projects</p>
                   </div>
                   <div>
                      <p className="text-4xl font-bold text-slate-900 mb-2">$5.8B</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6B35]">Revenue Protected</p>
                   </div>
                </div>
                <button className="w-fit bg-slate-900 text-white px-14 py-6 mt-10 font-black uppercase tracking-[0.2em] text-[12px] hover:bg-[#FF6B35] transition-all rounded-md">
                  View Our Portfolio
                </button>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 h-[700px]">
             <div className="h-full rounded-[40px] overflow-hidden shadow-2xl relative">
                <img src={projectHotel} className="w-full h-full object-cover" alt="Focus 1" />
                <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-all" />
             </div>
             <div className="grid grid-rows-2 gap-8 h-full">
                <div className="rounded-[40px] overflow-hidden shadow-xl relative">
                   <img src={team1} className="w-full h-full object-cover" alt="Focus 2" />
                </div>
                <div className="rounded-[40px] overflow-hidden shadow-xl relative">
                   <img src={projectSchool} className="w-full h-full object-cover" alt="Focus 3" />
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-44 bg-[#0a0f1c] text-white">
       <div className="max-w-[1440px] mx-auto px-10">
          <div className="text-center mb-40">
             <p className="text-[12px] font-black tracking-[0.3em] text-[#FF6B35] uppercase italic mb-8">-- WHAT WE DO --</p>
             <h2 className="text-[clamp(24px,4vw,48px)] font-semibold leading-none tracking-tight uppercase mb-10">
                AI tools built for the way<br />you actually work!
             </h2>
             <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed italic">
                Eliminate risk and ambiguity from your preconstruction workflow with purpose-built intelligence.
             </p>
          </div>

          <div className="flex flex-col gap-6">
                   {[
                     { t: 'Smarter Scoping', d: 'Instantly analyze drawings & specifications to identify every scope of work automatically.' },
                     { t: 'Workflow Optimization', d: 'Streamline tasks, cut down on manual entry, and save hours with AI-driven document mapping.' },
                     { t: 'Better Decisions, Faster', d: 'Turn complex documents into simple, actionable insights ready for your team to review.' },
                     { t: 'Risk Management', d: 'Identify scope gaps and conflicts before bidding or construction even begins.' },
                   ].map((s, i) => (
                     <div key={i} className="group flex flex-col p-10 border border-white/5 bg-white/[0.02] hover:bg-[#FF6B35] transition-all duration-500 rounded-[30px] cursor-pointer">
                        <div className="flex justify-between items-center mb-8">
                           <span className="text-3xl font-black text-white/5 opacity-40 italic">0{i+1}</span>
                           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                 <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                           </div>
                        </div>
                        <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{s.t}</h4>
                        <p className="text-sm text-white/40 group-hover:text-white transition-colors leading-relaxed font-bold">
                           {s.d}
                        </p>
                     </div>
                   ))}
                </div>
       </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: 'Alex Smith', role: 'Architectural Director', img: team1 },
    { name: 'Sarah Brown', role: 'Project Manager', img: team2 },
    { name: 'David Wilson', role: 'Senior Designer', img: team3 },
    { name: 'Emma Davis', role: 'Chief Engineer', img: team1 },
    { name: 'James White', role: 'Site Manager', img: team2 },
    { name: 'Olivia Black', role: 'Project Analyst', img: team3 },
    { name: 'Daniel Gray', role: 'Safety Director', img: team1 },
    { name: 'Sophia Blue', role: 'Quality Control', img: team2 },
  ];
  return (
    <section id="team" className="py-44 bg-white">
       <div className="max-w-[1440px] mx-auto px-10">
          <div className="text-center mb-32">
             <p className="text-[12px] font-black tracking-[0.2em] text-[#FF6B35] uppercase italic mb-8">Best Building</p>
             <h2 className="text-[clamp(24px,4vw,48px)] font-semibold leading-none tracking-tight uppercase text-slate-900 mb-8">
                Meet the industry experts building smarter solutions
             </h2>
             <div className="w-24 h-4 bg-slate-900 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { n: 'MARCUS REED', r: 'V.P. of Preconstruction', i: team1 },
               { n: 'ESTHER HOWARD', r: 'Ready building worker', i: team2 },
               { n: 'JIMMY WILSON', r: 'Ready CIA', i: team3 },
             ].map((m, i) => (
               <motion.div 
                  key={i}
                  whileHover={{ y: -20 }}
                  className="group rounded-[40px] overflow-hidden bg-white shadow-xl hover:shadow-3xl transition-all duration-500"
               >
                  <div className="h-[400px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img src={m.i} className="w-full h-full object-cover" alt={m.n} />
                  </div>
                  <div className="p-10 border-t border-slate-50">
                     <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-slate-900">{m.n}</h4>
                     <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">{m.r}</p>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-44 bg-slate-50 relative overflow-hidden">
       <div className="max-w-[1440px] mx-auto px-10 grid lg:grid-cols-5 gap-20 relative z-10">
          <div className="lg:col-span-2">
             <p className="text-[12px] font-black tracking-[0.3em] text-[#FF6B35] uppercase italic mb-8">-- Visit Our Office --</p>
             <h2 className="text-4xl font-semibold tracking-tight uppercase text-slate-900 mb-14 leading-[1.2]">
                Visit Our Innovative Global HQ
             </h2>
             <div className="flex flex-col gap-8">
                {[
                  { label: 'Address', val: '123 Tech Way, SF, CA' },
                  { label: 'Call Us Now', val: '+1 415 555 0123' },
                  { label: 'Email', val: 'hello@wyreai.io' },
                ].map(item => (
                  <div key={item.label} className="bg-white p-12 rounded-[40px] shadow-3xl flex items-center gap-10 hover:scale-105 transition-all">
                     <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl">📍</div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-slate-300 tracking-widest mb-1">{item.label}</p>
                        <p className="text-xl font-black text-slate-900">{item.val}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="lg:col-span-3">
             <div className="h-[750px] bg-white rounded-[60px] shadow-3xl p-4 overflow-hidden border-4 border-white">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01915!2d-122.401!3d37.788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                    className="w-full h-full grayscale opacity-80 rounded-[50px]"
                    loading="lazy"
                 ></iframe>
             </div>
          </div>
       </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-44 bg-slate-900 text-white relative overflow-hidden">
       <div className="max-w-[1440px] mx-auto text-center px-10 relative z-10">
          <p className="text-[12px] font-black tracking-widest text-[#FF6B35] uppercase italic mb-12">Reviews</p>
          <h2 className="text-4xl font-semibold tracking-tight uppercase mb-24 text-center">Why our customers love us</h2>
          
          <div className="max-w-[900px] mx-auto text-center">
             <p className="text-xl md:text-2xl font-medium leading-tight tracking-tight mb-20 px-10">
                "Wyre AI has completely transformed our preconstruction workflow. We're catching scope gaps in minutes that used to take days of manual review."
             </p>
             <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-[#FF6B35] overflow-hidden shadow-2xl shadow-orange-500/20">
                   <img src={team1} className="w-full h-full object-cover" alt="Reviewer" />
                </div>
                <div>
                   <h5 className="text-2xl font-black uppercase tracking-tight">MARCUS REED</h5>
                   <p className="text-[11px] font-black text-[#FF6B35] uppercase tracking-widest mt-2">V.P. of Preconstruction</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'How does Wyre AI identify scope gaps?',
      a: 'Using advanced LLMs trained on millions of pages of construction documents, Wyre AI automatically cross-references specifications, drawings, and other project documents to highlight inconsistencies, missing information, and potential conflicts that could lead to costly change orders or delays.',
    },
    {
      q: 'Can I integrate Wyre AI with my current workflow?',
      a: 'Absolutely. Wyre AI is designed for seamless integration with popular construction management platforms like Procore, Autodesk BIM 360, and other document management systems. Our API also allows for custom integrations to fit your specific needs.',
    },
    {
      q: 'Is my project data secure with Wyre AI?',
      a: 'Data security is our top priority. Wyre AI employs enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with industry standards like SOC2. Your project data remains confidential and is used solely to provide our services.',
    },
    {
      q: 'What kind of projects is Wyre AI best suited for?',
      a: 'Wyre AI is highly effective for a wide range of preconstruction projects, from commercial and residential developments to infrastructure and industrial builds. Its ability to process complex documentation makes it invaluable for projects of any scale where detailed risk assessment and scope management are critical.',
    },
    {
      q: 'How long does it take to get started with Wyre AI?',
      a: 'Onboarding is quick and efficient. Most clients can begin using Wyre AI within a few days, depending on the complexity of their existing systems and the volume of data to be integrated. Our dedicated support team provides comprehensive training and assistance throughout the setup process.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-44 bg-white border-t border-slate-100">
       <div className="max-w-[1000px] mx-auto px-10">
          <div className="text-center mb-24">
             <p className="text-[12px] font-black tracking-[0.2em] text-[#FF6B35] uppercase italic mb-8">FAQ</p>
             <h2 className="text-5xl font-semibold tracking-tight uppercase text-slate-900 mb-8">
                Your Construction<br />Questions - Answered
             </h2>
             <div className="w-24 h-4 bg-slate-900 mx-auto" />
          </div>
          
          <div className="flex flex-col gap-6">
             {faqs.map((item, i) => (
               <div key={i} className="group border border-slate-100 rounded-[30px] p-10 hover:bg-slate-50 transition-all cursor-pointer shadow-sm hover:shadow-xl" onClick={() => toggleFAQ(i)}>
                  <div className="flex items-center justify-between">
                     <h4 className="text-2xl font-black uppercase tracking-tight text-slate-800">{item.q}</h4>
                     <div className={`w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#FF6B35] group-hover:text-white flex items-center justify-center transition-colors ${openIndex === i ? 'bg-[#FF6B35] text-white' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                           <path d={openIndex === i ? "M5 12h14" : "M12 5v14M5 12h14"} />
                        </svg>
                     </div>
                  </div>
                  {openIndex === i && (
                    <p className="text-base text-slate-600 mt-6 leading-relaxed font-medium">{item.a}</p>
                  )}
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-44 relative overflow-hidden group">
       <div className="absolute inset-0 bg-slate-950">
          <img src={projectHotel} className="w-full h-full object-cover opacity-20 scale-110 group-hover:scale-100 transition-transform duration-1000" alt="CTA BG" />
       </div>
       
       <div className="max-w-[1440px] mx-auto px-10 relative z-10 flex flex-col items-center text-center text-white">
          <h2 className="text-[clamp(24px,5vw,60px)] font-semibold uppercase tracking-tight leading-[1] mb-12">
            Ready to Build Your<br />Wyre Vision?
          </h2>
          <div className="flex items-center gap-8">
             <button className="bg-[#FF6B35] text-white px-14 py-7 rounded-md text-base font-black uppercase tracking-[0.2em] shadow-3xl hover:scale-110 transition-all">
                Book a Demo Today
             </button>
          </div>
       </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-44 px-10 text-white border-t border-white/5">
       <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-24">
          <div className="lg:col-span-1">
             <Logo className="h-10 w-auto mb-14" forceColor="white" buildingOrange={true} />
             <p className="text-white/40 leading-relaxed font-bold">
                Redefining preconstruction with AI-powered intelligence.
             </p>
          </div>
          
          <div>
             <h5 className="text-[12px] font-black uppercase tracking-widest mb-12 text-[#FF6B35]">Main Links</h5>
             <ul className="flex flex-col gap-8 font-black text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors uppercase">Our Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">Contact Support</a></li>
             </ul>
          </div>
          
          <div>
             <h5 className="text-[12px] font-black uppercase tracking-widest mb-12 text-[#FF6B35]">Products</h5>
             <ul className="flex flex-col gap-8 font-black text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors uppercase">Wyre Scopes</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">Wyre Check</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">Custom Solutions</a></li>
             </ul>
          </div>
          
          <div>
             <h5 className="text-[12px] font-black uppercase tracking-widest mb-12 text-[#FF6B35]">Contact</h5>
             <ul className="flex flex-col gap-8 font-black text-white/40 text-sm">
             <li>123 Tech Way, SF, CA</li>
             <li>+1 415 555 0123</li>
             <li>hello@wyreai.io</li>
          </ul>
          </div>
       </div>

       <div className="max-w-[1440px] mx-auto mt-44 pt-14 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-40 text-xs font-black uppercase tracking-[0.2em]">
        <p>© 2025 Wyre AI. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-14">
           <a href="#">Privacy Policy</a>
           <a href="#">Terms & Conditions</a>
        </div>
     </div>
    </footer>
  );
}

export default function V4Page() {
  return (
    <div className="min-h-screen bg-white font-jakarta overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
