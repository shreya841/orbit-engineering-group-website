import React, { useState, useEffect } from 'react';
import { 
  Droplets, Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, 
  Heart, ArrowUp, MessageSquare, ArrowRight, Activity, Zap, 
  Building2, ChevronRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ onOpenQuote }) {
  const [time, setTime] = useState(new Date());

  // Live clock
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const isOpen = () => {
    const h = time.getHours(), d = time.getDay();
    return d >= 1 && d <= 6 && h >= 10 && h < 19;
  };

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Ecosystem', page: 'ecosystem' },
    { label: 'Contact', page: 'contact' },
  ];

  const services = [
    'Water Treatment Plants (WTP)',
    'Intake Wells & Water Abstraction',
    'Overhead Tanks & Reservoirs (OHT/CWR)',
    'High-Capacity Pump Houses',
    'Transmission & Distribution Pipelines',
    'SCADA & Central Command Control',
    'Solar Water Pumping (PM KUSUM)',
    '24/7 O&M Annual Contracts',
  ];

  return (
    <footer id="contact" className="relative bg-[#070b14] border-t border-slate-800 text-slate-400 overflow-hidden">
      
      {/* Top radiant engineering gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1e60aa] via-sky-400 to-emerald-400" />
      
      {/* ── MINI TICKER (Dark Theme) ── */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-2.5 overflow-hidden">
        <div className="ticker-inner flex items-center gap-10 text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
          {[
            '💧 JJM Partner',
            '⚙️ SCADA Systems',
            '🏆 ₹200+ Cr Portfolio',
            '📍 Bhopal, MP',
            '🔬 Triple ISO Certified',
            '☀️ Solar Water Solutions',
            '🌊 WTP / STP / ETP',
            '📡 IoT Telemetry',
            '💧 JJM Partner',
            '⚙️ SCADA Systems',
            '🏆 ₹200+ Cr Portfolio',
            '📍 Bhopal, MP',
          ].map((item, i) => (
            <span key={i} className="shrink-0 px-2">{item}</span>
          ))}
        </div>
      </div>

      {/* ── CTA BAR (Dark Theme) ── */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 via-[#0d172a] to-slate-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-base font-bold text-white tracking-tight">Ready to start your water infrastructure project?</div>
            <div className="text-xs text-slate-400 mt-0.5">Our engineers in Bhopal will prepare a free technical proposal &amp; DPR estimate</div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href={siteConfig.company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Now
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer glow-btn"
            >
              Get Free Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID (Dark Theme) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1: Brand (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e60aa] to-[#009fd9] flex items-center justify-center text-white shadow-lg shadow-[#1e60aa]/30 border border-sky-400/20">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">ORBIT <span className="text-[#009fd9]">ENGINEERING</span></span>
                <div className="text-[10px] text-slate-400 font-semibold mt-0.5 uppercase tracking-wider">Solutions — Est. 1998, Bhopal MP</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier water infrastructure and turnkey automation enterprise. Trusted JJM, AMRUT &amp; industrial partner for 27+ years across Madhya Pradesh and pan-India.
            </p>

            {/* Live status */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold border ${
              isOpen() 
                ? 'bg-emerald-950/60 border-emerald-800/80 text-emerald-400' 
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpen() ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              {isOpen() ? 'Office Open Now (10 AM - 7 PM)' : 'Closed — Opens Mon 10 AM'}
            </div>

            {/* ISO badges */}
            <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs space-y-2 shadow-inner">
              <div className="font-bold text-sky-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Triple ISO Certified Enterprise
              </div>
              <div className="flex gap-2 flex-wrap">
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'].map(iso => (
                  <span key={iso} className="text-[10px] bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700 font-medium">{iso}</span>
                ))}
              </div>
            </div>

            <a href={siteConfig.company.contact.indiamart} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-bold">
              ⭐ Verified Seller on IndiaMART
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map(link => (
                <li key={link.page}>
                  <span className="text-slate-400 hover:text-sky-400 transition-colors cursor-default flex items-center gap-1.5 group font-medium">
                    <ChevronRight className="w-3 h-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </span>
                </li>
              ))}
              <li className="pt-1">
                <button onClick={onOpenQuote} className="text-sky-400 hover:text-sky-300 font-bold transition-colors cursor-pointer flex items-center gap-1">
                  Request Quotation →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map(s => (
                <li key={s} className="hover:text-sky-400 transition-colors cursor-default flex items-center gap-1.5 group font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">HQ Contact</h4>
            <div className="space-y-3 text-xs">
              <a href={`tel:${siteConfig.company.contact.phonePrimary}`} className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-sky-400 group-hover:text-white" />
                </div>
                <span className="font-semibold">{siteConfig.company.contact.phonePrimary}</span>
              </a>

              <a href={`tel:${siteConfig.company.contact.phoneSecondary}`} className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-sky-400 group-hover:text-white" />
                </div>
                <span className="font-semibold">{siteConfig.company.contact.phoneSecondary}</span>
              </a>

              <a href={`mailto:${siteConfig.company.contact.emails[0]}`} className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800">
                  <Mail className="w-3.5 h-3.5 text-sky-400 group-hover:text-white" />
                </div>
                <span className="truncate font-semibold">{siteConfig.company.contact.emails[0]}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="leading-relaxed">Mon–Sat: 10 AM – 7 PM<br /><span className="text-slate-500 font-medium">Sunday Closed</span></span>
              </div>

              {/* WhatsApp button */}
              <a href={siteConfig.company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all hover:scale-105 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR (Dark Theme) ── */}
      <div className="border-t border-slate-800/80 bg-[#04070d] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-400">© {new Date().getFullYear()} Orbit Engineering Solutions.</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span>Est. 1998, Bhopal, MP</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="flex items-center gap-1">All rights reserved <Heart className="w-3 h-3 text-red-500 inline fill-current" /></span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors p-1 group cursor-pointer font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </footer>
  );
}
