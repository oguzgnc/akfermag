import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import ProductName from './ProductName';
import { getProductsData } from '../../data/productsDataMultiLang';

const ProductGrid = ({ translations, language }) => {
  const products = getProductsData(language);

  return (
    <section id="products" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-akfermag-green/10 text-akfermag-dark-green px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            {translations.products.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {translations.products.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col min-h-[550px] md:min-h-[600px] lg:min-h-[650px]"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 p-4 md:p-6">
                {product.id === 'agrosol-max-topmix' && (
                  <div className="absolute top-0 left-0 z-20 overflow-hidden w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <div className="absolute top-4 -left-6 md:top-5 md:-left-7 lg:top-6 lg:-left-8 transform -rotate-45 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center font-bold py-0.5 px-8 md:py-1 md:px-10 lg:px-12 shadow-lg animate-pulse text-[10px] md:text-xs">
                      {translations.products.new}
                    </div>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-44 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6 space-y-4 flex-grow">
                {/* Product Badge */}
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-akfermag-green" />
                  <span className="text-xs font-semibold text-akfermag-green uppercase tracking-wide">
                    {product.type}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-akfermag-blue transition-colors">
                  <ProductName name={product.name} />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-2 min-h-[80px]">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-akfermag-green flex-shrink-0" />
                      <span className="text-xs text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button 
                    className="w-full justify-between bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span>{translations.products.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
