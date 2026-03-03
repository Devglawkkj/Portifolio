// carrega configuração separada do Tailwind
import { tailwindConfig } from "./tailwind.config.js";

// aguarda o objeto tailwind estar disponível (CDN carregado)
if (typeof window !== "undefined") {
  const applyConfig = () => {
    if (window.tailwind) {
      window.tailwind.config = tailwindConfig;
    } else {
      // tenta novamente após pequeno delay
      setTimeout(applyConfig, 50);
    }
  };
  applyConfig();
}
