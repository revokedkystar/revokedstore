import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Product, SubscriptionOption } from '../types';
import ProductModal from './ProductModal';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  
  const IconComponent = (Icons as any)[product.platformIcon.charAt(0).toUpperCase() + product.platformIcon.slice(1)];
  
  const getStatusColor = () => {
    switch(product.stockStatus) {
      case 'In Stock': return 'text-green-500';
      case 'Low Stock': return 'text-yellow-500';
      case 'Out of Stock': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const handleOptionSelect = (option: SubscriptionOption) => {
    const cartItem = {
      productId: product.id,
      platform: product.platform,
      accountType: product.accountType,
      duration: option.duration,
      price: option.price
    };
    
    console.log('Adding to cart:', cartItem);
    addItem(cartItem);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#1a1a1a] border border-red-900/30 rounded-md overflow-hidden 
                    transform transition-all duration-300 hover:scale-105 
                    hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] product-card relative">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {IconComponent && <IconComponent size={24} className="text-red-600 mr-2" />}
              <h3 className="font-['Press_Start_2P'] text-sm text-white">{product.platform}</h3>
            </div>
            <span className={`font-['VT323'] text-lg ${getStatusColor()}`}>
              {product.stockStatus}
            </span>
          </div>
          
          <div className="mb-4 flex-grow">
            <h4 className="font-['VT323'] text-xl text-white mb-2">{product.accountType}</h4>
            <p className="font-['VT323'] text-gray-400 text-md">{product.description}</p>
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <span className="font-['Press_Start_2P'] text-red-600 text-md">
              From ${product.subscriptionOptions[0].price.toFixed(2)}
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 text-black font-['VT323'] text-lg px-4 py-2 
                       border border-red-600 hover:bg-transparent hover:text-red-600 
                       transition-all duration-300 flex items-center neon-glow-sm"
              disabled={product.stockStatus === 'Out of Stock'}
            >
              <ShoppingCart size={16} className="mr-2" />
              ADD TO CART
            </button>
          </div>
        </div>
        
        <div className="scanlines-small absolute inset-0 pointer-events-none opacity-20"></div>
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={() => setIsModalOpen(false)}
          onSelectOption={handleOptionSelect}
        />
      )}
    </>
  );
};

export default ProductCard