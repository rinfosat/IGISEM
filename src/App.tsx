import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Formations from './components/Formations';
import DirectorMessage from './components/DirectorMessage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Formations />
        <DirectorMessage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;