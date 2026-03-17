import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: ['Wyre Scopes', 'Wyre Check'],
    Company: ['About Us', 'Book a Demo', 'Contact Us']
  };

  const socialLinks = [
    { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram size={18} />, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-6">
              <Logo className="h-8 w-auto" forceColor="white" buildingOrange />
            </a>
            <p className="text-slate-300 leading-relaxed max-w-sm text-sm mb-6">
              The AI-Powered Preconstruction Risk Management Platform.
              Automate scope extraction, identify document conflicts, and protect your margins.
            </p>

            {/* Newsletter Subscription */}
            <div className="mb-6">
              <p className="text-slate-400 text-sm mb-3">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-[#004f8a] focus:ring-1 focus:ring-[#004f8a] outline-none transition-all text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-slate-400 text-xs mt-3">No spam. Just the good stuff. You can unsubscribe anytime.</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address Section */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Office</h4>
            <div className="text-sm text-slate-300 leading-relaxed">
              <p className="text-white font-semibold">Headquarters</p>
              <p>Washington D.C.</p>
              <p className="text-white font-semibold mt-4">Address</p>
              <p>23710 Schooler Plz Suite 2070,</p>
              <p>Brambleton, VA 20148</p>
              <p className="mt-2">United States</p>
              <a href="mailto:sales@wyreai.io" className="block mt-4 text-[#FF6B35] hover:text-white transition-colors">
                sales@wyreai.io
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>&copy; {currentYear} Wyre AI Inc. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
