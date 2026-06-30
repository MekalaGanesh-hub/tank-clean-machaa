import React from 'react';
import { PHONE_RAW, WHATSAPP_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onBookClick }) {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl opacity-40 -mr-40 -mt-40 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-50 rounded-full filter blur-2xl opacity-50 -ml-20 -mb-20 z-0"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8CCB00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8CCB00]"></span>
              </span>
              <span className="text-xs font-semibold text-[#0B4DAB] uppercase tracking-wider">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Tank Clean <span className="text-[#0B4DAB] relative inline-block">
                Machaa!
                <svg className="absolute bottom-1 left-0 w-full h-2 text-[#8CCB00] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-700">
              Dirty Tank? We Clean Machaa!
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('hero.btn.book')}</span>
              </button>

              <a
                href={`${WHATSAPP_URL}?text=Hi%20Tank%20Clean%20Machaa!%20I'd%20like%20to%20book%20a%20tank%20cleaning.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                {/* WhatsApp Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.226h.003c5.502 0 9.99-4.479 9.99-9.987a9.96 9.96 0 0 0-9.991-9.991m6.09 13.98c-.25.707-1.447 1.3-1.983 1.385-.494.08-1.139.145-3.32-.74-2.793-1.13-4.6-3.965-4.737-4.153-.14-.188-1.12-1.485-1.12-2.83 0-1.348.705-2.012.955-2.28.25-.268.54-.336.722-.336.182 0 .365.002.522.01.163.008.38-.063.595.453.22.53.753 1.838.818 1.97.066.133.11.288.02.466-.09.18-.135.29-.27.447-.133.156-.28.35-.4.5-.133.167-.272.35-.117.618.155.267.69 1.13 1.48 1.834.72.64 1.326.837 1.636.966.31.13.49.108.673-.102.183-.21.785-.912.996-1.222.21-.31.42-.26.705-.152.285.11 1.808.853 2.118.998.31.144.516.216.59.34.075.127.075.734-.176 1.44" />
                </svg>
                <span>{t('hero.btn.call')}</span>
              </a>

              <a
                href={`tel:${PHONE_RAW}`}
                className="w-full sm:w-auto bg-white border-2 border-[#0B4DAB] hover:bg-slate-50 text-[#0B4DAB] font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Logo with premium 3D effects and animations */}
          <div className="flex justify-center items-center relative py-12 logo-3d-wrapper select-none">
            {/* Glowing active backdrop */}
            <div className="absolute w-[360px] h-[360px] rounded-full logo-glow-ring filter blur-2xl z-0"></div>

            {/* Orbiting 3D water droplets */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {/* Drop 1 */}
              <div className="logo-orbit-drop animate-[orbitDrop1_12s_linear_infinite]">
                <svg className="w-5 h-7 text-[#0B4DAB] filter drop-shadow-md" fill="currentColor" viewBox="0 0 20 28">
                  <path d="M10 0C10 0 20 12.44 20 18C20 23.52 15.52 28 10 28C4.48 28 0 23.52 0 18C0 12.44 10 0 10 0Z"/>
                </svg>
              </div>
              {/* Drop 2 */}
              <div className="logo-orbit-drop animate-[orbitDrop2_16s_linear_infinite]">
                <svg className="w-4 h-6 text-[#8CCB00] filter drop-shadow-md" fill="currentColor" viewBox="0 0 20 28">
                  <path d="M10 0C10 0 20 12.44 20 18C20 23.52 15.52 28 10 28C4.48 28 0 23.52 0 18C0 12.44 10 0 10 0Z"/>
                </svg>
              </div>
              {/* Drop 3 */}
              <div className="logo-orbit-drop animate-[orbitDrop3_20s_linear_infinite]">
                <svg className="w-3.5 h-5.5 text-sky-400 filter drop-shadow-md" fill="currentColor" viewBox="0 0 20 28">
                  <path d="M10 0C10 0 20 12.44 20 18C20 23.52 15.52 28 10 28C4.48 28 0 23.52 0 18C0 12.44 10 0 10 0Z"/>
                </svg>
              </div>
            </div>

            {/* 3D Main Container */}
            <div className="relative logo-3d max-w-full z-20">
              <img
                className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] object-contain mix-blend-multiply"
                src="/logo.png"
                alt="Tank Clean Machaa! Logo"
              />
              {/* Shimmer sweep effect overlay */}
              <div className="logo-shimmer"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
