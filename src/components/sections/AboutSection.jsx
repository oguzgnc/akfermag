import React from 'react';
import { Calendar, Target, Users, Factory, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const AboutSection = ({ translations }) => {
  const highlights = [
    {
      icon: Calendar,
      title: translations.about.highlight1Title,
      description: translations.about.highlight1Desc
    },
    {
      icon: Target,
      title: translations.about.highlight3Title,
      description: translations.about.highlight3Desc
    },
    {
      icon: Users,
      title: translations.about.highlight4Title,
      description: translations.about.highlight4Desc
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-akfermag-blue/10 text-akfermag-blue px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            {translations.about.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {translations.about.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-akfermag-blue to-akfermag-green rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Showcase - Modern Design */}
        <Card className="mb-8 overflow-hidden relative">
          <div className="bg-gradient-to-br from-akfermag-blue/5 via-white to-akfermag-green/5 relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-akfermag-blue/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-akfermag-green/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-akfermag-blue/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-akfermag-green/10 rounded-full"></div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16 relative z-10">
              {/* Icon and Title */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-akfermag-blue to-akfermag-green rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Factory className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {translations.about.facilityTitle}
                </h3>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
                {translations.about.foundingText}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-akfermag-blue/10 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-akfermag-blue to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-akfermag-blue mb-1">2001</div>
                    <div className="text-sm text-gray-600">{translations.about.foundingYear}</div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-akfermag-green/10 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-akfermag-green to-green-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-akfermag-green mb-1">ISO 9001</div>
                    <div className="text-sm text-gray-600">Kalite Sertifikası</div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-akfermag-blue/10 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-akfermag-blue rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Company Policy */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-br from-akfermag-blue to-akfermag-dark-green p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">{translations.about.policyTitle}</h3>
            </div>
            <p className="text-white/90 text-lg mb-6">
              {translations.about.policyIntro}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-akfermag-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{translations.about.policy1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-akfermag-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{translations.about.policy2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-akfermag-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{translations.about.policy3}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-akfermag-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{translations.about.policy4}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-akfermag-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{translations.about.policy5}</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Quality Certificates */}
        <Card className="overflow-hidden mt-8">
          <div className="bg-gradient-to-br from-[#1a2c6e] to-[#1e3a8a] p-8 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Kalite Sertifikalarımız</h3>
            </div>
            <ul className="space-y-5">
              {[
                { code: 'ISO 9001:2015',   name: 'Kalite Yönetim Sistemi' },
                { code: 'ISO 10002:2018',  name: 'Müşteri Memnuniyeti Yönetim Sistemi' },
                { code: 'ISO 14001:2015',  name: 'Çevre Yönetim Sistemi' },
                { code: 'ISO 45001:2018',  name: 'İş Sağlığı ve Güvenliği Yönetim Sistemi' },
                { code: 'Helal Sertifikası', name: null },
              ].map((cert, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg leading-tight">{cert.code}</p>
                    {cert.name && (
                      <p className="text-white/75 text-sm md:text-base font-semibold">{cert.name}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
