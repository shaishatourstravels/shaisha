import React, { useState } from 'react';
import { Navigation, Clock, MapPin, AlertCircle, ArrowRight, Phone } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO } from '../data/travelData';

interface RouteCalculatorProps {
  onSelectRoute: (routeName: string) => void;
}

export const RouteCalculator: React.FC<RouteCalculatorProps> = ({ onSelectRoute }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeRoute = POPULAR_ROUTES[selectedIdx];

  return (
    <section id="routes" className="py-20 sm:py-28 bg-stone-950 text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            <span>Travel Planner & Route Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Popular Ooty & Nilgiris Travel Routes
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Planning your mountain drive? Check exact distances, ghat travel duration, road conditions, and book punctual cab pickups.
          </p>
        </div>

        {/* Route Selector and Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Route selector list (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Select Your Travel Corridor:
            </div>
            {POPULAR_ROUTES.map((r, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedIdx === idx
                    ? 'bg-emerald-950/80 border-amber-400 text-white shadow-lg'
                    : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:bg-stone-800/80 hover:border-emerald-800'
                }`}
              >
                <div>
                  <div className="text-xs text-emerald-400 font-semibold mb-0.5">
                    {r.from}
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>&rarr;</span>
                    <span>{r.to}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-amber-300">
                    {r.distanceKm} km
                  </div>
                  <div className="text-[11px] text-stone-400">
                    {r.estDuration}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Route Details (Right) */}
          <div className="lg:col-span-7 bg-stone-900 border border-emerald-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="inline-block px-3 py-1 rounded-md bg-stone-950 border border-stone-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              Detailed Journey Insights
            </div>

            <div className="border-b border-stone-800 pb-5 mb-5">
              <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Origin to Destination:</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {activeRoute.from} <span className="text-amber-400">&rarr;</span> {activeRoute.to}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                <span className="text-xs text-stone-400 block mb-1">One-Way Distance</span>
                <span className="font-mono text-2xl font-bold text-amber-400">
                  {activeRoute.distanceKm} <span className="text-xs font-sans text-stone-300">Kilometers</span>
                </span>
              </div>

              <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                <span className="text-xs text-stone-400 block mb-1">Driving Duration</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 flex items-center gap-1.5">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span>{activeRoute.estDuration}</span>
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-emerald-950/40 border border-emerald-900/50 rounded-2xl p-4 text-xs sm:text-sm text-stone-300">
                <strong className="text-emerald-300 block mb-1 font-semibold">Scenic Highlights & Rest Stops:</strong>
                <p>{activeRoute.highlights}</p>
              </div>

              <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4 text-xs sm:text-sm text-stone-300">
                <strong className="text-amber-400 block mb-1 font-semibold">Hill Road Condition & Advice:</strong>
                <p>{activeRoute.roadCondition}</p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-stone-400">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Nilgiri mountain passes have hairpin turns. Our licensed drivers ensure a calm, motion-sickness-free ride.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onSelectRoute(`${activeRoute.from} to ${activeRoute.to}`)}
                className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Book Cab for This Route</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone1}`}
                className="w-full sm:w-auto p-3.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-emerald-400 hover:text-white rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone1}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
