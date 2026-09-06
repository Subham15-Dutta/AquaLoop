# Aqua Loop - Setup & Running Guide

Follow these steps to get the full application running locally.

---

## 1. Supabase Database Setup

1. Log in to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Open your project
3. Go to **SQL Editor**
4. Copy and paste the contents of `seed_data.sql` and run it to populate initial data

---

## 2. Frontend Configuration & Running

### Step A: Configure Environment Variables
Create a file named `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-supabase-anon-key
NEXT_PUBLIC_APP_NAME=Aqua Loop
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### Step B: Install Node Dependencies
Open a terminal in `D:\Code\AquaLoop` and run:

```bash
npm install
```

### Step C: Run the Next.js App
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Python FastAPI AI Backend (Optional / Recommended)

To run the live AI endpoints locally:

### Step A: Set up Python Virtual Environment
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
# source venv/bin/activate
```

### Step B: Install Python Dependencies
```bash
pip install -r requirements.txt
```

### Step C: Start FastAPI Server
```bash
python main.py
```
Or with uvicorn:
```bash
uvicorn main:app --reload --port 8000
```

The interactive API documentation will be available at [http://localhost:8000/docs](http://localhost:8000/docs).

*(Note: The Next.js frontend has built-in smart mock fallbacks, so it runs seamlessly even if FastAPI is offline!)*

---

## 4. Pages Overview

- **`/dashboard`** - Executive KPI metrics, tank level gauges, 24h demand chart, treatment status, and active routing path.
- **`/monitoring`** - Live telemetry for pH, TDS, Turbidity, Temp, Flow Rate, Level with Supabase Realtime subscriptions.
- **`/ai-insights`** - Core AI suite: Water Classification (Good/Mod/Poor), Treatment Pathway Optimizer (A/B/C), 24h Demand Forecaster, and Anomaly/Leak Detector with interactive input fields.
- **`/sustainability`** - Circular economy metrics, freshwater reduction (target 70-80%), carbon offset, and multi-month trends.
- **`/alerts`** - Severity filtering (Critical/Warning/Info), timeline visualization, and alert acknowledgement.
- **`/settings`** - Industrial sensor ranges, AI sensitivity/confidence thresholds, notification settings, and system specs.
