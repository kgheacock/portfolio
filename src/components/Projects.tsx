'use client'
import { useState, useMemo } from 'react'
import { projects } from '@/data/portfolio'

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

// Gather all unique tags from projects
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) {
        next.delete(tag)
      } else {
        next.add(tag)
      }
      return next
    })
  }

  const clearFilters = () => setSelectedTags(new Set())

  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects
    return projects.filter((p) => p.tags.some((t) => selectedTags.has(t)))
  }, [selectedTags])

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-terminal-dim text-xs tracking-widest uppercase mb-2">
          // section 02
        </p>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-terminal-green">$</span>
          ls -la ./projects/
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-terminal-border via-terminal-green/20 to-transparent" />
      </div>

      {/* Tag filter */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-terminal-dim text-xs">filter by:</span>
          {selectedTags.size > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-terminal-amber hover:text-yellow-300 transition-colors"
            >
              [clear]
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`tag-pill ${selectedTags.has(tag) ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-terminal-dim text-xs mb-6">
        {filteredProjects.length === projects.length
          ? `showing all ${projects.length} projects`
          : `showing ${filteredProjects.length} of ${projects.length} projects`}
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project, i) => (
          <div
            key={project.id}
            className="terminal-window hover-glow flex flex-col group transition-all duration-200"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Card header */}
            <div className="terminal-window-header">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-terminal-dim truncate">
                {project.id}.sh
              </span>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-terminal-green transition-colors">
                <span className="text-terminal-green mr-2 opacity-60">▶</span>
                {project.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`tag-pill text-xs cursor-default ${
                      selectedTags.has(tag) ? 'active' : ''
                    }`}
                    style={{ fontSize: '0.65rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-3 border-t border-terminal-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-terminal-dim hover:text-terminal-green transition-colors"
                >
                  <GitHubIcon />
                  <span>source</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-terminal-dim hover:text-terminal-amber transition-colors"
                  >
                    <ExternalLinkIcon />
                    <span>demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-terminal-dim">
          <p className="text-sm">// no projects match selected filters</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-xs text-terminal-green hover:underline"
          >
            clear filters
          </button>
        </div>
      )}
    </section>
  )
}
