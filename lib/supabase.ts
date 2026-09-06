import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database.types'

type SensorReading = Database['public']['Tables']['sensor_readings']['Row']

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

// Realtime channel for sensor readings
export const createSensorChannel = (onInsert?: (reading: SensorReading) => void) => {
  return supabase
    .channel('sensor-readings-channel')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'sensor_readings',
      },
      (payload) => {
        console.log('Sensor reading change:', payload)
        onInsert?.(payload.new as SensorReading)
      }
    )
}

// Realtime channel for leak alerts
export const createLeakAlertsChannel = () => {
  return supabase
    .channel('leak-alerts-channel')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'leak_alerts',
      },
      (payload) => {
        console.log('New leak alert:', payload)
      }
    )
}
