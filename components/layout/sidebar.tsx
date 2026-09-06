'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  LayoutDashboard,
  Activity,
  Brain,
  Droplet,
  BarChart3,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Monitoring', href: '/monitoring', icon: Activity },
  { name: 'AI Intelligence', href: '/ai-insights', icon: Brain },
  { name: 'Water Optimization', href: '/water-optimization', icon: Droplet },
  { name: 'Sustainability Reports', href: '/sustainability', icon: BarChart3 },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar({ open = false, onClose }: { open?: boolean; onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <>
    {open && <button className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden" onClick={onClose} aria-label="Close navigation" />}
    <aside className={cn(
      "fixed left-0 top-0 z-50 h-screen w-[200px] bg-white border-r border-gray-200 flex flex-col transition-transform lg:translate-x-0",
      open ? "translate-x-0" : "-translate-x-full"
    )}>
      {/* Brand Logo */}
      <div className="h-[80px] flex items-center justify-center px-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-2" aria-label="Aqua Loop dashboard">
          <Image
            src="/assets/logo/aqualoop-logo.png"
            alt="Aqua Loop"
            width={64}
            height={50}
            priority
            sizes="48px"
            className="h-auto w-12 shrink-0 object-contain"
          />
          <div className="flex flex-col">
            <div className="font-bold text-lg leading-none">
              <span className="text-[#2563EB]">AQUA</span>
              <span className="text-[#40B840]"> LOOP</span>
            </div>
            <span className="mt-0.5 whitespace-nowrap text-[10px] font-semibold tracking-tight text-[#2563EB]">Predict. Purify. Reuse.</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#EBF5FF] text-[#2563EB]'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-xs">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-gray-200">
        <button type="button" className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="text-xs">Logout</span>
        </button>
      </div>
    </aside>
    </>
  )
}
