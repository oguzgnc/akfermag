import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('TR');
  const t = translations[language];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          translations={t} 
        />
        <Routes>
          <Route path="/" element={<Home translations={t} language={language} />} />
          <Route path="/product/:productId" element={<ProductDetail translations={t} language={language} />} />
        </Routes>
        <Footer translations={t} />
      </div>
    </Router>
  );
}

export default App;
