import { experiences } from '@/data/portfolio'

const companyColors: Record<string, string> = {
  Stripe: 'text-purple-400',
  HashiCorp: 'text-terminal-amber',
  Shopify: 'text-green-400',
  Twilio: 'text-red-400',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-terminal-dim text-xs tracking-widest uppercase mb-2">
          // section 04
        </p>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-terminal-green">$</span>
          git log --oneline --career
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-terminal-border via-terminal-green/20 to-transparent" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-terminal-border hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const color = companyColors[exp.company] || 'text-terminal-green'
            return (
              <div key={exp.id} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 top-6 w-3 h-3 rounded-full border border-terminal-green bg-terminal-bg hidden sm:block"
                  style={{
                    boxShadow: i === 0 ? '0 0 8px rgba(0,255,65,0.6)' : undefined,
                    backgroundColor: i === 0 ? 'rgba(0,255,65,0.2)' : undefined,
                  }}
                />

                <div className="terminal-window hover-glow transition-all duration-200">
                  {/* Card header */}
                  <div className="terminal-window-header">
                    <div className="w-2 h-2 rounded-full bg-red-500/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-terminal-dim">
                      {exp.id}.log
                    </span>
                    <span className="ml-auto text-xs text-terminal-dim">{exp.period}</span>
                  </div>

                  <div className="p-5">
                    {/* Role & company */}
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-4">
                      <h3 className="text-white font-semibold text-sm">{exp.title}</h3>
                      <span className="text-terminal-dim text-xs">@</span>
                      <span className={`font-bold text-sm ${color}`}>{exp.company}</span>
                      {i === 0 && (
                        <span className="text-xs px-1.5 py-0.5 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green rounded-sm ml-1">
                          current
                        </span>
                      )}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-xs text-gray-400 leading-relaxed">
                          <span className="text-terminal-green mt-0.5 shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
