import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Activity, ShieldCheck, Cpu, Wifi, Droplets, Zap, ChevronRight } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  const videoRef = useRef(null);
  const [videoSrc] = useState('/hero.mp4');
  const [tick, setTick] = useState(0);
  const [flowVal, setFlowVal] = useState(45.8);

  // Simulate live telemetry fluctuation
  useEffect(() => {
    const id = setInterval(() => {
      setFlowVal(v => parseFloat((v + (Math.random() - 0.5) * 0.4).toFixed(1)));
      setTick(t => t + 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      const p = video.play();
      if (p) p.catch(() => { video.muted = true; video.play().catch(() => {}); });
    };
    const onEnded = () => { video.currentTime = 0; play(); };
    const onTime  = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) { video.currentTime = 0; play(); }
    };
    video.addEventListener('ended', onEnded);
    video.addEventListener('timeupdate', onTime);
    play();
    return () => { video.removeEventListener('ended', onEnded); video.removeEventListener('timeupdate', onTime); };
  }, [videoSrc]);

  const glassPanel = {
    background: 'linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(0,180,255,0.18) 50%, rgba(255,255,255,0.20) 100%)',
    backdropFilter: 'blur(28px) saturate(1.8)',
    WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
    border: '1.5px solid rgba(255,255,255,0.72)',
    boxShadow: '0 8px 32px rgba(0,140,255,0.25), inset 0 2px 3px rgba(255,255,255,0.95)',
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-sky-950 flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-20">

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/25 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/20 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent z-[1] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full my-auto">
        <div className="max-w-3xl text-left space-y-6">

          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full animate-in fade-in slide-in-from-left-6 duration-700"
            style={{ ...glassPanel, boxShadow: '0 4px 18px rgba(0,140,255,0.3), inset 0 1.5px 2px rgba(255,255,255,0.9)' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white" style={{ textShadow: '0 0 12px rgba(0,200,255,0.7), 0 1px 4px rgba(0,0,0,0.5)' }}>
              India's Premier Water &amp; Automation Enterprise
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-5xl md:text-[3.6rem] font-bold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
            style={{ textShadow: '0 0 40px rgba(0,200,255,0.4), 0 3px 16px rgba(0,0,0,0.6)' }}
          >
            We{' '}
            <span
              className="font-extrabold"
              style={{
                background: 'linear-gradient(90deg, #7de8ff, #38bdf8, #60efff, #a5f3fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(0,200,255,0.8))'
              }}
            >
              engineer &amp; build
            </span>
            <br />
            modern water systems
          </h1>

          {/* Sub-paragraph */}
          <div
            className="max-w-xl rounded-2xl px-5 py-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
            style={glassPanel}
          >
            <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.97)', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
              Empowering industries with smart, sustainable, and high-performance water treatment technologies. At{' '}
              <strong style={{ color: '#7de8ff', textShadow: '0 0 14px rgba(0,220,255,0.8)' }}>ORBIT Engineering Solutions</strong>
              , we transform complex industrial water challenges into pure, efficient, and reusable resources.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-7 py-3.5 rounded-full text-white text-sm font-bold flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 glow-btn"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #38bdf8 100%)',
                boxShadow: '0 0 30px rgba(0,190,255,0.65), 0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate?.('services')}
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ ...glassPanel, color: 'rgba(255,255,255,0.97)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >
              Explore Services
            </button>
          </div>

          {/* Stats bar */}
          <div
            className="inline-flex flex-wrap items-center gap-6 sm:gap-10 rounded-2xl px-6 py-4 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500"
            style={glassPanel}
          >
            {[['₹200+ Cr', 'Portfolio Delivered'], ['150+', 'Mega Schemes'], ['27+ Years', 'Legacy (Est. 1998)']].map(([val, lbl], i, arr) => (
              <React.Fragment key={i}>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white" style={{ textShadow: '0 0 20px rgba(0,200,255,0.6), 0 2px 8px rgba(0,0,0,0.5)' }}>{val}</div>
                  <div className="text-[11px] font-semibold mt-0.5" style={{ color: 'rgba(180,235,255,0.85)' }}>{lbl}</div>
                </div>
                {i < arr.length - 1 && <div className="h-8 w-px hidden sm:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,200,255,0.5), transparent)' }} />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ══ LIVE SCADA TELEMETRY WIDGET ══ */}
      <div
        className="hidden md:flex flex-col gap-2.5 absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-12 z-20 pointer-events-auto"
        style={{ width: '330px' }}
      >
        <div
          className="relative rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(2,44,82,0.8) 100%)',
            backdropFilter: 'blur(24px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
            border: '1.5px solid rgba(56,189,248,0.4)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.3)',
          }}
        >
          <div className="absolute -top-px inset-x-6 h-[2px] rounded-full pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)' }} />

          <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">Live SCADA Telemetry</span>
            </div>
            <span className="text-[10px] font-bold text-sky-200 bg-white/20 px-2 py-0.5 rounded-full border border-white/25 backdrop-blur-sm">Active 24/7</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2.5">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-2.5 border border-white/20">
              <div className="text-[10px] font-medium text-slate-100 flex items-center gap-1">
                <Activity className="w-3 h-3 text-sky-300 animate-pulse" />
                <span>Real-Time Flow</span>
              </div>
              <div className="text-base font-black text-white mt-0.5 tabular-nums">{flowVal} MLD</div>
              <div className="text-[9px] text-emerald-300 font-semibold">● Normal Capacity</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-xl p-2.5 border border-white/20">
              <div className="text-[10px] font-medium text-slate-100 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-sky-300" />
                <span>Water Quality</span>
              </div>
              <div className="text-base font-black text-white mt-0.5">99.8% BIS</div>
              <div className="text-[9px] text-sky-200 font-semibold">Cl: 0.5 ppm Online</div>
            </div>
          </div>

          {/* Mini live chart simulation */}
          <div className="mt-2.5 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 flex items-end gap-0.5 h-10">
            {Array.from({ length: 24 }, (_, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all duration-700"
                style={{
                  height: `${30 + Math.sin((tick + i) * 0.4) * 12 + Math.random() * 6}%`,
                  background: i > 20 ? '#38bdf8' : 'rgba(255,255,255,0.45)',
                }}
              />
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>150+ IoT Nodes Monitored</span>
            </div>
            <button onClick={() => onNavigate?.('services')} className="text-sky-300 hover:text-white font-bold flex items-center gap-0.5 transition-colors cursor-pointer">
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
