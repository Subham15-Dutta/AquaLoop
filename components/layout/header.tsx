'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, User } from 'lucide-react'

export function Header({ onMenuClick, showAiStatus = false }: { onMenuClick?: () => void; showAiStatus?: boolean }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="sticky top-0 z-30 h-[62px] bg-[#F8F9FA] flex items-center justify-end px-4 sm:px-8 gap-3 sm:gap-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>
      <Link href="/dashboard" className="mr-auto flex items-center gap-1.5 lg:hidden" aria-label="Aqua Loop dashboard">
        <Image
          src="/assets/logo/aqualoop-logo.png"
          alt="Aqua Loop"
          width={36}
          height={28}
          priority
          sizes="30px"
          className="h-auto w-[30px] object-contain"
        />
        <span className="hidden text-sm font-extrabold tracking-tight min-[420px]:inline">
          <span className="text-[#2563EB]">AQUA</span>
          <span className="text-[#40B840]"> LOOP</span>
        </span>
      </Link>
      {/* System Status */}
      <div className="flex items-center gap-2" aria-label="System online">
        <span className="flex h-2.5 w-2.5 rounded-full bg-[#40B840] animate-pulse"></span>
        <span className="hidden text-sm font-medium text-gray-700 sm:inline">System Online</span>
      </div>

      {showAiStatus && (
        <div className="hidden items-center gap-2 rounded-full border border-[#40B840]/30 bg-[#40B840]/10 px-3 py-1.5 text-xs font-semibold text-[#277A27] lg:inline-flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#40B840]" />
          Real-Time AI Optimization Active
        </div>
      )}

      {/* Divider */}
      <div className="hidden h-6 w-px bg-gray-200 sm:block"></div>

      {/* Date */}
      <div className="hidden items-center gap-2 text-sm text-gray-600 md:flex">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="font-medium">
          {currentTime.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </span>
      </div>

      {/* Time */}
      <div className="hidden items-center gap-2 text-sm text-gray-600 sm:flex">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span className="font-medium">
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </span>
      </div>

      {/* Divider */}
      <div className="hidden h-6 w-px bg-gray-200 sm:block"></div>

      {/* User Profile */}
      <button type="button" aria-label="Open user profile" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white transition-colors hover:bg-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:bg-[#172F72]">
        <User className="h-5 w-5" />
      </button>
    </header>
  )
}
