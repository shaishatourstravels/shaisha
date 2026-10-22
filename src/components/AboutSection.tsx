import React from 'react';
import { MapPin, Phone, Award, HeartHandshake, ShieldCheck, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase with Real Fleet Photography (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-800/60 shadow-2xl aspect-[4/3] bg-stone-900">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__2__3fd8dc29.jpeg"
                alt="Shaisha Tours Toyota Innova cab on misty forest mountain road in Ooty"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-emerald-700/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-950 text-amber-400 border border-emerald-600/50">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white">Shaisha Tours Toyota Innova &bull; TN 38 AR 2945</h2>
                    <p className="text-[11px] text-stone-300">Pictured on a scenic misty forest circuit in Ooty, Nilgiris.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inset floating secondary photo (Dzire at Heritage Resort) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-stone-900 z-10">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM_827abbdd.jpeg"
                  alt="Shaisha Tours Dzire Sedan at Ooty Heritage Stay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 bg-stone-950 text-[10px] text-stone-300 font-semibold text-center border-t border-stone-800">
                Doorstep Resort Pickup
              </div>
            </div>

            {/* Accent badge floating top-right */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-amber-500 text-stone-950 p-3.5 rounded-2xl shadow-2xl font-bold text-xs flex-col items-center border border-amber-300/40">
              <span className="text-lg font-serif leading-none">24/7</span>
              <span className="text-[9px] uppercase tracking-wider font-sans mt-0.5">Ooty Cabs</span>
            </div>
          </div>

          {/* About Narrative (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span>About Shaisha Tours & Travels</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Hospitality Rooted in the Heart of the Nilgiris
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Founded and operated right here in <strong>Ooty, The Nilgiris</strong>, <strong>Shaisha Tours & Travels</strong> is dedicated to offering genuine, dependable, and enjoyable mountain travel experiences. We understand that exploring a hill station should be relaxing, memorable, and safe—not rushed or stressful.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed">
              Whether you are arriving at Coimbatore Airport for a romantic honeymoon, bringing your extended family for summer holiday sightseeing, or arranging an outstation trip to Mysore and Bangalore, our fleet and drivers stand ready with clean vehicles and authentic local hospitality.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-stone-200">
                  <strong>Local Sightseeing Mastery:</strong> We know the best time of day to catch clear mountain views at Doddabetta, avoid lake boating queues, and take quiet strolls in tea gardens.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-stone-200">
                  <strong>Courteous & Verified Chauffeurs:</strong> Polite, non-smoking drivers who take pride in passenger comfort, punctuality, and calm mountain handling.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-stone-200">
                  <strong>Zero Hidden Surcharges:</strong> You receive an upfront, itemized quote with toll, parking, and driver allowances clarified from day one.
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-stone-800">
              <a
                href={`tel:${BUSINESS_INFO.phone1}`}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone1}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone2}`}
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 font-bold px-5 py-3 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone2}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
