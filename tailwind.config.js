import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './research/**/*.html', './src/**/*.{svelte,js}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        crimson: 'hsl(var(--crimson))',
        charcoal: 'hsl(var(--charcoal))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Named steps for the sizes this site actually uses, so the markup stops
      // carrying arbitrary values like text-[15px] that drift apart over time.
      fontSize: {
        caption: ['0.8125rem', { lineHeight: '1.5' }], // 13px — meta, dates, tags
        'body-sm': ['0.875rem', { lineHeight: '1.6' }], // 14px — dense UI copy
        body: ['0.9375rem', { lineHeight: '1.65' }], // 15px — default body copy
        lead: ['1.0625rem', { lineHeight: '1.6' }] // 17px — standfirst paragraphs
      },
      letterSpacing: {
        display: '-0.02em'
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
      }
    }
  },
  plugins: [animate]
};
