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

      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-1062478822/VDWmCM6jjdYaEObH0PoD',
        });
      }

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
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-6">
          {t.contact.subtitle}
        </p>

        {/* WhatsApp CTA */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">{t.contact.whatsapp}</p>
          <a
            href="https://wa.me/972504425322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.contact.whatsappButton}
          </a>
        </div>

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
