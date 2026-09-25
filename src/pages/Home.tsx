import { ArrowRight, Phone, ShieldCheck, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { WaveDivider, SlantedDivider } from '../components/Shapes';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-32 md:pt-24 md:pb-48 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-100/50 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-green-100 text-primary text-sm font-semibold animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                State-of-the-art Diagnostics
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                Precision in <br />
                <span className="text-gradient">Diagnostics</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                Advanced imaging and pathology solutions for accurate and timely diagnosis. Trusted by top physicians across Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/30 flex justify-center items-center gap-2 hover:-translate-y-1">
                  <Phone className="w-5 h-5" /> Call for Appointment
                </Link>
                <Link to="/services" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all flex justify-center items-center hover:shadow-md">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full mt-12 md:mt-0 relative">
              {/* Decorative background shape for image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] transform rotate-3 scale-105 opacity-20 animate-float-delayed"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern MRI Machine" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <div className="glass rounded-2xl p-5 border border-white/30 text-slate-900 w-full flex items-center gap-4">
                      <div className="bg-primary p-3 rounded-xl text-white">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">1.5 Tesla MRI Scanner</p>
                        <p className="text-sm text-slate-600 font-medium">High-resolution imaging technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl text-slate-900 animate-float-delayed shadow-xl">
                <div className="flex items-center gap-3">
                  <Users className="text-primary w-8 h-8" />
                  <div>
                    <div className="font-extrabold text-2xl">10k+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Happy Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Shape */}
        <WaveDivider className="text-primary" />
      </section>

      {/* Stats/Features Banner */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">15+</h3>
              <p className="text-green-100 text-sm font-bold uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">24/7</h3>
              <p className="text-green-100 text-sm font-bold uppercase tracking-widest">Emergency</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">100%</h3>
              <p className="text-green-100 text-sm font-bold uppercase tracking-widest">Accurate Reports</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">10</h3>
              <p className="text-green-100 text-sm font-bold uppercase tracking-widest">Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      
      {/* Quick Services Preview with Image Background */}
      <section className="py-32 relative bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Laboratory" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/60"></div>
        </div>

        <SlantedDivider className="text-white" />

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" /> Comprehensive Care
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">Our Top Services</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['MRI (1.5 Tesla)', 'CT Scan', '3D/4D Sonography', 'Digital X-ray', 'Colour Doppler', 'ECG & EEG'].map((service) => (
              <span key={service} className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-white/10 font-bold text-white transition-all cursor-default">
                {service}
              </span>
            ))}
          </div>
          <Link to="/services" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-extrabold hover:bg-primary hover:text-white transition-colors text-lg shadow-xl">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <WaveDivider className="text-slate-50" />
      </section>

      <Testimonials />
      <FAQ />
    </div>
  );
}
