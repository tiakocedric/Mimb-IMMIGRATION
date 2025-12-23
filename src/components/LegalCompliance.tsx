import { CheckCircle, FileCheck, Scale, Shield } from 'lucide-react';
import CricLogo from '../assets/cric-cisr-logo.svg';

interface LegalComplianceProps {
  language: 'fr' | 'en';
}

export default function LegalCompliance({ language }: LegalComplianceProps) {
  const content = {
    fr: {
      title: 'Conformité légale et réglementation',
      subtitle: 'Autorisé par le Collège des consultants en immigration et en citoyenneté',
      description:
        'En tant que consultant réglementé membre du CICC (Collège des consultants en immigration et en citoyenneté du Canada), je suis légalement autorisé à représenter mes clients devant Immigration, Réfugiés et Citoyenneté Canada (IRCC).',
      guarantees: [
        {
          icon: Shield,
          title: 'Protection garantie',
          description:
            'Tous les consultants réglementés sont couverts par une assurance responsabilité professionnelle pour protéger vos intérêts.',
        },
        {
          icon: Scale,
          title: 'Code déontologique',
          description:
            'Soumis à un code de conduite strict et à des normes professionnelles élevées établies par le CICC.',
        },
        {
          icon: FileCheck,
          title: 'Formation continue',
          description:
            'Obligation de suivre une formation continue pour rester à jour avec les lois et politiques d\'immigration.',
        },
        {
          icon: CheckCircle,
          title: 'Recours disponible',
          description:
            'Le CICC offre un mécanisme de plaintes pour les clients insatisfaits des services reçus.',
        },
      ],
      verifyTitle: 'Vérifiez mon statut',
      verifyDescription:
        'Vous pouvez vérifier mon statut de membre en règle sur le registre public du CICC.',
      verifyButton: 'Consulter le registre CICC',
      warningTitle: 'Important',
      warningText:
        'Au Canada, seuls les consultants réglementés en immigration (CRCIC), les avocats et les notaires du Québec sont autorisés à facturer des honoraires pour des conseils ou représentations en matière d\'immigration.',
    },
    en: {
      title: 'Legal compliance and regulation',
      subtitle: 'Authorized by the College of Immigration and Citizenship Consultants',
      description:
        'As a regulated consultant and member of the CICC (College of Immigration and Citizenship Consultants of Canada), I am legally authorized to represent my clients before Immigration, Refugees and Citizenship Canada (IRCC).',
      guarantees: [
        {
          icon: Shield,
          title: 'Guaranteed protection',
          description:
            'All regulated consultants are covered by professional liability insurance to protect your interests.',
        },
        {
          icon: Scale,
          title: 'Code of ethics',
          description:
            'Subject to a strict code of conduct and high professional standards established by the CICC.',
        },
        {
          icon: FileCheck,
          title: 'Continuing education',
          description:
            'Required to pursue continuing education to stay current with immigration laws and policies.',
        },
        {
          icon: CheckCircle,
          title: 'Recourse available',
          description:
            'The CICC offers a complaints mechanism for clients dissatisfied with services received.',
        },
      ],
      verifyTitle: 'Verify my status',
      verifyDescription:
        'You can verify my status as a member in good standing on the CICC public register.',
      verifyButton: 'View CICC register',
      warningTitle: 'Important',
      warningText:
        'In Canada, only Regulated Canadian Immigration Consultants (RCICs), lawyers and Quebec notaries are authorized to charge fees for immigration advice or representation.',
    },
  };

  return (
    <section className="py-24 bg-brand-navy/85 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-red/20 opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 border-2 border-brand-red/50 backdrop-blur shadow-xl">
              <img
                src={CricLogo}
                alt="CICC-ICCRC"
                className="h-12 w-auto"
                loading="lazy"
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-bold tracking-[0.3em] text-white">
                  CICC-ICCRC
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/80">
                  {language === 'fr' ? 'Consultant réglementé' : 'Regulated consultant'}
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-semibold text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-brand-light/80 mb-4 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
          <p className="text-brand-light/70 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content[language].guarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center mb-4">
                <item.icon className="text-white" size={26} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-brand-light/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {content[language].verifyTitle}
            </h3>
            <p className="text-brand-light/80 mb-6 leading-relaxed">
              {content[language].verifyDescription}
            </p>
            <a
              href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white font-semibold hover:translate-y-[-2px] transition-transform shadow-lg shadow-brand-red/30"
            >
              {content[language].verifyButton}
            </a>
          </div>

          <div className="rounded-3xl border border-brand-red/40 bg-brand-red/10 p-8 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {content[language].warningTitle}
                </h3>
                <p className="text-brand-light/90 leading-relaxed">
                  {content[language].warningText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
