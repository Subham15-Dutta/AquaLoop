# 🚀 QUICK START - RUN IN 60 SECONDS

## Prerequisites
- Node.js 18+ installed
- Your Supabase credentials ready

---

## Step 1: Environment Setup (30 seconds)

Create `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

**Get your credentials:**
- Go to https://supabase.com/dashboard
- Select your project
- Go to Settings → API
- Copy "Project URL" and "anon public" key

---

## Step 2: Install & Run (30 seconds)

Open terminal in `D:\Code\AquaLoop` and run:

```bash
npm install
npm run dev
```

**That's it!** Open http://localhost:3000 🎉

---

## What You'll See

1. **Auto-redirect to Dashboard** - Executive metrics and charts
2. **Sidebar Navigation** - Access all 6 pages
3. **Live Data** - Connected to your Supabase database
4. **AI Modules** - Ready to classify water and predict demand

---

## Test the App

### Dashboard
- View real-time metrics
- Check tank levels
- See demand forecast chart

### Monitoring
- Live sensor readings (pH, TDS, Turbidity, Temperature, Flow, Level)
- Real-time charts
- Sensor health status

### AI Insights
- Enter manual values: pH=7.2, TDS=350, Turbidity=5, Temp=28
- Click "Classify Water Quality"
- See treatment recommendation
- View demand forecast and leak detection

### Other Pages
- **Sustainability**: Environmental impact metrics
- **Alerts**: System notifications
- **Settings**: Configuration options

---

## Optional: Run AI Backend

If you want live AI endpoints instead of mock data:

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Then open http://localhost:8000/docs to see API documentation.

**Note:** Frontend works perfectly without backend (smart fallbacks enabled).

---

## Troubleshooting

### "Module not found" errors?
```bash
npm install
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Can't connect to Supabase?
- Double-check `.env.local` file exists
- Verify credentials are correct
- Restart dev server after adding env vars

---

## Demo Checklist for SIH 2026

- [ ] Dashboard loads with metrics
- [ ] All 6 pages accessible from sidebar
- [ ] AI classification works with manual input
- [ ] Charts render correctly
- [ ] Sustainability metrics display
- [ ] Alerts page shows notifications
- [ ] Settings page accessible

---

## Deploy to Production

When ready to deploy:

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Aqua Loop MVP - SIH 2026"
git remote add origin https://github.com/yourusername/aqualoop.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Import your GitHub repo
   - Add environment variables
   - Deploy

**See `DEPLOYMENT.md` for detailed instructions.**

---

## 🎯 You're Ready!

Your complete AI-powered water treatment platform is running locally.

**Next:** Explore all 6 pages and prepare your demo! 🏆

**Questions?** Check:
- `SETUP_GUIDE.md` - Detailed setup
- `PROJECT_SUMMARY.md` - Complete overview
- `DEPLOYMENT.md` - Production deployment
