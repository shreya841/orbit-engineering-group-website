import React, { useState, useRef, useEffect } from 'react';
import { 
  Droplets, ShieldCheck, CheckCircle2, ArrowRight, Phone, MessageSquare, 
  Settings, Award, Zap, ChevronRight, Activity, FileText, Check,
  ExternalLink, Layers, Eye, Sliders, Waves, Cpu, Sun, Wrench,
  Radio, Gauge, Compass, Building, ArrowUpRight, ChevronLeft, ChevronDown
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// ══ 8 CORE EDITORIAL SERVICES (Matches User Reference) ══
const EDITORIAL_SERVICES = [
  {
    number: '01',
    id: 'wtp',
    code: '01.1',
    sector: '01 — Water Supply Infrastructure',
    title: 'Water Treatment Plants',
    description: 'Design support, construction, equipment installation, commissioning assistance and all allied civil works — delivered as one accountable package.',
    pills: ['Design support', 'Commissioning', 'Allied civil', 'Turnkey Multi-MLD'],
    image: '/images/hero-wtp-BGjLUC-Q.jpg',
    capacity: '5 to 100+ MLD',
    standard: 'BIS 10500 / CPHEEO',
    features: [
      'Raw intake channels, flash mixers & clariflocculators',
      'Rapid Gravity Sand Filter (RGSF) beds with auto backwash',
      'Chemical dosing rooms (Alum, Lime, PAC) with safety scrubbers',
      'Chlorine contact tanks & automated electro-chlorination'
    ],
    highlights: ['Zero Liquid Discharge (ZLD) option', 'SCADA linked backwash cycles', 'CPCB compliant continuous discharge']
  },
  {
    number: '02',
    id: 'intake',
    code: '01.2',
    sector: '01 — Water Supply Infrastructure',
    title: 'Intake Wells',
    description: 'Construction of intake structures for reliable raw water abstraction from rivers, reservoirs and dams, engineered for seasonal variation and long service life.',
    pills: ['Rivers', 'Reservoirs', 'Dams', 'Jack-wells'],
    image: '/images/intake-well-BztrG-Xc.jpg',
    capacity: 'Heavy River/Dam Duty',
    standard: 'IS 456 / IRC Water Norms',
    features: [
      'Reinforced concrete intake wells with jack-well substructures',
      'Connecting gravity conduits and trash rack screen mechanisms',
      'Submersible & vertical turbine pump mounting plinths',
      'Hydraulic protection against seasonal monsoon scour and floods'
    ],
    highlights: ['Silt exclusion bays', 'Emergency bypass sluice gates', '4-season drawdown calculation']
  },
  {
    number: '03',
    id: 'oht',
    code: '01.3',
    sector: '01 — Water Supply Infrastructure',
    title: 'Overhead Tanks',
    description: 'Elevated service reservoirs built to secure uninterrupted distribution and stable pressure across the network they serve.',
    pills: ['Elevated storage', 'Pressure head', 'Continuity', 'IS 3370'],
    image: '/images/oht-DhEXxxnQ.jpg',
    capacity: '50 KL to 5000 KL',
    standard: 'IS 3370 Concrete Standards',
    features: [
      'Watertight underground & ground-level Clear Water Reservoirs',
      'Elevated Service Reservoirs (OHT) with slip-form concrete staging',
      'Waterproofing with food-grade epoxy barrier coatings',
      'Hydrostatic testing for zero-leakage certification'
    ],
    highlights: ['Ultrasonic depth telemetry', 'Chlorine booster dosing ports', 'Overflow & wash-out piping']
  },
  {
    number: '04',
    id: 'pump-house',
    code: '01.4',
    sector: '01 — Water Supply Infrastructure',
    title: 'Pump Houses',
    description: 'Civil and electro-mechanical infrastructure for efficient water pumping systems, from foundation to energised plant.',
    pills: ['Civil works', 'Electro-mech', 'Efficiency', 'Gantry cranes'],
    image: '/images/pump-house-rehbpR99.jpg',
    capacity: 'High-Capacity Pumping',
    standard: 'IS 1710 Pumping Norms',
    features: [
      'Vibration-damped inertia blocks and equipment foundations',
      'Overhead electric traveling (EOT) crane gantry integration',
      'Ventilated electrical motor control center (MCC) chambers',
      'Acoustic enclosures and anti-surge pressure relief pits'
    ],
    highlights: ['Precision alignment tolerances', 'Heavy cable trench networks', 'Dewatering sump integration']
  },
  {
    number: '05',
    id: 'pipelines',
    code: '01.5',
    sector: '01 — Water Supply Infrastructure',
    title: 'Pipeline Networks',
    description: 'Laying, testing, commissioning and maintenance of transmission and distribution pipelines across demanding terrain.',
    pills: ['Laying', 'Testing', 'Maintenance', 'DI / HDPE / MS'],
    image: '/images/pipeline-3e9YAzse.jpg',
    capacity: 'Dia 100mm to 1600mm',
    standard: 'IS 4984 / IS 8329 (DI/HDPE)',
    features: [
      'Heavy Ductile Iron (DI K7/K9) and Mild Steel (MS) pipeline laying',
      'High-Density Polyethylene (HDPE) electrofusion & butt jointing',
      'Hydraulic thrust block design and pipeline anchor blocks',
      'Hydrostatic field pressure testing up to 1.5x working pressure'
    ],
    highlights: ['GIS GPS pipeline mapping', 'Air valve & scour valve chambers', 'DMA leak management']
  },
  {
    number: '06',
    id: 'scada',
    code: '02.2',
    sector: '02 — Electro-Mechanical Works & SCADA',
    title: 'SCADA & Automation',
    description: 'Siemens & Schneider PLC control panels, cellular 4G RTUs, and central master video wall control rooms with 24/7 cloud telemetry.',
    pills: ['Siemens PLC', '4G RTU', 'DMA Leaks', 'Cloud Telemetry'],
    image: '/images/scada-JO4jHDve.jpg',
    capacity: 'Multi-Site Master SCADA',
    standard: 'IEC 61131-3 / Modbus TCP',
    features: [
      'Custom IP65 PLC panels with Siemens S7-1200/1500 & Schneider M340',
      'Central SCADA video wall command room setup with operator consoles',
      'Remote Terminal Units (RTU) with dual SIM 4G/GSM/LoRa uplink',
      'District Metered Area (DMA) balance & Non-Revenue Water (NRW) leak detection'
    ],
    highlights: ['Cloud dashboard & mobile app', 'Automated valve actuator control', 'Zero-latency fail-safe alarms']
  },
  {
    number: '07',
    id: 'solar',
    code: '02.5',
    sector: '02 — Electro-Mechanical Works & SCADA',
    title: 'Solar Pumping & Clean Energy',
    description: 'Turnkey solar photovoltaic submersible pumping arrays under PM KUSUM and floating solar PV arrays with hybrid VFD drives.',
    pills: ['PM KUSUM', 'Floating Solar', 'Hybrid VFD', 'Zero Carbon'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
    capacity: '3 HP to 50+ HP Pumps',
    standard: 'PM KUSUM Tier-1 / MNRE',
    features: [
      'Solar-powered submersible pumping stations for rural water supply',
      'Floating solar photovoltaic arrays on raw water reservoirs & canals',
      'High-efficiency MPPT solar VFD drive inverters (> 99.2% efficiency)',
      'Automatic solar-to-grid auto-switch for 24/7 continuous water delivery'
    ],
    highlights: ['Remote solar inverter telemetry', 'Zero carbon pumping footprint', 'MNRE approved Tier-1 panels']
  },
  {
    number: '08',
    id: 'om-amc',
    code: '02.6',
    sector: '02 — Electro-Mechanical Works & SCADA',
    title: 'Operation & Maintenance (O&M)',
    description: 'Lifelong preventative maintenance regimes, sensor NABL calibration certificates, critical spares stock, and dedicated engineers.',
    pills: ['24/7 AMC', '< 4h Response', 'NABL Calibration', 'CPCB Sync'],
    image: '/images/electro-mech-BjrTidAv.jpg',
    capacity: '24/7/365 Pan-India',
    standard: 'ISO 9001 / ISO 14001',
    features: [
      'Annual Maintenance Contracts (AMC) with guaranteed < 4h response in MP',
      'Scheduled preventative pump overhauls, gland packing & bearing lube',
      'Annual sensor NABL recalibration certificates and compliance logs',
      'Real-time CPCB cloud data logging & emergency DG power failover'
    ],
    highlights: ['Dedicated emergency fleet', 'On-site sensor calibration lab', 'Pan-MP rapid response']
  }
];

// ══ CAROUSEL CARDS (Runs continuously like a Headline Ticker) ══
const CAROUSEL_CARDS = [
  {
    code: '01.01',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Water Treatment Plants (WTP)',
    image: '/images/hero-wtp-BGjLUC-Q.jpg',
    discId: 'wtp'
  },
  {
    code: '01.02',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Intake Well Construction',
    image: '/images/intake-well-BztrG-Xc.jpg',
    discId: 'intake'
  },
  {
    code: '01.03',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Clear Water Reservoirs (CWR)',
    image: '/images/reservoir-D5_YW2_r.jpg',
    discId: 'oht'
  },
  {
    code: '01.04',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Pump House Construction',
    image: '/images/pump-house-rehbpR99.jpg',
    discId: 'pump-house'
  },
  {
    code: '01.05',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Overhead Tank (OHT) Construction',
    image: '/images/oht-DhEXxxnQ.jpg',
    discId: 'oht'
  },
  {
    code: '01.06',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Water Distribution Networks',
    image: '/images/network-LUJb9Wxw.jpg',
    discId: 'pipelines'
  },
  {
    code: '01.07',
    sector: 'WATER SUPPLY INFRASTRUCTURE',
    title: 'Rising Main Pipelines',
    image: '/images/pipeline-3e9YAzse.jpg',
    discId: 'pipelines'
  },
  {
    code: '02.01',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: 'Pump Installation & Erection',
    image: '/images/electro-mech-BjrTidAv.jpg',
    discId: 'pump-house'
  },
  {
    code: '02.02',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: 'SCADA Integration & Command',
    image: '/images/scada-JO4jHDve.jpg',
    discId: 'scada'
  },
  {
    code: '02.03',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: 'Flow Meters & Quality Analyzers',
    image: '/images/flow-meter-DSWy7kTd.jpg',
    discId: 'scada'
  },
  {
    code: '02.04',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: 'Valves & Hydraulic Surge Control',
    image: '/images/valves-Cn1fyoyr.jpg',
    discId: 'pipelines'
  },
  {
    code: '02.05',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: 'Solar Water Pumping (PM KUSUM)',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    discId: 'solar'
  },
  {
    code: '02.06',
    sector: 'ELECTRO-MECHANICAL WORKS',
    title: '24/7 O&M + Comprehensive AMC',
    image: '/images/electro-mech-BjrTidAv.jpg',
    discId: 'om-amc'
  }
];

// ══ INTERACTIVE BEFORE/AFTER SLIDER (Exact Match to User Screenshots 1, 2, 3) ══
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseDown={() => { isDragging.current = true; }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onMouseMove={(e) => { if (isDragging.current) handleMove(e.clientX); }}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize border border-slate-200/90 shadow-xl bg-slate-900"
    >
      {/* Right Image (AFTER: The architectural clean concrete reservoir pool) */}
      <img
        src="/images/reservoir-D5_YW2_r.jpg"
        alt="After: Architectural Commissioned Reservoir"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* After Badge: Bottom Right */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-md border border-white/20 z-10 pointer-events-none">
        AFTER
      </div>

      {/* Left Image (BEFORE: The sunrise circular clarifier WTP) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src="/images/hero-wtp-BGjLUC-Q.jpg"
          alt="Before: Commissioned Treatment Facility"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
        />
        {/* Before Badge: Bottom Left */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-md border border-white/20 z-10 pointer-events-none">
          BEFORE
        </div>
      </div>

      {/* Divider Handle Line with < > arrow button */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] pointer-events-none z-20 flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-9 h-9 -ml-[18px] rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-white/80 flex items-center justify-center text-slate-800 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
          <span className="text-[12px] font-medium text-slate-800 tracking-tighter select-none">‹ ›</span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ onOpenQuote }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  return (
    <div className="w-full bg-[#fbfbfb] text-slate-900 font-sans selection:bg-[#1e60aa] selection:text-white">

      {/* ══ 1. PANORAMIC WATER TREATMENT HERO BANNER ══ */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden bg-slate-900 flex items-center justify-center text-center">
        {/* Full-width Aerial Water Treatment Plant Background Photo */}
        <img
          src="/images/wtp_hero.jpg"
          alt="Water Treatment Plant Infrastructure"
          onError={(e) => { e.currentTarget.src = '/images/hero-wtp-BGjLUC-Q.jpg'; }}
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-102 transition-transform duration-1000"
        />
        
        {/* Subtle Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50" />

        {/* Hero Title & Subtitle in Center */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-3 pt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium max-w-2xl mx-auto drop-shadow leading-relaxed">
            Comprehensive water infrastructure solutions from concept to maintenance
          </p>
        </div>
      </div>

      {/* ══ 2. VIBRANT BLUE RIBBON TICKER ══ */}
      <div className="w-full bg-[#1e60aa] border-y border-[#175497] py-3 text-white overflow-hidden shadow-md">
        <div className="animate-ribbon-ticker flex items-center whitespace-nowrap select-none font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-3 text-sky-300">✦</span> EXCELLENCE
              <span className="mx-3 text-sky-300">✦</span> RELIABILITY
              <span className="mx-3 text-sky-300">✦</span> PRECISION
              <span className="mx-3 text-sky-300">✦</span> INNOVATION
              <span className="mx-3 text-sky-300">✦</span> SUSTAINABILITY
              <span className="mx-3 text-sky-300">✦</span> AUTOMATION
            </span>
          ))}
        </div>
      </div>

      {/* ══ 3. ENGINEERING EXCELLENCE SECTION (With Subtle Hexagonal Grid Background) ══ */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Hexagonal Tech Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%231e60aa' stroke-width='1.5'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%231e60aa' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: '56px 100px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#1e60aa] bg-blue-50 border border-blue-100">
            <span>✦</span> WHAT WE DELIVER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Engineering <span className="text-[#009fd9]">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From multi-MLD turnkey treatment plants and intake jack-wells to deep distribution pipelines and centralized SCADA command rooms, we provide end-to-end accountability across the entire water cycle.
          </p>

          {/* Core Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#1e60aa]">₹200+ Cr</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Executed Volume</div>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">8+ Disciplines</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Core Engineering Lines</div>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">BIS 10500 Compliant</div>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600">27+ Years</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Legacy Since 1998</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. CONTINUOUS CHAIN OF CUSTODY CAROUSEL (Headline-Style Continuous Marquee) ══ */}
      <section className="py-14 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE CONTINUOUS CHAIN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              One continuous chain of custody.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              The range moves continuously on its own. Tap or hover over any card to pause and inspect technical blueprint.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="text-sky-600 font-bold">✦ Auto-gliding</span>
            <span className="text-slate-300">|</span>
            <span>Hover to pause</span>
          </div>
        </div>

        {/* Continuous Headline-Style Marquee Track */}
        <div className="relative w-full overflow-hidden select-none py-2 group">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-20 pointer-events-none" />

          <div className="animate-cards-marquee flex items-center gap-6">
            {[...CAROUSEL_CARDS, ...CAROUSEL_CARDS].map((card, i) => (
              <div
                key={i}
                onClick={() => {
                  const disc = EDITORIAL_SERVICES.find(s => s.id === card.discId) || EDITORIAL_SERVICES[0];
                  setSelectedDiscipline(disc);
                }}
                className="w-[260px] sm:w-[290px] h-[380px] sm:h-[420px] shrink-0 rounded-2xl overflow-hidden relative group/card cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-slate-200/90 bg-slate-900"
              >
                {/* Card Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20" />

                {/* Top Code Badge & Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-bold text-amber-300/90 tracking-wider bg-slate-950/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {card.code}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xs group-hover/card:bg-[#1e60aa] transition-colors">
                    <Waves className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                    <span>{card.sector}</span>
                    <span className="text-sky-300 text-sm font-bold group-hover/card:translate-x-1 group-hover/card:text-white transition-all">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. EDITORIAL ZIG-ZAG SERVICES SHOWCASE ══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {EDITORIAL_SERVICES.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
            >
              {/* Image Block */}
              <div className={`reveal-scale delay-75 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div 
                  onClick={() => setSelectedDiscipline(item)}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/10] sm:aspect-[16/9] relative group cursor-pointer bg-slate-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md">
                      <span>Explore Technical Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#1e60aa]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Block */}
              <div className={`reveal-up delay-150 lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Massive Muted Number */}
                <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-slate-300 font-display leading-none select-none -mb-2">
                  {item.number}
                </div>

                {/* Service Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Filter/Tag Pills Row */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-medium text-slate-600 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-xs hover:border-[#1e60aa] hover:text-[#1e60aa] transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Technical Specifications Quick Specs */}
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div>
                    <span className="text-slate-400">Capacity:</span> <strong className="text-slate-700">{item.capacity}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Standard:</span> <strong className="text-[#1e60aa]">{item.standard}</strong>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-1">
                  <button
                    onClick={() => setSelectedDiscipline(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1e60aa] hover:text-[#165091] group cursor-pointer"
                  >
                    <span>View Technical Scope &amp; Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ══ 6. BEFORE / AFTER SITE TRANSFORMATION (Exact Match to User Screenshots 1, 2, 3) ══ */}
      <section className="py-20 sm:py-28 bg-[#fbfbfb] border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Text Content matching user screenshot */}
            <div className="reveal-up delay-75 lg:col-span-5 space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-slate-400">
                SITE TRANSFORMATION
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                From raw ground to a working asset.
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed pt-1">
                Drag the handle to compare an untouched site condition with a commissioned facility of the type we deliver.
              </p>
            </div>

            {/* Right Column: Interactive Before / After Slider */}
            <div className="reveal-scale delay-150 lg:col-span-7">
              <BeforeAfterSlider />
            </div>

          </div>
        </div>
      </section>

      {/* ══ 7. STATUTORY REGISTRATIONS & DPR PROPOSAL CTA BANNER ══ */}
      <section className="py-14 bg-gradient-to-r from-blue-50/70 via-sky-50/50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[10px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                MCA Corporate Registered
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Triple ISO 9001/14001/45001
              </span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                IndiaMART Verified Seller
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to submit a DPR, tender or turnkey scheme enquiry?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering office in Bhopal prepares complete technical scopes, BOM estimates, and execution schedules within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={siteConfig.company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all hover:scale-105 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer glow-btn w-full sm:w-auto"
            >
              <span>Request Detailed Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══ 9. INTERACTIVE SCOPE DETAIL MODAL LIGHTBOX ══ */}
      {selectedDiscipline && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedDiscipline(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
              <img
                src={selectedDiscipline.image}
                alt={selectedDiscipline.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDiscipline(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                  {selectedDiscipline.code} · {selectedDiscipline.sector}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedDiscipline.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedDiscipline.description}
              </p>

              {/* Capacity & Standard Strip */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block">Execution Capacity</span>
                  <span className="font-bold text-slate-800 text-sm">{selectedDiscipline.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Applicable Standard</span>
                  <span className="font-bold text-[#1e60aa] text-sm">{selectedDiscipline.standard}</span>
                </div>
              </div>

              {/* Core Features */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Technical Specifications &amp; Works Included
                </h4>
                <div className="space-y-2">
                  {selectedDiscipline.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60aa] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/919425008546?text=${encodeURIComponent(`Hello Orbit Engineering, I am interested in technical scope details for: ${selectedDiscipline.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedDiscipline(null);
                    onOpenQuote();
                  }}
                  className="w-full sm:w-1/2 py-2.5 px-4 bg-[#1e60aa] hover:bg-[#165091] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-all hover:scale-102 cursor-pointer"
                >
                  <span>Request Full DPR Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
