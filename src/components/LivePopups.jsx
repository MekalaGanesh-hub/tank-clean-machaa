import React, { useState, useEffect } from 'react';

const mockBookings = [
  { name: 'Raj', area: 'BTM Layout', service: 'Overhead Tank Cleaning' },
  { name: 'Priya', area: 'HSR Layout', service: 'Underground Sump Cleaning' },
  { name: 'Arun', area: 'Koramangala', service: 'Tank Maintenance' },
  { name: 'Deepa', area: 'Whitefield', service: 'Overhead Tank Cleaning' },
  { name: 'Karthik', area: 'Jayanagar', service: 'Sump Cleaning' },
];

export default function LivePopups() {
  const [currentPopup, setCurrentPopup] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the cycle after a short initial delay
    const initialDelay = setTimeout(() => {
      showNextPopup();
    }, 5000); // 5 seconds before first popup

    return () => clearTimeout(initialDelay);
  }, []);

  const showNextPopup = () => {
    // Pick a random booking
    const randomBooking = mockBookings[Math.floor(Math.random() * mockBookings.length)];
    // Add random time like "2 mins ago"
    const randomMins = Math.floor(Math.random() * 15) + 1;
    
    setCurrentPopup({ ...randomBooking, time: `${randomMins} mins ago` });
    setIsVisible(true);

    // Hide it after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Wait another 10 to 25 seconds before showing the next one
      const nextDelay = Math.floor(Math.random() * 15000) + 10000;
      setTimeout(() => {
        showNextPopup();
      }, nextDelay);

    }, 6000);
  };

  if (!currentPopup) return null;

  return (
    <div 
      className={`fixed bottom-24 left-4 sm:bottom-8 sm:left-8 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-4 pr-12 border border-slate-100 flex items-start gap-4 max-w-sm relative overflow-hidden">
        {/* Decorative corner pulse */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#8CCB00]/10 rounded-full blur-xl"></div>
        
        {/* Close Button (Optional, can just let it auto-hide) */}
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#0B4DAB]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-slate-800 leading-snug">
            <span className="font-bold">{currentPopup.name}</span> from <span className="font-semibold">{currentPopup.area}</span> just booked an <span className="text-[#0B4DAB] font-bold">{currentPopup.service}</span>!
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="w-2 h-2 rounded-full bg-[#8CCB00] animate-pulse"></div>
            <span className="text-xs text-slate-500 font-medium">Verified Booking • {currentPopup.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
