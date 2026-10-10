import image2 from '../assets/images/image copy 2.png';
import image3 from '../assets/images/image copy 3.png';
import image4 from '../assets/images/image copy 4.png';
import image5 from '../assets/images/image copy 5.png';
import image6 from '../assets/images/image copy 6.png';
import image7 from '../assets/images/image copy 7.png';
import image8 from '../assets/images/image copy 8.png';
import image9 from '../assets/images/image copy 9.png';
import image10 from '../assets/images/image copy 10.png';
import { ImageIcon } from 'lucide-react';

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10];

export default function ImageSlider() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-primary text-sm font-semibold mb-4">
          <ImageIcon className="w-4 h-4" /> Gallery
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our <span className="text-gradient">Facility</span> Tour
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Take a glimpse inside our state-of-the-art diagnostic center, equipped with modern technology and patient-friendly environments.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient fades on the edges to make it look smooth */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        
        <div className="flex gap-4 w-max animate-scroll">
          {/* We duplicate the images array to make the infinite scroll seamless */}
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="w-72 md:w-96 h-64 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform hover:scale-105 duration-300"
            >
              <img 
                src={src} 
                alt={`Facility view ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
