/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bnb: {
          100: "#f0f9ff", // Light sky blue
          200: "#e6f7ff", // Pale sky
          300: "#bae6fd", // Light blue
          400: "#7dd3fc", // Sky blue
          500: "#0ea5e9", // Bright blue
          600: "#0284c7", // Ocean blue
          700: "#0369a1", // Deep blue
          800: "#075985", // Dark blue
          900: "#0c4a6e", // Navy blue
        },
        natural: {
          100: "#f8fafc", // Off-white
          200: "#f1f5f9", // Light gray
          300: "#e2e8f0", // Pale gray
          400: "#cbd5e1", // Silver
          500: "#94a3b8", // Medium gray
          600: "#64748b", // Slate
          700: "#475569", // Dark gray
          800: "#1e293b", // Charcoal
          900: "#0f172a", // Almost black
        },
        terracotta: {
          100: "#fee2e2", // Pale pink
          200: "#fecaca", // Light pink
          300: "#fca5a5", // Pink
          400: "#f87171", // Coral
          500: "#ef4444", // Red
          600: "#dc2626", // Bright red
          700: "#b91c1c", // Dark red
          800: "#991b1b", // Brick red
          900: "#7f1d1d", // Dark brick
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "slide-in": "slide-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 