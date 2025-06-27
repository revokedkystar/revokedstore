import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, clearCart, getTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
      
      <div className="relative bg-[#1a1a1a] border border-red-600 w-full max-w-2xl max-h-[80vh] overflow-y-auto
                    shadow-[0_0_15px_rgba(255,0,0,0.3)] z-50">
        <div className="sticky top-0 bg-[#1a1a1a] p-6 border-b border-red-900/30 flex justify-between items-center">
          <h2 className="font-['Press_Start_2P'] text-xl text-white">CART</h2>
          <button 
            className="text-gray-400 hover:text-red-600 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="p-6 text-center">
            <p className="font-['VT323'] text-xl text-gray-400">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-6">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center justify-between mb-4 pb-4 border-b border-red-900/30 last:border-0 last:mb-0 last:pb-0"
                >
                  <div>
                    <h3 className="font-['VT323'] text-xl text-white">{item.platform}</h3>
                    <p className="font-['VT323'] text-lg text-gray-400">{item.accountType}</p>
                    <p className="font-['VT323'] text-md text-gray-500">{item.duration}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-['Press_Start_2P'] text-sm text-red-600">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-[#1a1a1a] p-6 border-t border-red-900/30">
              <div className="flex justify-between items-center mb-4">
                <span className="font-['Press_Start_2P'] text-sm text-white">TOTAL:</span>
                <span className="font-['Press_Start_2P'] text-lg text-red-600">
                  ${getTotal().toFixed(2)}
                </span>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center gap-2 bg-transparent text-red-600 
                           font-['VT323'] text-lg px-4 py-2 border border-red-600 
                           hover:bg-red-600 hover:text-black transition-all duration-300"
                >
                  <Trash2 size={16} />
                  CLEAR CART
                </button>
                <button
                  className="flex-1 bg-red-600 text-black font-['Press_Start_2P'] text-sm px-4 py-2 
                           border border-red-600 hover:bg-transparent hover:text-red-600 
                           transition-all duration-300 neon-glow-sm"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart