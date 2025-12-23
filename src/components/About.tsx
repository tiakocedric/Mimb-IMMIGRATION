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
      className="py-24 relative overflow-hidden bg-surface/95"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-main via-main to-brand-red/30 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-txt-secondary mb-3">
                {language === 'fr' ? 'Expertise' : 'Expertise'}
              </p>
              <h2 className="text-4xl font-semibold text-txt-primary mb-3">
                {content[language].title}
              </h2>
              <p className="text-xl text-txt-secondary">{content[language].subtitle}</p>
            </div>

            <p className="text-txt-secondary leading-relaxed">{content[language].bio}</p>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-ui bg-surface p-8 shadow-lg">
                <p className="text-sm uppercase tracking-[0.4em] text-txt-secondary mb-2">
                  {content[language].mission}
                </p>
                <p className="text-txt-primary text-lg leading-relaxed">
                  {content[language].missionText}
                </p>
              </div>

              <div className="rounded-3xl border border-ui bg-surface p-6 shadow-sm">
                <p className="text-sm text-txt-secondary mb-1">
                  {content[language].company}
                </p>
                <p className="text-txt-secondary/70 text-sm">
                  {language === 'fr' ? 'Inscrit au registre du CICC' : 'Registered with CICC'}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold text-txt-primary mb-8">
                {content[language].values}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {content[language].valueItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-ui bg-surface p-6 hover:bg-hover-ui transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-txt-primary">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-txt-secondary text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
