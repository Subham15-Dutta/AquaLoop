import { supabase } from './supabase'
import {
  SensorReading,
  WaterClassification,
  TreatmentPlan,
  WaterPrediction,
  LeakAlert,
  SystemMetric,
} from '@/types'

// ==================== SENSOR READINGS ====================

export async function getLatestSensorReading(): Promise<SensorReading | null> {
  const { data, error } = await supabase
    .from('sensor_readings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error fetching latest sensor reading:', error)
    return null
  }

  return data
}

export async function getSensorReadings(limit = 100): Promise<SensorReading[]> {
  const { data, error } = await supabase
    .from('sensor_readings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching sensor readings:', error)
    return []
  }

  return data || []
}

export async function getSensorReadingsByTimeRange(
  startDate: string,
  endDate: string
): Promise<SensorReading[]> {
  const { data, error } = await supabase
    .from('sensor_readings')
    .select('*')
    .gte('created_at', startDate)
    .lte('created_at', endDate)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching sensor readings by time range:', error)
    return []
  }

  return data || []
}

// ==================== WATER CLASSIFICATION ====================

export async function getLatestWaterClassification(): Promise<WaterClassification | null> {
  const { data, error } = await supabase
    .from('water_classification')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error fetching latest water classification:', error)
    return null
  }

  return data
}

export async function getWaterClassifications(limit = 50): Promise<WaterClassification[]> {
  const { data, error } = await supabase
    .from('water_classification')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching water classifications:', error)
    return []
  }

  return data || []
}

// ==================== TREATMENT PLANS ====================

export async function getLatestTreatmentPlan(): Promise<TreatmentPlan | null> {
  const { data, error } = await supabase
    .from('treatment_plans')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error fetching latest treatment plan:', error)
    return null
  }

  return data
}

export async function getTreatmentPlans(limit = 50): Promise<TreatmentPlan[]> {
  const { data, error } = await supabase
    .from('treatment_plans')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching treatment plans:', error)
    return []
  }

  return data || []
}

// ==================== WATER PREDICTIONS ====================

export async function getLatestWaterPrediction(): Promise<WaterPrediction | null> {
  const { data, error } = await supabase
    .from('water_predictions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error fetching latest water prediction:', error)
    return null
  }

  return data
}

export async function getWaterPredictions(limit = 50): Promise<WaterPrediction[]> {
  const { data, error } = await supabase
    .from('water_predictions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching water predictions:', error)
    return []
  }

  return data || []
}

// ==================== LEAK ALERTS ====================

export async function getLatestLeakAlert(): Promise<LeakAlert | null> {
  const { data, error } = await supabase
    .from('leak_alerts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching latest leak alert:', error)
    return null
  }

  return data
}

export async function getLeakAlerts(limit = 50): Promise<LeakAlert[]> {
  const { data, error } = await supabase
    .from('leak_alerts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching leak alerts:', error)
    return []
  }

  return data || []
}

export async function getActiveLeakAlerts(): Promise<LeakAlert[]> {
  const { data, error } = await supabase
    .from('leak_alerts')
    .select('*')
    .eq('leak_detected', true)
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error fetching active leak alerts:', error)
    return []
  }

  return data || []
}

// ==================== SYSTEM METRICS ====================

export async function getLatestSystemMetrics(): Promise<SystemMetric | null> {
  const { data, error } = await supabase
    .from('system_metrics')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error fetching latest system metrics:', error)
    return null
  }

  return data
}

export async function getSystemMetrics(limit = 100): Promise<SystemMetric[]> {
  const { data, error } = await supabase
    .from('system_metrics')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching system metrics:', error)
    return []
  }

  return data || []
}

export async function getSystemMetricsByTimeRange(
  startDate: string,
  endDate: string
): Promise<SystemMetric[]> {
  const { data, error } = await supabase
    .from('system_metrics')
    .select('*')
    .gte('created_at', startDate)
    .lte('created_at', endDate)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching system metrics by time range:', error)
    return []
  }

  return data || []
}

// ==================== DASHBOARD AGGREGATES ====================

export async function getDashboardData() {
  const [
    latestSensorReading,
    latestClassification,
    latestPrediction,
    latestMetrics,
    activeLeaks,
  ] = await Promise.all([
    getLatestSensorReading(),
    getLatestWaterClassification(),
    getLatestWaterPrediction(),
    getLatestSystemMetrics(),
    getActiveLeakAlerts(),
  ])

  return {
    sensorReading: latestSensorReading,
    classification: latestClassification,
    prediction: latestPrediction,
    metrics: latestMetrics,
    activeLeaks,
  }
}
