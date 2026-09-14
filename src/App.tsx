import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrowthPipeline from './components/GrowthPipeline';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <GrowthPipeline />
      <Features />
      <Dashboard />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
