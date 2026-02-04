# AKFERMAG Kimya Web Sitesi

Modern, responsive ve 3 dilli (TR/EN/UK) kurumsal web sitesi.

## 🚀 Teknolojiler

- React 19.2.0 + Vite 7.2.4
- React Router DOM 7.13.0
- Tailwind CSS 3.3.6
- Lucide React

## ⚡ Hızlı Başlangıç

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Build al (canlıya almak için)
npm run build
```

**Detaylı kurulum için:** [KURULUM-REHBERI.md](KURULUM-REHBERI.md) dosyasına bakın.

## 🎨 Özellikler

- ✅ 3 Dil Desteği (TR/EN/UK)
- ✅ Responsive Tasarım
- ✅ 6 Ürün Sayfası
- ✅ Modern UI/UX
- ✅ Netlify Ready

## 📁 Klasör Yapısı

```
akfermag/
├── src/
│   ├── components/         # React bileşenleri
│   ├── pages/              # Ana ve ürün sayfaları
│   ├── data/               # Ürün verileri
│   ├── assets/             # Görseller
│   └── translations.js     # Çeviri dosyası (TR/EN/UK)
├── public/                 # Statik dosyalar
└── dist/                   # Build çıktısı
```

## 📝 İçerik Güncelleme

- **Çeviriler:** `src/translations.js`
- **Ürünler:** `src/data/productsData.js`
- **Renkler:** `tailwind.config.js`

## 🚀 Canlıya Alma

```bash
# Build al
npm run build

# dist/ klasörünü Netlify'a yükle
```

**Netlify yapılandırması hazır** (`netlify.toml` mevcut)

---

**Not:** Bu proje frontend-only. Backend/database gerekmez.

## 📁 Proje Yapısı

```
akfermag/
├── public/                  # Statik dosyalar
│   └── logo.jpg            # Site favicon'u
├── src/
│   ├── assets/             # Görsel dosyalar
│   │   ├── logo_page-0001.jpg
│   │   ├── akfermagb..jpg
│   │   └── [ürün görselleri].png
│   ├── components/         # React bileşenleri
│   │   ├── AboutSection.jsx      # Hakkımızda bölümü
│   │   ├── ContactSection.jsx    # İletişim bölümü
│   │   ├── Footer.jsx            # Alt kısım
│   │   ├── Header.jsx            # Üst menü & navigasyon
│   │   ├── HeroSection.jsx       # Ana sayfa slider
│   │   ├── ProductFeatures.jsx   # Ürün özellikleri
│   │   ├── ProductGrid.jsx       # Ürün listesi
│   │   ├── ProductName.jsx       # Ürün adı bileşeni
│   │   └── ui/                   # UI bileşenleri
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Input.jsx
│   ├── data/
│   │   └── productsDataMultiLang.js  # Çok dilli ürün verileri
│   ├── pages/
│   │   ├── Home.jsx              # Ana sayfa
│   │   └── ProductDetail.jsx     # Ürün detay sayfası
│   ├── lib/
│   │   └── utils.js              # Yardımcı fonksiyonlar
│   ├── App.jsx                   # Ana uygulama bileşeni
│   ├── main.jsx                  # Giriş noktası
│   ├── translations.js           # Çeviri dosyası (TR/EN/UK)
│   ├── index.css                 # Global stiller
│   └── App.css                   # Uygulama stilleri
├── index.html                    # HTML şablonu
├── package.json                  # Proje bağımlılıkları
├── vite.config.js               # Vite yapılandırması
├── tailwind.config.js           # Tailwind yapılandırması
├── postcss.config.js            # PostCSS yapılandırması
├── eslint.config.js             # ESLint yapılandırması
└── README.md                     # Bu dosya
```

## 🌐 Deployment (Canlı Yayın)

### Vercel ile Deploy

1. [Vercel](https://vercel.com/) hesabı oluşturun
2. "New Project" butonuna tıklayın
3. Proje klasörünü seçin (otomatik algılama yapacaktır)
4. Deploy butonuna tıklayın

### Manuel Deploy (Herhangi bir hosting)

1. `npm run build` komutu ile build alın
2. `dist` klasöründeki tüm dosyaları hosting sunucunuza yükleyin
3. Web sunucunuzun `index.html`'i ana sayfa olarak gösterecek şekilde yapılandırın

**ÖNEMLİ:** Single Page Application (SPA) olduğu için web sunucunuzda tüm route'ların `index.html`'e yönlendirilmesi gerekir.

#### Apache için (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx için

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🎨 Özellikler

- ✅ **Çok Dilli Destek:** Türkçe, İngilizce, Ukraynaca
- ✅ **Responsive Tasarım:** Mobil, tablet ve desktop uyumlu
- ✅ **6 Ürün Sayfası:** Her ürün için detaylı bilgi sayfası
- ✅ **Modern UI/UX:** Gradient renkler, animasyonlar, hover efektleri
- ✅ **SEO Uyumlu:** Meta taglar ve başlıklar optimize edilmiş
- ✅ **Hızlı Yükleme:** Vite ile optimize edilmiş build
- ✅ **Comic Sans Font:** Tüm sitede Comic Sans MS font kullanımı

## 🔄 Güncelleme ve Bakım

### İçerik Güncellemeleri

- **Çeviriler:** `src/translations.js` dosyasını düzenleyin
- **Ürünler:** `src/data/productsDataMultiLang.js` dosyasını düzenleyin
- **İletişim Bilgileri:** `src/translations.js` içindeki `contact` bölümünü düzenleyin
- **Görseller:** `src/assets/` klasörüne yeni görseller ekleyin

### Renk Teması Değiştirme

`tailwind.config.js` dosyasındaki renk paletini düzenleyin:

```javascript
colors: {
  'akfermag-blue': '#2563eb',      // Mavi renk
  'akfermag-dark-green': '#047857', // Koyu yeşil
  'akfermag-green': '#10b981',      // Açık yeşil
}
```

## 🐛 Sorun Giderme

### Port zaten kullanımda hatası

Eğer `npm run dev` çalıştırdığınızda port hatası alıyorsanız:

```bash
# Windows için
netstat -ano | findstr :5173
taskkill /PID [PID_NUMARASI] /F

# Linux/Mac için
lsof -ti:5173 | xargs kill -9
```

### Node modülleri sorunu

Eğer kütüphanelerde sorun yaşıyorsanız:

```bash
# node_modules klasörünü silin
rm -rf node_modules package-lock.json

# Tekrar yükleyin
npm install
```

### Build hatası

Eğer build alırken hata alıyorsanız:

```bash
# Önce cache'i temizleyin
npm run build -- --force
```

## 📦 Gerekli Tüm Bağımlılıklar

Projenin çalışması için aşağıdaki bağımlılıklar otomatik olarak `npm install` ile yüklenecektir:

### Ana Bağımlılıklar
- `react: ^19.2.0`
- `react-dom: ^19.2.0`
- `react-router-dom: ^7.13.0`
- `lucide-react: ^0.563.0`
- `clsx: ^2.1.1`
- `tailwind-merge: ^3.4.0`

### Geliştirme Bağımlılıkları
- `vite: ^7.2.4`
- `@vitejs/plugin-react: ^5.1.1`
- `tailwindcss: ^3.3.6`
- `autoprefixer: ^10.4.16`
- `postcss: ^8.4.32`
- `eslint: ^9.39.1`
- Ve diğer ESLint pluginleri

## 📞 Destek

Herhangi bir sorun veya soru için:

- **Email:** info@akfermag.com
- **Telefon:** +90 274 231 25 25
- **Adres:** OSB Mah. 7.Cad. No:1/A-1/B-1/C-1/D 1/E Kütahya Organize Sanayi Bölgesi

## 📄 Lisans

Bu proje AKFERMAG Kimya Sanayi ve Ticaret Limited Şirketi için geliştirilmiştir.

---

**Son Güncelleme:** Şubat 2026  
**Versiyon:** 1.0.0
