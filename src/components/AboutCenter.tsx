import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import aboutImage from '../assets/images/image copy.png';

export default function AboutCenter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 transform translate-x-6 translate-y-6 rounded-[2.5rem] -z-10"></div>
            <img 
              src={aboutImage} 
              alt="About Bagree Diagnostic" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3] border-[6px] border-white"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass px-8 py-6 rounded-2xl shadow-xl border border-white/50 text-center animate-float">
               <h4 className="text-4xl md:text-5xl font-extrabold text-primary mb-1">15+</h4>
               <p className="text-sm font-bold text-slate-600 uppercase tracking-wider">Years of Trust</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8 mt-12 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-primary text-sm font-semibold border border-green-100">
              <ShieldCheck className="w-4 h-4" /> About Our Center
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Pioneering <span className="text-gradient">Excellence</span> in Diagnostics
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Bagree Diagnostic & CT Scan Center, we are committed to providing the highest quality diagnostic services. With state-of-the-art equipment and a team of experienced professionals, we ensure accurate and timely results for every patient, keeping your health our top priority.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Advanced 1.5 Tesla MRI',
                'NABL Accredited Lab',
                '128 Slice CT Scan',
                'Expert Radiologists',
                '24/7 Support Available',
                'Fast & Accurate Reports'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
