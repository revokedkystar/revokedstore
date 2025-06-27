import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-red-900/30 bg-[#1a1a1a] hover:shadow-[0_0_10px_rgba(255,0,0,0.2)] transition-all duration-300">
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-['VT323'] text-xl text-white text-left">{faq.question}</h3>
        <span className="text-red-600 ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 border-t border-red-900/30">
          <p className="font-['VT323'] text-lg text-gray-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;