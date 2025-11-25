import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  language: 'fr' | 'en';
}

export default function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    fr: {
      title: 'Questions Fréquentes',
      subtitle: 'Réponses aux questions les plus courantes sur l\'immigration',
      faqs: [
        {
          question: 'Combien de temps prend une demande de résidence permanente?',
          answer:
            'Le délai varie selon le programme choisi. Pour l\'Entrée Express, le traitement prend généralement 6 mois. Pour d\'autres programmes, cela peut prendre de 12 à 24 mois. Je vous guide pour choisir le programme le plus rapide adapté à votre profil.',
        },
        {
          question: 'Ai-je besoin d\'une offre d\'emploi pour immigrer au Canada?',
          answer:
            'Pas nécessairement. Certains programmes comme l\'Entrée Express (catégorie fédérale des travailleurs qualifiés) ne requièrent pas d\'offre d\'emploi. Cependant, une offre d\'emploi validée peut augmenter vos points et accélérer votre candidature.',
        },
        {
          question: 'Quels sont vos honoraires?',
          answer:
            'Les honoraires varient selon le type de service et la complexité du dossier. Je propose une consultation initiale pour évaluer votre situation et vous fournir un devis détaillé. Contactez-moi pour plus d\'informations.',
        },
        {
          question: 'Puis-je travailler pendant le traitement de ma demande?',
          answer:
            'Cela dépend de votre statut actuel. Si vous êtes au Canada avec un permis de travail valide, vous pouvez continuer à travailler. Pour certaines demandes, un permis de travail ouvert peut être obtenu pendant le traitement.',
        },
        {
          question: 'Comment puis-je vérifier que vous êtes un consultant réglementé?',
          answer:
            'Je suis membre en règle du Collège des consultants en immigration et en citoyenneté (CCIC). Vous pouvez vérifier mon statut sur le site officiel du CCIC. En tant que consultant réglementé, je suis autorisé à représenter mes clients devant IRCC.',
        },
        {
          question: 'Offrez-vous des services en anglais et en français?',
          answer:
            'Oui, absolument! Je suis bilingue et offre tous mes services en français et en anglais pour mieux servir les clients francophones et anglophones.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about immigration',
      faqs: [
        {
          question: 'How long does a permanent residence application take?',
          answer:
            'Processing times vary by program. For Express Entry, processing typically takes 6 months. For other programs, it can take 12 to 24 months. I guide you to choose the fastest program suited to your profile.',
        },
        {
          question: 'Do I need a job offer to immigrate to Canada?',
          answer:
            'Not necessarily. Some programs like Express Entry (Federal Skilled Worker category) do not require a job offer. However, a validated job offer can increase your points and accelerate your application.',
        },
        {
          question: 'What are your fees?',
          answer:
            'Fees vary depending on the type of service and complexity of the case. I offer an initial consultation to assess your situation and provide you with a detailed quote. Contact me for more information.',
        },
        {
          question: 'Can I work while my application is being processed?',
          answer:
            'It depends on your current status. If you are in Canada with a valid work permit, you can continue working. For certain applications, an open work permit can be obtained during processing.',
        },
        {
          question: 'How can I verify that you are a regulated consultant?',
          answer:
            'I am a member in good standing of the College of Immigration and Citizenship Consultants (CICC). You can verify my status on the official CICC website. As a regulated consultant, I am authorized to represent my clients before IRCC.',
        },
        {
          question: 'Do you offer services in English and French?',
          answer:
            'Yes, absolutely! I am bilingual and offer all my services in French and English to better serve French and English-speaking clients.',
        },
      ],
    },
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-navy/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-light/70 mb-3">
            {language === 'fr' ? 'Clarte' : 'Clarity'}
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-brand-light/80">{content[language].subtitle}</p>
        </div>

        <div className="space-y-4">
          {content[language].faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left text-white"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-red flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-white/50 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-white/10 bg-brand-navy/40">
                  <p className="text-brand-light/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
