import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-[#1a1a1a] border border-red-600 p-8 max-w-md w-full mx-4 text-center
                    shadow-[0_0_15px_rgba(255,0,0,0.3)]">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-500" />
        </div>
        
        <h1 className="font-['Press_Start_2P'] text-xl text-white mb-4">
          PAYMENT SUCCESSFUL
        </h1>
        
        <p className="font-['VT323'] text-xl text-gray-300 mb-6">
          Your order has been processed successfully. Check your email for account details.
        </p>
        
        <p className="font-['VT323'] text-lg text-gray-400">
          You will be redirected to the homepage in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;