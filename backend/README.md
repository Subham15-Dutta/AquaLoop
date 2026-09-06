# Backend README

## FastAPI AI Service for Aqua Loop

This is the AI backend service that provides machine learning endpoints for:
- Water quality classification
- Treatment path recommendations
- 24-hour demand forecasting
- Leak detection via anomaly detection

## Local Development

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```
Or:
```bash
uvicorn main:app --reload --port 8000
```

4. Open API documentation:
```
http://localhost:8000/docs
```

## API Endpoints

### POST /api/ai/classify
Classify water quality based on sensor readings.

**Request:**
```json
{
  "ph": 7.2,
  "tds": 350,
  "turbidity": 5.0,
  "temperature": 28.0
}
```

**Response:**
```json
{
  "water_quality": "GOOD",
  "quality_score": 90,
  "treatment_path": ["C"],
  "reason": "Water quality is already good. Only UV disinfection required.",
  "timestamp": "2026-08-30T23:50:00"
}
```

### POST /api/ai/recommend-treatment
Get treatment recommendations.

### POST /api/ai/demand-forecast
Predict 24-hour water demand.

### POST /api/ai/leak-detection
Detect anomalies and potential leaks.

## Deployment

Deploy to Railway:
1. Push to GitHub
2. Connect Railway to your repo
3. Add environment variables if needed
4. Deploy

The `Procfile` is configured for Railway deployment.
