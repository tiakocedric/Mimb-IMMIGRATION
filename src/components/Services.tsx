import { Briefcase, GraduationCap, Heart, Home, Plane } from 'lucide-react';

interface ServicesProps {
  language: 'fr' | 'en';
}

export default function Services({ language }: ServicesProps) {
  const content = {
    fr: {
      title: 'Solutions corporate pour chaque programme',
      subtitle: 'Stratège dédié, contrôle de conformité et suivi proactif.',
      cta: 'Planifier une consultation',
      guarantees: [
        'Analyse complète du dossier',
        'Documents préparés et vérifiés',
        'Relation bilingue FR/EN',
      ],
      services: [
        {
          icon: Home,
          title: 'Résidence permanente',
          description:
            'Planification Entrée Express, travailleurs qualifiés, parrainage familial et programmes provinciaux.',
        },
        {
          icon: Briefcase,
          title: 'Permis de travail',
          description:
            'EIMT, mobilité francophone, transferts intra-entreprises et permis ouverts.',
        },
        {
          icon: GraduationCap,
          title: 'Permis d\'études',
          description:
            'Stratégie CAQ, permis d\'études, permis post-diplôme et changements de statut.',
        },
        {
          icon: Plane,
          title: 'Visas visiteurs',
          description:
            'Visas visiteurs, super visas, prolongations de séjour et restaurations de statut.',
        },
        {
          icon: Heart,
          title: 'Protection et asile',
          description: 'Demandes d\'asile, statuts de réfugiés et mesures de protection.',
        },
      ],
    },
    en: {
      title: 'Corporate-grade solutions for every stream',
      subtitle: 'Dedicated strategist, compliance control and proactive follow-up.',
      cta: 'Book a consultation',
      guarantees: [
        'Full case assessment',
        'Documents prepared & checked',
        'Bilingual relationship FR/EN',
      ],
      services: [
        {
          icon: Home,
          title: 'Permanent residence',
          description:
            'Express Entry, skilled workers, family sponsorship and provincial programs.',
        },
        {
          icon: Briefcase,
          title: 'Work permits',
          description:
            'LMIAs, francophone mobility, intra-company transfers and open permits.',
        },
        {
          icon: GraduationCap,
          title: 'Study permits',
          description:
            'CAQ strategy, study permits, post-graduation work permits and status changes.',
        },
        {
          icon: Plane,
          title: 'Visitor visas',
          description:
            'Visitor visas, super visas, stay extensions and status restorations.',
        },
        {
          icon: Heart,
          title: 'Protection & asylum',
          description: 'Asylum claims, refugee status and protective measures.',
        },
      ],
    },
  };

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-surface/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-main/95 to-brand-red/20 opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-txt-secondary mb-3">
                {language === 'fr' ? 'Services' : 'Services'}
              </p>
              <h2 className="text-4xl font-semibold text-txt-primary mb-4">
                {content[language].title}
              </h2>
              <p className="text-xl text-txt-secondary">{content[language].subtitle}</p>
            </div>

            <div className="space-y-4">
              {content[language].guarantees.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-txt-primary text-sm uppercase tracking-[0.3em]"
                >
                  <span className="w-3 h-3 rounded-full bg-brand-red" />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToAppointment}
              className="px-10 py-4 rounded-full bg-brand-red text-white font-semibold hover:translate-y-[-2px] hover:shadow-lg transition-all"
            >
              {content[language].cta}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {content[language].services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-ui bg-surface p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all hover:border-hover-ui"
              >
                <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center">
                  <service.icon className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-semibold text-txt-primary">{service.title}</h3>
                <p className="text-txt-secondary">{service.description}</p>
                <div className="mt-auto pt-4 text-xs text-txt-secondary uppercase tracking-[0.4em] font-medium">
                  {language === 'fr' ? 'Réglementé' : 'Regulated'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
