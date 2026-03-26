'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Container from '@/components/layout/Container';
import { SITE_CONFIG, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Linkedin: Icons.Linkedin,
  Instagram: Icons.Instagram,
  Github: Icons.Github,
  ExternalLink: Icons.ExternalLink,
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const initialFormData: FormData = {
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  };
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ad soyad tələb olunur';
    if (!formData.email.trim()) newErrors.email = 'E-poçt tələb olunur';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Düzgün e-poçt daxil edin';
    if (!formData.message.trim()) newErrors.message = 'Mesaj tələb olunur';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error ?? 'Mesaj göndərilə bilmədi.');
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Mesaj göndərilə bilmədi. Zəhmət olmasa bir daha cəhd edin.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-brand-light" aria-labelledby="contact-form-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-5 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-brand-dark mb-2">Mesaj Göndərildi!</h2>
                <p className="text-brand-gray font-body">Təşəkkür edirik! 24 saat ərzində sizinlə əlaqə saxlayacağıq.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 id="contact-form-heading" className="text-2xl font-heading font-semibold text-brand-dark mb-2">
                  Sayt Sifarişi Göndərin
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-medium text-brand-dark mb-1.5">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Elvin Mammadov"
                      className={errors.name ? 'border-red-400' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium text-brand-dark mb-1.5">
                      E-poçt <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="elvin@company.az"
                      className={errors.email ? 'border-red-400' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-body font-medium text-brand-dark mb-1.5">Telefon (istəyə bağlı)</label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+994 50 XXX XX XX" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-sm font-body font-medium text-brand-dark mb-1.5">Maraqlandığınız Xidmət</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Xidmət seçin</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-body font-medium text-brand-dark mb-1.5">Paket Seçimi</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Paket seçin</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="premium">Premium</option>
                      <option value="custom">Xüsusi paket</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-brand-dark mb-1.5">
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Layihəniz haqqında bizə məlumat verin..."
                    rows={5}
                    className={errors.message ? 'border-red-400' : ''}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-medium py-3 h-auto text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? 'Göndərilir...' : 'Sayt Sifarişi Ver'}
                </Button>

                {submitError && (
                  <p className="text-sm font-body text-red-500">{submitError}</p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-brand-dark text-lg mb-4">Əlaqə Məlumatları</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-brand-gray font-body mb-0.5">E-poçt</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-body text-brand-dark hover:text-brand-blue transition-colors">{SITE_CONFIG.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-brand-gray font-body mb-0.5">Telefon</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm font-body text-brand-dark hover:text-brand-blue transition-colors">{SITE_CONFIG.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-brand-gray font-body mb-0.5">Ünvan</p>
                    <p className="text-sm font-body text-brand-dark">{SITE_CONFIG.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brand-blue rounded-3xl p-6">
              <h3 className="font-heading font-semibold text-white text-lg mb-2">Bizi İzləyin</h3>
              <p className="text-white/60 font-body text-sm mb-4">Son layihələrimizdən xəbərdar olun.</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4 text-white" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
