import React from 'react';
import { reviews } from '../data/reviews';
import ReviewCard from './ReviewCard';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Press_Start_2P'] text-2xl md:text-3xl text-red-600 mb-8 text-center glitch-text-sm">
          CUSTOMER REVIEWS
        </h2>
        
        <div className="mb-8 text-center">
          <div className="inline-flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-6 h-6 text-yellow-500 fill-yellow-500" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
            ))}
          </div>
          <p className="font-['VT323'] text-2xl text-white mb-2">4.7 / 5.0</p>
          <p className="font-['VT323'] text-lg text-gray-400">Based on {reviews.length} verified TrustPilot reviews</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-transparent text-red-600 font-['Press_Start_2P'] text-sm px-6 py-3 
                           border border-red-600 hover:bg-red-600 hover:text-black 
                           transition-all duration-300">
            VIEW ALL REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;