import React from 'react';

export default function DirectorMessage() {
  return (
    <section id="directeur" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
              alt="M. Charaf Eddine AAHDI"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Mot du Directeur</h2>
            <blockquote className="text-xl text-gray-600 italic mb-4">
              "Notre mission est de former les leaders de demain en leur donnant les compétences 
              et l'expertise nécessaires pour réussir dans un monde professionnel en constante évolution."
            </blockquote>
            <p className="text-gray-800 font-semibold">M. Charaf Eddine AAHDI</p>
            <p className="text-gray-600">Directeur du Groupe IGISEM</p>
          </div>
        </div>
      </div>
    </section>
  );
}