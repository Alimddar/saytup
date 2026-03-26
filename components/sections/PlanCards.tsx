'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Zap, Star, Crown } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = { Zap, Star, Crown };

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
}

export default function PlanCards({ plans }: { plans: Plan[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
      {plans.map((plan) => {
        const Icon = ICON_MAP[plan.icon] ?? Zap;
        const isExpanded = expanded[plan.id] ?? false;

        return (
          <div
            key={plan.id}
            className={`relative rounded-3xl border-2 bg-white flex flex-col transition-shadow duration-300 hover:shadow-2xl ${
              plan.popular
                ? 'border-brand-blue shadow-xl shadow-brand-blue/20 will-change-transform isolate'
                : plan.borderColor
            }`}
            style={plan.popular ? { transform: 'translateZ(0)' } : undefined}
          >
            {plan.popular && (
              <div className="bg-brand-blue text-white text-sm font-semibold text-center py-2 rounded-t-[22px]">
                Ən Çox Seçilən
              </div>
            )}

            {/* Header */}
            <div
              className={`bg-gradient-to-br ${plan.color} p-6 sm:p-8 text-white ${
                plan.popular ? '' : 'rounded-t-[22px]'
              }`}
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">{plan.name}</h3>
                  <p className="text-white/70 text-sm">{plan.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-heading font-bold">
                  {plan.currency}{plan.price}
                </span>
                <div className="flex flex-col">
                  <span className="text-white/50 line-through text-sm">
                    {plan.currency}{plan.originalPrice}
                  </span>
                  <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    -{plan.discount}
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-1">{plan.period}</p>
            </div>

            {/* Features */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-brand-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Daha çox göstər */}
              <button
                onClick={() => toggle(plan.id)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-gray-200 text-sm font-medium text-brand-gray hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
              >
                {isExpanded ? (
                  <>Daha az göstər <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Daha çox göstər <ChevronDown className="w-4 h-4" /></>
                )}
              </button>

              {/* suitableFor — collapse/expand */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-3">
                    Kimlər üçün uyğundur?
                  </p>
                  <ul className="space-y-1.5">
                    {plan.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1 shrink-0 text-xs">✓</span>
                        <span className="text-xs text-brand-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Static CTA */}
              <div
                className={`mt-6 w-full flex items-center justify-center py-4 px-6 rounded-xl font-semibold text-sm ${
                  plan.popular
                    ? 'bg-brand-blue text-white'
                    : plan.id === 'premium'
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-dark text-white'
                }`}
              >
                {plan.cta}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
