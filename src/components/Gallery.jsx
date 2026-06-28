import React from 'react';

export default function Gallery() {
  const videoSrc = '/WhatsApp%20Video%202026-06-28%20at%207.52.34%20PM.mp4';

  const items = [
    {
      title: 'Plastic Overhead Tank Cleaning',
      location: 'HSR Layout, Bangalore',
      beforeImg: '/gallery/dirty_tank_1.png',
      afterImg: '/gallery/clean_tank_1.png',
      description: 'Removed 3 inches of thick mud sediment and sanitized using eco-friendly disinfection sprays.',
      highlights: ['Sludge Dewatered', 'Pressure Washed', 'Disinfected']
    },
    {
      title: 'Concrete Underground Sump Cleaning',
      location: 'Whitefield, Bangalore',
      beforeImg: '/gallery/dirty_tank_2.png',
      afterImg: '/gallery/clean_tank_2.png',
      description: 'Extracted sludge, treated concrete mold, and performed high-pressure wall washing with UV final treatment.',
      highlights: ['Heavy Sludge Removed', 'Wall Scrubbed', 'UV Treated']
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Before & After Gallery</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See the Difference Machaa!
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Real results — from dirty tanks to spotless, germ-free water.
          </p>
        </div>

        {/* Photo before/after */}
        <div className="space-y-16 mb-20">
          {items.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-red-100">
                    <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">Before Cleaning</span>
                    <img src={item.beforeImg} alt={`${item.title} - Before`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-green-100">
                    <span className="absolute top-4 left-4 z-10 bg-[#8CCB00] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">After Cleaning</span>
                    <img src={item.afterImg} alt={`${item.title} - After`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0B4DAB] text-xs font-semibold px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Real Video Section ─── */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
              ▶ Cleaning Video
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Watch Our Process
            </h2>
            <p className="mt-3 text-slate-500 text-base">
              Real project — same quality you get every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/logo.png"
              style={{ maxHeight: '70vh' }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 font-medium">
            Like what you see? Book now and get the same spotless results.
          </p>
        </div>

      </div>
    </section>
  );
}
