import React from 'react';
import { Wine, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-hv-charcoal text-hv-cream border-t border-hv-cream/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-8">
                <Wine className="w-8 h-8 text-hv-terracotta" />
                <span className="text-3xl font-serif tracking-widest uppercase">Her Vine</span>
             </div>
             <p className="text-hv-cream/50 text-sm font-sans font-light leading-relaxed mb-8">
               A destination for those seeking the soul of the vine. Experience the elegance of Hermanus in every glass.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-hv-cream/10 flex items-center justify-center hover:bg-hv-terracotta hover:border-hv-terracotta transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-hv-cream/10 flex items-center justify-center hover:bg-hv-terracotta hover:border-hv-terracotta transition-all duration-300">
                    <Facebook className="w-4 h-4" />
                </a>
             </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h5 className="text-xs text-hv-terracotta uppercase tracking-[0.2em] font-medium mb-8">Discover</h5>
            <ul className="space-y-4">
                {['The Experience', 'Our Wines', 'The Team', 'Sustainability', 'Press'].map((item) => (
                    <li key={item}>
                        <a href="#" className="text-sm font-sans font-light text-hv-cream/60 hover:text-white hover:translate-x-1 transition-all inline-block">{item}</a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div className="col-span-1">
            <h5 className="text-xs text-hv-terracotta uppercase tracking-[0.2em] font-medium mb-8">Visit Us</h5>
            <ul className="space-y-6">
                <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-hv-olive mt-1" />
                    <span className="text-sm font-sans font-light text-hv-cream/60">
                        Hemel-en-Aarde Valley<br />
                        Hermanus, 7200<br />
                        South Africa
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-hv-olive animate-pulse"></span>
                    <span className="text-sm font-sans font-light text-hv-cream/60">
                        Open Daily: 10:00 - 17:00
                    </span>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h5 className="text-xs text-hv-terracotta uppercase tracking-[0.2em] font-medium mb-8">Reservations</h5>
            <ul className="space-y-4">
                <li>
                    <a href="mailto:bookings@hervine.co.za" className="text-sm font-sans font-light text-hv-cream/60 hover:text-white transition-colors flex items-center gap-3">
                        <Mail className="w-4 h-4" /> bookings@hervine.co.za
                    </a>
                </li>
                <li>
                    <a href="tel:+27280000000" className="text-sm font-sans font-light text-hv-cream/60 hover:text-white transition-colors flex items-center gap-3">
                        <Phone className="w-4 h-4" /> +27 (0) 28 000 0000
                    </a>
                </li>
            </ul>
            <div className="mt-8">
                 <button className="w-full py-4 border border-hv-cream/20 text-xs uppercase tracking-widest hover:bg-hv-cream hover:text-hv-charcoal transition-all duration-300">
                    Join Wine Club
                 </button>
            </div>
          </div>
        </div>

        <div className="border-t border-hv-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-hv-cream/30 uppercase tracking-widest font-sans">© 2025 Her Vine. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-hv-cream/30 hover:text-white uppercase tracking-widest transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="text-[10px] text-hv-cream/30 hover:text-white uppercase tracking-widest transition-colors font-sans">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;