import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import misir1 from '../assets/misir.webp';
import misir2 from '../assets/misir2.webp';
import pancar1 from '../assets/pancar.webp';
import tarladeneme from '../assets/tarladeneme.webp';
import pancar2 from '../assets/pancar2.webp';
import image1 from '../assets/1.webp';
import image2 from '../assets/2.webp';
import image3 from '../assets/3.webp';
import image4 from '../assets/4.webp';
import image6 from '../assets/6.webp';
import image7 from '../assets/7.webp';
import granulFNZvuk0 from '../assets/granul-fNZvuk0_.webp';
import granullBnGw9vV7 from '../assets/granull-BnGw9vV7.webp';
import kristalJHbopA8m from '../assets/kristal-jHbopA8m.jpg';
import manyezitgorselC4iJGDzC from '../assets/manyezitgorsel-C4iJGDzC.webp';

const ImageSlider = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image1: misir1,
      image2: misir2,
      image2Position: 'top',
      title: translations?.slider?.slide1Title || 'Mısır Tarlaları',
      description: translations?.slider?.slide1Desc || 'Verimli mısır üretimi için özel çözümler'
    },
    {
      id: 2,
      image: image3,
      singleImage: true,
      title: translations?.slider?.slide2Title || 'Modern Tarım',
      description: translations?.slider?.slide2Desc || 'Teknoloji ile donatılmış tarım alanları'
    },
    {
      id: 3,
      image1: image7,
      image2: image2,
      title: translations?.slider?.slide3Title || 'İnovatif Çözümler',
      description: translations?.slider?.slide3Desc || 'Tarımda yeni nesil teknolojiler'
    },
    {
      id: 4,
      image1: pancar1,
      image2: pancar2,
      title: translations?.slider?.slide4Title || 'Şeker Pancarı',
      description: translations?.slider?.slide4Desc || 'Kaliteli şeker pancarı üretimi'
    },
    {
      id: 5,
      image1: image1,
      image2: image4,
      title: translations?.slider?.slide5Title || 'Verimli Topraklar',
      description: translations?.slider?.slide5Desc || 'Sağlıklı toprak, kaliteli ürün'
    },
    {
      id: 6,
      image1: tarladeneme,
      image2: image6,
      title: translations?.slider?.slide6Title || 'Profesyonel Ürünler',
      description: translations?.slider?.slide6Desc || 'Tarımsal başarı için güçlü ortaklık'
    },
    {
      id: 7,
      image1: granulFNZvuk0,
      image2: granullBnGw9vV7,
      title: translations?.slider?.slide7Title || 'Granül Gübre Çeşitleri',
      description: translations?.slider?.slide7Desc || 'Yeni nesil granül gübrelerimizle tanışın'
    },
    {
      id: 8,
      image1: kristalJHbopA8m,
      image2: manyezitgorselC4iJGDzC,
      title: translations?.slider?.slide8Title || 'Kristal ve Manyezit',
      description: translations?.slider?.slide8Desc || 'Kristal ve manyezit gübre çözümleri'
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
            {slide.singleImage ? (
              /* Tek Resim */
              <div className="w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              /* İki Resim - Desktop yan yana, Mobil alt alta */
              <div className="flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                  <img
                    src={slide.image1}
                    alt={`${slide.title} - 1`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gölge - sağda (desktop) ve altta (mobil) */}
                  <div className="absolute inset-0 shadow-[inset_-20px_0_30px_-10px_rgba(0,0,0,0.5)] md:shadow-[inset_-20px_0_30px_-10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute inset-0 shadow-[inset_0_-20px_30px_-10px_rgba(0,0,0,0.5)] md:shadow-none"></div>
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-800 flex items-center justify-center relative">
                  <img
                    src={slide.image2}
                    alt={`${slide.title} - 2`}
                    className="w-full h-full object-cover"
                    style={slide.image2Position ? { objectPosition: slide.image2Position } : {}}
                  />
                  {/* Gölge - solda (desktop) ve üstte (mobil) */}
                  <div className="absolute inset-0 shadow-[inset_20px_0_30px_-10px_rgba(0,0,0,0.5)] md:shadow-[inset_20px_0_30px_-10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute inset-0 shadow-[inset_0_20px_30px_-10px_rgba(0,0,0,0.5)] md:shadow-none"></div>
                </div>
              </div>
            )}
            
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
