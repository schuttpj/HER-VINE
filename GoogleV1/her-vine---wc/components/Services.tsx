import React from 'react';
import { ArrowUpRight, Mountain, Wine, UtensilsCrossed, Calendar } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
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
    <section id="offerings" className="relative min-h-screen bg-hv-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">
        
        {SERVICES.map((service, index) => (
            <div 
                key={service.id} 
                className={`group relative w-full min-h-[50vh] overflow-hidden border-hv-cream/10 ${
                    index % 2 === 0 ? 'border-r' : ''
                } ${index < 2 ? 'border-b' : ''}`}
            >
                <AnimationWrapper 
                    animationClass="animate-fade-in-up" 
                    delay={`${0.1 + (index * 0.1)}s`} 
                    className="w-full h-full"
                >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-hv-charcoal via-transparent to-transparent opacity-90"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
                        <div className="flex items-center gap-3 mb-4 opacity-70">
                            {getIcon(service.id)}
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white">
                                {service.id} / Offering
                            </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight text-white mb-4 group-hover:text-hv-terracotta transition-colors">
                            {service.title}
                        </h3>

                        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                             <p className="text-white/60 max-w-sm mb-8 font-sans font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {service.description}
                            </p>
                        </div>

                        <button className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white border-b border-hv-terracotta pb-1 group-hover:border-white transition-colors">
                            {service.cta} <ArrowUpRight className="w-3 h-3" />
                        </button>
                    </div>
                </AnimationWrapper>
            </div>
        ))}

      </div>
    </section>
  );
};

export default Services;