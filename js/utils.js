/**
 * Utility Functions
 * Helpers para operações comuns
 */

/**
 * Gerar array de recolorables para SDK de forma automática
 * Evita repetição boilerplate
 */
export function generateRecolorables(config, defaultConfig) {
  const colorMap = [
    { key: "background_color", label: "Cor de Fundo" },
    { key: "surface_color", label: "Cor de Superfície" },
    { key: "text_color", label: "Cor de Texto" },
    { key: "primary_action_color", label: "Cor Primária" },
    { key: "secondary_action_color", label: "Cor Secundária" },
  ];

  return colorMap.map(({ key }) => ({
    get: () => config[key] || defaultConfig[key],
    set: (value) => window.elementSdk.setConfig({ [key]: value }),
  }));
}

/**
 * Scroll suave respeitando preferência do usuário
 */
export function scrollToElement(target) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

/**
 * Atualizar elemento de forma segura
 */
export function updateElement(id, content, isHTML = false) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id "${id}" not found`);
    return;
  }

  if (isHTML) {
    element.innerHTML = content;
  } else {
    element.textContent = content;
  }
}

/**
 * Log com prefix para debug
 */
export function debugLog(message, data = null) {
  if (process.env.NODE_ENV === "development" || typeof DEBUG !== "undefined") {
    console.log(`[Portfolio] ${message}`, data || "");
  }
}

/**
 * Safe DOM Query
 */
export function safeQuery(selector) {
  try {
    return document.querySelector(selector);
  } catch (e) {
    console.error(`Invalid selector: ${selector}`);
    return null;
  }
}

/**
 * Safe QueryAll
 */
export function safeQueryAll(selector) {
  try {
    return Array.from(document.querySelectorAll(selector));
  } catch (e) {
    console.error(`Invalid selector: ${selector}`);
    return [];
  }
}
