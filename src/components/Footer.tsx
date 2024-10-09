import React from 'react'
import { Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Globe className="w-8 h-8 mr-2 text-blue-400" />
            <h2 className="text-2xl font-bold">Marcel AL Productions</h2>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-blue-400 transition duration-300">Servicios</a></li>
              <li><a href="#categories" className="hover:text-blue-400 transition duration-300">Categorías</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contacto</a></li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} Marcel AL Productions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer