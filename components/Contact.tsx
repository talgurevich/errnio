'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_lp16xmn';
      const templateId = 'template_n9zej2e';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_name: 'errnio',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
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

  return (
    <section id="contact" className="py-16 px-6 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="gradient-text neon-glow">{t.contact.title}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-12">
          {t.contact.subtitle}
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg mb-2 gradient-text font-medium">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/60 border border-neon-blue/30 rounded-lg focus:border-neon-pink/50 focus:outline-none transition-all duration-300 text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg mb-2 gradient-text font-medium">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/60 border border-neon-blue/30 rounded-lg focus:border-neon-pink/50 focus:outline-none transition-all duration-300 text-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-lg mb-2 gradient-text font-medium">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/60 border border-neon-blue/30 rounded-lg focus:border-neon-pink/50 focus:outline-none transition-all duration-300 text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg mb-2 gradient-text font-medium">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-black/60 border border-neon-blue/30 rounded-lg focus:border-neon-pink/50 focus:outline-none transition-all duration-300 text-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.send}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
              {t.contact.form.success}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
              {t.contact.form.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
