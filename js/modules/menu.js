/**
 * Menu Module
 * Gerencia o menu mobile e navegação
 */

import { scrollToElement } from "../utils.js";

export function initMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!mobileMenuBtn || !mobileMenu) {
    console.warn("Menu elements not found");
    return;
  }

  // Toggle menu
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target) &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
}

/**
 * Smooth scroll para links de navegação
 * Respeita preferência prefers-reduced-motion
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        scrollToElement(target);
      }
    });
  });
}
