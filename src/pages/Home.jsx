import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductGrid from '../components/ProductGrid';
import ContactSection from '../components/ContactSection';

const Home = ({ translations, language }) => {
  return (
    <main>
      <section id="home">
        <HeroSection translations={translations} />
      </section>
      <section id="about">
        <AboutSection translations={translations} />
      </section>
      <section id="products">
        <ProductGrid translations={translations} language={language} />
      </section>
      <section id="contact">
        <ContactSection translations={translations} />
      </section>
    </main>
  );
};

export default Home;
