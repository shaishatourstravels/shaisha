import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { BookingForm } from './BookingForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Direct Nilgiris Dispatch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Contact Shaisha Tours & Travels
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Reach out via phone, WhatsApp, or our online enquiry form. We are active 24/7 in Ooty for immediate cab reservations and custom sightseeing plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Map (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-stone-950 border border-emerald-800/60 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
              <h3 className="font-serif text-xl font-bold text-white border-b border-stone-800 pb-3 flex items-center justify-between">
                <span>Official Contact Details</span>
                <span className="text-xs font-sans text-amber-400 font-bold bg-stone-900 px-2 py-0.5 rounded">Ooty Office</span>
              </h3>

              {/* Phone 1 */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-950 text-emerald-400 border border-emerald-700/50 rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">Primary Contact / Dispatch</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone1}`}
                    className="text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors block mt-0.5"
                  >
                    +91 {BUSINESS_INFO.phone1}
                  </a>
                  <div className="mt-1 flex items-center gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone1}`}
                      className="text-xs text-amber-400 hover:underline font-semibold"
                    >
                      Call Now
                    </a>
                    <span className="text-stone-600">&bull;</span>
                    <a
                      href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I would like to book a taxi in Ooty.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:underline font-semibold"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-950 text-emerald-400 border border-emerald-700/50 rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">Secondary Contact / Inquiries</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone2}`}
                    className="text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors block mt-0.5"
                  >
                    +91 {BUSINESS_INFO.phone2}
                  </a>
                  <div className="mt-1 flex items-center gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone2}`}
                      className="text-xs text-amber-400 hover:underline font-semibold"
                    >
                      Call Now
                    </a>
                    <span className="text-stone-600">&bull;</span>
                    <a
                      href={`${BUSINESS_INFO.whatsappBaseUrl2}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I am inquiring about taxi services.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:underline font-semibold"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 text-amber-400 border border-stone-800 rounded-2xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">Headquarters & Fleet Hub</span>
                  <p className="text-sm text-stone-200 mt-0.5">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Doorstep pickup from all hotels, resorts, homestays, bus terminal & railway station.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 text-stone-300 border border-stone-800 rounded-2xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">Email Correspondence</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-stone-200 hover:text-amber-300 transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-stone-800">
                <div className="p-3 bg-stone-900 text-emerald-400 border border-stone-800 rounded-2xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">Operational Hours</span>
                  <p className="text-sm text-emerald-300 font-bold mt-0.5">
                    {BUSINESS_INFO.serviceHours}
                  </p>
                  <p className="text-xs text-stone-400">
                    Pre-booked pickups available at any hour (midnight / dawn).
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-stone-800 shadow-xl bg-stone-950">
              <div className="p-3 bg-stone-950 text-xs font-semibold text-stone-300 flex items-center justify-between border-b border-stone-800">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ooty, Nilgiris &bull; Service Area Map</span>
                </span>
                <span className="text-[11px] text-stone-400">Tamil Nadu, India</span>
              </div>
              <iframe
                title="Shaisha Tours & Travels - Ooty Nilgiris Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62544.75549045332!2d76.66249535805177!3d11.411858593442345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90"
              />
            </div>

          </div>

          {/* Booking Enquiry Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>

      </div>
    </section>
  );
};
