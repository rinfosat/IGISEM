import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-gray-600">38 et 45 Lotissement AL MADINA 1 DEROUA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:inscription@igisem.com" className="text-gray-600 hover:text-red-600">
                  inscription@igisem.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Téléphone</h3>
                <a href="tel:+212600033903" className="text-gray-600 hover:text-red-600">
                  +212 600 033 903
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}