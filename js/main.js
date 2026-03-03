/**
 * Portfolio - Main Entry Point
 * Inicializa todos os modules necessários
 */

import { injectColorVariables } from "./config.js";
import { initMenu, initSmoothScroll } from "./modules/menu.js";
import { initSkillBarAnimations } from "./modules/animations.js";
import { initElementSDK } from "./modules/sdk.js";

// Inicializar quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // Injetar cores como variáveis CSS
  injectColorVariables();
  
  // Inicializar módulos
  initMenu();
  initSmoothScroll();
  initSkillBarAnimations();
  initElementSDK();

  console.log("✓ Portfolio initialized successfully");
});
