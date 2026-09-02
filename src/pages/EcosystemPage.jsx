import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2, ExternalLink, Award, TrendingUp, MapPin, Sparkles, ArrowRight, Users, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';

export default function EcosystemPage({ onOpenQuote }) {
  const [activeClient, setActiveClient] = useState(null);
  const headerReveal = useScrollReveal();
  const govReveal    = useScrollReveal();
  const indReveal    = useScrollReveal();

  // Impact metrics
  const impacts = [
    { val: 50, suffix: '+', label: 'Government Authorities', color: 'text-[#1e60aa]', bg: 'bg-blue-50', border: 'border-blue-100' },
    { val: 30, suffix: '+', label: 'Industrial Clients',    color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { val: 5,  suffix: 'M+', label: 'People Benefited',    color: 'text-purple-700',  bg: 'bg-purple-50',  border: 'border-purple-100' },
    { val: 12, suffix: '+', label: 'Districts Covered',     color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-100' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24">
      <div className="fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div ref={headerReveal.ref} className="reveal-up text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Partnerships &amp; Proven Track Record</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Government &amp; Industry Ecosystem
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Proudly engineering sustainable water infrastructure for state governments, municipal corporations, and India's largest private manufacturers.
          </p>
        </div>

        {/* ── IMPACT STATS ── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {impacts.map((imp, i) => {
            const { ref, count } = useCountUp(imp.val, 2000);
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal-bounce delay-${i * 100} ${imp.bg} ${imp.border} border rounded-2xl p-5 text-center hover-lift`}
              >
                <div className={`text-2xl font-semibold tracking-tight ${imp.color}`}>{count}{imp.suffix}</div>
                <div className="text-xs text-slate-600 font-medium mt-1">{imp.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── GOVERNMENT CLIENTS ── */}
        <div ref={govReveal.ref} className="mt-16">
          <div className="reveal-right mb-8 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa]">Public Sector Leadership</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Government Water Authorities</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-medium">50+ Active Partnerships</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.ecosystem.government.map((gov, idx) => (
              <div
                key={idx}
                onClick={() => setActiveClient(activeClient === idx ? null : idx)}
                className={`reveal-bounce card-bounce delay-${Math.min(idx * 80, 500)} bg-white p-5 rounded-3xl border shadow-sm flex items-center gap-4 cursor-pointer transition-all ${
                  activeClient === idx ? 'border-[#1e60aa] shadow-md' : 'border-slate-200/90 hover:border-[#1e60aa]/50'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-1">
                  <img
                    src={gov.logo}
                    alt={gov.name}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.style.display='none'; }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">{gov.name}</h3>
                  <p className="text-[11px] text-[#1e60aa] font-medium mt-0.5">{gov.tag}</p>
                  {activeClient === idx && (
                    <div className="mt-2 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Active Engineering Partner
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INDUSTRIAL CLIENTS ── */}
        <div ref={indReveal.ref} className="mt-20">
          <div className="reveal-left mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa]">Private Industry Excellence</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Industrial &amp; Corporate Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.ecosystem.industrial.map((client, idx) => (
              <div key={idx} className={`reveal-bounce card-bounce delay-${Math.min(idx * 75, 450)} bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#1e60aa] group`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-[#1e60aa] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {client.domain}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {client.location}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#1e60aa] transition-colors">{client.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{client.work}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-emerald-700 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-500" />
                    Turnkey Automation
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INDIAMART VERIFIED (Light Theme) ── */}
        <div className="mt-20 reveal-scale bg-gradient-to-r from-amber-50/80 via-blue-50/50 to-sky-50/60 text-slate-900 rounded-3xl p-8 sm:p-12 shadow-lg border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

          <div className="space-y-2.5 max-w-xl relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Verified Marketplace Credential</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Trust Certified on IndiaMART</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Orbit Engineering Solutions is a verified supplier on IndiaMART with 150+ 5-star customer ratings across Bhopal, Madhya Pradesh and pan-India.
            </p>
          </div>

          <a
            href={siteConfig.company.contact.indiamart}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-6 py-3.5 rounded-2xl bg-[#1e60aa] text-white font-bold text-xs shadow-md hover:bg-[#165091] transition-all hover:scale-105 flex items-center gap-2 shrink-0 glow-btn"
          >
            <span>Visit Verified Store</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
