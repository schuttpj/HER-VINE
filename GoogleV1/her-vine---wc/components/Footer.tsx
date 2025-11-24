import React, { useEffect, useRef } from 'react';
import { Wine, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const columns = columnsRef.current;
    const bottom = bottomRef.current;

    if (!footer || !columns || !bottom) return;

    // Get each column properly
    const column1 = columns.children[0]; // Brand column
    const column2 = columns.children[1]; // Quick Links
    const column3 = columns.children[2]; // Visit Us
    const column4 = columns.children[3]; // Contact
    
    // Get all list items and elements within columns
    const headings = columns.querySelectorAll('h5');
    const listItems = columns.querySelectorAll('ul li');
    const brandLogo = column1?.querySelector('.flex.items-center');
    const brandText = column1?.querySelector('p');
    const socialIcons = column1?.querySelectorAll('a');
    const button = column4?.querySelector('button');
    
    // Set initial states - very subtle
    gsap.set([column1, column2, column3, column4], { 
      opacity: 0, 
      y: 20,
    });

    gsap.set(headings, { opacity: 0, y: 15 });
    gsap.set(listItems, { opacity: 0, x: -10 });
    gsap.set([brandLogo, brandText], { opacity: 0, y: 15 });
    gsap.set(socialIcons, { opacity: 0, scale: 0.8 });
    gsap.set(button, { opacity: 0, y: 10 });
    gsap.set(bottom, { opacity: 0, y: 10 });

    // Use IntersectionObserver for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create a smooth, flowing timeline - faster but still smooth
            const tl = gsap.timeline({ delay: 0.2 });

            // Animate columns with smooth stagger - faster
            tl.to([column1, column2, column3, column4], {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
              stagger: {
                amount: 0.6,
                from: 'start'
              }
            })
            // Animate headings within columns
            .to(headings, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.06,
            }, '-=0.9')
            // Animate brand elements
            .to([brandLogo, brandText], {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              stagger: 0.1,
            }, '-=0.8')
            // Animate list items with smooth cascade
            .to(listItems, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.05,
            }, '-=0.7')
            // Animate social icons
            .to(socialIcons, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: 'back.out(1.4)',
              stagger: 0.08,
            }, '-=0.6')
            // Animate button
            .to(button, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
            }, '-=0.4')
            // Finally animate bottom section
            .to(bottom, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
            }, '-=0.2');

            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    observer.observe(footer);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="bg-hv-charcoal text-hv-cream border-t border-hv-cream/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
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
                <a href="#" className="w-10 h-10 rounded-full border border-hv-cream/10 flex items-center justify-center hover:bg-hv-terracotta hover:border-hv-terracotta transition-all duration-300 group">
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-hv-cream/10 flex items-center justify-center hover:bg-hv-terracotta hover:border-hv-terracotta transition-all duration-300 group">
                    <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
                    <a href="mailto:bookings@hervine.co.za" className="text-sm font-sans font-light text-hv-cream/60 hover:text-white transition-colors flex items-center gap-3 group">
                        <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> bookings@hervine.co.za
                    </a>
                </li>
                <li>
                    <a href="tel:+27280000000" className="text-sm font-sans font-light text-hv-cream/60 hover:text-white transition-colors flex items-center gap-3 group">
                        <Phone className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> +27 (0) 28 000 0000
                    </a>
                </li>
            </ul>
            <div className="mt-8">
                 <button className="w-full py-4 border border-hv-cream/20 text-xs uppercase tracking-widest hover:bg-hv-cream hover:text-hv-charcoal transition-all duration-300 hover:scale-[1.02] transform">
                    Join Wine Club
                 </button>
            </div>
          </div>
        </div>

        <div ref={bottomRef} className="border-t border-hv-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-hv-cream/30 uppercase tracking-widest font-sans">© 2025 Her Vine. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-hv-cream/30 hover:text-white uppercase tracking-widest transition-colors font-sans hover:translate-y-[-1px] inline-block">Privacy Policy</a>
            <a href="#" className="text-[10px] text-hv-cream/30 hover:text-white uppercase tracking-widest transition-colors font-sans hover:translate-y-[-1px] inline-block">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;