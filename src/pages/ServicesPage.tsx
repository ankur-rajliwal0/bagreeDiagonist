import { Activity, Stethoscope, Microscope, Brain, HeartPulse, Baby } from 'lucide-react';
import { WaveDivider } from '../components/Shapes';

export default function ServicesPage() {
  const services = [
    { icon: <Activity className="w-8 h-8" />, name: 'MRI (1.5 Tesla)', desc: 'High-resolution imaging for accurate diagnosis.' },
    { icon: <Brain className="w-8 h-8" />, name: 'CT Scan', desc: 'Advanced computed tomography scanning.' },
    { icon: <Stethoscope className="w-8 h-8" />, name: 'Digital X-ray', desc: 'Quick and precise digital x-ray services.' },
    { icon: <Baby className="w-8 h-8" />, name: '3D/4D Sonography', desc: 'Clear and detailed ultrasound imaging.' },
    { icon: <HeartPulse className="w-8 h-8" />, name: 'Colour Doppler', desc: 'Vascular ultrasound for blood flow analysis.' },
    { icon: <Activity className="w-8 h-8" />, name: '2D Echo, CTMT, ECG', desc: 'Comprehensive cardiac health checkups.' },
    { icon: <Brain className="w-8 h-8" />, name: 'Holter Monitor, EEG', desc: 'Continuous monitoring of heart and brain activity.' },
    { icon: <Microscope className="w-8 h-8" />, name: 'Laboratory Test', desc: 'Full range of pathological testing.' },
    { icon: <Activity className="w-8 h-8" />, name: 'Hormones', desc: 'Specialized hormone level testing.' },
    { icon: <Microscope className="w-8 h-8" />, name: 'Biopsy', desc: 'Tissue sampling and histopathology.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header for Services */}
      <div className="relative pt-32 pb-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Medical Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-slate-900/90 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Comprehensive diagnostic services using the latest technology.
          </p>
        </div>
        
        <WaveDivider className="text-slate-50" />
      </div>

      <div className="py-24 bg-slate-50 relative -mt-20 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-50 rounded-full group-hover:scale-[3] transition-transform duration-700 ease-out z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.name}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
