import { bio } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-terminal-dim text-xs tracking-widest uppercase mb-2">
          // section 01
        </p>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-terminal-green">$</span>
          cat about.txt
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-terminal-border via-terminal-green/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Bio text */}
        <div className="lg:col-span-3">
          <div className="terminal-window hover-glow transition-all duration-200">
            <div className="terminal-window-header">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-terminal-dim">about.txt</span>
            </div>
            <div className="p-6">
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                {bio.summary}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                Over the past 5+ years at PayPal I&apos;ve worked across the full product lifecycle — from
                building law enforcement portals and compliance tooling to tech leading a platform that
                scaled from 3 to 30+ back-office teams. I care deeply about end-to-end delivery,
                system reliability, and high-stakes correctness.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                I&apos;ve also worked on AI agents, cloud migration, and regulatory systems (SAR, NCMEC)
                that demand both engineering rigor and a sharp eye for product impact.
              </p>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="lg:col-span-2 space-y-4">
          {/* System info block */}
          <div className="terminal-window hover-glow transition-all duration-200">
            <div className="terminal-window-header">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-terminal-dim">sysinfo</span>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-terminal-dim">name</span>
                <span className="text-gray-300">{bio.name}</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">location</span>
                <span className="text-gray-300">{bio.location}</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">experience</span>
                <span className="text-gray-300">5+ years</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">focus</span>
                <span className="text-gray-300">Full Stack / Compliance</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">education</span>
                <span className="text-gray-300">B.S. CS, UC Santa Cruz</span>
              </div>
            </div>
          </div>

          {/* ASCII art decoration */}
          <div className="border border-terminal-border rounded-sm p-4 bg-terminal-surface">
            <pre className="text-terminal-green/30 text-xs leading-tight select-none overflow-hidden">
{`┌─────────────────────┐
│  > 5yr exp          │
│  > law enforcement  │
│  > AI/ML agents     │
│  > cloud migration  │
└─────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
