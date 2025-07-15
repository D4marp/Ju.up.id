import { addIconSelectors } from "@iconify/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--juup-green)", // Tambahkan definisi primary
        // Ju.Up Brand Colors
        'juup': {
          'orange': '#FF6B35',
          'yellow': '#F7931E',
          'green': '#8BC34A',
          'purple': '#9C27B0',
          'dark-green': '#2E7D32',
          'cream': '#F5F5DC',
          'light-cream': '#FFF8E1'
        }
      },
    },
  },
  plugins: [
    addIconSelectors(["mingcute","hugeicons","ion"]),
  ],
} satisfies Config;
