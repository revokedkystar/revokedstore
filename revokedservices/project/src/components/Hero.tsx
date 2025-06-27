import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const letters = title.textContent?.split('') || [];
    title.textContent = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.1}s`;
      span.className = 'inline-block animate-flicker';
      title.appendChild(span);
    });
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Scanline effect overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none"></div>
      
      {/* CRT vignette effect */}
      <div className="vignette absolute inset-0 pointer-events-none"></div>
      
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="glitch-container mb-4">
          <h1 ref={titleRef} className="text-red-600 font-['Press_Start_2P'] text-3xl md:text-5xl mb-6 glitch-text leading-relaxed">
            REVOKED SERVICES
          </h1>
        </div>
        
        <h2 className="font-['VT323'] text-2xl md:text-4xl text-white mb-6 typing-animation">
          PREMIUM DIGITAL ACCOUNTS_<span className="blink">|</span>
        </h2>
        
        <p className="font-['VT323'] text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
          Secure access to premium digital content at unbeatable prices.
          All accounts come with warranty and 24/7 support.
        </p>
        
        <button 
          onClick={scrollToProducts}
          className="bg-red-600 text-black font-['Press_Start_2P'] text-sm px-6 py-3 
                   border border-red-600 hover:bg-transparent hover:text-red-600 
                   transition-all duration-300 neon-glow mt-4"
        >
          BROWSE ACCOUNTS
        </button>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown size={24} className="text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Hero;