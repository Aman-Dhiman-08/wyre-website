import { motion } from 'framer-motion';
import founderImg from '../../../assets/founder.png';

export default function UrbisAbout() {
  return (
    <section id="about" className="urbis-about">
      <div className="urbis-about__container">

        {/* Section Label */}
        <motion.p
          className="urbis-about__label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="urbis-about__label-dash">— —</span>
          ABOUT US
          <span className="urbis-about__label-dash">— —</span>
        </motion.p>

        {/* Two-column layout */}
        <div className="urbis-about__grid">

          {/* LEFT — Who We Are */}
          <motion.div
            className="urbis-about__left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="urbis-about__headline">
              Built by Builders. Powered by AI. <br />
              <span className="urbis-about__headline-accent">Focused on Preconstruction.</span>
            </h2>

            <div className="urbis-about__quote-block">
              <p className="urbis-about__quote">
                "The biggest risk in construction isn't what happens in the field — it's what gets overlooked and or missed in the documents before the shovel hits the ground."
              </p>
            </div>

            <p className="urbis-about__text">
              <strong>Wyre AI</strong> was created to solve real-world preconstruction challenges. We combine deep industry expertise with cutting-edge AI to help teams plan smarter, work faster, and reduce risk — long before the first shovel hits the ground.
            </p>
            <div className="urbis-about__accent-block">
              <p className="urbis-about__accent-text">We’re not just another AI company.</p>
              <p className="urbis-about__accent-text">We’re construction industry experts building intelligent solutions to solve real problems.</p>
            </div>
          </motion.div>

          {/* RIGHT — Founder */}
          <motion.div
            className="urbis-about__right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="urbis-about__founder-card">
              <div className="urbis-about__founder-photo">
                <img src={founderImg} alt="Sunil Dorairajan" className="urbis-about__founder-img" />
              </div>

              <div className="urbis-about__founder-info">
                <p className="urbis-about__founder-tag">We know technology — and even better, we understand construction.</p>
                <div className="urbis-about__founder-name-row">
                  <h3 className="urbis-about__founder-name">Sunil Dorairajan</h3>
                  <a
                    href="https://www.linkedin.com/in/sunildorairajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="urbis-about__founder-linkedin-icon"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="urbis-about__founder-role">Founder & CEO, Wyre AI</p>

                <div className="urbis-about__founder-bio">
                  <p>
                    Sunil Dorairajan brings over a decade of experience in commercial construction, where he worked on complex projects ridden with coordination challenges, scope gaps, and document fragmentation, while interpreting drawings, specifications, and the broader complexities of preconstruction.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    He co-founded Pype, transforming submittals and compliance workflows—an innovation that led to its acquisition by Autodesk.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    Today, as Founder & CEO of Wyre AI, he is redefining preconstruction through AI—enabling contractors to bid faster, reduce risk, and make smarter decisions from complex drawings and specifications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
