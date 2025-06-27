import React from 'react';
import { faqs } from '../data/faqs';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  // Group FAQs by category
  const categories = {
    purchase: faqs.filter(faq => faq.category === 'purchase'),
    security: faqs.filter(faq => faq.category === 'security'),
    delivery: faqs.filter(faq => faq.category === 'delivery'),
    warranty: faqs.filter(faq => faq.category === 'warranty'),
    payment: faqs.filter(faq => faq.category === 'payment')
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-['Press_Start_2P'] text-2xl md:text-3xl text-red-600 mb-8 text-center glitch-text-sm">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-['Press_Start_2P'] text-md text-white mb-4 border-b border-red-900/30 pb-2">
              PURCHASES & DELIVERY
            </h3>
            {[...categories.purchase, ...categories.delivery].map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          
          <div>
            <h3 className="font-['Press_Start_2P'] text-md text-white mb-4 border-b border-red-900/30 pb-2">
              SECURITY & WARRANTY
            </h3>
            {[...categories.security, ...categories.warranty, ...categories.payment].map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;