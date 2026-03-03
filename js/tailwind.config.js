/**
 * Tailwind CSS Configuration
 * Usando cores centralizadas de config.js
 */

import { COLORS } from "./config.js";

export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        dark: {
          primary: COLORS.dark.primary,
          secondary: COLORS.dark.secondary,
          tertiary: COLORS.dark.tertiary,
        },
        accent: {
          cyan: COLORS.accent.cyan,
          indigo: COLORS.accent.indigo,
          purple: COLORS.accent.purple,
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
