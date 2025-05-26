import { useEffect, useRef, useState } from 'react';
import TypingAnimation from './TypingAnimation';

import ParticleAnimation from '../components/ui/ParticleAnimation'; 

interface HeroProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ aboutRef }: HeroProps) {
  
  const [showFullText, setShowFullText] = useState(false);
   // Hook to get reference
  const scrollToSection = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ensures it scrolls to the top of the section
    });
  };

  useEffect(() => {
    // Show the full description text after typing animation is complete
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 2500); // Wait for typing to complete
    
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      <ParticleAnimation />
      
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b z-[1]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-2 xs:px-3 sm:px-6 md:px-8 pt-1 xs:pt-2 sm:pt-6 md:pt-8 pb-4 xs:pb-6 sm:pb-12 md:pb-16">
        <h1 className="heading-1 mb-2 xs:mb-3 sm:mb-6 md:mb-8 text-white">
          <span className="typing-container">
            <TypingAnimation 
              text="MIT EDITORIAL BOARD" 
              typingSpeed={100} 
              delay={500}
              className="shimmer-text text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide"
            />
          </span>
        </h1>
        
        <p className={`text-xs xs:text-sm sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 xs:mb-6 sm:mb-10 md:mb-12 transition-opacity duration-1000 ${showFullText ? 'opacity-100' : 'opacity-0'}`}>
          Welcome to the MIT Editorial Board, the creative hub and driving force behind the Manipal Institute of Technology's official student body and yearbook committee.
        </p>
        
        <div className={`transition-all duration-1000 transform ${showFullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-white hover:bg-blue-100 text-[#1a1f2c] font-semibold py-1 xs:py-1.5 sm:py-3 px-4 xs:px-5 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-[10px] xs:text-xs sm:text-base" onClick={scrollToSection}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
