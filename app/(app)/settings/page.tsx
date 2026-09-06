'use client'

import { useState } from 'react'
import { Building2, Settings as SettingsIcon, Shield, Wrench, Bell, Users, Network, ChevronRight } from 'lucide-react'

export default function SettingsPage() {
  const [autoOptimization, setAutoOptimization] = useState(true)
  const [recommendationMode, setRecommendationMode] = useState(false)

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Title Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-950 tracking-[-0.025em] sm:text-[32px]">Settings</h1>
        <p className="text-xs text-gray-500 mt-0.5">System Configuration & Management</p>
      </div>

      {/* System Configuration Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#DBEAFE] flex items-center justify-center">
              <Building2 className="w-8 h-8 text-[#2563EB]" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1E3A8A] mb-1">System Configuration</h2>
              <div className="grid grid-cols-5 gap-8 text-xs mt-3">
                <div>
                  <div className="text-gray-500 mb-1">Facility Name</div>
                  <div className="font-semibold text-gray-900">AI Data Center Alpha</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Location</div>
                  <div className="font-semibold text-gray-900">Bangalore, India</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Cooling Capacity</div>
                  <div className="font-semibold text-gray-900">2.5 MW</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Operating Hours</div>
                  <div className="font-semibold text-gray-900">24 / 7</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Water Management Mode</div>
                  <div className="font-semibold text-gray-900">AI Optimized</div>
                </div>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-white border border-[#2563EB] text-[#2563EB] text-xs font-semibold rounded-lg hover:bg-[#EFF6FF] transition-colors flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit Configuration
          </button>
        </div>
      </div>

      {/* Grid Row: Settings Categories (Left) + AI Configuration & System Connectivity (Right) */}
      <div className="grid grid-cols-12 gap-6">

        {/* Left Column: Settings Categories */}
        <div className="col-span-5 space-y-4">

          {/* System Operations */}
          <button className="w-full bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center group-hover:bg-[#BBF7D0] transition-colors">
                  <SettingsIcon className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E3A8A]">System Operations</h3>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </button>

          {/* Safety & Compliance */}
          <button className="w-full bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center group-hover:bg-[#BFDBFE] transition-colors">
                  <Shield className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-0.5">Safety & Compliance</h3>
                  <p className="text-xs text-gray-500">Configure safety rules, compliance<br/>standards and operational policies.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </button>

          {/* Maintenance Settings */}
          <button className="w-full bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] flex items-center justify-center group-hover:bg-[#E9D5FF] transition-colors">
                  <Wrench className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-0.5">Maintenance Settings</h3>
                  <p className="text-xs text-gray-500">Manage maintenance schedules,<br/>service intervals and work orders.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </button>

          {/* Notification Preferences */}
          <button className="w-full bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] flex items-center justify-center group-hover:bg-[#E9D5FF] transition-colors">
                  <Bell className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-0.5">Notification Preferences</h3>
                  <p className="text-xs text-gray-500">Manage how and when you receive<br/>alerts and system notifications.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </button>

        </div>

        {/* Right Column */}
        <div className="col-span-7 space-y-6">

          {/* AI Configuration */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-sm font-bold text-[#1E3A8A]">AI Configuration</h2>
              </div>
              <button className="px-3 py-1.5 bg-white border border-[#2563EB] text-[#2563EB] text-xs font-semibold rounded-lg hover:bg-[#EFF6FF] transition-colors flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit AI Settings
              </button>
            </div>

            <div className="space-y-4">
              {/* Forecast Window */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Forecast Window</span>
                <select className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                  <option>6 Hours</option>
                  <option>12 Hours</option>
                  <option>24 Hours</option>
                </select>
              </div>

              {/* AI Sensitivity */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">AI Sensitivity</span>
                <select className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                  <option>Balanced</option>
                  <option>Conservative</option>
                  <option>Aggressive</option>
                </select>
              </div>

              {/* Recommendation Mode */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Recommendation Mode</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Manual Approval</span>
                  <button
                    onClick={() => setRecommendationMode(!recommendationMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${recommendationMode ? 'bg-[#22C55E]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${recommendationMode ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>

              {/* Auto Optimization */}
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-gray-700">Auto Optimization</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Enabled</span>
                  <button
                    onClick={() => setAutoOptimization(!autoOptimization)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${autoOptimization ? 'bg-[#22C55E]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoOptimization ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* System Connectivity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center">
                  <Network className="w-5 h-5 text-[#059669]" />
                </div>
                <h2 className="text-sm font-bold text-[#1E3A8A]">System Connectivity</h2>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="text-sm text-gray-700">Sensor Network</span>
                </div>
                <span className="text-xs font-semibold text-[#16A34A]">Connected</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="text-sm text-gray-700">Cloud Database</span>
                </div>
                <span className="text-xs font-semibold text-[#16A34A]">Connected</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="text-sm text-gray-700">AI Engine</span>
                </div>
                <span className="text-xs font-semibold text-[#16A34A]">Connected</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="text-sm text-gray-700">Data Synchronization</span>
                </div>
                <span className="text-xs font-semibold text-[#16A34A]">Healthy</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Last Sync</span>
              <span className="font-medium text-gray-900">10 Seconds Ago</span>
            </div>
          </div>

        </div>

      </div>

      {/* User Management */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center">
            <Users className="w-5 h-5 text-[#2563EB]" />
          </div>
          <h2 className="text-sm font-bold text-[#1E3A8A]">User Management</h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-xs text-gray-500 mb-2">Administrator</div>
            <div className="font-semibold text-gray-900">John Smith</div>
            <div className="text-xs text-gray-500 mt-0.5">System Administrator</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-2">Operators</div>
            <div className="font-semibold text-gray-900">3 Active Users</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-2">Last Login</div>
            <div className="font-semibold text-gray-900">20 May 2025</div>
            <div className="text-xs text-gray-500 mt-0.5">09:18 PM</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-2">Access Level</div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">Full System Access</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save Changes
        </button>
      </div>
    </div>
  )
}
