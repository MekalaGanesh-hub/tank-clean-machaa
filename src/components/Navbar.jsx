import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onBookClick }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.about'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-glass shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo on Left */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <img className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 mix-blend-multiply" src="/logo.png" alt="Tank Clean Machaa!" />
              <span className="text-xl font-extrabold tracking-tight text-[#0B4DAB] hidden sm:block">
                Tank Clean <span className="text-[#8CCB00]">Machaa!</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-[#0B4DAB] font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Language Toggle & Book Now Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-slate-500 hover:text-[#0B4DAB] font-bold text-sm tracking-wide transition-colors duration-200"
            >
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </button>
            <button
              onClick={onBookClick}
              className="bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t('nav.book_now')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#0B4DAB] hover:bg-slate-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-white border-b border-slate-200' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:text-[#0B4DAB] hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-3 space-y-3">
            <button
              onClick={toggleLanguage}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl shadow-sm transition-all duration-200"
            >
              Translate to {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-200"
            >
              {t('nav.book_now')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
