'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactFormData } from '@/lib/types';

interface FormErrors {
  nom?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Votre nom est requis.';
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères.';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Votre message est requis.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submit (in production, replace with API call)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log('Contact form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-white rounded-2xl p-8 md:p-10 shadow-card text-center"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>

        <h3 className="font-display font-bold text-2xl text-noir mb-3">
          Message envoyé !
        </h3>
        <p className="text-gray-600 font-body mb-8 max-w-sm mx-auto">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <button
          onClick={handleReset}
          className="btn-outline-rouge"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-8 md:p-10 shadow-card"
    >
      <h2 className="font-display font-bold text-2xl text-noir mb-2">
        Envoyez-nous un message
      </h2>
      <p className="text-gray-500 font-body text-sm mb-8">
        Une question ? Un joueur souhaitant rejoindre le club ? On vous répond vite !
      </p>

      <div className="space-y-5">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-noir mb-1.5">
            Nom complet <span className="text-rouge">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body transition-colors duration-200 outline-none focus:ring-2 ${
              errors.nom
                ? 'border-red-400 focus:ring-red-200 bg-red-50'
                : 'border-gray-200 focus:border-rouge focus:ring-rouge/20 bg-white'
            }`}
            aria-describedby={errors.nom ? 'nom-error' : undefined}
          />
          <AnimatePresence>
            {errors.nom && (
              <motion.p
                id="nom-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1.5 text-xs text-red-600 font-body flex items-center gap-1"
                role="alert"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                {errors.nom}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-noir mb-1.5">
            Adresse email <span className="text-rouge">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jean.dupont@email.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body transition-colors duration-200 outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-400 focus:ring-red-200 bg-red-50'
                : 'border-gray-200 focus:border-rouge focus:ring-rouge/20 bg-white'
            }`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1.5 text-xs text-red-600 font-body flex items-center gap-1"
                role="alert"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Téléphone (optional) */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-semibold text-noir mb-1.5">
            Téléphone <span className="text-gray-400 font-normal text-xs">(optionnel)</span>
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="+32 4XX XX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rouge focus:ring-2 focus:ring-rouge/20 text-sm font-body transition-colors duration-200 outline-none bg-white"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-noir mb-1.5">
            Message <span className="text-rouge">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Je souhaite rejoindre le club / J'ai une question concernant..."
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body transition-colors duration-200 outline-none focus:ring-2 resize-none ${
              errors.message
                ? 'border-red-400 focus:ring-red-200 bg-red-50'
                : 'border-gray-200 focus:border-rouge focus:ring-rouge/20 bg-white'
            }`}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id="message-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1.5 text-xs text-red-600 font-body flex items-center gap-1"
                role="alert"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Envoi en cours...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                Envoyer le message
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
}
