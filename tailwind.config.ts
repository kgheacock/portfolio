import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00ff41',
        'terminal-amber': '#ffb000',
        'terminal-bg': '#0a0a0a',
        'terminal-surface': '#0d1117',
        'terminal-border': '#1a2a1a',
        'terminal-dim': '#4a5568',
        'terminal-green-dim': '#00cc33',
        'terminal-green-glow': 'rgba(0,255,65,0.15)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,65,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0,255,65,0.6)' },
        },
      },
      boxShadow: {
        'terminal-green': '0 0 10px rgba(0,255,65,0.3), 0 0 20px rgba(0,255,65,0.1)',
        'terminal-amber': '0 0 10px rgba(255,176,0,0.3), 0 0 20px rgba(255,176,0,0.1)',
      },
    },
  },
  plugins: [],
}
export default config
