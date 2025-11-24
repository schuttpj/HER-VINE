import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-hv-charcoal/90 via-hv-charcoal/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-hv-charcoal/80 via-transparent to-hv-charcoal/40 z-10"></div>
            {/* Image Source: Woman in vineyard/earthy tones */}
            <img 
              src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=2400&auto=format&fit=crop" 
              alt="Woman in Vineyard" 
              className="w-full h-full object-cover object-center"
              style={{ animation: 'scrollBlur linear both', animationTimeline: 'view()', animationRange: 'entry 100% entry 150%' }}
            />
        </div>

        {/* Decorative Collage Image - Top Right/Center */}
        <div className="absolute top-[20%] right-[10%] lg:right-[15%] z-10 hidden md:block">
            <AnimationWrapper animationClass="animate-fade-in-up" delay="0.6s">
                <div className="relative w-48 lg:w-64 aspect-[3/4] rotate-6 hover:rotate-0 transition-transform duration-700 ease-out cursor-none">
                    <div className="absolute inset-0 bg-hv-cream/10 backdrop-blur-sm -m-2 rounded-sm"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop" 
                        alt="Wine detail" 
                        className="w-full h-full object-cover rounded-sm shadow-2xl opacity-90 hover:opacity-100"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-hv-cream/90 px-3 py-2 rounded-sm">
                        <p className="text-[10px] font-sans uppercase tracking-widest text-hv-charcoal text-center">Vintage 2024</p>
                    </div>
                </div>
            </AnimationWrapper>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 pt-32">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-16">
                
                {/* Bottom Left: Headline */}
                <div className="w-full lg:max-w-3xl">
                    <AnimationWrapper animationClass="animate-slide-in-left" delay="0.2s">
                        <div className="inline-flex items-center gap-2 border border-hv-cream/20 bg-hv-cream/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8">
                            <span className="w-2 h-2 rounded-full bg-hv-terracotta animate-pulse"></span>
                            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-hv-cream/90">Status: Harvest Season</span>
                        </div>
                        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-light tracking-tight leading-[0.9] text-white">
                            ELEGANT.
                            <br />
                            <span className="text-hv-terracotta italic">ROOTED IN EARTH.</span>
                        </h1>
                    </AnimationWrapper>
                </div>

                {/* Bottom Right: Subhead & CTA */}
                <div className="w-full lg:max-w-md flex flex-col gap-8">
                    <AnimationWrapper animationClass="animate-slide-in-right" delay="0.4s">
                        <p className="text-lg text-white/80 font-sans font-light leading-relaxed">
                            A sanctuary where the feminine spirit meets the rugged coastline. Experience wine tasting reimagined through the lens of nature, grace, and time.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#offerings" className="group inline-flex items-center gap-3 bg-hv-cream text-hv-charcoal px-8 py-4 text-xs font-sans font-medium uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
                                Taste The Land
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#story" className="group inline-flex items-center gap-3 bg-transparent border border-white/20 backdrop-blur-sm text-white px-8 py-4 text-xs font-sans font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-sm">
                                Our Philosophy
                            </a>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;