import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, ExternalLink } from 'lucide-react';
import Container from './Container';
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin, Instagram, Github, ExternalLink,
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-white">saytup</span>
              <span className="text-2xl font-heading font-bold text-brand-orange">.</span>
            </Link>
            <p className="text-sm text-white/60 font-body leading-relaxed mb-6">
              Kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər qurmasına kömək edən Bakıda veb inkişaf studiyası.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-white/40 mb-4">Xidmətlər</h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-white/40 mb-4">Şirkət</h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-white/40 mb-4">Əlaqə</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors font-body">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors font-body">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-white/60 font-body">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 font-body">
            © 2026 Saytup.az — Bütün hüquqlar qorunur
          </p>
        </div>
      </Container>
    </footer>
  );
}
