import React, { useState } from 'react';

export default function Planner({ onBook }) {
  // TDS states
  const [tds, setTds] = useState(150);
  
  // Schedule states
  const [sumpType, setSumpType] = useState('individual');
  const [waterSource, setWaterSource] = useState('municipal');
  const [capacity, setCapacity] = useState(2000);
  const [generated, setGenerated] = useState(false);
  const [schedule, setSchedule] = useState([]);

  // TDS diagnostic logic
  const getTdsAdvice = (value) => {
    if (value <= 150) {
      return {
        rating: "Excellent (Safe) ✅",
        color: "text-green-600 bg-green-50 border-green-200",
        advice: "Water is soft and highly pure. Sump cleaning recommended once every 6 months to prevent micro-sediment accumulation."
      };
    } else if (value <= 300) {
      return {
        rating: "Good (Acceptable) 👍",
        color: "text-[#0B4DAB] bg-blue-50 border-blue-200",
        advice: "Safe for household utility. Clean every 6 months to maintain this standard and prevent scaling."
      };
    } else if (value <= 500) {
      return {
        rating: "Hard Water / Moderate Risk ⚠️",
        color: "text-yellow-600 bg-yellow-50 border-yellow-200",
        advice: "Mineral deposits and white scaling will accumulate rapidly. Sump and tank cleaning recommended every 4-5 months."
      };
    } else {
      return {
        rating: "Critical Hardness / High Risk 🚨",
        color: "text-red-600 bg-red-50 border-red-200",
        advice: "Dangerous scaling, rust risk, and high sediment buildup. Sump cleaning is recommended every 3 months. Consider a water softener."
      };
    }
  };

  const tdsResult = getTdsAdvice(tds);

  // Maintenance schedule generator logic
  const generateSchedule = (e) => {
    e.preventDefault();
    const deepCleanInterval = waterSource === 'borewell' ? 4 : 6;
    const testInterval = 3;
    const meshCheckInterval = 2;

    const list = [];
    const baseMonth = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    for (let i = 1; i <= 12; i++) {
      const currentMonthIndex = (baseMonth + i) % 12;
      const mName = months[currentMonthIndex];
      const items = [];

      if (i % deepCleanInterval === 0) {
        items.push("🚿 Professional Sump Deep Clean & Disinfection (Tank Clean Machaa!)");
      }
      if (i % testInterval === 0) {
        items.push("🔬 Water TDS & pH level health test");
      }
      if (i % meshCheckInterval === 0) {
        items.push("🧹 Clean water inlet mesh filter & check float valve functionality");
      }

      if (items.length > 0) {
        list.push({ month: mName, tasks: items });
      }
    }
    setSchedule(list);
    setGenerated(true);
  };

  return (
    <section id="planner" className="py-16 sm:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-[#0B4DAB] uppercase tracking-wider">Free Safety Tools</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            TDS Safety Widget & Maintenance Planner
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Interactive utilities to diagnose water hardness and structure custom cleaning calendars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: TDS scale widget */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#0B4DAB] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
                ✦ TDS Scale Audit
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-4">TDS Safety Calculator</h3>
              <p className="text-slate-500 text-xs mt-1">Enter your water's TDS (Total Dissolved Solids) in ppm.</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">TDS Level</span>
                <span className="text-lg font-black text-[#0B4DAB] bg-blue-100 px-3 py-1 rounded-xl">{tds} ppm</span>
              </div>

              <input
                type="range"
                min="50"
                max="800"
                step="25"
                value={tds}
                onChange={(e) => setTds(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B4DAB]"
              />

              {/* Visual gauge indicators */}
              <div className="flex text-[9px] font-bold uppercase tracking-wider text-center text-white h-5.5 rounded-lg overflow-hidden select-none">
                <div className="flex-1 bg-green-500 flex items-center justify-center">Safe</div>
                <div className="flex-1 bg-blue-500 flex items-center justify-center">Good</div>
                <div className="flex-1 bg-yellow-500 flex items-center justify-center">Fair</div>
                <div className="flex-1 bg-red-500 flex items-center justify-center">Hard</div>
              </div>
            </div>

            {/* Diagnostic advice box */}
            <div className={`p-6 rounded-2xl border text-center space-y-2.5 transition-all duration-300 ${tdsResult.color}`}>
              <span className="text-[10px] uppercase font-bold tracking-widest">Water Safety Grade</span>
              <span className="text-xl font-extrabold block">{tdsResult.rating}</span>
              <p className="text-xs font-semibold leading-relaxed">
                {tdsResult.advice}
              </p>
            </div>
            
            <button
              onClick={() => onBook('disinfection')}
              className="w-full bg-[#0B4DAB] hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-xs transition-all"
            >
              Get Free TDS Water Test at Home
            </button>
          </div>

          {/* Right Side: Maintenance Planner */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            <div>
              <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
                ✦ Custom Scheduler
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-4">Sump Maintenance Planner</h3>
              <p className="text-slate-500 text-xs mt-1">Generate a custom hygiene calendar for your storage structure.</p>
            </div>

            <form onSubmit={generateSchedule} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Building Type</label>
                <select
                  value={sumpType}
                  onChange={(e) => setSumpType(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B4DAB]"
                >
                  <option value="individual">Individual Sump</option>
                  <option value="apartment">Apartment Society</option>
                  <option value="commercial">Commercial Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Water Source</label>
                <select
                  value={waterSource}
                  onChange={(e) => setWaterSource(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B4DAB]"
                >
                  <option value="municipal">Kaveri / Municipal</option>
                  <option value="borewell">Borewell Utility</option>
                  <option value="mixed">Mixed Tankers</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Sump Capacity</label>
                <select
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B4DAB]"
                >
                  <option value="1000">1,000 Litres</option>
                  <option value="2000">2,000 Litres</option>
                  <option value="5000">5,000 Litres</option>
                  <option value="10000">10,000+ Litres</option>
                </select>
              </div>

              <div className="sm:col-span-3 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#8CCB00] hover:bg-[#78ad00] text-white font-bold py-3 px-6 rounded-xl shadow-md text-xs transition-all"
                >
                  Generate 12-Month Maintenance Calendar
                </button>
              </div>
            </form>

            {/* Generated Schedule output */}
            {generated && (
              <div className="mt-8 pt-8 border-t border-slate-200/50 space-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-slate-800">Your Generated Calendar</h4>
                  <button
                    onClick={() => window.print()}
                    className="text-[10px] font-bold text-[#0B4DAB] hover:underline"
                  >
                    🖨 Print / Save Notice
                  </button>
                </div>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-xl p-4 space-y-2 shadow-xs">
                      <span className="text-xs font-bold text-[#0B4DAB] bg-blue-50 px-2 py-0.5 rounded-md">
                        {item.month}
                      </span>
                      <ul className="space-y-1.5">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start">
                            <span className="text-[#8CCB00] mr-1.5 shrink-0">✦</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
