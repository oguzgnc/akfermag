# 🚀 AKFERMAG Deployment Rehberi

Bu dokümantasyon, AKFERMAG web sitesinin canlı ortama alınması için gerekli tüm adımları içerir.

## 📦 Dosyaları Hazırlama

### 1. Projeyi Zip Olarak Paketleme

Tüm proje dosyalarını ziplemeden önce gereksiz dosyaları temizleyin:

```bash
# Terminal'de proje klasöründe şu komutları çalıştırın:

# node_modules klasörünü silin (gerekirse tekrar yüklenecek)
rm -rf node_modules

# dist klasörünü silin (build alınırken oluşturulacak)
rm -rf dist
```

Proje klasörünü zipledikten sonra paylaşın.

### 2. Alıcı Tarafında Kurulum

Zip dosyasını açtıktan sonra:

```bash
# Proje klasörüne gidin
cd akfermag

# Bağımlılıkları yükleyin
npm install

# Test için geliştirme sunucusunu başlatın
npm run dev

# Build alın
npm run build
```

## 🌐 Canlıya Alma Seçenekleri

### Seçenek 1: Netlify (En Kolay - ÖNERİLEN)

**Avantajlar:**
- Ücretsiz SSL sertifikası
- Otomatik HTTPS
- CDN ile hızlı yükleme
- Kolay güncellemeler

**Adımlar:**

1. [Netlify.com](https://www.netlify.com/) hesabı oluşturun
2. Dashboard'da "Add new site" → "Deploy manually" seçin
3. `dist` klasörünü sürükle-bırak yapın
4. Alternatif: Git repository bağlayarak otomatik deploy

**Netlify Ayarları:**
```
Build command: npm run build
Publish directory: dist
```

**Netlify ile SPA Route Ayarı:**

Proje root'unda `netlify.toml` dosyası oluşturun (zaten oluşturulmuştur):

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Seçenek 2: Vercel

**Adımlar:**

1. [Vercel.com](https://vercel.com/) hesabı oluşturun
2. "New Project" tıklayın
3. Proje klasörünü import edin veya Git bağlayın
4. Vercel otomatik olarak Vite projesini algılar
5. Deploy butonuna tıklayın

Vercel otomatik olarak SPA routing'i destekler.

### Seçenek 3: GitHub Pages

**Adımlar:**

1. GitHub'da repository oluşturun
2. `vite.config.js` dosyasına base path ekleyin:

```javascript
export default defineConfig({
  base: '/repository-adi/',
  plugins: [react()],
})
```

3. Build alın ve deploy script'i kullanın:

```bash
npm run build
```

4. GitHub Actions ile otomatik deploy için `.github/workflows/deploy.yml` oluşturun (zaten oluşturulmuştur)

### Seçenek 4: Kendi Sunucunuz (cPanel, VPS vb.)

**Gereksinimler:**
- Web sunucu (Apache veya Nginx)
- HTTPS/SSL sertifikası (Let's Encrypt önerilir)

**Adımlar:**

1. Yerel bilgisayarınızda build alın:
```bash
npm run build
```

2. `dist` klasöründeki tüm dosyaları FTP/SFTP ile sunucunuza yükleyin
   - FileZilla, WinSCP gibi programlar kullanabilirsiniz
   - Genellikle `public_html` veya `www` klasörüne yükleyin

3. Web sunucu yapılandırması:

#### Apache için (.htaccess)

`dist` klasörüne `.htaccess` dosyası oluşturun (zaten oluşturulmuştur):

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

Nginx config dosyanıza ekleyin:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Seçenek 5: AWS S3 + CloudFront

**Profesyonel Hosting için:**

1. S3 bucket oluşturun
2. Static website hosting aktif edin
3. `dist` klasörünü S3'e yükleyin
4. CloudFront distribution oluşturun
5. Custom domain ekleyin

## 🔒 SSL/HTTPS Kurulumu

### Cloudflare (Ücretsiz SSL)

1. [Cloudflare.com](https://cloudflare.com) hesabı oluşturun
2. Domain'inizi ekleyin
3. Nameserver'ları değiştirin
4. SSL/TLS → Full seçin
5. Otomatik HTTPS aktif olur

### Let's Encrypt (Kendi sunucunuz için)

```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com
```

## 📊 Performans Optimizasyonu

Build zaten optimize edilmiş durumda, ancak ek iyileştirmeler:

### 1. Gzip/Brotli Sıkıştırma

**Apache için (.htaccess):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

**Nginx için:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### 2. Cache Headers

**Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## ✅ Deployment Kontrol Listesi

Deploy öncesi kontrol edin:

- [ ] `npm run build` hatasız çalışıyor
- [ ] `npm run preview` ile build test edildi
- [ ] Tüm görseller yüklü ve görünüyor
- [ ] 3 dil (TR/EN/UK) çalışıyor
- [ ] Tüm ürün sayfaları açılıyor
- [ ] Mobil responsive çalışıyor
- [ ] İletişim bilgileri doğru
- [ ] Sosyal medya linkleri doğru
- [ ] Favicon görünüyor
- [ ] Meta taglar doğru

Deploy sonrası kontrol edin:

- [ ] Ana sayfa açılıyor
- [ ] Navigasyon çalışıyor
- [ ] Ürün detay sayfaları açılıyor
- [ ] Dil değiştirme çalışıyor
- [ ] Mobilde düzgün görünüyor
- [ ] HTTPS aktif
- [ ] Hız testi yapıldı (Google PageSpeed Insights)

## 🔄 Güncelleme Yapmak

Sitede değişiklik yapıldığında:

```bash
# 1. Değişiklikleri yapın (src/ klasöründeki dosyaları düzenleyin)

# 2. Test edin
npm run dev

# 3. Build alın
npm run build

# 4. Deploy edin
# - Netlify/Vercel: Git push yapın (otomatik deploy)
# - Manuel: dist klasörünü tekrar yükleyin
```

## 🆘 Sorun Giderme

### Build başarısız oluyor

```bash
# Cache temizle
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Sayfa beyaz ekran gösteriyor

- Browser console'da hata var mı kontrol edin
- Base path doğru mu kontrol edin
- .htaccess veya nginx config doğru mu kontrol edin

### Görseller yüklenmiyor

- Görseller `src/assets/` klasöründe mi?
- Import path'leri doğru mu?
- Build'de `dist/assets/` içinde mi?

### Routing çalışmıyor (404 hatası)

- SPA routing yapılandırması eksik
- .htaccess veya nginx config ekleyin

## 📈 Analytics ve İzleme

Deploy sonrası eklemek isteyebilirsiniz:

### Google Analytics

`index.html` içine ekleyin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 Teknik Destek

Deployment sırasında sorun yaşarsanız:

- README.md dosyasına bakın
- Package.json'daki script'leri kontrol edin
- Build log'larını inceleyin

---

**Başarılı Deployments! 🎉**
