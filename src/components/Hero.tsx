import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Réalisez vos ambitions professionnelles avec IGISEM
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Formation professionnelle d'excellence en Management, Administration et Logistique
        </p>
        <a 
          href="#formations"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Découvrir nos formations
        </a>
      </div>
    </section>
  );
}