import React, { useState } from 'react';
import { Calendar, Users, Car, MapPin, Phone, User, MessageCircle, Send, CheckCircle2, X } from 'lucide-react';
import { BUSINESS_INFO, VEHICLES } from '../data/travelData';

interface BookingFormProps {
  initialService?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = 'Ooty Local Sightseeing Tour',
  onClose,
  isModal = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: initialService,
    vehicle: 'Toyota Innova Crysta',
    pickupDate: '',
    pickupTime: '09:00 AM',
    pickupLocation: 'Ooty Hotel / Railway Station / Bus Stand',
    dropDestination: 'Ooty & Nilgiris Sightseeing',
    passengers: '4',
    luggageCount: '2 Bags',
    specialNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedWhatsAppNumber, setSelectedWhatsAppNumber] = useState(BUSINESS_INFO.phone1);

  const tripTypes = [
    'Ooty Local Sightseeing Tour (Full Day)',
    'Coonoor & Heritage Tea Estate Tour',
    'Pykara Waterfalls & Shooting Point Tour',
    'Kotagiri & Kodanad Viewpoint Tour',
    'Mudumalai Wildlife Safari Tour',
    'Avalanche & Emerald Lake Eco Circuit',
    'Coimbatore Airport / Railway Station Transfer',
    'Mysore to Ooty / Ooty to Mysore Transfer',
    'Bangalore to Ooty / Ooty to Bangalore Outstation',
    'Customized Multi-Day Nilgiri Package',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const message = `*NEW TAXI BOOKING ENQUIRY - SHAISHA TOURS & TRAVELS*
---------------------------------------
*Customer Name:* ${formData.name || 'Valued Guest'}
*Phone Number:* ${formData.phone}
*Trip / Package:* ${formData.serviceType}
*Preferred Vehicle:* ${formData.vehicle}
*Date of Travel:* ${formData.pickupDate || 'Flexible / Upcoming'}
*Pickup Time:* ${formData.pickupTime}
*Pickup Point:* ${formData.pickupLocation}
*Destination / Itinerary:* ${formData.dropDestination}
*Passengers:* ${formData.passengers} Adults/Children
*Luggage:* ${formData.luggageCount}
${formData.specialNotes ? `*Special Request:* ${formData.specialNotes}\n` : ''}---------------------------------------
Sent via Shaisha Tours & Travels Online Portal.`;

    const cleanNumber = selectedWhatsAppNumber.replace(/\D/g, '');
    const waUrl = `https://wa.me/91${cleanNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab for direct booking transmission
    window.open(waUrl, '_blank');
  };

  return (
    <div className={`bg-stone-900 border border-emerald-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative ${isModal ? 'max-h-[90vh] overflow-y-auto' : ''}`}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {submitted ? (
        <div className="py-8 text-center space-y-5">
          <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Enquiry Prepared & Ready!
          </h3>
          <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
            Your booking request has been formatted for WhatsApp dispatch. If the WhatsApp window did not open automatically, click the direct button below or call us immediately:
          </p>

          <div className="bg-stone-950 border border-stone-800 p-4 rounded-xl text-left max-w-md mx-auto text-xs text-stone-300 space-y-1">
            <div className="text-amber-400 font-bold mb-1">Enquiry Summary:</div>
            <div><strong>Package:</strong> {formData.serviceType}</div>
            <div><strong>Vehicle:</strong> {formData.vehicle}</div>
            <div><strong>Date:</strong> {formData.pickupDate || 'To be decided'} at {formData.pickupTime}</div>
            <div><strong>Name & Phone:</strong> {formData.name} ({formData.phone})</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/91${selectedWhatsAppNumber}?text=${encodeURIComponent(
                `Hi Shaisha Tours & Travels! Here is my booking enquiry:\nPackage: ${formData.serviceType}\nVehicle: ${formData.vehicle}\nDate: ${formData.pickupDate}\nName: ${formData.name} (${formData.phone})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp to {selectedWhatsAppNumber}</span>
            </a>
            <a
              href={`tel:${selectedWhatsAppNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-400/40 font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call {selectedWhatsAppNumber} Directly</span>
            </a>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-stone-400 hover:text-stone-200 underline pt-4"
          >
            Edit Booking Details
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Car className="w-3.5 h-3.5" />
              <span>Instant Cab Enquiry & Custom Tour Quote</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Book Your Ooty Taxi Ride
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1">
              Fill in your travel plan. We will immediately quote you the best transparent rates without hidden surcharges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Trip Type */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Tour / Taxi Service Type *
              </label>
              <div className="relative">
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  {tripTypes.map((t) => (
                    <option key={t} value={t} className="bg-stone-900 text-stone-100">
                      {t}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Preferred Vehicle */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Preferred Vehicle *
              </label>
              <div className="relative">
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name} className="bg-stone-900 text-stone-100">
                      {v.name} ({v.category} - {v.capacity})
                    </option>
                  ))}
                  <option value="Any Comfortable Cab Recommended" className="bg-stone-900 text-stone-100">
                    Recommend Best Vehicle for My Group
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Date of Journey *
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Pickup Time (Approx)
              </label>
              <input
                type="text"
                placeholder="e.g. 08:30 AM or Flight arrival time"
                value={formData.pickupTime}
                onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Pickup Location / Hotel *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Hotel name in Ooty / Coimbatore Airport / etc."
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Drop / Itinerary Destination */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Drop Location or Itinerary Destination *
              </label>
              <input
                type="text"
                placeholder="e.g. Ooty Sightseeing / Coonoor / Coimbatore"
                value={formData.dropDestination}
                onChange={(e) => setFormData({ ...formData, dropDestination: e.target.value })}
                className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                required
              />
            </div>

            {/* Passengers & Luggage */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Number of Passengers
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 4 Adults + 1 Child"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Customer Phone & WhatsApp dispatch number selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Your Contact Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Send Direct WhatsApp Inquiry To:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedWhatsAppNumber(BUSINESS_INFO.phone1)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedWhatsAppNumber === BUSINESS_INFO.phone1
                      ? 'bg-emerald-800 border-amber-400 text-white shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {BUSINESS_INFO.phone1} (Primary)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedWhatsAppNumber(BUSINESS_INFO.phone2)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedWhatsAppNumber === BUSINESS_INFO.phone2
                      ? 'bg-emerald-800 border-amber-400 text-white shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {BUSINESS_INFO.phone2} (Secondary)
                </button>
              </div>
            </div>
          </div>

          {/* Special Requests / Notes */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Special Notes / Specific Stops / Luggage Needs (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need baby seat, require pickup from Coimbatore airport at 6 AM, or visiting Doddabetta & Tea Factory."
              value={formData.specialNotes}
              onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
              className="w-full bg-stone-950 border border-stone-700 focus:border-amber-400 text-stone-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              <span className="text-emerald-400 font-semibold">&bull; 100% Free Quote</span> &bull; Instant WhatsApp Dispatch &bull; No upfront card required
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Open WhatsApp Enquiry</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
