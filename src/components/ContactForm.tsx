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
      subtitle: 'Équipe dédiée, disponible et réglementée.',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
      submit: 'Envoyer',
      submitting: 'Envoi...',
      success: 'Message bien reçu! Nous revenons vers vous rapidement.',
      errorMsg: 'Impossible d\'envoyer le message. Merci de réessayer.',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'votre@email.com',
      phonePlaceholder: '+1 (514) 000-0000',
      messagePlaceholder: 'Décrivez votre projet d\'immigration...',
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
    'w-full px-4 py-3 rounded-2xl bg-surface border border-ui text-txt-primary placeholder-txt-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand-red/60 transition-all hover:border-hover-ui';

  return (
    <section id="contact" className="py-24 bg-surface/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-main/95 to-brand-red/20 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-[32px] border border-ui bg-surface p-8 lg:p-10 space-y-8 shadow-lg">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-txt-secondary mb-3">
                {language === 'fr' ? 'Disponibilité' : 'Availability'}
              </p>
              <h2 className="text-4xl font-semibold text-txt-primary">{content[language].title}</h2>
              <p className="text-xl text-txt-secondary mt-3">{content[language].subtitle}</p>
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
                { icon: MapPin, label: 'Montréal, Québec, Canada' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-txt-secondary">
                  <span className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <item.icon size={20} className="text-brand-red" />
                  </span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-txt-primary transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-brand-red/30 bg-brand-red/5 p-6 text-txt-primary">
              <p className="uppercase tracking-[0.4em] text-sm mb-2 text-brand-red">
                {language === 'fr' ? 'Horaires' : 'Schedule'}
              </p>
              <p className="text-2xl font-semibold text-txt-primary">09h - 17h EST</p>
              <p className="text-txt-secondary mt-2">
                {language === 'fr'
                  ? 'Disponibilité flexible pour les clients internationaux.'
                  : 'Flexible availability for international clients.'}
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-ui bg-surface p-8 lg:p-10 shadow-lg">
            {isSuccess && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                <CheckCircle className="text-green-500" size={22} />
                <p>{content[language].success}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-semibold text-txt-primary mb-2">
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
                <label htmlFor="email" className="block text-sm font-semibold text-txt-primary mb-2">
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
                <label htmlFor="phone" className="block text-sm font-semibold text-txt-primary mb-2">
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
                <label htmlFor="message" className="block text-sm font-semibold text-txt-primary mb-2">
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
                className="w-full px-8 py-4 rounded-full bg-brand-red text-white font-semibold flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-lg transition-all disabled:bg-gray-300 disabled:text-gray-500"
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
