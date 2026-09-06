'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ComposedChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts'
import type { SensorReading } from '@/types'
import { createSensorChannel, supabase } from '@/lib/supabase'
import {
  TrendingUp,
  TrendingDown,
  Droplets,
  Scale,
  AlertTriangle,
  Activity,
  Zap,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

const BRAND_BLUE = '#2563EB'
const FRESHWATER_PURPLE = '#8443AD'
const BRAND_GREEN = '#40B840'
const CHART_TEXT = '#475569'
const CHART_AXIS = '#94A3B8'

interface GaugeChartProps {
  value: number | null
  max: number
  label: string
  unit: string
  color: string
  status: string
}

function GaugeChart({ value, max, label, unit, color, status }: GaugeChartProps) {
  const percentage = value === null ? 0 : Math.min((value / max) * 100, 100)

  return (
    <div className="flex min-h-[164px] flex-col items-center rounded-xl border border-gray-100/80 bg-gray-50/60 px-3.5 pb-3.5 pt-4 transition-[border-color,box-shadow] duration-200 hover:border-gray-200 hover:shadow-sm">
      <div className="flex h-5 items-center text-center text-xs font-semibold text-gray-700">{label}</div>
      <div className="relative mt-1 h-20 w-28">
        <svg viewBox="0 0 120 60" className="w-full h-full" aria-hidden="true">
          <path d="M 10 50 A 50 50 0 0 1 110 50" fill="none" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
          <path
            d="M 10 50 A 50 50 0 0 1 110 50"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 157} 157`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-3">
          <div className="text-[22px] font-bold leading-none text-gray-900">{value ?? '—'}</div>
          {unit && <div className="mt-1.5 text-[10px] font-medium leading-none text-gray-500">{unit}</div>}
        </div>
      </div>
      <div className="flex justify-between w-full px-2 text-[10px] text-gray-400 mt-1 font-medium">
        <span>0</span><span>{max}</span>
      </div>
      <div className={`mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${status === 'Good' ? 'border border-[#40B840]/30 bg-[#40B840]/10 text-[#277A27]' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
        {status}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [sensorReading, setSensorReading] = useState<SensorReading | null>(null)
  const [actionExecuted, setActionExecuted] = useState(false)
  const [sensorError, setSensorError] = useState<string | null>(null)

  useEffect(() => {
    let disposed = false
    let requestInFlight = false
    let hasSuccessfulReading = false

    async function loadData(isPolling = false) {
      if (requestInFlight) return
      requestInFlight = true

      try {
        const { data, error } = await supabase
          .from('sensor_readings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle()

        if (error) {
          console.error(isPolling ? 'Sensor Polling Error:' : 'Sensor Fetch Error:', error)
          throw error
        }

        console.log('Latest Sensor Data:', data)

        if (disposed) return

        const latestReading = data as SensorReading | null
        hasSuccessfulReading = latestReading !== null
        setSensorReading((current) =>
          current?.id === latestReading?.id && current?.created_at === latestReading?.created_at
            ? current
            : latestReading
        )
        setSensorError(null)
      } catch {
        if (!disposed && !hasSuccessfulReading) {
          setSensorError('Live sensor data is temporarily unavailable.')
        }
      } finally {
        requestInFlight = false
        if (!disposed) setLoading(false)
      }
    }
    void loadData()

    const pollingInterval = window.setInterval(() => {
      void loadData(true)
    }, 2000)

    const channel = createSensorChannel((reading) => {
      hasSuccessfulReading = true
      setSensorReading((current) =>
        current?.id === reading.id && current.created_at === reading.created_at
          ? current
          : reading
      )
      setSensorError(null)
      setLoading(false)
    }).subscribe((status) => {
      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        console.error('Sensor Realtime Error:', status)
      }
    })

    return () => {
      disposed = true
      window.clearInterval(pollingInterval)
      void supabase.removeChannel(channel)
    }
  }, [])

  const sensorValue = (value: number | null | undefined) =>
    loading || sensorError ? null : value ?? null
  const waterLevel = Math.min(Math.max(sensorReading?.water_level ?? 0, 0), 100)
  const tankVolume = Math.round((waterLevel / 100) * 2000)
  const sensorStatus = loading ? 'Loading' : sensorError ? 'Unavailable' : sensorReading ? 'Good' : 'No data'
  const tankStatus = waterLevel >= 60 ? 'High Reserve' : waterLevel >= 30 ? 'Standby' : 'Low Reserve'

  const demandTrendData = [
    { time: '00:00', demand: 3800, greywater: 2200, freshwaterRequired: 1600 },
    { time: '02:00', demand: 3500, greywater: 2400, freshwaterRequired: 1100 },
    { time: '04:00', demand: 3200, greywater: 2600, freshwaterRequired: 600 },
    { time: '06:00', demand: 3400, greywater: 2500, freshwaterRequired: 900 },
    { time: '08:00', demand: 3600, greywater: 2300, freshwaterRequired: 1300 },
    { time: '10:00', demand: 3800, greywater: 2100, freshwaterRequired: 1700 },
    { time: '12:00', demand: 3200, greywater: 2400, freshwaterRequired: 800 },
    { time: '14:00', demand: 3000, greywater: 2600, freshwaterRequired: 400 },
    { time: '16:00', demand: 2800, greywater: 2700, freshwaterRequired: 100 },
  ]

  const consumptionData = [
    { time: '00:00', freshwater: 400, recycled: 250 },
    { time: '04:00', freshwater: 450, recycled: 280 },
    { time: '08:00', freshwater: 500, recycled: 300 },
    { time: '12:00', freshwater: 480, recycled: 290 },
    { time: '16:00', freshwater: 420, recycled: 260 },
    { time: '20:00', freshwater: 380, recycled: 240 },
    { time: '24:00', freshwater: 350, recycled: 220 },
  ]

  const circularityBreakdown = [
    { name: 'Treated in Loop', value: 1620, color: '#64748B' },
    { name: 'Reusable Recycled', value: 1320, color: BRAND_GREEN },
    { name: 'Blowdown Recovered', value: 920, color: '#06B6D4' },
    { name: 'Freshwater Makeup', value: 480, color: FRESHWATER_PURPLE },
  ]

  const savingsData = [
    { day: '13 May', savings: 650 },
    { day: '14 May', savings: 720 },
    { day: '15 May', savings: 810 },
    { day: '16 May', savings: 930 },
    { day: '17 May', savings: 1020 },
    { day: '18 May', savings: 1100 },
    { day: 'Today', savings: 980 },
  ]

  return (
    <div className="mx-auto -mt-3 max-w-[1400px] space-y-4 pb-12">
      {/* Dashboard title */}
      <h1 className="text-4xl font-black leading-tight tracking-[-0.035em] text-gray-950 sm:text-[40px]">Dashboard</h1>

      {/* AI Prediction Section */}
      <div className="min-w-0 overflow-hidden bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 hover:shadow-md transition-shadow">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-blue-50 p-2 text-[#2563EB]">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">AI PREDICTION ENGINE</h2>
              <p className="text-xs text-gray-500 font-medium">Next 6 Hours Demand & Greywater Projections</p>
            </div>
          </div>
          <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
            Model Confidence: 94.2%
          </span>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Predicted Cooling Water Demand */}
          <div className="h-full rounded-xl border border-blue-100/70 bg-gradient-to-b from-blue-50/60 to-transparent p-4 text-center">
            <div className="mb-2 text-xs font-semibold text-gray-600">Predicted Cooling Demand</div>
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="rounded-lg bg-blue-100 p-1.5">
                <Droplets className="h-4 w-4 text-[#2563EB]" />
              </div>
              <div className="text-3xl font-extrabold text-[#2563EB]">
                2,200 <span className="text-sm font-semibold text-gray-500">L</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs font-semibold text-[#40B840]">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>+10% vs last 6 hrs</span>
            </div>
          </div>

          {/* Expected Greywater Reserve */}
          <div className="h-full rounded-xl border border-[#40B840]/15 bg-gradient-to-b from-[#40B840]/5 to-transparent p-4 text-center">
            <div className="text-xs font-semibold text-gray-600 mb-2">Expected Greywater Reserve</div>
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="rounded-lg bg-[#40B840]/10 p-1.5">
                <Droplets className="h-4 w-4 text-[#40B840]" />
              </div>
              <div className="text-3xl font-extrabold text-[#40B840]">
                1,820 <span className="text-sm font-semibold text-gray-500">L</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs font-semibold text-[#EF4444]">
              <TrendingDown className="h-3.5 w-3.5" />
              <span>-15% vs last 6 hrs</span>
            </div>
          </div>

          {/* Water Balance */}
          <div className="h-full rounded-xl border border-rose-100/60 bg-gradient-to-b from-rose-50/50 to-transparent p-4 text-center">
            <div className="text-xs font-semibold text-gray-600 mb-2">Water Balance (Demand vs Reserve)</div>
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="p-1.5 bg-[#FEE2E2] rounded-lg">
                <Scale className="h-4 w-4 text-[#EF4444]" />
              </div>
              <div className="text-3xl font-extrabold text-[#EF4444]">
                -380 <span className="text-sm font-semibold text-gray-500">L</span>
              </div>
            </div>
            <div className="inline-block px-3 py-0.5 bg-[#FEE2E2] text-[#EF4444] text-xs font-bold rounded-full">
              DEFICIT PROJECTED
            </div>
          </div>

          {/* Fresh Water Demand */}
          <div className="h-full rounded-xl border border-[#8443AD]/20 bg-gradient-to-b from-[#8443AD]/5 to-transparent p-4 text-center">
            <div className="mb-2 text-xs font-semibold text-gray-600">Fresh Water Demand</div>
            <div className="mb-1.5 flex items-center justify-center gap-2">
              <div className="rounded-lg bg-[#8443AD]/10 p-1.5">
                <Droplets className="h-4 w-4 text-[#8443AD]" />
              </div>
              <div className="text-3xl font-extrabold text-[#8443AD]">
                380 <span className="text-sm font-semibold text-gray-500">L</span>
              </div>
            </div>
            <div className="text-xs font-semibold text-[#713692]">Covers projected deficit</div>
          </div>
        </div>

        {/* Smooth AI Prediction Trend Chart */}
        <div>
          <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">
            Water Balance vs Demand
          </div>
          <div
            className="enterprise-chart min-w-0 overflow-hidden rounded-xl border border-transparent px-1 pt-1 transition-[border-color,box-shadow] duration-200 hover:border-slate-200 focus-visible:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
            tabIndex={0}
            role="group"
            aria-label="Water balance versus demand forecast chart"
          >
          <div className="mb-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-600" aria-label="Chart legend">
            <span className="inline-flex items-center gap-1.5"><span className="w-4 border-t-[3px] border-[#2563EB]" aria-hidden="true" />Demand (L)</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-4 border-t-2 border-dashed border-[#40B840]" aria-hidden="true" />Greywater Reserve (L)</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-4 border-t-2 border-dotted border-[#8443AD]" aria-hidden="true" />Freshwater Required (L)</span>
          </div>
          <ResponsiveContainer width="100%" height={230}>
            <ComposedChart data={demandTrendData} margin={{ top: 4, right: 12, left: 0, bottom: 14 }}>
              <defs>
                <linearGradient id="demandGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={BRAND_BLUE} stopOpacity={0.18} />
                  <stop offset="95%" stopColor={BRAND_BLUE} stopOpacity={0.01} />
                </linearGradient>
                <linearGradient id="greywaterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={BRAND_GREEN} stopOpacity={0.09} />
                  <stop offset="95%" stopColor={BRAND_GREEN} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" strokeOpacity={0.85} vertical={false} />
              <XAxis
                dataKey="time"
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 11, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Time (hours)', position: 'insideBottom', offset: -8, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <YAxis
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 11, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Liters (L)', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 14px 30px -12px rgba(15, 23, 42, 0.28)',
                  padding: '10px 12px',
                }}
                labelStyle={{ color: '#0F172A', fontWeight: 700, marginBottom: '6px' }}
                itemStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '3px' }}
                cursor={{ stroke: '#94A3B8', strokeWidth: 1, strokeDasharray: '4 4' }}
                wrapperStyle={{ outline: 'none' }}
                animationDuration={150}
                labelFormatter={(hour) => `Hour: ${hour}`}
              />
              <Area type="natural" dataKey="demand" stroke={BRAND_BLUE} strokeWidth={3.25} strokeLinecap="round" strokeLinejoin="round" fill="url(#demandGrad)" name="Demand (L)" isAnimationActive={false} dot={false} activeDot={{ r: 6, fill: BRAND_BLUE, stroke: '#FFFFFF', strokeWidth: 3 }} />
              <Area type="natural" dataKey="greywater" stroke={BRAND_GREEN} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" fill="url(#greywaterGrad)" name="Greywater Reserve (L)" isAnimationActive={false} dot={false} activeDot={{ r: 5, fill: BRAND_GREEN, stroke: '#FFFFFF', strokeWidth: 3 }} />
              <Line type="natural" dataKey="freshwaterRequired" stroke={FRESHWATER_PURPLE} strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" dot={false} strokeDasharray="3 5" name="Freshwater Required (L)" isAnimationActive={false} activeDot={{ r: 5, fill: FRESHWATER_PURPLE, stroke: '#FFFFFF', strokeWidth: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
        </div>

        {/* Proactive Action Alert */}
        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-rose-200 bg-rose-50/80 p-4 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900 block">Projected deficit of 380 L in next 6 hours</span>
              <span className="text-xs text-gray-600">AI recommendation: Increase greywater recovery feed & switch backup pump.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActionExecuted(true)}
            disabled={actionExecuted}
            className="interactive-control w-full whitespace-nowrap rounded-lg border border-rose-300 bg-white px-4 py-2.5 text-xs font-bold text-rose-600 shadow-xs hover:bg-rose-100/50 disabled:cursor-default disabled:border-[#40B840]/30 disabled:bg-[#40B840]/10 disabled:text-[#277A27] disabled:hover:translate-y-0 sm:w-auto"
            aria-live="polite"
          >
            {actionExecuted ? 'Action Queued' : 'Execute Recommended Action'}
          </button>
        </div>
      </div>

      {/* Grid Row: Live Water Quality & System Status */}
      <div className="grid grid-cols-2 gap-6">
        {/* Live Water Quality */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Live Water Quality</h3>
              <span className="rounded-full border border-[#40B840]/30 bg-[#40B840]/10 px-2 py-0.5 text-[10px] font-bold text-[#277A27]">
                LIVE SENSORS
              </span>
            </div>
            <Link href="/monitoring" className="interactive-control flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-[#2563EB] hover:bg-blue-50">
              Full Telemetry <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <GaugeChart value={sensorValue(sensorReading?.ph)} max={14} label="pH" unit="" color={BRAND_GREEN} status={sensorStatus} />
            <GaugeChart value={sensorValue(sensorReading?.turbidity)} max={100} label="Turbidity" unit="NTU" color={BRAND_GREEN} status={sensorStatus} />
            <GaugeChart value={sensorValue(sensorReading?.tds)} max={2000} label="TDS" unit="ppm" color={BRAND_GREEN} status={sensorStatus} />
            <GaugeChart value={sensorValue(sensorReading?.temperature)} max={50} label="Temperature" unit="°C" color={BRAND_GREEN} status={sensorStatus} />
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Active System Status</h3>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#40B840]"></span>
              <span className="text-xs font-semibold text-[#277A27]">All Systems Nominal</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#2563EB]">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Primary Chiller Loops</div>
                  <div className="text-[11px] text-gray-500">Flow: {sensorValue(sensorReading?.flow_rate) ?? '—'} L/min</div>
                </div>
              </div>
              <span className="rounded-md border border-[#40B840]/30 bg-[#40B840]/10 px-2 py-0.5 text-[10px] font-bold text-[#277A27]">
                RUNNING
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#2563EB]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">AI Data Centre Cooling</div>
                  <div className="text-[11px] text-gray-500">Thermal load: 82% • Delta T: 6.4°C</div>
                </div>
              </div>
              <span className="rounded-md border border-[#40B840]/30 bg-[#40B840]/10 px-2 py-0.5 text-[10px] font-bold text-[#277A27]">
                OPTIMIZED
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#2563EB]">
                  <Droplets className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Cooling Tower Blowdown Unit</div>
                  <div className="text-[11px] text-gray-500">Recovery rate: 94.6% • Recirculation Active</div>
                </div>
              </div>
              <span className="rounded-md border border-[#40B840]/30 bg-[#40B840]/10 px-2 py-0.5 text-[10px] font-bold text-[#277A27]">
                RECOVERING
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 3 Charts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Water Consumption */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Water Consumption</h3>
            <p className="text-xs text-gray-500">Hourly breakdown (Last 24 Hours)</p>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={consumptionData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="time"
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 10, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Time (hours)', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <YAxis
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 10, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Liters', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <Tooltip />
              <Line type="monotone" dataKey="freshwater" stroke={FRESHWATER_PURPLE} strokeWidth={2.5} dot={{ r: 2 }} name="Freshwater (L)" />
              <Line type="monotone" dataKey="recycled" stroke={BRAND_GREEN} strokeWidth={2.5} dot={{ r: 2 }} name="Recycled Water (L)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Water Circularity Donut with Matching Legend */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Water Circularity</h3>
              <p className="text-xs text-gray-500">Daily closed-loop distribution</p>
            </div>
            <div className="flex items-center justify-center my-2">
              <div className="relative w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={circularityBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={68}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {circularityBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="text-2xl font-extrabold text-gray-900">82.4%</div>
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Circularity</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs pt-3 border-t border-gray-100">
            {circularityBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-700 text-xs font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-gray-900 text-xs">{item.value.toLocaleString()} L</span>
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-dashed border-gray-200 pt-2 text-xs font-bold text-[#277A27]">
              <span>Freshwater Offset Today</span>
              <span>980 L Saved</span>
            </div>
          </div>
        </div>

        {/* Daily Water Savings */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Daily Water Savings</h3>
            <p className="text-xs text-gray-500">Savings trend per operating cycle</p>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={savingsData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="day"
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 10, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Dates', position: 'insideBottom', offset: -10, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <YAxis
                stroke={CHART_AXIS}
                tick={{ fill: CHART_TEXT, fontSize: 10, fontWeight: 500 }}
                tickLine={{ stroke: CHART_AXIS }}
                label={{ value: 'Liters', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '11px', fill: CHART_TEXT, fontWeight: 500 } }}
              />
              <Tooltip />
              <Bar dataKey="savings" fill={BRAND_GREEN} radius={[6, 6, 0, 0]} name="Water Saved (L)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Water Level Tanks (Compact & Balanced Layout) */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Storage Tank Levels</h3>
            <span className="text-xs text-gray-500 font-medium">(Live Volume & Capacity)</span>
          </div>
          <Link href="/monitoring" className="interactive-control flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-[#2563EB] hover:bg-blue-50">
            Tank Telemetry <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Recycle Water Tank */}
          <div className="flex min-h-[112px] flex-col items-start justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="text-xs font-bold text-gray-900">Recycled Water Storage Tank</div>
              <div className="text-[11px] text-gray-500">Capacity: 2,000 L • Status: {sensorValue(sensorReading?.water_level) === null ? sensorStatus : tankStatus}</div>
              <div className="mt-1 text-xs font-extrabold text-[#40B840]">{sensorValue(sensorReading?.water_level) === null ? '—' : `${tankVolume.toLocaleString()} L`} Available</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-28 overflow-hidden rounded-xl border-2 border-[#40B840]/80 bg-[#40B840]/10 shadow-inner">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#40B840] to-[#67C967] transition-all duration-700"
                  style={{ height: `${sensorValue(sensorReading?.water_level) ?? 0}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-950/80">
                  {sensorValue(sensorReading?.water_level) === null ? '—' : `${waterLevel}%`}
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-gray-900">{sensorValue(sensorReading?.water_level) === null ? '—' : `${waterLevel}%`}</span>
                <span className="block text-[10px] font-semibold uppercase text-[#277A27]">Optimal</span>
              </div>
            </div>
          </div>

          {/* Freshwater Tank (Backup) */}
          <div className="flex min-h-[112px] flex-col items-start justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="text-xs font-bold text-gray-900">Freshwater Backup Reservoir</div>
              <div className="text-[11px] text-gray-500">Capacity: 2,000 L • Status: No dedicated sensor</div>
              <div className="mt-1 text-xs font-extrabold text-[#8443AD]">— Available</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-28 overflow-hidden rounded-xl border-2 border-[#8443AD]/80 bg-[#8443AD]/10 shadow-inner">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#8443AD] to-[#A86BC7] transition-all duration-700"
                  style={{ height: '0%' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#3F1E52]">
                  —
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-gray-900">—</span>
                <span className="block text-[10px] font-semibold text-amber-600 uppercase">No Sensor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
