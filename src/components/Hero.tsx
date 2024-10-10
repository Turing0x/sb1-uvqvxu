interface Props {
  language: 'en' | 'es';
}

const Hero: React.FC<Props> = ({ language }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">MARCEL AL PRODUCTIONS</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto">
          {language === 'es' 
            ? 'Somos una empresa especializada en diseño gráfico y producción audiovisual, dedicada a personalizar las soluciones de nuestros clientes para mejorar el alcance de sus plataformas de comercio electrónico y marketplaces. Trabajamos en la creación de marcas, optimización SEO y gestión de entrada de datos para el soporte multilingüe y las transcripciones de videos.' 
            : "We are a company specialized in graphic design and audiovisual production, dedicated to customizing our clients' solutions to enhance the reach of their e-commerce platforms and marketplaces. We work on branding, SEO optimization, and data entry management for multilingual support and video transcriptions."
          }
        </p>
        <p className="text-md sm:text-lg mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
          {language === 'es' 
            ? 'En Marcel AL Productions, trabajamos en estrecha colaboración con nuestros clientes para asegurarnos de que cada proyecto refleje su visión y maximice su presencia en el mercado global.' 
            : 'At Marcel AL Productions, we work closely with our clients to ensure that each project reflects their vision and maximizes their presence in the global marketplace.'
          }
        </p>
        <a href="#contact" className="btn btn-secondary px-6 py-3 sm:px-8 sm:py-4">
          {language === 'es' ? '¡Contáctenos hoy!' : 'Contact Us Today!'}
        </a>
      </div>
    </section>
  );
};


export default Hero