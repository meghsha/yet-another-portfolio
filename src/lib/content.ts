export const site = {
  name: "Meghan Sharma",
  firstName: "Meghan",
  role: "Software Engineer",
  headline: "Software Engineer building scalable systems and products.",
  subhead:
    "Backend-focused full-stack engineer. I design APIs, data models, and auth flows — then ship the product surfaces that sit on top of them.",
  location: "Delhi NCR · Gurugram · Noida",
  email: "officialmeghan1@gmail.com",
  phone: "+91 9509234051",
  github: "https://github.com/meghsha",
  linkedin: "https://www.linkedin.com/in/meghan-sharma-42119176",
  resumePath: "/resume/Meghan-Sharma-Resume.pdf",
  available: true,
  availabilityLabel: "Available for opportunities",
  years: "4+",
  dsaCount: "600+",
} as const;

export const navItems = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#engineering", id: "engineering", label: "Engineering" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export const bento = {
  backend: {
    title: "Backend Engineering",
    emphasis: true,
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "JWT / OAuth",
      "API security",
    ],
  },
  databases: {
    title: "Databases",
    emphasis: true,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma", "Mongoose"],
  },
  system: {
    title: "System Design",
    emphasis: true,
    items: [
      "API architecture",
      "Caching",
      "Database design",
      "HLD / LLD",
      "AWS foundations",
    ],
  },
  frontend: {
    title: "Frontend",
    emphasis: false,
    items: ["React", "Next.js", "TypeScript", "Svelte", "Redux", "Tailwind CSS", "Material UI", "And Design"],
  },
  cloud: {
    title: "Cloud & DevOps",
    emphasis: false,
    items: ["AWS EC2 / S3 / CloudFront", "Docker", "CI/CD", "GitHub Actions"],
  },
  dsa: {
    title: "Problem Solving",
    emphasis: false,
    items: ["DSA", "Algorithms", "Data structures", "600+ problems solved"],
  },
} as const;

export const backendCapabilities = [
  {
    title: "API Engineering",
    items: [
      "REST APIs with Zod validation",
      "GraphQL APIs and Apollo Client",
      "Error handling and contract testing",
      "Pagination, filtering, and CRUD at scale",
    ],
    project: "GoKwik, CodeCorners",
  },
  {
    title: "Authentication & Security",
    items: [
      "JWT access and refresh tokens",
      "OAuth and Basic Auth integrations",
      "API key-based access",
      "Cookie-backed auth on the server",
    ],
    project: "GoKwik, Freelance, MelodyArc",
  },
  {
    title: "Data",
    items: [
      "SQL and NoSQL modeling",
      "Prisma schemas on MySQL",
      "MongoDB with Mongoose",
      "Redis caching for response time",
    ],
    project: "Checkout, Payments, CodeCorners",
  },
  {
    title: "Scalability & Delivery",
    items: [
      "Redis caching and API-call reduction",
      "AWS EC2 deployments",
      "GitHub Actions CI/CD",
      "Zero-downtime production fixes",
    ],
    project: "GoKwik",
  },
  {
    title: "Architecture",
    items: [
      "Modular NestJS / Express services",
      "Workflow orchestration for AI agents",
      "Clear API boundaries across enterprise systems",
      "Micro-frontend exposure on product surfaces",
    ],
    project: "MelodyArc, GoKwik",
  },
] as const;

export const systemDesignNodes = [
  {
    id: "user",
    label: "User",
    detail:
      "Shoppers, merchants, and support agents hitting product surfaces — checkout, payments, dashboards, and conversational workflows.",
  },
  {
    id: "edge",
    label: "CDN / Edge",
    detail:
      "Static assets and compressed resources sit closer to the user. Checkout work included static-resource compression and fewer round trips.",
    knowledge: true,
  },
  {
    id: "api",
    label: "API servers",
    detail:
      "NestJS and Express services exposing REST and GraphQL. Validation with Zod. Horizontal scale is a design concern; production work is service-oriented APIs on AWS EC2.",
  },
  {
    id: "cache",
    label: "Cache",
    detail:
      "Redis caching used in production to improve response time and reliability on checkout and payments paths.",
  },
  {
    id: "data",
    label: "Databases",
    detail:
      "MongoDB for document flows, MySQL/PostgreSQL for relational data, Prisma where schema discipline mattered.",
  },
  {
    id: "ext",
    label: "Integrations",
    detail:
      "Shopify, payment methods, OAuth/Basic Auth enterprise APIs, GraphQL services, and internal platforms.",
  },
] as const;

export const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Trees",
  "Graphs",
  "BFS / DFS",
  "Heaps",
  "Binary Search",
  "Sliding Window",
  "Two Pointers",
  "Recursion",
  "Backtracking",
  "Dynamic Programming",
] as const;

export const stackGroups = [
  {
    title: "Backend",
    prominence: "high" as const,
    items: ["Node.js", "Express.js", "NestJS", "REST", "GraphQL"],
  },
  {
    title: "Databases",
    prominence: "high" as const,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "Frontend",
    prominence: "medium" as const,
    items: ["React", "Next.js", "TypeScript", "Svelte", "Redux"],
  },
  {
    title: "Cloud / DevOps",
    prominence: "medium" as const,
    items: ["AWS EC2", "S3", "RDS", "Docker", "GitHub Actions"],
  },
  {
    title: "Engineering",
    prominence: "high" as const,
    items: ["System Design", "DSA", "LLD / HLD", "Auth", "Architecture"],
  },
] as const;

export const experience = [
  {
    company: "MelodyArc",
    aka: "ElbowCurve",
    role: "SDE-1",
    location: "Delhi · Remote",
    dates: "Dec 2025 — Present",
    summary:
      "Building API-driven conversational workflows that connect AI agents to real enterprise systems for post-order customer support.",
    points: [
      "Shipped 15+ conversational AI workflows that keep order context, fetch live data, and run multi-step journeys across returns, cancellations, refunds, and delivery tracking.",
      "Designed reusable Portal, Value, Invoke, and Code points that orchestrate agents and backend actions into end-to-end business flows.",
      "Integrated and tested 40+ enterprise APIs across REST, GraphQL, OAuth, Basic Auth, and internal platforms.",
      "Resolved 40+ production and integration blockers — auth failures, contract mismatches, workflow breakdowns — and wrote 10–15 technical docs and API guides.",
    ],
  },
  {
    company: "GoKwik",
    role: "SDE-1",
    location: "Gurugram",
    dates: "Aug 2023 — Dec 2025",
    summary:
      "Full-stack engineer on checkout, payments, and merchant onboarding for 300+ Shopify stores.",
    points: [
      "Designed REST APIs with Zod validation, GraphQL APIs, and Redis caching to improve response time and reliability.",
      "Implemented multi-level auth: JWT access/refresh tokens, OAuth, and API-key access.",
      "Automated checkout deployment that previously needed four frontend engineers — freeing ~70% of that bandwidth.",
      "Built merchant onboarding that ramps hundreds of merchants weekly, plus production work with zero-downtime incident response. Deployed on AWS EC2 with GitHub Actions.",
    ],
  },
  {
    company: "CodeCorners",
    role: "MERN Stack Developer",
    location: "Mohali",
    dates: "Jun 2023 — Jul 2023",
    summary:
      "Built an internal project-management tool from scratch for 100+ employees.",
    points: [
      "Designed 25+ Express APIs for comments, projects, tasks, and lists.",
      "Modeled the schema with Prisma on MySQL.",
      "Shipped a dashboard with GraphQL + Apollo Client and role-based CRUD.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    location: "Remote",
    dates: "Jun 2022 — Jun 2023",
    summary:
      "Delivered production full-stack apps for clients — auth, APIs, and product UI.",
    points: [
      "Auth APIs for signup, login, logout, and password reset using JWT and server-side cookies.",
      "Server-side logic and REST middleware in Node.js / Express.",
      "Next.js SSR for SEO-sensitive surfaces alongside React product UI.",
    ],
  },
] as const;

export const education = [
  {
    place: "Rajasthan Technical University, Kota",
    detail: "B.Tech, Electrical Engineering",
    dates: "Jul 2015 — Jul 2019",
  },
  {
    place: "upGrad",
    detail: "Programming Bootcamp, Full Stack Web Development (MERN)",
    dates: "Jun 2022 — Feb 2023",
  },
  {
    place: "Programming Pathshala",
    detail: "Bootcamp, DSA and Computer Science Fundamentals",
    dates: "Jun 2022 — Dec 2023",
  },
  {
    place: "Harvard University (CS50)",
    detail: "CS50’s Introduction to Computer Science",
    dates: "Jun 2022 — Sep 2022",
  },
] as const;

export const certifications = [
  {
    name: "JavaScript Algorithms and Data Structures",
    org: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/Meghanms/javascript-algorithms-and-data-structures",
  },
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/Meghanms/responsive-web-design",
  },
  {
    name: "AWS Solutions Architect Associate (course)",
    org: "Udemy",
    href: "https://www.udemy.com/certificate/UC-O6e2dc65-3f97-4e16-beab-79caf321dabf/",
  },
  {
    name: "Complete SQL Bootcamp",
    org: "Udemy",
    href: null,
  },
] as const;

export const quotes = [
  {
    name: "Rohit Saini",
    role: "Full Stack Developer",
    text: "No matter the field, he brings clarity, problem-solving skills, and a deep understanding that sets him apart.",
  },
  {
    name: "Mayank Sharma",
    role: "Product Analyst",
    text: "His technical expertise, problem-solving mindset, and adaptability set him apart. Meghan consistently delivers results.",
  },
] as const;

export type ArchNode = { id: string; label: string; hint: string };
export type ArchEdge = { from: string; to: string };

export type Project = {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  oneLiner: string;
  contribution: string;
  backend: string[];
  frontend: string[];
  challenges: string[];
  stack: string[];
  live?: string;
  github?: string;
  featured: boolean;
  company?: string;
  period?: string;
  architecture: { nodes: ArchNode[]; edges: ArchEdge[] };
  overview: string;
  problem: string;
  role: string;
  impact?: string[];
};

export const projects: Project[] = [
  {
    slug: "gokwik-checkout",
    name: "GoKwik Checkout",
    tier: 3,
    featured: false,
    company: "GoKwik",
    oneLiner:
      "End-to-end checkout: cart, shipping, addresses, discounts, and payments.",
    contribution:
      "Implemented NestJS APIs and database interactions, then tightened the client path with caching, lazy loading, memoization, fewer API calls, and compressed static assets.",
    backend: [
      "NestJS + Node.js APIs",
      "MongoDB / Mongoose and MySQL",
      "Shipping, address, discount, and payment integrations",
      "Caching to cut unnecessary round trips",
    ],
    frontend: [
      "Svelte checkout experience",
      "Lazy loading and memoization",
      "Static-resource compression",
    ],
    challenges: [
      "Conversion-sensitive performance on a hot checkout path",
      "Orchestrating cart, address, shipping, and gateway steps as one system",
    ],
    stack: ["NestJS", "Node.js", "MongoDB", "MySQL", "Svelte", "REST APIs"],
    architecture: {
      nodes: [
        { id: "buyer", label: "Shopper", hint: "Cart through pay" },
        { id: "ui", label: "Checkout (Svelte)", hint: "Lazy load + memoization" },
        { id: "api", label: "NestJS API layer", hint: "Cart, address, shipping, pay" },
        { id: "cache", label: "Cache", hint: "Fewer duplicate API calls" },
        { id: "db", label: "MongoDB / MySQL", hint: "Orders & catalog state" },
        { id: "ship", label: "Shipping & gateways", hint: "Rates, discounts, payments" },
      ],
      edges: [
        { from: "buyer", to: "ui" },
        { from: "ui", to: "api" },
        { from: "api", to: "cache" },
        { from: "api", to: "db" },
        { from: "api", to: "ship" },
      ],
    },
    overview:
      "A checkout system for e-commerce stores: review cart, choose shipping, edit addresses, apply discounts, and pay through integrated gateways.",
    problem:
      "Checkout was a conversion bottleneck. Extra API calls and heavy assets slowed the path to pay.",
    role: "Backend APIs and data access in NestJS, plus performance work on the Svelte checkout client.",
    impact: ["Up to 30% improvement in conversion on the checkout flow"],
  },
  {
    slug: "melodyarc-workflows",
    name: "MelodyArc Agent Workflows",
    tier: 3,
    featured: false,
    company: "MelodyArc",
    period: "Dec 2025 — Present",
    oneLiner:
      "Conversational AI workflows that call real enterprise APIs for post-order support.",
    contribution:
      "Designed orchestration points, integrated 40+ enterprise APIs, and refined agents so returns, cancellations, refunds, and tracking could run as reliable backend journeys — not chat scripts.",
    backend: [
      "REST and GraphQL enterprise integrations",
      "OAuth and Basic Auth against internal platforms",
      "Reusable Portal, Value, Invoke, and Code points",
      "Live order-context fetches from source systems",
    ],
    frontend: [
      "DSL forms and static screens on an in-house UI framework",
    ],
    challenges: [
      "Auth failures and API contract mismatches in production",
      "Keeping multi-agent workflows accurate across 15+ support journeys",
    ],
    stack: ["REST", "GraphQL", "OAuth", "Enterprise APIs", "Agent orchestration"],
    architecture: {
      nodes: [
        { id: "cx", label: "Customer", hint: "Returns, cancel, track, refund" },
        { id: "agent", label: "AI agents", hint: "Intent + order context" },
        { id: "points", label: "Portal / Value / Invoke / Code", hint: "Reusable orchestration" },
        { id: "apis", label: "Enterprise APIs", hint: "REST, GraphQL, OAuth, Basic Auth" },
        { id: "oms", label: "Order systems", hint: "Live post-order data" },
      ],
      edges: [
        { from: "cx", to: "agent" },
        { from: "agent", to: "points" },
        { from: "points", to: "apis" },
        { from: "apis", to: "oms" },
      ],
    },
    overview:
      "Agentic customer-support workflows that understand intent, keep order context, and execute multi-step backend actions across post-order use cases.",
    problem:
      "Support journeys spanned many enterprise systems with mixed auth and contracts. Manual handling did not scale; naive prompts were not enough.",
    role: "SDE-1 owning workflow design, API integration, agent refinement, production debugging, and technical documentation.",
    impact: [
      "15+ workflows in production",
      "40+ enterprise APIs integrated and tested",
      "40+ production issues resolved",
    ],
  },
  {
    slug: "white-it-wellness",
    name: "White It Wellness",
    tier: 2,
    featured: true,
    period: "May 2026 — Aug 2026",
    oneLiner:
      "Full-stack wellness product: rituals, journaling, and habit progress.",
    contribution:
      "Designed REST APIs and server-side business logic in Node.js / Express, with a Next.js and Tailwind client for application workflows and persistent data.",
    backend: [
      "Node.js + Express REST APIs",
      "Application workflows and data management",
      "Server-side business logic",
      "Persistent data handling",
    ],
    frontend: [
      "Next.js user-facing product",
      "Reusable components",
      "Responsive Tailwind UI",
    ],
    challenges: [
      "Modeling daily rituals, journal notes, and progress as durable application state",
      "Keeping the product calm without hiding the system underneath",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    live: "https://white-it-wellness.vercel.app/",
    architecture: {
      nodes: [
        { id: "user", label: "User", hint: "Rituals, journal, garden" },
        { id: "next", label: "Next.js", hint: "Product UI & workflows" },
        { id: "api", label: "Express APIs", hint: "REST application layer" },
        { id: "data", label: "Persistence", hint: "Notes, habits, progress" },
      ],
      edges: [
        { from: "user", to: "next" },
        { from: "next", to: "api" },
        { from: "api", to: "data" },
      ],
    },
    overview:
      "A wellness platform for scientifically grounded, actionable steps — daily rituals, a reflections journal, and visual habit progress.",
    problem:
      "People needed a structured product for anxiety and habit work, not a static brochure. That required APIs and persistence, not only screens.",
    role: "Personal full-stack build: backend APIs, business logic, and the Next.js client.",
  },
  {
    slug: "proshop",
    name: "E-Commerce Platform",
    tier: 2,
    featured: true,
    period: "Nov 2022 — Jan 2023",
    oneLiner:
      "MERN storefront with cart, reviews, addresses, orders, and PayPal.",
    contribution:
      "Built complete frontend and backend: catalog, cart, reviews, addresses, payments, and order workflows, with Redux Toolkit for client state.",
    backend: [
      "Node / Express backend",
      "Order and payment workflows including PayPal",
      "SQL/NoSQL data for catalog and users",
    ],
    frontend: [
      "React storefront",
      "Redux Toolkit state",
      "Category navigation, search, cart, checkout",
    ],
    challenges: [
      "End-to-end order flow from browse to paid order",
      "Keeping cart and catalog state consistent across the app",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "PayPal"],
    live: "https://e-comm-platform.onrender.com/",
    github: "https://github.com/meghsha/Proshop-E-Com-Platform",
    architecture: {
      nodes: [
        { id: "shopper", label: "Shopper", hint: "Browse, cart, pay" },
        { id: "react", label: "React + Redux", hint: "Storefront & checkout" },
        { id: "api", label: "Express APIs", hint: "Products, users, orders" },
        { id: "db", label: "MongoDB", hint: "Catalog and orders" },
        { id: "pay", label: "PayPal", hint: "Payment capture" },
      ],
      edges: [
        { from: "shopper", to: "react" },
        { from: "react", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "pay" },
      ],
    },
    overview:
      "An end-to-end e-commerce platform: browse by category, search, cart, reviews, addresses, payments, and orders.",
    problem:
      "Needed a complete commerce system — not a UI mock — with real backend order and payment behavior.",
    role: "Full-stack personal project covering APIs, data, payments, and the React client.",
  },
  {
    slug: "gokwik-payments",
    name: "GoKwik Payments",
    tier: 1,
    featured: true,
    company: "GoKwik",
    oneLiner:
      "Production payments application integrated with 300+ Shopify stores.",
    contribution:
      "Worked across payment workflows, API integrations, browser storage, and NestJS backend services so merchants could collect UPI, cards, EMI, wallets, and more without dropping the checkout thread.",
    backend: [
      "NestJS services for payment workflows",
      "REST APIs across payment methods",
      "MongoDB + MySQL persistence",
      "Redis for faster, more reliable responses",
    ],
    frontend: [
      "Svelte product surfaces",
      "Browser storage for payment state",
      "Modular, reusable payment UI",
    ],
    challenges: [
      "Keeping many payment methods (UPI, QR, cards, EMI, CredPay, wallets) on one reliable path",
      "Coordinating Shopify storefronts with backend payment services",
    ],
    stack: ["NestJS", "MongoDB", "MySQL", "Redis", "Svelte", "REST APIs"],
    architecture: {
      nodes: [
        { id: "store", label: "Shopify store", hint: "300+ merchant storefronts" },
        { id: "ui", label: "Payments UI", hint: "Svelte + browser storage" },
        { id: "api", label: "NestJS APIs", hint: "Payment workflows & REST" },
        { id: "cache", label: "Redis", hint: "Response-time caching" },
        { id: "db", label: "MongoDB / MySQL", hint: "Transactional & document data" },
        { id: "psp", label: "Payment methods", hint: "UPI, QR, cards, EMI, wallets" },
      ],
      edges: [
        { from: "store", to: "ui" },
        { from: "ui", to: "api" },
        { from: "api", to: "cache" },
        { from: "api", to: "db" },
        { from: "api", to: "psp" },
      ],
    },
    overview:
      "A payments layer used by hundreds of Shopify merchants. Shoppers complete UPI, QR, card, EMI, CredPay, and wallet flows without leaving the GoKwik checkout experience.",
    problem:
      "Merchants needed one reliable payments surface across many methods and stores, backed by services that could keep up with real checkout traffic.",
    role: "Full-stack engineering on the payments application — backend services, API integrations, and the Svelte client that merchants and shoppers actually use.",
    impact: [
      "Integrated with 300+ Shopify stores",
      "Lakhs of end users on the broader GoKwik commerce stack",
    ],
  },
  {
    slug: "codecorners-pm",
    name: "Internal Project Manager",
    tier: 2,
    featured: false,
    company: "CodeCorners",
    period: "Jun 2023 — Jul 2023",
    oneLiner:
      "From-scratch PM tool used by 100+ employees to track tasks and issues.",
    contribution:
      "Created the Express backend from scratch — 25+ APIs — and modeled MySQL with Prisma. Dashboard CRUD for users and roles over GraphQL.",
    backend: [
      "25+ REST APIs (comments, projects, tasks, lists)",
      "Prisma schema on MySQL",
      "GraphQL for dashboard data",
      "Role-based user CRUD",
    ],
    frontend: ["React dashboard", "Apollo Client", "TypeScript throughout"],
    challenges: [
      "Designing a schema that could represent projects, lists, tasks, and comments cleanly",
      "Serving both REST and GraphQL clients from one domain model",
    ],
    stack: ["Node.js", "Express", "Prisma", "MySQL", "GraphQL", "React", "TypeScript"],
    architecture: {
      nodes: [
        { id: "emp", label: "Employees", hint: "100+ internal users" },
        { id: "dash", label: "React dashboard", hint: "Apollo + TypeScript" },
        { id: "rest", label: "Express REST", hint: "25+ CRUD APIs" },
        { id: "gql", label: "GraphQL", hint: "Users & roles" },
        { id: "prisma", label: "Prisma", hint: "Typed schema" },
        { id: "mysql", label: "MySQL", hint: "Relational source of truth" },
      ],
      edges: [
        { from: "emp", to: "dash" },
        { from: "dash", to: "rest" },
        { from: "dash", to: "gql" },
        { from: "rest", to: "prisma" },
        { from: "gql", to: "prisma" },
        { from: "prisma", to: "mysql" },
      ],
    },
    overview:
      "In-house project management for tracking tasks and issues across the organization.",
    problem:
      "The team needed an internal system built from scratch — APIs, schema, and a dashboard — rather than bolting onto a spreadsheet.",
    role: "MERN engineer: backend APIs, Prisma/MySQL modeling, and GraphQL dashboard work.",
    impact: ["Used by 100+ employees"],
  },
  {
    slug: "promptopia",
    name: "Promptopia",
    tier: 3,
    featured: false,
    oneLiner: "Next.js + MongoDB CRUD for storing and reusing AI prompts.",
    contribution:
      "CRUD application in Next.js and MongoDB for saving generated prompts and retrieving them later.",
    backend: ["MongoDB persistence", "Prompt CRUD"],
    frontend: ["Next.js application UI"],
    challenges: ["Simple prompt lifecycle: create, persist, reuse"],
    stack: ["Next.js", "MongoDB"],
    github: "https://github.com/meghsha/Promptopia",
    architecture: {
      nodes: [
        { id: "u", label: "User", hint: "Author prompts" },
        { id: "n", label: "Next.js", hint: "CRUD app" },
        { id: "m", label: "MongoDB", hint: "Prompt store" },
      ],
      edges: [
        { from: "u", to: "n" },
        { from: "n", to: "m" },
      ],
    },
    overview: "CRUD app for storing and generating AI prompts for later use.",
    problem: "Prompts were ephemeral unless they lived in a real data store.",
    role: "Full-stack personal project.",
  },
  {
    slug: "twitter-clone",
    name: "Social (T3)",
    tier: 3,
    featured: false,
    oneLiner: "Social app on the T3 stack — Next.js, Prisma, TypeScript.",
    contribution:
      "Built a social product using Next.js, React, Tailwind, Prisma, and TypeScript.",
    backend: ["Prisma data layer", "TypeScript end-to-end"],
    frontend: ["Next.js + React + Tailwind"],
    challenges: ["Typed full-stack data flow with Prisma"],
    stack: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    github: "https://github.com/meghsha/twitter-clone",
    live: "https://twitter-clone-meghsha.vercel.app",
    architecture: {
      nodes: [
        { id: "u", label: "User", hint: "Feed & posts" },
        { id: "n", label: "Next.js", hint: "T3 app" },
        { id: "p", label: "Prisma", hint: "Typed schema" },
        { id: "db", label: "Database", hint: "Relational store" },
      ],
      edges: [
        { from: "u", to: "n" },
        { from: "n", to: "p" },
        { from: "p", to: "db" },
      ],
    },
    overview: "A social media app built with the T3 stack.",
    problem: "Practice shipping a typed full-stack product, not only a UI clone.",
    role: "Personal full-stack project.",
  },
  {
    slug: "auth-sample",
    name: "Auth System Sample",
    tier: 3,
    featured: false,
    oneLiner: "Boilerplate authentication system in Node.",
    contribution:
      "Sample authentication system used as a reference for signup/login patterns.",
    backend: ["Authentication flows", "Node.js boilerplate"],
    frontend: [],
    challenges: ["Reusable auth structure"],
    stack: ["Node.js", "Auth"],
    github: "https://github.com/meghsha/authSystemSample",
    architecture: {
      nodes: [
        { id: "c", label: "Client", hint: "Credentials" },
        { id: "a", label: "Auth service", hint: "Signup / login" },
        { id: "t", label: "Tokens", hint: "Session model" },
      ],
      edges: [
        { from: "c", to: "a" },
        { from: "a", to: "t" },
      ],
    },
    overview: "A sample authentication system for reuse as boilerplate.",
    problem: "Auth is easy to get subtly wrong; a clean reference helps.",
    role: "Personal backend reference project.",
  },
];

export const additionalWork = [
  {
    name: "Fitness+",
    stack: "React · RapidAPI · Material UI",
    href: "https://fitnesspluszone.netlify.app/",
    github: "https://github.com/meghsha/React-Fitness-App",
  },
  {
    name: "Cocktail Hunter",
    stack: "React · Context · CocktailDB",
    href: "https://cocktailhunter.netlify.app/",
    github: "https://github.com/meghsha/Cocktail-Hunter",
  },
  {
    name: "GraphQL CRUD",
    stack: "GraphQL",
    github: "https://github.com/meghsha/GraphQL-CRUD-Operations",
  },
  {
    name: "Prisma CRUD APIs",
    stack: "Node · Express · Prisma · MySQL",
    github: "https://github.com/meghsha/Node-Prisma-CRUD-API",
  },
  {
    name: "LMS / YouTube",
    stack: "React · RapidAPI",
    href: "https://customised-lms.netlify.app/",
    github: "https://github.com/meghsha/Youtube-Clone",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
export const compactProjects = projects.filter((p) => p.tier === 3);
