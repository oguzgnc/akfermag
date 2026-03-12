import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { X } from 'lucide-react';
import logoArkaplan from '../assets/logoarkaplan.webp';

const Footer = ({ translations }) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
                <img src={logoArkaplan} alt="Akfermag Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-akfermag-light-blue to-akfermag-green bg-clip-text text-transparent">
                  AKFERMAG
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {translations.footer.companyDescription}
            </p>
            <div className="flex gap-2 md:gap-3">
              <a href="https://www.facebook.com/profile.php?id=100076236462379" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-akfermag-blue transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://x.com/AkfermagK" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-akfermag-blue transition-colors">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/akfermag/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-akfermag-blue transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{translations.footer.company}</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  {translations.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  {translations.nav.about}
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  {translations.nav.products}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  {translations.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">{translations.footer.products}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/product/agrosol-max-17" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max®-17
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® 
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max-mix" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® Mix
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max-topmix" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® TopMix
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max-fully" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® 
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max-17-33" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® 17-33
                </Link>
              </li>
              <li>
                <Link to="/product/agrosol-max-zinko" className="text-gray-400 hover:text-akfermag-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-akfermag-green rounded-full"></span>
                  Agrosol*Max® Çinko Tuzu
                </Link>
              </li>
            </ul>
          </div>

          {/* Istanbul Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-akfermag-green" />
              {translations.footer.istanbul}
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Sultantepe Mah. Kaftan Sk. No:2/1<br />
              Üsküdar, İstanbul, Türkiye
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+902165170537" className="text-gray-400 hover:text-akfermag-green transition-colors text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +90 216 517 05 37
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=sales@akfermag.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-akfermag-green transition-colors text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sales@akfermag.com
              </a>
            </div>
          </div>

          {/* Kutahya Factory */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-akfermag-green" />
              {translations.footer.kutahya}
            </h4>
            <p className="text-gray-400 text-sm">
              Kütahya Organize Sanayi Bölgesi<br />
              Merkez, Kütahya, Türkiye<br />
              Posta Kodu: 43100
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 AKFERMAG. {translations.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-akfermag-green transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-akfermag-green transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-akfermag-green transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
