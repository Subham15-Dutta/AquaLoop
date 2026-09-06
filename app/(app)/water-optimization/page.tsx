'use client'

import { useState } from 'react'
import {
  Droplets,
  TrendingUp,
  TrendingDown,
  Award,
  Zap,
  Target,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Lightbulb,
  ArrowUpRight,
  Waves,
  Recycle,
  Activity,
} from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
  PieChart,
  Pie,
} from 'recharts'

export default function WaterOptimizationPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'quarter'>('month')

  // Water Efficiency Score History
  const efficiencyTrendData = [
    { month: 'Jan', efficiency: 68, target: 75 },
    { month: 'Feb', efficiency: 72, target: 75 },
    { month: 'Mar', efficiency: 75, target: 78 },
    { month: 'Apr', efficiency: 79, target: 80 },
    { month: 'May', efficiency: 82, target: 82 },
    { month: 'Jun', efficiency: 87, target: 85 },
  ]

  // Water Loss Analysis Breakdown
  const lossBreakdownData = [
    { source: 'Evaporation Losses', loss: 240, percentage: 32, color: '#F59E0B' },
    { source: 'Leakage & Spillage', loss: 180, percentage: 24, color: '#EF4444' },
    { source: 'Blowdown Waste', loss: 150, percentage: 20, color: '#8B5CF6' },
    { source: 'System Inefficiency', loss: 120, percentage: 16, color: '#6B7280' },
    { source: 'Unaccounted', loss: 60, percentage: 8, color: '#94A3B8' },
  ]

  // Optimization Opportunities
  const opportunitiesData = [
    {
      category: 'Recycling',
      current: 82,
      potential: 94,
      impact: 'high',
      savings: 1200,
    },
    {
      category: 'Efficiency',
      current: 76,
      potential: 88,
      impact: 'high',
      savings: 980,
    },
    {
      category: 'Leak Prevention',
      current: 88,
      potential: 98,
      impact: 'medium',
      savings: 560,
    },
    {
      category: 'Reuse Systems',
      current: 70,
      potential: 85,
      impact: 'high',
      savings: 840,
    },
  ]

  // Cost Savings Projection
  const savingsProjectionData = [
    { month: 'Jul', actual: 32400, projected: 38000 },
    { month: 'Aug', actual: 36800, projected: 42000 },
    { month: 'Sep', actual: 41200, projected: 46000 },
    { month: 'Oct', projected: 49500 },
    { month: 'Nov', projected: 52800 },
    { month: 'Dec', projected: 56200 },
  ]

  // Resource Allocation Radar
  const allocationData = [
    { metric: 'Infrastructure', score: 85 },
    { metric: 'Technology', score: 78 },
    { metric: 'Monitoring', score: 92 },
    { metric: 'Maintenance', score: 74 },
    { metric: 'Training', score: 68 },
    { metric: 'Automation', score: 88 },
  ]

  // KPI Performance Metrics
  const kpiData = [
    { name: 'Water Reuse Rate', value: 87.4, target: 90, unit: '%', status: 'good' },
    { name: 'Leak Detection Rate', value: 94.2, target: 95, unit: '%', status: 'excellent' },
    { name: 'Treatment Efficiency', value: 91.8, target: 92, unit: '%', status: 'good' },
    { name: 'Cost per Liter', value: 0.18, target: 0.15, unit: '₹', status: 'warning' },
  ]

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">Water Optimization</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            AI-Driven Efficiency Analysis, Loss Reduction & Cost Optimization Intelligence
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Export Report
          </button>
          <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm">
            <Zap className="w-4 h-4" />
            Run AI Optimization
          </button>
        </div>
      </div>

      {/* Top KPI Cards - 4 Columns */}
      <div className="grid grid-cols-4 gap-4">
        {/* Overall Efficiency Score */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">Efficiency Score</span>
              <Award className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-4xl font-black mb-1">87.4%</div>
            <div className="flex items-center gap-1 text-xs font-semibold text-blue-100">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+5.2% from last month</span>
            </div>
          </div>
        </div>

        {/* Total Water Saved */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Total Water Saved</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">2.84M <span className="text-base text-gray-500">L</span></div>
          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18.4% this month</span>
          </div>
        </div>

        {/* Monthly Cost Savings */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Cost Savings (MTD)</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">₹41,200</div>
          <div className="flex items-center gap-1 text-xs font-semibold text-purple-600 mt-1">
            <span>On track for ₹52K+ savings</span>
          </div>
        </div>

        {/* Active Optimization Recommendations */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">AI Recommendations</span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">8 <span className="text-base text-gray-500">Active</span></div>
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 mt-1">
            <span>Potential savings: ₹28K/mo</span>
          </div>
        </div>
      </div>

      {/* Middle Row: Efficiency Trend & Water Loss Analysis */}
      <div className="grid grid-cols-12 gap-6">
        {/* Water Efficiency Score Trend */}
        <div className="col-span-7 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Water Efficiency Score Trend</h2>
              <p className="text-xs text-gray-500 mt-0.5">Performance vs Target over 6 months</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Current:</span>
              <span className="text-lg font-black text-blue-600">87.4%</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={efficiencyTrendData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="efficiencyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                label={{ value: 'Month', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: '#6B7280' } }}
              />
              <YAxis
                domain={[60, 100]}
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                label={{ value: 'Efficiency (%)', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: '11px', fill: '#6B7280' } }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Area type="monotone" dataKey="efficiency" stroke="#2563EB" strokeWidth={3} fill="url(#efficiencyGrad)" name="Actual Efficiency (%)" />
              <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Target (%)" />
            </AreaChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#2563EB]"></span>
              <span className="text-gray-700 font-medium">Actual Efficiency</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 bg-[#F59E0B]"></span>
              <span className="text-gray-700 font-medium">Target Benchmark</span>
            </div>
          </div>
        </div>

        {/* Water Loss Analysis Breakdown */}
        <div className="col-span-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Water Loss Analysis</h2>
            <p className="text-xs text-gray-500 mt-0.5">Loss distribution by category (Liters/day)</p>
          </div>

          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={lossBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={2}
                    dataKey="loss"
                  >
                    {lossBreakdownData.map((entry) => (
                      <Cell key={entry.source} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-2xl font-black text-gray-900">750 L</div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Daily Loss</div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {lossBreakdownData.map((item) => (
              <div key={item.source} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-xs text-gray-700 font-medium">{item.source}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-900">{item.loss} L</span>
                  <span className="text-xs text-gray-500 font-semibold w-10 text-right">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimization Opportunities Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Optimization Opportunities</h2>
              <p className="text-xs text-gray-500">AI-identified improvement areas with projected impact</p>
            </div>
          </div>
          <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full font-semibold">
            Total Potential: 3,580 L/day
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {opportunitiesData.map((opp) => (
            <div
              key={opp.category}
              className="p-4 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-md bg-gradient-to-b from-gray-50/50 to-white"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">{opp.category}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    opp.impact === 'high'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {opp.impact.toUpperCase()} IMPACT
                </span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Current</span>
                  <span className="font-bold text-gray-900">{opp.current}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${opp.current}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Potential</span>
                  <span className="font-bold text-emerald-600">{opp.potential}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all"
                    style={{ width: `${opp.potential}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-600 font-medium">Savings/day</span>
                <span className="text-sm font-black text-blue-600">{opp.savings} L</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Cost Savings Projection & Resource Allocation */}
      <div className="grid grid-cols-12 gap-6">
        {/* Cost Savings Projection */}
        <div className="col-span-7 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Cost Savings Projection</h2>
              <p className="text-xs text-gray-500 mt-0.5">6-month forward forecast with optimization rollout</p>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>28% Projected Growth</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={savingsProjectionData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                label={{ value: 'Month', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: '#6B7280' } }}
              />
              <YAxis
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                tickFormatter={(val) => `₹${val / 1000}K`}
                label={{ value: 'Savings (₹)', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: '11px', fill: '#6B7280' } }}
              />
              <Tooltip formatter={(value: any) => `₹${value.toLocaleString()}`} />
              <Bar dataKey="actual" fill="#7C3AED" radius={[6, 6, 0, 0]} name="Actual Savings (₹)" />
              <Bar dataKey="projected" fill="#C4B5FD" radius={[6, 6, 0, 0]} name="Projected Savings (₹)" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#7C3AED]"></span>
              <span className="text-gray-700 font-medium">Realized Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#C4B5FD]"></span>
              <span className="text-gray-700 font-medium">Projected Savings</span>
            </div>
          </div>
        </div>

        {/* Resource Allocation Insights Radar */}
        <div className="col-span-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Resource Allocation Insights</h2>
            <p className="text-xs text-gray-500 mt-0.5">Investment distribution across optimization dimensions</p>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={allocationData}>
              <PolarGrid stroke="#E2E8F0" />
              <PolarAngleAxis dataKey="metric" stroke="#6B7280" style={{ fontSize: '11px' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9CA3AF" style={{ fontSize: '10px' }} />
              <Radar name="Allocation Score" dataKey="score" stroke="#2563EB" fill="#3B82F6" fillOpacity={0.4} strokeWidth={2} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>

          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg Investment</span>
              <span className="font-bold text-gray-900">80.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Top Area</span>
              <span className="font-bold text-blue-600">Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance KPIs Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Performance KPI Dashboard</h2>
            <p className="text-xs text-gray-500">Real-time operational metrics against defined targets</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {kpiData.map((kpi) => (
            <div key={kpi.name} className="p-4 rounded-xl bg-gradient-to-b from-gray-50/70 to-white border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-700">{kpi.name}</span>
                {kpi.status === 'excellent' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : kpi.status === 'good' ? (
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                )}
              </div>

              <div className="mb-2">
                <div className="text-2xl font-black text-gray-900">
                  {kpi.unit === '₹' ? kpi.unit : ''}
                  {kpi.value}
                  {kpi.unit !== '₹' ? kpi.unit : ''}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Target: {kpi.unit === '₹' ? kpi.unit : ''}
                  {kpi.target}
                  {kpi.unit !== '₹' ? kpi.unit : ''}
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all ${
                    kpi.status === 'excellent'
                      ? 'bg-emerald-500'
                      : kpi.status === 'good'
                      ? 'bg-blue-500'
                      : 'bg-amber-500'
                  }`}
                  style={{
                    width: kpi.unit === '%' ? `${(kpi.value / kpi.target) * 100}%` : `${((kpi.target - kpi.value) / kpi.target) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations Action Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold mb-1">8 AI Optimization Recommendations Ready for Deployment</h3>
            <p className="text-sm text-blue-100">
              Implementing all recommendations can save an additional <span className="font-bold">₹28,400/month</span> and reduce water loss by{' '}
              <span className="font-bold">32%</span>
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-white text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2">
          Review & Apply Recommendations
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
