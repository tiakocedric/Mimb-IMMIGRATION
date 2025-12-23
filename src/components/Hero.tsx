import { Mail, MapPin, Phone } from 'lucide-react';
import CricLogo from '../assets/cric-cisr-logo.svg';
import AdvisorPhoto from '../assets/Photo de Mimb Franklin.jpg';

interface HeroProps {
  language: 'fr' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    fr: {
      badge: 'MIMBIMMIGRATION CONSULTANCY INC.',
      title: 'Immigration réglementée, confiance garantie.',
      subtitle: 'Consultant réglementé du Canada',
      description:
        'Accompagnement structuré, sérieux et conforme aux normes canadiennes pour transformer vos projets en réalité. Nous défendons vos intérêts avec la rigueur d\'un cabinet corporate.',
      highlights: ['Confiance', 'Professionnalisme', 'Immigration réglementée'],
      ctaAppointment: 'Planifier une consultation',
      ctaContact: 'Parler à un expert',
      advisor: 'Mimb Franklin',
      advisorRole: 'Consultant CRIC',
      stats: [
        { value: '98%', label: 'Clients satisfaits' },
        { value: '15+', label: 'Programmes d\'immigration' },
        { value: '2 langues', label: 'Français & Anglais' },
      ],
    },
    en: {
      badge: 'MIMBIMMIGRATION CONSULTANCY INC.',
      title: 'Regulated immigration, trust assured.',
      subtitle: 'Regulated Canadian Consultant',
      description:
        'Structured, corporate-grade guidance that keeps every file compliant and every family confident. We secure your future in Canada with rigour and clarity.',
      highlights: ['Trust', 'Professionalism', 'Regulated expertise'],
      ctaAppointment: 'Schedule a consultation',
      ctaContact: 'Speak with an expert',
      advisor: 'Mimb Franklin',
      advisorRole: 'CISR Consultant',
      stats: [
        { value: '98%', label: 'Satisfied clients' },
        { value: '15+', label: 'Immigration streams' },
        { value: '2 languages', label: 'French & English' },
      ],
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-surface to-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-white/15 text-txt-primary uppercase font-bold tracking-[0.4em] text-sm sm:text-base">
                {content[language].badge}
              </span>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-red border-2 border-white/30 shadow-lg backdrop-blur hover:bg-brand-red/90 transition-colors">
                <img
                  src={CricLogo}
                  alt="CICC-ICCRC"
                  className="h-8 w-auto"
                  loading="lazy"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold tracking-[0.3em] text-white">
                    CICC-ICCRC
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/90">
                    {language === 'fr' ? 'Membre réglementé' : 'Regulated member'}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-txt-primary">
                {content[language].title}
              </h1>

            </div>
            <p className="text-lg text-txt-secondary leading-relaxed max-w-2xl">
              {content[language].description}
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {content[language].highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-ui bg-surface px-4 py-5 text-center text-sm font-semibold tracking-wide text-txt-primary shadow-sm hover:shadow-md transition-all hover:bg-hover-ui"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#appointment')}
                className="px-8 py-4 bg-brand-red text-white rounded-full font-semibold shadow-lg shadow-brand-red/30 hover:bg-brand-red/90 hover:translate-y-[-2px] transition-all"
              >
                {content[language].ctaAppointment}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 border border-ui text-txt-primary rounded-full font-semibold hover:bg-hover-ui transition-colors"
              >
                {content[language].ctaContact}
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-txt-secondary">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-md">
                  <Phone size={20} className="text-white" />
                </span>
                <a href="tel:+15144627623" className="hover:text-txt-primary transition-colors">
                  (514) 462-7623
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-md">
                  <Mail size={20} className="text-white" />
                </span>
                <a
                  href="mailto:fmimb@yahoo.fr"
                  className="hover:text-txt-primary transition-colors"
                >
                  fmimb@yahoo.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-md">
                  <MapPin size={20} className="text-white" />
                </span>
                <span>Montréal, Québec, Canada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-surface border border-ui rounded-[32px] p-10 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-full border-2 border-brand-red overflow-hidden shadow-xl">
                  <img
                    src={AdvisorPhoto}
                    alt="Mimb Franklin"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-txt-primary">
                    {content[language].advisor}
                  </p>
                  <p className="text-brand-red tracking-[0.4em] text-xs uppercase">
                    {content[language].advisorRole}
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {content[language].stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl bg-surface border border-ui px-6 py-4 hover:shadow-md transition-all hover:bg-hover-ui"
                  >
                    <p className="text-3xl font-semibold text-brand-red">{stat.value}</p>
                    <p className="text-sm text-txt-secondary text-right">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-red/20 blur-2xl opacity-70" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-light/20 blur-3xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}
