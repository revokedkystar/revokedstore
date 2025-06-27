import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowRight } from 'lucide-react';

const Support: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setMessage('');
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section id="support" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-['Press_Start_2P'] text-2xl md:text-3xl text-red-600 mb-8 text-center glitch-text-sm">
          SUPPORT CENTER
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-['Press_Start_2P'] text-lg text-white mb-6">CONTACT US</h3>
            
            <div className="mb-8">
              <div className="bg-[#1a1a1a] border border-red-900/30 p-6 mb-6 hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300">
                <div className="flex items-center">
                  <MessageSquare size={24} className="text-red-600 mr-4" />
                  <div>
                    <h4 className="font-['VT323'] text-xl text-white">Discord Server</h4>
                    <p className="font-['VT323'] text-lg text-gray-400 mb-2">Fastest support option - typically &lt; 10 minutes response time</p>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="font-['VT323'] text-green-500 text-sm">ONLINE NOW</span>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://discord.gg/DEsxx4TdKB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center font-['VT323'] text-lg text-red-600 hover:text-red-400 transition-colors"
                >
                  JOIN OUR DISCORD <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
              
              <div className="bg-[#1a1a1a] border border-red-900/30 p-6 hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300">
                <div className="flex items-center">
                  <Mail size={24} className="text-red-600 mr-4" />
                  <div>
                    <h4 className="font-['VT323'] text-xl text-white">Email Support</h4>
                    <p className="font-['VT323'] text-lg text-gray-400 mb-2">Response within 24 hours</p>
                    <p className="font-['VT323'] text-lg text-white">support@revokedservices.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-['Press_Start_2P'] text-sm text-white mb-4">OPERATING HOURS</h4>
              <p className="font-['VT323'] text-lg text-gray-400 mb-1">DISCORD: 24/7 Support</p>
              <p className="font-['VT323'] text-lg text-gray-400">EMAIL: Mon-Fri, 9AM-5PM EST</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Press_Start_2P'] text-lg text-white mb-6">MESSAGE US</h3>
            
            {submitted ? (
              <div className="bg-[#1a1a1a] border border-green-600 p-6 text-center">
                <p className="font-['VT323'] text-xl text-green-500 mb-2">MESSAGE SENT SUCCESSFULLY</p>
                <p className="font-['VT323'] text-lg text-gray-400">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-red-900/30 p-6">
                <div className="mb-4">
                  <label htmlFor="email" className="block font-['VT323'] text-lg text-white mb-2">
                    YOUR EMAIL:
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#111] border border-gray-700 p-3 font-['VT323'] text-lg text-white
                             focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="enter.your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block font-['VT323'] text-lg text-white mb-2">
                    YOUR MESSAGE:
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-[#111] border border-gray-700 p-3 font-['VT323'] text-lg text-white
                             focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Type your message here..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-black font-['Press_Start_2P'] text-sm px-6 py-3 
                           border border-red-600 hover:bg-transparent hover:text-red-600 
                           transition-all duration-300 neon-glow-sm"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <p className="font-['VT323'] text-sm text-gray-500">
                By contacting us you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;