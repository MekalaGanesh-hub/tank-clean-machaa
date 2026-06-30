import React, { useState } from 'react';
import { PHONE_RAW, ADDRESS } from '../constants';

const areas = [
  'BTM Layout', 'HSR Layout', 'Koramangala', 'Indiranagar', 'JP Nagar',
  'Jayanagar', 'Whitefield', 'Electronic City', 'Marathahalli', 'Yelahanka',
  'Hebbal', 'Banashankari', 'Rajajinagar', 'Malleswaram', 'Nagarbhavi',
  'Uttarahalli', 'Bommanahalli', 'Sarjapur Road', 'Bellandur', 'KR Puram',
  'Basavanagudi', 'Vijayanagar', 'Madiwala', 'Bommasandra', 'Begur',
  'Banaswadi', 'Ramamurthy Nagar', 'Domlur', 'Ejipura', 'Chamrajpet',
];

export default function ServiceAreas() {
  const [hoveredArea, setHoveredArea] = useState(null);

  return (
    <section id="areas" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 filter blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50 rounded-full opacity-30 filter blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Service Coverage</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving All of Bangalore
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We cover all major localities across Bangalore. If your area is not listed, call us to confirm availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Area tags */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Areas We Service
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {areas.map((area, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setHoveredArea(i)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      hoveredArea === i
                        ? 'bg-[#0B4DAB] text-white border-[#0B4DAB] shadow-md scale-105'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0B4DAB]/40 hover:bg-blue-50'
                    }`}
                  >
                    📍 {area}
                  </button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                  Don't see your area? <strong className="text-slate-700">Call us</strong> — we likely cover it!
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="shrink-0 inline-flex items-center gap-2 bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Check Availability
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map + Stats */}
          <div className="lg:col-span-5 space-y-5">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md">
              <div className="px-6 pt-5 pb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8CCB00] animate-pulse inline-block" />
                  Our Location — BTM Layout, Bangalore
                </h3>
              </div>
              <div className="relative w-full" style={{ paddingTop: '62%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6019835025!2d77.60986087480847!3d12.913700187398853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c2fa28d8d%3A0x8d39f988e2f6c614!2sBTM%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tank Clean Machaa! Location — BTM Layout, Bangalore"
                />
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                   <p className="text-xs text-slate-500 font-medium">
                   📍 {ADDRESS}
                 </p>
                <a
                  href="https://maps.google.com/?q=BTM+Layout+1st+Stage+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0B4DAB] font-bold hover:underline mt-1 block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30+', label: 'Areas Covered', icon: '🗺️' },
                { value: '< 24hr', label: 'Avg Response', icon: '⚡' },
                { value: 'Mon–Sun', label: 'Working Days', icon: '📅' },
                { value: '7am–7pm', label: 'Working Hours', icon: '🕐' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="text-lg font-extrabold text-[#0B4DAB]">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
