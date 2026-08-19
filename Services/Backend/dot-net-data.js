/* ==========================================================================
   VOLTIX — .NET Products Data

   Add, remove, or edit products here. Do NOT edit the card component.

   ========================================================================== */

const DOTNET_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'asp-net-core', name: 'ASP.NET Core' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'web-apis', name: 'Web APIs' },
  { id: 'csharp', name: 'C# Development' },
  { id: 'entity-framework', name: 'Entity Framework' },
  { id: 'authentication', name: 'Authentication & Authorization' },
  { id: 'database', name: 'Database Development' },
  { id: 'other', name: 'Other' }
];

const DOTNET_PRODUCTS = [

  /* ============================================================
     ASP.NET CORE
     ============================================================ */

  {
    id: 'aspnet-core-development-01',
    category: 'asp-net-core',
    title: 'ASP.NET Core Development',
    description:
      'Build modern, secure, and scalable web applications and backend services using ASP.NET Core and C#.',
    image:
      'https://www.infomazeelite.com/wp-content/uploads/2026/06/ASP-dot-NET-Core-Development-Services_Infomaze.jpg',
    tags: ['ASP.NET Core', 'C#', '.NET']
  },


  /* ============================================================
     WEB DEVELOPMENT
     ============================================================ */

  {
    id: 'dotnet-web-application-01',
    category: 'web-development',
    title: 'Web Application Development',
    description:
      'Develop scalable web applications with clean architecture, server-side business logic, database integration, and responsive user experiences.',
    image:
      'web.png',
    tags: ['Web App', 'ASP.NET Core', 'C#']
  },

  {
    id: 'dotnet-mvc-01',
    category: 'web-development',
    title: 'ASP.NET MVC Development',
    description:
      'Build structured web applications using the MVC architecture with controllers, models, views, validation, and maintainable application logic.',
    image:
      'dotnet.png',
    tags: ['MVC', 'ASP.NET', 'Web']
  },


  /* ============================================================
     WEB APIs
     ============================================================ */

  {
    id: 'dotnet-rest-api-01',
    category: 'web-apis',
    title: 'REST API Development',
    description:
      'Build reliable and secure REST APIs with structured endpoints, validation, authentication, error handling, and API documentation.',
    image:
      'restapi.png',
    tags: ['REST API', 'ASP.NET Core', 'Swagger']
  },

  {
    id: 'dotnet-api-integration-01',
    category: 'web-apis',
    title: 'API Integration',
    description:
      'Integrate .NET applications with third-party APIs and external services to exchange data and extend application functionality.',
    image:
      'apiint.png',
    tags: ['API', 'Integration', 'Services']
  },


  /* ============================================================
     C# DEVELOPMENT
     ============================================================ */

  {
    id: 'csharp-development-01',
    category: 'csharp',
    title: 'C# Development',
    description:
      'Develop reliable application logic and reusable components using C# with clean, maintainable, and scalable code.',
    image:
      'c.png',
    tags: ['C#', 'OOP', '.NET']
  },


  /* ============================================================
     ENTITY FRAMEWORK
     ============================================================ */

  {
    id: 'entity-framework-core-01',
    category: 'entity-framework',
    title: 'Entity Framework Core Integration',
    description:
      'Integrate Entity Framework Core for database access, migrations, relationships, queries, and efficient data management.',
    image:
      'entity.png',
    tags: ['EF Core', 'ORM', 'Database']
  },


  /* ============================================================
     AUTHENTICATION & AUTHORIZATION
     ============================================================ */

  {
    id: 'dotnet-authentication-01',
    category: 'authentication',
    title: 'Authentication & Authorization',
    description:
      'Implement secure authentication and authorization with JWT, role-based access, protected resources, and permission management.',
    image:
      'auth.png',
    tags: ['JWT', 'Authentication', 'Authorization']
  },


  /* ============================================================
     DATABASE DEVELOPMENT
     ============================================================ */

  {
    id: 'dotnet-database-development-01',
    category: 'database',
    title: 'Database Design & Development',
    description:
      'Design and develop structured databases for .NET applications with efficient relationships, queries, migrations, and data models.',
    image:
      'data.png',
    tags: ['SQL Server', 'Database', 'Data Modeling']
  },


  /* ============================================================
     OTHER
     ============================================================ */

  {
    id: 'dotnet-maintenance-01',
    category: 'other',
    title: '.NET Maintenance & Bug Fixing',
    description:
      'Maintain existing .NET applications, troubleshoot issues, fix bugs, improve performance, and keep applications reliable and up to date.',
    image:
      'bug.png',
    tags: ['Maintenance', 'Bug Fixing', '.NET']
  }

];