'use client'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial gradient center glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24">
        {/* Terminal window */}
        <div className="terminal-window">
          {/* Window chrome */}
          <div className="terminal-window-header">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            <span className="ml-2 text-xs text-terminal-dim">
              keith@portfolio — bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 sm:p-10">
            {/* Prompt + greeting */}
            <div className="mb-2 text-sm text-terminal-dim">
              <span className="text-terminal-green">keith@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-300">whoami</span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-6xl font-bold text-white mb-3 tracking-tight"
              style={{ textShadow: '0 0 30px rgba(0,255,65,0.08)' }}
            >
              Keith Heacock
            </h1>

            {/* Typing animation line */}
            <div className="mb-6 text-sm text-terminal-dim">
              <span className="text-terminal-green">keith@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-300">echo $ROLE</span>
            </div>

            <div className="text-xl sm:text-2xl font-semibold mb-8 h-8">
              <TypingAnimation />
            </div>

            {/* Stats / quick info */}
            <div className="border-t border-terminal-border pt-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-terminal-dim block text-xs mb-1">// location</span>
                <span className="text-gray-300">📍 Austin, TX</span>
              </div>
              <div>
                <span className="text-terminal-dim block text-xs mb-1">// experience</span>
                <span className="text-gray-300">8+ years</span>
              </div>
              <div>
                <span className="text-terminal-dim block text-xs mb-1">// status</span>
                <span className="text-terminal-green">● Open to work</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-2.5 bg-terminal-green text-black font-bold text-sm hover:bg-green-400 transition-all duration-150 rounded-sm"
                style={{ boxShadow: '0 0 15px rgba(0,255,65,0.25)' }}
              >
                view_projects()
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-2.5 border border-terminal-border text-terminal-green text-sm hover:border-terminal-green hover:bg-terminal-green-glow transition-all duration-150 rounded-sm"
              >
                get_in_touch()
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleScrollDown}
            className="text-terminal-dim hover:text-terminal-green transition-colors text-xs flex flex-col items-center gap-2 group"
          >
            <span>scroll down</span>
            <span className="block animate-bounce text-lg group-hover:text-terminal-green">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}
