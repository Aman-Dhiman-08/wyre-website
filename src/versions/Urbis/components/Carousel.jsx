import { motion } from 'framer-motion';
import mcnImg from '../../../assets/MCN.png';
import shockeyImg from '../../../assets/Shocky.png';
import dciImg from '../../../assets/DCI.png';
import bekImg from '../../../assets/bek-removebg-preview.png';
import carlsonImg from '../../../assets/carlson-removebg-preview.png';
import kulkaImg from '../../../assets/kulka-removebg-preview.png';
import millerDavisImg from '../../../assets/miller_Davis-removebg-preview.png';
import winmarImg from '../../../assets/winmar-removebg-preview.png';

const marqueeWords = [
  'Scope Analysis',
  'Risk Identification',
  'Bid Leveling',
  'Document Review',
  'RFI Reduction',
  'Preconstruction AI',
  'Scope Gaps',
  'Contract Review',
  'Margin Protection',
  'Specification Analysis',
];

const logos = [
  { name: 'DCI', src: dciImg },
  { name: 'Howard Shockey', src: shockeyImg },
  { name: 'MCN Build', src: mcnImg },
  { name: 'BEK', src: bekImg },
  { name: 'Carlson', src: carlsonImg },
  { name: 'Kulka', src: kulkaImg },
  { name: 'Miller Davis', src: millerDavisImg },
  { name: 'Winmar', src: winmarImg },
];

export default function UrbisCarousel() {
  return (
    <section className="urbis-carousel">
      {/* Text Marquee — Row 1 (left to right) */}
      <div className="urbis-carousel__marquee-row">
        <div className="urbis-carousel__marquee-track urbis-carousel__marquee-track--ltr">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={`ltr-${i}`} className="urbis-carousel__marquee-item">
              <span className="urbis-carousel__marquee-dot" />
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Logo Carousel */}
      <motion.div
        className="urbis-carousel__logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="urbis-carousel__logos-label">Trusted By</p>
        <div className="urbis-carousel__logos-marquee">
          <div className="urbis-carousel__logos-track">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={`logo-${i}`}
                src={logo.src}
                alt={logo.name}
                className="urbis-carousel__logo-img"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Text Marquee — Row 2 (right to left) */}
      <div className="urbis-carousel__marquee-row">
        <div className="urbis-carousel__marquee-track urbis-carousel__marquee-track--rtl">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={`rtl-${i}`} className="urbis-carousel__marquee-item urbis-carousel__marquee-item--outline">
              <span className="urbis-carousel__marquee-dot" />
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
