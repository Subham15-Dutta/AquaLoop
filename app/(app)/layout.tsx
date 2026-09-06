'use client'

import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [navigationOpen, setNavigationOpen] = useState(false)

  if (pathname === '/') {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      <Sidebar open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden lg:ml-[200px]">
        <Header onMenuClick={() => setNavigationOpen(true)} showAiStatus={pathname === '/dashboard'} />
        <main className="app-main min-w-0 flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
