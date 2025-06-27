import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Support from './components/Support';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['VT323']">
      <Navbar />
      <Hero />
      <Products />
      <FAQ />
      <Reviews />
      <Support />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;