import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  const closeButton = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#1a1a1a] border border-red-600 p-4 shadow-[0_0_15px_rgba(255,0,0,0.5)] 
                  max-w-xs transform transition-all duration-500 floating-cta">
      <button 
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
        onClick={closeButton}
      >
        <X size={16} />
      </button>
      
      <h3 className="font-['Press_Start_2P'] text-sm text-white mb-2">SPECIAL OFFER</h3>
      <p className="font-['VT323'] text-lg text-gray-300 mb-3">
        Use code <span className="text-red-600 font-bold">REVOKED25</span> for 25% off your first purchase!
      </p>
      
      <button 
        onClick={scrollToProducts}
        className="w-full bg-red-600 text-black font-['Press_Start_2P'] text-xs px-4 py-2 
                 border border-red-600 hover:bg-transparent hover:text-red-600 
                 transition-all duration-300 flex items-center justify-center neon-glow-sm"
      >
        <ShoppingCart size={14} className="mr-2" />
        SHOP NOW
      </button>
    </div>
  );
};

export default FloatingCTA;