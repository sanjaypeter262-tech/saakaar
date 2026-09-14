import { TrendingUp, Users, Star, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Businesses Growing',
      description: 'Local businesses using Saakaar Academy to grow',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      value: '340%',
      label: 'Avg. Lead Increase',
      description: 'Average increase in leads within 3 months',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Customer Rating',
      description: 'Average rating from our happy customers',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'AI Availability',
      description: 'Your AI agent works round the clock for you',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Numbers That{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of businesses already growing with Saakaar Academy's AI-powered platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-orange-400 mb-2">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            🚀 New businesses join every day. Be part of the growth revolution.
          </p>
        </div>
      </div>
    </section>
  );
}
