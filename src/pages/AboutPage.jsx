import React, { useState } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, MapPin, Calendar, Briefcase, 
  FileCheck2, Building2, Phone, Users, ArrowRight, Activity, 
  Target, Eye, Sparkles, Compass, Droplets, Zap, ChevronRight, Check
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';

// Animated number badge
function AnimatedStat({ end, suffix, label }) {
  const { ref, count } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-[#1e60aa] tracking-tight">{count}{suffix}</div>
      <div className="text-xs text-slate-600 font-medium mt-1">{label}</div>
    </div>
  );
}

// ══ 7 COMMITMENTS (From User Reference Screenshot) ══
const SEVEN_COMMITMENTS = [
  {
    num: '01',
    title: 'One Accountable Package',
    desc: 'Intake, treatment, transmission, storage, electro-mechanical, instrumentation and SCADA delivered under a single unified engineering contract.'
  },
  {
    num: '02',
    title: 'Design-Build Integration',
    desc: 'Hydraulic modelling, structural design, execution and trial runs done by internal teams, preventing costly inter-agency disputes and delays.'
  },
  {
    num: '03',
    title: 'Statutory Rigor',
    desc: 'Strict adherence to CPHEEO, BIS 10500, IS 456, IS 3370 and CPCB norms, ensuring 100% statutory acceptance and smooth handover.'
  },
  {
    num: '04',
    title: 'Quality & Material Traceability',
    desc: 'Mill test certificates, ultrasonic weld testing, non-destructive concrete testing (NDT), and hydrostatic pressure certification for every joint.'
  },
  {
    num: '05',
    title: 'SCADA-Native Engineering',
    desc: 'Every civil sump, pump set and valve is engineered from day one with automated instrumentation ports and IoT communication telemetry.'
  },
  {
    num: '06',
    title: 'Guaranteed Commissioning Trials',
    desc: 'Unconditional 72-hour continuous full-load water testing and 30-day performance stabilization before commercial asset handover.'
  },
  {
    num: '07',
    title: 'Lifecycle O&M Stewardship',
    desc: 'We stand behind our assets with multi-year comprehensive AMC support, rapid spare parts deployment, and dedicated field engineer teams.'
  }
];

// ══ CORE VALUES ══
const CORE_VALUES = [
  {
    num: '01',
    title: 'Unconditional Accountability',
    desc: 'We operate as a unified design-build engineering entity, taking complete end-to-end responsibility from feasibility to 30-year lifecycle operation.',
    tag: 'Single-Source Delivery'
  },
  {
    num: '02',
    title: 'Engineering Rigor',
    desc: 'Zero tolerance for substandard execution. Every hydraulic formula, structural pour, and weld conforms 100% to CPHEEO and BIS 10500 standards.',
    tag: 'Statutory Excellence'
  },
  {
    num: '03',
    title: 'Technological Innovation',
    desc: 'Pioneering smart water grids across Madhya Pradesh with native Siemens/Schneider PLC panels, 4G cellular RTUs, and DMA leak telemetry.',
    tag: 'SCADA & IoT'
  },
  {
    num: '04',
    title: 'Environmental Stewardship',
    desc: 'Preserving groundwater ecosystems through clean solar water pumping, Zero Liquid Discharge (ZLD) plants, and efficient energy utilization.',
    tag: 'Sustainable Future'
  }
];

export default function AboutPage({ onNavigate, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('certifications');
  const headerReveal = useScrollReveal();
  const statsReveal  = useScrollReveal();

  const tabs = [
    { id: 'certifications', label: 'ISO Certifications' },
    { id: 'leadership',     label: 'Executive Leadership' },
    { id: 'departments',    label: 'Departments' },
    { id: 'offices',        label: 'Offices & Labs' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24 selection:bg-[#1e60aa] selection:text-white">
      {/* Subtle tech background */}
      <div className="fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ══ 1. HEADER ══ */}
        <div ref={headerReveal.ref} className="reveal-up text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1e60aa] border border-blue-100 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Established 1998 in Bhopal, Madhya Pradesh</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            27+ Years of Engineering Solutions That Protect Lives &amp; Water Resources
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            From humble beginnings in Bhopal to managing ₹200+ Crore in state-level water infrastructure schemes, municipal WTPs, and smart SCADA grids across India.
          </p>
        </div>

        {/* ══ 2. ANIMATED STATS BAND (Clean Light Theme) ══ */}
        <div ref={statsReveal.ref} className="reveal-scale rounded-3xl bg-white text-slate-900 p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-200/90">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-60 h-60 rounded-full bg-sky-100/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <AnimatedStat end={27}  suffix="+" label="Years of Engineering Legacy" />
            <AnimatedStat end={150} suffix="+" label="Mega Schemes Delivered" />
            <AnimatedStat end={200} suffix=" Cr+" label="Portfolio Value (₹)" />
            <AnimatedStat end={80}  suffix="+" label="Total Team Strength" />
          </div>

          {/* Mini progress indicators */}
          <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            {[
              { label: 'Government JJM & AMRUT Schemes', pct: 70 },
              { label: 'Automation & SCADA Integration', pct: 85 },
              { label: 'ISO Statutory Compliance Score', pct: 100 },
            ].map((bar, i) => (
              <div key={i} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="flex justify-between text-[11px] text-slate-600 mb-1.5 font-medium">
                  <span className="font-semibold text-slate-700">{bar.label}</span>
                  <span className="font-bold text-[#1e60aa]">{bar.pct}%</span>
                </div>
                <div className="h-2 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-[1.6s] ease-out"
                    style={{ width: `${bar.pct}%`, background: 'linear-gradient(90deg, #1e60aa, #009fd9)', transitionDelay: `${i * 200 + 400}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 3. MISSION & VISION SECTION (New Enhanced Addition) ══ */}
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100">
              <Compass className="w-3.5 h-3.5 text-sky-600" /> Strategic Purpose
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Mission &amp; Vision
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Guided by engineering discipline and social responsibility, we build infrastructure that sustains human life for generations.
            </p>
          </div>

          {/* Side-by-Side Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="reveal-bounce card-bounce bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e60aa] flex items-center justify-center mb-6 shadow-xs border border-blue-100 group-hover:scale-110 group-hover:bg-[#1e60aa] group-hover:text-white transition-all duration-300">
                <Target className="w-7 h-7" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#1e60aa]">
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
                Engineering Potable Water Security for India
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                To design, construct, and maintain resilient water infrastructure—from raw river intake wells and turnkey multi-MLD treatment plants to extensive deep distribution pipelines and intelligent SCADA telemetry—ensuring safe, continuous potable water reaches every urban center, rural habitation, and industrial plant with zero-defect execution.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  ✦ BIS 10500 Compliant
                </span>
                <span className="text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  ✦ Zero-Leakage Networks
                </span>
                <span className="text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  ✦ Rapid Disaster Response
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="reveal-bounce card-bounce delay-150 bg-gradient-to-br from-[#1e60aa] via-[#1a5496] to-[#0f3b70] p-8 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-6 shadow-xs border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1e60aa] transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-sky-300">
                Our Vision
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                The National Benchmark in Water Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-3 leading-relaxed font-normal">
                To stand as India's most trusted, technologically forward, and accountable water engineering enterprise—advancing smart sustainable water ecosystems through cutting-edge PLC automation, zero-leakage networks, and lifecycle stewardship that preserves precious water resources for future generations.
              </p>

              <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full">
                  ✦ Pan-India Leadership
                </span>
                <span className="text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full">
                  ✦ IoT &amp; Cloud Telemetry
                </span>
                <span className="text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full">
                  ✦ Ecological Preservation
                </span>
              </div>
            </div>
          </div>

          {/* 4 Core Values Grid */}
          <div className="pt-4">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">The Principles That Guide Our Civil &amp; Mechanical Works</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CORE_VALUES.map((val, idx) => (
                <div 
                  key={idx}
                  className={`reveal-bounce card-bounce delay-${idx * 75} bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#1e60aa] group`}
                >
                  <div className="text-2xl font-light text-slate-300 font-mono mb-2 group-hover:text-[#1e60aa] transition-colors">
                    {val.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {val.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-[#1e60aa] uppercase tracking-wider">
                    {val.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ 4. TABBED DEEP DIVE (Certifications, Leadership, Departments, Offices) ══ */}
        <div className="mt-14 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e60aa]">Organizational Structure</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Credentials, Leadership &amp; Facilities
            </h2>
          </div>

          {/* Tab Bar */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/60 rounded-2xl border border-slate-300/50 max-w-lg mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1e60aa] text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:bg-white/60 font-medium'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── CERTIFICATIONS ── */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-tab-content">
              {siteConfig.company.certifications.map((cert, idx) => (
                <div key={idx} className="card-bounce bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm group hover:border-[#1e60aa]">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1e60aa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-slate-900">{cert.code}</div>
                  <div className="text-xs font-semibold text-[#1e60aa] mt-0.5">{cert.title}</div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{cert.desc}</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Valid &amp; Active Compliance</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── LEADERSHIP ── */}
          {activeTab === 'leadership' && (
            <div id="leadership-team" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-tab-content">
              {siteConfig.company.leadership.map((leader, idx) => (
                <div key={idx} className="card-bounce bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#1e60aa]">
                  <div className="relative shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-xl bg-[#1e60aa] flex items-center justify-center shadow-md">
                      <Building2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{leader.name}</h3>
                    <div className="text-xs font-semibold text-[#1e60aa]">{leader.role}</div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 justify-center sm:justify-start">
                      <Activity className="w-3 h-3 text-emerald-500" />
                      {leader.experience}
                    </div>
                    <p className="text-xs text-slate-600 pt-2 leading-relaxed">{leader.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── DEPARTMENTS ── */}
          {activeTab === 'departments' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-tab-content">
              {siteConfig.company.departments.map((dept, idx) => (
                <div key={idx} className="card-bounce bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:border-[#1e60aa]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={dept.banner}
                      alt={dept.name}
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80'; }}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-sky-400" />
                      {dept.count}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4">
                      <h3 className="text-white text-sm font-bold">{dept.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-600 leading-relaxed">{dept.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Specialized Division
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── OFFICES ── */}
          {activeTab === 'offices' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-tab-content">
              {siteConfig.company.offices.map((office, idx) => (
                <div key={idx} className="card-bounce bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm group hover:border-[#1e60aa] transition-all">
                  <div className="text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider mb-1">{office.type}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{office.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{office.address}</p>
                  <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">{office.role}</div>
                  <a href={`tel:${office.phone}`} className="text-[#1e60aa] text-xs font-bold hover:underline flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ══ 5. COMPANY TIMELINE (Beautified & Modern Corporate Design) ══ */}
        <div className="pt-10 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>A Legacy of Proven Reliability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              27 Years of Engineering Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Tracing our journey from a specialized Bhopal water consultancy to a ₹200+ Crore turnkey water infrastructure enterprise.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Continuous Vertical Glowing Spine */}
            <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#1e60aa] via-sky-400 to-emerald-400 sm:-translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(30,96,170,0.35)]" />

            <div className="space-y-12 sm:space-y-16">
              {[
                {
                  year: '1998',
                  era: 'Founding Inception',
                  title: 'Company Founded in Bhopal',
                  desc: 'Orbit Engineering Solutions established by Manoj Tiwari and Vijay Tiwari with a focused vision: delivering zero-compromise hydraulic engineering and turnkey water infrastructure across Madhya Pradesh.',
                  tag: 'Inception in Bhopal',
                  metric: 'Bhopal Headquarters',
                  icon: Building2,
                  side: 'left'
                },
                {
                  year: '2004',
                  era: 'Municipal Scale',
                  title: 'First Turnkey Municipal WTP',
                  desc: 'Engineered and commissioned our first landmark 10 MLD Water Treatment Plant for Nagar Palika, setting benchmark execution in rapid gravity sand filters, chemical dosing, and zero-defect civil basins.',
                  tag: '10 MLD Turnkey WTP',
                  metric: 'Municipal Handover',
                  icon: Droplets,
                  side: 'right'
                },
                {
                  year: '2010',
                  era: 'Automation & SCADA',
                  title: 'SCADA & Automation Division',
                  desc: 'Launched specialized control panel assembly and software telemetry division, deploying Siemens S7-1200/1500 & Schneider PLCs with 4G cellular RTUs for real-time remote water distribution control.',
                  tag: 'Siemens & Schneider PLCs',
                  metric: 'In-House Panel Fabrication',
                  icon: Zap,
                  side: 'left'
                },
                {
                  year: '2015',
                  era: 'National Missions',
                  title: 'Jal Jeevan Mission & AMRUT Empanelment',
                  desc: 'Officially empanelled as an approved turnkey engineering vendor for the national Har Ghar Jal / Jal Jeevan Mission and AMRUT 2.0 schemes, implementing multi-village piped water supply networks.',
                  tag: 'Approved JJM / AMRUT Partner',
                  metric: 'Multi-Village Schemes',
                  icon: Award,
                  side: 'right'
                },
                {
                  year: '2020',
                  era: 'Statutory Benchmarks',
                  title: 'Triple ISO 9001 / 14001 / 45001',
                  desc: 'Achieved world-standard triple ISO certification simultaneously for Quality Management, Environmental Preservation, and Occupational Health & Safety, confirming zero-compromise governance.',
                  tag: 'Triple ISO Accredited',
                  metric: '100% Quality Audited',
                  icon: ShieldCheck,
                  side: 'left'
                },
                {
                  year: '2024 - 2026',
                  era: 'National Scale & Cloud Telemetry',
                  title: '₹200+ Crore Milestone & Smart Telemetry',
                  desc: 'Crossed ₹200+ Crore in cumulative executed schemes and 150+ successfully commissioned projects. Pioneering 24/7 central video wall SCADA command rooms, DMA leak detection, and PM KUSUM solar pumping.',
                  tag: '₹200+ Cr Cumulative Portfolio',
                  metric: '150+ Mega Schemes',
                  icon: Activity,
                  side: 'right'
                }
              ].map((item, i) => {
                const IconComponent = item.icon;
                const isLeft = item.side === 'left';

                return (
                  <div 
                    key={i} 
                    className={`reveal-bounce delay-${i * 80} relative flex items-center ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    } flex-col sm:flex-row pl-16 sm:pl-0 group/item`}
                  >
                    {/* Central Glowing Node Hub */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-sky-400/80 shadow-lg flex items-center justify-center group-hover/item:scale-120 group-hover/item:border-[#1e60aa] group-hover/item:shadow-sky-300/50 transition-all duration-300">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#1e60aa] shadow-[0_0_8px_#1e60aa]" />
                      </div>
                    </div>

                    {/* Timeline Card Container */}
                    <div className={`w-full sm:w-[calc(50%-42px)] ${isLeft ? 'sm:pr-4' : 'sm:pl-4'}`}>
                      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1e60aa] card-bounce relative group/card">
                        
                        {/* Top Metadata Strip */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#1e60aa] to-sky-500 shadow-xs">
                            <span>{item.year}</span>
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            {item.era}
                          </span>
                        </div>

                        {/* Title with Icon */}
                        <div className="flex items-start gap-3 mt-1">
                          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1e60aa] flex items-center justify-center shrink-0 border border-blue-100 group-hover/card:bg-[#1e60aa] group-hover/card:text-white transition-colors duration-300">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover/card:text-[#1e60aa] transition-colors leading-snug">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                          {item.desc}
                        </p>

                        {/* Bottom Tag & Metric Bar */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="text-[11px] font-semibold text-[#1e60aa] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-600" />
                            {item.tag}
                          </span>
                          <span className="text-[11px] font-bold text-slate-700">
                            {item.metric}
                          </span>
                        </div>

                      </div>
                    </div>

                    {/* Spacer for other side on desktop */}
                    <div className="hidden sm:block w-[calc(50%-42px)]" />

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══ 6. SEVEN COMMITMENTS TO ASSET INTEGRITY (Moved from ServicesPage to End of AboutPage) ══ */}
        <div className="pt-12 space-y-10 border-t border-slate-200">
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Engineering Governance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Seven Commitments to Asset Integrity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our engineering governance frameworks guarantee zero-leakage, CPHEEO compliance, and uninterrupted lifecycle performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEVEN_COMMITMENTS.map((c, i) => (
              <div
                key={c.num}
                className={`reveal-bounce card-bounce delay-${i * 60} p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#1e60aa] space-y-3 group`}
              >
                <div className="text-3xl font-light text-slate-300 group-hover:text-[#1e60aa] transition-colors font-mono">
                  {c.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>
            ))}

            {/* 7th Summary Card with Action Button */}
            <div className="reveal-bounce card-bounce delay-400 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1e60aa] to-[#009fd9] text-white shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-3xl font-light text-white/70 font-mono">07</div>
                <h3 className="text-base font-bold text-white tracking-tight mt-1">Lifecycle O&amp;M Stewardship</h3>
                <p className="text-xs text-blue-50 leading-relaxed mt-2 font-normal">
                  Multi-year comprehensive AMC support, rapid spare parts deployment, and dedicated field engineer teams ready 24/7 across Madhya Pradesh and pan-India.
                </p>
              </div>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-[#1e60aa] font-bold text-xs shadow hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <span>Consult Our Engineering Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
