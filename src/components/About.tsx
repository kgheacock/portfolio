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
                Over the past 8 years I&apos;ve worked across the full product lifecycle — from
                architecting distributed systems and designing APIs, to shipping polished
                front-end experiences. I care deeply about developer experience, type safety,
                and writing code that teams can maintain and evolve.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Outside of work I contribute to open source, write tooling for fun, and
                occasionally blog about TypeScript patterns and systems design.
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
                <span className="text-gray-300">8+ years</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">focus</span>
                <span className="text-gray-300">Full Stack / Systems</span>
              </div>
              <div className="h-px bg-terminal-border" />
              <div className="flex justify-between">
                <span className="text-terminal-dim">status</span>
                <span className="text-terminal-green flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full bg-terminal-green inline-block"
                    style={{ boxShadow: '0 0 6px rgba(0,255,65,0.8)' }}
                  />
                  open to work
                </span>
              </div>
            </div>
          </div>

          {/* ASCII art decoration */}
          <div className="border border-terminal-border rounded-sm p-4 bg-terminal-surface">
            <pre className="text-terminal-green/30 text-xs leading-tight select-none overflow-hidden">
{`┌─────────────────────┐
│  > 8yr exp          │
│  > distributed sys  │
│  > OSS contributor  │
│  > TypeScript nerd  │
└─────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
