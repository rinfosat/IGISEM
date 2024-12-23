import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-800">IGISEM</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-red-600">Accueil</a>
            <a href="#formations" className="text-gray-600 hover:text-red-600">Formations</a>
            <a href="#vae" className="text-gray-600 hover:text-red-600">VAE</a>
            <a href="#directeur" className="text-gray-600 hover:text-red-600">Mot du Directeur</a>
            <a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}