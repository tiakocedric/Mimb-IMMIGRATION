import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Appointment } from '../types';

interface AppointmentFormProps {
  language: 'fr' | 'en';
}

export default function AppointmentForm({ language }: AppointmentFormProps) {
  const [formData, setFormData] = useState<Appointment>({
    full_name: '',
    email: '',
    phone: '',
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const content = {
    fr: {
      title: 'Planifier une consultation',
      subtitle: 'Dossier analysé, stratégie proposée et calendrier confirmé.',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      service: 'Service souhaité',
      date: 'Date préférée',
      time: 'Heure préférée',
      message: 'Message (optionnel)',
      submit: 'Confirmer le rendez-vous',
      submitting: 'Envoi en cours...',
      success: 'Rendez-vous demandé avec succès! Confirmation par email sous 24h.',
      errorMsg: 'Une erreur est survenue. Merci de réessayer.',
      services: [
        'Résidence permanente',
        'Permis de travail',
        'Permis d\'études',
        'Visa visiteur',
        'Demande d\'asile',
      ],
      times: [
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
      ],
    },
    en: {
      title: 'Book a consultation',
      subtitle: 'Case review, proposed strategy and confirmed timeline.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      service: 'Desired service',
      date: 'Preferred date',
      time: 'Preferred time',
      message: 'Message (optional)',
      submit: 'Confirm appointment',
      submitting: 'Sending...',
      success: 'Appointment requested successfully! Confirmation within 24h.',
      errorMsg: 'Something went wrong. Please try again.',
      services: [
        'Permanent residence',
        'Work permit',
        'Study permit',
        'Visitor visa',
        'Asylum application',
      ],
      times: [
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
      ],
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase.from('appointments').insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_type: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(content[language].errorMsg);
      console.error('Error submitting appointment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const today = new Date().toISOString().split('T')[0];

  const inputClasses =
    'w-full px-4 py-3 rounded-2xl bg-brand-navy/40 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-red/60 transition-all';

  const appointmentPillars =
    language === 'fr'
      ? ['Confiance', 'Professionnalisme', 'Immigration réglementée']
      : ['Trust', 'Professionalism', 'Regulated immigration'];

  return (
    <section id="appointment" className="py-24 bg-brand-navy/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-brand-light/80 text-sm">
                <Calendar size={20} />
                {language === 'fr'
                  ? 'Consultation stratégique et réglementée'
                  : 'Strategic, regulated consultation'}
              </span>
              <h2 className="text-4xl font-semibold text-white">{content[language].title}</h2>
              <p className="text-xl text-brand-light/80">{content[language].subtitle}</p>
            </div>

            <div className="grid gap-4">
              {appointmentPillars.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white/80 text-sm uppercase tracking-[0.4em]"
                >
                  <span className="w-3 h-3 rounded-full bg-brand-red" />
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-light/70">
                {language === 'fr' ? 'Délai moyen de réponse' : 'Average response time'}
              </p>
              <p className="text-3xl font-semibold text-white">24h</p>
              <p className="text-brand-light/80">
                {language === 'fr'
                  ? 'Nous confirmons chaque rendez-vous avec un briefing écrit et des documents requis.'
                  : 'Each appointment is confirmed with a written brief and required documents.'}
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur">
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
              <div className="grid md:grid-cols-2 gap-6">
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
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service_type"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    {content[language].service}
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="">--</option>
                    {content[language].services.map((service) => (
                      <option key={service} value={service} className="text-brand-navy">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="preferred_date"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    {content[language].date}
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    min={today}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferred_time"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    {content[language].time}
                  </label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="">--</option>
                    {content[language].times.map((time) => (
                      <option key={time} value={time} className="text-brand-navy">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
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
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-full bg-brand-red text-white font-semibold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform disabled:bg-white/20 disabled:text-white/50"
              >
                <Calendar size={20} />
                {isSubmitting ? content[language].submitting : content[language].submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
