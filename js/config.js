/**
 * CENTRAL COLOR SYSTEM
 * Única fonte de verdade para todas as cores
 */
export const COLORS = {
  dark: {
    primary: "#0a0a0f",
    secondary: "#12121a",
    tertiary: "#1a1a24",
  },
  accent: {
    cyan: "#22d3ee",
    indigo: "#6366f1",
    purple: "#a855f7",
  },
};

/**
 * Injetar variáveis CSS automaticamente
 */
export function injectColorVariables() {
  const root = document.documentElement;
  
  // Variáveis simples (--bg-primary, etc)
  root.style.setProperty("--bg-primary", COLORS.dark.primary);
  root.style.setProperty("--bg-secondary", COLORS.dark.secondary);
  root.style.setProperty("--accent-primary", COLORS.accent.cyan);
  root.style.setProperty("--accent-secondary", COLORS.accent.indigo);
  
  // Variáveis por categoria
  Object.entries(COLORS).forEach(([category, values]) => {
    Object.entries(values).forEach(([key, value]) => {
      root.style.setProperty(`--color-${category}-${key}`, value);
    });
  });
}

/**
 * Configuração padrão (compatível com Canvaia)
 */
export const defaultConfig = {
  hero_title: "Glauckyon Rocha",
  hero_subtitle: "Desenvolvedor Full Stack",
  about_text:
    "Sou um desenvolvedor de 20 anos, estudante do 3º período de Ciência da Computação, com uma paixão genuína por tecnologia e resolução de problemas.",
  contact_email: "glauckyon@email.com",
  contact_phone: "(00) 00000-0000",
  background_color: COLORS.dark.primary,
  surface_color: COLORS.dark.secondary,
  text_color: "#e4e4e7",
  primary_action_color: COLORS.accent.cyan,
  secondary_action_color: COLORS.accent.indigo,
  font_family: "Space Grotesk",
  font_size: 16,
};
