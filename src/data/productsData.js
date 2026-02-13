import granulous17 from '../assets/AGROSOL MAX GRANULOUS 17 33 TÜRKÇE ÖN YÜZ.png';
import akmagSh from '../assets/AKMAG SH_ÖN YÜZ.png';
import mix from '../assets/AGROSOL MAX MIX ÖN YÜZ.png';
import topmix from '../assets/AGROSOL MAAX TOPMIX.png';
import seventeen33 from '../assets/AGROSOL MAX 17+33 ÖN YÜZ.png';
import zinko from '../assets/AGROSOL MAX ÇİNKO TUZU ÖN YÜZ.png';
import crystalFront from '../assets/AGROSOL MAX İNGİLİZCE_ÖN YÜZ (1).png';

export const productsData = [
  {
    id: 'agrosol-max-17',
    name: 'Agrosol*Max®-17',
    type: 'Magnezyum Sülfat',
    subtitle: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
    description: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
    image: granulous17,
    specs: ['Suda Çözünebilir MgO %17', 'Suda Çözünebilir SO₃ %33', 'EC Gübre', 'FIRFIR ile atılır'],
    benefits: [
      'Suda Çözünebilir MgO %17 (Magnezyum Oksit)',
      'Suda Çözünebilir SO₃ %33 (Kükürt Trioksit)',
      'EC Gübre Kalite',
      'Toprakta yavaş çözünür – Hızla yıkanmaz',
      'Açık tarla ve meyvecilikte fırfır ile kullanım kolaylığı',
      'Magnezyum ve Kükürt ihtiyacı için ekonomik ve güvenilir bitki besin kaynağı',
      'Kompoze Taban Gübreleriyle NPK ile karıştırılıp kullanılabilir',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `Agrosol*Max®-17, granüllenmiş magnezyum sülfat heptahidrat içeren yüksek kaliteli bir gübredir. 
    MgO %17, SO₃ %33 içeriği ile bitkilerin magnezyum ve kükürt ihtiyacını karşılar.
    
    EC Gübre Kalite standardında üretilen bu ürün, toprakta yavaş çözünür ve hızla yıkanmaz. 
    Bu özelliği sayesinde uzun süreli etki sağlar ve besin kaybını minimize eder.`,
    usage: [
      'Açık tarla ve meyvecilik uygulamaları için idealdir',
      'FIRFIR ile kolayca uygulanabilir',
      'Kompoze taban gübreleri ve NPK ile karıştırılarak kullanılabilir',
      'Magnezyum eksikliği görülen alanlarda öncelikli olarak tercih edilir'
    ],
    applicationRates: {
      fieldCrops: '50-100 kg/dekar',
      vegetables: '75-150 kg/dekar',
      fruitTrees: '100-200 kg/dekar'
    },
    certifications: ['EC Gübre Kalite Standardı', 'Organik Tarıma Uygun'],
    packaging: ['25 kg Torba', '500 kg BigBag', '1000 kg BigBag']
  },
  
  
  {
    id: 'akmag-sh',
    name: 'AKMAG SH',
    type: 'Magnezyum Sülfat',
    subtitle: 'Yüksek Saflıkta Magnezyum Sülfat',
    description: 'Yüksek saflıkta kristal magnezyum sülfat - Endüstriyel ve tarımsal kullanım',
    image: akmagSh,
    specs: ['Suda Çözünebilir MgO %16', 'Suda Çözünebilir SO₃ %32', 'Kristal Form', 'Yüksek Saflık'],
    benefits: [
      'Kristal form, hızlı çözünürlük',
      'Endüstriyel ve tarımsal kullanım',
      'Suda Çözünebilir MgO %16, Suda Çözünebilir SO₃ %32 içerik',
      'Premium kalite standartları',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `AKMAG SH, yüksek saflıkta kristal formda üretilen magnezyum sülfat gübresidir.
    MgO %16, SO₃ %32 içeriği ile hem tarımsal hem de endüstriyel 
    kullanım için idealdir.
    
    Kristal yapısı sayesinde suda hızla çözünür ve bitkiler tarafından kolayca alınabilir.`,
    usage: [
      'Suda çözünerek yapraktan uygulanabilir',
      'Damla sulama sistemlerinde kullanılabilir',
      'Endüstriyel proseslerde magnezyum kaynağı olarak kullanılır',
      'Hayvan yem katkısı olarak da kullanılabilir'
    ],
    applicationRates: {
      foliarSpray: '2-3 kg/1000 litre su',
      fertigation: '5-10 kg/dekar',
      industrial: 'Proses gereksinimlerine göre'
    },
    certifications: ['GMP+ Sertifikalı', 'TSE Belgeli'],
    packaging: ['25 kg Torba', '1000 kg BigBag']
  },
  {
    id: 'agrosol-max-mix',
    name: 'Agrosol*Max® Mix',
    type: 'Mikro Element Zenginleştirilmiş',
    subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
    description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat', 
    image: mix,
    specs: ['Suda Çözünebilir MgO %15', 'Suda Çözünebilir SO₃ %30', 'Suda Çözünebilir Zn %0.7', 'EC Gübre'],
    benefits: [
      'Suda Çözünebilir MgO %15 (Magnezyum Oksit)',
      'Suda Çözünebilir SO₃ %30 (Kükürt Trioksit)',
      'Suda Çözünebilir Zn %0.7 (Çinko)',
      'EC Gübre Kalite',
      'Toprakta yavaş çözünür – Hızla yıkanmaz',
      'FIRFIR ve MİBZER ile atılır',
      'Magnezyum ve Çinko eksikliği için ekonomik çözüm',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `Agrosol*Max® Mix, magnezyum ve kükürtün yanı sıra çinko mikro elementi ile 
    zenginleştirilmiş özel bir gübre formülasyonudur. MgO %15, SO₃ %30, Zn %0.7 içeriği ile 
    bitkilerin hem makro hem de mikro besin element ihtiyacını karşılar.
    
    EC Gübre Kalite standardında üretilen bu ürün, özellikle çinko eksikliği görülen topraklarda 
    mükemmel sonuçlar verir.`,
    usage: [
      'Taban gübresi olarak ekimden önce uygulanır',
      'FIRFIR ve MİBZER ile kolayca atılabilir',
      'Özellikle tahıl ve mısır ekiminde tercih edilir',
      'Çinko eksikliği riski yüksek topraklarda önerilir'
    ],
    applicationRates: {
      cereals: '50-75 kg/dekar',
      corn: '75-100 kg/dekar',
      vegetables: '100-150 kg/dekar'
    },
    certifications: ['EC Gübre Kalite Standardı'],
    packaging: ['25 kg Torba', '500 kg BigBag']
  },
  {
    id: 'agrosol-max-topmix',
    name: 'Agrosol*Max® TopMix',
    type: 'Mikro Element Zenginleştirilmiş',
    subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
    description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
    image: topmix,
    specs: ['Suda Çözünebilir MgO %16', 'Suda Çözünebilir SO₃ %32', 'Suda Çözünebilir Zn %0.2', 'Suda Çözünebilir B+Mn %0.1'],
    benefits: [
      'Suda Çözünebilir MgO %16 (Magnezyum Oksit)',
      'Suda Çözünebilir SO₃ %32 (Kükürt Trioksit)',
      'Suda Çözünebilir Zn %0.2 (Çinko)',
      'Suda Çözünebilir B %0.1 (Bor)',
      'Suda Çözünebilir Mn %0.1 (Mangan)',
      'EC Gübre Kalite',
      'Toprakta yavaş çözünür – Hızla yıkanmaz',
      'FIRFIR ve MİBZER ile atılır',
      'Kompleks mikro element ihtiyacı için tam formül',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `Agrosol*Max® TopMix, en kapsamlı mikro element formülasyonumuzdur. 
    MgO %16, SO₃ %32, Zn %0.2, B %0.1, Mn %0.1 içerir.
    
    Bu zengin mikro element kompozisyonu, bitkilerin tüm gelişim dönemlerinde ihtiyaç duyduğu 
    besin elementlerini bir arada sunar. EC Gübre Kalite standardında üretilir.`,
    usage: [
      'Özellikle Meyve Ağaçları ve Sebze Yetiştiriciliğinde Kullanılır',
      'Çoklu Mikro Element Eksikliği Olan Topraklarda Tercih Edilir',
      'FIRFIR ve MİBZER İle Taban Gübresi Olarak Uygulanır',
      'Yüksek Verimli Tarım Sistemlerinde Önerilir'
    ],
    applicationRates: {
      fruitTrees: '100-150 kg/dekar',
      vegetables: '75-125 kg/dekar',
      greenhouse: '100-200 kg/dekar'
    },
    certifications: ['EC Gübre Kalite Standardı', 'GlobalGAP Onaylı'],
    packaging: ['25 kg Torba', '500 kg BigBag']
  },
  {
    id: 'agrosol-max',
    name: 'Agrosol*Max®',
    type: 'Kristal Magnezyum Sülfat',
    subtitle: 'Kristal Magnezyum Sülfat',
    description: 'Kristal Magnezyum Sülfat',
    image: seventeen33,
    specs: ['Suda Çözünebilir MgO %16', 'Suda Çözünebilir SO₃ %32', '%100 çözünür', 'Yapraktan uygulanır'],
    benefits: [
      'Suda Çözünebilir MgO %16 (Magnezyum Oksit)',
      'Suda Çözünebilir SO₃ %32 (Kükürt Trioksit)',
      'Suda %100 çözünür',
      'Kristal yapı – Hızlı etki',
      'Yapraktan ve topraktan uygulanabilir',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `Agrosol*Max®, kristal formda üretilen yüksek saflıkta magnezyum sülfat gübresidir.
    MgO %16, SO₃ %32 içeriği ile bitkilerin magnezyum ve kükürt ihtiyacını hızla karşılar.
    
    Suda %100 çözünür yapısı sayesinde hem yapraktan püskürtme hem de toprak uygulaması için idealdir.
    Kristal yapısı hızlı etki sağlar ve bitki tarafından kolayca alınır.`,
    usage: [
      'Yapraktan püskürtme olarak uygulanabilir',
      'Damla sulama sistemlerinde kullanılır',
      'Fertigasyon uygulamalarında tercih edilir',
      'Magnezyum eksikliği belirtilerinde hızlı müdahale için idealdir'
    ],
    applicationRates: {
      foliarSpray: '2-3 kg/1000 litre su',
      fertigation: '5-10 kg/dekar',
      soilApplication: '25-50 kg/dekar'
    },
    certifications: ['EC Gübre Kalite Standardı', 'Organik Tarıma Uygun'],
    packaging: ['25 kg Torba', '500 kg BigBag', '1000 kg BigBag']
  },
  {
    id: 'agrosol-max-zinko',
    name: 'Agrosol*Max® Çinko Tuzu',
    type: 'Çinko Gübresi',
    subtitle: 'Çinko Sülfat Monohidrat',
    description: 'Çinko sülfat monohidrat - Çinko eksikliği için ideal',
    image: zinko,
    specs: ['Suda Çözünebilir Zn %21', 'Monohidrat', 'Hızlı Etki', 'Kristal Form'],
    benefits: [
      'Suda Çözünebilir Zn %21 (Çinko)',
      'Monohidrat form',
      'Hızlı etki ve yüksek çözünürlük',
      'Kristal yapı',
      'Yüksek Saflık',
      'Teknik Kalite'
    ],
    detailedDescription: `Agrosol*Max® Çinko Tuzu, Zn %21 içeren çinko sülfat monohidrat gübresidir.
    Kristal formda üretilen bu ürün, bitkilerin çinko ihtiyacını karşılamak için özel olarak formüle edilmiştir.
    
    Çinko, bitki gelişimi, enzim aktivitesi ve hormon sentezi için kritik öneme sahip bir mikro elementtir.
    Özellikle tahıl, mısır ve meyve ağaçlarında çinko eksikliği yaygın olarak görülür.`,
    usage: [
      'Topraktan uygulamada taban gübresi olarak kullanılır',
      'Yapraktan püskürtme ile hızlı düzeltme sağlar',
      'Damla sulama sistemlerinde uygulanabilir',
      'Çinko eksikliği belirtilerinde acil müdahale için idealdir'
    ],
    applicationRates: {
      soilApplication: '3-5 kg/dekar',
      foliarSpray: '200-300 gr/1000 litre su',
      fertigation: '2-4 kg/dekar'
    },
    certifications: ['EC Gübre Kalite Standardı', 'GMP+ Sertifikalı'],
    packaging: ['25 kg Torba', '500 kg BigBag']
  }
];
