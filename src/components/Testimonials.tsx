import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Rahul Sharma", text: "Very professional and hygienic center. The MRI was done smoothly and reports were provided on time. Highly recommend.", rating: 5 },
    { name: "Priya Singh", text: "Dr. G.L. Meena and the staff are very cooperative. Best 3D sonography center in Kalwar Road area.", rating: 5 },
    { name: "Amit Verma", text: "Accurate diagnostics and very clean environment. The CT Scan process was fast and hassle-free.", rating: 4 },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Patient Feedback</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Patients Say</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
              <h4 className="font-bold text-slate-900">{review.name}</h4>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
