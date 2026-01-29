import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-blur py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
               <Logo className="h-8 md:h-9 w-auto" />
            </a>

            {/* Desktop Nav - Professional & Centered */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -1, color: '#046BD2' }}
                  whileTap={{ y: 0 }}
                  className="text-[15px] font-medium text-slate-600 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#login" className="text-[15px] font-medium text-slate-900 hover:text-[#046BD2] transition-colors">
                Log In
              </a>
              <a
                href="#contact"
                className="btn-primary py-2.5 px-5 text-sm"
              >
                Book Demo
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-slate-900 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-slate-900 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-slate-900 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden border-b border-slate-100"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-slate-900 border-b border-gray-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a href="#login" className="text-lg font-medium text-slate-600">Log In</a>
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-lg bg-[#FF6B35] text-white text-center font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
