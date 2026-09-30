// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Mirza Usama Ali Baig',
  shortName: 'Mirza U.',
  initials: 'MU',
  title: 'Senior Full-Stack Engineer',
  headline: 'Senior Full-Stack Engineer',
  focus: ['NestJS', 'Laravel', 'FastAPI', 'Next.js / React', 'Nuxt', 'AI Integrations'],
  location: 'Lahore, Pakistan',
  availability: 'Open to remote',
  email: 'mirza_usama_822@hotmail.com',
  github: 'https://github.com/mirzaghalib4726',
  githubHandle: 'mirzaghalib4726',
  linkedin: 'https://www.linkedin.com/in/mirzaghalib4726',
  linkedinHandle: 'mirzaghalib4726',
  resume: '/Mirza-Usama-Ali-Baig-CV.pdf',
  summary:
    'Senior full-stack engineer with 4 years of experience building and shipping production SaaS — executive-talent, logistics dispatch, workforce time-tracking, healthcare EHR integration and private-aviation platforms. I build backends in NestJS, Laravel and FastAPI behind React, Next.js and Nuxt frontends, with multi-tenant security, real-time systems, Stripe billing and AI document pipelines.',
  aboutLead:
    'I build production SaaS end to end — from schema design to CI/CD and deployment on AWS. My sweet spot is',
  aboutHighlight: 'NestJS, Laravel and FastAPI backends with AI-powered workflows',
  aboutTail:
    'behind modern React, Next.js and Nuxt frontends, secured for multi-tenant use.',
  aboutBody:
    'From YOLO computer-vision models served over FastAPI and Python scraping services to founding the backend of an executive-succession platform at Code Upscale, I turn complex business domains — logistics, healthcare, aviation, HR — into reliable, well-crafted software. BSc Computer Science graduate of the University of Central Punjab (CGPA 3.84), based in Lahore, Pakistan.',
}

export const stats = [
  { value: '4', label: 'Years experience', icon: 'timer' },
  { value: '10+', label: 'Platforms shipped', icon: 'rocket' },
  { value: '200+', label: 'PRs reviewed', icon: 'code' },
  { value: '5', label: 'Companies', icon: 'building' },
] as const

export const competencies = [
  {
    icon: 'server',
    title: 'Backend Engineering',
    body: 'Clean-architecture NestJS and Node.js services, Laravel 12 apps with Horizon queues and Reverb WebSockets, and Python FastAPI services — REST, GraphQL and Swagger-documented APIs across PostgreSQL, MySQL and MongoDB.',
  },
  {
    icon: 'layout',
    title: 'Modern Frontends',
    body: 'Responsive product interfaces with React, Next.js, Nuxt/Vue 3, TanStack Query, Redux Toolkit and Tailwind CSS — plus Electron desktop apps.',
  },
  {
    icon: 'bot',
    title: 'AI & Document Pipelines',
    body: 'OpenAI and LangChain workflows with OCR, MRZ parsing and PDF/DOCX extraction — turning inboxes and uploads into structured data.',
  },
  {
    icon: 'shield',
    title: 'Multi-Tenant Security & Billing',
    body: 'JWT auth, RBAC, MFA/2FA, privileged-access controls, IP allowlisting and audit logs, with Stripe subscriptions and webhook reconciliation.',
  },
  {
    icon: 'radio',
    title: 'Real-Time & Queues',
    body: 'Live dashboards and chat over Socket.IO, with Redis and BullMQ workers for imports, syncs and background processing.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    body: 'Docker-based deployments on AWS (S3, Amplify), Nginx and GitHub Actions CI/CD pipelines — including desktop release builds.',
  },
] as const

export const skillGroups = [
  {
    icon: 'server',
    title: 'Backend',
    items: ['NestJS', 'Node.js', 'Express', 'TypeScript', 'Laravel 12 (PHP)', 'Horizon', 'Reverb', 'Sanctum', 'Python', 'FastAPI', 'REST', 'GraphQL', 'Swagger / OpenAPI', 'PHPUnit', 'Jest'],
  },
  {
    icon: 'layout',
    title: 'Frontend',
    items: ['React', 'Next.js', 'Nuxt / Vue 3', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Electron'],
  },
  {
    icon: 'database',
    title: 'Data & Queues',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'TypeORM', 'Mongoose', 'Sequelize', 'Redis', 'BullMQ / Bull', 'SQLite'],
  },
  {
    icon: 'bot',
    title: 'AI & Automation',
    items: ['OpenAI', 'LangChain', 'Anthropic Claude', 'Tesseract OCR', 'PDF / DOCX extraction', 'Playwright', 'Puppeteer', 'YOLO', 'ResNet-50', 'FastAPI model serving'],
  },
  {
    icon: 'shield',
    title: 'Security & Payments',
    items: ['JWT', 'RBAC', 'MFA / 2FA', 'IP allowlisting', 'Passport.js', 'Stripe subscriptions', 'Stripe webhooks'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: ['AWS S3', 'AWS Amplify', 'Docker', 'GitHub Actions', 'Nginx', 'Socket.IO / WebSockets'],
  },
] as const

export type Experience = {
  role: string
  company: string
  location?: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'MERN Stack Developer',
    company: 'Code Upscale',
    location: 'Lahore, Pakistan',
    period: 'Jun 2025 – Present',
    points: [
      'Built and led the backends of production products including ExecSuccession (NestJS), On Time Transport (NestJS/PostgreSQL) and the Vitals 360 Kipu EHR sync, and reviewed and merged 200+ team pull requests across client repos.',
      'Worked across the Laravel 12 backend and Electron desktop agent of TrackFlow — time-tracking correctness, reports, attendance/HR rules, RBAC and the desktop release pipeline.',
      'Built secure multi-tenant platforms with JWT auth, RBAC, MFA/2FA, privileged-access controls and IP allowlisting.',
      'Delivered AI document pipelines using OpenAI, LangChain, OCR/Tesseract, MRZ parsing and PDF/DOCX extraction.',
      'Built Stripe subscription billing, S3 presigned-URL document flows and Socket.IO real-time dashboards backed by Redis/BullMQ, across MongoDB and PostgreSQL/MySQL stacks.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Aug AI',
    period: 'Oct 2024 – May 2025',
    points: [
      'Delivered scalable NestJS systems following clean architecture and strict TypeScript standards.',
      'Built Socket.IO real-time experiences and conversational AI workflows.',
      'Built secure middleware, auth guards and interceptors, Swagger API docs, and Docker-based deployments.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Conovo Technologies',
    period: 'Aug 2023 – Sep 2024',
    points: [
      'Built MERN/NestJS backends, REST and GraphQL APIs, and live Socket.IO features.',
      'Implemented authentication and authorization with Passport.js and JWT.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Cyberautix Technologies Limited',
    period: 'Feb 2023 – Aug 2023',
    points: [
      'Built YOLO computer-vision pipelines for real-time object detection.',
      'Served trained models through Python FastAPI inference APIs for integration with product backends.',
      'Prepared and augmented large image datasets, trained models and tuned hyperparameters for production stability.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Hi Tech Provider',
    period: 'Nov 2022 – Jul 2023',
    points: [
      'Built Python and JavaScript backend services, Puppeteer scraping workflows and secure Express.js APIs.',
      'Developed ResNet-50 image-classification and feature-extraction solutions.',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  category: 'AI Platforms' | 'Enterprise SaaS' | 'Health Tech' | 'Marketplaces' | 'Logistics' | 'Machine Learning'
  period: string
  role?: string
  description: string
  highlights: string[]
  stack: string[]
  links?: { label: string; href: string }[]
  hue: number
}

export const projects: Project[] = [
  {
    name: 'ExecSuccession / ExecExtend',
    tagline: 'AI executive succession & offer platform',
    category: 'AI Platforms',
    period: 'Jun 2025 – Present',
    role: 'Founding backend engineer',
    description:
      'A platform for HR leaders and boards to plan executive succession, run assessments and optimise offers — grown to roughly 45 NestJS modules.',
    highlights: [
      'Wrote the first commit and led the backend (about 67% of commits in its first 6 months).',
      'Built auth, candidate/S3 document, assessment-engine and succession-plan modules with 4 readiness tiers and 1–5 competency frameworks.',
      'Added OpenAI resume analysis (pdf-parse/mammoth) with AI-generated development areas and competency summaries.',
      'Implemented Stripe recurring subscriptions, multi-tenant RBAC with MFA/2FA and IP allowlisting, audit logs and board-ready PDF reports.',
    ],
    stack: ['NestJS', 'MongoDB', 'Next.js 15', 'OpenAI', 'Stripe', 'BullMQ', 'Redis', 'AWS S3', 'Puppeteer'],
    links: [
      { label: 'execsuccession.com', href: 'https://execsuccession.com' },
      { label: 'execextend.com', href: 'https://execextend.com' },
    ],
    hue: 222,
  },
  {
    name: 'TrackFlow',
    tagline: 'Workforce time-tracking & HR SaaS',
    category: 'Enterprise SaaS',
    period: 'Jul 2026 – Present',
    role: 'Laravel backend & Electron desktop agent',
    description:
      'A multi-tenant, Hubstaff-style platform: a Laravel 12 API, a Next.js dashboard and a cross-platform Electron desktop agent (macOS, Windows, Linux), plus a full HR/payroll suite.',
    highlights: [
      'Laravel backend: made worked-time totals consistent across dashboard, timer and every report, counted approved manual time, and stopped deleted entries being billed.',
      'Fixed session handling server-side — superseded sessions close at their last input, never at sync time — and anchored overnight shifts to the day they end.',
      'Added HR attendance-lateness visibility rules and re-seeded/validated the RBAC system roles; hardened PHPUnit tests against timezone flakes.',
      'Shipped the first local-first desktop client (v1.0.46): idle-detection and timer correctness, minimum-version enforcement, and Linux/Wayland screen capture over PipeWire.',
      'Built the desktop release CI in GitHub Actions — automatic production versioning on merge to main — and blocked deploys when an image build fails.',
    ],
    stack: ['Laravel 12', 'PHP', 'PostgreSQL', 'Redis / Horizon', 'Reverb WebSockets', 'Sanctum', 'PHPUnit', 'Next.js 16', 'Electron', 'SQLite', 'Stripe', 'GitHub Actions'],
    links: [{ label: 'trackflow.codeupscale.com', href: 'https://trackflow.codeupscale.com' }],
    hue: 262,
  },
  {
    name: 'On Time Transport',
    tagline: 'Trucking logistics & dispatch platform',
    category: 'Logistics',
    period: 'Jul 2026 – Present',
    role: 'Lead contributor, backend and web',
    description:
      'Dispatch and operations platform with separate portals for admin, ops, dispatch, billing and driver managers.',
    highlights: [
      'Top contributor on both backend and web app (about 55% and 74% of commits).',
      'Built 13 domain modules — loads, drivers, vehicles, plants, customers, chat, notifications, imports, roles — in a layered clean architecture.',
      'Built a drag-and-drop dispatch board with multi-trip load groups, open-to-claim loads and rolled-up partial-delivery status.',
      'Integrated the Samsara fleet-telematics API and a generic CSV import engine on BullMQ workers.',
      'Built truss delivery-schedule PDF parsing and import — one trip group per Job #, race-free duplicate checks, and a review screen with live validation.',
      'Rebuilt the admin dashboard on real load data, moved the UI onto a shared design-token system, and removed an injected malware loader from the toolchain.',
    ],
    stack: ['NestJS 11', 'PostgreSQL', 'TypeORM', 'Redis', 'BullMQ', 'Socket.IO', 'React 19', 'Vite', 'Tailwind v4', 'AWS S3'],
    hue: 32,
  },
  {
    name: 'ArchiTAXture / WeCloseBooks',
    tagline: 'Tax practice management SaaS',
    category: 'Enterprise SaaS',
    period: 'Jun 2026 – Present',
    role: 'Codebase audit, security & review',
    description:
      'A B2B platform for accounting firms organised into PODs — staff operations, engagements, entity ownership graphs, K-1s and tax returns, AI document classification and a magic-link client portal.',
    highlights: [
      'Audited the inherited codebase (~400 files, ~70 tables, 100+ endpoints) and wrote a phased hardening plan covering IDOR gaps, unsigned webhooks, missing RBAC guards and test coverage.',
      'Handled a security incident: found and removed malicious code injected into the staging frontend.',
      'Reviewed and merged feature work on the rebuilt WeCloseBooks stack — client tax profiles and dependents, role-permission counts, auth screens and client-detail editing.',
      'Worked on the NestJS 11 + TypeORM rebuild, which uses JWT in httpOnly cookies and deny-by-default RBAC + PBAC authorization.',
    ],
    stack: ['NestJS 11', 'TypeORM', 'PostgreSQL', 'Redis', 'Anthropic Claude', 'AWS S3', 'Next.js 15', 'Redux Toolkit / RTK Query', 'Tailwind CSS', 'Radix UI'],
    hue: 142,
  },
  {
    name: 'UrgentFlights',
    tagline: 'Private-aviation charter platform',
    category: 'AI Platforms',
    period: 'Nov 2025 – Jan 2026',
    description:
      'Charter platform where an AI email-to-quote pipeline turns operator emails into draft quotes automatically.',
    highlights: [
      'Owned the AI email-to-quote pipeline: IMAP fetch, multi-fallback PDF parsing and OCR, OpenAI field extraction, automatic draft quotes.',
      'Built an intelligent flight matcher with multi-criteria scoring, confidence ratings and date flexibility.',
      'Built the client portal — auth, flight requests, quote listing, passenger ledger — with RBAC and two-factor auth.',
    ],
    stack: ['Nuxt 3', 'Vue 3', 'MongoDB', 'OpenAI', 'Tesseract OCR', 'AWS S3', 'SendGrid', 'Twilio', 'Socket.IO'],
    links: [
      { label: 'app.urgentflights.com', href: 'https://app.urgentflights.com' },
      { label: 'urgentflights.com', href: 'https://urgentflights.com' },
    ],
    hue: 200,
  },
  {
    name: 'Vitals 360 — Kipu EHR Sync',
    tagline: 'Healthcare EHR integration service',
    category: 'Health Tech',
    period: 'Jul 2025 – Aug 2025',
    role: 'Sole author of the sync service',
    description:
      'A daemon that syncs patients from the Kipu EHR into the Vitals 360 monitoring platform for clinics.',
    highlights: [
      'Diff-based change detection and scheduled polling against the Kipu REST API.',
      'Room/occupancy mapping with Excel import, a sync-dashboard API, webhook ingestion and admin user management.',
    ],
    stack: ['NestJS 11', 'PostgreSQL', 'TypeORM', '@nestjs/schedule', 'Kipu REST API', 'Winston', 'ExcelJS'],
    links: [{ label: 'portal.vitals-360.com', href: 'https://portal.vitals-360.com' }],
    hue: 160,
  },
  {
    name: 'Smart Visa Assistant',
    tagline: 'Visa application automation',
    category: 'AI Platforms',
    period: 'Mar 2026 – Present',
    description:
      'Validates passports, parses forms and captures structured immigration data from documents — then submits applications automatically.',
    highlights: [
      'Passport validation, form parsing and structured data capture with OCR and OpenAI.',
      'Playwright automation submits government visa forms with OTP relay and reliable completion reporting.',
    ],
    stack: ['NestJS', 'TypeORM', 'MySQL', 'Redis / Bull', 'Playwright', 'Tesseract OCR', 'OpenAI', 'AWS S3'],
    hue: 290,
  },
  {
    name: 'Wrstopia',
    tagline: 'Luxury watch marketplace',
    category: 'Marketplaces',
    period: 'Jul 2025 – Aug 2025',
    role: 'Sole backend engineer',
    description:
      'A marketplace where consumers submit sell/service requests and dealers bid on them.',
    highlights: [
      'Per-role authentication for consumers, dealers and admins.',
      'Dealer bidding engine with a revenue dashboard, plus admin tooling.',
    ],
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Nodemailer'],
    hue: 45,
  },
  {
    name: 'SALM',
    tagline: 'High-volume transaction pipelines',
    category: 'Enterprise SaaS',
    period: '2023 – 2025',
    description:
      'Streaming and batch pipelines for high-volume transactional data, with Swagger-documented partner APIs and AI document analysis.',
    highlights: ['Streaming and batch processing pipelines.', 'Swagger partner APIs.', 'AI document analysis with OpenAI.'],
    stack: ['NestJS', 'PostgreSQL', 'OpenAI'],
    hue: 180,
  },
  {
    name: 'PUNT',
    tagline: 'Real-time betting platform',
    category: 'Marketplaces',
    period: '2023 – 2025',
    description:
      'Migrated a betting platform off Firebase, with live scores and odds over WebSockets and automated cron payouts.',
    highlights: ['Firebase → NestJS/MongoDB migration.', 'Live scores and odds over WebSockets.', 'Automated cron payouts.'],
    stack: ['NestJS', 'MongoDB', 'Socket.IO'],
    hue: 350,
  },
  {
    name: 'Alchemist',
    tagline: 'Property valuation & verification',
    category: 'Enterprise SaaS',
    period: '2023 – 2025',
    description:
      'Property-valuation, ID-verification and background-check integrations with PDF reports, invoices and real-time collaboration.',
    highlights: ['Third-party valuation, ID-verification and background-check integrations.', 'PDF reports and invoicing.', 'Real-time collaboration.'],
    stack: ['NestJS', 'MongoDB'],
    hue: 120,
  },
  {
    name: 'Diamond Classification',
    tagline: 'Computer vision · value grading',
    category: 'Machine Learning',
    period: 'Feb 2023 – Aug 2023',
    role: 'Machine Learning Engineer · Cyberautix',
    description:
      'A computer-vision system that detects, labels and classifies diamonds in images and video — separating high-value stones from low-value ones.',
    highlights: [
      'Built and labelled a diamond image/video dataset and trained deep-learning models to classify stones by value.',
      'Ran detection and labelling frame-by-frame on video as well as on still images.',
      'Served the models through a Python FastAPI backend for inference.',
    ],
    stack: ['Python', 'FastAPI', 'YOLO', 'Deep Learning', 'Computer Vision', 'Image & Video Labelling'],
    hue: 190,
  },
  {
    name: 'Furniture Marketplace',
    tagline: 'Final-year project · multi-vendor e-commerce',
    category: 'Marketplaces',
    period: 'BSc Final-Year Project',
    role: 'University of Central Punjab',
    description:
      'A multi-vendor e-commerce platform where furniture vendors list and sell furniture and related items, and customers browse and buy them.',
    highlights: [
      'Separate seller and customer accounts, each with its own login and dashboard.',
      'Seller tools to post, edit and manage furniture listings.',
      'Customer storefront to browse products, add to cart and place orders.',
      'Python FastAPI backend serving the marketplace API.',
    ],
    stack: ['Python', 'FastAPI', 'REST APIs', 'Authentication', 'E-commerce'],
    hue: 28,
  },
]

export const education = [
  {
    degree: 'BSc Computer Science',
    school: 'University of Central Punjab, Lahore',
    detail: 'CGPA 3.84',
    note: 'Final-year project: multi-vendor furniture e-commerce marketplace with seller and customer logins, built on a Python FastAPI backend.',
  },
  {
    degree: 'Intermediate in Computer Science',
    school: 'Government College University, Lahore',
  },
]

export const certifications = [
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp' },
  { name: 'Ruby on Rails Boot Camp', issuer: 'Devsinc' },
  { name: 'Artificial Intelligence', issuer: 'Samsung Innovation Campus' },
  { name: 'Python for Everybody & Python Data Structures', issuer: 'Coursera' },
]

export const languages = ['English (Fluent)', 'Urdu (Native)']
