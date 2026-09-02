import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home',      page: 'home' },
    { label: 'About',     page: 'about' },
    { label: 'Services',  page: 'services' },
    { label: 'Ecosystem', page: 'ecosystem' },
    { label: 'Contact',   page: 'contact' },
  ];

  const isLinkActive = (page) => activePage === page;

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between">

        {/* ══ 1. BRAND LOGO ══ */}
        <button 
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer flex-shrink-0 select-none text-left focus:outline-none"
        >
          {/* Logo icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/logo.png" 
              alt="ORBIT Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Typography */}
          <div className="flex flex-col">
            <span className="font-extrabold text-[19px] sm:text-[21px] leading-none tracking-tight text-[#1668b5]">
              ORBIT
            </span>
            <span className="font-bold text-[8px] sm:text-[9.5px] tracking-[0.2em] uppercase leading-none mt-1 text-[#009fd9]">
              ENGINEERING SOLUTIONS
            </span>
          </div>
        </button>

        {/* ══ 2. NAVIGATION PILLS ══ */}
        <nav className="hidden lg:flex items-center">
          <div className="relative flex items-center gap-1 p-1 bg-slate-100 rounded-full border border-slate-200/80">
            {navLinks.map(({ label, page }) => {
              const active = isLinkActive(page);
              return (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                    active
                      ? 'bg-[#1e60aa] text-white shadow-[0_2px_8px_rgba(30,96,170,0.35)]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ══ 3. QUICK ACTIONS ══ */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+917024128029"
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#1e60aa] transition-colors py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            <Phone className="w-3.5 h-3.5 text-[#1e60aa]" />
            <span>+91 70241 28029</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4.5 py-2 rounded-full bg-[#1e60aa] hover:bg-[#165091] text-white text-xs font-bold shadow-md shadow-[#1e60aa]/20 hover:scale-105 transition-all duration-200 cursor-pointer glow-btn"
          >
            Enquire Now
          </button>
        </div>

        {/* ══ 3. MOBILE MENU TOGGLE ══ */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ══ MOBILE DROPDOWN DRAWER ══ */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-4 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          {navLinks.map(({ label, page }) => {
            const active = isLinkActive(page);
            return (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  active
                    ? 'bg-[#1e60aa] text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </button>
            );
          })}

          {/* Mobile Direct Action Buttons */}
          <div className="pt-3 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href="tel:+917024128029"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-50 text-[#1668b5] rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
            <a
              href="https://wa.me/919039075048?text=Hello%20Orbit%20Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
