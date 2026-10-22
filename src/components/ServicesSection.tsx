import React from 'react';
import { Compass, Plane, ShieldCheck, Map, Users, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      title: 'Ooty Local Sightseeing Cabs',
      desc: 'Comfortable day packages covering Botanical Garden, Ooty Lake boating, Doddabetta Peak, Rose Garden, and authentic Nilgiri Tea & Chocolate museums.',
      icon: Map,
      tag: 'Most Popular',
      benefits: ['Doorstep hotel pickup & drop', 'Flexible sightseeing pace', 'Driver acts as friendly local guide'],
    },
    {
      title: 'Coimbatore Airport & Station Transfers',
      desc: 'Punctual, stress-free transfers between Ooty and Coimbatore International Airport (CJB) or Coimbatore Junction railway station.',
      icon: Plane,
      tag: 'Fixed Route',
      benefits: ['Flight-tracking for delayed arrivals', 'Safe mountain ghat driving', 'Luggage assistance included'],
    },
    {
      title: 'Outstation Hill & City Trips',
      desc: 'Smooth intercity journeys connecting Ooty with Mysore, Bangalore, Wayanad, Kodaikanal, Madurai, and Cochin with licensed inter-state permits.',
      icon: Compass,
      tag: 'Interstate',
      benefits: ['One-way and round-trip options', 'TN / KA / KL permit assistance', 'Clean well-maintained cars'],
    },
    {
      title: 'Nilgiri Excursion Circuits',
      desc: 'Specialized tours to Coonoor tea hills, tranquil Kotagiri Kodanad viewpoints, Pykara waterfalls & 9th Mile, and Mudumalai Wildlife Safari.',
      icon: Clock,
      tag: 'Day Excursion',
      benefits: ['Hairpin-bend experienced chauffeurs', 'Scenic photo stopovers', 'Custom start & return times'],
    },
    {
      title: 'Group & Family Mini-Coaches',
      desc: 'Spacious 12 to 17 seater Tempo Travellers and paired SUVs for family reunions, college tours, corporate retreats, and wedding logistics.',
      icon: Users,
      tag: 'Group Travel',
      benefits: ['High-roof spacious cabins', 'Dedicated luggage top carriers', 'Uniformed, vetted staff'],
    },
    {
      title: '24/7 Emergency Cab Dispatch',
      desc: 'Round-the-clock emergency medical runs, late-night hotel transfers, and early morning mountain journeys across the Nilgiris district.',
      icon: ShieldCheck,
      tag: '24/7 On-Call',
      benefits: ['Direct phone connection', 'Immediate dispatch coordination', 'Transparent night fare policy'],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Tailored Nilgiri Travel</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Comprehensive Taxi & Tour Services
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Whether you need a full-day leisure tour across Ooty’s tea plantations or a punctual airport transfer through scenic ghat roads, we have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-stone-950/80 border border-emerald-900/40 hover:border-amber-400/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-900 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2 text-xs text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Enquire This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent(`Hi Shaisha Tours! I am interested in: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-300 rounded-lg transition-colors"
                    title="Quick WhatsApp enquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
