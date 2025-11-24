import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { X } from 'lucide-react';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
  mobile?: boolean;
  onCallStart?: () => void;
  onConnectionChange?: (connected: boolean) => void;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({ 
  apiKey, 
  assistantId, 
  config = {},
  mobile = false,
  onCallStart,
  onConnectionChange
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  
  const requiredPassword = import.meta.env.VITE_VAPI_PASSWORD || '';

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
      // Notify parent of connection change
      if (onConnectionChange) {
        onConnectionChange(true);
      }
      // Close mobile menu if callback provided (for desktop behavior)
      if (onCallStart) {
        onCallStart();
      }
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      // Notify parent of connection change
      if (onConnectionChange) {
        onConnectionChange(false);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const handleStartClick = () => {
    // If password is required, show modal
    if (requiredPassword) {
      setShowPasswordModal(true);
      setPassword('');
      setPasswordError('');
      // Focus input after animation completes (prevents zoom)
      setTimeout(() => {
        passwordInputRef.current?.focus();
      }, 350);
    } else {
      // No password required, start directly
      startCall();
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === requiredPassword) {
      setShowPasswordModal(false);
      setPassword('');
      setPasswordError('');
      startCall();
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const startCall = () => {
    if (vapi) {
      vapi.start(assistantId);
      // Note: onCallStart will be called via the 'call-start' event listener
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <>
      {/* Floating End Call button for mobile when connected */}
      {isConnected && mobile && (
        <button
          onClick={endCall}
          className="fixed left-1/2 -translate-x-1/2 z-[60] max-w-xs w-[calc(100%-2rem)] inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-300 rounded-sm border bg-hv-earth text-white border-transparent hover:bg-hv-earth/90 animate-pulse-ring shadow-lg"
          style={{
            top: 'calc(env(safe-area-inset-top, 0px) + 1rem)',
          }}
        >
          End Call
        </button>
      )}

      {/* Regular button - hidden on mobile when connected, shown otherwise */}
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={isConnected ? endCall : handleStartClick}
          className={`${mobile && isConnected ? 'hidden' : mobile ? 'w-full inline-flex' : 'hidden sm:inline-flex'} items-center justify-center gap-2 px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-300 rounded-sm border relative ${
            isConnected
              ? 'bg-hv-earth text-white border-transparent hover:bg-hv-earth animate-pulse-ring'
              : 'bg-hv-terracotta text-white border-transparent hover:bg-hv-earth'
          }`}
        >
          {isConnected ? 'End Call' : 'Talk to Assistant'}
        </button>

      {/* Password Modal - Small glass effect popup */}
      {showPasswordModal && (
        <>
          {/* Backdrop overlay with fade animation */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={() => {
              setShowPasswordModal(false);
              setPassword('');
              setPasswordError('');
            }}
          />
          
          {/* Glass modal positioned below button with smooth animation */}
          <div 
            className={`${mobile ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-sm animate-[modalSlideInMobile_0.3s_ease-out]' : 'absolute top-full right-0 mt-2 w-72 animate-[modalSlideIn_0.3s_ease-out]'} z-50 rounded-sm overflow-hidden`}
            style={{
              background: 'rgba(245, 242, 235, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(188, 108, 37, 0.2)',
              boxShadow: '0 12px 40px rgba(40, 40, 40, 0.15), 0 0 0 1px rgba(188, 108, 37, 0.1)',
            }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-hv-charcoal">
                  Password
                </h3>
                <button
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                    setPasswordError('');
                  }}
                  className="p-1 hover:bg-hv-stone/50 rounded-sm transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-hv-charcoal/60" />
                </button>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                <input
                  ref={passwordInputRef}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  className="w-full px-4 py-2.5 text-base font-sans border border-hv-terracotta/30 rounded-sm focus:outline-none focus:border-hv-terracotta focus:ring-1 focus:ring-hv-terracotta/20 text-hv-charcoal bg-white/80 placeholder:text-hv-charcoal/40 mb-2 transition-all"
                  placeholder="Enter password"
                  style={{ fontSize: '16px' }}
                />
                {passwordError && (
                  <p className="text-[10px] text-red-600 mb-3 font-sans">{passwordError}</p>
                )}

                <div className="flex gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordModal(false);
                      setPassword('');
                      setPasswordError('');
                    }}
                    className="flex-1 px-4 py-2.5 text-xs font-sans font-medium uppercase tracking-widest border border-hv-charcoal/20 text-hv-charcoal rounded-sm hover:bg-hv-stone/50 transition-colors bg-transparent"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 text-xs font-sans font-medium uppercase tracking-widest bg-hv-terracotta text-white rounded-sm hover:bg-hv-earth transition-colors"
                  >
                    Connect
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      </div>
    </>
  );
};

export default VapiWidget;

