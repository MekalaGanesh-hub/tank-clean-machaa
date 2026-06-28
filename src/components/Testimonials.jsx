import React, { useState } from 'react';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      name: 'Ganesh Reddy',
      role: 'Homeowner',
      location: 'HSR Layout, Bangalore',
      quote: 'Excellent service, very professional team. They cleaned our overhead tank and underground sump in less than two hours. The water tastes noticeably cleaner now. Highly recommended!',
      initials: 'GR',
      color: 'bg-blue-100 text-[#0B4DAB]',
      stars: 5,
    },
    {
      name: 'Priyanka Sharma',
      role: 'Apartment Committee President',
      location: 'Whitefield, Bangalore',
      quote: 'Booked the Apartment Package for our society of 48 flats. The team was extremely organized, had full safety gear, and the water test report after cleaning gave us complete peace of mind.',
      initials: 'PS',
      color: 'bg-green-100 text-green-700',
      stars: 5,
    },
    {
      name: 'Rahul Menon',
      role: 'Villa Owner',
      location: 'Indiranagar, Bangalore',
      quote: 'No mess left behind! They vacuumed out the sludge and treated the walls with sanitizers. Clean, germ-free water now. Solid job, Machaa! Will definitely book again.',
      initials: 'RM',
      color: 'bg-yellow-100 text-yellow-700',
      stars: 5,
    },
    {
      name: 'Sneha Krishnan',
      role: 'Homeowner',
      location: 'JP Nagar, Bangalore',
      quote: 'I was worried about the quality but the team arrived on time with all equipment. They showed me the sludge they removed — it was shocking how dirty it was. 100% worth it.',
      initials: 'SK',
      color: 'bg-purple-100 text-purple-700',
      stars: 5,
    },
    {
      name: 'Mohammed Iqbal',
      role: 'Property Manager',
      location: 'Koramangala, Bangalore',
      quote: 'Manages 3 buildings for us, all sumps cleaned in a single day. Punctual, professional, and priced fairly. Have already recommended to 4 other property managers in the area.',
      initials: 'MI',
      color: 'bg-teal-100 text-teal-700',
      stars: 5,
    },
    {
      name: 'Ananya Bose',
      role: 'New Homeowner',
      location: 'BTM Layout, Bangalore',
      quote: 'Moved into a new apartment and had no idea when the tank was last cleaned. Tank Clean Machaa! came next day, did a thorough job and even gave free advice on maintenance schedule.',
      initials: 'AB',
      color: 'bg-pink-100 text-pink-700',
      stars: 5,
    },
  ];

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-50 rounded-full opacity-35 filter blur-3xl"></div>
      <div className="absolute top-10 right-0 w-48 h-48 bg-blue-50 rounded-full opacity-30 filter blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Testimonials</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By Bengaluru Families
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Read how we have helped households, villa owners, and community managers achieve sparkling, clean water across the city.
          </p>

          {/* Aggregate rating badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-black text-slate-900">4.9 / 5</span>
            <span className="text-xs text-slate-500 font-medium">from 200+ verified bookings</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote icon */}
                <svg className="w-8 h-8 text-slate-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Review Text */}
                <p className="text-slate-600 italic leading-relaxed text-sm mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-full font-bold flex items-center justify-center text-sm ${rev.color} shrink-0 shadow-inner`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <span className="text-xs text-slate-500 block">{rev.role}</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium mt-1 inline-block">
                    {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {reviews.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#0B4DAB] text-slate-700 hover:text-[#0B4DAB] font-bold py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
            >
              {showAll ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"/></svg>
                  Show Less
                </>
              ) : (
                <>
                  Read More Reviews
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
