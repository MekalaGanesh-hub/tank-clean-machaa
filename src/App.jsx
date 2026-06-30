import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import PricingEstimator from './components/PricingEstimator';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Planner from './components/Planner';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LivePopups from './components/LivePopups';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [route, setRoute] = useState('main');

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash === '#admin' ? 'admin' : 'main');
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleBookClick = (serviceId = '') => {
    setSelectedService(serviceId);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (route === 'admin') {
    return <AdminDashboard onBack={() => { window.location.hash = ''; }} />;
  }

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Navigation header */}
      <Navbar onBookClick={() => handleBookClick()} />

      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero onBookClick={() => handleBookClick()} />

        {/* Trust / Stats Strip */}
        <StatsBar />

        {/* Services List */}
        <Services onBookClick={handleBookClick} />

        {/* Brand Highlights */}
        <WhyChooseUs />

        {/* Pricing Cards */}
        <Pricing onBookClick={handleBookClick} />

        {/* Interactive Pricing Estimator */}
        <PricingEstimator onBookClick={handleBookClick} />

        {/* Before/After Showcase */}
        <Gallery />

        {/* Reviews */}
        <Testimonials />

        {/* Knowledge Base Blog */}
        <Blog />

        {/* Service Coverage Areas */}
        <ServiceAreas />

        {/* Free Sump Maintenance & TDS Planner Tools */}
        <Planner onBook={handleBookClick} />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Scheduler */}
        <Booking selectedService={selectedService} />

        {/* Detailed Contacts & Form */}
        <Contact />
      </main>

      {/* Footer copyright and directory */}
      <Footer onBookClick={() => handleBookClick()} />

      {/* Instant dialer floating widgets */}
      <FloatingActions />

      {/* Social proof live booking notifications */}
      <LivePopups />

      {/* Admin link (hidden in footer) */}
      <a href="#admin" className="fixed bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-300 hover:text-slate-400 transition-colors z-30">
        ⚙️ Admin
      </a>
    </div>
    </LanguageProvider>
  );
}
