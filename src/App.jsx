import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import C5CPage from './versions/C5C/C5CPage';
import CONSPage from './versions/CONS/CONSPage';
import V4Page from './versions/V4/V4Page';
import V5Page from './versions/V5/V5Page';

function WyrePage() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WyrePage />} />
        <Route path="/c5c" element={<C5CPage />} />
        <Route path="/cons" element={<CONSPage />} />
        <Route path="/v4" element={<V4Page />} />
        <Route path="/v5" element={<V5Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
