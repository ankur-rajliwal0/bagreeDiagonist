import { Activity, ShieldCheck, Microscope } from 'lucide-react';
import { SlantedDivider } from '../components/Shapes';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-slate-50">
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-48 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">About Us</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto font-medium">
            Committed to providing accurate, reliable, and timely diagnostic services to our community.
          </p>
        </div>
        
        <SlantedDivider className="text-slate-50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 -mt-32 mb-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl border border-slate-100">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3 relative">
              <div className="absolute inset-0 bg-primary transform rotate-6 rounded-full scale-105 opacity-10"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white overflow-hidden mx-auto shadow-2xl bg-slate-100 flex items-center justify-center relative z-10">
                {/* Fallback avatar if no actual image is present */}
                <div className="text-center text-slate-400 flex flex-col items-center">
                  <Activity className="w-16 h-16 mb-2 text-slate-300" />
                  <span className="font-bold text-sm">G.L. Meena</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                Director's Message
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">G.L. MEENA</h3>
              <p className="text-xl text-primary mb-8 font-bold">Director, MSc. Micro</p>
              
              <div className="relative">
                <svg className="absolute -top-6 -left-8 w-16 h-16 text-slate-100 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-slate-600 text-xl leading-relaxed mb-8 relative z-10 font-medium">
                  At Bagree Diagnostic & CT Scan Center, our mission is to provide highly accurate, timely, and affordable diagnostic services. We are equipped with the latest technology, including 1.5 Tesla MRI and advanced 3D/4D Sonography, to assist clinicians in precise diagnosis and better patient care.
                </p>
              </div>
              
              <div className="inline-flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                <ShieldCheck className="text-secondary w-8 h-8" />
                <span className="font-extrabold text-lg text-slate-900">Committed to Quality Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Our Mission & Vision</h3>
            <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
              We aim to be the most trusted diagnostic center in Jaipur, bringing world-class healthcare technology to Kalwar Road and surrounding areas. We believe that an accurate diagnosis is the first step toward effective treatment.
            </p>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Our state-of-the-art laboratory and imaging equipment, operated by highly trained technicians and reviewed by specialist doctors, ensure that every report is precise and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
