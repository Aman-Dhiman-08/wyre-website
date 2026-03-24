import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyWyre from './components/WhyWyre';
import Products from './components/Products';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UrbisPage from './versions/Urbis/UrbisPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Intro / Who We Are */}
        <About />

        {/* About Our Founder */}
        <Founder />
        
        {/* Why Wyre (Blue Bar) */}
        <WhyWyre />

        {/* What We Do (Minimal Grid) */}
        <WhatWeDo />

        {/* How It Works */}
        <HowItWorks />

        {/* Product (App Shell) */}
        <Products />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urbis" element={<UrbisPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
