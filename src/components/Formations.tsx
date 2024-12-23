import React from 'react';
import { BookOpen, Truck, Award, Briefcase } from 'lucide-react';

const formations = [
  {
    icon: <Briefcase className="h-12 w-12 text-red-600" />,
    title: "Management et Administration",
    description: "Formation complète en gestion d'entreprise avec des parcours adaptés du niveau Technicien au Master Pro.",
    levels: ["Master Pro", "Licence Pro", "Technicien Spécialisé"]
  },
  {
    icon: <Truck className="h-12 w-12 text-red-600" />,
    title: "Logistique et Transport",
    description: "Expertise en gestion logistique et transport international pour répondre aux besoins du marché.",
    levels: ["Master Pro", "Licence Pro", "Technicien Spécialisé"]
  },
  {
    icon: <Award className="h-12 w-12 text-red-600" />,
    title: "VAE",
    description: "Validation des Acquis de l'Expérience pour valoriser votre parcours professionnel.",
    levels: ["Accompagnement personnalisé", "Validation officielle"]
  },
  {
    icon: <BookOpen className="h-12 w-12 text-red-600" />,
    title: "Formations Spécialisées",
    description: "Modules courts et formations sur mesure pour les professionnels.",
    levels: ["Formations courtes", "Certifications"]
  }
];

export default function Formations() {
  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Formations</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{formation.icon}</div>
              <h3 className="text-xl font-bold mb-3">{formation.title}</h3>
              <p className="text-gray-600 mb-4">{formation.description}</p>
              <ul className="space-y-2">
                {formation.levels.map((level, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {level}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}