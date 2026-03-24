import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../../../assets/urbis-hero-worker.jpg';
import Logo from '../../../components/Logo';

const testimonials = [
  {
    stars: 5,
    text: "Wyre AI has transformed how we handle preconstruction. Risk identification that used to take weeks now happens in hours.",
    name: "MICHAEL BRENNAN",
    company: "DCI Engineering",
  },
  {
    stars: 5,
    text: "The scope analysis is incredibly accurate. We've reduced our RFIs by over 40% since implementing Wyre across our projects.",
    name: "SARAH COLLINS",
    company: "MCN Build Group",
  },
  {
    stars: 5,
    text: "A game-changer for bid leveling. Our estimating team can now focus on strategy instead of manual document review.",
    name: "JAMES WHITFIELD",
    company: "Carlson Construction",
  },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'What we do', href: '#what-we-do' },
];

export default function UrbisHero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="urbis-hero">
      {/* Outer dark frame with subtle pattern */}
      <div className="urbis-hero__frame">
        {/* Background pattern on dark area */}
        <div className="urbis-hero__frame-pattern" />

        {/* Main card container */}
        <div className="urbis-hero__card">

          {/* === LEFT SIDE — Yellow/Gold === */}
          <div className="urbis-hero__left">

            {/* Logo */}
            <motion.div
              className="urbis-hero__logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="urbis-hero__logo-img" />
            </motion.div>

            {/* Center group: Tagline + Headline */}
            <div className="urbis-hero__center-group">
              {/* Tagline badge */}
              <motion.p
                className="urbis-hero__tagline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="urbis-hero__tagline-dash">— —</span>
                <span>THE NEW STANDARD IN PRECONSTRUCTION</span>
                <span className="urbis-hero__tagline-dash">— —</span>
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                className="urbis-hero__headline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                AI Powered Preconstruction Risk Management Platform
              </motion.h1>
            </div>

            {/* Bottom group: Description + CTAs */}
            <div className="urbis-hero__bottom-group">
              {/* Description */}
              <motion.div
                className="urbis-hero__description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                <p>
                  Transform drawings & specifications into structured scopes, risk insights, and traceable decisions — automatically.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Wyre AI</strong> helps contractors identify scope gaps, reduce RFIs, and protect margins before construction even begins.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="urbis-hero__ctas"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <a href="#book-demo" className="urbis-hero__cta-primary">
                  <span>BOOK A DEMO</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a href="#products" className="urbis-hero__cta-secondary">
                  <span>EXPLORE OUR PRODUCTS</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* === RIGHT SIDE — Image === */}
          <div className="urbis-hero__right">
            {/* Nav bar sits on top of image */}
            <motion.nav
              className="urbis-hero__nav"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="urbis-hero__nav-links">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="urbis-hero__nav-link">
                    {item.label}
                  </a>
                ))}
              </div>
              <a href="#contact" className="urbis-hero__nav-cta">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Contact Us</span>
              </a>
            </motion.nav>

            {/* Hero image */}
            <div className="urbis-hero__image-wrapper">
              <img
                src={heroImage}
                alt="Construction site"
                className="urbis-hero__image"
              />
              {/* Dark overlay on image */}
              <div className="urbis-hero__image-overlay" />
            </div>

            {/* Modular Decorative Grid exactly as image */}
            <div className="urbis-hero__modular-grid">
              <div className="urbis-hero__mod-block urbis-hero__mod-block--large" />
              <div className="urbis-hero__mod-block urbis-hero__mod-block--second-left" />
              <div className="urbis-hero__mod-block urbis-hero__mod-block--mid-left" />
              <div className="urbis-hero__mod-block urbis-hero__mod-block--offset-right" />
              <div className="urbis-hero__mod-block urbis-hero__mod-block--bottom-center" />
            </div>

            {/* Testimonial Card */}
            <motion.div
              className="urbis-hero__testimonial"
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="urbis-hero__testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="urbis-hero__testimonial-text">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="urbis-hero__testimonial-author">
                    <p className="urbis-hero__testimonial-name">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="urbis-hero__testimonial-company">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="urbis-hero__testimonial-nav">
                <button onClick={prevTestimonial} className="urbis-hero__testimonial-btn" aria-label="Previous testimonial">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={nextTestimonial} className="urbis-hero__testimonial-btn urbis-hero__testimonial-btn--active" aria-label="Next testimonial">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
