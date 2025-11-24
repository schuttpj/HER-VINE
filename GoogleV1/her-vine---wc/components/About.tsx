import React from 'react';
import AnimationWrapper from './AnimationWrapper';
import { MapPin, Droplets, Sun, Wine } from 'lucide-react';
import { HIGHLIGHTS } from '../constants';

const About: React.FC = () => {
    // Helper to render icon
    const renderIcon = (name: string) => {
        switch(name) {
            case 'MapPin': return <MapPin className="w-5 h-5 text-hv-terracotta" />;
            case 'Droplets': return <Droplets className="w-5 h-5 text-hv-terracotta" />;
            case 'Sun': return <Sun className="w-5 h-5 text-hv-terracotta" />;
            case 'Wine': return <Wine className="w-5 h-5 text-hv-terracotta" />;
            default: return null;
        }
    };

  return (
    <section id="story" className="relative py-32 bg-hv-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            {/* Section Label */}
            <div className="flex justify-center mb-20">
                <AnimationWrapper animationClass="animate-fade-in-up" delay="0s">
                    <span className="text-[10px] text-hv-olive uppercase tracking-[0.3em] font-medium border-b border-hv-olive/30 pb-2 font-sans">
                        The Terroir
                    </span>
                </AnimationWrapper>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                
                {/* Left Column: Title + Image + Highlights */}
                <div className="lg:col-span-5 space-y-10">
                    <AnimationWrapper animationClass="animate-slide-in-left" delay="0.2s">
                        <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight text-hv-charcoal mb-10 leading-tight">
                            CRAFTED BY NATURE, <br />
                            <span className="text-hv-terracotta italic">CURATED BY HER.</span>
                        </h2>
                        
                        {/* New Collage Image */}
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] mb-12 group">
                             {/* Decorative offset border */}
                             <div className="absolute inset-0 border border-hv-terracotta/30 translate-x-3 translate-y-3 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                             {/* Main Image */}
                             <div className="absolute inset-0 overflow-hidden rounded-sm bg-hv-stone">
                                 <img 
                                    src="https://images.unsplash.com/photo-1566997426176-79777cc9b282?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Woman in linen apron" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute inset-0 bg-hv-terracotta/10 mix-blend-multiply pointer-events-none"></div>
                             </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            {HIGHLIGHTS.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group border-b border-hv-charcoal/10 pb-4 hover:border-hv-terracotta transition-colors">
                                    {renderIcon(item.icon)}
                                    <span className="text-sm font-sans font-medium uppercase tracking-widest text-hv-charcoal/90">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimationWrapper>
                </div>

                {/* Right Column: Narrative */}
                <div className="lg:col-span-7 lg:pt-24">
                    <AnimationWrapper animationClass="animate-slide-in-right" delay="0.4s">
                        <blockquote className="text-2xl font-serif font-light leading-relaxed text-hv-charcoal border-l-2 border-hv-terracotta pl-8 mb-12 italic">
                            "Wine is the poetry of the earth, and here at Her Vine, we simply add the melody. An experience designed to slow time."
                            <footer className="mt-6 text-xs font-sans font-bold uppercase tracking-widest text-hv-terracotta not-italic">— Elara Vance, Founder</footer>
                        </blockquote>

                        <div className="space-y-6 text-hv-charcoal/70 font-sans text-lg font-light leading-relaxed">
                            <p>
                                Nestled in the Hemel-en-Aarde Valley, Her Vine is more than a winery. It is a tribute to the nurturing spirit of the soil. We believe in minimal intervention, allowing the unique maritime climate of Hermanus to speak through every bottle.
                            </p>
                            <p>
                                From the clay-rich soil to the cool Atlantic breeze, every element plays a role in sculpting our signature Syrah and Pinot Noir. Whether it's a walk through the vines or a curated pairing in our tasting room, we invite you to connect with the land.
                            </p>
                            <p>
                                Our approach blends ancient techniques with modern grace, ensuring that every vintage tells a story of place, patience, and passion.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex gap-4">
                           <img 
                             src="https://images.unsplash.com/photo-1596245089332-9df7b494d13c?q=80&w=400&auto=format&fit=crop" 
                             alt="Grapes detail"
                             className="w-32 h-32 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=400&auto=format&fit=crop" 
                             alt="Terracotta detail"
                             className="w-32 h-32 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                           />
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;