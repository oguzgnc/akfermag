import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import misir1 from '../assets/misir.jpeg';
import misir2 from '../assets/misir2.jpeg';
import pancar1 from '../assets/pancar.jpeg';
import pancar2 from '../assets/pancar2.jpeg';
import granul1 from '../assets/granul.jpeg';
import granul2 from '../assets/granul.png';

const ImageSlider = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: misir1,
      title: translations?.slider?.slide1Title || 'Mısır Tarlaları',
      description: translations?.slider?.slide1Desc || 'Verimli mısır üretimi için özel çözümler'
    },
    {
      id: 2,
      image: pancar1,
      title: translations?.slider?.slide2Title || 'Şeker Pancarı',
      description: translations?.slider?.slide2Desc || 'Kaliteli şeker pancarı üretimi'
    },
    {
      id: 3,
      image: granul1,
      title: translations?.slider?.slide3Title || 'Granül Gübreler',
      description: translations?.slider?.slide3Desc || 'Yüksek kaliteli granül gübre çözümleri'
    },
    {
      id: 4,
      image: misir2,
      title: translations?.slider?.slide4Title || 'Modern Tarım',
      description: translations?.slider?.slide4Desc || 'Teknoloji ile donatılmış tarım alanları'
    },
    {
      id: 5,
      image: pancar2,
      title: translations?.slider?.slide5Title || 'Verimli Topraklar',
      description: translations?.slider?.slide5Desc || 'Sağlıklı toprak, kaliteli ürün'
    },
    {
      id: 6,
      image: granul2,
      title: translations?.slider?.slide6Title || 'Profesyonel Ürünler',
      description: translations?.slider?.slide6Desc || 'Tarımsal başarı için güçlü ortaklık'
    }
  ];

  // Otomatik geçiş
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 md:w-12 h-2 md:h-2.5 bg-white'
                : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
