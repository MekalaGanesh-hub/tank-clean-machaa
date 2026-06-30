import React from 'react';
import { PHONE_RAW, PHONE, EMAIL, WHATSAPP_URL, ADDRESS, INSTAGRAM_URL } from '../constants';

export default function Footer({ onBookClick }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'Overhead Tank Cleaning', href: '#services' },
    { name: 'Underground Sump Cleaning', href: '#services' },
    { name: 'Drum Tank Cleaning', href: '#services' },
    { name: 'Disinfection & Sanitization', href: '#services' },
    { name: 'Apartment Bulk Packages', href: '#services' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2">
              <img className="h-12 w-auto object-contain bg-white p-1 rounded-lg" src="/logo.png" alt="Tank Clean Machaa!" />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Tank Clean <span className="text-[#8CCB00]">Machaa!</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Bangalore's premium professional water tank cleaning and sanitization experts. We use advanced technology to keep your water germ-free and pure.
            </p>
             {/* Social Icons */}
             <div className="flex items-center space-x-4 pt-2">
               <a href="https://www.facebook.com/tankcleanmachaa" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-[#8CCB00] rounded-lg transition-colors">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                 </svg>
               </a>
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-[#8CCB00] rounded-lg transition-colors">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                 </svg>
               </a>
             </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#8CCB00] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#8CCB00] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#8CCB00] mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#8CCB00] mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#8CCB00] mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tank Clean Machaa! All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
