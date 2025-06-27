import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-[#1a1a1a] border border-red-900/30 p-6 rounded-md relative overflow-hidden
                  hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-['VT323'] text-xl text-white flex items-center">
            {review.customerName}
            {review.verified && (
              <span className="ml-2 text-green-500 flex items-center" title="Verified Purchase">
                <CheckCircle size={14} className="mr-1" />
                <span className="text-sm">VERIFIED</span>
              </span>
            )}
          </h3>
          <p className="font-['VT323'] text-sm text-gray-400">{review.platform} • {review.date}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
            />
          ))}
        </div>
      </div>
      
      <p className="font-['VT323'] text-lg text-gray-300">"{review.review}"</p>
      
      {/* Scanline effect */}
      <div className="scanlines-small absolute inset-0 pointer-events-none opacity-10"></div>
    </div>
  );
};

export default ReviewCard;