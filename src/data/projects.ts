export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  highlights?: string[];
  keyFeatures?: string[];
  technologies: string[];
  githubUrl?: string;
  hasWorkingRepo: boolean;
  image: string;
  placeholderType: 'nutana' | 'planmyhome' | 'churn' | 'forecast';
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export const HERO_STATS = [
  {
    value: "4+",
    label: "Projects Completed",
    subtext: "Full-Stack & Analytics",
    icon: "BarChart3"
  },
  {
    value: "2+",
    label: "Domains",
    subtext: "Development & Analytics",
    icon: "Layers"
  },
  {
    value: "100%",
    label: "Learning Driven",
    subtext: "Consistent Growth",
    icon: "Lightbulb"
  },
  {
    value: "2028",
    label: "Expected Graduation",
    subtext: "B.Tech CSE (Data Science)",
    icon: "GraduationCap"
  }
];

export const MARQUEE_ITEMS = [
  "DATA ANALYSIS",
  "FULL STACK DEVELOPMENT",
  "MACHINE LEARNING",
  "AI APPLICATIONS",
  "DATA VISUALIZATION",
  "PROBLEM SOLVING"
];

export const ABOUT_HIGHLIGHTS = [
  {
    icon: "Code2",
    title: "Full Stack Development",
    description: "Building responsive, end-to-end web applications with modern architectures, clean APIs, and robust codebases."
  },
  {
    icon: "TrendingUp",
    title: "Data Analysis & Analytics",
    description: "Turning raw, complex datasets into meaningful business insights, metrics, and actionable decisions."
  },
  {
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    description: "Applying ML models and modern LLM APIs to create smart automations and intelligent real-world workflows."
  },
  {
    icon: "Lightbulb",
    title: "Problem Solving",
    description: "Approaching design and algorithmic bottlenecks with structured thinking, clean logic, and user-centric focus."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nutana",
    title: "NUTANA",
    category: "Full Stack / AI",
    description: "Inventory intelligence system for Indian neighborhood food retailers with expiry-aware FEFO allocation, cross-shop discovery, and AI-assisted recommendations.",
    detailedDescription: "NUTANA addresses perishable inventory waste and stock mismanagement across neighborhood kirana and grocery stores. Traditional shops suffer massive losses from expired stock and siloed availability. NUTANA combines First-Expired, First-Out (FEFO) warehouse management algorithms with cross-store collaborative discovery and fast LLM-assisted pricing and restocking recommendations.",
    keyFeatures: [
      "Expiry-aware FEFO stock allocation engine prioritizing near-dated inventory",
      "Cross-shop inventory lookup allowing neighboring retailers to fulfill mutual shortages",
      "AI-assisted recommendations powered by Groq API for rapid inference and restocking",
      "FastAPI asynchronous backend with high-throughput MongoDB schema design"
    ],
    technologies: ["Python", "FastAPI", "MongoDB", "Groq API"],
    githubUrl: "https://github.com/reddykoushik808-glitch/nutana",
    hasWorkingRepo: true,
    image: "/images/nutana.png",
    placeholderType: "nutana"
  },
  {
    id: "planmyhome",
    title: "PlanMyHome",
    category: "Full Stack / Algorithms",
    description: "Custom house planner for drawing plots, configuring setbacks, specifying room needs, and generating aligned layouts using a rule-based constraint engine.",
    detailedDescription: "PlanMyHome is a CAD-inspired architectural planning application designed for home planners, civil developers, and prospective homeowners. Users draw their land plot boundary, configure municipal setback parameters (front, rear, and side margins), and input their family room requirements. The rule-based engine then aligns wall geometry, hallways, and living zones while adhering strictly to building constraints.",
    keyFeatures: [
      "Interactive 2D plot boundary and setback margin calculator",
      "Constraint satisfaction algorithm calculating functional room alignments and door pathways",
      "Multi-floor planning with customizable room dimension requirements (Living, Kitchen, Bedrooms, Balcony)",
      "Instant geometric blueprint rendering with dimensional accuracy"
    ],
    technologies: ["Web App", "Algorithms", "Planning", "CAD Layout"],
    githubUrl: "https://github.com/reddykoushik808-glitch/House-Flipper-",
    hasWorkingRepo: true,
    image: "/images/planmyhome.png",
    placeholderType: "planmyhome"
  },
  {
    id: "customer-churn",
    title: "Customer Churn Investigation",
    category: "Data Analytics / Machine Learning",
    description: "Customer profiling, churn investigation, machine learning risk scoring, and retention strategies on a synthetic boAt consumer electronics dataset.",
    detailedDescription: "An in-depth data analytics and machine learning pipeline conducted on a synthetic customer dataset inspired by boAt lifestyle electronics. The project investigates customer purchase frequencies, return rates, discount sensitivities, and support interactions to identify behavioral churn drivers and prescribe high-retention marketing interventions.",
    keyFeatures: [
      "Comprehensive exploratory data analysis (EDA) and data cleansing with Pandas and NumPy",
      "Customer behavioral segmentation profiling price-sensitive vs. brand-loyal cohorts",
      "Supervised ML classification using Scikit-learn with feature importance and risk scoring",
      "Actionable retention strategy recommendations that reduced simulated churn probability"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Analytics"],
    githubUrl: "https://github.com/reddykoushik808-glitch/customer-churn-analysis",
    hasWorkingRepo: true,
    image: "/images/churn-analysis.png",
    placeholderType: "churn"
  },
  {
    id: "forecast-iq",
    title: "Forecast IQ",
    category: "Predictive Analytics / AI",
    description: "Forecasting web application supporting CSV uploads, predictive machine learning models, trend visualizations, and AI-generated analytical summaries.",
    detailedDescription: "Forecast IQ empowers business users to forecast temporal metrics without complex data science setups. Users upload raw time-series CSV records, after which automated feature engineering fits regression and ARIMA/prophet-style models to predict upcoming demand cycles. The system pairs visual charts with natural language analytical interpretations synthesized via Gemini and Groq APIs.",
    keyFeatures: [
      "Plug-and-play CSV ingestion pipeline with automated time-series timestamp parsing",
      "Predictive machine learning forecasting models generating confidence intervals",
      "Interactive interactive visualization charts showing historical vs. projected metrics",
      "AI-generated summaries explaining seasonal peaks, anomalies, and tactical recommendations"
    ],
    technologies: ["Python", "Flask", "Machine Learning", "Gemini API", "Groq API"],
    githubUrl: undefined, // No public repo link provided
    hasWorkingRepo: false,
    image: "/images/forecast-iq.png",
    placeholderType: "forecast"
  }
];

export const SKILLS_DATA = [
  { name: "Python", category: "Languages", icon: "python" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  { name: "React", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Frontend", icon: "nextjs" },
  { name: "HTML & CSS", category: "Frontend", icon: "html" },
  { name: "Flask", category: "Backend", icon: "flask" },
  { name: "Django", category: "Backend", icon: "django" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "REST APIs", category: "Backend", icon: "api" },
  { name: "SQL", category: "Database", icon: "sql" },
  { name: "MySQL", category: "Database", icon: "mysql" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "Pandas", category: "Data Science", icon: "pandas" },
  { name: "NumPy", category: "Data Science", icon: "numpy" },
  { name: "Scikit-learn", category: "Data Science", icon: "scikitlearn" },
  { name: "Power BI", category: "Visualization", icon: "powerbi" },
  { name: "Tableau", category: "Visualization", icon: "tableau" },
  { name: "Excel", category: "Visualization", icon: "excel" },
  { name: "Git & GitHub", category: "Tools", icon: "git" },
  { name: "Docker", category: "Tools", icon: "docker" },
  { name: "AWS", category: "Cloud", icon: "aws" },
  { name: "Jupyter", category: "Tools", icon: "jupyter" }
];
