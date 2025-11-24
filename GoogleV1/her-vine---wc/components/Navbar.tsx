import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import VapiWidget from './VapiWidget';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssistantConnected, setIsAssistantConnected] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    // Only allow closing if assistant is not connected
    if (!isAssistantConnected) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    // If assistant is connected, keep menu open
    if (isAssistantConnected) {
      return;
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Auto-open menu when assistant connects
  useEffect(() => {
    if (isAssistantConnected && !isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
  }, [isAssistantConnected]);

  return (
    <header 
      className={`sticky lg:fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-hv-cream/90 backdrop-blur-xl border-hv-charcoal/5 py-4' 
          : 'bg-black/80 backdrop-blur-sm border-white/5 py-6'
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
             <span className={`text-2xl font-serif tracking-widest uppercase font-medium transition-colors duration-300 ${isScrolled ? 'text-hv-charcoal group-hover:text-hv-terracotta' : 'text-white group-hover:text-hv-cream/80'}`}>
                Her Vine
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors relative group ${
                  isScrolled 
                    ? 'text-hv-charcoal/60 hover:text-hv-charcoal' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
             {/* Dropdown Example (Visual only based on template) */}
             <div className="relative group h-full flex items-center">
                <button className={`text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-1 ${
                   isScrolled ? 'text-hv-charcoal/60 hover:text-hv-charcoal' : 'text-white/80 hover:text-white'
                }`}>
                    Services
                    <ChevronDown className="w-3 h-3" />
                </button>
             </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a 
              href="#contact" 
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-300 rounded-sm border ${
                isScrolled 
                  ? 'bg-hv-terracotta text-white border-transparent hover:bg-hv-earth' 
                  : 'bg-hv-terracotta/90 text-white border-transparent hover:bg-hv-terracotta'
              }`}
            >
              Book Tasting
            </a>
            
            {import.meta.env.VITE_VAPI_API_KEY && import.meta.env.VITE_VAPI_ASSISTANT_ID && (
              <VapiWidget 
                apiKey={import.meta.env.VITE_VAPI_API_KEY}
                assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
              />
            )}
            
            <button 
              className="lg:hidden p-2 -mr-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              disabled={isAssistantConnected}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-hv-charcoal' : 'text-white'} ${isAssistantConnected ? 'opacity-50 cursor-not-allowed' : ''}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-hv-charcoal' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Expands and pushes content down */}
      <div 
        className={`lg:hidden bg-hv-cream border-b border-hv-charcoal/10 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-[800px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          {/* Navigation Items */}
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => {
                  // Only close menu if assistant is not connected
                  if (!isAssistantConnected) {
                    closeMobileMenu();
                  }
                }}
                className="text-xl font-serif text-hv-charcoal hover:text-hv-terracotta transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="pt-4 space-y-3 border-t border-hv-charcoal/10">
            <a 
              href="#contact" 
              onClick={() => {
                // Only close menu if assistant is not connected
                if (!isAssistantConnected) {
                  closeMobileMenu();
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-300 rounded-sm border bg-hv-terracotta text-white border-transparent hover:bg-hv-earth"
            >
              Book Tasting
            </a>
            
            {import.meta.env.VITE_VAPI_API_KEY && import.meta.env.VITE_VAPI_ASSISTANT_ID && (
              <VapiWidget 
                apiKey={import.meta.env.VITE_VAPI_API_KEY}
                assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
                mobile={true}
                onConnectionChange={setIsAssistantConnected}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;