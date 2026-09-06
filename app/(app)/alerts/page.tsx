'use client'

import { useState } from 'react'
import {
  Bell,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Wrench,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  Layers,
  Activity,
  Zap,
} from 'lucide-react'

export default function AlertsPage() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Title Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">Alerts</h1>
          <p className="text-xs font-semibold text-[#2563EB] mt-0.5 tracking-wide uppercase">
            System Risks, Predictive Warnings & Telemetry Exceptions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            3 Active Events Detected
          </span>
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        {/* Active Alerts */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#EF4444] mx-auto mb-2.5 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-0.5">Active Alerts</div>
          <div className="text-3xl font-black text-[#EF4444]">3</div>
        </div>

        {/* Critical Alerts */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#EF4444] mx-auto mb-2.5 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-0.5">Critical Severity</div>
          <div className="text-3xl font-black text-[#EF4444]">1</div>
        </div>

        {/* Warning Alerts */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 mx-auto mb-2.5 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-0.5">Warning Alerts</div>
          <div className="text-3xl font-black text-[#F59E0B]">2</div>
        </div>

        {/* Resolved Today */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 mx-auto mb-2.5 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-0.5">Resolved Today</div>
          <div className="text-3xl font-black text-emerald-600">12</div>
        </div>
      </div>

      {/* Main Content Grid: Active Alerts (Left) + AI Risk Prediction & Recent Activity (Right) */}
      <div className="grid grid-cols-12 gap-6">
        {/* Active Alerts List (Left 7 Cols) */}
        <div className="col-span-7 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-rose-50 text-rose-600 rounded-lg">
                  <Bell className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Active System Alerts
                </h2>
              </div>
              <span className="text-xs text-gray-500 font-medium">Sorted by Severity</span>
            </div>

            <div className="space-y-4">
              {/* Critical Alert 1 with Top-Right View Details Button */}
              <div className="border-l-4 border-[#EF4444] bg-rose-50/20 rounded-xl p-4.5 border border-rose-100/80 shadow-xs relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#FEE2E2] text-[#EF4444] text-[10px] font-extrabold uppercase rounded-md">
                          Critical
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" /> 2 Minutes Ago
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Cooling Tower Supply Line Leakage Detected
                      </h3>
                    </div>
                  </div>
                  {/* View Details on Top-Right */}
                  <button className="px-3 py-1.5 bg-white border border-rose-300 text-rose-600 text-xs font-bold rounded-lg hover:bg-rose-50 transition-colors shadow-xs">
                    View Details
                  </button>
                </div>

                <div className="mt-3 pl-13 space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Location:</span>
                    <strong className="text-gray-800 font-semibold">Subsystem Node #2 — Chiller Supply Junction</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Flow Loss:</span>
                    <strong className="text-rose-600 font-bold">18.4 L/min deviation detected</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-bold text-rose-600">Auto-isolation valve armed • Immediate Action Required</span>
                  </div>
                </div>
              </div>

              {/* Warning Alert 1 with Top-Right View Details Button */}
              <div className="border-l-4 border-[#F59E0B] bg-amber-50/20 rounded-xl p-4.5 border border-amber-100/80 shadow-xs relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#FEF3C7] text-amber-700 text-[10px] font-extrabold uppercase rounded-md">
                          Warning
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" /> 18 Minutes Ago
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Recycled Water Buffer Tank Depletion
                      </h3>
                    </div>
                  </div>
                  {/* View Details on Top-Right */}
                  <button className="px-3 py-1.5 bg-white border border-amber-300 text-amber-700 text-xs font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-xs">
                    View Details
                  </button>
                </div>

                <div className="mt-3 pl-13 space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Current Level:</span>
                    <strong className="text-amber-700 font-bold">22% (Below 30% Safety Threshold)</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Forecast:</span>
                    <span className="font-semibold text-gray-800">Depletion anticipated in ~2.8 hours without makeup feed</span>
                  </div>
                </div>
              </div>

              {/* Warning Alert 2 with Top-Right View Details Button */}
              <div className="border-l-4 border-[#F59E0B] bg-amber-50/20 rounded-xl p-4.5 border border-amber-100/80 shadow-xs relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#FEF3C7] text-amber-700 text-[10px] font-extrabold uppercase rounded-md">
                          Warning
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" /> 42 Minutes Ago
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Cooling Loop Turbidity Elevated
                      </h3>
                    </div>
                  </div>
                  {/* View Details on Top-Right */}
                  <button className="px-3 py-1.5 bg-white border border-amber-300 text-amber-700 text-xs font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-xs">
                    View Details
                  </button>
                </div>

                <div className="mt-3 pl-13 space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Reading:</span>
                    <strong className="text-amber-700 font-bold">18 NTU (Threshold: 15 NTU)</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Action:</span>
                    <span className="font-semibold text-gray-800">Pre-filtration backwash cycle recommended</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-500">All alerts integrated with SCADA telemetry</span>
            <button className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1">
              Export Audit Trail <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: AI Risk Prediction (Side-by-Side Confidence & Recommended Action) + Recent Activity */}
        <div className="col-span-5 space-y-6">
          {/* AI Risk Prediction - Structured Side-by-Side (Confidence Left, Recommended Action Right) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  AI Risk Intelligence
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                PROACTIVE
              </span>
            </div>

            {/* Side-by-Side Risk Prediction Structure */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50/60 to-blue-50/40 border border-purple-100 mb-4">
              {/* Left Section: Confidence with Large Percentage Display */}
              <div className="text-center p-3 bg-white rounded-xl shadow-xs border border-purple-100/60 flex flex-col justify-center items-center">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Deficit Risk
                </div>
                <div className="text-4xl font-black text-purple-700 leading-none mb-1">
                  85%
                </div>
                <div className="text-[10px] font-semibold text-purple-600">
                  Forecast Window: Next 6 Hours
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 w-full flex items-center justify-between text-[11px] px-1">
                  <span className="text-gray-500">Confidence:</span>
                  <span className="font-extrabold text-purple-700">93.4%</span>
                </div>
              </div>

              {/* Right Section: Recommended Action & Details Below */}
              <div className="p-3 bg-white rounded-xl shadow-xs border border-purple-100/60 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#2563EB]" /> Recommended Action
                  </div>
                  <div className="text-xs font-bold text-gray-900 leading-snug">
                    Increase Recycled Allocation
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                    Throttle auxiliary return loop by 15% and switch backup storage feed to avoid freshwater surcharge.
                  </p>
                </div>
                <div className="pt-2 mt-1 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-emerald-700">
                  <span>Target Offset:</span>
                  <span>620 L / hr</span>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              Apply Automated AI Mitigation
            </button>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Recent Activity Log
                </h2>
              </div>
              <button className="text-xs text-[#2563EB] font-semibold hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Leakage Resolved (Line B)</span>
                </div>
                <span className="text-[11px] font-medium text-gray-400">09:42 PM</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Cooling Supply Valve Reopened</span>
                </div>
                <span className="text-[11px] font-medium text-gray-400">08:17 PM</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Storage Tank Buffer Restored</span>
                </div>
                <span className="text-[11px] font-medium text-gray-400">07:55 PM</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Sensor Telemetry Mesh Online</span>
                </div>
                <span className="text-[11px] font-medium text-gray-400">07:20 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
