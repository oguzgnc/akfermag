# 📘 AKFERMAG Web Sitesi - Kurulum Rehberi

Bu dokümantasyon, AKFERMAG web sitesini sıfırdan kurmak ve canlıya almak için gereken tüm adımları içerir.

---

## 📋 İçindekiler

1. [Gereksinimler](#-gereksinimler)
2. [İlk Kurulum](#-ilk-kurulum)
3. [Geliştirme Ortamı](#-geliştirme-ortamı)
4. [Build Alma](#-build-alma)
5. [Canlıya Alma (Netlify)](#-canlıya-alma-netlify)
6. [İçerik Güncelleme](#-içerik-güncelleme)
7. [Sorun Giderme](#-sorun-giderme)

---

## 🔧 Gereksinimler

### 1. Node.js Kurulumu

Projeyi çalıştırmak için **Node.js v18 veya üzeri** gereklidir.

#### Windows:
1. [Node.js İndir](https://nodejs.org/) adresine gidin
2. **LTS** (Long Term Support) versiyonunu indirin
3. İndirilen dosyayı çalıştırın ve kurulum sihirbazını takip edin
4. Kurulum tamamlandıktan sonra PowerShell veya CMD'yi açın ve kontrol edin:

```bash
node --version
# Çıktı: v18.x.x veya üzeri olmalı

npm --version
# Çıktı: 9.x.x veya üzeri olmalı
```

#### Mac:
```bash
# Homebrew ile
brew install node

# Kontrol
node --version
npm --version
```

#### Linux (Ubuntu/Debian):
```bash
# NodeSource repository ekle
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Node.js kur
sudo apt-get install -y nodejs

# Kontrol
node --version
npm --version
```

---

## 🚀 İlk Kurulum

### Adım 1: Proje Dosyalarını Hazırlama

**Eğer ZIP dosyası aldıysanız:**
```bash
# ZIP'i masaüstüne çıkarın
# PowerShell'de klasöre gidin
cd C:\Users\KULLANICI_ADI\Desktop\akfermag
```

**Eğer Git'ten çektiyseniz:**
```bash
git clone [REPO_URL]
cd akfermag
```

### Adım 2: Bağımlılıkları Yükleme

```bash
npm install
```

Bu komut:
- `package.json` dosyasındaki tüm kütüphaneleri indirir
- `node_modules` klasörü oluşturur (yaklaşık 300-400 MB)
- 2-5 dakika sürebilir (internet hızınıza bağlı)

**Beklenen çıktı:**
```
added 1234 packages in 3m
```

---

## 💻 Geliştirme Ortamı

### Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

**Çıktı:**
```
  VITE v7.2.4  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Tarayıcınızda `http://localhost:5173` adresini açın.

### Değişiklikleri Görme

- Kod değişiklikleriniz **otomatik** olarak tarayıcıya yansır (Hot Reload)
- Dosyayı kaydettiğinizde sayfa kendini yeniler
- Sunucuyu durdurmak için: `CTRL + C`

---

## 📦 Build Alma

Canlıya almak için optimize edilmiş dosyaları oluşturma:

```bash
npm run build
```

**Ne olur?**
- `dist` klasörü oluşturulur
- Tüm dosyalar optimize edilir (minify, compress)
- Boyut küçültülür (hız için)
- Production için hazır dosyalar oluşur

**Build dosyaları:**
```
dist/
├── index.html          # Ana HTML dosyası
├── assets/             # JS, CSS ve görseller
│   ├── index-abc123.js
│   ├── index-xyz789.css
│   └── [görseller]
└── [diğer statik dosyalar]
```

### Build'i Yerel Test Etme

```bash
npm run preview
```

Tarayıcınızda `http://localhost:4173` adresini açın ve son halini görün.

---

## 🌐 Canlıya Alma (Mevcut Sunucuya)

**Eğer zaten akfermag.com domain'iniz ve sunucunuz varsa:**

Bu en kolay yöntemdir. Hosting sağlayıcınız/IT ekibiniz dosyaları yükleyecektir.

### Adım 1: Build Dosyalarını Hazırlama

```bash
# Build al
npm run build
```

Bu komut `dist` klasöründe optimize edilmiş dosyalar oluşturur.

### Adım 2: dist/ Klasörünü Gönderme

**dist/ klasöründe şunlar olacak:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [görseller]
└── logo.jpg
```

**Bu klasörü hosting sağlayıcınıza/IT ekibinize gönderin.**

---

## 🖥️ Sunucuya Yükleme (IT Ekibi İçin)

### Yöntem 1: cPanel File Manager (En Yaygın)

1. **cPanel'e giriş yapın** (`akfermag.com/cpanel`)
2. **File Manager** açın
3. **public_html** klasörüne gidin
4. **Eski dosyaları yedekleyin:**
   - `public_html` içeriğini `public_html_backup` klasörüne taşıyın
5. **Yeni dosyaları yükleyin:**
   - `dist` klasörü içindeki TÜM dosyaları seçin
   - `public_html` klasörüne upload edin
   - `.htaccess` dosyasını da eklemeyi unutmayın (aşağıda)

### Yöntem 2: FTP (FileZilla vb.)

1. **FTP bilgileri:**
   - Host: `ftp.akfermag.com` (veya hosting sağlayıcıdan alın)
   - Kullanıcı: FTP kullanıcı adı
   - Şifre: FTP şifresi
   - Port: 21

2. **FileZilla ile bağlan:**
   - Sol taraf: Bilgisayarınız → `dist` klasörünü aç
   - Sağ taraf: Sunucu → `public_html` klasörüne git

3. **Upload:**
   - `dist` içindeki TÜM dosyaları `public_html`'e sürükle
   - Mevcut dosyaları üzerine yaz

### Yöntem 3: SSH (İleri Seviye)

```bash
# Sunucuya bağlan
ssh kullanici@akfermag.com

# Eski dosyaları yedekle
cd /home/kullanici/public_html
tar -czf backup_$(date +%Y%m%d).tar.gz *
mv backup_*.tar.gz ~/backups/

# Eski dosyaları temizle
rm -rf *

# Yeni dosyaları upload et (yerel bilgisayardan)
# Yerel terminal'de:
scp -r dist/* kullanici@akfermag.com:/home/kullanici/public_html/
```

---

## ⚙️ ÖNEMLİ: .htaccess Dosyası Ekleyin

React Router kullandığımız için, sunucuda tüm route'ların `index.html`'e yönlendirilmesi gerekir.

**public_html** klasörüne `.htaccess` dosyası ekleyin:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # HTTPS zorunlu (opsiyonel)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # React Router için
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Cache kontrolü (performans için)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Not:** Bu dosya zaten projenizde mevcut, `dist/` klasörüne kopyalanmalı.

---

## 🔧 Nginx Sunucu İçin (Alternatif)

Eğer sunucu Nginx kullanıyorsa, bu konfigürasyonu ekleyin:

```nginx
server {
    listen 80;
    server_name akfermag.com www.akfermag.com;
    root /home/kullanici/public_html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## ✅ Deployment Sonrası Kontrol

Yükleme tamamlandıktan sonra:

1. **Siteyi açın:** `https://akfermag.com`
2. **3 dili test edin:** TR/EN/UK
3. **Ürün sayfalarını açın:** `/product/agrosol-max-17`
4. **Görsellerin yüklendiğini kontrol edin**
5. **Mobil görünümü test edin**
6. **Farklı tarayıcılarda test edin** (Chrome, Safari, Firefox)

---

## 📝 İçerik Güncelleme

### 1. İletişim Bilgileri Değiştirme

**Dosya:** `src/translations.js`

```javascript
contact: {
  phone: "Telefon",
  email: "E-posta",
  addressText: "Sultantepe Mah. Kaftan Sk. No:2/1<br />Üsküdar, İstanbul",
  // ...
}
```

**3 dilde güncelleme yapın:** TR, EN, UK

### 2. Ürün Ekleme/Çıkarma

**Dosya:** `src/data/productsData.js`

```javascript
{
  id: 'yeni-urun-id',
  name: 'Ürün Adı',
  type: 'Ürün Tipi',
  subtitle: 'Alt başlık',
  description: 'Açıklama',
  image: yeniUrunGorseli,  // import et
  specs: ['Özellik 1', 'Özellik 2'],
  benefits: ['Fayda 1', 'Fayda 2'],
  // ...
}
```

**Adımlar:**
1. Görseli `src/assets/` klasörüne ekle
2. Dosyanın üstünde import et: `import yeniUrunGorseli from '../assets/yeni-urun.png';`
3. Ürün objesini array'e ekle
4. `translations.js` dosyasında da ürünü ekle

### 3. Renk Teması Değiştirme

**Dosya:** `tailwind.config.js`

```javascript
colors: {
  'akfermag-blue': '#2563eb',        // Ana mavi
  'akfermag-dark-green': '#047857',  // Koyu yeşil
  'akfermag-green': '#10b981',       // Açık yeşil
}
```

### 4. Logo Değiştirme

1. Yeni logo dosyasını `src/assets/` klasörüne koy
2. `src/components/Header.jsx` dosyasını aç
3. Import satırını güncelle:
   ```javascript
   import logo from '../assets/yeni-logo.jpg';
   ```

---

## 🐛 Sorun Giderme

### ❌ "npm: command not found"

**Sorun:** Node.js kurulu değil

**Çözüm:**
1. Node.js'i yeniden indirin ve kurun
2. Bilgisayarı yeniden başlatın
3. Terminal'i yeniden açın

---

### ❌ "EADDRINUSE: Port 5173 zaten kullanımda"

**Sorun:** Port zaten başka bir uygulama tarafından kullanılıyor

**Çözüm (Windows):**
```bash
# Port kullanan uygulamayı bul
netstat -ano | findstr :5173

# Çıkan PID numarasını kullan (örn: 12345)
taskkill /PID 12345 /F
```

**Çözüm (Mac/Linux):**
```bash
# Port kullanan process'i öldür
lsof -ti:5173 | xargs kill -9
```

**Veya farklı port kullan:**
```bash
npm run dev -- --port 3000
```

---

### ❌ "Module not found" hatası

**Sorun:** Bağımlılıklar eksik veya bozuk

**Çözüm:**
```bash
# node_modules'i tamamen sil
rm -rf node_modules package-lock.json

# Tekrar yükle
npm install
```

---

### ❌ Build hatası

**Sorun:** Build alırken hata oluşuyor

**Çözüm 1 - Cache temizle:**
```bash
npm run build -- --force
```

**Çözüm 2 - Vite cache temizle:**
```bash
# .vite klasörünü sil
rm -rf node_modules/.vite

# Tekrar build al
npm run build
```

**Çözüm 3 - Bağımlılıkları güncelle:**
```bash
npm update
npm run build
```

---

### ❌ Görseller gösterilmiyor

**Sorun:** Görsel yolları yanlış

**Kontrol edin:**
1. Görseller `src/assets/` klasöründe mi?
2. Import doğru mu?
   ```javascript
   import gorsel from '../assets/gorsel.png';  // Doğru
   import gorsel from './assets/gorsel.png';   // Yanlış
   ```
3. Görselin dosya adı doğru mu? (büyük/küçük harf duyarlı)

---

### ❌ Netlify'da sayfa yenilenince 404

**Sorun:** SPA routing yapılandırması eksik

**Çözüm:** `netlify.toml` dosyası zaten mevcut, kontrol edin:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📞 Teknik Destek

### Sık Kullanılan Komutlar

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu
npm run dev

# Build al
npm run build

# Build'i test et
npm run preview

# Kod kontrolü (lint)
npm run lint
```

### Klasör Yapısı

```
akfermag/
├── src/
│   ├── components/     # React bileşenleri
│   ├── pages/          # Ana ve ürün detay sayfaları
│   ├── data/           # Ürün verileri
│   ├── assets/         # Görseller
│   ├── translations.js # Çeviri dosyası
│   └── App.jsx         # Ana uygulama
├── public/             # Statik dosyalar
├── dist/               # Build çıktısı (otomatik oluşur)
├── package.json        # Bağımlılıklar
└── vite.config.js      # Vite ayarları
```

### Önemli Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `src/translations.js` | Tüm çeviriler (TR/EN/UK) |
| `src/data/productsData.js` | Ürün bilgileri |
| `src/data/productsDataMultiLang.js` | Çok dilli ürün verileri |
| `tailwind.config.js` | Renk teması ve stiller |
| `netlify.toml` | Netlify yapılandırması |

---

## ✅ Deployment Checklist

Canlıya almadan önce kontrol edin:

- [ ] `npm install` çalıştırıldı
- [ ] `npm run dev` ile yerel test edildi
- [ ] İletişim bilgileri güncellendi
- [ ] Ürün bilgileri doğru
- [ ] Görseller yüklü ve görünüyor
- [ ] 3 dilde çeviri tamamlandı (TR/EN/UK)
- [ ] `npm run build` başarılı
- [ ] `npm run preview` ile build test edildi
- [ ] Logo ve favicon doğru
- [ ] Renk teması uygun

---

## 📌 Notlar

### Frontend-Only Proje

Bu proje **sadece frontend** içerir:
- ❌ Backend yok
- ❌ Database yok
- ❌ İletişim formu gönderimi yok (tasarımda var ama çalışmaz)
- ✅ Statik ürün kataloğu
- ✅ Mail ve telefon ile iletişim (direkt)

### E-Bülten Butonu

Footer'daki e-bülten butonu **görsel amaçlı** - fonksiyonu yok. İsterseniz:
- Olduğu gibi bırakın (zarar vermez)
- Veya `src/components/Footer.jsx` dosyasından kaldırın

### Hosting Maliyeti

- **Netlify Free Plan:** 100 GB bandwidth/ay (YETER)
- **Vercel Free Plan:** Unlimited bandwidth
- **Manuel Hosting:** Herhangi bir web hosting (paylaşımlı hosting bile yeterli)

---

## 🎯 Sonuç

Bu rehberi takip ederek:
1. ✅ Projeyi başarıyla kurdunuz
2. ✅ Yerel geliştirme ortamını hazırladınız
3. ✅ Build aldınız
4. ✅ Netlify'a deploy ettiniz
5. ✅ İçerik güncellemelerini öğrendiniz

**Tebrikler! Web siteniz artık canlıda! 🎉**

---

**Son Güncelleme:** Şubat 2026  
**Proje Versiyonu:** 1.0.0  
**Node.js Minimum:** v18.0.0
