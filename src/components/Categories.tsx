import { Package, Boxes, Languages, FileText } from 'lucide-react'

interface Props {
  language: 'en' | 'es';
}

const categories = [
  {
    icon: <Package className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Importación y Exportación | Import and Export',
    features: [
      'Desarrollo de funcionalidades específicas para la gestión de comercio internacional. | Development of specific functionalities for international trade management.',
      'Herramientas para cálculo de tarifas de envío, aduanas y regulaciones. | Tools for calculating shipping rates, customs and regulations.'
    ]
  },
  {
    icon: <Boxes className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Gestión de Inventarios | Inventory Management',
    features: [
      'Integración de sistemas para la gestión de inventarios en tiempo real. | Systems integration for real-time inventory management.',
      'Alertas de stock bajo y gestión de proveedores. | Low stock alerts and supplier management.'
    ]
  },
  {
    icon: <Languages className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Plataformas Multilingües | Multilingual Platforms',
    features: [
      'Desarrollo de sitios web que soporten múltiples idiomas. | Development of websites that support multiple languages.',
      'Localización de contenido para adaptarse a diferentes mercados. | Localizing content to suit different markets.'
    ]
  },
  {
    icon: <FileText className="w-12 h-12 mb-4 text-blue-600" />,
    title: 'Servicios de Entrada de Datos | Data Entry Services',
    features: [
      'Coordinación y gestión de grupos de trabajo para servicios de entrada de datos: transcripciones, traducciones, investigación, typing, etc. | Coordination and management of work groups for data entry services: transcriptions, translations, research, typing, etc.',
      'Integración de procesos de data entry con el sistema de gestión de inventarios y marketplace para mejorar la eficiencia operativa. | Integration of data entry processes with the inventory management system and marketplace to improve operational efficiency.'
    ]
  }
]

const Categories: React.FC<Props> = ({ language }) => {
  return (
    <section id="categories" className="py-16 px-6 sm:px-8 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-800">
          {language === 'es' ? 'Categorías Especializadas' : 'Specialized Categories'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl sm:text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'es' ? category.title.split('|')[0] : category.title.split('|')[1]}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-600">•</span>
                    <span className="text-gray-600">
                      {language === 'es' ? feature.split('|')[0] : feature.split('|')[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Categories