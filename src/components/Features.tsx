import { useState } from 'react';
import {
  MapPin,
  Search,
  Star,
  MessageCircle,
  Users,
  Bell,
  Calendar,
  Send,
  Heart,
  Database,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

type FeatureCategory = 'visibility' | 'capture' | 'conversion' | 'retention';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: FeatureCategory;
  highlights: string[];
}

const features: Feature[] = [
  {
    id: 'gmb-ai',
    title: 'Google Business Profile AI',
    description: 'Optimize your Google Maps & Search presence with AI. Get better rankings, more visibility, and attract local customers automatically.',
    icon: MapPin,
    category: 'visibility',
    highlights: ['Auto-optimize listings', 'Category suggestions', 'Photo recommendations', 'Post scheduling'],
  },
  {
    id: 'seo-local',
    title: 'SEO & Local Ranking',
    description: 'Find relevant keywords and create optimized content that ranks your business at the top of local search results.',
    icon: Search,
    category: 'visibility',
    highlights: ['Keyword research', 'Content generation', 'Local SEO audit', 'Rank tracking'],
  },
  {
    id: 'reviews',
    title: 'Google Reviews Manager',
    description: 'Generate more positive reviews and respond professionally to all feedback. Build trust and improve your local ranking.',
    icon: Star,
    category: 'visibility',
    highlights: ['Review request automation', 'AI response suggestions', 'Review monitoring', 'Sentiment analysis'],
  },
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp AI Agent',
    description: 'Your AI-powered assistant that answers customer questions 24/7 on WhatsApp. Never miss a lead again.',
    icon: MessageCircle,
    category: 'capture',
    highlights: ['24/7 auto-replies', 'Smart conversation', 'Multi-language support', 'Lead qualification'],
  },
  {
    id: 'lead-mgmt',
    title: 'Lead Management',
    description: 'Track every lead coming from calls, WhatsApp, website, and walk-ins in one unified dashboard.',
    icon: Users,
    category: 'capture',
    highlights: ['Unified inbox', 'Lead scoring', 'Source tracking', 'Auto-assignment'],
  },
  {
    id: 'followups',
    title: 'Smart Follow-ups',
    description: 'Automatically follow up with potential customers through WhatsApp, SMS, or calls at the perfect time.',
    icon: Bell,
    category: 'conversion',
    highlights: ['Auto follow-up sequences', 'Timing optimization', 'Multi-channel outreach', 'A/B testing'],
  },
  {
    id: 'appointments',
    title: 'Appointment Booking',
    description: 'Handle appointment and booking enquiries automatically. Let customers self-schedule via WhatsApp or web.',
    icon: Calendar,
    category: 'conversion',
    highlights: ['Self-scheduling links', 'Calendar sync', 'Reminders & confirmations', 'No-show reduction'],
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    description: 'Send targeted offers, campaigns, and promotions directly to your customers via WhatsApp broadcasts.',
    icon: Send,
    category: 'conversion',
    highlights: ['Broadcast campaigns', 'Template messages', 'Segment audiences', 'Delivery tracking'],
  },
  {
    id: 'retention',
    title: 'Customer Retention',
    description: 'AI identifies customers who may return and sends personalized offers to bring them back.',
    icon: Heart,
    category: 'retention',
    highlights: ['Churn prediction', 'Personalized offers', 'Loyalty programs', 'Win-back campaigns'],
  },
  {
    id: 'crm',
    title: 'CRM & Data Hub',
    description: 'Store all lead, customer, and business information in one organized, searchable database.',
    icon: Database,
    category: 'retention',
    highlights: ['Customer profiles', 'Interaction history', 'Custom fields', 'Data import/export'],
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'See your business performance in real-time with detailed analytics, reports, and actionable insights.',
    icon: BarChart3,
    category: 'retention',
    highlights: ['Revenue tracking', 'Lead funnel analysis', 'ROI reports', 'Team performance'],
  },
];

const categories = [
  { id: 'visibility' as FeatureCategory, label: 'Google Visibility', color: 'from-blue-500 to-cyan-500' },
  { id: 'capture' as FeatureCategory, label: 'Lead Capture', color: 'from-orange-500 to-amber-500' },
  { id: 'conversion' as FeatureCategory, label: 'Lead Conversion', color: 'from-green-500 to-emerald-500' },
  { id: 'retention' as FeatureCategory, label: 'Repeat Business', color: 'from-purple-500 to-violet-500' },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>('visibility');

  const filteredFeatures = features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full mb-6">
            <span className="text-sm font-medium text-orange-700">All Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Dominate Local Market
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            11 powerful AI-driven features working together to grow your business from every angle.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{feature.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-gray-500">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
