import React, { useState } from 'react';
import { PHONE_RAW, WHATSAPP_URL } from '../constants';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How often should I get my water tank cleaned?',
      answer: 'For standard municipal and borewell water in Bangalore, we highly recommend getting your tanks cleaned once every 6 months. Regular cleaning prevents mud deposits, algae growth, and biological contaminants from entering your tap water. Borewell users should clean more frequently — every 4 months.'
    },
    {
      question: 'What is the multi-stage cleaning process you use?',
      answer: 'We use a scientific multi-stage sanitization process: 1) High-pressure dewatering to empty the tank, 2) Complete sludge removal, 3) High-pressure wall scrubbing (up to 120 bar), 4) Vacuum suction of remaining residues, 5) Anti-bacterial sanitation spray, and 6) UV germicidal irradiation for final purification.'
    },
    {
      question: 'How long does the tank cleaning process take?',
      answer: 'A standard overhead plastic tank (500L - 1000L) takes about 45 to 60 minutes. A concrete underground sump (1,000L - 3,000L) takes around 1.5 to 2 hours depending on the sludge thickness. Apartment bulk packages vary based on the number of structures.'
    },
    {
      question: 'Do you charge extra for travel or materials?',
      answer: 'No, all prices listed are inclusive of travel within Bangalore and all cleaning chemicals/materials. The price quoted is the price you pay, with no hidden fees. For areas outside central Bangalore, a small nominal travel charge may apply — we will inform you upfront.'
    },
    {
      question: 'Is the sanitization agent safe for drinking water?',
      answer: 'Yes, we use industry-standard, food-grade biodegradable sanitizing agents approved for potable water storage. After cleaning, the tank is thoroughly rinsed, leaving the water completely safe, odor-free, and clean for household use. We can also share the safety data sheet on request.'
    },
    {
      question: 'Do I need to be at home during the cleaning?',
      answer: 'Yes, we recommend someone is present to provide access to the tank area and to confirm the final clean with our team. However, for established clients with prior access arrangements, we can coordinate with your watchman or property manager.'
    },
    {
      question: 'What areas do you service in Bangalore?',
      answer: 'We cover all major areas of Bangalore including BTM Layout, HSR Layout, Koramangala, Indiranagar, JP Nagar, Jayanagar, Whitefield, Electronic City, Marathahalli, Yelahanka, Hebbal, Banashankari, and more. Call us to confirm availability for your exact location.'
    },
    {
      question: 'Do you provide a service report or certificate after cleaning?',
      answer: 'Yes, for Apartment Packages and commercial clients, we provide a detailed service completion report including before/after photos, chemicals used, and the date. Individual residential customers can request a basic service summary as well.'
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Frequently Asked Questions</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Clean Doubts!
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our process, pricing, and service coverage.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'border-[#0B4DAB]/30 bg-blue-50/30' : 'border-slate-100 bg-slate-50'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-800 hover:text-[#0B4DAB] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 shrink-0 text-[#0B4DAB] ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100 border-t border-[#0B4DAB]/10' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 py-5 text-slate-600 text-sm sm:text-base leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 bg-gradient-to-br from-[#0B4DAB] to-blue-800 rounded-3xl p-8 text-center text-white space-y-4 shadow-xl">
          <h3 className="text-2xl font-extrabold">Still have more questions?</h3>
          <p className="text-blue-100 text-sm max-w-md mx-auto">
            Our team is available 7 days a week. Give us a call or send a WhatsApp message and we'll get back to you in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B4DAB] font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href={`${WHATSAPP_URL}?text=Hi%20Tank%20Clean%20Machaa!%20I%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#8CCB00] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#78ad00] transition-colors shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.362a9.92 9.92 0 004.808 1.226h.003c5.502 0 9.99-4.479 9.99-9.987A9.96 9.96 0 0012.012 2z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
