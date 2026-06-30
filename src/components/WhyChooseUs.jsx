import React from 'react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Safe Water',
      description: 'Your family deserves water free from heavy metals, dust, and rust. We restore purity.',
      bg: 'bg-blue-50',
      icon: (
        <svg className="w-8 h-8 text-[#0B4DAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Germ Free',
      description: 'We eliminate 99.9% of bacteria, viruses, and insect larvae using eco-safe sanitizing agents.',
      bg: 'bg-green-50',
      icon: (
        <svg className="w-8 h-8 text-[#8CCB00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Affordable',
      description: 'Honest upfront pricing with no hidden charges. Premium service at rates that fit your budget.',
      bg: 'bg-yellow-50',
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Experienced Team',
      description: 'Background-verified, professionally trained staff equipped with full safety gear.',
      bg: 'bg-purple-50',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Fast Service',
      description: 'On-time arrival and fast execution so that your daily routine faces minimal disruption.',
      bg: 'bg-red-50',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '100% Satisfaction',
      description: 'We check water pH levels and guarantee standard results. If not happy, we clean again!',
      bg: 'bg-teal-50',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-50 rounded-full opacity-30 filter blur-3xl"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Why Choose Us</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Pure, Sanitized Living
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We are more than standard scrub cleaners. We offer a professional sanitation solution engineered for Bangalore's water conditions.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white hover:bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`p-4 rounded-2xl w-fit ${point.bg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
