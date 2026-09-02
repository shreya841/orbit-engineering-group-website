import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, 
  Sparkles, Building2, ExternalLink, ArrowRight, Zap, Activity, 
  ChevronRight, Users, Shield, Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useAnimations';

// Animated typing placeholder
function AnimatedPlaceholder({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = texts[idx];
    const speed = deleting ? 35 : 65;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < target.length) {
        setDisplayed(target.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === target.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && charIdx > 0) {
        setDisplayed(target.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx]);

  return (
    <span className="text-[#1e60aa] font-semibold">
      {displayed}<span className="animate-pulse">|</span>
    </span>
  );
}

// Live status ticker
function StatusTicker() {
  const items = [
    { icon: '🟢', text: 'Engineers Online Now' },
    { icon: '⚡', text: 'Avg. Response: 2 Hours' },
    { icon: '📍', text: 'Serving 12+ Districts in MP' },
    { icon: '🏆', text: '150+ Projects Completed' },
  ];
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % items.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center gap-2 text-xs text-slate-600 animate-in fade-in duration-300" key={cur}>
      <span>{items[cur].icon}</span>
      <span className="font-medium">{items[cur].text}</span>
    </div>
  );
}

// Floating social proof
function SocialProofBubbles() {
  const proofs = [
    { name: 'MPUDC', action: 'requested BOQ', ago: '3 min ago' },
    { name: 'NPCL', action: 'inquired about SCADA', ago: '11 min ago' },
    { name: 'Indore Municipal', action: 'viewed WTP services', ago: '28 min ago' },
  ];
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCur(c => (c + 1) % proofs.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return visible ? (
    <div className="animate-in slide-in-from-left-3 fade-in duration-300 flex items-center gap-3 bg-white border border-slate-200 shadow-md rounded-2xl px-4 py-2.5">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1e60aa] to-sky-400 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
        {proofs[cur].name[0]}
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-900">{proofs[cur].name}</div>
        <div className="text-[11px] text-slate-500">{proofs[cur].action} · <span className="text-[#1e60aa]">{proofs[cur].ago}</span></div>
      </div>
    </div>
  ) : null;
}

const SERVICE_OPTIONS = [
  { id: 'wtp', label: 'Water Treatment Plant (WTP / STP / RO)', icon: '💧', color: 'border-blue-300 bg-blue-50 text-blue-800' },
  { id: 'scada', label: 'SCADA & PLC Automation', icon: '⚙️', color: 'border-purple-300 bg-purple-50 text-purple-800' },
  { id: 'jjm', label: 'JJM / AMRUT Telemetry Scheme', icon: '🏛️', color: 'border-emerald-300 bg-emerald-50 text-emerald-800' },
  { id: 'meters', label: 'Flow Meters & Water Analyzers', icon: '📊', color: 'border-amber-300 bg-amber-50 text-amber-800' },
  { id: 'amc', label: 'Annual Maintenance Contract (AMC)', icon: '🔧', color: 'border-slate-300 bg-slate-50 text-slate-800' },
  { id: 'solar', label: 'Solar Pump System / PM KUSUM', icon: '☀️', color: 'border-orange-300 bg-orange-50 text-orange-800' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', organization: '',
    serviceType: 'Water Treatment Plant (WTP / STP / RO / ETP)',
    message: '', selectedService: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // multi-step form
  const [fieldFocus, setFieldFocus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const headerReveal = useScrollReveal();
  const formReveal   = useScrollReveal();
  const infoReveal   = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 }, colors: ['#1e60aa', '#38bdf8', '#34d399'] });
      setTimeout(() => confetti({ particleCount: 60, spread: 120, origin: { y: 0.45 }, angle: 60, colors: ['#f59e0b', '#fff'] }), 300);
    } catch {}
  };

  const handleWhatsApp = () => {
    const text = `Hello Orbit Engineering Solutions,%0A%0AName: ${formData.name || 'Client'}%0AOrg: ${formData.organization || 'N/A'}%0APhone: ${formData.phone || 'N/A'}%0AInterest: ${formData.serviceType}%0A%0AMessage: ${formData.message || 'I would like a quotation and technical review.'}`;
    window.open(`https://wa.me/919039075048?text=${text}`, '_blank');
  };

  const nextStep = () => { if (step < 3) setStep(s => s + 1); };
  const prevStep = () => { if (step > 1) setStep(s => s - 1); };

  const stepValid = () => {
    if (step === 1) return formData.selectedService;
    if (step === 2) return formData.name && formData.phone;
    return true;
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24">
      <div className="fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div ref={headerReveal.ref} className="reveal-up text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with Bhopal Engineering HQ</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Get Technical Quotation &amp; Project Consultation
          </h1>

          {/* Animated typing */}
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            We specialize in{' '}
            <AnimatedPlaceholder texts={[
              'Water Treatment Plants (WTP)',
              'SCADA & PLC Automation',
              'JJM / AMRUT Telemetry',
              'Industrial ETP / ZLD Systems',
              'Solar Pump Schemes',
            ]} />
          </p>

          {/* Live status bar */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <StatusTicker />
          </div>
        </div>

        {/* ── SOCIAL PROOF ── */}
        <div className="flex justify-center mb-8">
          <SocialProofBubbles />
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ══ MULTI-STEP FORM ══ */}
          <div ref={formReveal.ref} className="reveal-right lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-3d-card border border-slate-200 gradient-border">

              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="text-center py-10 space-y-5 animate-in zoom-in-95 fade-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto float-slow">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Inquiry Submitted!</h2>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1.5 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our senior engineers in Bhopal will review your project and respond within <span className="text-[#1e60aa] font-bold">24 hours</span>.
                    </p>
                  </div>

                  {/* What happens next */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2.5 max-w-sm mx-auto">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">What Happens Next</div>
                    {[
                      { icon: '📞', text: 'Engineer calls within 2 hours' },
                      { icon: '📋', text: 'BOQ & proposal prepared in 24h' },
                      { icon: '🚀', text: 'Site visit scheduled if needed' },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <span className="text-base">{s.icon}</span>
                        <span>{s.text}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-2xl shadow transition-all hover:scale-105 cursor-pointer glow-btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Connect on WhatsApp Now
                  </button>
                </div>
              ) : (
                <>
                  {/* ── STEP PROGRESS BAR ── */}
                  <div className="mb-7">
                    <div className="flex items-center gap-0 mb-4">
                      {['Select Service', 'Your Details', 'Project Scope'].map((label, i) => (
                        <React.Fragment key={i}>
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                              step > i + 1 ? 'bg-emerald-500 text-white' :
                              step === i + 1 ? 'bg-[#1e60aa] text-white shadow-md scale-110' :
                              'bg-slate-200 text-slate-500'
                            }`}>
                              {step > i + 1 ? '✓' : i + 1}
                            </div>
                            <div className={`text-[10px] font-medium mt-1 ${step === i + 1 ? 'text-[#1e60aa]' : 'text-slate-400'}`}>{label}</div>
                          </div>
                          {i < 2 && (
                            <div className={`flex-1 h-0.5 mb-5 mx-1 transition-all duration-500 ${step > i + 1 ? 'bg-emerald-400' : 'bg-slate-200'}`} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* ── STEP 1: Service Selection ── */}
                    {step === 1 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 mb-1">What can we help you with? *</h3>
                          <p className="text-xs text-slate-500 mb-4">Select the service category that matches your project</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {SERVICE_OPTIONS.map((svc) => (
                              <button
                                key={svc.id}
                                type="button"
                                onClick={() => setFormData(f => ({ ...f, selectedService: svc.id, serviceType: svc.label }))}
                                className={`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                                  formData.selectedService === svc.id
                                    ? 'border-[#1e60aa] bg-blue-50 shadow-md scale-[1.02]'
                                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="text-xl">{svc.icon}</span>
                                  <div>
                                    <div className="text-xs font-semibold text-slate-900 leading-snug">{svc.label}</div>
                                    {formData.selectedService === svc.id && (
                                      <div className="text-[10px] text-[#1e60aa] font-medium mt-0.5 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Selected
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 2: Personal Details ── */}
                    {step === 2 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">Tell us about yourself *</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                            <input
                              type="text" required
                              placeholder="Er. Rajesh Sharma"
                              value={formData.name}
                              onFocus={() => setFieldFocus('name')}
                              onBlur={() => setFieldFocus(null)}
                              onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                              className={`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${fieldFocus === 'name' ? 'border-[#1e60aa] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                            <input
                              type="tel" required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onFocus={() => setFieldFocus('phone')}
                              onBlur={() => setFieldFocus(null)}
                              onChange={(e) => setFormData(f => ({ ...f, phone: e.target.value }))}
                              className={`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${fieldFocus === 'phone' ? 'border-[#1e60aa] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Organization / Authority</label>
                            <input
                              type="text"
                              placeholder="MPUDCL / Nagar Parishad"
                              value={formData.organization}
                              onFocus={() => setFieldFocus('org')}
                              onBlur={() => setFieldFocus(null)}
                              onChange={(e) => setFormData(f => ({ ...f, organization: e.target.value }))}
                              className={`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${fieldFocus === 'org' ? 'border-[#1e60aa] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                            <input
                              type="email"
                              placeholder="name@company.com"
                              value={formData.email}
                              onFocus={() => setFieldFocus('email')}
                              onBlur={() => setFieldFocus(null)}
                              onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                              className={`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${fieldFocus === 'email' ? 'border-[#1e60aa] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                            />
                          </div>
                        </div>

                        {/* Selected service preview */}
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl flex items-center gap-3">
                          <span className="text-2xl">{SERVICE_OPTIONS.find(s => s.id === formData.selectedService)?.icon}</span>
                          <div>
                            <div className="text-[10px] text-[#1e60aa] font-semibold uppercase tracking-wide">Selected Service</div>
                            <div className="text-xs font-semibold text-slate-900">{formData.serviceType}</div>
                          </div>
                          <button type="button" onClick={() => setStep(1)} className="ml-auto text-[11px] text-[#1e60aa] font-semibold hover:underline cursor-pointer">Change</button>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 3: Project Scope ── */}
                    {step === 3 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">Describe your project scope</h3>
                        <div className="relative">
                          <textarea
                            rows={5}
                            placeholder="Provide: capacity (MLD), site location, current issues, tender specifications, or BOQ requirements..."
                            value={formData.message}
                            onFocus={() => setFieldFocus('msg')}
                            onBlur={() => setFieldFocus(null)}
                            onChange={(e) => { setFormData(f => ({ ...f, message: e.target.value })); setCharCount(e.target.value.length); }}
                            className={`w-full px-4 py-3 text-xs rounded-2xl border-2 focus:outline-none resize-none transition-all ${fieldFocus === 'msg' ? 'border-[#1e60aa] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                          />
                          <div className="absolute bottom-2.5 right-3 text-[10px] text-slate-400">{charCount}/500</div>
                        </div>

                        {/* Quick prompt chips */}
                        <div className="flex flex-wrap gap-1.5">
                          <div className="text-[10px] text-slate-500 font-medium w-full mb-0.5">Quick add:</div>
                          {['Need BOQ & Tender Docs', 'Site Inspection Required', '10 MLD Capacity', 'SCADA Integration', '24/7 O&M Required'].map(chip => (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => setFormData(f => ({ ...f, message: f.message + (f.message ? ', ' : '') + chip }))}
                              className="text-[10px] px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-[#1e60aa] border border-slate-200 hover:border-blue-200 rounded-lg transition-all cursor-pointer font-medium"
                            >
                              + {chip}
                            </button>
                          ))}
                        </div>

                        {/* Summary preview */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5 text-xs">
                          <div className="font-bold text-slate-700 text-[11px] uppercase tracking-wide mb-2">Inquiry Summary</div>
                          <div className="flex justify-between"><span className="text-slate-500">Name:</span><span className="font-semibold">{formData.name}</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Phone:</span><span className="font-semibold">{formData.phone}</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Service:</span><span className="font-semibold text-[#1e60aa]">{SERVICE_OPTIONS.find(s => s.id === formData.selectedService)?.icon} {SERVICE_OPTIONS.find(s => s.id === formData.selectedService)?.label?.split('(')[0]}</span></div>
                        </div>
                      </div>
                    )}

                    {/* ── NAVIGATION BUTTONS ── */}
                    <div className="flex items-center gap-3 pt-2">
                      {step > 1 && (
                        <button type="button" onClick={prevStep}
                          className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                        >
                          ← Back
                        </button>
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!stepValid()}
                          className={`flex-1 py-3 text-xs font-bold text-white rounded-xl transition-all flex items-center justify-center gap-2 ${stepValid() ? 'bg-[#1e60aa] hover:bg-[#165091] cursor-pointer shadow-md hover:scale-[1.02] glow-btn' : 'bg-slate-300 cursor-not-allowed'}`}
                        >
                          Continue <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex-1 py-3 text-xs font-bold text-white bg-[#1e60aa] hover:bg-[#165091] rounded-xl shadow-md hover:scale-[1.02] transition-all cursor-pointer glow-btn flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" /> Submit Inquiry
                        </button>
                      )}

                      <button type="button" onClick={handleWhatsApp}
                        className="px-4 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ── RIGHT PANEL: Office Info + Trust ── */}
          <div ref={infoReveal.ref} className="reveal-left lg:col-span-5 space-y-5">

            {/* Office Cards (Light Theme) */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-md border border-slate-200 space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider">Direct Contact Channels</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Bhopal HQ &amp; Facilities</h3>
              </div>

              {siteConfig.company.offices.map((off, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#1e60aa] transition-colors group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider">{off.type}</div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Online" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 mb-1">{off.name}</div>
                  <div className="text-[11px] text-slate-600 mb-2.5 leading-relaxed">{off.address}</div>
                  <a href={`tel:${off.phone}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e60aa] hover:text-[#165091] transition-colors">
                    <Phone className="w-3.5 h-3.5" /> {off.phone}
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <Clock className="w-3.5 h-3.5 text-[#1e60aa]" />
                <span>Mon–Sat: 10:00 AM – 7:00 PM (Sun: Closed)</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Why Trust Orbit Engineering</div>
              {[
                { icon: Shield, label: 'Triple ISO Certified', sub: 'ISO 9001 · 14001 · 45001', color: 'text-[#1e60aa]' },
                { icon: Star, label: 'IndiaMART Verified Seller', sub: '150+ 5-Star Ratings', color: 'text-amber-600' },
                { icon: Users, label: '80+ Qualified Engineers', sub: '27 Years Combined Experience', color: 'text-emerald-700' },
                { icon: Activity, label: '24/7 On-Call Support', sub: 'Field Response &lt;4 Hours in MP', color: 'text-purple-700' },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100`}>
                    <t.icon className={`w-4 h-4 ${t.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{t.label}</div>
                    <div className="text-[10px] text-slate-500" dangerouslySetInnerHTML={{ __html: t.sub }} />
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick contact */}
            <a
              href={siteConfig.company.contact.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold">Chat on WhatsApp</div>
                  <div className="text-[10px] text-emerald-200">+91 90390 75048 · Usually replies in minutes</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
