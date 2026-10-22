import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { SIGHTSEEING_PACKAGES, BUSINESS_INFO, Destination } from '../data/travelData';

interface SightseeingSectionProps {
  onBookSightseeing: (packageName: string) => void;
}

export const SightseeingSection: React.FC<SightseeingSectionProps> = ({ onBookSightseeing }) => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  return (
    <section id="sightseeing" className="py-20 sm:py-28 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Explore the Queen of Hill Stations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Popular Ooty Sightseeing Packages
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Curated daily sightseeing tours guided by Nilgiri locals. Enjoy scenic photography stops, flexible viewpoints, and hassle-free mountain travel.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGHTSEEING_PACKAGES.map((pkg: Destination) => (
            <div
              key={pkg.id}
              className="bg-stone-950 border border-emerald-900/40 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Photo with aspect-ratio preserved */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} - Ooty sightseeing with Shaisha Tours`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-emerald-700/90 backdrop-blur-sm text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
                    {pkg.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-amber-300 font-medium flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.driveTime}</span>
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6">
                  <p className="text-xs text-stone-400 italic mb-4">
                    {pkg.subtitle}
                  </p>

                  <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-3.5 mb-5 text-xs text-stone-300">
                    <div className="font-bold text-amber-400 mb-2 uppercase tracking-wider text-[10px]">
                      Key Sights Covered:
                    </div>
                    <ul className="space-y-1.5">
                      {pkg.attractions.slice(0, 4).map((att, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{att}</span>
                        </li>
                      ))}
                      {pkg.attractions.length > 4 && (
                        <li className="text-[11px] text-stone-400 pl-5">
                          + {pkg.attractions.length - 4} more scenic locations
                        </li>
                      )}
                    </ul>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    <strong className="text-stone-300">Highlight:</strong> {pkg.highlights}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => onBookSightseeing(pkg.title)}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book This Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent(
                    `Hello Shaisha Tours & Travels! Please share cab options and itinerary for *${pkg.title}*.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-900 hover:bg-emerald-900 border border-emerald-800 text-emerald-400 hover:text-white rounded-xl transition-colors"
                  title="Inquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-950 via-stone-950 to-stone-950 border border-emerald-700/50 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">
              Flexible Sightseeing Itineraries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Want a customized 2-day or 3-day Nilgiris itinerary?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              We design custom routes combining Ooty, Coonoor, Avalanche, and Pykara according to your family's pace, senior citizen comfort, and arrival schedules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onBookSightseeing('Custom Multi-Day Nilgiri Package')}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg"
            >
              Request Custom Itinerary
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 font-bold px-5 py-3.5 rounded-xl text-sm transition-all text-center whitespace-nowrap"
            >
              Call {BUSINESS_INFO.phone1}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
