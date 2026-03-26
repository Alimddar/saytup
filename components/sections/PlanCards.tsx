'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, ChevronUp, Zap, Star, Crown } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = { Zap, Star, Crown };
const PREVIEW_COUNT = 6;

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  originalPrice: string;
  price: string;
  currency: string;
  period: string;
  discount: string;
  color: string;
  borderColor: string;
  popular: boolean;
  features: string[];
  suitableFor: string[];
  cta: string;
  ctaHref: string;
}

export default function PlanCards({ plans }: { plans: Plan[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
      {plans.map((plan) => {
        const Icon = ICON_MAP[plan.icon] ?? Zap;
        const isExpanded = expanded[plan.id] ?? false;
        const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, PREVIEW_COUNT);
        const hiddenCount = plan.features.length - PREVIEW_COUNT;

        return (
          <div
            key={plan.id}
            className={`rounded-3xl border-2 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
              plan.popular ? 'border-brand-blue shadow-lg shadow-brand-blue/15' : plan.borderColor
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="bg-brand-blue text-white text-xs font-semibold text-center py-1.5 tracking-wide">
                Ən Çox Seçilən
              </div>
            )}

            {/* Header */}
            <div className={`bg-gradient-to-br ${plan.color} px-6 py-5 text-white`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg leading-tight">{plan.name}</h3>
                  <p className="text-white/65 text-xs">{plan.subtitle}</p>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-heading font-bold">{plan.currency}{plan.price}</span>
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="text-white/45 line-through text-sm">{plan.currency}{plan.originalPrice}</span>
                  <span className="bg-white/20 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">-{plan.discount}</span>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-0.5">{plan.period}</p>
            </div>

            {/* Features */}
            <div className="px-6 pt-5 pb-6">
              <ul className="space-y-2">
                {visibleFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    <span className="text-sm text-brand-dark leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* suitableFor — only when expanded */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-2">
                    Kimlər üçün?
                  </p>
                  <ul className="space-y-1.5">
                    {plan.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-blue shrink-0 text-xs mt-0.5">✓</span>
                        <span className="text-xs text-brand-gray leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Toggle */}
              {hiddenCount > 0 && (
                <button
                  onClick={() => toggle(plan.id)}
                  className="mt-3 flex items-center gap-1 text-xs text-brand-gray hover:text-brand-blue transition-colors duration-150"
                >
                  {isExpanded ? (
                    <><ChevronUp className="w-3.5 h-3.5" /> Daha az göstər</>
                  ) : (
                    <><ChevronDown className="w-3.5 h-3.5" /> +{hiddenCount} xüsusiyyət daha</>
                  )}
                </button>
              )}

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`mt-5 block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-opacity duration-200 hover:opacity-90 ${
                  plan.popular
                    ? 'bg-brand-blue text-white'
                    : plan.id === 'premium'
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-dark text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
