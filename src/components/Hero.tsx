import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">MARCEL AL PRODUCTIONS</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Somos una empresa especializada en diseño y desarrollo web dedicada a ofrecer soluciones personalizadas para desarrollo de e-commerce, marketplaces innovadores, optimización SEO, gestión de data entry y soporte multilingüe.
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          En Marcel AL Productions, trabajamos en estrecha colaboración con nuestros clientes para garantizar que cada proyecto refleje su visión y maximice su presencia en el mercado global.
        </p>
        <a href="#contact" className="btn btn-secondary">
          ¡Contáctenos hoy!
        </a>
      </div>
    </section>
  )
}

export default Hero