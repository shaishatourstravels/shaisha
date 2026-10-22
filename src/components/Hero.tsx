import React from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85"
          alt="Lush green tea estate and misty mountains in Ooty, Nilgiris"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
        />
        {/* Layered gradients for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-emerald-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-stone-950/40 to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, CTAs, Phone Strip */}
          <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
            {/* Trust pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-emerald-950/50">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin [animation-duration:4s]" />
              <span>Premier Ooty & Nilgiris Taxi & Sightseeing Service</span>
              <span className="hidden md:inline text-emerald-400/60">&bull;</span>
              <span className="hidden md:inline text-amber-300 font-medium">Licensed Hill Drivers</span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.15] mb-5">
              Experience the Misty Hills of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-amber-300">Ooty</span> with Safe, Reliable Cabs
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-200 max-w-xl font-light leading-relaxed mb-8 text-stone-200/90">
              From tranquil tea plantations and cascading Pykara waterfalls to Coonoor valleys and Coimbatore airport pickups, <strong className="font-semibold text-amber-300">Shaisha Tours & Travels</strong> delivers smooth mountain journeys, transparent billing, and authentic Nilgiri hospitality.
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5 mb-8">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold px-7 py-4 rounded-xl text-base shadow-xl shadow-amber-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book Your Ooty Cab Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I want to check rates and cab availability for my Ooty trip.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl text-base shadow-xl shadow-emerald-950/40 transition-all border border-emerald-400/30 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Call Quick Strip */}
            <div className="w-full max-w-xl bg-stone-900/85 backdrop-blur-md border border-stone-700/60 rounded-2xl p-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Phone Dispatch & Instant Quotes</span>
                  </p>
                  <p className="text-xs text-stone-300">
                    Direct call to our Ooty drivers & dispatch:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone1}`}
                    className="flex items-center gap-1.5 bg-stone-800 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 hover:text-white px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{BUSINESS_INFO.phone1}</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone2}`}
                    className="flex items-center gap-1.5 bg-stone-800 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 hover:text-white px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{BUSINESS_INFO.phone2}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Photo Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/40 shadow-2xl bg-stone-900 group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/assets/aistudio/Silver_Toyota_at_Misty_Ooty_View_c56a6fb2.png"
                  alt="Shaisha Tours & Travels Toyota Etios cab at Welcome to Ooty viewpoint overlooking tea plantations"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Floating pill on photo */}
                <div className="absolute top-4 left-4 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Real Fleet Photo &bull; Ooty Viewpoint</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-md border border-stone-800 rounded-2xl p-3.5 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-amber-400 text-xs font-bold font-mono">TN 66 F 2106</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-300">
                      Welcome to Ooty
                    </span>
                  </div>
                  <h3 className="font-serif text-sm font-bold text-white">
                    Toyota Etios at Emerald Tea Hill Vista
                  </h3>
                  <p className="text-[11px] text-stone-300 mt-0.5">
                    Fresh floral garland, pristine clean interior, and experienced local driver.
                  </p>
                </div>
              </div>

              {/* Mini thumbnails of Ertiga & Innova real fleet */}
              <div className="p-3 bg-stone-950 border-t border-stone-800 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-900 border border-stone-800">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__1__10549e00.jpeg"
                    alt="Maruti Ertiga with roof carrier at Ooty sunrise"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="text-[10px] leading-tight">
                    <div className="font-bold text-white">Maruti Ertiga</div>
                    <div className="text-stone-400">TN 43 S 4920</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-900 border border-stone-800">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__2__3fd8dc29.jpeg"
                    alt="Toyota Innova on misty Ooty forest road"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="text-[10px] leading-tight">
                    <div className="font-bold text-white">Toyota Innova</div>
                    <div className="text-stone-400">TN 38 AR 2945</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-6 border-t border-stone-800/80 w-full">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-200">Hill Route Experts</h2>
              <p className="text-[11px] text-stone-400">36 Hairpin Safe Driving</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-200">Doorstep Pickup</h2>
              <p className="text-[11px] text-stone-400">Hotels, Resorts & Cottages</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-200">Clean & Fresh Cabs</h2>
              <p className="text-[11px] text-stone-400">Sanitized Daily</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-200">No Hidden Costs</h2>
              <p className="text-[11px] text-stone-400">Honest Driver Billing</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
