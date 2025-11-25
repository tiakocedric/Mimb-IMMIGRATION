import { Award, Shield, Users, Globe } from 'lucide-react';

interface AboutProps {
  language: 'fr' | 'en';
}

export default function About({ language }: AboutProps) {
  const content = {
    fr: {
      title: 'À propos de Mimb Franklin',
      subtitle: 'Votre partenaire de confiance pour l\'immigration au Canada',
      bio: 'Consultant réglementé en immigration canadienne, je mets mon expertise au service de vos projets d\'immigration. Basé à Montréal, Québec, j\'accompagne des clients du monde entier dans leurs démarches pour vivre, étudier et travailler au Canada.',
      mission: 'Ma mission',
      missionText:
        'Offrir un accompagnement personnalisé et professionnel pour transformer votre rêve canadien en réalité. Chaque dossier est unique et mérite une attention particulière.',
      values: 'Nos valeurs',
      valueItems: [
        {
          icon: Shield,
          title: 'Professionnalisme',
          description: 'Service réglementé et conforme aux normes canadiennes',
        },
        {
          icon: Award,
          title: 'Excellence',
          description: 'Expertise approfondie du système d\'immigration canadien',
        },
        {
          icon: Users,
          title: 'Accompagnement',
          description: 'Soutien personnalisé à chaque étape du processus',
        },
        {
          icon: Globe,
          title: 'Diversité',
          description: 'Service bilingue pour clients francophones et anglophones',
        },
      ],
    },
    en: {
      title: 'About Mimb Franklin',
      subtitle: 'Your trusted partner for immigration to Canada',
      bio: 'As a regulated Canadian immigration consultant, I put my expertise at the service of your immigration projects. Based in Montreal, Quebec, I assist clients from around the world with their applications to live, study and work in Canada.',
      mission: 'My mission',
      missionText:
        'To provide personalized and professional support to turn your Canadian dream into reality. Each file is unique and deserves special attention.',
      values: 'Our values',
      valueItems: [
        {
          icon: Shield,
          title: 'Professionalism',
          description: 'Regulated service compliant with Canadian standards',
        },
        {
          icon: Award,
          title: 'Excellence',
          description: 'In-depth expertise in the Canadian immigration system',
        },
        {
          icon: Users,
          title: 'Support',
          description: 'Personalized assistance at every stage of the process',
        },
        {
          icon: Globe,
          title: 'Diversity',
          description: 'Bilingual service for French and English-speaking clients',
        },
      ],
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].bio}
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {content[language].mission}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content[language].missionText}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  {language === 'fr' ? 'Société' : 'Company'}
                </p>
                <p className="text-xl font-bold text-gray-900">
                  MIMBIMMIGRATION CONSULTANCY INC.
                </p>
                <p className="text-blue-600 mt-2">www.mimbimmigration.ca</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {content[language].values}
            </h3>
            <div className="space-y-6">
              {content[language].valueItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <item.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
