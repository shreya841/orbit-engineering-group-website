import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, Droplets, Cpu, ShieldCheck, TrendingUp, Award, Layers, 
  CheckCircle2, ChevronRight, Sparkles, MapPin, Activity, Zap, Building2,
  Sliders, Gauge, RotateCcw, Play, BarChart3, Sun, Wrench, Compass, Eye,
  Maximize2, MessageSquare, PhoneCall
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import HeroSection from '../components/HeroSection';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';

// Animated stat counter component
function StatCard({ value, suffix, label, sub, color, delay }) {
  const { ref, count } = useCountUp(typeof value === 'number' ? value : 0, 2000);
  const revealRef = useScrollReveal();

  return (
    <div
      ref={(el) => { ref.current = el; revealRef.ref.current = el; }}
      className={`reveal-scale ${delay} p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover-lift gradient-border`}
    >
      <div className={`text-2xl font-bold ${color}`}>
        {typeof value === 'number' ? count + (suffix || '') : value}
      </div>
      <div className="text-xs font-semibold text-slate-700 mt-0.5">{label}</div>
      <div className="text-[11px] text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
}

// Interactive Live Plant Simulation
function PlantSimulation() {
  const [activeStage, setActiveStage] = useState('clarifier');
  const [mode, setMode] = useState('Normal'); // Normal, Peak, Backwash
  const [pumpSpeed, setPumpSpeed] = useState(85);

  const stages = {
    intake: {
      title: 'Raw Water River Intake & Well',
      status: 'Online · 3 Pumps Running',
      flow: (mode === 'Peak' ? 62.4 : mode === 'Backwash' ? 38.0 : 45.8).toFixed(1) + ' MLD',
      pressure: '4.8 Bar',
      turbidity: '14.2 NTU',
      power: '185 kW',
      valves: 'Intake Gates: 100% Open',
      alert: 'Normal Intake Velocity',
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80'
    },
    clarifier: {
      title: 'Clariflocculator & Coagulation Unit',
      status: 'Active · Alum Dosing 18 ppm',
      flow: (mode === 'Peak' ? 61.8 : mode === 'Backwash' ? 37.5 : 45.2).toFixed(1) + ' MLD',
      pressure: '1.2 Bar',
      turbidity: '3.8 NTU (Post-Coagulation)',
      power: '45 kW (Flash Mixer)',
      valves: 'Sludge Drain: Auto-Pulse',
      alert: 'Floc Formation Optimal',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    },
    filters: {
      title: 'Rapid Gravity Sand Filters (RGSF)',
      status: mode === 'Backwash' ? '⚠️ Bed 3 Backwash Active' : 'Online · 6 Filter Beds Running',
      flow: (mode === 'Peak' ? 60.5 : mode === 'Backwash' ? 32.0 : 44.9).toFixed(1) + ' MLD',
      pressure: '0.85 Bar (Head Loss: 1.4m)',
      turbidity: '0.45 NTU (BIS < 1.0)',
      power: '110 kW Air Blower',
      valves: mode === 'Backwash' ? 'Backwash Valve: 100% OPEN' : 'Effluent Valve: Regulating',
      alert: mode === 'Backwash' ? 'Air Scouring & Water Flush Active' : 'Filtration Cycle 18/24 hrs',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    },
    chlorine: {
      title: 'Gas / Electro-Chlorination & Disinfection',
      status: 'Active · Residual Cl Control',
      flow: (mode === 'Peak' ? 60.0 : 44.5).toFixed(1) + ' MLD',
      pressure: '3.2 Bar',
      turbidity: '0.38 NTU',
      power: '15 kW Electro-Chlorinator',
      valves: 'Dosing Pump 1: 0.8 ppm active',
      alert: 'Residual Chlorine: 0.52 ppm (Compliant)',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    scada: {
      title: 'Master SCADA Telemetry & IoT Cloud Node',
      status: '4G LTE Dual Gateway Linked',
      flow: (mode === 'Peak' ? 60.0 : 44.5).toFixed(1) + ' MLD Total Outflow',
      pressure: 'Master Header: 6.2 Bar',
      turbidity: 'Quality Index: 99.8%',
      power: 'Full Plant: 355 kW Total',
      valves: '18 RTU Remote Actuators Synced',
      alert: 'Cloud Latency: 18ms · Zero Alarm Active',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    }
  };

  const current = stages[activeStage];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e60aa]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider mb-1.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-500" />
            <span>Interactive Industrial SCADA Command Simulation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">50 MLD Turnkey Water Treatment Simulation</h3>
        </div>

        {/* Operating Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
          {['Normal', 'Peak Demand', 'Backwash'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m === 'Peak Demand' ? 'Peak' : m)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                (mode === 'Peak' && m === 'Peak Demand') || mode === m
                  ? 'bg-[#1e60aa] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-5">
        {[
          { id: 'intake', label: '1. Raw Intake' },
          { id: 'clarifier', label: '2. Clarifier' },
          { id: 'filters', label: '3. Sand Filters' },
          { id: 'chlorine', label: '4. Chlorination' },
          { id: 'scada', label: '5. Master SCADA' }
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveStage(s.id)}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-left flex items-center justify-between cursor-pointer border ${
              activeStage === s.id
                ? 'bg-[#1e60aa] text-white border-[#1e60aa] shadow-md shadow-[#1e60aa]/20'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>{s.label}</span>
            {activeStage === s.id && <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />}
          </button>
        ))}
      </div>

      {/* Main Simulation View Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left: Stage Visual & Diagnostics */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-sm">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full w-max mb-1 shadow-sm">
              <CheckCircle2 className="w-3 h-3" /> {current.status}
            </div>
            <h4 className="text-sm font-bold text-white drop-shadow-sm">{current.title}</h4>
            <div className="text-[11px] text-sky-200 font-medium mt-0.5">● {current.alert}</div>
          </div>
        </div>

        {/* Right: Live Telemetry Gauges (Light Theme) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-[#1e60aa]" /> Discharge Flow
            </div>
            <div className="text-xl font-semibold text-slate-900 mt-1.5 font-display">{current.flow}</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Electromagnetic Online</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-[#1e60aa]" /> Header Pressure
            </div>
            <div className="text-xl font-semibold text-slate-900 mt-1.5 font-display">{current.pressure}</div>
            <div className="text-[11px] text-sky-600 font-semibold mt-0.5">4-20mA Transducer</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e60aa]" /> Water Quality
            </div>
            <div className="text-xl font-semibold text-slate-900 mt-1.5 font-display">{current.turbidity}</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">CPCB &amp; BIS 10500</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Connected Power
            </div>
            <div className="text-xl font-semibold text-slate-900 mt-1.5 font-display">{current.power}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Schneider VFD Drive</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all sm:col-span-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#1e60aa]" /> Valve &amp; Actuator Telemetry
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1.5">{current.valves}</div>
            <div className="text-[11px] text-sky-700 font-semibold mt-0.5">Siemens S7-1500 PLC Synced</div>
          </div>
        </div>

      </div>

    </div>
  );
}

// Interactive Water Scheme Capacity Estimator
function SchemeCalculator({ onOpenQuote }) {
  const [population, setPopulation] = useState(50000);
  const [standard, setStandard] = useState(70); // LPCD (55 JJM rural, 70 town, 135 city)
  const [source, setSource] = useState('River / Canal');

  // Calculations
  const dailyLiters = population * standard;
  const capacityMLD = (dailyLiters * 1.15 / 1000000).toFixed(2); // 15% losses factor
  const filterBeds = Math.max(2, Math.ceil(capacityMLD / 5));
  const estimatedPowerHP = Math.round(capacityMLD * 40);
  const recommendedPipeMM = capacityMLD > 20 ? '700 - 1200 mm' : capacityMLD > 5 ? '350 - 600 mm' : '150 - 300 mm';

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
      <div className="max-w-2xl mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1e60aa] border border-blue-100 text-[11px] font-semibold uppercase tracking-wider mb-2">
          <Sliders className="w-3.5 h-3.5" />
          <span>Instant Engineering Estimator</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Calculate Plant Capacity &amp; Infrastructure Parameters</h3>
        <p className="text-xs text-slate-500 mt-1">Estimate WTP/STP capacity (MLD), pumping power, filter sizing, and SCADA nodes for your target population.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Input */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-800 mb-2">
              <span>Target Population Served:</span>
              <span className="text-[#1e60aa] font-bold text-sm">{population.toLocaleString()} People</span>
            </div>
            <input
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={population}
              onChange={(e) => setPopulation(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e60aa]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
              <span>5,000 (Village)</span>
              <span>100,000 (Town)</span>
              <span>500,000 (City)</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-800 mb-2">Supply Standard (CPHEEO / JJM Guidelines):</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { lpcd: 55, label: '55 LPCD', sub: 'Jal Jeevan Rural' },
                { lpcd: 70, label: '70 LPCD', sub: 'Nagar Parishad' },
                { lpcd: 135, label: '135 LPCD', sub: 'AMRUT 2.0 Urban' }
              ].map((item) => (
                <button
                  key={item.lpcd}
                  onClick={() => setStandard(item.lpcd)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    standard === item.lpcd
                      ? 'border-[#1e60aa] bg-blue-50/80 text-[#1e60aa] shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-800 mb-2">Raw Water Source:</div>
            <div className="grid grid-cols-3 gap-2">
              {['River / Canal', 'Dam / Reservoir', 'Deep Borewell'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSource(s)}
                  className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    source === s
                      ? 'border-[#1e60aa] bg-blue-50 text-[#1e60aa]'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-[#1e3a5f] rounded-2xl p-6 text-white shadow-xl">
          <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1">Estimated Engineering Blueprint</div>
          <div className="text-3xl sm:text-4xl font-bold text-white">{capacityMLD} <span className="text-xl font-bold text-sky-400">MLD Plant</span></div>
          <div className="text-xs text-slate-300 mt-1">Recommended Turnkey WTP System with automated SCADA</div>

          <div className="grid grid-cols-2 gap-3 my-5">
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-semibold">Filter Beds</div>
              <div className="text-base font-bold text-white">{filterBeds} Gravity Sand Units</div>
            </div>
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-semibold">Pump Drive Power</div>
              <div className="text-base font-bold text-white">~{estimatedPowerHP} HP Total</div>
            </div>
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-semibold">Header Pipeline</div>
              <div className="text-base font-bold text-white">{recommendedPipeMM}</div>
            </div>
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-semibold">SCADA RTU Nodes</div>
              <div className="text-base font-bold text-white">{Math.max(4, Math.round(capacityMLD * 3))} IoT Gateways</div>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="w-full py-3 bg-[#009fd9] hover:bg-[#008bc0] text-white font-bold text-xs rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Detailed DPR / BOQ for {capacityMLD} MLD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default function HomePage({ onNavigate, onSelectProject, onOpenQuote }) {
  const [projectTab, setProjectTab] = useState('All');
  const introReveal  = useScrollReveal();
  const simReveal    = useScrollReveal();
  const calcReveal   = useScrollReveal();
  const projReveal   = useScrollReveal();
  const ctaReveal    = useScrollReveal();

  const filteredProjects = siteConfig.projects.filter(p => {
    if (projectTab === 'All') return true;
    return p.category === projectTab;
  }).slice(0, 6);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 overflow-hidden">

      {/* ── 1. CLEAN HERO SECTION ── */}
      <HeroSection onNavigate={onNavigate} />

      {/* ── 2. INTRO VALUE & CAPABILITY METRICS ── */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div ref={introReveal.ref} className="reveal-right lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Premier Water &amp; Automation Enterprise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Engineering <span className="shimmer-text">Clean Water</span> &amp; Smart Telemetry for Millions
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Since 1998, <strong>Orbit Engineering Solutions</strong> has delivered 150+ turnkey mega water supply schemes across India. We engineer municipal Water Treatment Plants (WTP), Sewage Treatment (STP), Effluent Treatment (ETP), and integrate state-of-the-art Siemens &amp; Schneider SCADA control systems.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <StatCard value={150} suffix="+" label="Mega Schemes Delivered" sub="Jal Jeevan Mission & AMRUT" color="text-[#1e60aa]" delay="delay-0" />
              <StatCard value="Triple ISO" label="Certified Excellence" sub="9001, 14001, 45001" color="text-emerald-600" delay="delay-100" />
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs shadow-md transition-all hover:scale-105 cursor-pointer glow-btn"
              >
                <span>Explore Engineering Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200 shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                27+ Years Legacy (Est. 1998)
              </button>
            </div>
          </div>

          <div className="reveal-left delay-150 lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d">
              <img
                src="/images/wtp_hero.jpg"
                alt="Water Treatment Plant Architecture"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1200&q=80'; }}
                className="w-full h-[360px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-[#1e60aa] px-3 py-1 rounded-full text-xs font-semibold w-max mb-1.5">
                  <Droplets className="w-3.5 h-3.5" /> Turnkey WTP Infrastructure
                </div>
                <h3 className="text-lg font-bold">50+ MLD Municipal &amp; Industrial Plants</h3>
                <p className="text-xs text-slate-300 mt-1">Raw intake pumps, clarifiers, rapid sand filtration, and automated chlorination.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. TRUSTED CREDENTIALS & METRICS STRIP ── */}
      <section className="reveal-up py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="reveal-scale delay-75 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display">₹200+ Cr</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Water Schemes Executed</div>
            </div>
            <div className="reveal-scale delay-150 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display">150+ Schemes</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">JJM &amp; Municipal Turnkey</div>
            </div>
            <div className="reveal-scale delay-200 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display">27+ Years</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Industry Leadership (Est. 1998)</div>
            </div>
            <div className="reveal-scale delay-250 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-display">Triple ISO</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">9001, 14001, 45001 Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE SCADA SIMULATION DASHBOARD (Light Theme) ── */}
      <section ref={simReveal.ref} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlantSimulation />
      </section>

      {/* ── 4. CORE ENGINEERING SOLUTIONS ── */}
      <section className="py-16 bg-slate-50/80 border-y border-slate-200 tech-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa] mb-1 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Turnkey Capabilities &amp; Clean Energy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Engineering Solutions &amp; Services</h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e60aa] hover:text-[#165091] transition-colors cursor-pointer"
            >
              <span>View All Services &amp; Blueprint</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm card-3d cursor-pointer group hover:border-[#1e60aa] hover:shadow-xl transition-all flex flex-col justify-between gradient-border"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1e60aa] shadow-sm">
                      {service.tag}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1e60aa] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {service.features.slice(0, 3).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1e60aa] flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Explore Technical Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. INSTANT CAPACITY & BOQ CALCULATOR ── */}
      <section ref={calcReveal.ref} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SchemeCalculator onOpenQuote={onOpenQuote} />
      </section>

      {/* ── 6. CTA BANNER (Light Theme) ── */}
      <section ref={ctaReveal.ref} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/40 text-slate-900 p-8 sm:p-12 relative overflow-hidden shadow-xl border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1e60aa]">Direct Senior Engineering Access</span>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight text-slate-900">
              Consult with Bhopal HQ for DPR, Tender BOQ or Site Audit
            </h2>
            <p className="text-xs text-slate-600 font-normal">
              Serving Madhya Pradesh, Uttar Pradesh, Chhattisgarh &amp; nationwide under JJM, AMRUT 2.0 &amp; Industrial norms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-2xl bg-[#1e60aa] hover:bg-[#165091] text-white font-bold text-xs shadow-md transition-all hover:scale-105 cursor-pointer glow-btn"
            >
              Request Engineering Quote
            </button>
            <a href="tel:+917024128029" className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-all text-center shadow-sm">
              Call: +91 70241 28029
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
