export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  github: string
  demo?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  startYear: number
  endYear: number | null
  bullets: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export const projects: Project[] = [
  {
    id: 'nexus-gateway',
    name: 'Nexus API Gateway',
    description:
      'High-performance API gateway with rate limiting, auth middleware, and request routing. Built for microservices architectures handling 100k+ req/s.',
    tags: ['Go', 'Redis', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/kheacock/nexus-gateway',
  },
  {
    id: 'ts-di',
    name: 'TypeScript DI Container',
    description:
      'Lightweight dependency injection framework for TypeScript with decorator-based configuration and full type inference. Zero runtime overhead.',
    tags: ['TypeScript', 'Node.js'],
    github: 'https://github.com/kheacock/ts-di',
  },
  {
    id: 'devflow',
    name: 'DevFlow Dashboard',
    description:
      'Real-time engineering metrics dashboard tracking deploys, incidents, and team velocity. WebSocket-powered live updates with historical trend analysis.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/kheacock/devflow',
    demo: 'https://devflow.heacock.dev',
  },
  {
    id: 'logpipe',
    name: 'Logpipe CLI',
    description:
      'Fast log streaming and filtering tool for distributed systems. Supports regex filters, JSON parsing, structured output, and color-coded severity levels.',
    tags: ['Go', 'CLI'],
    github: 'https://github.com/kheacock/logpipe',
  },
  {
    id: 'spectral-forms',
    name: 'Spectral Forms',
    description:
      'Type-safe, schema-driven form library for React with Zod validation and zero runtime overhead. Infers form types directly from your schema definitions.',
    tags: ['React', 'TypeScript', 'Zod'],
    github: 'https://github.com/kheacock/spectral-forms',
    demo: 'https://spectral-forms.dev',
  },
  {
    id: 'cloudsync',
    name: 'CloudSync',
    description:
      'CLI tool for syncing environment configs across cloud providers (AWS, GCP, Azure). Supports secret rotation, diff previews, and audit logging.',
    tags: ['Python', 'AWS', 'GCP', 'CLI'],
    github: 'https://github.com/kheacock/cloudsync',
  },
]

export const experiences: Experience[] = [
  {
    id: 'stripe',
    title: 'Senior Software Engineer',
    company: 'Stripe',
    period: '2021 – Present',
    startYear: 2021,
    endYear: null,
    bullets: [
      'Led migration of monolith to microservices architecture, reducing p99 latency by 40% across critical payment flows.',
      'Built TypeScript SDK now used by 10k+ developers, with full type safety, tree-shaking, and automated API changelog generation.',
      'Designed and implemented distributed rate limiting system processing 2M+ API calls/minute using Redis cluster.',
      'Mentored 4 engineers, led technical design reviews, and established team-wide coding standards for TypeScript projects.',
    ],
  },
  {
    id: 'hashicorp',
    title: 'Software Engineer',
    company: 'HashiCorp',
    period: '2018 – 2021',
    startYear: 2018,
    endYear: 2021,
    bullets: [
      'Core contributor to Terraform provider ecosystem, shipping 12+ provider integrations used by thousands of organizations.',
      'Built internal tooling for provider testing and docs generation, reducing provider release cycle from 2 weeks to 2 days.',
      'Implemented automated acceptance test framework across 30+ cloud providers using Go and Docker.',
      'Contributed to open-source Terraform core including HCL parsing improvements and state management fixes.',
    ],
  },
  {
    id: 'shopify',
    title: 'Full Stack Engineer',
    company: 'Shopify',
    period: '2016 – 2018',
    startYear: 2016,
    endYear: 2018,
    bullets: [
      'Built merchant analytics dashboards processing 1M+ events/day, delivering real-time sales and inventory insights.',
      'Led adoption of TypeScript across the merchant tooling team, migrating 80k lines of JavaScript over 6 months.',
      'Designed and shipped self-serve analytics query builder using React and a custom DSL for non-technical merchants.',
    ],
  },
  {
    id: 'twilio',
    title: 'Software Engineer',
    company: 'Twilio',
    period: '2014 – 2016',
    startYear: 2014,
    endYear: 2016,
    bullets: [
      'Developed REST APIs for messaging platform serving 50M+ messages/day across SMS, MMS, and WhatsApp channels.',
      'Built webhook reliability system with exponential backoff retry logic and dead letter queues, improving delivery rate to 99.97%.',
      'Implemented real-time message status tracking pipeline using Kafka and PostgreSQL with sub-second latency.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Fastify', 'tRPC'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Webpack', 'Vite', 'pnpm'],
  },
  {
    category: 'Cloud',
    skills: ['AWS (EC2, S3, Lambda, RDS)', 'GCP', 'Cloudflare', 'Vercel', 'Nginx'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Vitest', 'Playwright', 'Cypress', 'Testing Library'],
  },
]

export const contactInfo = {
  email: 'keith@heacock.dev',
  github: 'https://github.com/kheacock',
  linkedin: 'https://linkedin.com/in/kheacock',
}

export const bio = {
  name: 'Keith Heacock',
  location: 'Austin, TX',
  openToWork: true,
  summary:
    'Senior full-stack engineer with 8+ years experience building scalable web applications and distributed systems. Passionate about TypeScript, developer tooling, and open source.',
}
