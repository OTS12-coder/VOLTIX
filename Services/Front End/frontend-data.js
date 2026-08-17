/* ==========================================================================
   VOLTIX — Frontend Products Data
   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const FRONTEND_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'components', name: 'Components' },
  { id: 'pages', name: 'Pages' },
  { id: 'sections', name: 'Sections' },
  { id: 'landing-pages', name: 'Landing Pages' },
  { id: 'dashboards', name: 'Dashboards' },
  { id: 'e-commerce', name: 'E-commerce' },
  { id: 'other', name: 'Other' }
];

const FRONTEND_PRODUCTS = [
  /* ========== COMPONENTS ========== */
  {
    id: 'navbar-01',
    category: 'components',
    title: 'Navbar Component',
    description: 'A sleek responsive navigation bar with mobile hamburger menu and smooth scroll links.',
    image: ''
  },
  {
    id: 'hero-01',
    category: 'components',
    title: 'Hero Component',
    description: 'A modern hero section with animated text, gradient accents, and dual call-to-action buttons.',
    image: ''
  },
  {
    id: 'footer-01',
    category: 'components',
    title: 'Footer Component',
    description: 'A clean multi-column footer with social links, newsletter signup, and legal links.',
    image: ''
  },
  {
    id: 'pricing-card-01',
    category: 'components',
    title: 'Pricing Card',
    description: 'A flexible pricing card with feature lists, hover effects, and highlighted popular plan.',
    image: ''
  },
  {
    id: 'testimonial-card-01',
    category: 'components',
    title: 'Testimonial Card',
    description: 'A minimal testimonial card with avatar, name, role, and quote with subtle hover lift.',
    image: ''
  },
  {
    id: 'feature-card-01',
    category: 'components',
    title: 'Feature Card',
    description: 'A grid-ready feature highlight card with icon, title, and description text.',
    image: ''
  },
  {
    id: 'contact-form-01',
    category: 'components',
    title: 'Contact Form',
    description: 'A validated contact form with floating labels, error states, and submit animation.',
    image: ''
  },

  /* ========== PAGES ========== */
  {
    id: 'login-01',
    category: 'pages',
    title: 'Login Page',
    description: 'A secure login page with social auth options, password visibility toggle, and glass morphism.',
    image: ''
  },
  {
    id: 'register-01',
    category: 'pages',
    title: 'Register Page',
    description: 'A multi-step registration page with progress indicator, validation, and success states.',
    image: ''
  },
  {
    id: 'about-01',
    category: 'pages',
    title: 'About Page',
    description: 'A brand story page with team highlights, company values, and timeline section.',
    image: ''
  },
  {
    id: 'contact-01',
    category: 'pages',
    title: 'Contact Page',
    description: 'A full contact page with form, embedded map, and quick-contact link rows.',
    image: ''
  },
  {
    id: 'pricing-01',
    category: 'pages',
    title: 'Pricing Page',
    description: 'A comprehensive pricing page with toggle for monthly/annual billing and FAQ section.',
    image: ''
  },

  /* ========== SECTIONS ========== */
  {
    id: 'hero-section-01',
    category: 'sections',
    title: 'Hero Section',
    description: 'A full-width hero with background animation, gradient text, and dual CTA buttons.',
    image: ''
  },
  {
    id: 'features-section-01',
    category: 'sections',
    title: 'Features Section',
    description: 'A 3-column features grid with icons, titles, descriptions, and hover animations.',
    image: ''
  },
  {
    id: 'testimonials-section-01',
    category: 'sections',
    title: 'Testimonials Section',
    description: 'A rotating testimonial slider with client photos, names, roles, and quote cards.',
    image: ''
  },
  {
    id: 'pricing-section-01',
    category: 'sections',
    title: 'Pricing Section',
    description: 'A 3-tier pricing table with highlighted popular plan, toggle switch, and feature checklists.',
    image: ''
  },
  {
    id: 'faq-section-01',
    category: 'sections',
    title: 'FAQ Section',
    description: 'An accordion FAQ section with smooth expand/collapse animations and search filter.',
    image: ''
  },
  {
    id: 'team-section-01',
    category: 'sections',
    title: 'Team Section',
    description: 'A team grid with member photos, roles, bios, and social link buttons.',
    image: ''
  },
  {
    id: 'cta-section-01',
    category: 'sections',
    title: 'CTA Section',
    description: 'A bold call-to-action section with gradient background, headline, and single action button.',
    image: ''
  },

  /* ========== LANDING PAGES ========== */
  {
    id: 'saas-landing-01',
    category: 'landing-pages',
    title: 'SaaS Landing Page',
    description: 'A complete SaaS landing page with hero, features, pricing table, testimonials, and footer.',
    image: ''
  },
  {
    id: 'agency-landing-01',
    category: 'landing-pages',
    title: 'Agency Landing Page',
    description: 'A creative agency landing page with portfolio grid, process timeline, and client logos.',
    image: ''
  },
  {
    id: 'startup-landing-01',
    category: 'landing-pages',
    title: 'Startup Landing Page',
    description: 'A modern startup landing page with problem/solution sections, metrics, and early-access form.',
    image: ''
  },
  {
    id: 'product-landing-01',
    category: 'landing-pages',
    title: 'Product Landing Page',
    description: 'A single-product landing page with specs, reviews, demo video placeholder, and buy button.',
    image: ''
  },
  {
    id: 'business-landing-01',
    category: 'landing-pages',
    title: 'Business Landing Page',
    description: 'A corporate business landing page with services grid, case studies, and contact form.',
    image: ''
  },

  /* ========== DASHBOARDS ========== */
  {
    id: 'admin-dashboard-01',
    category: 'dashboards',
    title: 'Admin Dashboard',
    description: 'A dark-themed admin dashboard with sidebar navigation, stats cards, and data table.',
    image: ''
  },
  {
    id: 'analytics-dashboard-01',
    category: 'dashboards',
    title: 'Analytics Dashboard',
    description: 'A data-rich analytics dashboard with charts, date range filters, and export options.',
    image: ''
  },
  {
    id: 'crm-dashboard-01',
    category: 'dashboards',
    title: 'CRM Dashboard',
    description: 'A customer relationship management dashboard with pipeline view, contacts, and deals.',
    image: ''
  },
  {
    id: 'finance-dashboard-01',
    category: 'dashboards',
    title: 'Finance Dashboard',
    description: 'A financial overview dashboard with revenue charts, transactions list, and budget tracker.',
    image: ''
  },

  /* ========== E-COMMERCE ========== */
  {
    id: 'product-page-01',
    category: 'e-commerce',
    title: 'Product Page',
    description: 'A detailed product page with image gallery, variant selectors, and add-to-cart flow.',
    image: ''
  },
  {
    id: 'product-listing-01',
    category: 'e-commerce',
    title: 'Product Listing',
    description: 'A filterable product grid with sidebar filters, sort dropdown, and quick-view modal.',
    image: ''
  },
  {
    id: 'shopping-cart-01',
    category: 'e-commerce',
    title: 'Shopping Cart',
    description: 'A slide-out cart with quantity controls, promo code input, and smooth item removal.',
    image: ''
  },
  {
    id: 'checkout-page-01',
    category: 'e-commerce',
    title: 'Checkout Page',
    description: 'A multi-step checkout page with shipping form, payment summary, and order confirmation.',
    image: ''
  },

  /* ========== OTHER ========== */
  {
    id: 'coming-soon-01',
    category: 'other',
    title: 'Coming Soon Page',
    description: 'A stylish coming soon page with countdown timer, email capture, and social links.',
    image: ''
  },
  {
    id: '404-page-01',
    category: 'other',
    title: '404 Error Page',
    description: 'A branded 404 page with search bar, suggested links, and playful illustration area.',
    image: ''
  },
  {
    id: 'maintenance-01',
    category: 'other',
    title: 'Maintenance Mode Page',
    description: 'A minimal maintenance page with progress indicator, estimated time, and contact email.',
    image: ''
  }
];
