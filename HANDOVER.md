# AKFERMAG - Projeyi Teslim Etme Kılavuzu

## 📦 Teslim Edilecek Dosyalar

Projeyi teslim etmek için şu adımları izleyin:

### 1. Temizlik

Gereksiz dosyaları silin:

```bash
# PowerShell'de proje klasöründe:
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
```

### 2. Teslim Paketi

Tüm proje klasörünü (akfermag/) zipleyip gönderin. İçinde şunlar olmalı:

```
akfermag.zip içinde:
├── src/                    (Tüm kaynak kodlar)
├── public/                 (Logo ve statik dosyalar)
├── .github/workflows/      (GitHub Actions - opsiyonel)
├── package.json            (Bağımlılıklar)
├── vite.config.js          (Build ayarları)
├── tailwind.config.js      (Stil ayarları)
├── README.md               (Kurulum rehberi)
├── DEPLOYMENT.md           (Canlıya alma rehberi)
├── .htaccess               (Apache için)
├── netlify.toml            (Netlify için)
└── diğer config dosyaları
```

**ÖNEMLİ:** `node_modules` ve `dist` klasörlerini zip'e DAHIL ETMEYİN (çok büyük)

## 📋 Teslim Notu (Karşı Tarafa İletilecek)

```
AKFERMAG Web Sitesi - Teknik Bilgiler

Kurulum:
1. Zip dosyasını açın
2. Klasöre girin: cd akfermag
3. Bağımlılıkları yükleyin: npm install
4. Test için çalıştırın: npm run dev
5. Build alın: npm run build

Canlıya Alma:
- KOLAY YOL: Netlify veya Vercel'e deploy edin (ücretsiz)
- KENDI SUNUCU: dist/ klasörünü sunucuya yükleyin

Detaylı talimatlar için:
- README.md (kurulum)
- DEPLOYMENT.md (canlıya alma)

Gereksinimler:
- Node.js 18+ 
- npm (Node.js ile gelir)

Port: http://localhost:5173 (geliştirme)

Teknolojiler:
- React 19.2.0
- Vite 7.2.4
- Tailwind CSS 3.3.6
- React Router 7.13.0

Özellikler:
✅ 3 Dil (TR/EN/UK)
✅ Responsive (Mobil/Tablet/Desktop)
✅ 6 Ürün sayfası
✅ SEO optimize
✅ Production ready
```

## 🎯 Karşı Tarafın Yapması Gerekenler

### Minimum Adımlar (Netlify ile - ÖNERİLEN)

```bash
# 1. Zip'i aç
unzip akfermag.zip
cd akfermag

# 2. Bağımlılıkları yükle
npm install

# 3. Build al
npm run build

# 4. Netlify'a git, "Deploy manually" seç
# dist klasörünü sürükle-bırak yap
# Bitti! 🎉
```

### İleri Seviye (Git + Auto Deploy)

```bash
# 1. GitHub'da repo oluştur
# 2. Kodu push et
git init
git add .
git commit -m "Initial commit"
git remote add origin [github-url]
git push -u origin main

# 3. Netlify/Vercel'de GitHub'a bağlan
# 4. Otomatik deploy aktif! Her push'ta deploy olur
```

## 🔍 Kontrol Listesi (Teslim Öncesi)

- [ ] README.md hazır ve güncel
- [ ] DEPLOYMENT.md hazır
- [ ] package.json doğru
- [ ] Tüm görseller src/assets/ içinde
- [ ] logo.jpg public/ klasöründe
- [ ] .htaccess dosyası var
- [ ] netlify.toml dosyası var
- [ ] node_modules SİLİNMİŞ
- [ ] dist SİLİNMİŞ
- [ ] Proje ziplenmiş

## 📞 Destek Bilgisi

Karşı taraf için not:

```
Sorun yaşarsanız:

1. README.md dosyasını okuyun
2. DEPLOYMENT.md dosyasını okuyun
3. npm install çalıştırın
4. npm run dev ile test edin
5. Hata varsa console log'larına bakın

Sık Karşılaşılan Sorunlar:
- "npm not found" → Node.js yükleyin
- "Port 5173 in use" → Farklı port kullanın
- Build hatası → npm install tekrar çalıştırın
```

## 🚀 Hızlı Test

Karşı tarafın test etmesi için:

```bash
# Zip'i aç
cd akfermag

# Kur
npm install

# Çalıştır
npm run dev

# Tarayıcıda aç: http://localhost:5173

# Kontrol et:
- Ana sayfa açılıyor mu?
- Dil değiştirme çalışıyor mu?
- Ürünler görünüyor mu?
- Ürün detayları açılıyor mu?
- Mobil görünümde düzgün mü?

# Hepsi OK ise:
npm run build

# dist/ klasörü oluştu mu kontrol et
```

## 📁 Dosya Yapısı Açıklaması

```
src/
├── assets/          → Görseller (logo, ürün fotoğrafları)
├── components/      → React bileşenleri (Header, Footer, vb.)
├── data/            → Ürün verileri (3 dilde)
├── pages/           → Sayfalar (Home, ProductDetail)
├── lib/             → Yardımcı fonksiyonlar
├── translations.js  → Tüm çeviriler (TR/EN/UK)
├── main.jsx         → Uygulama başlangıcı
└── App.jsx          → Ana routing

public/
└── logo.jpg         → Favicon (tarayıcı sekmesinde görünür)

Önemli Config Dosyaları:
├── package.json       → Kütüphaneler ve script'ler
├── vite.config.js     → Build ayarları
├── tailwind.config.js → Renk teması
└── postcss.config.js  → CSS işleme
```

## ✨ Ekstra Notlar

**Güncelleme Yapmak İçin:**
1. src/ içindeki dosyaları düzenleyin
2. npm run dev ile test edin
3. npm run build ile build alın
4. Yeni dist/ klasörünü yükleyin

**Çeviri Eklemek:**
- translations.js dosyasını açın
- Yeni dil ekleyin (örnek: DE: { ... })
- Header.jsx'te dil seçiciye ekleyin

**Yeni Ürün Eklemek:**
- productsDataMultiLang.js açın
- 3 dile ürün ekleyin
- Ürün görseli assets/'e ekleyin

---

**Teslim Tarihi:** Şubat 2026  
**Hazırlayan:** GitHub Copilot  
**Versiyon:** 1.0.0  
**Durum:** Production Ready ✅
