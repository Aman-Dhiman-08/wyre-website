import { useState } from 'react';
import constructionDeep from '../../assets/c5c_hero.jpg';
import constructionHero from '../../assets/construction-hero.png';
import constructionLight from '../../assets/construction-hero-light.png';

const YELLOW = '#F9BC15'; // Brighter yellow from image
const LIGHT_GRAY = '#F3F4F6';
const DARK_BG = '#181818';
const CARD_BG = '#232323';
const BORDER = '#2e2e2e';

/* ─────────────────── NAVBAR ─────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ['Home', 'Projects', 'About us', 'Services', 'Project'];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-[1240px] flex items-center justify-between">
        {/* Logo */}
        <div className="bg-[#F3F4F6] px-5 py-2.5 rounded-xl border border-gray-100 shadow-sm">
          <span className="font-extrabold text-lg text-gray-900 tracking-tight font-jakarta">C5C</span>
        </div>

        {/* Links Pill */}
        <div className="hidden md:flex bg-[#F3F4F6]/80 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-gray-100 shadow-sm">
          <ul className="flex items-center">
            {links.map((l, i) => (
              <li key={l}>
                <a
                  href="#"
                  className={`text-[13px] font-semibold px-5 py-2 rounded-xl transition-all ${
                    i === 0 ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  } font-jakarta`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-3 rounded-xl text-[14px] font-bold text-gray-900 transition-transform hover:scale-105 shadow-sm font-jakarta"
          style={{ backgroundColor: YELLOW }}
        >
          Contact us
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden bg-white p-2 rounded-lg shadow-sm" onClick={() => setMobileOpen(v => !v)}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            {mobileOpen
              ? <path d="M1 1l20 16M21 1L1 17" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
              : <>
                  <line x1="0" y1="2" x2="22" y2="2" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="9" x2="22" y2="9" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="16" x2="22" y2="16" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                </>
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-20 left-6 right-6 md:hidden bg-white/95 backdrop-blur-lg rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {links.map(l => <a key={l} href="#" className="text-sm font-semibold text-gray-700 font-jakarta">{l}</a>)}
          <a href="#contact" className="text-center py-3 rounded-xl text-sm font-bold text-gray-900 font-jakarta" style={{ backgroundColor: YELLOW }}>Contact us</a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────── HERO ─────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 c5c-grid overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Main Header Text Area */}
        <div className="relative mb-20">
          
          {/* Top Row: Best Construction (left) + Shaping your vision (full) */}
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-2">
            <div className="md:w-1/4">
               <p className="text-[15px] text-gray-500 font-medium leading-tight font-jakarta">
                Best construction<br />
                company in <strong className="text-gray-900 font-extrabold uppercase tracking-tight">Sydney</strong>
              </p>
            </div>
            <h1 className="flex-1 text-[clamp(40px,7.5vw,100px)] font-extrabold leading-[0.9] text-gray-900 tracking-tighter font-jakarta">
              <span style={{ color: YELLOW }}>Shaping</span> your vision
            </h1>
          </div>

          {/* Bottom Row: With precision (left aligned with headline) + description (right) */}
          <div className="flex flex-col md:flex-row items-end gap-10">
            <div className="flex-1">
              <h1 className="text-[clamp(40px,7.5vw,100px)] font-extrabold leading-[0.9] text-gray-900 tracking-tighter font-jakarta">
                With <span style={{ color: YELLOW }}>precision</span>
              </h1>
            </div>
            <div className="md:max-w-xs pb-4">
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed font-jakarta">
                Delivering construction solutions grounded in commitment, communication, collaboration, and customer success...
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-5 -mt-10 mb-20 relative z-20">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 font-jakarta"
            style={{ backgroundColor: YELLOW }}
          >
            Free Quote
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 bg-[#F3F4F6] border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 font-jakarta"
          >
            Our Services
          </a>
        </div>

        {/* Hero Image - Shaped Container */}
        <div className="relative mx-auto max-w-[1200px] mt-10">
          
          {/* The Complex Clipped Image */}
          <div 
            className="relative w-full aspect-[21/9] md:aspect-[24/9] overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 50% 15%, 100% 0%, 100% 85%, 75% 85%, 75% 100%, 25% 100%, 25% 85%, 0% 85%)',
            }}
          >
            <img
              src={constructionDeep}
              alt="Construction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating Block (Absolute positioned relative to the image notch) */}
          <div className="absolute -bottom-6 left-[2%] flex items-center gap-5">
            <div>
              <p className="text-[12px] text-gray-400 font-bold tracking-wider mb-1 font-jakarta uppercase">Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-2xl font-black text-gray-900 font-jakarta">4.8</span>
              </div>
            </div>
            
            {/* Avatars */}
            <div className="flex -space-x-4 pl-2">
              {[
                "https://i.pravatar.cc/150?u=1",
                "https://i.pravatar.cc/150?u=2",
                "https://i.pravatar.cc/150?u=3"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                  <img src={src} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


/* ─────────────────── ABOUT ─────────────────── */


function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Col 1 – text + photo */}
          <div>
            <span
              className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#F5F5F5', color: '#666' }}
            >
              About C5C
            </span>
            <h2 className="text-[28px] font-bold text-gray-900 leading-tight mb-4">What We Stand For</h2>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
              At C5C, we bring together <strong className="text-gray-700">Construction, Commitment, Communication, Collaboration,</strong> and{' '}
              <strong className="text-gray-700">Customer Success</strong> to deliver high-quality construction services. With years of industry
              experience, we ensure every project is handled with precision and professionalism, always delivering beyond expectations.
            </p>

            {/* Signature row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[11px] font-bold text-amber-700 flex-shrink-0">RJ</div>
              <div>
                <p className="text-[12px] font-semibold text-gray-800">Robert Joe</p>
                <p className="text-[11px] text-gray-400 italic">Sophia, Thayer, Turner</p>
              </div>
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
              <img src={constructionLight} alt="construction" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Col 2 – circular badge */}
          <div className="flex items-center justify-center py-10">
            <div
              className="relative flex items-center justify-center"
              style={{ width: 200, height: 200 }}
            >
              {/* Dashed circle */}
              <svg className="absolute inset-0" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="96" stroke={YELLOW} strokeWidth="2" strokeDasharray="6 5" />
              </svg>
              {/* Rotating text */}
              <svg className="absolute inset-0 animate-spin" style={{ animationDuration: '18s' }} viewBox="0 0 200 200">
                <defs>
                  <path id="textCircle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                </defs>
                <text fontSize="9.5" fill="#888" letterSpacing="3.2" fontFamily="Inter,sans-serif" fontWeight="500">
                  <textPath href="#textCircle">KNOW MORE ABOUT US • KNOW MORE ABOUT US •</textPath>
                </text>
              </svg>
              {/* Center content */}
              <div className="flex flex-col items-center z-10">
                <span className="text-3xl font-bold text-gray-900">LOGO</span>
              </div>
            </div>
          </div>

          {/* Col 3 – mission & vision */}
          <div className="flex flex-col gap-5">
            {[
              {
                title: 'Our Mission',
                text: 'To deliver top-quality construction services through clear communication and collaboration, always exceeding client expectations.',
              },
              {
                title: 'Our Vision',
                text: "To be Sydney's leading construction partner by providing innovative, reliable, and customer-focused solutions.",
              },
            ].map(card => (
              <div
                key={card.title}
                className="rounded-2xl p-5"
                style={{ background: '#FAFAFA', border: '1px solid #EFEFEF' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: YELLOW }} />
                  <h3 className="text-[15px] font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SERVICES ─────────────────── */
const SERVICE_CARDS = [
  { title: 'New Builds',         filter: 'brightness(1.05) saturate(1.1)', img: 'hero' },
  { title: 'Knockdown Rebuild',  filter: 'brightness(0.9) sepia(0.25)',    img: 'light' },
  { title: 'Custom Build',       filter: 'brightness(1.0) saturate(1.2)',  img: 'hero' },
  { title: 'Project Management', filter: 'brightness(0.85) hue-rotate(15deg)', img: 'light' },
  { title: 'Design and Apps',    filter: 'brightness(0.9) sepia(0.15)',    img: 'hero' },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <p className="text-center text-[13px] text-gray-400 mb-1">We offer a comprehensive range of construction services designed to meet your needs</p>
        <h2 className="text-center font-bold mb-10" style={{ fontSize: 32 }}>
          <span style={{ color: YELLOW }}>Our</span> <span className="text-gray-900">Services</span>
        </h2>

        {/* Horizontal scroll row */}
        <div
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICE_CARDS.map((s, i) => (
            <div
              key={s.title}
              className="flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group"
              style={{ width: 210, height: 270 }}
            >
              <img
                src={s.img === 'hero' ? constructionHero : constructionLight}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: s.filter }}
              />
              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 35%, rgba(0,0,0,0.1) 70%, transparent 100%)' }}
              />
              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="text-white font-semibold text-[13px]">{s.title}</p>
              </div>
              {/* Highlighted border on active */}
              {i === 3 && (
                <div className="absolute inset-0 rounded-2xl ring-2" style={{ ringColor: YELLOW, boxShadow: `0 0 0 2px ${YELLOW}` }} />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-[13px] font-semibold text-white"
            style={{ backgroundColor: YELLOW }}
          >
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHY C5C ─────────────────── */
const WHY_ITEMS = [
  { num: '01', title: 'Commitment to Excellence',      desc: 'We offer a comprehensive range of construction services designed to meet your needs.' },
  { num: '02', title: 'Comprehensive Communication',   desc: 'We offer a comprehensive range of construction services designed to meet your needs.' },
  { num: '03', title: 'Collaborative Approach',         desc: 'We offer a comprehensive range of construction services designed to meet your needs.' },
  { num: '04', title: 'Customer Success',               desc: 'We offer a comprehensive range of construction services designed to meet your needs.' },
];

function WhyC5C() {
  return (
    <section className="py-20" style={{ backgroundColor: DARK_BG }}>
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <p className="text-center text-[13px] text-gray-500 mb-1">
          We offer a comprehensive range of construction services designed to meet your needs
        </p>
        <h2 className="text-center font-bold text-white mb-12" style={{ fontSize: 32 }}>
          Why choose <span style={{ color: YELLOW }}>C5C</span> ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map(item => (
            <div
              key={item.num}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
            >
              <span className="text-[32px] font-bold leading-none" style={{ color: YELLOW }}>{item.num}</span>
              <h3 className="text-[14px] font-semibold text-white leading-snug">{item.title}</h3>
              <p className="text-[12px] text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Prev arrow */}
        <div className="mt-8">
          <button
            className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-400 transition-colors"
            aria-label="previous"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── PROJECTS ─────────────────── */
function Projects() {
  const [hovered, setHovered] = useState(null);

  const items = [
    { title: 'Title 2', desc: 'We ensure you get the finest price for your home while also helping you grow in building.' },
    { title: '', desc: '' },
    { title: '', desc: '' },
    { title: '', desc: '' },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <p className="text-center text-[13px] text-gray-400 mb-1">
          We offer a comprehensive range of construction services designed to meet your needs
        </p>
        <h2 className="text-center font-bold text-gray-900 mb-10" style={{ fontSize: 32 }}>
          Expertly Completed <span style={{ color: YELLOW }}>Projects</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden relative cursor-pointer"
              style={{ height: 280 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={i % 2 === 0 ? constructionHero : constructionLight}
                alt={`project ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                  filter: ['brightness(1)', 'brightness(1.05) saturate(0.9)', 'brightness(0.95) hue-rotate(10deg)', 'brightness(1.1) saturate(1.1)'][i],
                }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 30%, transparent 80%)' }} />

              {/* Featured popup on first card */}
              {i === 0 && (
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white/92 backdrop-blur-sm px-4 py-3 rounded-b-2xl"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[13px] font-bold text-gray-900">{p.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{p.desc}</p>
                    </div>
                    <button
                      className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-white text-[10px] mt-0.5"
                      style={{ backgroundColor: YELLOW }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-[13px] font-semibold text-white"
            style={{ backgroundColor: YELLOW }}
          >
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TESTIMONIALS ─────────────────── */
function Testimonials() {
  const items = [
    'I would recommend them to anyone looking for construction services.',
    'I would recommend them to anyone looking for construction services.',
    'I would recommend them to anyone looking for construction services.',
    'I would recommend them to anyone looking for construction services.',
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <h2 className="text-center font-bold text-gray-900 mb-1" style={{ fontSize: 32 }}>
          <span style={{ color: YELLOW }}>Stories</span> of Trust, Quality, and Commitment
        </h2>
        <p className="text-center text-[13px] text-gray-400 mb-10">Stories from our happy clients</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex flex-col gap-4"
              style={{ border: '1px solid #EFEFEF' }}
            >
              <p className="text-[13px] text-gray-600 leading-relaxed flex-1">{text}</p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={YELLOW}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Author row */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ backgroundColor: YELLOW }}
                >
                  RJ
                </div>
                <span className="text-[13px] font-semibold text-gray-800">Robert Joe</span>
                <button
                  className="ml-auto w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-yellow-400 transition-colors"
                  aria-label="play"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="#aaa">
                    <path d="M3 2l5 3-5 3V2z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FAQ ─────────────────── */
const FAQ_ITEMS = [
  'How Long Does A Typical Project Take?',
  "What's The Process For Getting A Quote?",
  'Do You Offer Knockdown Rebuild Services?',
  "What's The Process For Getting A Quote?",
  'Do You Offer Eco-Friendly Building Options?',
  "What's The Process For Getting A Quote?",
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: DARK_BG }}>
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-white mb-5"
              style={{ backgroundColor: YELLOW }}
            >
              FAQ
            </span>
            <h2 className="font-bold text-white leading-tight mb-4" style={{ fontSize: 30 }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-8">
              Mostly all the answers to common questions can be found here. We are filling your vision with precision to help you every step of the way.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg text-[13px] font-semibold text-white"
              style={{ backgroundColor: YELLOW }}
            >
              Get A Free Quote
            </a>
          </div>

          {/* Right – accordion */}
          <div className="flex flex-col gap-2.5">
            {FAQ_ITEMS.map((q, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center justify-between px-5 py-[14px]">
                  <p className="text-[13px] font-medium text-white pr-4 leading-snug">{q}</p>
                  <span
                    className="text-xl leading-none flex-shrink-0 transition-transform duration-200"
                    style={{ color: active === i ? YELLOW : '#666', transform: active === i ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </div>
                {active === i && (
                  <div className="px-5 pb-4">
                    <p className="text-[12px] text-gray-400 leading-relaxed">
                      We provide a detailed consultation and project timeline tailored to your specific requirements and location.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  const socialIcons = [
    { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ];

  return (
    <footer style={{ backgroundColor: '#111111' }} className="pt-14 pb-8">
      <div style={{ maxWidth: 1200 }} className="mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Col 1 – logo + social */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold text-white mb-1">LOGO</p>
            <div className="flex items-center gap-3 mt-5">
              {socialIcons.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-500 transition-colors"
                  aria-label={label}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#888">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {['About us', 'Services', 'Trades', 'Project', 'Contact'].map(l => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {['New Builds', 'Knockdown Rebuild', 'Custom Build', 'Project Management'].map(l => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Contact us</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="tel:+61000000000" className="text-[13px] text-gray-500 hover:text-white transition-colors">+61 000 000 000</a></li>
              <li><a href="mailto:info@c5c.com.au" className="text-[13px] text-gray-500 hover:text-white transition-colors">info@c5c.com.au</a></li>
              <li><p className="text-[13px] text-gray-500">Sophia, Thayer, Turner</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-[11px] text-gray-600 text-center">
            All rights reserved © 2024 <span className="text-gray-400 font-medium">C5C</span> Construction company
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── CONTACT (free quote form) ─────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div style={{ maxWidth: 640 }} className="mx-auto px-6">
        <h2 className="text-center font-bold text-gray-900 mb-1" style={{ fontSize: 32 }}>
          Get A <span style={{ color: YELLOW }}>Free Quote</span>
        </h2>
        <p className="text-center text-[13px] text-gray-400 mb-10">Fill out the form and we'll contact you shortly.</p>

        {sent ? (
          <div className="text-center py-16">
            <p className="text-lg font-semibold text-gray-900">Thank you! We'll be in touch soon.</p>
          </div>
        ) : (
          <form
            onSubmit={e => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                className="px-4 py-3 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                className="px-4 py-3 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project…"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              className="px-4 py-3 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: YELLOW }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─────────────────── PAGE ─────────────────── */
export default function C5CPage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyC5C />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
