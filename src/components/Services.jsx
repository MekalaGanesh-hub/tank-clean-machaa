import React, { useState } from 'react';

export default function Services({ onBookClick }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Dewatering",
      short: "Emptying Sump/Tank",
      desc: "We begin by draining all existing water from the tank using safe suction pumps, preparing the floor and walls for manual sludge extraction.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      )
    },
    {
      title: "2. Sludge Removal",
      short: "Extracting Mud & Sediment",
      desc: "Manual and mechanical extraction of heavy sludge, mud deposits, fungus, and settled dirt layers accumulated at the bottom of the structure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      )
    },
    {
      title: "3. High-Pressure Washing",
      short: "Deep Wall Scrubbing",
      desc: "We apply a high-pressure jet stream (up to 120 bar) to blast off stubborn stains, mold, algae growth, and mineral scaling from all interior walls and corners.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "4. Vacuum Cleaning",
      short: "Removing Dirty Residues",
      desc: "High-power industrial vacuum suction is used to extract all remaining dirty water and tiny loose sediment particles left over from the scrubbing process.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      title: "5. Anti-Bacterial Spray",
      short: "Sterilizing Inner Walls",
      desc: "We spray a premium, eco-safe, food-grade anti-bacterial solution uniformly over the entire surface area to neutralize hidden spores and bacteria.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: "6. UV Disinfection",
      short: "Final Purification Sweep",
      desc: "The final safeguard. A custom ultraviolet germicidal radiator is lowered into the tank to neutralize any floating pathogens or waterborne micro-critters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ];

  const services = [
    {
      id: 'overhead',
      title: 'Overhead Tank Cleaning',
      description: 'Thorough high-pressure washing, sludge removal, and scrubbing of PVC, plastic, and concrete overhead tanks, followed by UV disinfection.',
      price: '₹499 onwards',
      icon: (
        <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'underground',
      title: 'Underground Tank Cleaning',
      description: 'Complete dewatering, sludge extraction, and anti-bacterial scrub for concrete sumps. Essential for maintaining clean household water.',
      price: '₹1200 onwards',
      icon: (
        <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'drum',
      title: 'Drum Tank Cleaning',
      description: 'Quick and efficient sanitization of domestic water drums, small storage units, and blue utility drums. Removes sticky layers and mold.',
      price: '₹150 onwards',
      icon: (
        <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'disinfection',
      title: 'Disinfection & Sanitization',
      description: 'Advanced 6-stage sanitization process using eco-friendly chlorine compounds, anti-bacterial sprays, and ultraviolet disinfection.',
      price: 'Contact for Quote',
      icon: (
        <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'apartment',
      title: 'Apartment Packages',
      description: 'Bulk packages customized for apartment complexes and societies. Features comprehensive schedules for all sumps and overhead tanks.',
      price: '₹5000 onwards',
      icon: (
        <svg className="w-10 h-10 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Our Services</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Water Storage Cleaning
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We follow a scientific 6-stage cleaning process to ensure that your water is clean, pure, and free of deadly microorganisms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="p-4 bg-blue-50 rounded-2xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Starting from</span>
                  <span className="text-[#0B4DAB] font-extrabold text-lg">{service.price}</span>
                </div>
                <button
                  onClick={() => onBookClick(service.id)}
                  className="bg-slate-50 hover:bg-[#0B4DAB] text-[#0B4DAB] hover:text-white font-bold py-2.5 px-5 rounded-full border border-slate-200 hover:border-transparent transition-all duration-300 text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 6-Stage Process Walkthrough Visualizer */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
              Scientific Sanitization
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4">
              Our Multi-Stage Cleaning Walkthrough
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Select a stage below to see how Ganesh's team cleans your tank step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Step Selection Buttons (Left side on large, grid on mobile) */}
            <div className="lg:col-span-4 flex flex-col justify-start space-y-2">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex items-center space-x-3.5 ${
                    activeStep === idx
                      ? 'border-[#0B4DAB] bg-blue-50/50 shadow-sm'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                    activeStep === idx ? 'bg-[#0B4DAB] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="overflow-hidden">
                    <span className={`text-sm font-bold block ${activeStep === idx ? 'text-[#0B4DAB]' : 'text-slate-800'}`}>
                      {s.title.substring(3)}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">{s.short}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Description Display Card (Right side) */}
            <div className="lg:col-span-8 bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              {/* Background accent icon */}
              <div className="absolute right-0 bottom-0 text-[#0B4DAB]/5 transform translate-x-8 translate-y-8 scale-[2] pointer-events-none">
                {steps[activeStep].icon}
              </div>

              <div className="space-y-6 relative z-10">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-[#0B4DAB] border border-blue-50 animate-bounce">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-xs text-[#8CCB00] font-bold uppercase tracking-wider block mb-1">
                    Stage {activeStep + 1}
                  </span>
                  <h4 className="text-2xl font-extrabold text-slate-900 leading-tight">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </div>

              {/* Progress visualizer footer bar */}
              <div className="pt-8 border-t border-slate-200/50 mt-8 flex flex-wrap gap-4 items-center justify-between z-10">
                <div className="flex space-x-1.5">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeStep ? 'w-8 bg-[#0B4DAB]' : 'w-2.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="p-2 rounded-xl bg-[#0B4DAB] text-white hover:bg-blue-800 disabled:opacity-40 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
