import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-emerald-900/60 text-stone-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 p-0.5 shadow-md flex items-center justify-center border border-amber-400/30">
                <div className="w-full h-full bg-stone-950/80 rounded-[8px] flex flex-col items-center justify-center text-amber-400 font-bold">
                  <span className="text-base font-serif">ST</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  Shaisha Tours & Travels
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">Ooty, The Nilgiris</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Your dependable partner for memorable Ooty local sightseeing, Coonoor tea estate excursions, Pykara lake trips, and Coimbatore airport transfers.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Hill Drivers</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Explore Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Ooty Local Sightseeing Cabs</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Coonoor & Heritage Tea Estate Tour</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Pykara Waterfalls & Shooting Point</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Coimbatore Airport Transfer Cabs</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Mudumalai Wildlife Safari Drive</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Outstation Trips to Mysore & Bangalore</a></li>
            </ul>
          </div>

          {/* Vehicles Fleet */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Our Fleet
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#vehicles" className="hover:text-amber-300 transition-colors">Toyota Innova Crysta (6-7 Seater)</a></li>
              <li><a href="#vehicles" className="hover:text-amber-300 transition-colors">Maruti Suzuki Ertiga (MUV)</a></li>
              <li><a href="#vehicles" className="hover:text-amber-300 transition-colors">Swift Dzire / Toyota Etios (Sedan)</a></li>
              <li><a href="#vehicles" className="hover:text-amber-300 transition-colors">Tempo Traveller (12 & 17 Seater)</a></li>
              <li><a href="#why-us" className="hover:text-amber-300 transition-colors">Mountain Driving Safety Protocols</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Contact & Dispatch
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone1}`} className="text-white hover:text-amber-300 font-mono font-semibold">
                  +91 {BUSINESS_INFO.phone1}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone2}`} className="text-white hover:text-amber-300 font-mono font-semibold">
                  +91 {BUSINESS_INFO.phone2}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300"
                >
                  WhatsApp Booking
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Ooty, The Nilgiris, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-300">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-stone-200">Shaisha Tours & Travels</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Ooty Taxi & Cab Service &bull; Tamil Nadu</span>
            <span>&bull;</span>
            <a href="#about" className="hover:text-amber-300">About Us</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-amber-300">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
