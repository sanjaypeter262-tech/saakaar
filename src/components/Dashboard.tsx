import { useState } from 'react';
import {
  BarChart3,
  MessageCircle,
  Users,
  Star,
  TrendingUp,
  Phone,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

type DashboardTab = 'overview' | 'leads' | 'analytics';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  const tabs = [
    { id: 'overview' as DashboardTab, label: 'Overview', icon: BarChart3 },
    { id: 'leads' as DashboardTab, label: 'Leads', icon: Users },
    { id: 'analytics' as DashboardTab, label: 'Analytics', icon: TrendingUp },
  ];

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full mb-6">
            <span className="text-sm font-medium text-orange-700">Live Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Business at a{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Glance
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Real-time insights into your leads, conversions, and business growth — all in one beautiful dashboard.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-sm text-gray-400 ml-2">Saakaar Academy Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Last updated: Just now</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-100 px-6">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'leads' && <LeadsTab />}
            {activeTab === 'analytics' && <AnalyticsTab />}
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewTab() {
  const stats = [
    { label: 'Total Leads', value: '2,847', change: '+12.5%', up: true, icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Conversions', value: '1,794', change: '+8.3%', up: true, icon: Target, color: 'bg-green-50 text-green-600' },
    { label: 'WhatsApp Chats', value: '4,521', change: '+23.1%', up: true, icon: MessageCircle, color: 'bg-orange-50 text-orange-600' },
    { label: 'Google Rating', value: '4.8', change: '+0.2', up: true, icon: Star, color: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Lead Generation Trend</h4>
          <div className="h-40 flex items-end gap-1.5">
            {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className="bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs text-gray-400">Jan</span>
            <span className="text-xs text-gray-400">Jun</span>
            <span className="text-xs text-gray-400">Dec</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Lead Sources</h4>
          <div className="space-y-3">
            {[
              { source: 'Google Maps', pct: 42, color: 'bg-blue-500' },
              { source: 'WhatsApp', pct: 28, color: 'bg-green-500' },
              { source: 'Phone Calls', pct: 18, color: 'bg-orange-500' },
              { source: 'Walk-ins', pct: 12, color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{item.source}</span>
                  <span className="font-medium text-gray-900">{item.pct}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadsTab() {
  const leads = [
    { name: 'Rahul Sharma', source: 'Google Maps', status: 'New', phone: '+91 98765 43210', time: '2 min ago' },
    { name: 'Priya Patel', source: 'WhatsApp', status: 'Hot', phone: '+91 87654 32109', time: '5 min ago' },
    { name: 'Amit Kumar', source: 'Phone Call', status: 'Follow-up', phone: '+91 76543 21098', time: '12 min ago' },
    { name: 'Sneha Gupta', source: 'Walk-in', status: 'Converted', phone: '+91 65432 10987', time: '25 min ago' },
    { name: 'Vikram Singh', source: 'Google Maps', status: 'New', phone: '+91 54321 09876', time: '32 min ago' },
    { name: 'Anita Desai', source: 'WhatsApp', status: 'Hot', phone: '+91 43210 98765', time: '45 min ago' },
  ];

  const statusColors: Record<string, string> = {
    New: 'bg-blue-100 text-blue-700',
    Hot: 'bg-red-100 text-red-700',
    'Follow-up': 'bg-amber-100 text-amber-700',
    Converted: 'bg-green-100 text-green-700',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-700">Recent Leads</h4>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg">12 New</span>
          <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-lg">5 Hot</span>
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-lg">8 Converted</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Source</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Time</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {lead.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{lead.source}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusColors[lead.status]}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{lead.phone}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{lead.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Conversion Funnel */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Conversion Funnel</h4>
          <div className="space-y-3">
            {[
              { stage: 'Website Visitors', count: '12,450', width: '100%' },
              { stage: 'Leads Captured', count: '2,847', width: '72%' },
              { stage: 'Qualified Leads', count: '1,920', width: '50%' },
              { stage: 'Conversions', count: '1,794', width: '38%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-28 text-xs text-gray-600">{item.stage}</div>
                <div className="flex-1">
                  <div className="h-7 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-lg flex items-center justify-end pr-2"
                      style={{ width: item.width }}
                    >
                      <span className="text-xs font-medium text-white">{item.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Revenue Overview</h4>
          <div className="text-center py-4">
            <p className="text-3xl font-bold text-gray-900">₹4,52,000</p>
            <p className="text-sm text-gray-500 mt-1">This Month</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <ArrowUpRight className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">+32% vs last month</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center p-2 bg-white rounded-lg">
              <p className="text-sm font-bold text-gray-900">₹1.2L</p>
              <p className="text-xs text-gray-500">Week 1</p>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <p className="text-sm font-bold text-gray-900">₹1.5L</p>
              <p className="text-xs text-gray-500">Week 2</p>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <p className="text-sm font-bold text-gray-900">₹1.8L</p>
              <p className="text-xs text-gray-500">Week 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Avg Response Time', value: '< 2 min', icon: MessageCircle },
          { label: 'Appointments Booked', value: '156', icon: Calendar },
          { label: 'Calls Handled', value: '342', icon: Phone },
          { label: 'Repeat Customers', value: '67%', icon: Users },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
            <item.icon className="w-5 h-5 text-orange-500 mx-auto mb-2" />
            <p className="text-lg font-bold text-gray-900">{item.value}</p>
            <p className="text-xs text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
