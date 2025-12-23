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
    navItems[language].map((item) => (
      <button
        key={item.href}
        onClick={() => scrollToSection(item.href)}
        className={
          variant === 'desktop'
            ? 'text-white/70 hover:text-white transition-colors text-sm tracking-wide'
            : 'w-full px-3 py-3 text-left text-white/80 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-sm font-semibold'
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
          <div className="flex-shrink-0 flex items-center gap-3">
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

          <div className="hidden md:flex items-center space-x-8">
            {renderLinks('desktop')}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
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
          <div className="px-4 py-6 space-y-5">
            <div className="grid grid-cols-2 gap-3">{renderLinks('mobile')}</div>
            <button
              onClick={() => scrollToSection('#appointment')}
              className="w-full px-4 py-3 rounded-2xl bg-brand-red text-white font-semibold hover:bg-white hover:text-brand-navy transition-colors"
            >
              {language === 'fr' ? 'Prendre rendez-vous' : 'Book a consultation'}
            </button>
            <div className="flex gap-3">
              <button
                onClick={toggleTheme}
                className="flex-1 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold flex items-center justify-center gap-2"
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
