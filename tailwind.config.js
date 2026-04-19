/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#000000",
        "on-background": "#ffffff",
        "surface": "#0a0a0a",
        "on-surface": "#f8f9fa",
        "surface-variant": "#1c1c1e",
        "on-surface-variant": "#a1a1aa",
        
        "surface-container-lowest": "#050505",
        "surface-container-low": "#0f0f13",
        "surface-container": "#18181b",
        "surface-container-high": "#27272a",
        "surface-container-highest": "#3f3f46",
        
        "primary": "#1E293B",
        "on-primary": "#ffffff",
        "primary-container": "#334155",
        "on-primary-container": "#f1f5f9",
        
        "secondary": "#511baf",
        "on-secondary": "#ffffff",
        "secondary-container": "#3b0764",
        "on-secondary-container": "#d8b4fe",
        
        "secondary-fixed-dim": "#c084fc",
        
        "tertiary": "#0EA5E9",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#0369a1",
        "on-tertiary-container": "#bae6fd",
        
        "outline": "#52525b",
        "outline-variant": "#3f3f46",
        
        "error": "#ef4444",
        "on-error": "#ffffff",
        "error-container": "#7f1d1d",
        "on-error-container": "#fca5a5"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
