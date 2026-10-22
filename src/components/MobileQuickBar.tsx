import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  const [showCallPicker, setShowCallPicker] = useState(false);

  return (
    <>
      {/* Call number picker popup */}
      {showCallPicker && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-stone-900 border border-emerald-700 rounded-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="font-serif text-sm font-bold text-white">Call Shaisha Tours Drivers</span>
              <button
                onClick={() => setShowCallPicker(false)}
                className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded bg-stone-800"
              >
                Close
              </button>
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-950 border border-emerald-800 text-stone-100 hover:bg-emerald-950/50"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-900/60 rounded-xl text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-mono font-bold">{BUSINESS_INFO.phone1}</div>
                  <div className="text-[10px] text-emerald-400">Primary Dispatch</div>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg">Call</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone2}`}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-950 border border-emerald-800 text-stone-100 hover:bg-emerald-950/50"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-900/60 rounded-xl text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-mono font-bold">{BUSINESS_INFO.phone2}</div>
                  <div className="text-[10px] text-stone-400">Secondary Inquiries</div>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg">Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Bottom Strip */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-emerald-900/60 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <button
            onClick={() => setShowCallPicker(true)}
            className="flex items-center justify-center gap-1.5 bg-stone-900 border border-emerald-700/60 hover:bg-stone-800 text-emerald-300 py-2.5 px-2 rounded-xl text-xs font-bold transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Call Driver</span>
          </button>

          {/* WhatsApp button */}
          <a
            href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent("Hello Shaisha Tours & Travels! I want to book a taxi in Ooty.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Book button */}
          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 py-2.5 px-2 rounded-xl text-xs font-extrabold transition-all active:scale-95 shadow-md"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book Cab</span>
          </button>
        </div>
      </div>
    </>
  );
};
