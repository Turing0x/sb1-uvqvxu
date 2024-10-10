import React from 'react'
import { Globe } from 'lucide-react'

interface Props {
  language: 'en' | 'es';
}

const Footer: React.FC<Props> = ({ language }) =>  {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Globe className="w-8 h-8 mr-2 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold">Marcel AL Productions</h2>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-col sm:flex-row sm:space-x-6 text-center space-y-4 sm:space-y-0">
              <li>
                <a href="#services" className="hover:text-blue-400 transition duration-300">
                  {language === 'es' ? 'Servicios' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-blue-400 transition duration-300">
                  {language === 'es' ? 'Categorías' : 'Categories'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition duration-300">
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {language === 'es' ? 'Marcel AL Productions. Todos los derechos reservados.' : 'Marcel AL Productions. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer