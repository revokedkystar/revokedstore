import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const platforms = ['all', ...new Set(products.map(product => product.platform.toLowerCase()))];

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.platform.toLowerCase() === filter;
    const matchesSearch = 
      product.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.accountType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Press_Start_2P'] text-2xl md:text-3xl text-red-600 mb-8 text-center glitch-text-sm">
          AVAILABLE ACCOUNTS
        </h2>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {platforms.map(platform => (
              <button
                key={platform}
                className={`px-4 py-2 font-['VT323'] text-lg border ${
                  filter === platform 
                    ? 'bg-red-600 text-black border-red-600' 
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-red-600 hover:text-red-600'
                } transition-all duration-300`}
                onClick={() => setFilter(platform)}
              >
                {platform.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search accounts..."
              className="bg-[#1a1a1a] border border-gray-700 text-white py-2 pl-10 pr-4 
                       font-['VT323'] text-lg focus:outline-none focus:border-red-600 
                       w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-['VT323'] text-2xl text-gray-400">
              NO ACCOUNTS FOUND_<span className="blink">|</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;