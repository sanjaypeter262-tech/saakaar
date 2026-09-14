import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  business: string;
  content: string;
  rating: number;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Verma',
    role: 'Owner',
    business: 'Verma Dental Clinic',
    content: 'Saakaar Academy transformed our online presence completely. We went from 5 Google reviews to 120+ in just 3 months. Our appointment bookings doubled!',
    rating: 5,
    metric: '+180%',
    metricLabel: 'More Appointments',
  },
  {
    name: 'Meera Joshi',
    role: 'Founder',
    business: 'Style Studio Salon',
    content: 'The WhatsApp AI agent is a game-changer. It handles all our enquiries even at midnight. We never miss a customer now. Revenue increased by 45%!',
    rating: 5,
    metric: '+45%',
    metricLabel: 'Revenue Growth',
  },
  {
    name: 'Suresh Patel',
    role: 'Manager',
    business: 'Patel Electronics',
    content: 'The automated follow-ups and WhatsApp marketing features helped us bring back 60% of lost customers. Best investment for our business this year.',
    rating: 5,
    metric: '60%',
    metricLabel: 'Customer Recovery',
  },
  {
    name: 'Anita Sharma',
    role: 'Owner',
    business: 'Sharma Fitness Gym',
    content: 'From zero online presence to #1 in our area on Google Maps. The SEO tools and review management are incredible. New memberships up 3x!',
    rating: 5,
    metric: '3x',
    metricLabel: 'New Memberships',
  },
  {
    name: 'Karan Mehta',
    role: 'Director',
    business: 'Mehta Auto Services',
    content: 'We were losing leads to competitors who responded faster. Now our AI responds in seconds. Lead conversion went from 20% to 65%. Absolutely brilliant!',
    rating: 5,
    metric: '65%',
    metricLabel: 'Conversion Rate',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full mb-6">
            <span className="text-sm font-medium text-orange-700">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Business Owners
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            See how businesses like yours are growing with Saakaar Academy.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-orange-200" />
            
            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].business}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-orange-100">
                  <p className="text-2xl font-bold text-orange-600">{testimonials[currentIndex].metric}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentIndex].metricLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                i === currentIndex % 3
                  ? 'bg-orange-50 border-orange-200 shadow-md'
                  : 'bg-gray-50 border-gray-100 hover:border-orange-100'
              }`}
              onClick={() => setCurrentIndex(i)}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">"{t.content}"</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <span className="text-xs font-medium text-gray-700">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
