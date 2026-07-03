import { useState, useEffect } from 'react';
import Preloader from './components/ui/Preloader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutProcess from './components/sections/AboutProcess';
import MenuShowcase from './components/sections/MenuShowcase';
import TestimonialsContact from './components/sections/TestimonialsContact';
import Footer from './components/layout/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-flowie-cream overflow-x-hidden">
      <Preloader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <AboutProcess />
            <MenuShowcase />
            <TestimonialsContact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;