# Koushik Reddy — Personal Portfolio

A polished, responsive personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an editorial aesthetic featuring warm cream backgrounds, bold typography hierarchy, sage-green accents, and clean visual cards.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17 or higher recommended)
- `npm`

### Local Development
To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build and verify static generation:

```bash
npm run build
npm start
```

---

## 🎨 Asset Customization

The project uses graceful CSS fallbacks for missing assets. To use your custom photos and screenshots:

- **Hero Portrait**: Add your photo to `public/images/portrait.jpg`
- **NUTANA Screenshot**: Add your screenshot to `public/images/nutana.png`
- **PlanMyHome Screenshot**: Add your screenshot to `public/images/planmyhome.png`
- **Customer Churn Screenshot**: Add your screenshot to `public/images/churn-analysis.png`
- **Forecast IQ Screenshot**: Add your screenshot to `public/images/forecast-iq.png`
- **Resume**: Add your PDF file to `public/resume.pdf`

---

## 🚢 Deployment to Vercel

### Option 1: Via Vercel CLI
```bash
npx vercel
```

### Option 2: Via GitHub & Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/reddykoushik808-glitch/<repo-name>.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js** (detected automatically).
4. Click **Deploy**.
