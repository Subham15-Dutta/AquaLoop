import {
  WaterClassificationResult,
  TreatmentRecommendation,
  DemandForecast,
  LeakDetection,
  TreatmentPath,
} from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

// Mock data generators for when FastAPI is not available
function generateMockClassification(
  ph: number,
  tds: number,
  turbidity: number
): WaterClassificationResult {
  let quality: 'GOOD' | 'MODERATE' | 'POOR'
  let score: number
  let path: TreatmentPath[]
  let reason: string

  if (ph >= 6.5 && ph <= 8.5 && tds < 500 && turbidity < 10) {
    quality = 'GOOD'
    score = 90
    path = ['C']
    reason = 'Water quality is already good. Only UV disinfection required.'
  } else if (ph >= 6.0 && ph <= 9.0 && tds < 1000 && turbidity < 30) {
    quality = 'MODERATE'
    score = 70
    path = ['A', 'C']
    reason = 'Moderate contamination detected. Sand filtration and UV required.'
  } else {
    quality = 'POOR'
    score = 40
    path = ['A', 'B', 'C']
    reason = 'High contamination detected. Full treatment required.'
  }

  return {
    water_quality: quality,
    quality_score: score,
    treatment_path: path,
    reason,
    timestamp: new Date().toISOString(),
  }
}

function generateMockTreatmentRecommendation(
  treatmentPath: TreatmentPath[]
): TreatmentRecommendation {
  const stageEfficiency: Record<TreatmentPath, number> = {
    A: 85,
    B: 90,
    C: 99,
  }

  const stages = treatmentPath.map((stage) => ({
    stage,
    expected_efficiency: stageEfficiency[stage],
  }))

  const average_efficiency =
    stages.reduce((sum, s) => sum + s.expected_efficiency, 0) / stages.length

  return {
    recommended_path: treatmentPath,
    stages,
    number_of_stages: treatmentPath.length,
    average_efficiency: Math.round(average_efficiency * 100) / 100,
  }
}

function generateMockDemandForecast(): DemandForecast {
  const baselineDemand = 850
  const variance = Math.random() * 200 - 100
  const predicted = Math.round(baselineDemand + variance)

  return {
    predicted_demand: predicted,
    prediction_horizon: '24h',
    confidence_score: 0.87 + Math.random() * 0.1,
    trend: variance > 50 ? 'increasing' : variance < -50 ? 'decreasing' : 'stable',
  }
}

function generateMockLeakDetection(): LeakDetection {
  const anomalyScore = Math.random()
  const leakDetected = anomalyScore > 0.7

  let severity: 'info' | 'warning' | 'critical'
  let riskLevel: 'low' | 'medium' | 'high' | 'critical'

  if (anomalyScore < 0.3) {
    severity = 'info'
    riskLevel = 'low'
  } else if (anomalyScore < 0.5) {
    severity = 'info'
    riskLevel = 'medium'
  } else if (anomalyScore < 0.7) {
    severity = 'warning'
    riskLevel = 'high'
  } else {
    severity = 'critical'
    riskLevel = 'critical'
  }

  return {
    leak_detected: leakDetected,
    severity,
    anomaly_score: Math.round(anomalyScore * 100) / 100,
    risk_level: riskLevel,
    suggested_action: leakDetected
      ? 'Immediate inspection recommended. Check flow sensors and valve integrity.'
      : 'System operating normally. Continue monitoring.',
  }
}

// ==================== AI API CALLS ====================

export async function classifyWater(
  ph: number,
  tds: number,
  turbidity: number,
  temperature: number
): Promise<WaterClassificationResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai/classify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ph, tds, turbidity, temperature }),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    return await response.json()
  } catch (error) {
    console.warn('FastAPI not available, using mock data:', error)
    return generateMockClassification(ph, tds, turbidity)
  }
}

export async function getTreatmentRecommendation(
  treatmentPath: TreatmentPath[]
): Promise<TreatmentRecommendation> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai/recommend-treatment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ treatment_path: treatmentPath }),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    return await response.json()
  } catch (error) {
    console.warn('FastAPI not available, using mock data:', error)
    return generateMockTreatmentRecommendation(treatmentPath)
  }
}

export async function getDemandForecast(sensorData: {
  ambient_temperature_c: number
  humidity_pct: number
  it_gpu_workload_pct: number
  current_cooling_load_pct: number
  historical_water_consumption_prev_hour_l: number
  historical_water_consumption_prev_24h_avg_lph: number
}): Promise<DemandForecast> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai/demand-forecast`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sensorData),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    return await response.json()
  } catch (error) {
    console.warn('FastAPI not available, using mock data:', error)
    return generateMockDemandForecast()
  }
}

export async function detectLeak(sensorData: {
  ambient_temperature_c: number
  humidity_pct: number
  it_gpu_workload_pct: number
  current_cooling_load_pct: number
  historical_water_consumption_prev_hour_l: number
  historical_water_consumption_prev_24h_avg_lph: number
}): Promise<LeakDetection> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai/leak-detection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sensorData),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    return await response.json()
  } catch (error) {
    console.warn('FastAPI not available, using mock data:', error)
    return generateMockLeakDetection()
  }
}
