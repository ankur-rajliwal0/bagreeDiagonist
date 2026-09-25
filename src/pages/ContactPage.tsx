import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Visit Our Center</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Govindpura (Kardhani),<br />
                    Opp. Govindam Tower,<br />
                    Kalwar Road, Jaipur-302012
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Phone</h4>
                  <div className="text-slate-600 flex flex-col gap-1">
                    <a href="tel:8949521398" className="hover:text-primary transition-colors">8949521398</a>
                    <a href="tel:9680803944" className="hover:text-primary transition-colors">9680803944</a>
                    <a href="tel:0141-2405085" className="hover:text-primary transition-colors">0141-2405085</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                  <a href="mailto:bagripath123@gmail.com" className="text-slate-600 hover:text-primary transition-colors">
                    bagripath123@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[500px]">
            <div className="w-full h-full bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.39316719904!2d75.71714479999999!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e408ecda59%3A0xc345bd282b52479e!2sGovindpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
