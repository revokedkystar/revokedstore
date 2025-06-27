import React from 'react';
import { ShoppingCart, Shield, Clock, CreditCard, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-['Press_Start_2P'] text-sm text-red-600 mb-4">REVOKED</h3>
            <p className="font-['VT323'] text-lg text-gray-400 mb-4">
              Premium digital accounts marketplace with secure transactions and 24/7 support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Github size={20} />
              </a>
              {/* Add more social icons here */}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Press_Start_2P'] text-sm text-white mb-4">QUICK LINKS</h3>
            <ul className="font-['VT323'] text-lg space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-red-600 transition-colors">Products</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-red-600 transition-colors">FAQ</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-red-600 transition-colors">Reviews</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-red-600 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Press_Start_2P'] text-sm text-white mb-4">LEGAL</h3>
            <ul className="font-['VT323'] text-lg space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Press_Start_2P'] text-sm text-white mb-4">NEWSLETTER</h3>
            <p className="font-['VT323'] text-lg text-gray-400 mb-4">
              Subscribe for new product alerts and exclusive deals.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-[#1a1a1a] border border-gray-700 px-4 py-2 font-['VT323'] text-lg
                         text-white focus:outline-none focus:border-red-600 flex-grow"
              />
              <button 
                type="submit"
                className="bg-red-600 text-black border border-red-600 px-4 font-['VT323'] text-lg"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center">
              <ShoppingCart size={20} className="text-red-600 mr-3" />
              <span className="font-['VT323'] text-lg text-gray-400">Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="text-red-600 mr-3" />
              <span className="font-['VT323'] text-lg text-gray-400">Secure Payments</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-red-600 mr-3" />
              <span className="font-['VT323'] text-lg text-gray-400">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <CreditCard size={20} className="text-red-600 mr-3" />
              <span className="font-['VT323'] text-lg text-gray-400">Multiple Payment Methods</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-['VT323'] text-gray-600 text-md">
              &copy; {new Date().getFullYear()} Revoked Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;