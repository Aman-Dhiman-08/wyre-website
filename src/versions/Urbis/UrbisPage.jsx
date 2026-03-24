import UrbisHero from './components/Hero';
import UrbisCarousel from './components/Carousel';
import UrbisAbout from './components/About';
import UrbisMetrics from './components/Metrics';
import UrbisHowItWorks from './components/HowItWorks';
import UrbisWhatWeDo from './components/WhatWeDo';
import UrbisProducts from './components/Products';
import UrbisBookDemo from './components/BookDemo';
import UrbisContact from './components/Contact';
import UrbisFooter from './components/Footer';
import './components/Hero.css';
import './components/Carousel.css';
import './components/About.css';
import './components/Metrics.css';
import './components/HowItWorks.css';
import './components/WhatWeDo.css';
import './components/Products.css';
import './components/BookDemo.css';
import './components/Contact.css';
import './components/Footer.css';

export default function UrbisPage() {
  return (
    <div className="urbis-page" style={{ minHeight: '100vh', background: '#141414' }}>
      <UrbisHero />
      <UrbisCarousel />
      <UrbisAbout />
      <UrbisMetrics />
      <UrbisHowItWorks />
      <UrbisWhatWeDo />
      <UrbisProducts />
      <UrbisContact />
      <UrbisBookDemo />
      <UrbisFooter />
    </div>
  );
}
