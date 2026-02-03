import product1 from '../assets/agrosol-max-granulous-17.png';
import product2 from '../assets/agrosol-max-fully.png';
import product3 from '../assets/agrosol-max-mix.png';
import product4 from '../assets/agrosol-max-topmix.png';
import product5 from '../assets/agrosol-max-17-33.png';
import product6 from '../assets/agrosol-max-cinko.png';

const productsDataByLanguage = {
  TR: [
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Magnezyum Sülfat',
      subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      image: product4,
      specs: ['MgO %16', 'SO₃ %32',  'B %0.1', 'Mn %0.1' , 'Zn %0.2'],
      benefits: [
        'MgO %16 (Magnezyum Oksit)',
        'SO₃ %32 (Kükürt Trioksit)',
        'B %0.1 (Bor)',
        'Mn %0.1 (Mangan)',
        'Zn %0.2 (Çinko)',
        'EC Gübre Kalite',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'FIRFIR ve MİBZER ile atılır',
        'Kompleks mikro element ihtiyacı için tam formül'
      ],
      detailedDescription: `Bu zengin mikro element kompozisyonu, bitkilerin tüm gelişim dönemlerinde ihtiyaç duyduğu 
    besin elementlerini bir arada sunar. EC Gübre Kalite standardında üretilir.`,
      usage: [
        'Özellikle meyve ağaçları ve sebze yetiştiriciliğinde kullanılır',
        'Çoklu mikro element eksikliği olan topraklarda tercih edilir',
        'FIRFIR ve MİBZER ile taban gübresi olarak uygulanır',
        'Yüksek verimli tarım sistemlerinde önerilir'
      ],
      applicationRates: {
        fruitTrees: '100-150 kg/dekar',
        vegetables: '75-125 kg/dekar',
        greenhouse: '100-200 kg/dekar'
      },
      certifications: ['EC Gübre Kalite Standardı', 'Mikro Element Garantili'],
      packaging: ['25 kg Torba', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max®',
      type: 'Magnezyum Sülfat',
      subtitle: 'Yüksek Saflıkta Magnezyum Sülfat',
      description: 'Yüksek saflıkta kristal magnezyum sülfat - Endüstriyel ve tarımsal kullanım',
      image: product2,
      specs: ['MgO %16', 'SO₃ %32', 'TEKNİK KALİTE'],
      benefits: [
        'Kristal form, hızlı çözünürlük',
        'Endüstriyel ve tarımsal kullanım',
        'MgO %16, SO₃ %32 içerik',
        'Premium kalite standartları',
        'TEKNİK KALİTE'
      ],
      detailedDescription: `Kristal yapısı sayesinde suda hızla çözünür ve bitkiler tarafından kolayca alınabilir.`,
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
      type: 'Magnezyum Sülfat',
      subtitle: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      description: 'Mikro Element Zenginleştirilmiş Magnezyum Sülfat',
      image: product3,
      specs: ['MgO %15', 'SO₃ %30', 'Zn %0.7'],
      benefits: [
        'MgO %15 (Magnezyum Oksit)',
        'SO₃ %30 (Kükürt Trioksit)',
        'Zn %0.7 (Çinko)',
        'EC Gübre Kalite',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'FIRFIR ve MİBZER ile atılır',
        'Magnezyum ve Çinko eksikliği için ekonomik çözüm'
      ],
      detailedDescription: `EC Gübre Kalite standardında üretilen bu ürün, özellikle çinko eksikliği görülen topraklarda 
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
      packaging: ['25 kg Torba', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Magnezyum Sülfat',
      subtitle: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
      description: 'Granüllenmiş Magnezyum Sülfat Heptahidrat',
      image: product1,
      specs: ['MgO %17', 'SO₃ %33'],
      benefits: [
        'MgO %17 (Magnezyum Oksit)',
        'SO₃ %33 (Kükürt Trioksit)',
        'EC Gübre Kalite',
        'Toprakta yavaş çözünür – Hızla yıkanmaz',
        'Açık tarla ve meyvecilikte fırfır ile kullanım kolaylığı',
        'Magnezyum ve Kükürt ihtiyacı için ekonomik ve güvenilir bitki besin kaynağı',
        'Kompoze Taban Gübreleriyle NPK ile karıştırılıp kullanılabilir'
      ],
      detailedDescription: `EC Gübre Kalite standardında üretilen bu ürün, toprakta yavaş çözünür ve hızla yıkanmaz. 
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
      packaging: ['25 kg Torba', '500 kg BigBag', '1000 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Kristal Magnezyum Sülfat',
      subtitle: 'Kristal Magnezyum Sülfat',
      description: 'Kristal Magnezyum Sülfat',
      image: product5,
      specs: ['MgO %16', 'SO₃ %32'],
      benefits: [
        'MgO %16 (Magnezyum Oksit)',
        'SO₃ %32 (Kükürt Trioksit)',
        'Suda %100 çözünür',
        'Kristal yapı – Hızlı etki',
        'Yapraktan ve topraktan uygulanabilir'
      ],
      detailedDescription: `Suda %100 çözünür yapısı sayesinde hem yapraktan püskürtme hem de toprak uygulaması için idealdir.
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
      packaging: ['25 kg Torba', '500 kg BigBag', '1000 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Çinko Tuzu',
      type: 'Çinko Gübresi',
      subtitle: 'Çinko Sülfat Monohidrat',
      description: 'Çinko sülfat monohidrat - Çinko eksikliği için ideal',
      image: product6,
      specs: ['Zn %21'],
      benefits: [
        'Zn %21 (Çinko)',
        'Monohidrat form',
        'Hızlı etki ve yüksek çözünürlük',
        'Kristal yapı'
      ],
      detailedDescription: `Çinko, bitki gelişimi, enzim aktivitesi ve hormon sentezi için kritik öneme sahip bir mikro elementtir.
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
      packaging: ['25 kg Torba', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ],
  EN: [
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Magnesium Sulfate',
      subtitle: 'Micro Element Enriched Magnesium Sulfate',
      description: 'Micro Element Enriched Magnesium Sulfate',
      image: product4,
      specs: ['MgO 16%', 'SO₃ 32%', 'Zn 0.2%', 'B+Mn 0.1%'],
      benefits: [
        'MgO 16% (Magnesium Oxide)',
        'SO₃ 32% (Sulfur Trioxide)',
        'Zn 0.2% (Zinc)',
        'B 0.1% (Boron)',
        'Mn 0.1% (Manganese)',
        'EC Fertilizer Grade',
        'Slow dissolution in soil – Does not wash away quickly',
        'Applied with SPREADER and SEED DRILL',
        'Complete formula for complex microelement needs'
      ],
      detailedDescription: `This rich microelement composition offers the nutrient elements that plants need throughout all growth periods together. Produced at EC Fertilizer Quality standard.`,
      usage: [
        'Particularly used in fruit trees and vegetable cultivation',
        'Preferred in soils with multiple microelement deficiencies',
        'Applied as base fertilizer with SPREADER and SEED DRILL',
        'Recommended in high-yield agricultural systems'
      ],
      applicationRates: {
        fruitTrees: '100-150 kg/decare',
        vegetables: '75-125 kg/decare',
        greenhouse: '100-200 kg/decare'
      },
      certifications: ['EC Fertilizer Quality Standard', 'GlobalGAP Approved'],
      packaging: ['25 kg Bag', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max®',
      type: 'Magnesium Sulfate',
      subtitle: 'High Purity Magnesium Sulfate',
      description: 'High purity crystal magnesium sulfate - Industrial and agricultural use',
      image: product2,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Crystal form, fast solubility',
        'Industrial and agricultural use',
        'MgO 16%, SO₃ 32% content',
        'Premium quality standards'
      ],
      detailedDescription: `Thanks to its crystal structure, it dissolves rapidly in water and can be easily absorbed by plants.`,
      usage: [
        'Can be applied foliarly by dissolving in water',
        'Can be used in drip irrigation systems',
        'Used as a magnesium source in industrial processes',
        'Can also be used as animal feed additive'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 liters water',
        fertigation: '5-10 kg/decare',
        industrial: 'According to process requirements'
      },
      certifications: ['GMP+ Certified', 'TSE Certified'],
      packaging: ['25 kg Bag', '1000 kg BigBag']
    },
    {
      id: 'agrosol-max-mix',
      name: 'Agrosol*Max® Mix',
      type: 'Magnesium Sulfate',
      subtitle: 'Micro Element Enriched Magnesium Sulfate',
      description: 'Micro Element Enriched Magnesium Sulfate',
      image: product3,
      specs: ['MgO 15%', 'SO₃ 30%', 'Zn 0.7%'],
      benefits: [
        'MgO 15% (Magnesium Oxide)',
        'SO₃ 30% (Sulfur Trioxide)',
        'Zn 0.7% (Zinc)',
        'EC Fertilizer Grade',
        'Slow dissolution in soil – Does not wash away quickly',
        'Applied with SPREADER and SEED DRILL',
        'Economic solution for magnesium and zinc deficiency'
      ],
      detailedDescription: `Produced at EC Fertilizer Quality standard, this product gives excellent results especially in soils with zinc deficiency.`,
      usage: [
        'Applied as base fertilizer before planting',
        'Can be easily applied with SPREADER and SEED DRILL',
        'Particularly preferred in cereal and corn planting',
        'Recommended for soils with high zinc deficiency risk'
      ],
      applicationRates: {
        cereals: '50-75 kg/decare',
        corn: '75-100 kg/decare',
        vegetables: '100-150 kg/decare'
      },
      certifications: ['EC Fertilizer Quality Standard'],
      packaging: ['25 kg Bag', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Magnesium Sulfate',
      subtitle: 'Granulated Magnesium Sulfate Heptahydrate',
      description: 'Granulated Magnesium Sulfate Heptahydrate',
      image: product1,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'MgO 17% (Magnesium Oxide)',
        'SO₃ 33% (Sulfur Trioxide)',
        'EC Fertilizer Grade',
        'Slow dissolution in soil – Does not wash away quickly',
        'Easy application with spreaders in open field and fruit farming',
        'Economic and reliable plant nutrient source for magnesium and sulfur needs',
        'Can be mixed and used with compound base fertilizers and NPK'
      ],
      detailedDescription: `Produced at EC Fertilizer Quality standard, this product dissolves slowly in soil and does not wash away quickly. 
    Thanks to this feature, it provides long-term effect and minimizes nutrient loss.`,
      usage: [
        'Ideal for open field and fruit farming applications',
        'Can be easily applied with SPREADER',
        'Can be used by mixing with compound base fertilizers and NPK',
        'Preferred primarily in areas where magnesium deficiency is observed'
      ],
      applicationRates: {
        fieldCrops: '50-100 kg/decare',
        vegetables: '75-150 kg/decare',
        fruitTrees: '100-200 kg/decare'
      },
      certifications: ['EC Fertilizer Quality Standard', 'Suitable for Organic Farming'],
      packaging: ['25 kg Bag', '500 kg BigBag', '1000 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Crystal Magnesium Sulfate',
      subtitle: 'Crystal Magnesium Sulfate',
      description: 'Crystal Magnesium Sulfate',
      image: product5,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'MgO 16% (Magnesium Oxide)',
        'SO₃ 32% (Sulfur Trioxide)',
        '100% water soluble',
        'Crystal structure – Fast effect',
        'Can be applied foliarly and to soil'
      ],
      detailedDescription: `Thanks to its 100% water-soluble structure, it is ideal for both foliar spraying and soil application.
    Its crystal structure provides fast effect and is easily absorbed by plants.`,
      usage: [
        'Can be applied as foliar spray',
        'Used in drip irrigation systems',
        'Preferred in fertigation applications',
        'Ideal for rapid intervention in magnesium deficiency symptoms'
      ],
      applicationRates: {
        foliarSpray: '2-3 kg/1000 liters water',
        fertigation: '5-10 kg/decare',
        soilApplication: '25-50 kg/decare'
      },
      certifications: ['EC Fertilizer Quality Standard', 'Suitable for Organic Farming'],
      packaging: ['25 kg Bag', '500 kg BigBag', '1000 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Zinc Salt',
      type: 'Zinc Fertilizer',
      subtitle: 'Zinc Sulfate Monohydrate',
      description: 'Zinc sulfate monohydrate - Ideal for zinc deficiency',
      image: product6,
      specs: ['Zn 36%'],
      benefits: [
        'Zn 36% (Zinc)',
        'Monohydrate form',
        'Fast acting and high solubility',
        'Crystal structure'
      ],
      detailedDescription: `Zinc is a microelement of critical importance for plant growth, enzyme activity and hormone synthesis.
    Zinc deficiency is commonly observed especially in cereals, corn and fruit trees.`,
      usage: [
        'Used as base fertilizer in soil application',
        'Provides rapid correction with foliar spraying',
        'Can be applied in drip irrigation systems',
        'Ideal for emergency intervention in zinc deficiency symptoms'
      ],
      applicationRates: {
        soilApplication: '3-5 kg/decare',
        foliarSpray: '200-300 gr/1000 liters water',
        fertigation: '2-4 kg/decare'
      },
      certifications: ['EC Fertilizer Quality Standard', 'GMP+ Certified'],
      packaging: ['25 kg Bag', '500 kg BigBag'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ],
  UK: [
    {
      id: 'agrosol-max-topmix',
      name: 'Agrosol*Max® TopMix',
      type: 'Сульфат магнію',
      subtitle: 'Сульфат магнію, збагачений мікроелементами',
      description: 'Сульфат магнію, збагачений мікроелементами',
      image: product4,
      specs: ['MgO 16%', 'SO₃ 32%', 'Zn 0.2%', 'B+Mn 0.1%'],
      benefits: [
        'MgO 16% (Оксид магнію)',
        'SO₃ 32% (Триоксид сірки)',
        'Zn 0.2% (Цинк)',
        'B 0.1% (Бор)',
        'Mn 0.1% (Марганець)',
        'ЄС добриво клас',
        'Повільне розчинення в грунті – Не вимивається швидко',
        'Застосовується за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Повна формула для комплексних потреб мікроелементів'
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
      packaging: ['25 кг мішок', '500 кг BigBag'],
      registrationCertificate: '/Agrosol-Max-TopMix-Tescil.pdf',
      certificateName: 'Agrosol-Max-TopMix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-fully',
      name: 'Agrosol*Max® ',
      type: 'Сульфат магнію',
      subtitle: 'Високочистий сульфат магнію',
      description: 'Високочистий кристалічний сульфат магнію - Промислове та сільськогосподарське використання',
      image: product2,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'Кристалічна форма, швидка розчинність',
        'Промислове та сільськогосподарське використання',
        'Вміст MgO 16%, SO₃ 32%',
        'Преміум стандарти якості'
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
      packaging: ['25 кг мішок', '1000 кг BigBag']
    },
    {
      id: 'agrosol-max-mix',
      name: 'Agrosol*Max® Mix',
      type: 'Сульфат магнію',
      subtitle: 'Сульфат магнію збагачений мікроелементами',
      description: 'Сульфат магнію збагачений мікроелементами',
      image: product3,
      specs: ['MgO 15%', 'SO₃ 30%', 'Zn 0.7%'],
      benefits: [
        'MgO 15% (Оксид магнію)',
        'SO₃ 30% (Триоксид сірки)',
        'Zn 0.7% (Цинк)',
        'ЄС добриво клас',
        'Повільне розчинення в грунті – Не вимивається швидко',
        'Застосовується за допомогою РОЗКИДАЧА та СІВАЛКИ',
        'Економічне рішення для дефіциту магнію та цинку'
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
      packaging: ['25 кг мішок', '500 кг BigBag'],
      registrationCertificate: '/Agrosol-Max-Mix-Tescil.pdf',
      certificateName: 'Agrosol-Max-Mix-Tescil.pdf'
    },
    {
      id: 'agrosol-max-17',
      name: 'Agrosol*Max®-17',
      type: 'Сульфат магнію',
      subtitle: 'Гранульований сульфат магнію гептагідрат',
      description: 'Гранульований сульфат магнію гептагідрат',
      image: product1,
      specs: ['MgO 17%', 'SO₃ 33%'],
      benefits: [
        'MgO 17% (Оксид магнію)',
        'SO₃ 33% (Триоксид сірки)',
        'ЄС добриво клас',
        'Повільне розчинення в грунті – Не вимивається швидко',
        'Легке застосування з розкидачами на відкритому полі та у фруктовому господарстві',
        'Економічне та надійне джерело поживних речовин для рослин для потреб магнію та сірки',
        'Може бути змішане та використане з комплексними основними добривами та NPK'
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
      packaging: ['25 кг мішок', '500 кг BigBag', '1000 кг BigBag'],
      registrationCertificate: '/Agrosol-Max-17-Tescil.pdf',
      certificateName: 'Agrosol-Max-17-Tescil.pdf'
    },
    {
      id: 'agrosol-max',
      name: 'Agrosol*Max®',
      type: 'Кристалічний сульфат магнію',
      subtitle: 'Кристалічний сульфат магнію',
      description: 'Кристалічний сульфат магнію',
      image: product5,
      specs: ['MgO 16%', 'SO₃ 32%'],
      benefits: [
        'MgO 16% (Оксид магнію)',
        'SO₃ 32% (Триоксид сірки)',
        '100% розчинний у воді',
        'Кристалічна структура – Швидка дія',
        'Може застосовуватися листково та в грунт'
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
      packaging: ['25 кг мішок', '500 кг BigBag', '1000 кг BigBag'],
      registrationCertificate: '/Agrosol-Max-EC-Tescil.pdf',
      certificateName: 'Agrosol-Max-EC-Tescil.pdf'
    },
    {
      id: 'agrosol-max-zinko',
      name: 'Agrosol*Max® Цинкова сіль',
      type: 'Цинкове добриво',
      subtitle: 'Сульфат цинку моногідрат',
      description: 'Сульфат цинку моногідрат - Ідеально для дефіциту цинку',
      image: product6,
      specs: ['Zn 36%'],
      benefits: [
        'Zn 36% (Цинк)',
        'Моногідратна форма',
        'Швидка дія та висока розчинність',
        'Кристалічна структура'
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
      packaging: ['25 кг мішок', '500 кг BigBag'],
      registrationCertificate: '/Agrosol-Max-Zinc-Tescil.pdf',
      certificateName: 'Agrosol-Max-Zinc-Tescil.pdf'
    }
  ]
};

export const getProductsData = (language = 'TR') => {
  return productsDataByLanguage[language] || productsDataByLanguage.TR;
};
