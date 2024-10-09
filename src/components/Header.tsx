import React from 'react'
import { Globe } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="w-8 h-8 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Marcel AL Productions</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Servicios</a></li>
            <li><a href="#categories" className="text-gray-600 hover:text-blue-600 transition duration-300">Categorías</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header