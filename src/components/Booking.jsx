import React, { useState, useEffect } from 'react';
import { PHONE_RAW, PHONE, EMAIL, ADDRESS, OWNER, WHATSAPP_URL, API_BOOKING_ENDPOINT } from '../constants';

const SERVICE_LABELS = {
  overhead: 'Overhead Tank Cleaning',
  underground: 'Underground Tank Cleaning',
  drum: 'Drum Tank Cleaning',
  disinfection: 'Disinfection & Sanitization',
  apartment: 'Apartment Package',
};

const SIZE_LABELS = {
  small: 'Below 500 Litres',
  medium: '500L – 1,000 Litres',
  large: '1,000L – 3,000 Litres',
  xlarge: '3,000L – 5,000 Litres',
  commercial: 'Above 5,000 Litres',
};

export default function Booking({ selectedService, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serviceType: '',
    tankSize: '',
    address: '',
    date: ''
  });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppNotification = (data) => {
    const svcLabel = SERVICE_LABELS[data.serviceType] || data.serviceType;
    const sizeLabel = SIZE_LABELS[data.tankSize] || data.tankSize;
    const msg = encodeURIComponent(
      `🚿 *NEW BOOKING — Tank Clean Machaa!*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📱 *Mobile:* ${data.mobile}\n` +
      `🛠 *Service:* ${svcLabel}\n` +
      `🪣 *Tank Size:* ${sizeLabel}\n` +
      `📍 *Address:* ${data.address}\n` +
      `📅 *Date:* ${data.date}\n\n` +
      `Please confirm the slot and call the customer back. Machaa! 💧`
    );
    window.open(`${WHATSAPP_URL}?text=${msg}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.serviceType || !formData.tankSize || !formData.address || !formData.date) {
      setStatus('error');
      return;
    }
    setSubmitting(true);
    
    try {
      const response = await fetch(API_BOOKING_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      setStatus('success');
    } catch (error) {
      console.error("Booking error:", error);
      setStatus('api-error');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', mobile: '', serviceType: '', tankSize: '', address: '', date: '' });
    setStatus('');
    if (onClose) onClose();
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-12">

          {/* Left panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B4DAB] to-blue-900 text-white p-8 sm:p-12 flex flex-col justify-between relative">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full filter blur-xl -mr-20 -mb-20"></div>
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8CCB00] bg-[#8CCB00]/10 px-3.5 py-1.5 rounded-full border border-[#8CCB00]/20">
                Book in 60 seconds
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight">Schedule Your Cleaning</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Enter your details to reserve a professional water tank sanitization team. No advance payment required. Pay only after you are 100% satisfied!
              </p>
              <div className="space-y-5 pt-4">
                {[
                  'Provide tank size & address',
                  'Submit — Ganesh gets WhatsApp alert 📲',
                  'Ganesh calls you to confirm slot!'
                ].map((s, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white border border-white/20 font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-sm font-semibold">{s}</span>
                  </div>
                ))}
              </div>
              {/* Alert badge */}
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 border border-white/15">
                <svg className="w-7 h-7 shrink-0 text-[#8CCB00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs text-blue-100 font-medium">Booking sent directly to our team</p>
                  <p className="text-white text-xs font-bold">Ganesh replies within minutes!</p>
                </div>
              </div>
            </div>
            <div className="pt-12 text-xs text-blue-200 border-t border-white/10 flex justify-between items-center">
              <span>Need help booking?</span>
              <a href={`tel:${PHONE_RAW}`} className="text-[#8CCB00] font-bold hover:underline">Call: {PHONE}</a>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-10 space-y-5">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-[#8CCB00] shadow-lg">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">Booking Sent! 🎉</h4>
                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                  Your booking for <span className="font-bold text-slate-900">{formData.date}</span> has been successfully sent to <strong>Ganesh</strong>.
                  He will call you back shortly to confirm your slot!
                </p>
                <div className="w-full max-w-sm bg-[#8CCB00]/10 border border-[#8CCB00]/30 rounded-2xl px-5 py-4 text-left space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8CCB00] text-lg">✅</span>
                    <span className="text-xs font-black text-slate-700 uppercase tracking-wide">Booking Confirmed</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">Booking details delivered instantly to our team.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-sm">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Ganesh Now
                  </a>
                  <a
                     href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Ganesh! I just submitted a booking on your website. Please confirm my slot!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3 px-5 rounded-xl shadow-md transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.362a9.92 9.92 0 004.808 1.226h.003c5.502 0 9.99-4.479 9.99-9.987A9.96 9.96 0 0012.012 2zm6.09 13.98c-.25.707-1.447 1.3-1.983 1.385-.494.08-1.139.145-3.32-.74-2.793-1.13-4.6-3.965-4.737-4.153-.14-.188-1.12-1.485-1.12-2.83 0-1.348.705-2.012.955-2.28.25-.268.54-.336.722-.336.182 0 .365.002.522.01.163.008.38-.063.595.453.22.53.753 1.838.818 1.97.066.133.11.288.02.466-.09.18-.135.29-.27.447-.133.156-.28.35-.4.5-.133.167-.272.35-.117.618.155.267.69 1.13 1.48 1.834.72.64 1.326.837 1.636.966.31.13.49.108.673-.102.183-.21.785-.912.996-1.222.21-.31.42-.26.705-.152.285.11 1.808.853 2.118.998.31.144.516.216.59.34.075.127.075.734-.176 1.44z"/>
                    </svg>
                    WhatsApp Ganesh
                  </a>
                </div>
                <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 text-xs font-semibold underline mt-2">
                  Book Another Slot
                </button>
              </div>
            ) : (
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">Enter Details</h4>
                {status === 'error' && (
                  <div className="p-4 rounded-xl mb-6 text-sm font-medium bg-red-50 text-red-800 border border-red-200">
                    Please fill out all required fields to register slot.
                  </div>
                )}
                {status === 'api-error' && (
                  <div className="p-4 rounded-xl mb-6 text-sm font-medium bg-red-50 text-red-800 border border-red-200">
                    Failed to submit booking. Please try again or use WhatsApp/Call.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="book-name" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Full Name *</label>
                      <input type="text" id="book-name" name="name" value={formData.name} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]"
                        placeholder="Ganesh" required />
                    </div>
                    <div>
                      <label htmlFor="book-mobile" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Mobile Number *</label>
                      <input type="tel" id="book-mobile" name="mobile" value={formData.mobile} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]"
                        placeholder="90145 38584" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="book-service" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Service Type *</label>
                      <select id="book-service" name="serviceType" value={formData.serviceType} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]" required>
                        <option value="">Select Service</option>
                        <option value="overhead">Overhead Tank Cleaning</option>
                        <option value="underground">Underground Tank Cleaning</option>
                        <option value="drum">Drum Tank Cleaning</option>
                        <option value="disinfection">Disinfection & Sanitization</option>
                        <option value="apartment">Apartment Package</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="book-size" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Tank Size *</label>
                      <select id="book-size" name="tankSize" value={formData.tankSize} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]" required>
                        <option value="">Select Capacity</option>
                        <option value="small">Below 500 Litres</option>
                        <option value="medium">500L - 1,000 Litres</option>
                        <option value="large">1,000L - 3,000 Litres</option>
                        <option value="xlarge">3,000L - 5,000 Litres</option>
                        <option value="commercial">Above 5,000 Litres</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="book-address" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Service Address *</label>
                    <input type="text" id="book-address" name="address" value={formData.address} onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]"
                      placeholder="Door No, Street Name, Area, landmark, Bangalore" required />
                  </div>
                  <div>
                    <label htmlFor="book-date" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Preferred Service Date *</label>
                    <input type="date" id="book-date" name="date" value={formData.date} onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]" required />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Booking...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Submit Booking
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">
                    ✅ No advance payment • Ganesh calls back within 15 mins
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
