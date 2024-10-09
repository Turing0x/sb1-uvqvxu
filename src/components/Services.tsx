import { ShoppingCart, BarChart, Globe, Database } from 'lucide-react'

const services = [
  {
    icon: <ShoppingCart className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'E-commerce',
    description: 'Desarrollo de plataformas de comercio electrónico personalizadas.'
  },
  {
    icon: <BarChart className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Optimización SEO',
    description: 'Mejora la visibilidad de tu sitio web en los motores de búsqueda.'
  },
  {
    icon: <Globe className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Soporte Multilingüe',
    description: 'Desarrollo de sitios web que soporten múltiples idiomas.'
  },
  {
    icon: <Database className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Gestión de Data Entry',
    description: 'Servicios de entrada de datos y gestión de información.'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 px-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services