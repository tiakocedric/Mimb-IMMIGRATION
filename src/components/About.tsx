import { Award, Globe, Shield, Users } from 'lucide-react';

interface AboutProps {
  language: 'fr' | 'en';
}

export default function About({ language }: AboutProps) {
  const content = {
    fr: {
      title: 'À propos de Mimb Franklin',
      subtitle: 'Un accompagnement corporate pour un parcours réglementé.',
      bio: 'Consultant réglementé en immigration canadienne, je défends les dossiers avec la rigueur d\'un cabinet d\'affaires. Depuis Montréal, j\'accompagne des familles, talents et entreprises dans toutes les juridictions canadiennes.',
      mission: 'Mission',
      missionText:
        'Faciliter des décisions claires, conformes et stratégiques pour chaque client. La confiance s\'installe lorsque la méthode est structurée et transparente.',
      company: 'MIMBIMMIGRATION CONSULTANCY INC.',
      values: 'Piliers',
      valueItems: [
        {
          icon: Shield,
          title: 'Conformité',
          description: 'Processus audité et respect strict des normes canadiennes.',
        },
        {
          icon: Award,
          title: 'Excellence',
          description: 'Analyse approfondie et mémorandums clairs pour chaque dossier.',
        },
        {
          icon: Users,
          title: 'Accompagnement',
          description: 'Relation suivie et mise à jour proactive des clients.',
        },
        {
          icon: Globe,
          title: 'Bilinguisme',
          description: 'Service complet en français et en anglais.',
        },
      ],
    },
    en: {
      title: 'About Mimb Franklin',
      subtitle: 'Corporate-grade support for regulated immigration.',
      bio: 'As a regulated Canadian immigration consultant, I handle each mandate with the discipline of a corporate advisory firm. From Montreal, I guide families, talent and businesses through every Canadian jurisdiction.',
      mission: 'Mission',
      missionText:
        'Deliver clear, compliant and strategic decisions for every client. Trust rises when the method is structured and transparent.',
      company: 'MIMBIMMIGRATION CONSULTANCY INC.',
      values: 'Pillars',
      valueItems: [
        {
          icon: Shield,
          title: 'Compliance',
          description: 'Audited processes and strict respect of Canadian standards.',
        },
        {
          icon: Award,
          title: 'Excellence',
          description: 'Deep analysis and clear memorandums for every mandate.',
        },
        {
          icon: Users,
          title: 'Support',
          description: 'Ongoing relationship and proactive client updates.',
        },
        {
          icon: Globe,
          title: 'Bilingual',
          description: 'Full service offered in French and English.',
        },
      ],
    },
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-brand-navy/90"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-red/30 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-light/70 mb-3">
                {language === 'fr' ? 'Expertise' : 'Expertise'}
              </p>
              <h2 className="text-4xl font-semibold text-white mb-3">
                {content[language].title}
              </h2>
              <p className="text-xl text-brand-light/80">{content[language].subtitle}</p>
            </div>

            <p className="text-brand-light/80 leading-relaxed">{content[language].bio}</p>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-light/70 mb-2">
                  {content[language].mission}
                </p>
                <p className="text-lg text-white">{content[language].missionText}</p>
              </div>
              <div className="rounded-3xl border border-brand-red/30 bg-brand-red/10 p-8">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-light/70 mb-2">
                  {language === 'fr' ? 'Société' : 'Company'}
                </p>
                <p className="text-2xl font-semibold text-white">
                  {content[language].company}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-light/70 mb-3">
                {content[language].values}
              </p>
            </div>
            {content[language].valueItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-brand-light/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
