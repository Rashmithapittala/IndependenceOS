/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          '95': 'color-mix(in srgb, var(--background) 95%, transparent)',
          '98': 'color-mix(in srgb, var(--background) 98%, transparent)',
          '99': 'color-mix(in srgb, var(--background) 99%, transparent)',
        },
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          '20': 'color-mix(in srgb, var(--secondary) 20%, transparent)',
          '30': 'color-mix(in srgb, var(--secondary) 30%, transparent)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          '15': 'color-mix(in srgb, var(--accent) 15%, transparent)',
          '20': 'color-mix(in srgb, var(--accent) 20%, transparent)',
          '30': 'color-mix(in srgb, var(--accent) 30%, transparent)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

