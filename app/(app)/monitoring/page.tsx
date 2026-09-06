'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Droplet,
  Check,
  ShieldCheck,
  Activity,
  Sliders,
  Cpu,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Radio,
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

export default function MonitoringPage() {
  const [showTankHistory, setShowTankHistory] = useState(false)
  // Enhanced Circular Gauge with centered values, unique colors, and clean containers
  const CircularGauge = ({ value, max, label, unit, color, status }: any) => {
    const percentage = Math.min((value / max) * 100, 100)

    return (
      <div className="flex min-h-[178px] flex-col items-center rounded-xl border border-gray-100/80 bg-gray-50/70 px-3.5 pb-3.5 pt-4 transition-[border-color,box-shadow] duration-200 hover:border-gray-200 hover:shadow-sm">
        <div className="flex h-5 items-center text-center text-xs font-semibold text-gray-700">{label}</div>
        <div className="relative mt-1 flex h-20 w-28 items-center justify-center">
          <svg viewBox="0 0 120 70" className="w-full h-full" aria-hidden="true">
            {/* Background track */}
            <path
              d="M 15 60 A 45 45 0 0 1 105 60"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Value track */}
            <path
              d="M 15 60 A 45 45 0 0 1 105 60"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 141} 141`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <div className="text-xl font-bold text-gray-900 leading-none">{value}</div>
            {unit && <div className="text-[10px] font-medium text-gray-500 mt-0.5">{unit}</div>}
          </div>
        </div>
        <div className="flex justify-between w-full px-2 text-[10px] text-gray-400 mt-1 font-medium">
          <span>0</span>
          <span>{max}</span>
        </div>
        <div className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          {status}
        </div>
      </div>
    )
  }

  // Refined Tank Card with rounded container
  const TankDonut = ({ name, percent, volume, inflow, outflow, color }: any) => {
    const strokeDashoffset = 100 - percent

    return (
      <div className="flex h-full min-h-[236px] flex-col items-center rounded-xl border border-gray-100/80 bg-gray-50/70 p-4 transition-[border-color,box-shadow] duration-200 hover:border-gray-200 hover:shadow-sm">
        <div className="text-xs text-gray-800 font-bold mb-3 text-center h-8 flex items-center justify-center line-clamp-2">
          {name}
        </div>

        {/* Donut */}
        <div className="relative w-24 h-24 mb-3">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90" aria-hidden="true">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="3.5"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={color}
              strokeWidth="3.5"
              strokeDasharray="100, 100"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-black text-gray-900 leading-none">{percent}%</span>
            <span className="text-[10px] font-medium text-gray-500 mt-0.5">Capacity</span>
          </div>
        </div>

        <div className="text-sm font-extrabold text-gray-900 mb-2.5">{volume}</div>

        {/* Inflow / Outflow */}
        <div className="space-y-1.5 w-full text-[11px] pt-2 border-t border-gray-200/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Inflow</span>
            </div>
            <span className="font-bold text-gray-900">{inflow}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Outflow</span>
            </div>
            <span className="font-bold text-gray-900">{outflow}</span>
          </div>
        </div>
      </div>
    )
  }

  // Realistic Live Flow Chart Data
  const flowTimeSeriesData = [
    { time: '10:00', intake: 18.2, cooling: 22.4, blowdown: 5.1, recycled: 9.3 },
    { time: '10:05', intake: 18.5, cooling: 22.8, blowdown: 5.0, recycled: 9.6 },
    { time: '10:10', intake: 17.8, cooling: 22.1, blowdown: 4.9, recycled: 9.2 },
    { time: '10:15', intake: 18.0, cooling: 22.5, blowdown: 5.2, recycled: 9.5 },
    { time: '10:20', intake: 18.4, cooling: 23.0, blowdown: 5.3, recycled: 9.8 },
    { time: '10:25', intake: 18.1, cooling: 22.6, blowdown: 5.1, recycled: 9.4 },
    { time: '10:30', intake: 18.3, cooling: 22.7, blowdown: 5.0, recycled: 9.5 },
  ]

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex items-start justify-between gap-4 pt-1">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">Monitoring</h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2563EB]">
            Real-Time Water Infrastructure & Telemetry
          </p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sensors & Actuators Synced
          </span>
        </div>
      </div>

      {/* Row 1: Water Network Diagram (Full Width or 7 Cols) + Dedicated Water Quality Card (5 Cols) */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT: Water Network Overview */}
        <div className="col-span-7 min-w-0 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-[#EBF5FF] text-[#2563EB] rounded-lg">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Water Network Topology
                </h2>
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
                LIVE 10s
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Real-time telemetry and hydraulic flow distribution across physical subsystems.
            </p>

            {/* Network Flow Diagram */}
            <div className="relative w-full min-w-0 max-w-full overflow-x-auto py-2 pb-3">
              <div className="relative z-10 flex min-w-[620px] items-center justify-between">
                {/* Node 1: Freshwater Intake */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5 animate-pulse"></div>
                  <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                    <Droplet className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 mt-1.5">Freshwater<br />Intake</span>
                  <span className="text-xs font-black text-gray-900 mt-0.5">18 L/min</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1">
                    Normal
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <div className="h-0.5 w-full bg-[#3B82F6] relative">
                    <div className="absolute right-0 -top-1 border-t-3 border-b-3 border-l-5 border-t-transparent border-b-transparent border-l-[#3B82F6]"></div>
                  </div>
                </div>

                {/* Node 2: Cooling Tower */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5 animate-pulse"></div>
                  <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                    <Activity className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 mt-1.5">Cooling<br />Tower</span>
                  <span className="text-xs font-black text-gray-900 mt-0.5">22 L/min</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1">
                    Normal
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <div className="h-0.5 w-full bg-[#3B82F6] relative">
                    <div className="absolute right-0 -top-1 border-t-3 border-b-3 border-l-5 border-t-transparent border-b-transparent border-l-[#3B82F6]"></div>
                  </div>
                </div>

                {/* Node 3: Blowdown Recovery */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5 animate-pulse"></div>
                  <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                    <Droplet className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 mt-1.5">Blowdown<br />Recovery</span>
                  <span className="text-xs font-black text-gray-900 mt-0.5">5 L/min</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1">
                    Active
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <div className="h-0.5 w-full bg-[#3B82F6] relative">
                    <div className="absolute right-0 -top-1 border-t-3 border-b-3 border-l-5 border-t-transparent border-b-transparent border-l-[#3B82F6]"></div>
                  </div>
                </div>

                {/* Node 4: Treatment Unit */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5 animate-pulse"></div>
                  <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 mt-1.5">Treatment<br />Unit</span>
                  <span className="text-xs font-black text-gray-900 mt-0.5">10 L/min</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1">
                    Normal
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <div className="h-0.5 w-full bg-[#3B82F6] relative">
                    <div className="absolute right-0 -top-1 border-t-3 border-b-3 border-l-5 border-t-transparent border-b-transparent border-l-[#3B82F6]"></div>
                  </div>
                </div>

                {/* Node 5: Recycled Water Tank */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5 animate-pulse"></div>
                  <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                    <Droplet className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 mt-1.5">Recycled<br />Tank</span>
                  <span className="text-xs font-black text-gray-900 mt-0.5">9 L/min</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1">
                    Normal
                  </span>
                </div>
              </div>

              {/* Closed Loop return indicator */}
              <div className="mt-6 flex min-w-[620px] items-center justify-center border-t border-dashed border-blue-200 pt-3">
                <div className="w-full h-8 border-2 border-dashed border-blue-300/80 rounded-b-xl border-t-0 relative">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-blue-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-blue-600" />
                    <span>Closed-Loop Recirculation Pathway (82.4% Yield)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50/70 p-3 sm:items-center">
            <Radio className="w-4 h-4 text-[#2563EB] flex-shrink-0 animate-pulse" />
            <span className="shrink-0 text-xs font-bold text-[#2563EB]">Loop Integrity:</span>
            <span className="min-w-0 text-xs leading-relaxed text-gray-600">
              Automated PID loop maintaining optimal thermal and pressure equilibrium.
            </span>
          </div>
        </div>

        {/* RIGHT: Dedicated Water Quality Card */}
        <div className="col-span-5 min-w-0 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Water Quality Sensors</h2>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
                  LIVE
                </span>
              </div>
              <Link href="/settings" className="interactive-control flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-[#2563EB] hover:bg-blue-50">
                Calibration <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Distinct Color Gauges */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <CircularGauge value={7.1} max={14} label="pH Level" unit="" color="#22C55E" status="Good" />
              <CircularGauge value={420} max={2000} label="TDS" unit="ppm" color="#06B6D4" status="Good" />
              <CircularGauge value={12} max={100} label="Turbidity" unit="NTU" color="#2563EB" status="Good" />
              <CircularGauge value={26} max={50} label="Temperature" unit="°C" color="#F59E0B" status="Good" />
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Water Purity Index: <strong className="text-gray-900">96.4/100</strong></span>
            <span className="text-emerald-600 font-bold">Safe for Cooling</span>
          </div>
        </div>
      </div>

      {/* Row 2: Dedicated Valve Status Card + Dedicated System Health Card */}
      <div className="grid grid-cols-2 gap-6">
        {/* Dedicated Valve Status Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-50 text-[#2563EB] rounded-xl">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Actuator & Valve Status</h3>
                <p className="text-xs text-gray-500">Pneumatic and motorized valve positions</p>
              </div>
            </div>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
              AUTO MODE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Recycled Water Primary Valve (V-101)</div>
                  <div className="text-[11px] text-gray-500">Modulation: 85% • Feedback OK</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                OPEN
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Freshwater Backup Bypass (V-102)</div>
                  <div className="text-[11px] text-gray-500">Standby mode • Emergency override armed</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                CLOSED
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Cooling Tower Return Valve (V-103)</div>
                  <div className="text-[11px] text-gray-500">Continuous blowdown control: Active</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                OPEN
              </span>
            </div>
          </div>
        </div>

        {/* Dedicated System Health Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Hardware & System Health</h3>
                <p className="text-xs text-gray-500">Edge controller diagnostics and connectivity</p>
              </div>
            </div>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-500 font-medium">IoT Sensor Mesh</span>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-lg font-black text-gray-900">8 / 8 Online</div>
              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">100% Operational</div>
            </div>

            <div className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-500 font-medium">Valves & Relays</span>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-lg font-black text-gray-900">3 / 3 Synced</div>
              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Response: 42ms</div>
            </div>

            <div className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-500 font-medium">Telemetry Rate</span>
                <Activity className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="text-lg font-black text-[#2563EB]">10 Hz Stream</div>
              <div className="text-[10px] text-blue-600 font-semibold mt-0.5">Zero Packet Loss</div>
            </div>

            <div className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-500 font-medium">Edge Controller</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-lg font-black text-emerald-700">Healthy</div>
              <div className="text-[10px] text-gray-500 font-medium mt-0.5">Uptime: 99.98%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Tank Monitoring + Realistic Live Flow Telemetry */}
      <div className="grid grid-cols-12 gap-6">
        {/* Tank Monitoring (7 Cols) */}
        <div className="col-span-6 min-w-0 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Tank Storage Monitoring</h2>
              <p className="text-xs text-gray-500">Live hydrostatic level & volume telemetry</p>
            </div>
            <button
              type="button"
              onClick={() => setShowTankHistory((visible) => !visible)}
              aria-expanded={showTankHistory}
              className="interactive-control rounded-md px-2 py-1 text-xs font-semibold text-[#2563EB] hover:bg-blue-50"
            >
              {showTankHistory ? 'Hide History' : 'View History'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <TankDonut
              name="Recycled Water Tank"
              percent={74}
              volume="1,480 L"
              inflow="24 L/min"
              outflow="18 L/min"
              color="#22C55E"
            />
            <TankDonut
              name="Freshwater Backup"
              percent={38}
              volume="760 L"
              inflow="0 L/min"
              outflow="12 L/min"
              color="#3B82F6"
            />
            <TankDonut
              name="Greywater Collection"
              percent={62}
              volume="1,240 L"
              inflow="16 L/min"
              outflow="10 L/min"
              color="#8B5CF6"
            />
            <TankDonut
              name="Blowdown Recovery"
              percent={58}
              volume="920 L"
              inflow="5.2 L/min"
              outflow="4.8 L/min"
              color="#06B6D4"
            />
          </div>
          {showTankHistory && (
            <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl border border-blue-100 bg-blue-50/60 p-3 text-xs text-gray-600" role="status">
              <span>24h average storage: <strong className="text-gray-900">61%</strong></span>
              <span className="text-right">Lowest reserve: <strong className="text-gray-900">36%</strong></span>
            </div>
          )}
        </div>

        {/* Realistic Live Flow Monitoring Chart (6 Cols) */}
        <div className="col-span-6 min-w-0 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Live Flow Rate Telemetry
                </h2>
                <p className="text-xs text-gray-500">Real-time pipeline flow dynamics (L/min)</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3 text-gray-400" />
                Live 5s Buffer
              </div>
            </div>

            <div className="h-56 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={flowTimeSeriesData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis
                    dataKey="time"
                    stroke="#9CA3AF"
                    style={{ fontSize: '10px' }}
                    label={{ value: 'Time (seconds)', position: 'insideBottom', offset: -10, style: { fontSize: '10px', fill: '#6B7280', fontWeight: 500 } }}
                  />
                  <YAxis
                    stroke="#9CA3AF"
                    style={{ fontSize: '10px' }}
                    label={{ value: 'Flow (L/min)', angle: -90, position: 'insideLeft', offset: 15, style: { fontSize: '10px', fill: '#6B7280' } }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                    }}
                  />
                  <Line type="monotone" dataKey="cooling" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 2 }} activeDot={{ r: 5 }} animationDuration={500} animationEasing="ease-out" name="Cooling Supply" />
                  <Line type="monotone" dataKey="intake" stroke="#60A5FA" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 5 }} animationDuration={500} animationEasing="ease-out" name="Freshwater Intake" />
                  <Line type="monotone" dataKey="recycled" stroke="#22C55E" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 5 }} animationDuration={500} animationEasing="ease-out" name="Recycled Water Output" />
                  <Line type="monotone" dataKey="blowdown" stroke="#06B6D4" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 5 }} animationDuration={500} animationEasing="ease-out" name="Blowdown Recovery" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-100 text-center text-xs">
            <div>
              <span className="text-[10px] text-gray-500 block">Intake</span>
              <span className="font-bold text-blue-600">18.3 L/m</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block">Cooling</span>
              <span className="font-bold text-blue-800">22.7 L/m</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block">Blowdown</span>
              <span className="font-bold text-cyan-600">5.0 L/m</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block">Recycled</span>
              <span className="font-bold text-emerald-600">9.5 L/m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
