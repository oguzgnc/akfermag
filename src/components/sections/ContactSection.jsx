import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const ContactSection = ({ translations }) => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-akfermag-blue to-akfermag-dark-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              {translations.contact.title}
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              {translations.contact.subtitle}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-4 md:p-6">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">{translations.contact.phone}</h3>
                  <a href="tel:+902165170537" className="block text-white/80 hover:text-white transition mb-1 text-sm md:text-base">
                    +90 216 517 05 37
                  </a>
                  <a href="tel:+905318732856" className="block text-white/80 hover:text-white transition text-sm md:text-base">
                    +90 531 873 28 56
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-4 md:p-6">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">{translations.contact.email}</h3>
                  <a href="https://mail.google.com/mail/?view=cm&to=sales@akfermag.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition break-all text-sm md:text-base">
                    sales@akfermag.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-4 md:p-6">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">{translations.footer.istanbul}</h3>
                  <p className="text-white/80 text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: translations.contact.addressText }}></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ISO Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-md mx-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-akfermag-blue" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-white text-base md:text-lg">{translations.contact.isoTitle}</h3>
              <p className="text-white/80 text-sm">{translations.contact.isoDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
