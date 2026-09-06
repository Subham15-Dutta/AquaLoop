'use client'

import { useState } from 'react'
import {
  Leaf,
  Droplets,
  TrendingUp,
  Award,
  Download,
  Calendar,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
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
} from 'recharts'

export default function SustainabilityPage() {
  const waterReuseTrendData = [
    { month: 'Jan', recycled: 180, freshwater: 80 },
    { month: 'Feb', recycled: 210, freshwater: 75 },
    { month: 'Mar', recycled: 230, freshwater: 65 },
    { month: 'Apr', recycled: 250, freshwater: 60 },
    { month: 'May', recycled: 280, freshwater: 50 },
    { month: 'Jun', recycled: 295, freshwater: 45 },
  ]

  const weeklySavingsData = [
    { day: 'Mon', savings: 850 },
    { day: 'Tue', savings: 920 },
    { day: 'Wed', savings: 880 },
    { day: 'Thu', savings: 1050 },
    { day: 'Fri', savings: 1120 },
    { day: 'Sat', savings: 980 },
    { day: 'Sun', savings: 940 },
  ]

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Title Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">Sustainability Reports</h1>
          <p className="text-xs font-semibold text-[#2563EB] mt-0.5 tracking-wide uppercase">
            ESG Metrics, Scope 1-3 Water Footprint & Environmental Impact
          </p>
        </div>
        <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <Download className="w-4 h-4" />
          Export ESG Compliance Dossier
        </button>
      </div>

      {/* Top 4 KPI Metrics with High Visual Hierarchy & Prominent Percentage Indicators */}
      <div className="grid grid-cols-4 gap-4">
        {/* Total Water Recycled */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Total Water Recycled</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">
            1.84M <span className="text-sm font-semibold text-gray-500">Liters</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-100/70 text-emerald-800 text-xs font-extrabold rounded-lg border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              +18.2%
            </span>
            <span className="text-xs text-gray-500 font-medium">vs last month</span>
          </div>
        </div>

        {/* Circularity Rate */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Circularity Rate</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">82.4%</div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100/70 text-blue-800 text-xs font-extrabold rounded-lg border border-blue-200">
              <TrendingUp className="w-3.5 h-3.5" />
              +4.1%
            </span>
            <span className="text-xs text-gray-500 font-medium">above target</span>
          </div>
        </div>

        {/* Carbon Offset */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Carbon Offset</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">
            14.8 <span className="text-sm font-semibold text-gray-500">Tons CO₂e</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-100/70 text-emerald-800 text-xs font-extrabold rounded-lg border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              -22.4%
            </span>
            <span className="text-xs text-gray-500 font-medium">Pumping energy</span>
          </div>
        </div>

        {/* Cost Reduction */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Water Cost Saved</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">₹3,42,000</div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-100/70 text-purple-800 text-xs font-extrabold rounded-lg border border-purple-200">
              +15.8%
            </span>
            <span className="text-xs text-gray-500 font-medium">YTD Savings</span>
          </div>
        </div>
      </div>

      {/* Middle Row: Darkened High-Contrast Graphs with Background Shading */}
      <div className="grid grid-cols-12 gap-6">
        {/* Recycled vs Freshwater Monthly Trend (High Contrast & Clear Readability) */}
        <div className="col-span-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                Water Source Distribution Trend
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Monthly breakdown in Thousands of Liters (kL)</p>
            </div>
            <div className="flex items-center gap-5 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#15803D]"></span>
                <span className="text-gray-800">Recycled Water (kL)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#1D4ED8]"></span>
                <span className="text-gray-800">Freshwater Draw (kL)</span>
              </div>
            </div>
          </div>

          <div className="h-68 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterReuseTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="#475569"
                  style={{ fontSize: '11px', fontWeight: 600 }}
                  label={{ value: 'Month', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: '#334155' } }}
                />
                <YAxis
                  stroke="#475569"
                  style={{ fontSize: '11px', fontWeight: 600 }}
                  label={{ value: 'kL', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: '#334155' } }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: 600,
                  }}
                />
                <Bar dataKey="recycled" fill="#15803D" radius={[6, 6, 0, 0]} name="Recycled Water (kL)" />
                <Bar dataKey="freshwater" fill="#1D4ED8" radius={[6, 6, 0, 0]} name="Freshwater Draw (kL)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Savings with Explicit Days & Liters Axes */}
        <div className="col-span-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">
              Weekly Water Savings
            </h2>
            <p className="text-xs text-gray-500 mb-4">Daily freshwater reduction telemetry</p>

            <div className="h-56 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklySavingsData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                  <defs>
                    <linearGradient id="savingsDarkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#15803D" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#15803D" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis
                    dataKey="day"
                    stroke="#475569"
                    style={{ fontSize: '10px', fontWeight: 600 }}
                    label={{ value: 'Days', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: '#334155' } }}
                  />
                  <YAxis
                    stroke="#475569"
                    style={{ fontSize: '10px', fontWeight: 600 }}
                    label={{ value: 'Liters', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: '#334155' } }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E293B',
                      color: '#FFFFFF',
                      borderRadius: '10px',
                      border: 'none',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#15803D"
                    strokeWidth={3}
                    fill="url(#savingsDarkGrad)"
                    name="Saved (Liters)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-600 font-medium">Average Daily Conservation</span>
            <span className="font-extrabold text-emerald-700 text-sm">962 L / day</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: ESG Compliance Status Badges */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          ESG Compliance Certifications & Circularity Badges
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-emerald-950">Zero Liquid Discharge (ZLD)</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Data center cooling blowdown is 100% recovered and re-injected into the secondary closed loop without environmental release.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-blue-950">ISO 14046 Water Footprint</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Net Freshwater Withdrawal Index reduced by 64.2% across active operating cycles, verified compliant with global ESG auditing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-purple-950">Smart Water Leadership Standard</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Recognized for automated AI-driven adaptive closed-loop recirculation optimization and low-energy thermal recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
