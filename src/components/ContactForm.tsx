import { useState } from 'react';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactSubmission } from '../types';

interface ContactFormProps {
  language: 'fr' | 'en';
}

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactSubmission>({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const content = {
    fr: {
      title: 'Contact corporate',
      subtitle: 'Equipe dediee, disponible et reglementee.',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Telephone',
      message: 'Message',
      submit: 'Envoyer',
      submitting: 'Envoi...',
      success: 'Message bien recu! Nous revenons vers vous rapidement.',
      errorMsg: 'Impossible d\'envoyer le message. Merci de reessayer.',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'votre@email.com',
      phonePlaceholder: '+1 (514) 000-0000',
      messagePlaceholder: 'Decrivez votre projet d\'immigration...',
    },
    en: {
      title: 'Corporate contact',
      subtitle: 'Dedicated, compliant and responsive team.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      submitting: 'Sending...',
      success: 'Message received! We will get back shortly.',
      errorMsg: 'Unable to send the message. Please try again.',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+1 (514) 000-0000',
      messagePlaceholder: 'Describe your immigration project...',
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ full_name: '', email: '', phone: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(content[language].errorMsg);
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-2xl bg-brand-navy/40 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-red/60 transition-all';

  return (
    <section id="contact" className="py-24 bg-brand-navy/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-light/70 mb-3">
                {language === 'fr' ? 'Disponibilite' : 'Availability'}
              </p>
              <h2 className="text-4xl font-semibold text-white">{content[language].title}</h2>
              <p className="text-xl text-brand-light/80 mt-3">{content[language].subtitle}</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: '(514) 462-7623',
                  href: 'tel:+15144627623',
                },
                {
                  icon: Mail,
                  label: 'fmimb@yahoo.fr',
                  href: 'mailto:fmimb@yahoo.fr',
                },
                { icon: MapPin, label: 'Montreal, Quebec, Canada' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-white/80">
                  <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center">
                    <item.icon size={20} className="text-white" />
                  </span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-brand-red/30 bg-brand-red/10 p-6 text-brand-light">
              <p className="uppercase tracking-[0.4em] text-sm mb-2">
                {language === 'fr' ? 'Horaires' : 'Schedule'}
              </p>
              <p className="text-2xl font-semibold text-white">09h - 17h EST</p>
              <p className="text-brand-light/80 mt-2">
                {language === 'fr'
                  ? 'Disponibilite flexible pour les clients internationaux.'
                  : 'Flexible availability for international clients.'}
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-10">
            {isSuccess && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-brand-light">
                <CheckCircle className="text-brand-red" size={22} />
                <p>{content[language].success}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-2xl border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-white">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-semibold text-white mb-2">
                  {content[language].name}
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  placeholder={content[language].namePlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  {content[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={content[language].emailPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  {content[language].phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={content[language].phonePlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  {content[language].message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={content[language].messagePlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-full bg-brand-red text-white font-semibold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform disabled:bg-white/20 disabled:text-white/50"
              >
                <Send size={20} />
                {isSubmitting ? content[language].submitting : content[language].submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
