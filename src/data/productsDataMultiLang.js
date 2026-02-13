import granulous17 from '../assets/agrosol-max-granulous-17.png';
import fullyWater from '../assets/agrosol-max-fully.png';
import mix from '../assets/agrosol-max-mix.png';
import topmix from '../assets/agrosol-max-topmix.png';
import seventeen33 from '../assets/agrosol-max-17-33.png';
import zinko from '../assets/agrosol-max-cinko.png';
import crystalFront from '../assets/AGROSOL MAX İNGİLİZCE_ÖN YÜZ (1).png';
const productsDataByLanguage = {
  TR: [
    {
      id: 'agrosol-max-mix',
      name: 'Agrosol*Max® Mix',
      type: 'Magnezyum Sülfat',
      subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      image: mix,
      specs: [' MgO %15', ' SO₃ %30', ' Zn %0.7'],
      benefits: [
        'Suda Çözünebilir MgO %15 (Magnezyum Oksit)',
        'Suda Çözünebilir SO₃ %30 (Kükürt Trioksit)',
        'Suda Çözünebilir Zn %0.7 (Çinko)',
        'EC FERTILIZER',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'FIRFIR ve MİBZER ile atılır',
        'Magnezyum ve Çinko eksikliği için ekonomik çözüm',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel bitkilerde kullanılır (şeker pancarı, mısır, ayçiçeği, kırmızı pancar...)'
      ],
      detailedDescription: `EC FERTILIZER standardında üretilen bu ürün, özellikle çinko eksikliği görülen topraklarda 
    mükemmel sonuçlar verir.`,
      usage: [
        'Taban Gübresi Olarak Ekimden Önce Uygulanır.',
        'FIRFIR ve MİBZER İle Kolayca Atılabilir.',
        'Özellikle Tahıl ve Mısır Ekiminde Tercih Edilir.',
        'Çinko Eksikliği Riski Yüksek Topraklarda Önerilir.'
      ],
      applicationRates: {
        cereals: '50-75 kg/dekar',
        corn: '75-100 kg/dekar',
        vegetables: '100-150 kg/dekar'
      },
      certifications: ['EC FERTILIZER Standardı'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Magnezyum Sülfat',
      subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      image: topmix,
      specs: [' MgO %16', ' SO₃ %32',  ' B %0.1', ' Mn %0.1' , ' Zn %0.2'],
      benefits: [
        'Suda Çözünebilir MgO %16 (Magnezyum Oksit)',
        'Suda Çözünebilir SO₃ %32 (Kükürt Trioksit)',
        'Suda Çözünebilir B %0.1 (Bor)',
        'Suda Çözünebilir Mn %0.1 (Mangan)',
        'Suda Çözünebilir Zn %0.2 (Çinko)',
        'EC FERTILIZER',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'FIRFIR ve MİBZER ile atılır',
        'Kompleks mikro element ihtiyacı için tam formül',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel bitkilerde kullanılır (şeker pancarı, mısır, ayçiçeği, kırmızı pancar...)'
      ],
      detailedDescription: `Bu zengin mikro element kompozisyonu, bitkilerin tüm gelişim dönemlerinde ihtiyaç duyduğu 
    besin elementlerini bir arada sunar. EC FERTILIZER standardında üretilir.`,
      usage: [
        'Özellikle Meyve Ağaçları ve Sebze Yetiştiriciliğinde Kullanılır.',
        'Çoklu Mikro Element Eksikliği Olan Topraklarda Tercih Edilir.',
        'FIRFIR ve MİBZER İle Taban Gübresi Olarak Uygulanır.',
        'Yüksek Verimli Tarım Sistemlerinde Önerilir.'
      ],
      applicationRates: {
        fruitTrees: '100-150 kg/dekar',
        vegetables: '75-125 kg/dekar',
        greenhouse: '100-200 kg/dekar'
      },
      certifications: ['EC FERTILIZER Standardı', 'Mikro Element Garantili'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max®',
      type: 'Magnezyum Sülfat',
      subtitle: 'Yüksek Saflıkta Magnezyum Sülfat',
      description: 'Yüksek saflıkta kristal magnezyum sülfat - Endüstriyel ve tarımsal kullanım',
      image: fullyWater,
      specs: [' MgO %16', ' SO₃ %32', 'TEKNİK KALİTE'],
      benefits: [
        'Kristal Form, Hızlı Çözünürlük',
        'Endüstriyel Ve Tarımsal Kullanım',
        'Suda Çözünebilir MgO %16, Suda Çözünebilir SO₃ %32 içerik',
        'Premium Kalite Standartları',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel Bitkilerde Kullanılır (Şeker Pancarı, Mısır, Ayçiçeği, Kırmızı Pancar...)'
      ],
      detailedDescription: `Kristal Yapısı Sayesinde Suda Hızlı Çözünür Ve Bitkiler Tarafından Kolayca Alınabilir.`,
      usage: [
        'Suda Çözünerek Yapraktan Uygulanabilir.',
        'Damla Sulama Sistemlerinde Kullanılabilir.',
        'Endüstriyel Proseslerde Magnezyum Kaynağı Olarak Kullanılır.',
        'Hayvan Yem Katkısı Olarak Da Kullanılabilir.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 litre su',
        fertigation: '5-10 kg/dekar',
        industrial: 'Proses Gereksinimlerine Göre'
      },
      certifications: ['GMP+ Sertifikalı', 'TSE Belgeli'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag']
    },
    {
      id: 'agrosol-max-17-33',
      name: 'Agrosol*Max® 17-33',
      type: 'Magnezyum Sülfat',
      subtitle: 'Yüksek Saflıkta Magnezyum Sülfat',
      description: 'Yüksek Saflıkta Kristal Magnezyum Sülfat - Endüstriyel Ve Tarımsal Kullanım',
      image: seventeen33,
      specs: [' MgO %17', ' SO₃ %33', 'TEKNİK KALİTE'],
      benefits: [
        'Kristal Form, Hızlı Çözünürlük',
        'Endüstriyel Ve Tarımsal Kullanım',
        'Suda Çözünebilir MgO %17, Suda Çözünebilir SO₃ %33 içerik',
        'Premium Kalite Standartları',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel Bitkilerde Kullanılır (Şeker Pancarı, Mısır, Ayçiçeği, Kırmızı Pancar...)',
        'EC Fertilizer'
      ],
      detailedDescription: `Kristal Yapısı Sayesinde Suda Hızlı Çözünür Ve Bitkiler Tarafından Kolayca Alınabilir.`,
      usage: [
        'Suda Çözünerek Yapraktan Uygulanabilir.',
        'Damla Sulama Sistemlerinde Kullanılabilir.',
        'Endüstriyel Proseslerde Magnezyum Kaynağı Olarak Kullanılır.',
        'Hayvan Yem Katkısı Olarak Da Kullanılabilir.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 litre su',
        fertigation: '5-10 kg/dekar',
        industrial: 'Proses gereksinimlerine göre'
      },
      certifications: ['GMP+ Sertifikalı', 'TSE Belgeli'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag']
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Magnezyum Sülfat',
      subtitle: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
      description: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
      image: granulous17,
      specs: [' MgO %17', ' SO₃ %33'],
      benefits: [
        'Suda Çözünebilir MgO %17 (Magnezyum Oksit)',
        'Suda Çözünebilir SO₃ %33 (Kükürt Trioksit)',
        'EC FERTILIZER',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'Açık tarla ve meyvecilikte fırfır ile kullanım kolaylığı',
        'Magnezyum ve Kükürt ihtiyacı için ekonomik ve güvenilir bitki besin kaynağı',
        'Kompoze Taban Gübreleriyle NPK ile karıştırılıp kullanılabilir',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel bitkilerde kullanılır (şeker pancarı, mısır, ayçiçeği, kırmızı pancar...)'
      ],
      detailedDescription: `EC FERTILIZER standardında üretilen bu ürün, toprakta yavaş çözünür ve hızla yıkanmaz. 
    Bu özelliği sayesinde uzun süreli etki sağlar ve besin kaybını minimize eder.`,
      usage: [
        'Açık Tarla ve Meyvecilik Uygulamaları İçin İdealdir.',
        'FIRFIR İle Kolayca Uygulanabilir.',
        'Kompoze Taban Gübreleri Ve NPK İle Karıştırılarak Kullanılabilir.',
        'Magnezyum Eksikliği Görülen Alanlarda Öncelikli Olarak Tercih Edilir.'
      ],
      applicationRates: {
        fieldCrops: '50-100 kg/dekar',
        vegetables: '75-150 kg/dekar',
        fruitTrees: '100-200 kg/dekar'
      },
      certifications: ['EC FERTILIZER Standardı', 'Organik Tarıma Uygun'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Kristal Magnezyum Sülfat',
      subtitle: 'Kristal Magnezyum Sülfat',
      description: 'Kristal Magnezyum Sülfat',
      image: crystalFront,
      specs: [' MgO %16', ' SO₃ %32'],
      benefits: [
        'Suda Çözünebilir MgO %17 (Magnezyum Oksit)',
        'Suda Çözünebilir SO₃ %33 (Kükürt Trioksit)',
        'Suda %100 çözünür',
        'Kristal yapı – Hızlı etki',
        'Yapraktan Ve Topraktan Uygulanabilir',
        'EC FERTILIZER',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel Bitkilerde Kullanılır (Şeker Pancarı, Mısır, Ayçiçeği, Kırmızı Pancar...)'
      ],
      detailedDescription: `Suda %100 çözünür yapısı sayesinde hem yapraktan püskürtme hem de toprak uygulaması için idealdir.
    Kristal yapısı hızlı etki sağlar ve bitki tarafından kolayca alınır.`,
      usage: [
        'Yapraktan Püskürtme Olarak Uygulanabilir.',
        'Damla Sulama Sistemlerinde Kullanılır.',
        'Fertigasyon Uygulamalarında Tercih Edilir.',
        'Magnezyum Eksikliği Belirtilerinde Hızlı Müdahale İçin Idealdir.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 litre su',
        fertigation: '5-10 kg/dekar',
        soilApplication: '25-50 kg/dekar'
      },
      certifications: ['EC FERTILIZER Standardı', 'Organik Tarıma Uygun'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Çinko Tuzu',
      type: 'Çinko Gübresi',
      subtitle: 'Çinko Sülfat Monohidrat',
      description: 'Çinko Sülfat Monohidrat - Çinko Eksikliği İçin Ideal',
      image: zinko,
      specs: [' Zn %21'],
      benefits: [
        'Suda Çözünebilir Zn %21 (Çinko)',
        'Monohidrat form',
        'Hızlı Etki Ve Yüksek Çözünürlük',
        'Kristal Yapı',
        'Yüksek Saflık',
        'Teknik Kalite',
        'Endüstriyel Bitkilerde Kullanılır (Şeker Pancarı, Mısır, Ayçiçeği, Kırmızı Pancar...)'
      ],
      detailedDescription: `Çinko, bitki gelişimi, enzim aktivitesi ve hormon sentezi için kritik öneme sahip bir mikro elementtir.
    Özellikle tahıl, mısır ve meyve ağaçlarında çinko eksikliği yaygın olarak görülür.`,
      usage: [
        'Topraktan Uygulamada Taban Gübresi Olarak Kullanılır.',
        'Yapraktan Püskürtme İle Hızlı Düzeltme Sağlar.',
        'Damla Sulama Sistemlerinde Uygulanabilir.',
        'Çinko Eksikliği Belirtilerinde Acil Müdahale İçin İdealdir.'
      ],
      applicationRates: {
        soilApplication: '3-5 kg/dekar',
        foliarSpray: '200-300 gr/1000 litre su',
        fertigation: '2-4 kg/dekar'
      },
      certifications: ['EC FERTILIZER Standardı', 'GMP+ Sertifikalı'],
      packaging: ['25 kg Torba', '1000 kg BigBag', '1250 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ],
  EN: [
    {
      id: 'agrosol-max-mix',
      name: 'Agrosol*Max® Mix',
      type: 'Magnesium Sulfate',
      subtitle: 'Micro Element Enriched Magnesium Sulfate',
      description: 'Micro Element Enriched Magnesium Sulfate',
      image: mix,
      specs: ['MgO 15%', 'SO₃ 30%', 'Zn 0.7%'],
      benefits: [
        'Water Soluble MgO 15% (Magnesium Oxide)',
        'Water Soluble SO₃ 30% (Sulfur Trioxide)',
        'Water Soluble Zn 0.7% (Zinc)',
        'EC FERTILIZER',
        'Slow dissolution in soil – Does not wash away quickly',
        'Applied with SPREADER and SEED DRILL',
        'Economic solution for magnesium and zinc deficiency',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `Produced at EC FERTILIZER Quality standard, this product gives excellent results especially in soils with zinc deficiency.`,
      usage: [
        'Applied As Base Fertilizer Before Planting.',
        'Can Be Easily Applied With SPREADER and SEED DRILL.',
        'Particularly Preferred In Cereal and Corn Planting.',
        'Recommended For Soils With High Zinc Deficiency Risk.'
      ],
      applicationRates: {
        cereals: '50-75 kg/decare',
        corn: '75-100 kg/decare',
        vegetables: '100-150 kg/decare'
      },
      certifications: ['EC FERTILIZER Quality Standard'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Magnesium Sulfate',
      subtitle: 'Micro Element Enriched Magnesium Sulfate',
      description: 'Micro Element Enriched Magnesium Sulfate',
      image: topmix,
      specs: ['MgO 16%', 'SO₃ 32%', 'Zn 0.2%', 'B 0.1%', 'Mn 0.1%'],
      benefits: [
        'Water Soluble MgO 16% (Magnesium Oxide)',
        'Water Soluble SO₃ 32% (Sulfur Trioxide)',
        'Water Soluble Zn 0.2% (Zinc)',
        'Water Soluble B 0.1% (Boron)',
        'Water Soluble Mn 0.1% (Manganese)',
        'EC FERTILIZER',
        'Slow dissolution in soil – Does not wash away quickly',
        'Applied with SPREADER and SEED DRILL',
        'Complete formula for complex microelement needs',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `This rich microelement composition offers the nutrient elements that plants need throughout all growth periods together. Produced at EC FERTILIZER Quality standard.`,
      usage: [
        'Particularly Used In Fruit Trees And Vegetable Cultivation.',
        'Preferred In Soils With Multiple Microelement Deficiencies.',
        'Applied As Base Fertilizer With SPREADER and SEED DRILL.',
        'Recommended In High-Yield Agricultural Systems.'
      ],
      applicationRates: {
        fruitTrees: '100-150 kg/decare',
        vegetables: '75-125 kg/decare',
        greenhouse: '100-200 kg/decare'
      },
      certifications: ['EC FERTILIZER Quality Standard', 'GlobalGAP Approved'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max®',
      type: 'Magnesium Sulfate',
      subtitle: 'High Purity Magnesium Sulfate',
      description: 'High purity crystal magnesium sulfate - Industrial and agricultural use',
      image: fullyWater,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Crystal form, fast solubility',
        'Industrial and agricultural use',
        'Water Soluble MgO 16%, Water Soluble SO₃ 32% content',
        'Premium quality standards',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `Thanks to its crystal structure, it dissolves rapidly in water and can be easily absorbed by plants.`,
      usage: [
        'Can Be Applied Foliarly By Dissolving In Water.',
        'Can Be Used In Drip Irrigation Systems.',
        'Used As A Magnesium Source In Industrial Processes.',
        'Can Also Be Used As Animal Feed Additive.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 liters water',
        fertigation: '5-10 kg/decare',
        industrial: 'According to process requirements'
      },
      certifications: ['GMP+ Certified', 'TSE Certified'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag']
    },
    {
      id: 'agrosol-max-17-33',
      name: 'Agrosol*Max® 17-33',
      type: 'Magnesium Sulfate',
      subtitle: 'High Purity Magnesium Sulfate',
      description: 'High purity crystal magnesium sulfate - Industrial and agricultural use',
      image: seventeen33,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'Crystal form, fast solubility',
        'Industrial and agricultural use',
        'Water Soluble MgO 17%, Water Soluble SO₃ 33% content',
        'Premium quality standards',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)',
        'EC FERTILIZER'
      ],
      detailedDescription: `Thanks to its crystal structure, it dissolves rapidly in water and can be easily absorbed by plants.`,
      usage: [
        'Can Be Applied Foliarly By Dissolving In Water.',
        'Can Be Used In Drip Irrigation Systems.',
        'Used As A Magnesium Source In Industrial Processes.',
        'Can Also Be Used As Animal Feed Additive.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 liters water',
        fertigation: '5-10 kg/decare',
        industrial: 'According to process requirements'
      },
      certifications: ['GMP+ Certified', 'TSE Certified'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag']
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Magnesium Sulfate',
      subtitle: 'Granulated Magnesium Sulfate Heptahydrate',
      description: 'Granulated Magnesium Sulfate Heptahydrate',
      image: granulous17,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'Water Soluble MgO 17% (Magnesium Oxide)',
        'Water Soluble SO₃ 33% (Sulfur Trioxide)',
        'EC FERTILIZER',
        'Slow dissolution in soil – Does not wash away quickly',
        'Easy application with spreaders in open field and fruit farming',
        'Economic and reliable plant nutrient source for magnesium and sulfur needs',
        'Can be mixed and used with compound base fertilizers and NPK',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `Produced at EC FERTILIZER Quality standard, this product dissolves slowly in soil and does not wash away quickly. 
    Thanks to this feature, it provides long-term effect and minimizes nutrient loss.`,
      usage: [
        'Ideal For Open Field And Fruit Farming Applications.',
        'Can Be Easily Applied With SPREADER.',
        'Can Be Used By Mixing With Compound Base Fertilizers And NPK.',
        'Preferred Primarily In Areas Where Magnesium Deficiency Is Observed.'
      ],
      applicationRates: {
        fieldCrops: '50-100 kg/decare',
        vegetables: '75-150 kg/decare',
        fruitTrees: '100-200 kg/decare'
      },
      certifications: ['EC FERTILIZER Quality Standard', 'Suitable for Organic Farming'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Crystal Magnesium Sulfate',
      subtitle: 'Crystal Magnesium Sulfate',
      description: 'Crystal Magnesium Sulfate',
      image: seventeen33,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Water Soluble MgO 16% (Magnesium Oxide)',
        'Water Soluble SO₃ 32% (Sulfur Trioxide)',
        '100% water soluble',
        'Crystal structure – Fast effect',
        'Can be applied foliarly and to soil',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `Thanks to its 100% water-soluble structure, it is ideal for both foliar spraying and soil application.
    Its crystal structure provides fast effect and is easily absorbed by plants.`,
      usage: [
        'Can Be Applied as Foliar Spray.',
        'Used In Drip Irrigation Systems.',
        'Preferred in Fertigation Applications.',
        'Ideal For Rapid Intervention In Magnesium Deficiency Symptoms.'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 liters water',
        fertigation: '5-10 kg/decare',
        soilApplication: '25-50 kg/decare'
      },
      certifications: ['EC FERTILIZER Quality Standard', 'Suitable for Organic Farming'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Zinc Salt',
      type: 'Zinc Fertilizer',
      subtitle: 'Zinc Sulfate Monohydrate',
      description: 'Zinc sulfate monohydrate - Ideal for zinc deficiency',
      image: zinko,
      specs: ['Zn 36%'],
      benefits: [
        'Water Soluble Zn 36% (Zinc)',
        'Monohydrate form',
        'Fast acting and high solubility',
        'Crystal structure',
        'High Purity',
        'TECHNICAL QUALITY',
        'Used in industrial plants (sugar beet, corn, sunflower, red beet...)'
      ],
      detailedDescription: `Zinc is a microelement of critical importance for plant growth, enzyme activity and hormone synthesis.
    Zinc deficiency is commonly observed especially in cereals, corn and fruit trees.`,
      usage: [
        'Used As Base Fertilizer in Soil Application.', 
        'Provides Rapid Correction With Doliar Spraying.',
        'Can Be Applied in Drip Irrigation Systems.',
        'Ideal For Emergency Intervention in Zinc Deficiency Symptoms.'
      ],
      applicationRates: {
        soilApplication: '3-5 kg/decare',
        foliarSpray: '200-300 gr/1000 liters water',
        fertigation: '2-4 kg/decare'
      },
      certifications: ['EC FERTILIZER Quality Standard', 'GMP+ Certified'],
      packaging: ['25 kg Bag', '1000 kg Big Bag', '1250 kg Big Bag'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ],
  UK: [
    {
      id: 'agrosol-max-mix',
      name: 'Agrosol*Max® Mix',
      type: 'Сульфат магнію',
      subtitle: 'Сульфат магнію збагачений мікроелементами',
      description: 'Сульфат магнію збагачений мікроелементами',
      image: mix,
      specs: ['MgO 15%', 'SO₃ 30%', 'Zn 0.7%'],
      benefits: [
        'Водорозчинний MgO 15% (Оксид магнію)',
        'Водорозчинний SO₃ 30% (Триоксид сірки)',
        'Водорозчинний Zn 0.7% (Цинк)',
        'ЄС добриво клас',
        'Повільне розчинення в ґрунті – Не вимивається швидко',
        'Застосовується за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Економічне рішення для дефіциту магнію та цинку',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Виготовлене за стандартом якості добрив ЄС, цей продукт дає чудові результати, особливо в грунтах з дефіцитом цинку.`,
      usage: [
        'Застосовується як основне добриво перед посадкою',
        'Може бути легко нанесене за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Особливо віддається перевага при посадці зернових та кукурудзи',
        'Рекомендується для грунтів з високим ризиком дефіциту цинку'
      ],
      applicationRates: {
        cereals: '50-75 кг/декар',
        corn: '75-100 кг/декар',
        vegetables: '100-150 кг/декар'
      },
      certifications: ['Стандарт якості добрив ЄС'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Сульфат магнію',
      subtitle: 'Сульфат магнію, збагачений мікроелементами',
      description: 'Сульфат магнію, збагачений мікроелементами',
      image: topmix,
      specs: ['MgO 16%', 'SO₃ 32%', 'Zn 0.2%', 'B 0.1%', 'Mn 0.1%'],
      benefits: [
        'Водорозчинний MgO 16% (Оксид магнію)',
        'Водорозчинний SO₃ 32% (Триоксид сірки)',
        'Водорозчинний Zn 0.2% (Цинк)',
        'Водорозчинний B 0.1% (Бор)',
        'Водорозчинний Mn 0.1% (Марганець)',
        'ЄС добриво клас',
        'Повільне розчинення в ґрунті – Не вимивається швидко',
        'Застосовується за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Повна формула для комплексних потреб мікроелементів',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Ця багата композиція мікроелементів пропонує поживні елементи, які потрібні рослинам протягом всіх періодів росту. Виробляється за стандартом якості добрив ЄС.`,
      usage: [
        'Особливо використовується у фруктових деревах та овочівництві',
        'Віддається перевага на грунтах з множинними дефіцитами мікроелементів',
        'Застосовується як основне добриво за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Рекомендується у системах високопродуктивного землеробства'
      ],
      applicationRates: {
        fruitTrees: '100-150 кг/декар',
        vegetables: '75-125 кг/декар',
        greenhouse: '100-200 кг/декар'
      },
      certifications: ['Стандарт якості добрив ЄС', 'GlobalGAP затверджено'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max® ',
      type: 'Сульфат магнію',
      subtitle: 'Високочистий сульфат магнію',
      description: 'Високочистий кристалічний сульфат магнію - Промислове та сільськогосподарське використання',
      image: fullyWater,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Кристалічна форма, швидка розчинність',
        'Промислове та сільськогосподарське використання',
        'Вміст Водорозчинний MgO 16%, Водорозчинний SO₃ 32%',
        'Преміум стандарти якості',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Завдяки своїй кристалічній структурі він швидко розчиняється у воді та легко засвоюється рослинами.`,
      usage: [
        'Може застосовуватися листково шляхом розчинення у воді',
        'Може використовуватися в системах крапельного зрошення',
        'Використовується як джерело магнію в промислових процесах',
        'Може також використовуватися як кормова добавка для тварин'
      ],
      applicationRates: {
        foliarSpray: '2-3 кг/1000 літрів води',
        fertigation: '5-10 кг/декар',
        industrial: 'Відповідно до вимог процесу'
      },
      certifications: ['Сертифіковано GMP+', 'Сертифіковано TSE'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег']
    },
    {
      id: 'agrosol-max-17-33',
      name: 'Agrosol*Max® 17-33',
      type: 'Сульфат магнію',
      subtitle: 'Високочистий сульфат магнію',
      description: 'Високочистий кристалічний сульфат магнію - Промислове та сільськогосподарське використання',
      image: seventeen33,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'Кристалічна форма, швидка розчинність',
        'Промислове та сільськогосподарське використання',
        'Вміст Водорозчинний MgO 17%, Водорозчинний SO₃ 33%',
        'Преміум стандарти якості',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)',
        'ДОБРИВО ЄС'
      ],
      detailedDescription: `Завдяки своїй кристалічній структурі він швидко розчиняється у воді та легко засвоюється рослинами.`,
      usage: [
        'Може застосовуватися листково шляхом розчинення у воді',
        'Може використовуватися в системах крапельного зрошення',
        'Використовується як джерело магнію в промислових процесах',
        'Може також використовуватися як кормова добавка для тварин'
      ],
      applicationRates: {
        foliarSpray: '2-3 кг/1000 літрів води',
        fertigation: '5-10 кг/декар',
        industrial: 'Відповідно до вимог процесу'
      },
      certifications: ['Сертифіковано GMP+', 'Сертифіковано TSE'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег']
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Сульфат магнію',
      subtitle: 'Гранульований сульфат магнію гептагідрат',
      description: 'Гранульований сульфат магнію гептагідрат',
      image: granulous17,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'Водорозчинний MgO 17% (Оксид магнію)',
        'Водорозчинний SO₃ 33% (Триоксид сірки)',
        'ЄС добриво клас',
        'Повільне розчинення в ґрунті – Не вимивається швидко',
        'Легке застосування з розкидачами на відкритому полі та у фруктовому господарстві',
        'Економічне та надійне джерело поживних речовин для рослин для потреб магнію та сірки',
        'Може бути змішане та використане з комплексними основними добривами та NPK',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Виготовлене за стандартом якості добрив ЄС, цей продукт повільно розчиняється в грунті та не вимивається швидко. 
    Завдяки цій особливості він забезпечує довгостроковий ефект та мінімізує втрату поживних речовин.`,
      usage: [
        'Ідеально підходить для застосування на відкритому полі та у фруктовому господарстві',
        'Може бути легко нанесене за допомогою РОЗКИДАЧА',
        'Може використовуватися шляхом змішування з комплексними основними добривами та NPK',
        'Віддається перевага насамперед у районах, де спостерігається дефіцит магнію'
      ],
      applicationRates: {
        fieldCrops: '50-100 кг/декар',
        vegetables: '75-150 кг/декар',
        fruitTrees: '100-200 кг/декар'
      },
      certifications: ['Стандарт якості добрив ЄС', 'Підходить для органічного землеробства'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Кристалічний сульфат магнію',
      subtitle: 'Кристалічний сульфат магнію',
      description: 'Кристалічний сульфат магнію',
      image: seventeen33,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Водорозчинний MgO 16% (Оксид магнію)',
        'Водорозчинний SO₃ 32% (Триоксид сірки)',
        '100% розчинний у воді',
        'Кристалічна структура – Швидка дія',
        'Може застосовуватися листково та в ґрунт',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Завдяки своїй 100% водорозчинній структурі він ідеально підходить як для листкового обприскування, так і для внесення в грунт.
    Його кристалічна структура забезпечує швидку дію та легко засвоюється рослинами.`,
      usage: [
        'Може застосовуватися як листкове обприскування',
        'Використовується в системах крапельного зрошення',
        'Віддається перевага у застосуваннях фертигації',
        'Ідеально підходить для швидкого втручання при симптомах дефіциту магнію'
      ],
      applicationRates: {
        foliarSpray: '2-3 кг/1000 літрів води',
        fertigation: '5-10 кг/декар',
        soilApplication: '25-50 кг/декар'
      },
      certifications: ['Стандарт якості добрив ЄС', 'Підходить для органічного землеробства'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Цинкова сіль',
      type: 'Цинкове добриво',
      subtitle: 'Сульфат цинку моногідрат',
      description: 'Сульфат цинку моногідрат - Ідеально для дефіциту цинку',
      image: zinko,
      specs: ['Zn 36%'],
      benefits: [
        'Водорозчинний Zn 36% (Цинк)',
        'Моногідратна форма',
        'Швидка дія та висока розчинність',
        'Кристалічна структура',
        'Висока чистота',
        'Технічна якість',
        'Використовується в промислових рослинах (цукровий буряк, кукурудза, соняшник, червоний буряк...)'
      ],
      detailedDescription: `Цинк є мікроелементом критичної важливості для росту рослин, активності ферментів та синтезу гормонів.
    Дефіцит цинку зазвичай спостерігається особливо в зернових, кукурудзі та фруктових деревах.`,
      usage: [
        'Використовується як основне добриво при внесенні в грунт',
        'Забезпечує швидку корекцію за допомогою листкового обприскування',
        'Може застосовуватися в системах крапельного зрошення',
        'Ідеально для екстреного втручання при симптомах дефіциту цинку'
      ],
      applicationRates: {
        soilApplication: '3-5 кг/декар',
        foliarSpray: '200-300 гр/1000 літрів води',
        fertigation: '2-4 кг/декар'
      },
      certifications: ['Стандарт якості добрив ЄС', 'Сертифіковано GMP+'],
      packaging: ['25 кг мішок', '1000 кг Біг-Бег', '1250 кг Біг-Бег'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ]
};

export const getProductsData = (language = 'TR') => {
  return productsDataByLanguage[language] || productsDataByLanguage.TR;
};
