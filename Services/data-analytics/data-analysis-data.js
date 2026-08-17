/* ==========================================================================
   VOLTIX — Data Analytics Products Data
   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const DATA_ANALYTICS_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'data-visualization', name: 'Data Visualization' },
  { id: 'business-intelligence', name: 'Business Intelligence' },
  { id: 'data-engineering', name: 'Data Engineering' },
  { id: 'machine-learning', name: 'Machine Learning' },
  { id: 'statistical-analysis', name: 'Statistical Analysis' },
  { id: 'data-mining', name: 'Data Mining' },
  { id: 'predictive-analytics', name: 'Predictive Analytics' },
  { id: 'dashboard-design', name: 'Dashboard Design' },
  { id: 'etl-pipelines', name: 'ETL Pipelines' },
  { id: 'other', name: 'Other' }
];

const DATA_ANALYTICS_PRODUCTS = [
  /* ========== DATA VISUALIZATION ========== */
  {
    id: 'viz-chart-01',
    category: 'data-visualization',
    title: 'Interactive Chart Pack',
    description: 'A collection of responsive charts — line, bar, area, scatter, and heatmap — built with smooth animations and tooltip interactions.',
    image: '',
    tags: ['Charts', 'D3.js', 'Responsive']
  },
  {
    id: 'viz-infographic-01',
    category: 'data-visualization',
    title: 'Data Infographic Kit',
    description: 'A set of animated infographic templates for presenting KPIs, timelines, and comparisons with minimal design overhead.',
    image: '',
    tags: ['Infographic', 'Animation', 'KPI']
  },
  {
    id: 'viz-geo-01',
    category: 'data-visualization',
    title: 'Geospatial Dashboard',
    description: 'A map-driven visualization layer with choropleth overlays, drill-down regions, and real-time coordinate streaming.',
    image: '',
    tags: ['Maps', 'GeoJSON', 'Real-time']
  },
  {
    id: 'viz-realtime-01',
    category: 'data-visualization',
    title: 'Realtime Data Stream UI',
    description: 'A live-updating visualization panel for streaming metrics with WebSocket integration and auto-scaling axes.',
    image: '',
    tags: ['WebSocket', 'Streaming', 'Live']
  },

  /* ========== BUSINESS INTELLIGENCE ========== */
  {
    id: 'bi-report-01',
    category: 'business-intelligence',
    title: 'Automated Report Builder',
    description: 'A drag-and-drop report generator with scheduled exports, PDF/CSV output, and shared dashboard links.',
    image: '',
    tags: ['Reports', 'PDF', 'Scheduled']
  },
  {
    id: 'bi-kpi-01',
    category: 'business-intelligence',
    title: 'KPI Scorecard',
    description: 'A balanced scorecard template tracking revenue, churn, NPS, and operational efficiency across departments.',
    image: '',
    tags: ['KPI', 'Scorecard', 'Metrics']
  },
  {
    id: 'bi-olap-01',
    category: 'business-intelligence',
    title: 'OLAP Cube Explorer',
    description: 'A multidimensional analysis interface supporting slice-and-dice, drill-through, and pivot table exports.',
    image: '',
    tags: ['OLAP', 'Pivot', 'Multidimensional']
  },
  {
    id: 'bi-alert-01',
    category: 'business-intelligence',
    title: 'Smart Alert System',
    description: 'Threshold-based alerting with email, Slack, and SMS notifications backed by anomaly detection rules.',
    image: '',
    tags: ['Alerts', 'Anomaly', 'Notifications']
  },

  /* ========== DATA ENGINEERING ========== */
  {
    id: 'eng-pipeline-01',
    category: 'data-engineering',
    title: 'Data Pipeline Orchestrator',
    description: 'A visual DAG builder for orchestrating extract, transform, and load jobs with dependency management and retries.',
    image: '',
    tags: ['DAG', 'Orchestration', 'ETL']
  },
  {
    id: 'eng-lake-01',
    category: 'data-engineering',
    title: 'Data Lake Ingest Kit',
    description: 'Schema-on-read ingestion templates for Parquet, Avro, and JSON with automatic partitioning and catalog sync.',
    image: '',
    tags: ['Data Lake', 'Parquet', 'Ingestion']
  },
  {
    id: 'eng-quality-01',
    category: 'data-engineering',
    title: 'Data Quality Monitor',
    description: 'A profiling and validation layer that checks completeness, uniqueness, and freshness across upstream sources.',
    image: '',
    tags: ['Quality', 'Validation', 'Profiling']
  },
  {
    id: 'eng-stream-01',
    category: 'data-engineering',
    title: 'Stream Processing Framework',
    description: 'A windowed stream processing template with exactly-once semantics, state stores, and dead-letter queues.',
    image: '',
    tags: ['Streaming', 'Kafka', 'Windowing']
  },

  /* ========== MACHINE LEARNING ========== */
  {
    id: 'ml-classifier-01',
    category: 'machine-learning',
    title: 'Classification Model Pack',
    description: 'Pre-trained and customizable classifiers for sentiment, spam, and image categorization with REST endpoints.',
    image: '',
    tags: ['Classification', 'NLP', 'REST']
  },
  {
    id: 'ml-regressor-01',
    category: 'machine-learning',
    title: 'Regression Forecaster',
    description: 'Time-series and multivariate regression models for demand forecasting, pricing, and capacity planning.',
    image: '',
    tags: ['Regression', 'Forecasting', 'Time-series']
  },
  {
    id: 'ml-cluster-01',
    category: 'machine-learning',
    title: 'Clustering Explorer',
    description: 'An interactive segmentation tool using K-means, DBSCAN, and hierarchical clustering with silhouette analysis.',
    image: '',
    tags: ['Clustering', 'Segmentation', 'EDA']
  },
  {
    id: 'ml-mlops-01',
    category: 'machine-learning',
    title: 'MLOps Deployment Kit',
    description: 'A model serving stack with canary deployments, A/B testing, feature stores, and performance monitoring.',
    image: '',
    tags: ['MLOps', 'Serving', 'A/B Testing']
  },

  /* ========== STATISTICAL ANALYSIS ========== */
  {
    id: 'stat-ab-01',
    category: 'statistical-analysis',
    title: 'A/B Test Analyzer',
    description: 'A significance calculator with confidence intervals, power analysis, and sequential testing guardrails.',
    image: '',
    tags: ['A/B Testing', 'Significance', 'Power']
  },
  {
    id: 'stat-anova-01',
    category: 'statistical-analysis',
    title: 'ANOVA Dashboard',
    description: 'A multi-group comparison interface with post-hoc tests, effect sizes, and interactive distribution plots.',
    image: '',
    tags: ['ANOVA', 'Hypothesis', 'Distributions']
  },
  {
    id: 'stat-survey-01',
    category: 'statistical-analysis',
    title: 'Survey Analysis Suite',
    description: 'Weighting, cross-tabulation, and thematic coding workflows for large-scale survey datasets.',
    image: '',
    tags: ['Survey', 'Weighting', 'Coding']
  },

  /* ========== DATA MINING ========== */
  {
    id: 'mining-assoc-01',
    category: 'data-mining',
    title: 'Association Rule Miner',
    description: 'A market-basket analysis toolkit with Apriori and FP-Growth implementations and lift visualizations.',
    image: '',
    tags: ['Association', 'Apriori', 'FP-Growth']
  },
  {
    id: 'mining-text-01',
    category: 'data-mining',
    title: 'Text Mining Pipeline',
    description: 'End-to-end text mining from tokenization and TF-IDF to topic modeling and named entity recognition.',
    image: '',
    tags: ['NLP', 'Topic Modeling', 'NER']
  },
  {
    id: 'mining-web-01',
    category: 'data-mining',
    title: 'Web Scraper & Extractor',
    description: 'A configurable scraping framework with rotating proxies, schema extraction, and structured output pipelines.',
    image: '',
    tags: ['Scraping', 'Proxies', 'Schema']
  },

  /* ========== PREDICTIVE ANALYTICS ========== */
  {
    id: 'pred-churn-01',
    category: 'predictive-analytics',
    title: 'Customer Churn Predictor',
    description: 'A churn scoring model with cohort analysis, retention levers, and automated intervention triggers.',
    image: '',
    tags: ['Churn', 'Scoring', 'Retention']
  },
  {
    id: 'pred-demand-01',
    category: 'predictive-analytics',
    title: 'Demand Forecasting Engine',
    description: 'Seasonal demand predictions with calendar-aware features, promotion lift, and safety stock recommendations.',
    image: '',
    tags: ['Demand', 'Seasonality', 'Inventory']
  },
  {
    id: 'pred-fraud-01',
    category: 'predictive-analytics',
    title: 'Fraud Detection Model',
    description: 'A real-time anomaly scoring system with rule-engine fallback, case management, and model drift tracking.',
    image: '',
    tags: ['Fraud', 'Anomaly', 'Real-time']
  },

  /* ========== DASHBOARD DESIGN ========== */
  {
    id: 'dash-exec-01',
    category: 'dashboard-design',
    title: 'Executive Dashboard',
    description: 'A high-level C-suite dashboard with revenue, margin, and headcount tiles plus trend sparklines.',
    image: '',
    tags: ['Executive', 'C-suite', 'Tiles']
  },
  {
    id: 'dash-ops-01',
    category: 'dashboard-design',
    title: 'Operations Command Center',
    description: 'A real-time ops dashboard for SLA tracking, incident response, and capacity heatmaps.',
    image: '',
    tags: ['Operations', 'SLA', 'Command']
  },
  {
    id: 'dash-fin-01',
    category: 'dashboard-design',
    title: 'Financial Analytics Dashboard',
    description: 'A P&L, cash flow, and budget variance dashboard with drill-to-transaction and period-over-period comparisons.',
    image: '',
    tags: ['Finance', 'P&L', 'Budget']
  },

  /* ========== ETL PIPELINES ========== */
  {
    id: 'etl-sql-01',
    category: 'etl-pipelines',
    title: 'SQL ETL Framework',
    description: 'A parameterized SQL-based ETL framework with idempotent loads, audit logs, and rollback procedures.',
    image: '',
    tags: ['SQL', 'Idempotent', 'Audit']
  },
  {
    id: 'etl-nosql-01',
    category: 'etl-pipelines',
    title: 'NoSQL Sync Pipeline',
    description: 'Change-data-capture pipelines syncing relational data to document and graph stores with schema evolution.',
    image: '',
    tags: ['NoSQL', 'CDC', 'Graph']
  },
  {
    id: 'etl-schedule-01',
    category: 'etl-pipelines',
    title: 'Job Scheduler & Monitor',
    description: 'A cron-based job scheduler with dependency graphs, failure alerts, and historical run analytics.',
    image: '',
    tags: ['Scheduler', 'Cron', 'Monitoring']
  },

  /* ========== OTHER ========== */
  {
    id: 'coming-soon-01',
    category: 'other',
    title: 'Coming Soon Template',
    description: 'A placeholder data analytics landing page with countdown, email capture, and service teaser cards.',
    image: '',
    tags: ['Coming Soon', 'Landing', 'Teaser']
  },
  {
    id: 'data-catalog-01',
    category: 'other',
    title: 'Data Catalog Starter',
    description: 'A browsable metadata catalog with lineage graphs, ownership tags, and search across tables and reports.',
    image: '',
    tags: ['Catalog', 'Lineage', 'Metadata']
  },
  {
    id: 'privacy-analytics-01',
    category: 'other',
    title: 'Privacy-First Analytics',
    description: 'A cookieless analytics stack with differential privacy budgets, aggregation thresholds, and consent-aware reporting.',
    image: '',
    tags: ['Privacy', 'Differential', 'Consent']
  }
];
