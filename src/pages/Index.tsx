import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <WhyChoose />
      <Pricing />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
      <style>{`
        #root {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Index;
