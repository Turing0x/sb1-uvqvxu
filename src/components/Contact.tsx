import { Phone, Mail, MapPin } from 'lucide-react';

interface Props {
  language: 'en' | 'es';
}

const Contact: React.FC<Props> = ({ language }) =>  {
  return (
    <section id="contact" className="py-16 px-6 sm:px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-800">
          {language === 'es' ? 'Contáctenos' : 'Contact Us'}
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-start md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/3 w-full">
            <div className="flex items-center mb-6">
              <Phone className="w-6 h-6 mr-4 text-blue-600" />
              <p className="text-gray-700">+1 (225) 470 9251</p>
            </div>
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 mr-4 text-blue-600" />
              <p className="text-gray-700">erickcoll@marcelalproductions.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-blue-600 mt-1" />
              <p className="text-gray-700">355 Kings Hwy, 5C<br />Brooklyn, NY 11224</p>
            </div>
          </div>
          <form className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                type="text"
                placeholder={language === 'es' ? 'Nombre' : 'Name'}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                type="email"
                placeholder={language === 'es' ? 'Correo electrónico' : 'Email'}
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                rows={5}
                placeholder={language === 'es' ? 'Mensaje' : 'Message'}
              ></textarea>
            </div>
            <button className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700" type="button">
              {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
