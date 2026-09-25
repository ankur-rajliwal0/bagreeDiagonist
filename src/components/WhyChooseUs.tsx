import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <Award className="w-8 h-8" />, title: "Experienced Team", desc: "Over 15 years of excellence in diagnostic services." },
    { icon: <Clock className="w-8 h-8" />, title: "Quick Reports", desc: "Timely delivery of highly accurate digital reports." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Advanced Tech", desc: "State-of-the-art 1.5 Tesla MRI and scanning equipment." },
    { icon: <Users className="w-8 h-8" />, title: "Patient Care", desc: "Comfortable, clean, and patient-first approach." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Why Bagree Diagnostic</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Excellence in Healthcare</h3>
          <p className="text-slate-600 text-lg">We prioritize your health by delivering the most accurate diagnostic results utilizing cutting-edge technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h4>
              <p className="text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
