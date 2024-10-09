import { Package, Boxes, Languages, FileText } from 'lucide-react'

const categories = [
  {
    icon: <Package className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Importación y Exportación',
    features: [
      'Desarrollo de funcionalidades específicas para la gestión de comercio internacional.',
      'Herramientas para cálculo de tarifas de envío, aduanas y regulaciones.'
    ]
  },
  {
    icon: <Boxes className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Gestión de Inventarios',
    features: [
      'Integración de sistemas para la gestión de inventarios en tiempo real.',
      'Alertas de stock bajo y gestión de proveedores.'
    ]
  },
  {
    icon: <Languages className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Plataformas Multilingües',
    features: [
      'Desarrollo de sitios web que soporten múltiples idiomas.',
      'Localización de contenido para adaptarse a diferentes mercados.'
    ]
  },
  {
    icon: <FileText className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Servicios de Entrada de Datos',
    features: [
      'Coordinación y gestión de grupos de trabajo para servicios de entrada de datos: transcripciones, traducciones, investigación, typing, etc.',
      'Integración de procesos de data entry con el sistema de gestión de inventarios y marketplace para mejorar la eficiencia operativa.'
    ]
  }
]

const Categories = () => {
  return (
    <section id="categories" className="py-24 px-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Categorías Especializadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-600">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories