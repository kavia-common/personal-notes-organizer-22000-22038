import { type Config } from "tailwindcss";

/**
 * Tailwind configuration
 * Defines color palette based on the "Ocean Professional" design tokens
 */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // blue-600
        secondary: "#F59E0B", // amber-500
        success: "#F59E0B",
        error: "#EF4444",
        surface: "#ffffff",
        background: "#f9fafb",
        text: "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
