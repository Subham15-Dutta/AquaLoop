# Aqua Loop - Deployment Guide

Complete deployment instructions for production.

---

## Deployment Architecture

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│   Next.js App   │      │   FastAPI AI     │      │   Supabase      │
│   (Vercel)      │─────▶│   (Railway)      │◀────▶│   (Cloud)       │
└─────────────────┘      └──────────────────┘      └─────────────────┘
        │
        └──────────────────────────────────────────▶ Direct DB Connection
```

---

## 1. Deploy Supabase (Database & Auth)

✅ **Already Done** - Your Supabase project is live!

Ensure:
- Row Level Security (RLS) is configured if needed
- Database tables are created
- Seed data is loaded

---

## 2. Deploy FastAPI Backend to Railway

### Step 1: Push Backend to GitHub
Create a `backend` directory in your repo with:
- `main.py`
- `requirements.txt`
- `Procfile` (create this):

```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

### Step 2: Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Sign in with GitHub
3. Click **New Project** → **Deploy from GitHub repo**
4. Select your repository → Select `backend` directory
5. Add Environment Variables:
   - `PORT=8000`
   - (Add Supabase credentials if backend needs direct DB access)
6. Deploy

### Step 3: Copy Backend URL
After deployment, copy the Railway URL (e.g., `https://aqualoop-backend.railway.app`)

---

## 3. Deploy Next.js Frontend to Vercel

### Step 1: Push to GitHub
```bash
cd D:\Code\AquaLoop
git init
git add .
git commit -m "Initial commit - Aqua Loop MVP"
git branch -M main
git remote add origin https://github.com/yourusername/aqualoop.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New Project**
4. Import your `aqualoop` repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables
In Vercel project settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_NAME=Aqua Loop
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_API_BASE_URL=https://aqualoop-backend.railway.app
```

### Step 4: Deploy
Click **Deploy** - Vercel will build and deploy automatically.

Your app will be live at: `https://aqualoop.vercel.app`

---

## 4. Post-Deployment Checklist

### Frontend (Vercel)
- ✅ Environment variables configured
- ✅ Custom domain (optional): Add in Vercel settings
- ✅ HTTPS enabled (automatic)
- ✅ Build successful

### Backend (Railway)
- ✅ Service running on Railway
- ✅ API docs accessible at `/docs`
- ✅ CORS configured for frontend domain
- ✅ Health check endpoint working

### Database (Supabase)
- ✅ Tables created
- ✅ Seed data loaded
- ✅ Connection working from frontend
- ✅ Realtime enabled

---

## 5. Testing Production Deployment

### Test Checklist:
1. Open `https://aqualoop.vercel.app/dashboard`
2. Verify metrics load from Supabase
3. Go to `/ai-insights` and test water classification
4. Go to `/monitoring` and check live sensor data
5. Test all 6 pages

---

## 6. Continuous Deployment (CI/CD)

Once deployed, any push to `main` branch will:
- ✅ Auto-deploy frontend to Vercel
- ✅ Auto-deploy backend to Railway

---

## 7. Custom Domain (Optional)

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `aqualoop.com`)
3. Update DNS records as instructed
4. SSL certificate auto-issued

### Update CORS in Backend:
Update `main.py` to allow your production domain:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://aqualoop.vercel.app",
        "https://aqualoop.com",
        "http://localhost:3000"
    ],
    ...
)
```

---

## 8. Monitoring & Analytics

### Vercel Analytics
Enable in Vercel dashboard for real-time traffic insights.

### Supabase Logs
Monitor database queries in Supabase Dashboard → Logs.

### Railway Logs
View FastAPI logs in Railway dashboard.

---

## 9. Cost Estimation

| Service | Free Tier | Estimated Monthly (MVP) |
|---------|-----------|-------------------------|
| Vercel | 100GB bandwidth | Free |
| Railway | $5 credit/month | $5-10 |
| Supabase | 500MB database | Free |
| **Total** | | **$5-10/month** |

---

## 10. Scaling Considerations

When you're ready to scale:
- Enable Supabase Pro for more connections
- Upgrade Railway for more compute
- Add Redis for caching
- Implement CDN for static assets

---

🎉 **Deployment Complete!** Your Aqua Loop MVP is now live in production.
