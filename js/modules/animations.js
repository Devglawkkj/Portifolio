/**
 * Animations Module
 * Gerencia animações de skill bars e elementos
 */

export function initSkillBarAnimations() {
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0%";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll("#skills .card-glow").forEach((card) => {
    observer.observe(card);
  });
}
