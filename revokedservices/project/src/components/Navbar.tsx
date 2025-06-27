import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Cart from './Cart';
import { useCartStore } from '../store/cartStore';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    console.log('Opening cart, items:', items);
    setIsCartOpen(true);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 shadow-[0_0_10px_rgba(255,0,0,0.5)]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-red-600 font-['Press_Start_2P'] text-xl relative">
            <span className="glitch-text">REVOKED</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="nav-link">PRODUCTS</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#reviews" className="nav-link">REVIEWS</a>
            <a href="#support" className="nav-link">SUPPORT</a>
            <button 
              onClick={handleCartClick}
              className="bg-red-600 text-black font-['Press_Start_2P'] text-xs px-4 py-2 
                       border border-red-600 hover:bg-transparent hover:text-red-600 
                       transition-all duration-300 flex items-center neon-glow"
            >
              <ShoppingCart size={16} className="mr-2" />
              CART ({items.length})
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-red-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-red-900/50">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              <a href="#products" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>PRODUCTS</a>
              <a href="#faq" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a href="#reviews" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>REVIEWS</a>
              <a href="#support" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>SUPPORT</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="bg-red-600 text-black font-['Press_Start_2P'] text-xs px-4 py-2 
                         my-2 border border-red-600 hover:bg-transparent hover:text-red-600 
                         transition-all duration-300 flex items-center justify-center"
              >
                <ShoppingCart size={16} className="mr-2" />
                CART ({items.length})
              </button>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar