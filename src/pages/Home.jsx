import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ImageSlider from '../components/common/ImageSlider';
import ProductGrid from '../components/product/ProductGrid';
import ContactSection from '../components/sections/ContactSection';

const Home = ({ translations, language }) => {
  return (
    <main>
      <ImageSlider translations={translations} />
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
