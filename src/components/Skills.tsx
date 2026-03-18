import { skillGroups } from '@/data/portfolio'

const categoryColors: Record<string, string> = {
  Languages: 'text-terminal-green',
  Frameworks: 'text-blue-400',
  Databases: 'text-purple-400',
  Tools: 'text-terminal-amber',
  Cloud: 'text-cyan-400',
  Testing: 'text-pink-400',
}

const categoryIcons: Record<string, string> = {
  Languages: '{ }',
  Frameworks: '</>',
  Databases: '[db]',
  Tools: '[~]',
  Cloud: '☁',
  Testing: '✓',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-terminal-dim text-xs tracking-widest uppercase mb-2">
          // section 03
        </p>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-terminal-green">$</span>
          cat skills.json
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-terminal-border via-terminal-green/20 to-transparent" />
      </div>

      {/* JSON-like wrapper */}
      <div className="terminal-window">
        <div className="terminal-window-header">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-terminal-dim">skills.json</span>
        </div>
        <div className="p-6">
          <div className="text-terminal-dim text-sm mb-4">{'{'}</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4">
            {skillGroups.map((group, i) => {
              const color = categoryColors[group.category] || 'text-terminal-green'
              const icon = categoryIcons[group.category] || '>'
              return (
                <div
                  key={group.category}
                  className="border border-terminal-border rounded-sm p-4 hover-glow transition-all duration-200 bg-terminal-bg/50"
                >
                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold ${color}`}>{icon}</span>
                    <span className="text-xs text-terminal-amber font-semibold">
                      &quot;{group.category}&quot;
                    </span>
                    <span className="text-terminal-dim text-xs">: [</span>
                  </div>

                  {/* Skills list */}
                  <div className="pl-3 space-y-1.5">
                    {group.skills.map((skill, j) => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="text-terminal-dim text-xs">
                          {j < group.skills.length - 1 ? '•' : '•'}
                        </span>
                        <span className="text-gray-300 text-xs">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-terminal-dim text-xs">
                    ]{i < skillGroups.length - 1 ? ',' : ''}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-terminal-dim text-sm mt-4">{'}'}</div>
        </div>
      </div>

      {/* ASCII divider */}
      <div className="mt-8 text-terminal-border text-xs text-center select-none">
        {'─'.repeat(60)}
      </div>
    </section>
  )
}
