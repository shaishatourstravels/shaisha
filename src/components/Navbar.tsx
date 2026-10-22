import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallDropdown, setShowCallDropdown] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Sightseeing', href: '#sightseeing' },
    { label: 'Route Guide', href: '#routes' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-emerald-900/40 text-stone-100 shadow-lg transition-all">
      {/* Top micro bar for phone & location */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/40 px-4 py-1.5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-emerald-300/90 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Ooty, Nilgiris, Tamil Nadu &bull; 24/7 Taxi & Tour Service</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-stone-400">Direct Bookings:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phone1}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phone2}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 p-0.5 shadow-md shadow-emerald-950/50 flex items-center justify-center border border-amber-400/30 group-hover:border-amber-400 transition-all">
              <div className="w-full h-full bg-stone-950/80 rounded-[10px] flex flex-col items-center justify-center text-amber-400 font-bold">
                <span className="text-lg leading-none tracking-tight font-serif text-amber-300">ST</span>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400">Ooty</span>
              </div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Shaisha <span className="text-amber-400">Tours & Travels</span>
              </div>
              <p className="text-xs text-emerald-300/80 font-medium tracking-wide">
                Premium Ooty Cabs & Nilgiri Sightseeing
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-amber-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call dropdown / button */}
            <div className="relative">
              <button
                onClick={() => setShowCallDropdown(!showCallDropdown)}
                className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-100 border border-emerald-700/50 hover:border-amber-400/60 px-3.5 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
                aria-label="Call Shaisha Tours"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </button>
              {showCallDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-stone-900 border border-emerald-800 rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-emerald-400 border-b border-stone-800 uppercase tracking-wider">
                    Select Contact Number
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone1}`}
                    className="flex items-center justify-between px-3.5 py-2.5 text-sm text-stone-200 hover:bg-emerald-950/60 hover:text-amber-300 transition-colors"
                  >
                    <span className="font-mono">{BUSINESS_INFO.phone1}</span>
                    <span className="text-xs bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">Primary</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone2}`}
                    className="flex items-center justify-between px-3.5 py-2.5 text-sm text-stone-200 hover:bg-emerald-950/60 hover:text-amber-300 transition-colors"
                  >
                    <span className="font-mono">{BUSINESS_INFO.phone2}</span>
                    <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded">Secondary</span>
                  </a>
                </div>
              )}
            </div>

            {/* WhatsApp Booking */}
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I would like to enquire about taxi booking in Ooty.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-emerald-950/40 hover:shadow-emerald-600/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-4 py-2 rounded-lg text-sm shadow-md transition-all active:scale-95 border border-amber-300/40"
            >
              Book Cab
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-amber-300 hover:bg-stone-800 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-emerald-900/60 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-800">
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="flex items-center justify-center gap-2 bg-stone-900 border border-emerald-800/80 text-emerald-300 py-2.5 px-3 rounded-lg text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone2}`}
              className="flex items-center justify-center gap-2 bg-stone-900 border border-emerald-800/80 text-emerald-300 py-2.5 px-3 rounded-lg text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone2}</span>
            </a>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-stone-200 hover:text-amber-300 hover:bg-stone-900 rounded-lg font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I want to check taxi availability in Ooty.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Booking (7868833712)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-xl text-sm shadow-md"
            >
              Book Cab / Custom Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
