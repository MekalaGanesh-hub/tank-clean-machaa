import React, { useState } from 'react';

export default function Pricing({ onBookClick }) {
  const [tankType, setTankType] = useState('overhead');
  const [capacity, setCapacity] = useState(1000);
  const [numTanks, setNumTanks] = useState(1);

  const calculatePrice = () => {
    if (tankType === 'drum') {
      return 150 * numTanks;
    }
    const rate = tankType === 'overhead' ? 0.50 : 0.80;
    const minPrice = tankType === 'overhead' ? 499 : 1200;
    const calculated = capacity * rate * numTanks;
    return Math.round(Math.max(minPrice, calculated));
  };

  const plans = [
    {
      id: 'drum',
      name: 'Drum Cleaning',
      price: '150',
      badge: 'Basic',
      accent: 'border-slate-200',
      buttonClass: 'bg-slate-100 hover:bg-slate-200 text-slate-800',
      features: [
        'Sediment & mud removal',
        'Hand scrubbing',
        'Basic rinsing & drying',
        'Suitable for 100L-500L drums',
        'Takes ~15-20 minutes'
      ]
    },
    {
      id: 'overhead',
      name: 'Overhead Tank',
      price: '499',
      badge: 'Popular',
      popular: true,
      accent: 'border-[#0B4DAB] ring-4 ring-[#0B4DAB]/10',
      buttonClass: 'bg-[#0B4DAB] hover:bg-blue-800 text-white shadow-md',
      features: [
        'High-pressure washing',
        'Sludge & wall scrubbing',
        'Vacuum dewatering',
        'Chlorine sanitization',
        '100% germ-free treatment',
        'Suitable for plastic/PVC tanks'
      ]
    },
    {
      id: 'underground',
      name: 'Underground Tank',
      price: '1,200',
      badge: 'Essential',
      accent: 'border-slate-200',
      buttonClass: 'bg-slate-900 hover:bg-black text-white',
      features: [
        'Full sump dewatering',
        'Heavy sludge extraction',
        'Anti-bacterial scrub',
        'Foul odor elimination',
        'Safety harness-trained crew',
        'Concrete & brick sumps'
      ]
    },
    {
      id: 'apartment',
      name: 'Apartment Package',
      price: '5,000',
      badge: 'Best Value',
      accent: 'border-[#8CCB00] ring-4 ring-[#8CCB00]/10',
      buttonClass: 'bg-[#8CCB00] hover:bg-[#78ad00] text-white shadow-md',
      features: [
        'Multiple sumps & overhead tanks',
        'Pre-booking consultation',
        'Advanced industrial pressure wash',
        'Water testing (pH & TDS check)',
        'Full disinfection & UV sanitization',
        'Priority scheduling & service report'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Pricing Plans</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing, No Hidden Costs
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Choose a package that fits your home, apartment complex, or corporate building. All rates are inclusive of cleaning materials.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${plan.accent}`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#0B4DAB] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  Recommended
                </span>
              )}
              
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#0B4DAB] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{plan.badge}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-4">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-slate-900">
                    <span className="text-3xl font-extrabold tracking-tight">₹</span>
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-sm font-semibold text-slate-500">onwards</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <svg className="h-5 w-5 text-[#8CCB00] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <button
                onClick={() => onBookClick(plan.id)}
                className={`w-full font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 ${plan.buttonClass}`}
              >
                Book {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Estimator Calculator (Premium Feature) */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-md mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">Premium Feature</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-3">Instant Price Calculator</h3>
            <p className="text-slate-500 text-sm mt-1">Get an instant quote tailored to your exact storage needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              {/* Type selector */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Storage Tank Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => { setTankType('overhead'); if (capacity < 500) setCapacity(1000); }}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${tankType === 'overhead' ? 'border-[#0B4DAB] bg-blue-50/50 text-[#0B4DAB]' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Overhead Tank
                  </button>
                  <button
                    onClick={() => { setTankType('underground'); if (capacity < 1000) setCapacity(2000); }}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${tankType === 'underground' ? 'border-[#0B4DAB] bg-blue-50/50 text-[#0B4DAB]' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Underground Sump
                  </button>
                  <button
                    onClick={() => setTankType('drum')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${tankType === 'drum' ? 'border-[#0B4DAB] bg-blue-50/50 text-[#0B4DAB]' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Drum Cleaning
                  </button>
                </div>
              </div>

              {/* Litre capacity slider (hidden if drum is selected) */}
              {tankType !== 'drum' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Capacity (Litres)</label>
                    <span className="text-sm font-bold text-[#0B4DAB] bg-blue-50 px-2 py-0.5 rounded-lg">{capacity.toLocaleString()} Litres</span>
                  </div>
                  <input
                    type="range"
                    min={tankType === 'overhead' ? 500 : 1000}
                    max={tankType === 'overhead' ? 5000 : 10000}
                    step="500"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0B4DAB]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                    <span>Min: {tankType === 'overhead' ? '500L' : '1,000L'}</span>
                    <span>Max: {tankType === 'overhead' ? '5,000L' : '10,000L'}</span>
                  </div>
                </div>
              )}

              {/* Number of units */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{tankType === 'drum' ? 'Number of Drums' : 'Number of Tanks'}</label>
                  <span className="text-sm font-bold text-[#0B4DAB] bg-blue-50 px-2 py-0.5 rounded-lg">{numTanks} {numTanks === 1 ? (tankType === 'drum' ? 'Drum' : 'Tank') : (tankType === 'drum' ? 'Drums' : 'Tanks')}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={numTanks}
                  onChange={(e) => setNumTanks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0B4DAB]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>1 Unit</span>
                  <span>10 Units</span>
                </div>
              </div>
            </div>

            {/* Calculations display */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-4">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Estimated Total</span>
              <div className="text-slate-900">
                <span className="text-2xl font-extrabold">₹</span>
                <span className="text-5xl font-extrabold tracking-tight text-[#0B4DAB]">{calculatePrice().toLocaleString()}</span>
                <span className="text-xs text-slate-500 font-semibold block mt-1">all inclusive price</span>
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                {tankType === 'drum' ? `Flat ₹150 per drum.` : `Rate: ${tankType === 'overhead' ? '₹0.50' : '₹0.80'} per Litre (minimum ₹${tankType === 'overhead' ? '499' : '1200'} applies).`}
              </p>
              <button
                onClick={() => onBookClick(tankType)}
                className="w-full bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-200 text-xs"
              >
                Schedule Sump Cleaning
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Water Health Diagnostic Quiz (Advanced Feature) */}
        <WaterHealthQuiz onBook={onBookClick} />

      </div>
    </section>
  );
}

/* ── WATER HEALTH QUIZ INNER COMPONENT ── */
function WaterHealthQuiz({ onBook }) {
  const [step, setStep] = useState(0); // 0: start, 1: water type, 2: symptoms, 3: last clean, 4: results
  const [waterSource, setWaterSource] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [lastCleaned, setLastCleaned] = useState('');

  const toggleSymptom = (s) => {
    if (symptoms.includes(s)) {
      setSymptoms(symptoms.filter(item => item !== s));
    } else {
      setSymptoms([...symptoms, s]);
    }
  };

  const getDiagnostics = () => {
    let score = 0;
    if (waterSource === 'borewell') score += 3;
    if (waterSource === 'mixed') score += 2;
    if (waterSource === 'municipal') score += 1;

    score += symptoms.length * 1.5;

    if (lastCleaned === 'never' || lastCleaned === 'over-year') score += 3;
    if (lastCleaned === '6-12-months') score += 1.5;
    if (lastCleaned === 'under-6') score += 0.5;

    if (score >= 6) {
      return {
        level: 'Critical Risk 🚨',
        color: 'text-red-600 bg-red-50 border-red-200',
        advice: 'Your water storage shows high vulnerability to microbial growth, heavy scaling, or sediment blockage. Immediate disinfection and cleaning is highly recommended.'
      };
    } else if (score >= 3.5) {
      return {
        level: 'Moderate Contamination Risk ⚠️',
        color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
        advice: 'Signs of dust deposits, minor scaling, or bacterial stagnation. A standard 6-stage sanitization sweep is recommended to protect your plumbing and household health.'
      };
    } else {
      return {
        level: 'Low Risk / Maintenance Needed ✅',
        color: 'text-green-600 bg-green-50 border-green-200',
        advice: 'Your tank is in relatively healthy shape. We suggest a standard maintenance cleaning every 6 months to maintain this safety standard.'
      };
    }
  };

  const results = getDiagnostics();

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative clean water background wave */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      {step === 0 && (
        <div className="text-center space-y-6 relative z-10 py-4">
          <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-[#8CCB00]/10 border border-[#8CCB00]/20 px-3.5 py-1.5 rounded-full">
            ✦ Water Quality Audit
          </span>
          <h3 className="text-3xl font-extrabold tracking-tight">
            Water Tank Health Diagnostic Quiz
          </h3>
          <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
            Answer 3 quick questions about your home water utility to diagnose scaling, sediment depth, and bacterial safety levels instantly.
          </p>
          <button
            onClick={() => setStep(1)}
            className="bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Start Diagnostic Audit</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6 relative z-10">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-300">
            <span>Question 1 of 3</span>
            <span>Water Utility Source</span>
          </div>
          <h4 className="text-2xl font-bold">What is the primary source of water in your building?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { id: 'municipal', title: 'Kaveri/Municipal Water', desc: 'Chlorinated, but carries supply-line mud & rust' },
              { id: 'borewell', title: 'Borewell Utility', desc: 'High mineral hardness, calcium deposits & scale' },
              { id: 'mixed', title: 'Mixed / Tanker Water', desc: 'Varying source quality, high particulate risk' }
            ].map(source => (
              <button
                key={source.id}
                onClick={() => { setWaterSource(source.id); setStep(2); }}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-left transition-all"
              >
                <span className="font-bold text-base block text-white">{source.title}</span>
                <span className="text-xs text-blue-200 block mt-2 leading-relaxed">{source.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 relative z-10">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-300">
            <span>Question 2 of 3</span>
            <span>Visible Symptoms</span>
          </div>
          <h4 className="text-2xl font-bold">Are you experiencing any of these water problems? (Select all)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              { id: 'scaling', title: 'Fixture Scaling', desc: 'White/chalky deposits on taps & bathroom tiles' },
              { id: 'odor', title: 'Damp/Stagnant Smell', desc: 'Foul odor when turning on taps' },
              { id: 'sediment', title: 'Suspended Particles', desc: 'Sandy sediment, rust flakes, or dark sludge in buckets' },
              { id: 'none', title: 'None of the above', desc: 'Water looks and smells fine' }
            ].map(item => {
              const selected = symptoms.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleSymptom(item.id)}
                  className={`p-5 rounded-2xl text-left transition-all border ${
                    selected
                      ? 'bg-[#0B4DAB]/40 border-[#0B4DAB]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-white">{item.title}</span>
                    {selected && (
                      <span className="w-5 h-5 bg-[#8CCB00] rounded-full flex items-center justify-center text-white">
                        ✓
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-blue-200 block mt-2 leading-relaxed">{item.desc}</span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setStep(3)}
              className="bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3 px-8 rounded-xl shadow-md text-sm"
            >
              Continue to Last Question
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 relative z-10">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-300">
            <span>Question 3 of 3</span>
            <span>Sanitation History</span>
          </div>
          <h4 className="text-2xl font-bold">When was your tank or sump last professionally cleaned?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { id: 'under-6', title: 'Under 6 Months', desc: 'Recently sanitized' },
              { id: '6-12-months', title: '6 – 12 Months Ago', desc: 'Due for periodic service' },
              { id: 'over-year', title: 'Over 1 Year / Never', desc: 'High accumulation danger' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => { setLastCleaned(option.id); setStep(4); }}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-left transition-all"
              >
                <span className="font-bold text-base block text-white">{option.title}</span>
                <span className="text-xs text-blue-200 block mt-2 leading-relaxed">{option.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6 relative z-10 py-2">
          <div className="text-center">
            <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-[#8CCB00]/10 border border-[#8CCB00]/20 px-3.5 py-1.5 rounded-full">
              ✦ Assessment Diagnostic Result
            </span>
            <h4 className="text-3xl font-extrabold mt-6">Audit Completed!</h4>
          </div>

          <div className={`p-6 rounded-2xl border text-center space-y-3 ${results.color}`}>
            <span className="text-xs font-bold uppercase tracking-wider block">Diagnostics Safety Level</span>
            <span className="text-2xl sm:text-3xl font-black block">{results.level}</span>
            <p className="text-xs sm:text-sm font-semibold max-w-lg mx-auto leading-relaxed">
              {results.advice}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => { onBook(); setStep(0); setSymptoms([]); }}
              className="w-full sm:w-auto bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Book Priority Disinfection
            </button>
            <button
              onClick={() => { setStep(0); setSymptoms([]); }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/25 text-white font-bold py-3.5 px-8 rounded-full transition-all border border-white/10"
            >
              Re-take Audit Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
