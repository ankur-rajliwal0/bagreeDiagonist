import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "What are the center timings?", a: "We are open 24/7 for emergency services. Standard reporting and tests are available from 8:00 AM to 9:00 PM." },
    { q: "Do I need an appointment for an MRI?", a: "While walk-ins are welcome, we highly recommend booking an appointment for MRI scans to avoid waiting times." },
    { q: "How long does it take to get reports?", a: "Most routine blood tests and X-Rays are available on the same day. Complex scans like MRI and CT may take up to 24 hours." },
    { q: "Do you provide home sample collection?", a: "Yes, we provide home sample collection for laboratory tests across Jaipur. Please call us to schedule." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Have Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {open === idx ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-white text-slate-600 border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
