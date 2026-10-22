import React, { useState } from 'react';
import { Users, Briefcase, Wind, Check, MessageCircle, ArrowRight, Camera, X, Maximize2 } from 'lucide-react';
import { VEHICLES, REAL_FLEET_PHOTOS, BUSINESS_INFO, Vehicle, FleetPhoto } from '../data/travelData';

interface VehicleGalleryProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const VehicleGallery: React.FC<VehicleGalleryProps> = ({ onSelectVehicle }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'suv' | 'sedan' | 'coach'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<FleetPhoto | null>(null);

  const filteredVehicles = VEHICLES.filter((v) => {
    if (activeFilter === 'suv') return v.category.includes('SUV') || v.category.includes('MUV');
    if (activeFilter === 'sedan') return v.category.includes('Sedan');
    if (activeFilter === 'coach') return v.category.includes('Coach') || v.category.includes('Tempo');
    return true;
  });

  return (
    <section id="vehicles" className="py-20 sm:py-28 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Authentic Nilgiri Fleet</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Real Cabs in Ooty & Nilgiris
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              Every vehicle photographed here is owned and operated by Shaisha Tours & Travels in Ooty. Equipped with roof luggage carriers, comfortable interiors, and driven by experienced mountain chauffeurs.
            </p>
          </div>

          {/* Fleet Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Fleet' },
              { id: 'suv', label: 'SUVs & MUVs' },
              { id: 'sedan', label: 'Sedans' },
              { id: 'coach', label: 'Group Coaches' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                    : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredVehicles.map((vehicle: Vehicle) => (
            <div
              key={vehicle.id}
              className="bg-stone-900 border border-emerald-900/40 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image container preserving natural framing */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-950">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - Shaisha Tours & Travels Ooty taxi fleet`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                      {vehicle.badge}
                    </div>
                  )}

                  {/* Enlarge trigger */}
                  <button
                    onClick={() => {
                      const match = REAL_FLEET_PHOTOS.find((p) => p.image === vehicle.image);
                      if (match) setSelectedPhoto(match);
                      else setSelectedPhoto({ id: vehicle.id, title: vehicle.name, subtitle: vehicle.category, image: vehicle.image, tag: 'Our Fleet' });
                    }}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-stone-950/70 hover:bg-stone-900 border border-stone-700 text-stone-200 hover:text-amber-300 transition-colors"
                    title="View Full Uncropped Photo"
                    aria-label="Enlarge vehicle photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block">
                        {vehicle.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md">
                        {vehicle.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="p-6 pb-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-stone-950 rounded-2xl border border-stone-800 text-xs mb-4">
                    <div className="flex items-center gap-2 text-stone-300">
                      <Users className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-300">
                      <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-300 col-span-2 sm:col-span-1">
                      <Wind className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Chilled AC & Heater</span>
                    </div>
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed mb-4">
                    {vehicle.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {vehicle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 border-t border-stone-800/80 mt-auto flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectVehicle(vehicle.name)}
                  className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Book {vehicle.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl1}?text=${encodeURIComponent(
                    `Hello Shaisha Tours & Travels! I am interested in booking the *${vehicle.name}* for my Nilgiri trip.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto p-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                  title="WhatsApp Booking for this vehicle"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="sm:hidden">WhatsApp Direct</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated "Real Fleet in Action: Nilgiri Moments" Photo Gallery */}
        <div className="border-t border-stone-800 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Verified Photographic Evidence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Real Photos of Our Cabs & Ooty Viewpoints
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-2">
              Click on any photograph to examine the full uncropped image, vehicle registration numbers, and Nilgiri hill locations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {REAL_FLEET_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-400/60 cursor-pointer shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] bg-stone-950/80 backdrop-blur-sm text-amber-300 font-bold px-2 py-0.5 rounded-md border border-stone-700">
                      {photo.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <p className="text-xs font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-stone-400 line-clamp-1">
                      {photo.subtitle.replace('&bull;', '•')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Uncropped Photos */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl max-h-[92vh] bg-stone-950 border border-emerald-700/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors border border-stone-700"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-auto flex items-center justify-center p-2 bg-stone-950">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-stone-300">
                    {selectedPhoto.subtitle.replace('&bull;', '•')}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${BUSINESS_INFO.phone1}`}
                    className="flex-1 sm:flex-none text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2.5 rounded-xl border border-stone-700 text-center"
                  >
                    Call {BUSINESS_INFO.phone1}
                  </a>
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onSelectVehicle(selectedPhoto.title);
                    }}
                    className="flex-1 sm:flex-none text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 rounded-xl text-center"
                  >
                    Book This Cab
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
