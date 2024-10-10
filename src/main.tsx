// src/main.tsx

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Globe } from 'lucide-react';

function AppWrapper() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function LanguageToggle({ language, setLanguage }: { language: 'en' | 'es'; setLanguage: (lang: 'es' | 'en') => void }) {
    const toggleLanguage = () => {
      setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
      <button onClick={toggleLanguage} className="text-gray-600 hover:text-blue-600 transition duration-300">
        {language === 'es' ? 'English' : 'Español'}
      </button>
    );
  }

  return (
    <StrictMode>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="w-8 h-8 mr-2 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Marcel AL Productions</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {language === 'es' ? 'Servicios' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {language === 'es' ? 'Categorías' : 'Categories'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden mr-4">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-4 py-4 px-4 bg-white shadow-md">
            <li>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>
                {language === 'es' ? 'Servicios' : 'Services'}
              </a>
            </li>
            <li>
              <a href="#categories" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>
                {language === 'es' ? 'Categorías' : 'Categories'}
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </li>
          </ul>
        </div>
      </header>

      <App language={language} />
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<AppWrapper />);
