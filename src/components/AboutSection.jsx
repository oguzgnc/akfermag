import React from 'react';
import { Calendar, Target, Users } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import akfermagbImage from '../assets/akfermag-bg.jpg';

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

        {/* Company Image Showcase */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-akfermag-blue/10 to-akfermag-green/10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                <img 
                  src={akfermagbImage} 
                  alt="AKFERMAG Facility" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {translations.about.facilityTitle}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {translations.about.foundingText}
                </p>
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
      </div>
    </section>
  );
};

export default AboutSection;
