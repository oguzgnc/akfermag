import React from 'react';

const ProductFeatures = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Ana Ürün Özellikleri Kartı */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-akfermag-blue to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Magnezyum Sülfat Heptahidrat
                </h2>
                <p className="text-blue-100 text-lg">
                  MgSO₄.7H₂O - Kimyasal Formül
                </p>
              </div>

              {/* Teknik Değerler Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* MgO */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                  <div className="text-5xl font-bold text-white mb-2">15%</div>
                  <div className="text-blue-100 font-semibold text-lg">MgO</div>
                  <div className="text-blue-200 text-sm mt-2">Magnezyum Oksit</div>
                </div>

                {/* SO3 */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                  <div className="text-5xl font-bold text-white mb-2">28%</div>
                  <div className="text-blue-100 font-semibold text-lg">SO₃</div>
                  <div className="text-blue-200 text-sm mt-2">Sülfür Trioksit</div>
                </div>

                {/* Suda Çözünür */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-blue-100 font-semibold text-lg">Suda Çözünür</div>
                  <div className="text-blue-200 text-sm mt-2">Yüksek Çözünürlük</div>
                </div>
              </div>

              {/* Ek Bilgiler */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-akfermag-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">pH Dengesi: 6.0 - 8.0</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-akfermag-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Granül Boyutu: 2-4 mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
