import { Phone, Mail, MapPin } from 'lucide-react'

interface Props {
  language: 'en' | 'es';
}

const Contact: React.FC<Props> = ({ language }) =>  {
  return (
    <section id="contact" className="py-24 px-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">{
          language === 'es' ? 'Contáctenos' : 'Contact Us'
        }</h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="mb-12 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-6">
              <Phone className="w-6 h-6 mr-4 text-blue-600" />
              <p className="text-gray-700">+1 (225) 470 9251</p>
            </div>
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 mr-4 text-blue-600" />
              <p className="text-gray-700">contact@marcelalproductions.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-blue-600 mt-1" />
              <p className="text-gray-700">355 Kings Hwy, 5C<br />Brooklyn, NY 11224</p>
            </div>
          </div>
          <form className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0" type="text" placeholder="Nombre" />
            </div>
            <div className="mb-6">
              <input className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0" type="email" placeholder="Email" />
            </div>
            <div className="mb-6">
              <textarea className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0" rows={5} placeholder="Mensaje"></textarea>
            </div>
            <button className="btn btn-primary w-full" type="button">
              {
                language === 'es' ? 'Enviar Mensaje' : 'Send Message'
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact