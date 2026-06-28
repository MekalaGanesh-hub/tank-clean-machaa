import React, { useState } from 'react';

export default function Gallery() {
  const photoItems = [
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
            Real, unedited photos and professional cleaning videos showing the results of our multi-stage process.
          </p>
        </div>

        {/* Photo gallery grid */}
        <div className="space-y-16 mb-20">
          {photoItems.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-red-100">
                    <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">Before Cleaning</span>
                    <img src={item.beforeImg} alt={`${item.title} - Before`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  {/* After */}
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

        {/* ─── Video Gallery ─── */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
              ▶ Cleaning Videos
            </span>
            <p className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Watch Us Work — Live Proof!
            </p>
            <p className="mt-3 text-slate-500 text-base">
              Watch real professional sump & overhead tank cleaning jobs — from sludge to spotless!
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Cleaning Videos Coming Soon</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">We are currently filming our own professional tank cleaning process videos. Check back shortly to see our team in action!</p>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#8CCB00] bg-green-50 border border-green-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#8CCB00] rounded-full animate-pulse"></span>
              New videos uploading soon
            </span>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 font-medium">
            Real project videos will be added here once available.
          </p>
        </div>

      </div>
    </section>
  );
}
