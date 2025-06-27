import React from 'react';
import { X } from 'lucide-react';
import { Product, SubscriptionOption } from '../types';
import { createCheckoutSession } from '../lib/stripe';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onSelectOption: (option: SubscriptionOption) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSelectOption }) => {
  const handleCheckout = async (option: SubscriptionOption) => {
    try {
      const checkoutUrl = await createCheckoutSession(option.priceId, 'payment');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Failed to create checkout session:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
      
      <div className="relative bg-[#1a1a1a] border border-red-600 p-6 max-w-md w-full 
                    shadow-[0_0_15px_rgba(255,0,0,0.3)] z-50">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h3 className="font-['Press_Start_2P'] text-lg text-white mb-2">{product.platform}</h3>
        <p className="font-['VT323'] text-xl text-gray-400 mb-6">{product.accountType}</p>

        <div className="space-y-4">
          {product.subscriptionOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleCheckout(option)}
              className="w-full bg-[#111] border border-red-900/30 p-4 hover:border-red-600 
                       transition-all duration-300 group"
            >
              <div className="flex justify-between items-center">
                <span className="font-['VT323'] text-xl text-white group-hover:text-red-600">
                  {option.duration}
                </span>
                <span className="font-['Press_Start_2P'] text-sm text-red-600">
                  ${option.price.toFixed(2)}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-red-900/30">
          <p className="font-['VT323'] text-sm text-gray-500 text-center">
            All subscriptions include warranty and 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;