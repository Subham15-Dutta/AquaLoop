# Aqua Loop

AI-Powered Smart Water Treatment Optimization & Circular Water Management Platform

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL + Realtime)
- **AI**: FastAPI + Python ML Models
- **Deployment**: Vercel + Supabase + Railway

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Python 3.9+ (for FastAPI backend)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AquaLoop
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
AquaLoop/
├── app/                    # Next.js 15 App Router
│   ├── (app)/             # App layout group
│   │   ├── dashboard/     # Dashboard page
│   │   ├── monitoring/    # Monitoring page
│   │   ├── ai-insights/   # AI Insights page
│   │   ├── sustainability/# Sustainability page
│   │   ├── alerts/        # Alerts page
│   │   └── settings/      # Settings page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
│   ├── api.ts           # Supabase API calls
│   ├── ai-api.ts        # FastAPI AI endpoints
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # Helper functions
├── types/               # TypeScript types
│   ├── database.types.ts # Generated Supabase types
│   └── index.ts         # Application types
└── public/              # Static files
```

## Features

### Core Pages

1. **Dashboard** - Executive overview with key metrics
2. **Monitoring** - Real-time sensor telemetry
3. **AI Insights** - Water classification, treatment recommendations, demand forecasting, leak detection
4. **Sustainability** - Environmental impact metrics
5. **Alerts** - System notifications and warnings
6. **Settings** - Configuration and preferences

### AI Modules

- **Water Classification**: pH, TDS, turbidity analysis → GOOD/MODERATE/POOR
- **Treatment Recommendation**: Optimal treatment path selection
- **Demand Forecasting**: 24-hour water demand prediction
- **Leak Detection**: Anomaly detection using ML

## Database Schema

Your Supabase database includes:

- `sensor_readings` - Real-time sensor data
- `water_classification` - Water quality analysis results
- `treatment_plans` - Treatment recommendations
- `water_predictions` - Demand forecasts
- `leak_alerts` - Detected leaks
- `system_metrics` - Sustainability metrics
- `users` - User management

## Development

### Type Generation

To regenerate TypeScript types from Supabase:
```bash
npx supabase gen types typescript --project-id <project-id> > types/database.types.ts
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Deployment

### Vercel (Frontend)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Railway (FastAPI Backend)

See `/backend` directory for FastAPI setup instructions.

## License

MIT

## Smart India Hackathon 2026

Built for SIH 2026 - Problem Statement: Student Innovation-Innovative ideas that help manage and generate renewable / sustainable sources more efficiently

