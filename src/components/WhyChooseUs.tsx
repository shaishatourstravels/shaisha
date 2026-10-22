import React from 'react';
import { ShieldCheck, Sparkles, BadgeIndianRupee, Clock, Compass, PhoneCall, Check } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/travelData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Sparkles,
    BadgeIndianRupee,
    Clock,
    Compass,
    PhoneCall,
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The Shaisha Tours Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Navigating Nilgiris mountain passes requires specialized hill-driving mastery, impeccable punctuality, and fair, transparent pricing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-stone-950 border border-emerald-900/40 hover:border-amber-400/50 rounded-3xl p-7 shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-900 group-hover:text-amber-300 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Guaranteed Service Promise</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Driver Standards Banner */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">
                Mountain Safety Protocols
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Your Safety on Nilgiri Hairpin Bends is Our Paramount Concern
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Driving up to Ooty from Mettupalayam, Gudalur, or Kalhatty demands seasoned hill driving technique—correct gear control, gentle cornering to reduce passenger motion discomfort, and zero reckless overtaking. All Shaisha Tours & Travels drivers are non-smokers, polite, and verified.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone1}`}
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm text-center transition-all shadow-md"
              >
                Call Primary: {BUSINESS_INFO.phone1}
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone2}`}
                className="bg-stone-900 hover:bg-stone-800 border border-stone-700 text-amber-300 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm text-center transition-all"
              >
                Call Secondary: {BUSINESS_INFO.phone2}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
