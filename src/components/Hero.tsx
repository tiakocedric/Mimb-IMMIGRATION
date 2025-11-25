import { Phone, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  language: 'fr' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    fr: {
      title: 'Votre avenir, notre mission',
      subtitle: 'Consultant réglementé en immigration canadienne',
      description:
        'Avec MIMBIMMIGRATION CONSULTANCY INC., réalisez votre rêve canadien. Je vous accompagne dans toutes vos démarches d\'immigration avec expertise et professionnalisme.',
      ctaAppointment: 'Prendre rendez-vous',
      ctaContact: 'Nous contacter',
    },
    en: {
      title: 'Your future, our mission',
      subtitle: 'Regulated Canadian Immigration Consultant',
      description:
        'With MIMBIMMIGRATION CONSULTANCY INC., make your Canadian dream come true. I support you in all your immigration procedures with expertise and professionalism.',
      ctaAppointment: 'Book an appointment',
      ctaContact: 'Contact us',
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {content[language].title}
            </h1>
            <p className="text-xl text-blue-600 font-semibold">
              {content[language].subtitle}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content[language].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#appointment')}
                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                {content[language].ctaAppointment}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                {content[language].ctaContact}
              </button>
            </div>

            <div className="pt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-blue-600" />
                <a href="tel:+15144627623" className="hover:text-blue-600 transition-colors">
                  (514) 462-7623
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-blue-600" />
                <a
                  href="mailto:fmimb@yahoo.fr"
                  className="hover:text-blue-600 transition-colors"
                >
                  fmimb@yahoo.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span>Montréal, Québec, Canada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-5xl font-bold text-blue-600">MF</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">Mimb Franklin</div>
                  <div className="text-blue-600 font-semibold">
                    {language === 'fr'
                      ? 'Consultant Réglementé'
                      : 'Regulated Consultant'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
