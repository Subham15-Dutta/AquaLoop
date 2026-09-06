import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatTime(date: string | Date): string {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export function formatNumber(value: number, decimals = 2): string {
  return value.toFixed(decimals)
}

export function getWaterQualityColor(quality: string): string {
  switch (quality.toUpperCase()) {
    case 'GOOD':
      return 'text-success'
    case 'MODERATE':
      return 'text-warning'
    case 'POOR':
      return 'text-destructive'
    default:
      return 'text-secondary'
  }
}

export function getWaterQualityBgColor(quality: string): string {
  switch (quality.toUpperCase()) {
    case 'GOOD':
      return 'bg-success/10'
    case 'MODERATE':
      return 'bg-warning/10'
    case 'POOR':
      return 'bg-destructive/10'
    default:
      return 'bg-muted'
  }
}

export function getSeverityColor(severity: string): string {
  switch (severity.toLowerCase()) {
    case 'critical':
      return 'text-destructive'
    case 'warning':
      return 'text-warning'
    case 'info':
      return 'text-primary'
    default:
      return 'text-secondary'
  }
}

export function getSeverityBgColor(severity: string): string {
  switch (severity.toLowerCase()) {
    case 'critical':
      return 'bg-destructive/10'
    case 'warning':
      return 'bg-warning/10'
    case 'info':
      return 'bg-primary/10'
    default:
      return 'bg-muted'
  }
}

export function calculateTrend(current: number, previous: number): 'up' | 'down' | 'stable' {
  const diff = current - previous
  const threshold = 0.05 // 5% threshold for stable

  if (Math.abs(diff) < threshold * previous) {
    return 'stable'
  }

  return diff > 0 ? 'up' : 'down'
}

export function getTrendColor(trend: 'up' | 'down' | 'stable', inverted = false): string {
  if (trend === 'stable') return 'text-secondary'

  if (inverted) {
    return trend === 'up' ? 'text-destructive' : 'text-success'
  }

  return trend === 'up' ? 'text-success' : 'text-destructive'
}
