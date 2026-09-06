import { Database } from './database.types'

// Table row types
export type SensorReading = Database['public']['Tables']['sensor_readings']['Row']
export type WaterClassification = Database['public']['Tables']['water_classification']['Row']
export type TreatmentPlan = Database['public']['Tables']['treatment_plans']['Row']
export type WaterPrediction = Database['public']['Tables']['water_predictions']['Row']
export type LeakAlert = Database['public']['Tables']['leak_alerts']['Row']
export type SystemMetric = Database['public']['Tables']['system_metrics']['Row']
export type User = Database['public']['Tables']['users']['Row']

// Insert types
export type SensorReadingInsert = Database['public']['Tables']['sensor_readings']['Insert']
export type WaterClassificationInsert = Database['public']['Tables']['water_classification']['Insert']
export type TreatmentPlanInsert = Database['public']['Tables']['treatment_plans']['Insert']
export type WaterPredictionInsert = Database['public']['Tables']['water_predictions']['Insert']
export type LeakAlertInsert = Database['public']['Tables']['leak_alerts']['Insert']
export type SystemMetricInsert = Database['public']['Tables']['system_metrics']['Insert']

// Application-specific types
export type WaterQuality = 'GOOD' | 'MODERATE' | 'POOR'
export type TreatmentPath = 'A' | 'B' | 'C'
export type AlertSeverity = 'critical' | 'warning' | 'info'
export type AlertType = 'leak' | 'sensor' | 'system' | 'quality'

export interface DashboardMetrics {
  waterQualityScore: number
  activeWaterFlow: number
  predictedDemand: number
  reuseEfficiency: number
}

export interface TankLevel {
  name: string
  level: number
  volume: number
  capacity: number
  status: 'normal' | 'low' | 'critical'
}

export interface Alert {
  id: number
  type: AlertType
  severity: AlertSeverity
  title: string
  description: string
  timestamp: string
  acknowledged: boolean
}

export interface WaterClassificationResult {
  water_quality: WaterQuality
  quality_score: number
  treatment_path: TreatmentPath[]
  reason: string
  timestamp: string
}

export interface TreatmentRecommendation {
  recommended_path: TreatmentPath[]
  stages: Array<{
    stage: TreatmentPath
    expected_efficiency: number
  }>
  number_of_stages: number
  average_efficiency: number
}

export interface DemandForecast {
  predicted_demand: number
  prediction_horizon: string
  confidence_score: number
  trend: 'increasing' | 'decreasing' | 'stable'
}

export interface LeakDetection {
  leak_detected: boolean
  severity: AlertSeverity
  anomaly_score: number
  risk_level: 'low' | 'medium' | 'high' | 'critical'
  suggested_action: string
}
