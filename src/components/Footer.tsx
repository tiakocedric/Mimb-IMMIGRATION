import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

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
        { label: 'A? propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'TAcmoignages', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      rights: 'Tous droits reserves.',
      designedBy: 'Site conAu par',
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
    <footer className="bg-gradient-to-r from-brand-navy via-brand-navy to-brand-red/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-[0.4em]">
              MIMB<span className="text-brand-red">IMMIGRATION</span>
            </h3>
            <p className="text-white/70">
              {language === 'fr'
                ? 'Cabinet corporate, consultant reglemente en immigration canadienne.'
                : 'Corporate advisory, regulated Canadian immigration consultant.'}
            </p>
            <p className="text-white/60 uppercase tracking-[0.4em] text-xs">
              {language === 'fr'
                ? 'Confiance . Professionnalisme . Reglementation'
                : 'Trust . Professionalism . Regulation'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-[0.4em] text-white/80">
              {content[language].contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <span className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                  <Phone size={18} />
                </span>
                <a href="tel:+15144627623" className="hover:text-white transition-colors">
                  (514) 462-7623
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                  <Mail size={18} />
                </span>
                <a href="mailto:fmimb@yahoo.fr" className="hover:text-white transition-colors">
                  fmimb@yahoo.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                  <MapPin size={18} />
                </span>
                <span>Montreal, Quebec, Canada</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-[0.4em] text-white/80">
              {content[language].quickLinks}
            </h3>
            <ul className="space-y-2">
              {content[language].links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p className="text-center md:text-left">
              Ac {new Date().getFullYear()} MIMBIMMIGRATION CONSULTANCY INC.{' '}
              {content[language].rights}
            </p>
            <a
              href="https://smart-solutions-it.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              {content[language].designedBy}{' '}
              <span className="font-semibold text-white">Smart Solution IT</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
