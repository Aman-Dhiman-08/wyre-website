import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyWyre from './components/WhyWyre';
import Products from './components/Products';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Intro / Who We Are */}
        <About />
        
        {/* Why Wyre (Blue Bar) */}
        <WhyWyre />

        {/* What We Do (Minimal Grid) */}
        <WhatWeDo />

        {/* Product (App Shell) */}
        <Products />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
