import React, { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animationClass?: string; // e.g., 'animate-fade-in-up'
  delay?: string;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  animationClass = 'animate-fade-in-up', 
  delay = '0s', 
  threshold = 0.15,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin: "0px 0px -50px 0px" });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? 'animate-running' : 'animate-paused opacity-0-start'} ${animationClass}`}
      style={{ animationDelay: delay, ...style }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;