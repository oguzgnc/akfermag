import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight as ArrowIcon, Package, Award, Leaf, FileCheck, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ProductName from '../components/ProductName';
import { getProductsData } from '../data/productsDataMultiLang';

const ProductDetail = ({ translations, language }) => {
  const { productId } = useParams();
  const productsData = getProductsData(language);
  const product = productsData.find(p => p.id === productId);

  // Sayfa yüklendiğinde scroll'u en üste al
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]); // productId değiştiğinde de scroll'u üste al

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{translations.productDetail.notFound}</h2>
          <Link to="/">
            <Button>{translations.productDetail.backButton}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-4 md:pb-6">
        <Link to="/">
          <Button variant="outline" className="inline-flex items-center gap-2 hover:bg-akfermag-blue hover:text-white transition-colors text-sm md:text-base">
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            {translations.productDetail.backButton}
          </Button>
        </Link>
      </div>

      {/* Product Hero Section */}
      <div className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-akfermag-blue/5 to-akfermag-green/5 pointer-events-none"></div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-contain max-h-[500px] relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Product Header Info */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-gradient-to-r from-akfermag-blue to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 shadow-lg">
              {product.type}
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <ProductName name={product.name} />
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {product.subtitle}
            </p>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.specs.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-akfermag-green/10 to-akfermag-blue/10 rounded-xl p-4 text-center border border-akfermag-green/20 hover:shadow-lg transition-shadow">
                  <div className="w-3 h-3 bg-akfermag-green rounded-full mx-auto mb-2"></div>
                  <span className="text-gray-900 font-bold text-sm lg:text-base">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Description */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-akfermag-blue to-akfermag-green rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{translations.productDetail.description}</h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line">
                {product.detailedDescription}
              </p>
            </div>

            {/* Two Column Layout for Benefits and Usage */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-green-100">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Leaf size={24} className="md:w-8 md:h-8 text-akfermag-green" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{translations.productDetail.benefits}</h2>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <ArrowIcon size={18} className="md:w-5 md:h-5 text-akfermag-blue flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-blue-100">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Package size={24} className="md:w-8 md:h-8 text-akfermag-blue" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{translations.productDetail.usage}</h2>
                </div>
                <ul className="space-y-3">
                  {product.usage.map((use, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-akfermag-blue font-bold text-xl leading-none">•</span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Rates */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-akfermag-blue to-akfermag-green rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{translations.productDetail.applicationRates}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {Object.entries(product.applicationRates).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-akfermag-blue/5 to-akfermag-green/5 rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="text-xs md:text-sm font-semibold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                      {translations.productDetail[key] || key}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-akfermag-green">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Certifications */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-amber-100">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Award size={24} className="md:w-8 md:h-8 text-amber-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{translations.productDetail.certifications}</h2>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-bold shadow-md">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Package size={24} className="md:w-8 md:h-8 text-gray-700" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{translations.productDetail.packaging}</h2>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {product.packaging.map((pack, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-300 font-semibold text-gray-700 text-sm md:text-base">
                      <Package size={18} className="md:w-5 md:h-5 text-akfermag-blue" />
                      {pack}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section - Show for all products */}
            <div className="mt-8 md:mt-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-akfermag-blue to-akfermag-green rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{translations.productDetail.documents || 'Belgeler'}</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100">
                {/* Product Specific Certificate - Only show if exists */}
                {product.registrationCertificate && (
                  <>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{translations.productDetail.registrationAndBrandCertificates || 'Tescil Belgesi Ve Marka Tescil Belgeleri'}</h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 md:p-5 rounded-lg border-2 border-blue-200 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileCheck className="w-6 h-6 text-akfermag-blue" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">{product.certificateName || 'Agrosol-Max-TopMix-Tescil.pdf'}</p>
                          <p className="text-xs md:text-sm text-gray-500">{translations.productDetail.officialDocument}</p>
                        </div>
                      </div>
                      <a 
                        href={product.registrationCertificate} 
                        download
                        className="w-full sm:w-auto"
                      >
                        <Button className="w-full sm:w-auto gap-2 bg-akfermag-blue hover:bg-blue-700">
                          <Download size={18} />
                          {translations.productDetail.downloadCertificate || 'Belgeyi İndir'}
                        </Button>
                      </a>
                    </div>
                  </>
                )}
                
                {/* AKFERMAG Brand Certificate */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 md:p-5 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-akfermag-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">{translations.productDetail.akfermagBrandCert || 'AKFERMAG KİMYA MARKA TESCİL BELGESİ'}</p>
                      <p className="text-xs md:text-sm text-gray-500">{translations.productDetail.brandDocument || 'Marka Tescil Belgesi'}</p>
                    </div>
                  </div>
                  <a 
                    href="/AKFERMAG KİMYA MARKA TESCİL BELGESİ.pdf" 
                    download
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto gap-2 bg-akfermag-blue hover:bg-blue-700">
                      <Download size={18} />
                      {translations.productDetail.downloadCertificate || 'Belgeyi İndir'}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-akfermag-blue to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {translations.productDetail.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {translations.productDetail.ctaSubtitle}
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-white text-akfermag-blue hover:bg-gray-100 hover:scale-105 transition-transform font-bold text-lg px-8 py-4">
                {translations.productDetail.ctaButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
