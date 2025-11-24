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
    <section id="story" className="relative py-16 md:py-24 lg:py-32 bg-hv-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            {/* Section Label */}
            <div className="flex justify-center mb-8 md:mb-12 lg:mb-20">
                <AnimationWrapper animationClass="animate-fade-in-up" delay="0s">
                    <span className="text-[10px] text-hv-olive uppercase tracking-[0.3em] font-medium border-b border-hv-olive/30 pb-2 font-sans">
                        The Terroir
                    </span>
                </AnimationWrapper>
            </div>

            {/* Centered Heading */}
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <AnimationWrapper animationClass="animate-fade-in-up" delay="0.2s">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-tight text-hv-charcoal mb-4 md:mb-6 lg:mb-8 leading-tight px-4">
                        CRAFTED BY NATURE, <br />
                        <span className="text-hv-terracotta italic">CURATED BY HER.</span>
                    </h2>
                </AnimationWrapper>
            </div>

            {/* Highlights in a Row */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-14 lg:mb-16 px-4">
                {HIGHLIGHTS.map((item, index) => (
                    <AnimationWrapper key={index} animationClass="animate-fade-in-up" delay={`${0.3 + index * 0.1}s`}>
                        <div className="flex items-center gap-2 sm:gap-3 group">
                            {renderIcon(item.icon)}
                            <span className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider sm:tracking-widest text-hv-charcoal/90 whitespace-nowrap">{item.label}</span>
                        </div>
                    </AnimationWrapper>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-end">
                
                {/* Left Column: Image */}
                <div className="lg:col-span-5">
                    <AnimationWrapper animationClass="animate-slide-in-left" delay="0.6s">
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] group">
                             {/* Main Image */}
                             <div className="absolute inset-0 overflow-hidden rounded-sm bg-hv-stone">
                                 <img 
                                    src="/images/terroir.jpeg" 
                                    alt="Terroir" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute inset-0 bg-hv-terracotta/10 mix-blend-multiply pointer-events-none"></div>
                             </div>
                        </div>
                    </AnimationWrapper>
                </div>

                {/* Right Column: Narrative */}
                <div className="lg:col-span-7 lg:pt-24 flex flex-col">
                    <AnimationWrapper animationClass="animate-slide-in-right" delay="0.4s" className="flex flex-col flex-grow">
                        <blockquote className="text-xl sm:text-2xl font-serif font-light leading-relaxed text-hv-charcoal border-l-2 border-hv-terracotta pl-4 sm:pl-6 md:pl-8 mb-8 md:mb-10 lg:mb-12 italic">
                            "Wine is the poetry of the earth, and here at Her Vine, we simply add the melody. An experience designed to slow time."
                            <footer className="mt-4 md:mt-6 text-xs font-sans font-bold uppercase tracking-widest text-hv-terracotta not-italic">— Aloma Jonker, Founder</footer>
                        </blockquote>

                        <div className="space-y-4 md:space-y-6 text-hv-charcoal/70 font-sans text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 lg:mb-12">
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
                        
                        <div className="mt-auto flex gap-2 sm:gap-3 items-end overflow-x-auto scrollbar-hide sm:overflow-x-visible">
                           <img 
                             src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop" 
                             alt="Wine barrels"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400&auto=format&fit=crop" 
                             alt="Wine bottle"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=400&auto=format&fit=crop" 
                             alt="Wine and cheese pairing"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop" 
                             alt="Wine and flowers"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1574871866887-911cff04aef1?q=80&w=400&auto=format&fit=crop" 
                             alt="Grapes on vine"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
                           />
                           <img 
                             src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=400&auto=format&fit=crop" 
                             alt="Wine tasting glasses"
                             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0 shadow-none"
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