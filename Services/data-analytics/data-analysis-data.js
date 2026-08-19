/* ==========================================================================
   VOLTIX — Data Analytics Products Data

   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const DATA_ANALYTICS_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'business-intelligence', name: 'Business Intelligence' },
  { id: 'data-engineering', name: 'Data Engineering' },
  { id: 'machine-learning', name: 'Machine Learning' },
  { id: 'financial-analytics', name: 'Financial Analytics' },
  { id: 'sales-retail', name: 'Sales & Retail Analytics' },
  { id: 'hr-analytics', name: 'HR Analytics' },
  { id: 'healthcare-analytics', name: 'Healthcare Analytics' },
  { id: 'market-analytics', name: 'Market Analytics' },
  { id: 'data-visualization', name: 'Data Visualization' },
  { id: 'sql-analytics', name: 'SQL & Data Analysis' },
  { id: 'web-development', name: 'Web Development' }
];

const DATA_ANALYTICS_PRODUCTS = [

  /* ============================================================
     BUSINESS INTELLIGENCE
     ============================================================ */

  {
    id: 'ezz-production',
    category: 'business-intelligence',
    title: 'EZZ Steel — Production Analytics',
    description:
      'Compare planned vs. actual production across plants, furnaces, and shifts.',
    image: 'https://omarabdelpaq.vercel.app/img/ezz-steel-production-analytics.jpg',
    tags: ['Power BI', 'Power Query', 'DAX']
  },

  {
    id: 'egyptian-national-team',
    category: 'business-intelligence',
    title: 'Egyptian National Team Dashboard',
    description:
      'An interactive dashboard that transforms football performance data into clear insights about matches, players, results, and team performance.',
    image: 'https://omarabdelpaq.vercel.app/img/egyptian-national-team-powerbi-dashboard.jpg',
    tags: ['Power BI', 'Dashboard', 'Analytics']
  },


  /* ============================================================
     DATA ENGINEERING
     ============================================================ */

  {
    id: 'netflix-etl',
    category: 'data-engineering',
    title: 'Netflix — ETL & Analytics',
    description:
      'Clean and structure raw catalog data to analyze content mix and ratings.',
    image: 'https://omarabdelpaq.vercel.app/img/netflix-etl-analytics.jpg',
    tags: ['Python', 'PostgreSQL', 'SQL', 'Power BI']
  },

  {
    id: 'attendance-etl',
    category: 'data-engineering',
    title: 'Attendance ETL & Analytics',
    description:
      'An ETL workflow for transforming raw attendance records into structured datasets and actionable attendance insights.',
    image: 'https://omarabdelpaq.vercel.app/img/attendance-etl-analytics.jpg',
    tags: ['ETL', 'Data Engineering', 'Analytics']
  },


  /* ============================================================
     MACHINE LEARNING
     ============================================================ */

  {
    id: 'customer-purchase-prediction',
    category: 'machine-learning',
    title: 'Customer Purchase Prediction ML',
    description:
      'A machine learning model designed to predict customer purchase behavior and identify the factors that influence buying decisions.',
    image: 'https://omarabdelpaq.vercel.app/img/customer-purchase-prediction-ml.jpg',
    tags: ['Machine Learning', 'Prediction', 'Python']
  },

  {
    id: 'banking-credit',
    category: 'machine-learning',
    title: 'Banking Customer Credit Analysis',
    description:
      'Analyze customer financial profiles and credit-related behavior to identify patterns, risks, and factors affecting credit decisions.',
    image: 'https://omarabdelpaq.vercel.app/img/banking-customer-credit-analysis.jpg',
    tags: ['Machine Learning', 'Banking', 'Credit']
  },


  /* ============================================================
     FINANCIAL ANALYTICS
     ============================================================ */

  {
    id: 'ezz-financial',
    category: 'financial-analytics',
    title: 'EZZ Steel — Financial Analysis',
    description:
      'Track revenue growth and profitability trends over time.',
    image: 'https://omarabdelpaq.vercel.app/img/ezz-steel-financial-analysis-powerbi.jpg',
    tags: ['Power BI', 'Power Query', 'DAX']
  },

  

  /* ============================================================
     SALES & RETAIL ANALYTICS
     ============================================================ */

  {
    id: 'transformer-retail',
    category: 'sales-retail',
    title: 'Transformer Company — Retail Analytics',
    description:
      'Identify which regions and categories drive sales and profit.',
    image: 'https://omarabdelpaq.vercel.app/img/retail-sales-profitability.jpg',
    tags: ['Excel', 'Sales', 'Retail']
  },

  {
    id: 'online-shop',
    category: 'sales-retail',
    title: 'Online Shop Sales Analytics',
    description:
      'Analyze online store sales to understand product performance, customer purchasing behavior, revenue trends, and overall business performance.',
    image: 'https://omarabdelpaq.vercel.app/img/online-shop-sales-analytics.jpg',
    tags: ['Excel', 'E-commerce', 'Sales']
  },


  /* ============================================================
     HR ANALYTICS
     ============================================================ */

 {
  id: 'hr-workforce',
  category: 'hr-analytics',
  title: 'HR Workforce & Performance Analytics',
  description:
    'Give HR one view of headcount, turnover, and performance ratings.',
  image: 'https://omarabdelpaq.vercel.app/img/hr-workforce-analytics.jpg',
  tags: ['Excel'],
},


  /* ============================================================
     HEALTHCARE ANALYTICS
     ============================================================ */

  {
    id: 'patient-no-show',
    category: 'healthcare-analytics',
    title: 'Patient No-Show Analysis',
    description:
      'Understand attendance patterns behind missed appointments.',
    image: 'https://omarabdelpaq.vercel.app/img/patient-appointment-attendance.jpg',
    tags: ['Excel', 'Healthcare', 'Analytics']
  },

  {
    id: 'hospital-admission',
    category: 'healthcare-analytics',
    title: 'Hospital Admission Analytics',
    description:
      'Analyze hospital admission data to identify patient trends, admission patterns, and operational insights that can support healthcare decision-making.',
    image: 'https://omarabdelpaq.vercel.app/img/hospital-admission-analytics.jpg',
    tags: ['Healthcare', 'Hospital', 'Analytics']
  },


  /* ============================================================
     MARKET ANALYTICS
     ============================================================ */

  {
    id: 'car-market',
    category: 'market-analytics',
    title: 'Car Market Analysis',
    description:
      'Explore automotive market data to compare vehicle characteristics, pricing patterns, and factors influencing car market performance.',
    image: 'https://omarabdelpaq.vercel.app/img/car-market-analysis-dashboard.jpg',
    tags: ['Market Analysis', 'Automotive', 'Data Analysis']
  },

  {
    id: 'mobile-market',
    category: 'market-analytics',
    title: 'Mobile Market Analysis',
    description:
      'Analyze mobile phone market data to compare products, specifications, pricing, and market trends across different devices.',
    image: 'https://omarabdelpaq.vercel.app/img/mobile-market-specs-analysis.jpg',
    tags: ['Market Analysis', 'Mobile', 'Analytics']
  },


  /* ============================================================
     DATA VISUALIZATION
     ============================================================ */

  {
    id: 'tableau-visualization',
    category: 'data-visualization',
    title: 'Tableau Data Visualization',
    description:
      'Transform complex datasets into interactive Tableau visualizations that make trends, patterns, and business insights easier to understand.',
    image: 'https://omarabdelpaq.vercel.app/img/tableau-data-visualization.jpg',
    tags: ['Tableau', 'Visualization', 'Analytics']
  },

  {
    id: 'gemma-analytics',
    category: 'data-visualization',
    title: 'Gemma Analytics',
    description:
      'A visual analytics project designed to transform business data into clear dashboards, visual insights, and meaningful performance indicators.',
    image: 'https://omarabdelpaq.vercel.app/img/gemma-analytics.jpg',
    tags: ['Visualization', 'Dashboard', 'Analytics']
  },


  /* ============================================================
     SQL & DATA ANALYSIS
     ============================================================ */

  {
    id: 'sql-data-analysis',
    category: 'sql-analytics',
    title: 'SQL Data Analysis Projects',
    description:
      'A collection of SQL analysis projects focused on querying, transforming, aggregating, and extracting meaningful insights from structured datasets.',
    image: 'https://omarabdelpaq.vercel.app/img/sql-data-analysis-projects.png',
    tags: ['SQL', 'Data Analysis', 'Database']
  },

  {
    id: 'amazon-sales',
    category: 'sql-analytics',
    title: 'Amazon Sales Data Analysis',
    description:
      'Analyze Amazon sales data to uncover product performance, sales trends, customer behavior, and key business metrics using data-driven analysis.',
    image: 'https://omarabdelpaq.vercel.app/img/amazon-sales-performance-analysis.jpg',
    tags: ['SQL', 'Amazon', 'Sales']
  },


  /* ============================================================
     WEB DEVELOPMENT
     ============================================================ */

  {
    id: 'partner-crm',
    category: 'web-development',
    title: 'Partner CRM System',
    description:
      'A CRM solution designed to organize partner information, simplify relationship management, and provide a structured view of partner activities.',
    image: 'https://omarabdelpaq.vercel.app/img/partner-crm-system.jpg',
    tags: ['CRM', 'Web Development', 'Management']
  }

];