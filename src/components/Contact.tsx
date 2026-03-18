'use client'
import { contactInfo } from '@/data/portfolio'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-terminal-dim text-xs tracking-widest uppercase mb-2">
          // section 05
        </p>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-terminal-green">$</span>
          ./contact.sh
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-terminal-border via-terminal-green/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: message */}
        <div className="terminal-window hover-glow transition-all duration-200">
          <div className="terminal-window-header">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-terminal-dim">message.txt</span>
          </div>
          <div className="p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Senior software engineer with 5+ years building compliance tools, law enforcement
              portals, and internal platforms at PayPal.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Whether you have a project in mind, want to talk about compliance systems, AI tooling,
              or just want to connect — feel free to reach out via GitHub or LinkedIn.
            </p>
            <div className="border border-terminal-border rounded-sm p-4 bg-terminal-bg/50">
              <p className="text-terminal-dim text-xs mb-1">// response time</p>
              <p className="text-terminal-green text-sm">Usually within 24–48 hours</p>
            </div>
          </div>
        </div>

        {/* Right: contact links */}
        <div className="space-y-4">
          {/* GitHub */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block terminal-window hover-glow transition-all duration-200 group"
          >
            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="text-terminal-dim group-hover:text-terminal-green transition-colors">
                  <GitHubIcon />
                </span>
                <div>
                  <p className="text-terminal-dim text-xs mb-0.5">github</p>
                  <p className="text-gray-300 text-sm group-hover:text-terminal-green transition-colors">
                    github.com/kgheacock
                  </p>
                </div>
                <span className="ml-auto text-terminal-dim group-hover:text-terminal-green transition-colors text-xs">
                  →
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block terminal-window hover-glow transition-all duration-200 group"
          >
            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="text-terminal-dim text-xs mb-0.5">linkedin</p>
                  <p className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/keithheacock
                  </p>
                </div>
                <span className="ml-auto text-terminal-dim group-hover:text-blue-400 transition-colors text-xs">
                  →
                </span>
              </div>
            </div>
          </a>

          {/* ASCII decoration */}
          <div className="border border-terminal-border rounded-sm p-3 bg-terminal-surface">
            <pre className="text-terminal-green/25 text-xs leading-tight select-none text-center">
{`// end of file
// github.com/kgheacock
// eof`}
            </pre>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-terminal-border text-center">
        <p className="text-terminal-dim text-xs">
          Built with{' '}
          <span className="text-terminal-green">Next.js 14</span> +{' '}
          <span className="text-terminal-green">TypeScript</span> +{' '}
          <span className="text-terminal-green">Tailwind CSS</span>
          {' '}—{' '}
          <a
            href="https://github.com/kgheacock"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terminal-green transition-colors"
          >
            view source
          </a>
        </p>
        <p className="text-terminal-dim/50 text-xs mt-2">
          <span className="text-terminal-green/50">github.com/kgheacock</span>
          <span className="text-terminal-dim/40">:</span>
          <span className="text-blue-400/50">~</span>
          <span className="text-terminal-dim/40">$ </span>
          <span className="text-terminal-dim/50">logout</span>
          <span className="animate-blink ml-1 text-terminal-green/40">█</span>
        </p>
      </div>
    </section>
  )
}
