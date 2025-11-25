import { Home, Briefcase, GraduationCap, Plane, Heart } from 'lucide-react';

interface ServicesProps {
  language: 'fr' | 'en';
}

export default function Services({ language }: ServicesProps) {
  const content = {
    fr: {
      title: 'Nos Services',
      subtitle: 'Des solutions complètes pour tous vos besoins en immigration',
      cta: 'Prendre rendez-vous',
      services: [
        {
          icon: Home,
          title: 'Résidence Permanente',
          description:
            'Obtenez votre résidence permanente au Canada grâce à nos programmes adaptés : Entrée Express, Programme des Travailleurs Qualifiés, parrainage familial et plus encore.',
        },
        {
          icon: Briefcase,
          title: 'Permis de Travail',
          description:
            'Sécurisez votre permis de travail canadien. Nous vous accompagnons dans les démarches EIMT, permis fermé ou ouvert, mobilité francophone et transferts intra-entreprise.',
        },
        {
          icon: GraduationCap,
          title: 'Permis d\'Études',
          description:
            'Étudiez au Canada en toute sérénité. Assistance complète pour permis d\'études, CAQ du Québec, permis de travail post-diplôme et changement de statut.',
        },
        {
          icon: Plane,
          title: 'Visa Visiteur',
          description:
            'Visitez le Canada sans souci. Demandes de visa visiteur, super visa pour parents et grands-parents, prolongations et restaurations de statut.',
        },
        {
          icon: Heart,
          title: 'Demande d\'Asile',
          description:
            'Protection pour les personnes en situation de danger. Accompagnement complet pour demandes d\'asile et statut de réfugié au Canada.',
        },
      ],
    },
    en: {
      title: 'Our Services',
      subtitle: 'Complete solutions for all your immigration needs',
      cta: 'Book an appointment',
      services: [
        {
          icon: Home,
          title: 'Permanent Residence',
          description:
            'Obtain your permanent residence in Canada through our adapted programs: Express Entry, Skilled Worker Program, family sponsorship and more.',
        },
        {
          icon: Briefcase,
          title: 'Work Permit',
          description:
            'Secure your Canadian work permit. We assist you with LMIA applications, closed or open permits, francophone mobility and intra-company transfers.',
        },
        {
          icon: GraduationCap,
          title: 'Study Permit',
          description:
            'Study in Canada with peace of mind. Complete assistance for study permits, Quebec CAQ, post-graduation work permit and status changes.',
        },
        {
          icon: Plane,
          title: 'Visitor Visa',
          description:
            'Visit Canada worry-free. Visitor visa applications, super visa for parents and grandparents, extensions and status restorations.',
        },
        {
          icon: Heart,
          title: 'Asylum Application',
          description:
            'Protection for people in danger. Complete support for asylum claims and refugee status in Canada.',
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={scrollToAppointment}
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                {content[language].cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
