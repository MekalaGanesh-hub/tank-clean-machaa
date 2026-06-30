import React, { useState } from 'react';

export default function PricingEstimator({ onBookClick }) {
  const [capacity, setCapacity] = useState(1000);
  const [tankType, setTankType] = useState('overhead');

  // Simple dynamic pricing logic
  const calculatePrice = () => {
    const basePrice = tankType === 'overhead' ? 500 : 800;
    const ratePerLiter = 0.3;
    let price = basePrice + (capacity * ratePerLiter);
    // Round to nearest 50
    return Math.round(price / 50) * 50;
  };

  const currentPrice = calculatePrice();

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden" id="estimator">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8CCB00]/5 rounded-full filter blur-3xl -mr-20 -mt-20 z-0 pointer-events-none"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
           <span className="text-xs font-bold text-[#0B4DAB] uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Instant Quote
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Price
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Adjust the sliders below to get a transparent, instant estimate for your tank cleaning.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Controls */}
            <div className="space-y-8">
              {/* Tank Type */}
              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-4">Select Tank Type</label>
                <div className="flex gap-4">
                  <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${tankType === 'overhead' ? 'border-[#0B4DAB] bg-blue-50 text-[#0B4DAB]' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>
                    <input type="radio" name="type" className="hidden" checked={tankType === 'overhead'} onChange={() => setTankType('overhead')} />
                    <div className="font-bold">Overhead Tank</div>
                  </label>
                  <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${tankType === 'sump' ? 'border-[#0B4DAB] bg-blue-50 text-[#0B4DAB]' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>
                    <input type="radio" name="type" className="hidden" checked={tankType === 'sump'} onChange={() => setTankType('sump')} />
                    <div className="font-bold">Underground Sump</div>
                  </label>
                </div>
              </div>

              {/* Capacity Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Tank Capacity</label>
                  <span className="text-2xl font-black text-[#0B4DAB]">{capacity.toLocaleString()} L</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="500"
                  value={capacity} 
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#8CCB00]"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium mt-2">
                  <span>500 Liters</span>
                  <span>10,000+ Liters</span>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md text-center flex flex-col justify-center items-center h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full filter blur-xl -mr-10 -mt-10"></div>
              
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2 relative z-10">Estimated Price</span>
              <div className="flex items-start justify-center text-[#0B4DAB] relative z-10">
                <span className="text-3xl font-bold mt-2">₹</span>
                <span className="text-6xl font-black tracking-tight">{currentPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium relative z-10">*Includes deep cleaning & UV sanitization</p>
              
              <button 
                onClick={() => onBookClick(tankType)}
                className="mt-8 w-full bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 relative z-10 flex justify-center items-center gap-2"
              >
                Book At This Price
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
