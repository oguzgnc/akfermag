import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = ({ translations }) => {

  const handleSendEmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&to=sales@akfermag.com&su=İletişim%20Talebi', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            {translations?.contact?.title || 'İletişim'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto">
            {translations?.contact?.subtitle || 'Sorularınız için bize ulaşın, en kısa sürede dönüş yapalım.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">

        {/* Top Info Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-akfermag-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{translations?.contact?.phone || 'Telefon'}</h3>
            <a href="tel:+902165170537" className="text-akfermag-blue hover:text-blue-700 font-medium transition-colors">
              +90 216 517 05 37
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-akfermag-green to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{translations?.contact?.email || 'E-posta'}</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&to=sales@akfermag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-akfermag-blue hover:text-blue-700 font-medium transition-colors break-all"
            >
              sales@akfermag.com
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Kütahya Fabrika</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kütahya Organize Sanayi Bölgesi<br />
              Merkez, Kütahya, Türkiye<br />
              <span className="text-gray-400">Posta Kodu: 43100</span>
            </p>
          </div>
        </div>

        {/* Map + Bize Yazın */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green px-6 py-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <h2 className="text-white font-bold text-lg">Konumumuz</h2>
            </div>
            <iframe
              title="AKFERMAG Kimya Fabrika Konumu"
              src="https://maps.google.com/maps?q=Kütahya+Organize+Sanayi+Bölgesi+Merkez+Kütahya+43100&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Working Hours */}
            <div className="bg-white px-6 py-4 flex items-center gap-3 border-t border-gray-100">
              <Clock className="w-5 h-5 text-akfermag-blue flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Çalışma Saatleri</p>
                <p className="text-xs text-gray-500">Pazartesi – Cuma: 09:00 – 18:00</p>
              </div>
            </div>
          </div>

          {/* Bize Yazın */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-akfermag-blue to-akfermag-dark-green px-6 py-4 flex items-center gap-3">
              <Send className="w-5 h-5 text-white" />
              <h2 className="text-white font-bold text-lg">Bize Yazın</h2>
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-6">
              {/* Phone reminder */}
              <div className="flex items-center gap-3 bg-akfermag-blue/5 border border-akfermag-blue/20 rounded-xl px-4 py-4">
                <Phone className="w-5 h-5 text-akfermag-blue flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Hızlı destek için arayın</p>
                  <a href="tel:+902165170537" className="text-akfermag-blue font-bold text-base hover:text-blue-700 transition-colors">
                    +90 216 517 05 37
                  </a>
                </div>
              </div>

              {/* Info text */}
              <div className="text-center text-gray-500 text-sm leading-relaxed">
                <p>
                  Ürünlerimiz, siparişleriniz veya işbirliği teklifleriniz için
                  aşağıdaki butona tıklayarak bize e-posta gönderebilirsiniz.
                </p>
                <p className="mt-2 font-semibold text-gray-700">sales@akfermag.com</p>
              </div>

              {/* Send Email Button */}
              <button
                onClick={handleSendEmail}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-akfermag-blue to-blue-700 hover:from-blue-700 hover:to-akfermag-blue text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-200 text-base"
              >
                <Mail className="w-5 h-5" />
                E-posta Gönder
              </button>

              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-akfermag-green" />
                Mesajınız sales@akfermag.com adresine yönlendirilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
