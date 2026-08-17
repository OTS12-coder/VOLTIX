/* ==========================================================================
   VOLTIX — UI/UX Products Data
   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const UI_UX_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'ui-kits', name: 'UI Kits' },
  { id: 'design-systems', name: 'Design Systems' },
  { id: 'wireframes', name: 'Wireframes' },
  { id: 'prototypes', name: 'Prototypes' },
  { id: 'mobile-ui', name: 'Mobile UI' },
  { id: 'web-ui', name: 'Web UI' },
  { id: 'dashboards', name: 'Dashboards' },
  { id: 'landing-pages', name: 'Landing Pages' },
  { id: 'design-resources', name: 'Design Resources' },
  { id: 'other', name: 'Other' }
];

const UI_UX_PRODUCTS = [
  /* ========== UI KITS ========== */
  {
    id: 'ui-kit-01',
    category: 'ui-kits',
    title: 'Essential UI Kit',
    description: 'A comprehensive UI kit with 200+ components including buttons, forms, modals, and navigation elements.',
    image: '',
    tags: ['Components', 'Figma']
  },
  {
    id: 'ui-kit-02',
    category: 'ui-kits',
    title: 'Mobile UI Kit',
    description: 'A complete mobile UI kit with iOS and Android patterns, gestures, and native-feeling interactions.',
    image: '',
    tags: ['Mobile', 'iOS', 'Android']
  },
  {
    id: 'ui-kit-03',
    category: 'ui-kits',
    title: 'Dashboard UI Kit',
    description: 'A specialized UI kit for admin dashboards with charts, tables, and data visualization components.',
    image: '',
    tags: ['Dashboard', 'Admin']
  },
  {
    id: 'ui-kit-04',
    category: 'ui-kits',
    title: 'E-commerce UI Kit',
    description: 'A conversion-focused UI kit with product cards, checkout flows, and shopping cart patterns.',
    image: '',
    tags: ['E-commerce', 'Shop']
  },

  /* ========== DESIGN SYSTEMS ========== */
  {
    id: 'design-system-01',
    category: 'design-systems',
    title: 'Core Design System',
    description: 'A scalable design system with tokens, components, and guidelines for consistent product development.',
    image: '',
    tags: ['Tokens', 'Guidelines']
  },
  {
    id: 'design-system-02',
    category: 'design-systems',
    title: 'Color System Pro',
    description: 'An accessible color system with WCAG-compliant palettes, semantic naming, and dark mode support.',
    image: '',
    tags: ['Colors', 'Accessibility']
  },
  {
    id: 'design-system-03',
    category: 'design-systems',
    title: 'Typography System',
    description: 'A modular typography system with scale, hierarchy, and responsive type guidelines.',
    image: '',
    tags: ['Typography', 'Scale']
  },
  {
    id: 'design-system-04',
    category: 'design-systems',
    title: 'Icon System',
    description: 'A consistent icon system with 500+ icons, multiple weights, and usage guidelines.',
    image: '',
    tags: ['Icons', 'Consistent']
  },

  /* ========== WIREFRAMES ========== */
  {
    id: 'wireframe-01',
    category: 'wireframes',
    title: 'Low-Fidelity Wireframes',
    description: 'A set of low-fidelity wireframe templates for rapid prototyping and user flow validation.',
    image: '',
    tags: ['Low-fi', 'Sketches']
  },
  {
    id: 'wireframe-02',
    category: 'wireframes',
    title: 'Mobile Wireframe Kit',
    description: 'Mobile-specific wireframe templates covering common app patterns and user journeys.',
    image: '',
    tags: ['Mobile', 'App']
  },
  {
    id: 'wireframe-03',
    category: 'wireframes',
    title: 'Dashboard Wireframes',
    description: 'Pre-built dashboard wireframe layouts for analytics, admin panels, and data-heavy interfaces.',
    image: '',
    tags: ['Dashboard', 'Layout']
  },
  {
    id: 'wireframe-04',
    category: 'wireframes',
    title: 'E-commerce Wireframes',
    description: 'Complete wireframe flows for product discovery, checkout, and account management.',
    image: '',
    tags: ['Shop', 'Flow']
  },

  /* ========== PROTOTYPES ========== */
  {
    id: 'prototype-01',
    category: 'prototypes',
    title: 'Interactive Prototype Kit',
    description: 'A collection of interactive prototypes with micro-interactions, transitions, and user testing flows.',
    image: '',
    tags: ['Interactive', 'Flows']
  },
  {
    id: 'prototype-02',
    category: 'prototypes',
    title: 'Mobile App Prototype',
    description: 'A fully interactive mobile app prototype with gesture-based navigation and onboarding flows.',
    image: '',
    tags: ['Mobile', 'Gestures']
  },
  {
    id: 'prototype-03',
    category: 'prototypes',
    title: 'Web App Prototype',
    description: 'A responsive web app prototype with complex states, modals, and data-driven interfaces.',
    image: '',
    tags: ['Web', 'Responsive']
  },
  {
    id: 'prototype-04',
    category: 'prototypes',
    title: 'SaaS Prototype Pack',
    description: 'End-to-end SaaS prototypes covering onboarding, dashboards, settings, and billing flows.',
    image: '',
    tags: ['SaaS', 'Onboarding']
  },

  /* ========== MOBILE UI ========== */
  {
    id: 'mobile-ui-01',
    category: 'mobile-ui',
    title: 'iOS Design Pack',
    description: 'A complete iOS design pack following Apple HIG with native patterns and smooth animations.',
    image: '',
    tags: ['iOS', 'HIG']
  },
  {
    id: 'mobile-ui-02',
    category: 'mobile-ui',
    title: 'Android Design Pack',
    description: 'Material Design 3 compliant mobile UI pack with dynamic theming and adaptive layouts.',
    image: '',
    tags: ['Android', 'Material']
  },
  {
    id: 'mobile-ui-03',
    category: 'mobile-ui',
    title: 'Cross-Platform UI',
    description: 'A unified mobile UI system that adapts seamlessly between iOS and Android platforms.',
    image: '',
    tags: ['Cross-platform', 'Unified']
  },
  {
    id: 'mobile-ui-04',
    category: 'mobile-ui',
    title: 'Mobile Dashboard UI',
    description: 'A data-focused mobile dashboard with charts, filters, and drill-down interactions.',
    image: '',
    tags: ['Dashboard', 'Charts']
  },

  /* ========== WEB UI ========== */
  {
    id: 'web-ui-01',
    category: 'web-ui',
    title: 'SaaS Web UI',
    description: 'A polished SaaS web interface with sidebar navigation, data tables, and user management.',
    image: '',
    tags: ['SaaS', 'Admin']
  },
  {
    id: 'web-ui-02',
    category: 'web-ui',
    title: 'Portfolio Web UI',
    description: 'A creative portfolio web UI with project showcases, filtering, and smooth page transitions.',
    image: '',
    tags: ['Portfolio', 'Creative']
  },
  {
    id: 'web-ui-03',
    category: 'web-ui',
    title: 'Blog Web UI',
    description: 'A content-focused blog UI with reading progress, related posts, and newsletter integration.',
    image: '',
    tags: ['Blog', 'Content']
  },
  {
    id: 'web-ui-04',
    category: 'web-ui',
    title: 'Corporate Web UI',
    description: 'A professional corporate web UI with team pages, services, and contact flows.',
    image: '',
    tags: ['Corporate', 'Business']
  },

  /* ========== DASHBOARDS ========== */
  {
    id: 'dashboard-01',
    category: 'dashboards',
    title: 'Analytics Dashboard',
    description: 'A feature-rich analytics dashboard with real-time charts, filters, and export capabilities.',
    image: '',
    tags: ['Analytics', 'Charts']
  },
  {
    id: 'dashboard-02',
    category: 'dashboards',
    title: 'Admin Dashboard',
    description: 'A comprehensive admin dashboard with user management, settings, and system monitoring.',
    image: '',
    tags: ['Admin', 'Management']
  },
  {
    id: 'dashboard-03',
    category: 'dashboards',
    title: 'Finance Dashboard',
    description: 'A financial dashboard with revenue tracking, expense management, and budget visualization.',
    image: '',
    tags: ['Finance', 'Budget']
  },
  {
    id: 'dashboard-04',
    category: 'dashboards',
    title: 'CRM Dashboard',
    description: 'A customer relationship dashboard with pipeline views, contact management, and deal tracking.',
    image: '',
    tags: ['CRM', 'Pipeline']
  },

  /* ========== LANDING PAGES ========== */
  {
    id: 'landing-01',
    category: 'landing-pages',
    title: 'Product Landing Page',
    description: 'A high-converting product landing page with hero, features, testimonials, and pricing sections.',
    image: '',
    tags: ['Product', 'Conversion']
  },
  {
    id: 'landing-02',
    category: 'landing-pages',
    title: 'SaaS Landing Page',
    description: 'A modern SaaS landing page with integration logos, feature highlights, and CTAs.',
    image: '',
    tags: ['SaaS', 'Features']
  },
  {
    id: 'landing-03',
    category: 'landing-pages',
    title: 'App Landing Page',
    description: 'A mobile app landing page with app store badges, screenshots, and download CTAs.',
    image: '',
    tags: ['App', 'Mobile']
  },
  {
    id: 'landing-04',
    category: 'landing-pages',
    title: 'Agency Landing Page',
    description: 'A creative agency landing page with portfolio grid, process timeline, and client logos.',
    image: '',
    tags: ['Agency', 'Portfolio']
  },

  /* ========== DESIGN RESOURCES ========== */
  {
    id: 'design-resource-01',
    category: 'design-resources',
    title: 'Icon Library',
    description: 'A curated icon library with 1000+ SVG icons, multiple styles, and Figma plugin support.',
    image: '',
    tags: ['Icons', 'SVG']
  },
  {
    id: 'design-resource-02',
    category: 'design-resources',
    title: 'Illustration Pack',
    description: 'A modern illustration pack with 50+ customizable illustrations for web and mobile.',
    image: '',
    tags: ['Illustrations', 'Custom']
  },
  {
    id: 'design-resource-03',
    category: 'design-resources',
    title: 'Mockup Templates',
    description: 'A collection of device mockups for presenting designs in realistic contexts.',
    image: '',
    tags: ['Mockups', 'Devices']
  },
  {
    id: 'design-resource-04',
    category: 'design-resources',
    title: 'Design Checklist',
    description: 'A comprehensive UI/UX design checklist covering usability, accessibility, and visual consistency.',
    image: '',
    tags: ['Checklist', 'Quality']
  },

  /* ========== OTHER ========== */
  {
    id: 'ui-ux-other-01',
    category: 'other',
    title: 'Design Presentation Deck',
    description: 'A professional design presentation template for client pitches and design reviews.',
    image: '',
    tags: ['Presentation', 'Pitch']
  },
  {
    id: 'ui-ux-other-02',
    category: 'other',
    title: 'User Flow Templates',
    description: 'Ready-to-use user flow templates for mapping complex user journeys and decision trees.',
    image: '',
    tags: ['Flows', 'UX']
  },
  {
    id: 'ui-ux-other-03',
    category: 'other',
    title: 'Style Guide Template',
    description: 'A living style guide template that documents your design decisions and keeps teams aligned.',
    image: '',
    tags: ['Style Guide', 'Documentation']
  }
];
