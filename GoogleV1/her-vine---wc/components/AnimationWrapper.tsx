import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animationClass?: string; // e.g., 'animate-slide-in-left', 'animate-slide-in-right', 'animate-fade-in-up'
  delay?: string | number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  animationClass = 'animate-fade-in-up', 
  delay = 0, 
  threshold = 0.15,
  className = '',
  style = {}
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Parse delay - convert string like "0.2s" to number or use number directly
    const delayValue = typeof delay === 'string' 
      ? parseFloat(delay.replace('s', '')) 
      : delay;

    // Set initial state based on animation type
    const getInitialState = () => {
      if (animationClass.includes('slide-in-left')) {
        return { opacity: 0, x: -50, filter: 'blur(10px)' };
      } else if (animationClass.includes('slide-in-right')) {
        return { opacity: 0, x: 50, filter: 'blur(10px)' };
      } else if (animationClass.includes('fade-in-up')) {
        return { opacity: 0, y: 30, filter: 'blur(10px)' };
      }
      // Default fade in
      return { opacity: 0, y: 20 };
    };

    const initialState = getInitialState();
    
    // Set initial styles
    gsap.set(element, initialState);

    // Create animation timeline - slower and smoother
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.6,
      ease: 'power2.out',
      delay: delayValue,
      paused: true, // Start paused, will be played when element is visible
    });

    // Use IntersectionObserver for scroll detection (works with free GSAP)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play();
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
      animation.kill();
    };
  }, [animationClass, delay, threshold]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;