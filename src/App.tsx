import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppointmentForm from './components/AppointmentForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Testimonials language={language} />
      <FAQ language={language} />
      <AppointmentForm language={language} />
      <ContactForm language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
