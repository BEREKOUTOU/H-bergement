// src/components/Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/images/hero-bg-new.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Vivez le luxe au bord de l'océan
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Découvrez nos exclusifs logements avec vue sur l'océan
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-white/85 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Réservez votre séjour
            </button>
            <button 
              onClick={() => navigate('/apartments')}
              className="bg-blue-600/85 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600/90 transition-colors"
            >
              Explorez nos appartements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;