import React, { useState } from 'react';
import { PHONE_RAW, EMAIL, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    address: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.address) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setSubmitting(true);

    const msg = encodeURIComponent(
      `*New Inquiry — Tank Clean Machaa!*\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.serviceType}\n` +
      `Address: ${formData.address}\n` +
      `Message: ${formData.message || 'None'}\n\n` +
      `Please respond to this inquiry.`
    );
    window.location.href = `${WHATSAPP_URL}?text=${msg}`;

    setStatus({
      type: 'success',
      text: 'Your inquiry has been sent via WhatsApp!'
    });
    setFormData({
      name: '',
      phone: '',
      serviceType: '',
      address: '',
      message: ''
    });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Contact Us</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Cleaning Experts
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about pricing, bulk booking, or our sanitation products? Reach out, and we will clean your doubts!
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Info</h3>
            
            {/* Phone Card */}
            <a href={`tel:${PHONE_RAW}`} className="block p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 shadow-sm transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-blue-100 text-[#0B4DAB] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase tracking-wide">Call Now</span>
                  <span className="text-slate-900 font-bold text-base">+91 90145 38584</span>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href={`${WHATSAPP_URL}?text=Hi%20Tank%20Clean%20Machaa!%20I'd%20like%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 shadow-sm transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-green-100 text-[#8CCB00] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.226h.003c5.502 0 9.99-4.479 9.99-9.987a9.96 9.96 0 0 0-9.991-9.991m6.09 13.98c-.25.707-1.447 1.3-1.983 1.385-.494.08-1.139.145-3.32-.74-2.793-1.13-4.6-3.965-4.737-4.153-.14-.188-1.12-1.485-1.12-2.83 0-1.348.705-2.012.955-2.28.25-.268.54-.336.722-.336.182 0 .365.002.522.01.163.008.38-.063.595.453.22.53.753 1.838.818 1.97.066.133.11.288.02.466-.09.18-.135.29-.27.447-.133.156-.28.35-.4.5-.133.167-.272.35-.117.618.155.267.69 1.13 1.48 1.834.72.64 1.326.837 1.636.966.31.13.49.108.673-.102.183-.21.785-.912.996-1.222.21-.31.42-.26.705-.152.285.11 1.808.853 2.118.998.31.144.516.216.59.34.075.127.075.734-.176 1.44" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase tracking-wide">WhatsApp</span>
                  <span className="text-slate-900 font-bold text-base">+91 90145 38584</span>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-pink-200 shadow-sm transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-pink-100 text-pink-600 rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase tracking-wide">Instagram</span>
                  <span className="text-slate-900 font-bold text-base">{INSTAGRAM_HANDLE}</span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a href={`mailto:${EMAIL}`} className="block p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 shadow-sm transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-blue-100 text-[#0B4DAB] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase tracking-wide">Email</span>
                   <span className="text-slate-900 font-bold text-base">{EMAIL}</span>
                </div>
              </div>
            </a>

            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5832707641214!2d77.60533567507567!3d12.934484987373892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a51988888b%3A0x606555198888!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
            
            {status.text && (
              <div className={`p-4 rounded-xl mb-6 text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB] focus:border-transparent transition-all"
                    placeholder="Ganesh"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB] focus:border-transparent transition-all"
                    placeholder="90145 38584"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-service" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Service Type *</label>
                <select
                  id="form-service"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="overhead">Overhead Tank Cleaning</option>
                  <option value="underground">Underground Tank Cleaning</option>
                  <option value="drum">Drum Tank Cleaning</option>
                  <option value="disinfection">Disinfection & Sanitization</option>
                  <option value="apartment">Apartment Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="form-address" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Address *</label>
                <input
                  type="text"
                  id="form-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB] focus:border-transparent transition-all"
                  placeholder="Street, Area, Building Name, Bangalore"
                  required
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Message (Optional)</label>
                <textarea
                  id="form-message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB] focus:border-transparent transition-all"
                  placeholder="Any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Send Inquiry</span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
