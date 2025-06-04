import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Training from './components/Training';
import Contact from './components/Contact';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Purwanto';
  }, []);

  return (
    <div className="min-h-screen bg-light dark:bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Training />
        <Contact />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;