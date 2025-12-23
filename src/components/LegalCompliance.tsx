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
    <section className="py-24 bg-surface/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-main via-main/95 to-brand-red/20 opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-surface/80 backdrop-blur-sm p-8 rounded-2xl border border-ui">
            <p className="text-lg text-txt-secondary leading-relaxed">
              {content[language].description}
            </p>

            <div className="mt-12 space-y-8">
              {content[language].guarantees.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-hover-ui transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-red/10 text-brand-red">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-txt-primary">{item.title}</h3>
                    <p className="mt-1 text-txt-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-txt-primary sm:text-5xl">
              {content[language].title}
            </h2>
            <p className="mt-4 text-xl text-txt-secondary max-w-3xl mx-auto">
              {content[language].subtitle}
            </p>
            <p className="text-brand-light/70 max-w-3xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-surface border border-ui rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-txt-primary mb-6">
              {content[language].verifyTitle}
            </h3>
            <p className="text-txt-secondary mb-6">
              {content[language].verifyDescription}
            </p>
            <a
              href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red hover:bg-brand-red/90 shadow-sm transition-colors"
            >
              {content[language].verifyButton}
            </a>

            <div className="mt-10 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r dark:bg-yellow-900/30">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                    {content[language].warningTitle}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                    <p>{content[language].warningText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
