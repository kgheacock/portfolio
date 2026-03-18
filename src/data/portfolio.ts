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
    id: 'safetyhub',
    name: 'SafetyHub — Law Enforcement Portal',
    description:
      'Public-facing portal enabling law enforcement agencies to submit legal disclosure requests to PayPal. Built most of the UI and the edge server layer. Handles government-grade security requirements.',
    tags: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/kgheacock',
    demo: 'https://www.paypal.com/safetyhub',
  },
  {
    id: 'urp-platform',
    name: 'URP Platform — Back-Office Intake Portal',
    description:
      'Tech-led a universal intake portal that scaled adoption from 3 teams to 30+ back-office teams across PayPal. Primary focus on UI architecture and cross-team integrations.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    github: 'https://github.com/kgheacock',
  },
  {
    id: 'ai-account-review',
    name: 'AI Account Review Agent',
    description:
      'Co-designed and delivered an AI agent that provides intelligent review recommendations for new account workflows in PayPal\'s admin portal. Reduced manual review overhead.',
    tags: ['React', 'AI/ML integrations', 'Node.js'],
    github: 'https://github.com/kgheacock',
  },
  {
    id: 'sar-ncmec',
    name: 'SAR & NCMEC Compliance Automation',
    description:
      'Led UI development for automating Suspicious Activity Report (SAR) generation and NCMEC child exploitation disclosure workflows. High-stakes regulatory compliance tooling.',
    tags: ['React', 'TypeScript', 'compliance API integrations'],
    github: 'https://github.com/kgheacock',
  },
  {
    id: 'scm-migration',
    name: 'SCM Cloud Migration',
    description:
      'Contributed to migrating PayPal\'s internal Simplified Case Management ticketing system from on-premises infrastructure to Google Cloud Platform.',
    tags: ['Google Cloud Platform', 'Node.js', 'migration tooling'],
    github: 'https://github.com/kgheacock',
  },
]

export const experiences: Experience[] = [
  {
    id: 'paypal',
    title: 'Senior Software Engineer',
    company: 'PayPal',
    period: '2020 – Present',
    startYear: 2020,
    endYear: null,
    bullets: [
      'Tech lead on URP Platform — intake portal that scaled from 3 teams to 30+ back-office teams.',
      'Built SafetyHub (paypal.com/safetyhub) — law enforcement portal for government/legal disclosure requests; owned most of the UI and edge server layer.',
      'Built Admin Tool for account/disclosure moderation: drill-down by email domain, IP address, submission status.',
      'Co-designed and delivered an AI agent providing review recommendations for new accounts in the admin portal.',
      'UI lead for SAR (Suspicious Activity Report) automation.',
      'Lead UI engineer for NCMEC disclosure generation and traditional SAR disclosures in child exploitation cases.',
      'Led PayPal\'s internal SCM (Simplified Case Management) migration from on-prem to Google Cloud.',
    ],
  },
  {
    id: 'v5-systems',
    title: 'Software Engineering Intern',
    company: 'V5 Systems',
    period: '2019',
    startYear: 2019,
    endYear: 2019,
    bullets: [
      'Internship at IoT/security tech company.',
    ],
  },
  {
    id: 'workspan',
    title: 'Software Engineering Intern',
    company: 'WorkSpan',
    period: '2018 – 2019',
    startYear: 2018,
    endYear: 2019,
    bullets: [
      'Internship at SaaS startup focused on partner ecosystem management.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Cloud/Infra',
    skills: ['Google Cloud Platform', 'nginx', 'CI/CD'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Other',
    skills: ['AI/ML integrations', 'compliance tooling', 'law enforcement systems'],
  },
]

export const contactInfo = {
  email: '',
  github: 'https://github.com/kgheacock',
  linkedin: 'https://linkedin.com/in/keithheacock',
}

export const bio = {
  name: 'Keith Heacock',
  location: 'San Jose, CA',
  openToWork: false,
  summary:
    'Full stack software engineer with 5+ years at PayPal building law enforcement portals, compliance tools, and internal platforms at scale. Strong end-to-end delivery track record — from individual contributor to tech lead growing a platform from 3 teams to 30+. Experience with AI agents, cloud migration, and high-stakes regulatory systems (SAR, NCMEC). B.S. Computer Science, UC Santa Cruz, 2020.',
}
