import React, { useState, useEffect } from 'react';
import { PHONE_RAW, WHATSAPP_URL } from '../constants';

export default function FloatingActions() {
  const [feedIdx, setFeedIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const feeds = [
    { loc: "BTM Layout, 2nd Stage", job: "Overhead PVC Tank (1,000L) cleaned", time: "12 mins ago" },
    { loc: "HSR Layout, Sector 3", job: "Underground Concrete Sump (4,500L) disinfected", time: "24 mins ago" },
    { loc: "Jayanagar, 4th Block", job: "3x Domestic Water Drums sanitized", time: "48 mins ago" },
    { loc: "Koramangala, 5th Block", job: "Apartment Bulk Sump (12,000L) cleaned", time: "1 hour ago" },
    { loc: "JP Nagar, Phase 2", job: "Overhead Tank UV Disinfection completed", time: "2 hours ago" },
    { loc: "Indiranagar, 100ft Rd", job: "Concrete Sump Dewatering & Wash completed", time: "3 hours ago" },
    { loc: "Whitefield, near Hope Farm", job: "Society Overhead Tanks bulk-sanitized", time: "4 hours ago" }
  ];

  useEffect(() => {
    // Notification cycle
    const showTimer = setTimeout(() => setVisible(true), 2500);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setFeedIdx((prev) => (prev + 1) % feeds.length);
        setVisible(true);
      }, 600);
    }, 7000);

    // Scroll progress & back-to-top
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#0B4DAB] to-[#8CCB00] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Dynamic Bangalore Live Cleanings Feed (Social Proof) */}
      <div className={`fixed bottom-6 left-6 z-40 max-w-sm transition-all duration-500 transform ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-md text-white px-5 py-4 rounded-2xl shadow-xl border border-white/10 flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-full bg-[#8CCB00]/10 flex items-center justify-center text-[#8CCB00] shrink-0 border border-[#8CCB00]/20 relative">
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-slate-900 animate-ping"></span>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-slate-900"></span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div className="overflow-hidden">
            <span className="text-[10px] text-[#8CCB00] font-black uppercase tracking-widest block">✦ Recent Clean in Bangalore</span>
            <span className="text-xs font-bold text-white block mt-0.5 leading-tight truncate">{feeds[feedIdx].job}</span>
            <div className="flex items-center justify-between mt-1 text-[10px] text-slate-400 font-medium">
              <span className="truncate">📍 {feeds[feedIdx].loc}</span>
              <span className="shrink-0 ml-3">{feeds[feedIdx].time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Scroll to Top Button (appears after scrolling) */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg border border-slate-200 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex items-center justify-center w-14 h-14 bg-[#0B4DAB] hover:bg-blue-800 text-white rounded-full shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 group relative"
          aria-label="Call Us"
        >
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Call: +91 90145 38584
          </span>
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`${WHATSAPP_URL}?text=Hi%20Tank%20Clean%20Machaa!%20I%20want%20to%20book%20a%20tank%20cleaning%20slot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#8CCB00] hover:bg-[#78ad00] text-white rounded-full shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 group relative"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            WhatsApp Machaa!
          </span>
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full border-2 border-[#8CCB00] animate-ping opacity-40"></span>
          <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.226h.003c5.502 0 9.99-4.479 9.99-9.987a9.96 9.96 0 0 0-9.991-9.991m6.09 13.98c-.25.707-1.447 1.3-1.983 1.385-.494.08-1.139.145-3.32-.74-2.793-1.13-4.6-3.965-4.737-4.153-.14-.188-1.12-1.485-1.12-2.83 0-1.348.705-2.012.955-2.28.25-.268.54-.336.722-.336.182 0 .365.002.522.01.163.008.38-.063.595.453.22.53.753 1.838.818 1.97.066.133.11.288.02.466-.09.18-.135.29-.27.447-.133.156-.28.35-.4.5-.133.167-.272.35-.117.618.155.267.69 1.13 1.48 1.834.72.64 1.326.837 1.636.966.31.13.49.108.673-.102.183-.21.785-.912.996-1.222.21-.31.42-.26.705-.152.285.11 1.808.853 2.118.998.31.144.516.216.59.34.075.127.075.734-.176 1.44" />
          </svg>
        </a>
      </div>
    </>
  );
}
