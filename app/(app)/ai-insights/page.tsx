'use client'

import { useState } from 'react'
import {
  Droplet,
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Scale,
  Zap,
  ShieldCheck,
  Brain,
  Layers,
  Clock,
} from 'lucide-react'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function AIInsightsPage() {
  const [timeRange, setTimeRange] = useState<'1hr' | '6hr' | '24hr'>('6hr')

  // Dynamic datasets for 1 Hour, 6 Hours, and 24 Hours
  const forecastData1Hr = [
    { time: '10:00', demand: 2350, recycled: 1980 },
    { time: '10:10', demand: 2420, recycled: 2010 },
    { time: '10:20', demand: 2500, recycled: 2040 },
    { time: '10:30', demand: 2620, recycled: 2080 },
    { time: '10:40', demand: 2580, recycled: 2060 },
    { time: '10:50', demand: 2510, recycled: 2040 },
    { time: '11:00', demand: 2480, recycled: 2020 },
  ]

  const forecastData6Hr = [
    { time: '10:00', demand: 2400, recycled: 2000 },
    { time: '11:00', demand: 2750, recycled: 2100 },
    { time: '12:00', demand: 2980, recycled: 2150 },
    { time: '13:00', demand: 2850, recycled: 2120 },
    { time: '14:00', demand: 3100, recycled: 2200 },
    { time: '15:00', demand: 3250, recycled: 2180 },
    { time: '16:00', demand: 2900, recycled: 2140 },
  ]

  const forecastData24Hr = [
    { time: '00:00', demand: 1600, recycled: 1400 },
    { time: '04:00', demand: 1450, recycled: 1350 },
    { time: '08:00', demand: 2400, recycled: 2000 },
    { time: '12:00', demand: 3200, recycled: 2250 },
    { time: '16:00', demand: 3100, recycled: 2200 },
    { time: '20:00', demand: 2200, recycled: 1850 },
    { time: '24:00', demand: 1700, recycled: 1450 },
  ]

  const activeForecastData =
    timeRange === '1hr'
      ? forecastData1Hr
      : timeRange === '6hr'
      ? forecastData6Hr
      : forecastData24Hr

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Title Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">AI Intelligence</h1>
          <p className="text-xs font-semibold text-[#2563EB] mt-0.5 tracking-wide uppercase">
            Predictive Water Intelligence & Closed-Loop Optimization Engine
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#2563EB] border border-blue-200 rounded-full text-xs font-semibold shadow-xs">
            <Brain className="w-3.5 h-3.5" />
            Neural Model v3.4 Active (94.2% Accuracy)
          </div>
        </div>
      </div>

      {/* AI Water Balance Forecast Section (Top Card) */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#EBF5FF] text-[#2563EB] rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                AI Water Balance Forecast
              </h2>
              <p className="text-xs text-gray-500">Autonomous dynamic balancing across cooling operations</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">
              Confidence: 94.2%
            </span>
          </div>
        </div>

        {/* Forecast Metrics 4 Column Grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Predicted Demand */}
          <div className="p-4 bg-gradient-to-b from-blue-50/60 to-transparent rounded-xl border border-blue-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#2563EB] flex items-center justify-center flex-shrink-0">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold">Predicted Demand</div>
              <div className="text-2xl font-black text-[#2563EB] mt-0.5">
                2,980 <span className="text-xs font-semibold text-gray-500">L</span>
              </div>
              <span className="text-[10px] font-semibold text-blue-600">Peak at 14:00</span>
            </div>
          </div>

          {/* Recycled Water Available */}
          <div className="p-4 bg-gradient-to-b from-emerald-50/60 to-transparent rounded-xl border border-emerald-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold">Recycled Available</div>
              <div className="text-2xl font-black text-[#22C55E] mt-0.5">
                2,150 <span className="text-xs font-semibold text-gray-500">L</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-600">72.1% Coverage</span>
            </div>
          </div>

          {/* Water Balance */}
          <div className="p-4 bg-gradient-to-b from-rose-50/60 to-transparent rounded-xl border border-rose-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100/80 text-rose-600 flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold">Net Balance</div>
              <div className="text-2xl font-black text-rose-600 mt-0.5">
                -830 <span className="text-xs font-semibold text-gray-500">L</span>
              </div>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.2 rounded">
                DEFICIT
              </span>
            </div>
          </div>

          {/* Freshwater Required */}
          <div className="p-4 bg-gradient-to-b from-purple-50/60 to-transparent rounded-xl border border-purple-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center flex-shrink-0">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold">Freshwater Required</div>
              <div className="text-2xl font-black text-purple-600 mt-0.5">
                830 <span className="text-xs font-semibold text-gray-500">L</span>
              </div>
              <span className="text-[10px] font-semibold text-purple-600">Managed Makeup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: AI Recommendation (Left) + Demand Forecast Chart with Working Toggles (Right) */}
      <div className="grid grid-cols-12 gap-6">
        {/* AI Recommendation Card - High visual depth and tight layout */}
        <div className="col-span-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  AI Action Recommendation
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                HIGH PRIORITY
              </span>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 bg-gradient-to-br from-blue-50/70 to-emerald-50/40 border border-blue-100 rounded-xl mb-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Increase recycled water allocation by 15%
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Divert auxiliary treated effluent into Chiller Bank #2 to preempt the 14:00 thermal demand spike and avoid freshwater penalty draw.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center">
            <div className="p-2 bg-gray-50/80 rounded-lg">
              <div className="text-[11px] text-gray-500 font-medium">Expected Saved</div>
              <div className="text-base font-black text-emerald-600 mt-0.5">620 L</div>
            </div>
            <div className="p-2 bg-gray-50/80 rounded-lg">
              <div className="text-[11px] text-gray-500 font-medium">Confidence</div>
              <div className="text-base font-black text-gray-900 mt-0.5">94.6%</div>
            </div>
            <div className="p-2 bg-gray-50/80 rounded-lg">
              <div className="text-[11px] text-gray-500 font-medium">Payback ROI</div>
              <div className="text-base font-black text-[#2563EB] mt-0.5">₹1,420</div>
            </div>
          </div>
        </div>

        {/* Demand Forecast Chart with 1h / 6h / 24h Interactive Toggles */}
        <div className="col-span-7 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Water Demand vs Availability Forecast
                </h2>
              </div>
              {/* Working interactive timeframe toggle */}
              <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setTimeRange('1hr')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === '1hr'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  1 Hour
                </button>
                <button
                  onClick={() => setTimeRange('6hr')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === '6hr'
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  6 Hours
                </button>
                <button
                  onClick={() => setTimeRange('24hr')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === '24hr'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  24 Hours
                </button>
              </div>
            </div>

            <div className="h-56 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeForecastData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="aiDemandGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="aiRecycledGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis
                    dataKey="time"
                    stroke="#9CA3AF"
                    style={{ fontSize: '10px' }}
                    label={{ value: 'Time', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: '#6B7280' } }}
                  />
                  <YAxis
                    stroke="#9CA3AF"
                    style={{ fontSize: '10px' }}
                    tickFormatter={(val) => (val >= 1000 ? `${(val / 1000).toFixed(1)}k` : `${val}`)}
                    label={{ value: 'Liters (L)', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: '#6B7280' } }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                    }}
                  />
                  <Area type="monotone" dataKey="demand" stroke="#2563EB" strokeWidth={2.5} fill="url(#aiDemandGrad)" name="Predicted Cooling Demand (L)" />
                  <Area type="monotone" dataKey="recycled" stroke="#22C55E" strokeWidth={2.5} fill="url(#aiRecycledGrad)" name="Predicted Recycled Water (L)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 pt-3 border-t border-gray-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
              <span className="text-gray-700 font-medium">Predicted Cooling Demand</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
              <span className="text-gray-700 font-medium">Predicted Recycled Availability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: AI Insights with Depth (Left) + AI Optimization Grading (Right) */}
      <div className="grid grid-cols-12 gap-6">
        {/* AI Insights Card - Enhanced Depth, Better Contrast, High Hierarchy */}
        <div className="col-span-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg">
                  <Brain className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Live AI Telemetry Insights
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-gray-500">Continuous Stream</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-blue-50/80 to-transparent border border-blue-100/70 rounded-xl shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Thermal Load Surge Detected</div>
                  <div className="text-xs text-gray-600 mt-0.5">Cooling demand expected to rise +18% between 2:00 PM and 5:00 PM.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-amber-50/80 to-transparent border border-amber-100/70 rounded-xl shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Storage Depletion Warning</div>
                  <div className="text-xs text-gray-600 mt-0.5">Recycled water reserve decreasing faster than projected; throttling secondary flow.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Model retraining cycle in 38 mins</span>
            <button className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1">
              View Model Logs <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* AI Optimization Grading Card - Meaningful Logic & Score */}
        <div className="col-span-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Optimization Health Grade
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                GRADE A+
              </span>
            </div>

            <div className="flex items-center gap-6 py-2">
              {/* Gauge */}
              <div className="relative w-36 h-28 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 100 80" className="w-full h-full">
                  <path
                    d="M 15 70 A 35 35 0 0 1 85 70"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15 70 A 35 35 0 0 1 85 70"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="110 110"
                    strokeDashoffset={110 - (89 / 100) * 110}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-3">
                  <span className="text-3xl font-black text-gray-900 leading-none">89</span>
                  <span className="text-[10px] text-gray-500 font-bold mt-0.5">/ 100</span>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Excellent Efficiency Profile</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Closed-loop recycling is operating at <strong className="text-gray-900">89.4% peak efficiency</strong>. Recirculation latency is reduced by 34% compared to baseline manual controls.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 text-center text-xs">
            <div>
              <span className="text-[10px] text-gray-500 block">Circularity</span>
              <span className="font-bold text-gray-900">82.4%</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block">Loss Rate</span>
              <span className="font-bold text-emerald-600">&lt; 3.8%</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block">Energy Index</span>
              <span className="font-bold text-blue-600">0.42 kWh/kL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
