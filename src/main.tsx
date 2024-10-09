// src/main.tsx

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Globe } from 'lucide-react';

function AppWrapper() {

  const [language, setLanguage] = useState<'en' | 'es'>('en');

  function LanguageToggle({ language, setLanguage }: { language: string; setLanguage: (lang: 'es' | 'en') => void }) {
    const toggleLanguage = () => {
      setLanguage(language === 'es' ? 'en' : 'es');
    };
  
    return (
      <button onClick={toggleLanguage}>
        {language === 'es' ? 'English' : 'Español'}
      </button>
    );
  }

  return (
    <>
      <StrictMode>
      <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="w-8 h-8 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Marcel AL Productions</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">{
              language === 'es' ? 'Servicios' : 'Services'  
            }</a></li>
            <li><a href="#categories" className="text-gray-600 hover:text-blue-600 transition duration-300">{
              language === 'es' ? 'Categorías' : 'Categories'  
            }</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">{
              language === 'es' ? 'Contacto' : 'Contact'  
            }</a></li>
          </ul>
        </nav>

        <LanguageToggle language={language} setLanguage={setLanguage} />

      </div>
    </header>
        <App language={language} />
      </StrictMode>
    </>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<AppWrapper />);