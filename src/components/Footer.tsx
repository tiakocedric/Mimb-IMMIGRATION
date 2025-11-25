import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      contact: 'Contact',
      quickLinks: 'Liens rapides',
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'À propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Témoignages', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      rights: 'Tous droits réservés.',
      designedBy: 'Site conçu par',
    },
    en: {
      contact: 'Contact',
      quickLinks: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      rights: 'All rights reserved.',
      designedBy: 'Site designed by',
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MIMBIMMIGRATION</h3>
            <p className="text-gray-400 mb-4">
              {language === 'fr'
                ? 'Consultant réglementé en immigration canadienne'
                : 'Regulated Canadian Immigration Consultant'}
            </p>
            <p className="text-gray-400">
              {language === 'fr' ? 'Votre avenir, notre mission' : 'Your future, our mission'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{content[language].contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+15144627623"
                  className="hover:text-white transition-colors"
                >
                  (514) 462-7623
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:fmimb@yahoo.fr"
                  className="hover:text-white transition-colors"
                >
                  fmimb@yahoo.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                <span>Montréal, Québec, Canada</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              {content[language].links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MIMBIMMIGRATION CONSULTANCY INC.{' '}
              {content[language].rights}
            </p>
            <a
              href="https://smart-solutions-it.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              {content[language].designedBy} <span className="font-semibold">Smart Solution IT</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
