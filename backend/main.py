"""
Aqua Loop - FastAPI AI Backend Service
Provides AI endpoints for water treatment optimization
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
import numpy as np
from datetime import datetime

app = FastAPI(
    title="Aqua Loop AI Service",
    description="AI-powered smart water treatment optimization API",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== DATA MODELS ====================

class SensorData(BaseModel):
    ph: float = Field(..., description="pH level (0-14)")
    tds: float = Field(..., description="Total Dissolved Solids in ppm")
    turbidity: float = Field(..., description="Turbidity in NTU")
    temperature: float = Field(..., description="Temperature in Celsius")

class ClassificationResponse(BaseModel):
    water_quality: str
    quality_score: float
    treatment_path: List[str]
    reason: str
    timestamp: str

class TreatmentRequest(BaseModel):
    treatment_path: List[str]

class TreatmentStage(BaseModel):
    stage: str
    expected_efficiency: float

class TreatmentResponse(BaseModel):
    recommended_path: List[str]
    stages: List[TreatmentStage]
    number_of_stages: int
    average_efficiency: float

class DemandForecastRequest(BaseModel):
    ambient_temperature_c: float
    humidity_pct: float
    it_gpu_workload_pct: float
    current_cooling_load_pct: float
    historical_water_consumption_prev_hour_l: float
    historical_water_consumption_prev_24h_avg_lph: float
    historical_water_consumption_prev_7d_avg_lph: Optional[float] = None
    time_of_day_hour: Optional[int] = None
    day_of_week: Optional[int] = None
    forecast_temperature_c: Optional[float] = None
    forecast_humidity_pct: Optional[float] = None
    rain_probability_pct: Optional[float] = None

class DemandForecastResponse(BaseModel):
    predicted_demand: float
    prediction_horizon: str
    confidence_score: float
    trend: str

class LeakDetectionResponse(BaseModel):
    leak_detected: bool
    severity: str
    anomaly_score: float
    risk_level: str
    suggested_action: str

# ==================== AI LOGIC ====================

# Module 1: Water Classification Engine
def classify_water_logic(ph: float, tds: float, turbidity: float, temperature: float):
    """
    Classify incoming water quality and determine the minimum treatment path.
    """
    if 6.5 <= ph <= 8.5 and tds < 500 and turbidity < 10:
        return {
            "water_quality": "GOOD",
            "quality_score": 90.0,
            "treatment_path": ["C"],
            "reason": "Water quality is already good. Only UV disinfection required.",
            "timestamp": str(datetime.now())
        }
    elif 6.0 <= ph <= 9.0 and tds < 1000 and turbidity < 30:
        return {
            "water_quality": "MODERATE",
            "quality_score": 70.0,
            "treatment_path": ["A", "C"],
            "reason": "Moderate contamination detected. Sand filtration and UV required.",
            "timestamp": str(datetime.now())
        }
    else:
        return {
            "water_quality": "POOR",
            "quality_score": 40.0,
            "treatment_path": ["A", "B", "C"],
            "reason": "High contamination detected. Full treatment required.",
            "timestamp": str(datetime.now())
        }

# Module 2: Treatment Recommendation Engine
def recommend_treatment_logic(treatment_path: List[str]):
    """
    Generate treatment recommendations based on water classification.
    """
    stage_database = {
        "A": {"stage": "A", "expected_efficiency": 85.0},
        "B": {"stage": "B", "expected_efficiency": 90.0},
        "C": {"stage": "C", "expected_efficiency": 99.0}
    }

    selected_stages = []
    total_efficiency = 0

    for stage in treatment_path:
        if stage in stage_database:
            selected_stages.append(stage_database[stage])
            total_efficiency += stage_database[stage]["expected_efficiency"]

    average_efficiency = round(total_efficiency / len(treatment_path), 2) if treatment_path else 0.0

    return {
        "recommended_path": treatment_path,
        "stages": selected_stages,
        "number_of_stages": len(treatment_path),
        "average_efficiency": average_efficiency
    }

# ==================== ENDPOINTS ====================

@app.get("/")
def read_root():
    return {
        "service": "Aqua Loop AI Backend",
        "status": "operational",
        "version": "1.0.0"
    }

@app.post("/api/ai/classify", response_model=ClassificationResponse)
def classify_water_endpoint(data: SensorData):
    """
    Classify water quality based on pH, TDS, turbidity, and temperature.
    """
    try:
        result = classify_water_logic(data.ph, data.tds, data.turbidity, data.temperature)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/ai/recommend-treatment", response_model=TreatmentResponse)
def recommend_treatment_endpoint(data: TreatmentRequest):
    """
    Get treatment recommendations and efficiency scores.
    """
    try:
        result = recommend_treatment_logic(data.treatment_path)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/ai/demand-forecast", response_model=DemandForecastResponse)
def demand_forecast_endpoint(data: DemandForecastRequest):
    """
    Predict 24-hour water demand using AI models.
    """
    try:
        # Simple heuristic model for MVP
        baseline = 850.0
        temp_factor = (data.ambient_temperature_c - 20) * 15
        gpu_factor = (data.it_gpu_workload_pct / 100) * 100
        cooling_factor = (data.current_cooling_load_pct / 100) * 80

        predicted = baseline + temp_factor + gpu_factor + cooling_factor

        return {
            "predicted_demand": round(predicted, 2),
            "prediction_horizon": "24h",
            "confidence_score": 0.89,
            "trend": "increasing" if predicted > baseline else "decreasing"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/ai/leak-detection", response_model=LeakDetectionResponse)
def leak_detection_endpoint(data: DemandForecastRequest):
    """
    Detect leaks using anomaly detection algorithms.
    """
    try:
        # Simple anomaly detection logic
        flow_deviation = abs(data.historical_water_consumption_prev_hour_l - data.historical_water_consumption_prev_24h_avg_lph)
        anomaly_score = min(flow_deviation / 500.0, 1.0)

        leak_detected = anomaly_score > 0.05  # 5% threshold as per training

        if anomaly_score < 0.3:
            severity = "info"
            risk_level = "low"
        elif anomaly_score < 0.5:
            severity = "info"
            risk_level = "medium"
        elif anomaly_score < 0.7:
            severity = "warning"
            risk_level = "high"
        else:
            severity = "critical"
            risk_level = "critical"

        suggested_action = (
            "Immediate inspection required. Check flow sensors and valve integrity."
            if leak_detected
            else "System operating normally. Continue standard monitoring."
        )

        return {
            "leak_detected": leak_detected,
            "severity": severity,
            "anomaly_score": round(anomaly_score, 2),
            "risk_level": risk_level,
            "suggested_action": suggested_action
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
