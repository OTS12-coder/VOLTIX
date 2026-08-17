/* ==========================================================================
   VOLTIX — .NET Products Data
   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const DOTNET_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'asp-net', name: 'ASP.NET' },
  { id: 'asp-net-core', name: 'ASP.NET Core' },
  { id: 'csharp', name: 'C#' },
  { id: 'blazor', name: 'Blazor' },
  { id: 'dotnet-maui', name: '.NET MAUI' },
  { id: 'entity-framework', name: 'Entity Framework' },
  { id: 'web-apis', name: 'Web APIs' },
  { id: 'mvc', name: 'MVC' },
  { id: 'desktop', name: 'Desktop Applications' },
  { id: 'other', name: 'Other' }
];

const DOTNET_PRODUCTS = [
  /* ========== ASP.NET ========== */
  {
    id: 'asp-webforms-01',
    category: 'asp-net',
    title: 'ASP.NET Web Forms App',
    description: 'A mature Web Forms application with event-driven UI, view state management, and server controls for rapid enterprise development.',
    image: '',
    tags: ['Web Forms', 'Enterprise', 'Server Controls']
  },
  {
    id: 'asp-webforms-crm-01',
    category: 'asp-net',
    title: 'Web Forms CRM Module',
    description: 'A customer relationship management module built on ASP.NET Web Forms with data-bound grids, validation, and reporting.',
    image: '',
    tags: ['CRM', 'Data Binding', 'Reporting']
  },
  {
    id: 'asp-webforms-inventory-01',
    category: 'asp-net',
    title: 'Web Forms Inventory System',
    description: 'An inventory management system with barcode support, stock tracking, purchase orders, and supplier management on Web Forms.',
    image: '',
    tags: ['Inventory', 'Barcode', 'Tracking']
  },
  {
    id: 'asp-webforms-hr-01',
    category: 'asp-net',
    title: 'Web Forms HR Portal',
    description: 'An internal HR portal with employee self-service, leave management, payroll summaries, and role-based access on Web Forms.',
    image: '',
    tags: ['HR', 'Portal', 'Authentication']
  },

  /* ========== ASP.NET Core ========== */
  {
    id: 'core-webapp-01',
    category: 'asp-net-core',
    title: 'ASP.NET Core Web App',
    description: 'A modern ASP.NET Core web application with Razor Pages, dependency injection, and middleware pipeline best practices.',
    image: '',
    tags: ['Razor Pages', 'Middleware', 'DI']
  },
  {
    id: 'core-microservice-01',
    category: 'asp-net-core',
    title: 'Core Microservice Template',
    description: 'A production-ready microservice template with health checks, structured logging, metrics, and Docker support.',
    image: '',
    tags: ['Microservice', 'Docker', 'Health Checks']
  },
  {
    id: 'core-saas-01',
    category: 'asp-net-core',
    title: 'Core SaaS Starter',
    description: 'A multi-tenant SaaS starter with tenant isolation, subscription billing integration, and admin dashboard on ASP.NET Core.',
    image: '',
    tags: ['SaaS', 'Multi-tenant', 'Billing']
  },
  {
    id: 'core-realtime-01',
    category: 'asp-net-core',
    title: 'Core Real-time Dashboard',
    description: 'A real-time analytics dashboard with SignalR hubs, live chart updates, and server push notifications on ASP.NET Core.',
    image: '',
    tags: ['SignalR', 'Real-time', 'Dashboard']
  },

  /* ========== C# ========== */
  {
    id: 'csharp-library-01',
    category: 'csharp',
    title: 'C# Class Library Pack',
    description: 'A collection of reusable C# class libraries for logging, caching, validation, and file processing with unit tests.',
    image: '',
    tags: ['Class Library', 'Reusable', 'Unit Tests']
  },
  {
    id: 'csharp-cli-01',
    category: 'csharp',
    title: 'C# CLI Toolchain',
    description: 'A command-line toolchain built with C# and System.CommandLine for automating builds, migrations, and deployments.',
    image: '',
    tags: ['CLI', 'Automation', 'System.CommandLine']
  },
  {
    id: 'csharp-console-01',
    category: 'csharp',
    title: 'C# Console Service',
    description: 'A resilient console service with hosted background workers, graceful shutdown, and structured logging using C#.',
    image: '',
    tags: ['Console', 'Background Worker', 'Hosting']
  },
  {
    id: 'csharp-utils-01',
    category: 'csharp',
    title: 'C# Utility Toolkit',
    description: 'A general-purpose C# utility toolkit with extensions, helpers, and performance-optimized algorithms for everyday development.',
    image: '',
    tags: ['Utilities', 'Extensions', 'Performance']
  },

  /* ========== Blazor ========== */
  {
    id: 'blazor-wasm-01',
    category: 'blazor',
    title: 'Blazor WebAssembly App',
    description: 'A Blazor WebAssembly application with offline support, lazy-loaded assemblies, and interactive UI components.',
    image: '',
    tags: ['WebAssembly', 'Offline', 'SPA']
  },
  {
    id: 'blazor-server-01',
    category: 'blazor',
    title: 'Blazor Server Dashboard',
    description: 'A Blazor Server dashboard with real-time data streaming, SignalR integration, and responsive layout components.',
    image: '',
    tags: ['Server', 'Real-time', 'Dashboard']
  },
  {
    id: 'blazor-admin-01',
    category: 'blazor',
    title: 'Blazor Admin Template',
    description: 'A complete Blazor admin template with authentication, authorization, data tables, charts, and theme switching.',
    image: '',
    tags: ['Admin', 'Auth', 'Charts']
  },
  {
    id: 'blazor-maui-01',
    category: 'blazor',
    title: 'Blazor Hybrid Mobile UI',
    description: 'A Blazor Hybrid mobile UI with native device APIs, push notifications, and cross-platform rendering via .NET MAUI.',
    image: '',
    tags: ['Hybrid', 'Mobile', 'MAUI']
  },

  /* ========== .NET MAUI ========== */
  {
    id: 'maui-mobile-01',
    category: 'dotnet-maui',
    title: '.NET MAUI Mobile App',
    description: 'A cross-platform .NET MAUI mobile app with navigation, local storage, camera access, and push notifications.',
    image: '',
    tags: ['Mobile', 'Cross-platform', 'Push Notifications']
  },
  {
    id: 'maui-desktop-01',
    category: 'dotnet-maui',
    title: '.NET MAUI Desktop App',
    description: 'A .NET MAUI desktop application with menu bars, dock panels, file drag-and-drop, and native window management.',
    image: '',
    tags: ['Desktop', 'Windows', 'macOS']
  },
  {
    id: 'maui-multiform-01',
    category: 'dotnet-maui',
    title: 'MAUI Multi-form App',
    description: 'A multi-form .NET MAUI app with tabbed navigation, deep linking, and platform-specific customizations.',
    image: '',
    tags: ['Tabs', 'Deep Linking', 'Platform']
  },

  /* ========== Entity Framework ========== */
  {
    id: 'efcore-setup-01',
    category: 'entity-framework',
    title: 'EF Core Database Setup',
    description: 'A complete Entity Framework Core setup with code-first migrations, seed data, connection pooling, and repository pattern.',
    image: '',
    tags: ['Code First', 'Migrations', 'Repository']
  },
  {
    id: 'efcore-audit-01',
    category: 'entity-framework',
    title: 'EF Core Audit Logging',
    description: 'An audit logging solution with EF Core interceptors, change tracking, soft deletes, and immutable entity history.',
    image: '',
    tags: ['Audit', 'Interceptors', 'Soft Delete']
  },
  {
    id: 'efcore-perf-01',
    category: 'entity-framework',
    title: 'EF Core Performance Tuning',
    description: 'A performance tuning guide and implementation for EF Core with compiled queries, batching, and NoTracking queries.',
    image: '',
    tags: ['Performance', ' Compiled Queries', 'Batching']
  },
  {
    id: 'efcore-multi-01',
    category: 'entity-framework',
    title: 'EF Core Multi-DB Setup',
    description: 'A multi-database EF Core setup supporting SQL Server, PostgreSQL, and SQLite with dynamic provider selection.',
    image: '',
    tags: ['Multi-DB', 'PostgreSQL', 'SQLite']
  },

  /* ========== Web APIs ========== */
  {
    id: 'api-rest-01',
    category: 'web-apis',
    title: 'REST API with .NET',
    description: 'A versioned REST API built with ASP.NET Core, including authentication, rate limiting, request validation, and Swagger docs.',
    image: '',
    tags: ['REST', 'Swagger', 'Versioning']
  },
  {
    id: 'api-minimal-01',
    category: 'web-apis',
    title: 'Minimal API Template',
    description: 'A minimal API template with endpoint routing, middleware, health checks, and OpenAPI documentation for fast prototyping.',
    image: '',
    tags: ['Minimal API', 'Prototyping', 'OpenAPI']
  },
  {
    id: 'api-auth-01',
    category: 'web-apis',
    title: 'API Authentication Pack',
    description: 'An authentication and authorization pack with JWT Bearer tokens, refresh tokens, and policy-based access control.',
    image: '',
    tags: ['JWT', 'Auth', 'Policies']
  },
  {
    id: 'api-rate-01',
    category: 'web-apis',
    title: 'API Rate Limiting Setup',
    description: 'A rate limiting implementation with fixed and sliding window policies, client identifiers, and distributed cache support.',
    image: '',
    tags: ['Rate Limit', 'Cache', 'Security']
  },

  /* ========== MVC ========== */
  {
    id: 'mvc-app-01',
    category: 'mvc',
    title: 'ASP.NET MVC Application',
    description: 'A traditional ASP.NET MVC application with areas, filters, view models, and tag helpers for structured web development.',
    image: '',
    tags: ['MVC', 'Areas', 'Tag Helpers']
  },
  {
    id: 'mvc-admin-01',
    category: 'mvc',
    title: 'MVC Admin Panel',
    description: 'An MVC admin panel with role-based access, CRUD scaffolding, data tables, and audit trails.',
    image: '',
    tags: ['Admin', 'CRUD', 'RBAC']
  },
  {
    id: 'mvc-ecommerce-01',
    category: 'mvc',
    title: 'MVC E-commerce Site',
    description: 'An e-commerce storefront with product catalog, shopping cart, checkout flow, and order management on ASP.NET MVC.',
    image: '',
    tags: ['E-commerce', 'Cart', 'Checkout']
  },
  {
    id: 'mvc-blog-01',
    category: 'mvc',
    title: 'MVC Blog Engine',
    description: 'A lightweight blog engine with markdown support, comments, categories, and SEO-friendly URLs using ASP.NET MVC.',
    image: '',
    tags: ['Blog', 'Markdown', 'SEO']
  },

  /* ========== Desktop Applications ========== */
  {
    id: 'wpf-app-01',
    category: 'desktop',
    title: 'WPF Desktop Application',
    description: 'A WPF desktop application with MVVM architecture, XAML styling, dependency injection, and theme resources.',
    image: '',
    tags: ['WPF', 'MVVM', 'XAML']
  },
  {
    id: 'wpf-data-grid-01',
    category: 'desktop',
    title: 'WPF Data Grid Suite',
    description: 'A WPF data grid suite with sorting, filtering, grouping, virtualization, and custom cell templates for large datasets.',
    image: '',
    tags: ['DataGrid', 'Virtualization', 'Sorting']
  },
  {
    id: 'winforms-app-01',
    category: 'desktop',
    title: 'WinForms Business App',
    description: 'A WinForms business application with ribbon menus, docking panels, reporting, and database connectivity.',
    image: '',
    tags: ['WinForms', 'Ribbon', 'Reporting']
  },
  {
    id: 'winforms-tool-01',
    category: 'desktop',
    title: 'WinForms Utility Tool',
    description: 'A WinForms utility tool with system tray integration, file watching, automation scripts, and logging.',
    image: '',
    tags: ['Utility', 'Tray', 'Automation']
  },

  /* ========== OTHER ========== */
  {
    id: 'dotnet-devops-01',
    category: 'other',
    title: '.NET DevOps Pipeline',
    description: 'A complete DevOps pipeline for .NET with GitHub Actions, unit tests, SonarQube analysis, and Azure deployment.',
    image: '',
    tags: ['DevOps', 'CI/CD', 'Azure']
  },
  {
    id: 'dotnet-testing-01',
    category: 'other',
    title: '.NET Testing Framework',
    description: 'A testing framework setup with xUnit, FluentAssertions, test containers, and integration test patterns for .NET.',
    image: '',
    tags: ['xUnit', 'Testing', 'Integration']
  },
  {
    id: 'dotnet-docker-01',
    category: 'other',
    title: '.NET Docker Packaging',
    description: 'A Docker packaging guide and templates for .NET apps with multi-stage builds, Alpine images, and health probes.',
    image: '',
    tags: ['Docker', 'Alpine', 'Multi-stage']
  },
  {
    id: 'dotnet-migration-01',
    category: 'other',
    title: '.NET Upgrade Assistant',
    description: 'An upgrade assistant toolkit for migrating legacy .NET Framework apps to .NET 8 with compatibility analyzers and incremental migration paths.',
    image: '',
    tags: ['Migration', '.NET 8', 'Upgrade']
  }
];
