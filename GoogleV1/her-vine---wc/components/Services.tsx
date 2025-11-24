import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mountain, Wine, UtensilsCrossed, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('[data-service-card]');
    
    // Set initial state for cards - very subtle
    gsap.set(cards, {
      opacity: 0,
      y: 20,
      filter: 'blur(0px)'
    });

    // Set initial states for text elements within each card
    cards.forEach((card) => {
      const iconLabel = card.querySelector('[data-icon-label]');
      const title = card.querySelector('[data-title]');
      const description = card.querySelector('[data-description]');
      const button = card.querySelector('[data-button]');
      
      // Set all text elements to start hidden/offset
      gsap.set([iconLabel, title, description, button], {
        opacity: 0,
        y: 15
      });
    });

    // Use IntersectionObserver for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards first
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: 'power2.out',
              stagger: {
                amount: 1,
                from: 'start'
              },
              delay: 0.3
            }).then(() => {
              // Then animate text elements within each card with smooth stagger
              cards.forEach((card, index) => {
                const iconLabel = card.querySelector('[data-icon-label]');
                const title = card.querySelector('[data-title]');
                const description = card.querySelector('[data-description]');
                const button = card.querySelector('[data-button]');
                
                const tl = gsap.timeline({ delay: index * 0.15 });
                
                // Animate each text element smoothly
                tl.to(iconLabel, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: 'power2.out'
                }, 0)
                .to(title, {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: 'power2.out'
                }, 0.2)
                .to(button, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: 'power2.out'
                }, 0.4);
                
                // Description stays hidden until hover
                gsap.set(description, { opacity: 0, y: 0 });
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Helper to get icon based on ID (simplified logic)
  const getIcon = (id: string) => {
    switch(id) {
        case '01': return <Mountain className="w-5 h-5 text-hv-terracotta" />;
        case '02': return <Wine className="w-5 h-5 text-hv-terracotta" />;
        case '03': return <UtensilsCrossed className="w-5 h-5 text-hv-terracotta" />;
        case '04': return <Calendar className="w-5 h-5 text-hv-terracotta" />;
        default: return <Wine className="w-5 h-5 text-hv-terracotta" />;
    }
  };

  return (
    <section ref={sectionRef} id="offerings" className="relative min-h-screen bg-hv-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">
        
        {SERVICES.map((service, index) => (
            <div 
                key={service.id}
                data-service-card
                className={`group relative w-full min-h-[50vh] overflow-hidden border-hv-cream/10 ${
                    index % 2 === 0 ? 'border-r' : ''
                } ${index < 2 ? 'border-b' : ''}`}
            >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-hv-charcoal via-transparent to-transparent opacity-90"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
                        <div data-icon-label className="flex items-center gap-3 mb-4 opacity-70">
                            {getIcon(service.id)}
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white">
                                {service.id} / Offering
                            </span>
                        </div>

                        <h3 data-title className="text-3xl lg:text-4xl font-serif font-medium tracking-tight text-white mb-4 group-hover:text-hv-terracotta transition-colors duration-700">
                            {service.title}
                        </h3>

                        <div data-description className="overflow-hidden transition-all duration-700 ease-out max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                             <p className="text-white/60 max-w-sm mb-8 font-sans font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                {service.description}
                            </p>
                        </div>

                        <button data-button className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white border-b border-hv-terracotta pb-1 group-hover:border-white transition-colors duration-700">
                            {service.cta} <ArrowUpRight className="w-3 h-3" />
                        </button>
                    </div>
            </div>
        ))}

      </div>
    </section>
  );
};

export default Services;