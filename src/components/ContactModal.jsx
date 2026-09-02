import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  MapPin,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../config/siteConfig';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    serviceType: 'Water Treatment Plant (WTP / STP)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Orbit Engineering Solutions,%0A%0AMy Name: ${formData.name || 'Client'}%0AOrganization: ${formData.organization || 'N/A'}%0APhone: ${formData.phone || 'N/A'}%0AInterested In: ${formData.serviceType}%0A%0AMessage: ${formData.message || 'I would like a quote and technical consultation.'}`;
    window.open(`https://wa.me/919039075048?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-orbit-700 via-orbit-600 to-sky-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24-Hour Response Guarantee</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Request Technical Quote & Consultation
          </h3>
          <p className="text-xs text-sky-100 mt-1">
            Connect directly with Orbit Engineering Bhopal engineering experts for WTP, STP, SCADA or government tender BOQs.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our senior engineering team in Bhopal will review your requirements and reach out within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Er. Rajesh Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Organization / Department</label>
                  <input
                    type="text"
                    placeholder="e.g. Nagar Parishad / Industry"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service / Requirement Category</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none bg-white"
                >
                  <option>Water Treatment Plant (WTP / STP / RO / ETP)</option>
                  <option>SCADA & PLC Automation Panels</option>
                  <option>Jal Jeevan Mission (JJM) / AMRUT Instrumentation</option>
                  <option>Flow Meters & Water Quality Analyzers</option>
                  <option>Annual Maintenance Contract (AMC / O&M)</option>
                  <option>Solar Water Pump / PM KUSUM Project</option>
                  <option>Other Engineering Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Message</label>
                <textarea
                  rows={3}
                  placeholder="Share details like MLD capacity, site location, timeline or equipment needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 text-xs font-bold text-white bg-gradient-to-r from-orbit-600 to-sky-500 hover:from-orbit-700 hover:to-sky-600 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                >
                  Submit Quote Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center pt-2">
                🔒 Your contact info is strictly confidential and used solely for your project consultation.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
