import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import CricLogo from '../assets/cric-cisr-logo.svg';

interface NavigationProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    fr: [
      { label: 'Accueil', href: '#home' },
      { label: 'À propos', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Témoignages', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    en: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const renderLinks = (variant: 'desktop' | 'mobile') =>
    navItems[language].map((item) => (
      <button
        key={item.href}
        onClick={() => scrollToSection(item.href)}
        className={
          variant === 'desktop'
            ? 'text-white/70 hover:text-white transition-colors text-sm tracking-wide'
            : 'w-full text-left text-white/80 hover:text-white py-2'
        }
      >
        {item.label}
      </button>
    ));

  const LanguageToggle = ({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) => (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className={`px-4 py-2 bg-brand-red text-white rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-colors ${
        variant === 'mobile' ? 'w-full' : ''
      }`}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex flex-col gap-1">
            <span className="text-xs sm:text-sm font-bold tracking-[0.5em] text-white uppercase">
              MIMBIMMIGRATION CONSULTANCY INC.
            </span>
            <div className="flex items-center gap-3">
              <img
                src={CricLogo}
                alt="CRIC-CISR"
                className="h-10 w-auto drop-shadow-lg"
                loading="lazy"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.6em] text-white">
                  CRIC-CISR
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                  {language === 'fr'
                    ? 'Consultant réglementé'
                    : 'Regulated consultant'}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {renderLinks('desktop')}
          </div>

          <div className="hidden md:flex">
            <LanguageToggle variant="desktop" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-red transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-3">{renderLinks('mobile')}</div>
            <LanguageToggle variant="mobile" />
          </div>
        </div>
      )}
    </nav>
  );
}
