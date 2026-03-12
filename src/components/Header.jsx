import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo_page-0001.webp';

const Header = ({ language, setLanguage, translations }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Eğer ProductDetail sayfasındaysak, önce anasayfaya git
    if (location.pathname !== '/') {
      navigate('/');
      // Anasayfaya gittikten sonra section'a scroll yap
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Zaten anasayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar with Logo, Navigation and Language */}
      <div className="bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="AKFERMAG Logo" 
                className="h-20 w-auto object-contain bg-white px-3 py-2 rounded"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Akfermag <span className="text-akfermag-white">Kimya</span>
              </h1>
            </div>
            
            {/* Desktop Navigation - Wave Design in Center */}
            <div className="hidden md:flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="group relative px-8 py-3 text-white font-medium transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                  backgroundColor: '#8BC34A'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7CB342'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8BC34A'}
              >
                <span className="relative z-10">{t.nav.home}</span>
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-8 py-3 text-white font-medium transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                  marginLeft: '-15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8BC34A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <span className="relative z-10">{t.nav.about}</span>
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleNavClick(e, 'products')}
                className="group relative px-8 py-3 text-white font-medium transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                  marginLeft: '-15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8BC34A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <span className="relative z-10">{t.nav.products}</span>
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="group relative px-8 py-3 text-white font-medium transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                  marginLeft: '-15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8BC34A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <span className="relative z-10">{t.nav.contact}</span>
              </a>
            </div>

            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-3">
              <Globe className="w-5 h-5" />
              <button 
                onClick={() => setLanguage('TR')}
                className={`px-4 py-2 rounded-md font-semibold text-base transition-all duration-200 ${
                  language === 'TR' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                }`}
              >
                TR
              </button>
              <span className="text-white/50 text-lg">|</span>
              <button 
                onClick={() => setLanguage('EN')}
                className={`px-4 py-2 rounded-md font-semibold text-base transition-all duration-200 ${
                  language === 'EN' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                }`}
              >
                EN
              </button>
              <span className="text-white/50 text-lg">|</span>
              <button 
                onClick={() => setLanguage('UK')}
                className={`px-4 py-2 rounded-md font-semibold text-base transition-all duration-200 ${
                  language === 'UK' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                }`}
              >
                UA
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green py-4 border-t border-white/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium cursor-pointer" onClick={(e) => { handleNavClick(e, 'home'); setMobileMenuOpen(false); }}>
                {t.nav.home}
              </a>
              <a href="#about" className="px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium cursor-pointer" onClick={(e) => { handleNavClick(e, 'about'); setMobileMenuOpen(false); }}>
                {t.nav.about}
              </a>
              <a href="#products" className="px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium cursor-pointer" onClick={(e) => { handleNavClick(e, 'products'); setMobileMenuOpen(false); }}>
                {t.nav.products}
              </a>
              <a href="#contact" className="px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium cursor-pointer" onClick={(e) => { handleNavClick(e, 'contact'); setMobileMenuOpen(false); }}>
                {t.nav.contact}
              </a>
              <div className="flex items-center gap-2 px-4 py-3 border-t border-white/20 mt-2">
                <Globe className="w-4 h-4" />
                <button 
                  onClick={() => setLanguage('TR')}
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-200 ${
                    language === 'TR' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                  }`}
                >
                  TR
                </button>
                <span className="text-white/50">|</span>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-200 ${
                    language === 'EN' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/50">|</span>
                <button 
                  onClick={() => setLanguage('UK')}
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-200 ${
                    language === 'UK' ? 'bg-white text-akfermag-blue' : 'hover:bg-white/20'
                  }`}
                >
                  UA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
