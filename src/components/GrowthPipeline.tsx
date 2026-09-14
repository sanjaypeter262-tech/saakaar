import { Search, UserCheck, RefreshCw, TrendingUp, ArrowRight } from 'lucide-react';

export default function GrowthPipeline() {
  const stages = [
    {
      id: 1,
      title: 'Google Visibility',
      subtitle: 'Get Found Online',
      description: 'Optimize your Google Maps & Search presence with AI-powered tools. Rank higher, get more calls.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      shadowColor: 'shadow-blue-200',
      metrics: ['Top 3 Rankings', '500+ Monthly Views', '4.8★ Rating'],
    },
    {
      id: 2,
      title: 'Lead Capture',
      subtitle: 'Capture Every Lead',
      description: 'Never miss a customer. WhatsApp AI answers 24/7, captures leads from calls, messages & walk-ins.',
      icon: UserCheck,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      shadowColor: 'shadow-orange-200',
      metrics: ['24/7 AI Response', 'Auto Lead Capture', 'Zero Missed Calls'],
    },
    {
      id: 3,
      title: 'Lead Conversion',
      subtitle: 'Convert More Customers',
      description: 'Automated follow-ups, appointment booking, and WhatsApp marketing to turn leads into paying customers.',
      icon: RefreshCw,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      shadowColor: 'shadow-green-200',
      metrics: ['3x Follow-ups', '63% Conversion', 'Auto Bookings'],
    },
    {
      id: 4,
      title: 'Repeat Business',
      subtitle: 'Keep Customers Coming Back',
      description: 'AI identifies returning customers, sends personalized offers, and builds loyalty for long-term growth.',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      shadowColor: 'shadow-purple-200',
      metrics: ['40% Repeat Rate', 'Smart Offers', 'Loyalty Tracking'],
    },
  ];

  return (
    <section id="pipeline" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full mb-6">
            <span className="text-sm font-medium text-orange-700">The Growth Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Complete System to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Four interconnected stages that work together to bring customers in, convert them, 
            and keep them coming back — all powered by AI.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 to-purple-200 -translate-y-1/2 z-0"></div>

          {stages.map((stage, index) => (
            <div key={stage.id} className="relative z-10">
              {/* Arrow between cards (Desktop) */}
              {index < stages.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider ${stage.textColor}`}>
                    Step {stage.id}
                  </span>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center shadow-lg ${stage.shadowColor}`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3">{stage.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{stage.description}</p>

                {/* Metrics */}
                <div className="space-y-2">
                  {stage.metrics.map((metric, i) => (
                    <div key={i} className={`flex items-center gap-2 ${stage.bgColor} rounded-lg px-3 py-2`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.color}`}></div>
                      <span className={`text-xs font-medium ${stage.textColor}`}>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
