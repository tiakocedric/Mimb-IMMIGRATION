import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import CricLogo from '../assets/cric-cisr-logo.svg';
import { useTheme } from '../hooks/useTheme';

interface NavigationProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    navItems[language].map((item) => {
      const isActive = typeof window !== 'undefined' && window.location.hash === item.href;
      return (
        <button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className={
            variant === 'desktop'
              ? `px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-brand-red font-semibold bg-brand-red/10' 
                    : 'text-txt-primary hover:text-brand-red hover:bg-hover-ui/50'
                }`
              : `w-full px-5 py-3 text-left rounded-xl transition-colors ${
                  isActive
                    ? 'text-brand-red font-semibold bg-brand-red/10 border-l-2 border-brand-red'
                    : 'text-txt-primary hover:bg-hover-ui/50 border-l-2 border-transparent'
                }`
          }
          aria-current={isActive ? 'page' : undefined}
        >
          {item.label}
        </button>
      );
    });

  const LanguageToggle = ({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) => (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className={`px-4 py-2 bg-brand-red text-white rounded-full font-semibold hover:bg-brand-red/90 hover:shadow-md transition-all ${
        variant === 'mobile' ? 'w-full' : ''
      }`}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-ui/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src={CricLogo}
              alt="CRIC-CISR"
              className="h-10 w-auto drop-shadow-lg"
              loading="lazy"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-[0.4em] text-txt-primary">
                CRIC-CISR
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-txt-secondary font-medium">
                {language === 'fr'
                  ? 'Consultant réglementé'
                  : 'Regulated consultant'}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {renderLinks('desktop')}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-ui hover:border-hover-ui bg-surface hover:bg-hover-ui transition-colors text-txt-primary hover:text-brand-red"
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <LanguageToggle variant="desktop" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-hover-ui text-txt-primary hover:text-brand-red transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-t border-ui/50 shadow-lg">
          <div className="px-4 py-6 space-y-5">
            <div className="grid grid-cols-2 gap-3">{renderLinks('mobile')}</div>
            <button
              onClick={() => scrollToSection('#appointment')}
              className="w-full px-4 py-3.5 rounded-xl bg-brand-red text-white font-semibold hover:bg-brand-red/90 hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              {language === 'fr' ? 'Prendre rendez-vous' : 'Book a consultation'}
            </button>
            <div className="flex gap-3">
              <button
                onClick={toggleTheme}
                className="flex-1 px-4 py-3 rounded-xl bg-surface border border-ui hover:border-hover-ui hover:bg-hover-ui transition-colors text-txt-primary font-medium flex items-center justify-center gap-2"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Clair' : 'Sombre'}
              </button>
              <LanguageToggle variant="mobile" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
