import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Products: ['Wyre Scopes', 'Wyre Check', 'Wyre Contracts'],
    Company: ['About Us', 'Careers', 'Contact']
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
               <Logo className="h-8 w-auto" forceColor="white" />
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
              The leading AI platform for construction intelligence. 
              We help general contractors automate scope review, risk analysis, and bid leveling.
            </p>
            <div className="mt-8 flex gap-4">
                 {socialLinks.map(({ icon, label, href }) => (
                     <a 
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-[#046BD2] hover:border-[#046BD2] hover:text-white transition-all duration-300"
                     >
                        {icon}
                     </a>
                 ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address Section */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Address</h4>
            <div className="text-sm text-slate-400 leading-relaxed font-light">
              <p>23710 Schooler Plz Suite 2070,</p>
              <p>Brambleton, VA 20148</p>
              <p className="mt-4">United States</p>
              <a href="mailto:info@wyreai.io" className="block mt-4 text-[#046BD2] hover:text-white transition-colors">
                info@wyreai.io
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
