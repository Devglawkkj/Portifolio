/**
 * SDK Module
 * Gerencia integração com Element SDK e Canvaia
 */

import { defaultConfig } from "../config.js";
import { generateRecolorables, updateElement } from "../utils.js";

export function initElementSDK() {
  if (!window.elementSdk) {
    console.warn("Element SDK not loaded");
    return;
  }

  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      updateHeroSection(config);
      updateAboutSection(config);
      updateContactSection(config);
      updateColors(config);
      updateFonts(config);
    },
    mapToCapabilities: (config) => ({
      recolorables: generateRecolorables(config, defaultConfig),
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => window.elementSdk.setConfig({ font_family: value }),
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => window.elementSdk.setConfig({ font_size: value }),
      },
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        [
          "hero_subtitle",
          config.hero_subtitle || defaultConfig.hero_subtitle,
        ],
        ["about_text", config.about_text || defaultConfig.about_text],
        [
          "contact_email",
          config.contact_email || defaultConfig.contact_email,
        ],
        [
          "contact_phone",
          config.contact_phone || defaultConfig.contact_phone,
        ],
      ]),
  });
}

function updateHeroSection(config) {
  updateElement(
    "hero-name",
    `<span class="gradient-text">${
      config.hero_title || defaultConfig.hero_title
    }</span>`,
    true
  );
  updateElement("hero-role", config.hero_subtitle || defaultConfig.hero_subtitle);
}

function updateAboutSection(config) {
  updateElement("about-description", config.about_text || defaultConfig.about_text);
}

function updateContactSection(config) {
  updateElement(
    "contact-email-display",
    config.contact_email || defaultConfig.contact_email
  );
  updateElement(
    "contact-phone-display",
    config.contact_phone || defaultConfig.contact_phone
  );
}

function updateColors(config) {
  const bgColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor =
    config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor =
    config.secondary_action_color || defaultConfig.secondary_action_color;

  document.documentElement.style.setProperty("--bg-primary", bgColor);
  document.documentElement.style.setProperty("--bg-secondary", surfaceColor);
  document.documentElement.style.setProperty("--text-primary", textColor);
  document.documentElement.style.setProperty("--accent-primary", primaryColor);
  document.documentElement.style.setProperty(
    "--accent-secondary",
    secondaryColor
  );
}

function updateFonts(config) {
  const fontFamily = config.font_family || defaultConfig.font_family;
  document.body.style.fontFamily = `${fontFamily}, sans-serif`;

  const fontSize = config.font_size || defaultConfig.font_size;
  document.documentElement.style.fontSize = `${fontSize}px`;
}
