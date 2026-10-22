import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { VehicleGallery } from './components/VehicleGallery';
import { SightseeingSection } from './components/SightseeingSection';
import { RouteCalculator } from './components/RouteCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingForm } from './components/BookingForm';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Ooty Local Sightseeing Tour (Full Day)');

  const handleOpenBooking = (serviceOrVehicle?: string) => {
    if (serviceOrVehicle) {
      setSelectedServiceForModal(serviceOrVehicle);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-emerald-700 selection:text-white pb-14 md:pb-0">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking('Ooty Local Sightseeing Tour (Full Day)')} />
        
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />
        
        <VehicleGallery onSelectVehicle={(vehicle) => handleOpenBooking(`Booking for ${vehicle}`)} />
        
        <SightseeingSection onBookSightseeing={(pkg) => handleOpenBooking(pkg)} />
        
        <RouteCalculator onSelectRoute={(route) => handleOpenBooking(`Route Transfer: ${route}`)} />
        
        <WhyChooseUs />
        
        <AboutSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">
            <BookingForm
              initialService={selectedServiceForModal}
              onClose={handleCloseBooking}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
