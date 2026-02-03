import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Sparkles, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import ProductName from './ProductName';
import product1 from '../assets/agrosol-max-granulous-17.png';
import product2 from '../assets/agrosol-max-fully.png';
import product3 from '../assets/agrosol-max-mix.png';
import product4 from '../assets/agrosol-max-topmix.png';
import product5 from '../assets/agrosol-max-17-33.png';
import product6 from '../assets/agrosol-max-cinko.png';

const HeroSection = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = translations.heroProducts.map((product, index) => ({
    ...product,
    image: [product4, product2, product3, product1, product5, product6][index]
  }));

  const currentProduct = products[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-akfermag-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-akfermag-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative">
          {/* Navigation Buttons - Positioned relative to grid container */}
          {/* Left Navigation Button - Responsive positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-[200px] md:top-[250px] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-akfermag-blue hover:text-white transition-all duration-200 group"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Navigation Button - Responsive positioning */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-[200px] md:top-[250px] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-akfermag-blue hover:text-white transition-all duration-200 group"
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Left Side - Product Image */}
          <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
            <div className="relative z-10 w-full max-w-lg transition-all duration-500 ease-in-out" key={currentIndex}>
              {currentProduct.id === 'agrosol-max-topmix' && (
                <div className="absolute top-0 left-0 z-30 overflow-hidden w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <div className="absolute top-4 -left-6 md:top-6 md:-left-8 lg:top-8 lg:-left-10 transform -rotate-45 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center font-bold text-xs md:text-sm lg:text-lg py-1 px-8 md:py-1.5 md:px-12 lg:py-2 lg:px-16 shadow-2xl animate-pulse">
                    {translations.products.newProduct}
                  </div>
                </div>
              )}
              <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center relative">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fadeIn relative z-10"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                />
                {/* Floating Shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 md:h-6 lg:h-8 bg-gray-900/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-akfermag-blue' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-akfermag-blue/10 to-akfermag-green/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">

            <div className="transition-all duration-500 ease-in-out" key={`content-${currentIndex}`}>
              {/* Title */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-slideInRight">
                <ProductName name={currentProduct.name} />
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed mt-3 md:mt-4 animate-slideInRight" style={{ animationDelay: '0.1s' }}>
                {currentProduct.subtitle}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 md:space-y-4 mt-4 md:mt-6">
              {currentProduct.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 md:gap-3 group animate-slideInRight"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-akfermag-green to-akfermag-dark-green rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-200">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1 md:pt-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 mt-4 md:mt-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <Link to={`/product/${currentProduct.id}`}>
                  <Button size="lg" className="group">
                    {translations.hero.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="#products">
                  <Button variant="outline" size="lg">
                    {translations.nav.products}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
