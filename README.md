# 💙 Portfólio - Glauckyon Rocha

Um portfólio moderno, responsivo e **altamente modularizado** desenvolvido com **HTML5**, **Tailwind CSS** e **JavaScript ES6 Modular**.

---

## 📁 Estrutura do Projeto (v2.0 - Refatorado)

```
portifolio/
├── index.html              # Arquivo HTML principal com meta tags SEO
├── package.json            # Dependências e informações do projeto
├── .gitignore              # Arquivos ignorados pelo Git
├── README.md               # Documentação
│
├── css/                    # Estilos CSS organizados
│   ├── variables.css       # Variáveis CSS customizadas
│   ├── styles.css          # Estilos gerais e componentes
│   └── animations.css      # Animações e keyframes
│
├── js/                     # Scripts JavaScript modulares
│   ├── config.js           # Configurações padrão
│   ├── main.js             # Entry point - inicializa modules
│   ├── tailwind.config.js  # Configuração centralizada do Tailwind
│   ├── tailwind-init.js    # Loader aplica config após CDN
│   │
│   └── modules/            # Módulos separados por funcionalidade
│       ├── menu.js         # Menu mobile e navegação
│       ├── animations.js   # Animações de elementos
│       └── sdk.js          # Integração Element SDK (Canvaia)
│
└── assets/                 # Recursos adicionais
    └── (imagens, ícones, etc.)
```

---

## 🚀 Características

- ✅ **Design Responsivo** - Funciona em todos os dispositivos
- ✅ **Animações Suaves** - Transições elegantes e fluidas
- ✅ **Menu Mobile** - Navegação otimizada para celular
- ✅ **Tema Personalizável** - Variáveis CSS + Tailwind Config
- ✅ **Code Modular** - JavaScript em pequenos módulos ES6
- ✅ **SEO Otimizado** - Meta tags completas
- ✅ **Tailwind CSS** - Framework CSS moderno
- ✅ **Integração com Element SDK** - Painel de edição dinâmico (Canvaia)
- ✅ **Sem Cloudflare** - Testado para funcionar sem scripts adicionais

---

## 🎨 Seções

1. **Navegação** - Menu fixo com links para todas as seções
2. **Hero** - Apresentação principal com chamada para ação
3. **Sobre** - Informações pessoais e tecnologias
4. **Projetos** - Galeria de trabalhos e iniciativas
5. **Experiência** - Timeline com experiências profissionais
6. **Habilidades** - Barras de progresso para skills
7. **Formação** - Cursos e educação
8. **Contato** - Formulário e redes sociais
9. **Rodapé** - Informações finais

---

## 🎯 Como Usar

### Instalação

1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador moderno (o Tailwind é carregado via CDN, config é aplicado por `js/tailwind-init.js`)
3. **Sem dependências externas necessárias!**

### Desenvolvimento Local

```bash
# Python 3
python -m http.server 8000

# Caso contrário, abra index.html diretamente
```

---

## ⚙️ Arquitetura JavaScript

### Modular & Clean

```
index.html (Entry)
    ↓
main.js (Inicializa)
    ↓
modules/
├── menu.js ← Gerencia menu e navegação
├── animations.js ← Anima skill bars
└── sdk.js ← Integra Element SDK
```

### Como adicionar nova funcionalidade:

1. Criar arquivo em `js/modules/nova-funcao.js`
2. Exportar função principal
3. Importar em `js/main.js`
4. Chamar no `DOMContentLoaded`

---

## 🎨 Customização

### Cores (Centralizado)

Edite `js/config.js` e `js/tailwind.config.js`:

```javascript
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0a0a0f",    // Cor do fundo
          secondary: "#12121a",
        },
        accent: {
          cyan: "#22d3ee",       // Cor primária
          indigo: "#6366f1",
          purple: "#a855f7",
        },
      },
    },
  },
};
```

### Conteúdo

Edite `js/config.js`:

```javascript
export const defaultConfig = {
  hero_title: "Seu Nome",
  hero_subtitle: "Seu Título",
  contact_email: "seu@email.com",
  contact_phone: "(XX) XXXXX-XXXX",
  // ... mais configurações
};
```

### Meta Tags (SEO)

Edite no `<head>` do `index.html`:

```html
<meta name="description" content="Sua descrição" />
<meta name="keywords" content="suas,palavras,chave" />
<meta property="og:title" content="Seu Título" />
```

---

## 📜 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica com comentários
- **CSS3** - Estilos avançados com animações
- **JavaScript (ES6+)** - Módulos e lógica interativa
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Tipografia customizada (Space Grotesk, JetBrains Mono)
- **Element SDK** - Integração com Canvaia (opcional)

---

## 🔧 Módulos JavaScript

### `js/main.js`
Entry point que inicializa todos os módulos no `DOMContentLoaded`.

### `js/config.js`
Exporta configurações padrão do portfólio (títulos, emails, cores).

### `js/tailwind.config.js`
Configuração centralizada do Tailwind CSS com cores e fonts customizadas.

### `js/modules/menu.js`
- `initMenu()` - Toggle menu mobile
- `initSmoothScroll()` - Navegação suave

### `js/modules/animations.js`
- `initSkillBarAnimations()` - Anima barras de skill ao scroll

### `js/modules/sdk.js`
- `initElementSDK()` - Integra Element SDK com callbacks

---

## 📱 Responsividade

Totalmente responsivo com Tailwind CSS breakpoints:

- **Mobile** (`<640px`) - Layout de coluna única
- **Tablet** (`640px - 1024px`) - Layout intermediário
- **Desktop** (`>1024px`) - Layout completo com grid

---

## ♿ Acessibilidade

- ✅ Semântica HTML apropriada
- ✅ Cores com contraste adequado (WCAG AA)
- ✅ Labels e ARIA attributes
- ✅ Navegação por teclado totalmente funcional
- ✅ Meta tags para leitores de tela

---

## 🌐 Hospedagem

### Opções Recomendadas:

1. **GitHub Pages** (Gratuito)
   - Envie para `gh-pages` branch

2. **Vercel** (Gratuito)
   - Deploy automático com GitHub
   - Melhor performance

3. **Netlify** (Gratuito)
   - Drag and drop ou conectar repositório

4. **Servidor próprio**
   - Upload via FTP/SSH

---

## 📊 Performance

- ✅ Sem build complexo necessário
- ✅ CSS profundo e otimizado
- ✅ JavaScript lazy loading com modules
- ✅ Tailwind CDN com otimizações

---

## 🧪 Testado Sem Cloudflare

Este portfólio foi testado e funciona **100% sem scripts Cloudflare**. Se tiver problemas:

1. Verifique console do navegador (`F12`)
2. Certifique-se que `js/main.js` foi carregado
3. Verifique se meta tags estão presentes

---

## 📝 Licença

Projeto pessoal - Use livremente como base para seu portfólio!

---

## 👨‍💻 Autor

**Glauckyon Rocha**
- 📧 Email: glauckyonrocha20@gmail.com
- 🐙 GitHub: [github.com/Devglawkkj](https://github.com/Devglawkkj)
- 💼 LinkedIn: [linkedin.com/in/glauckyon-rocha-0b055b277](https://www.linkedin.com/in/glauckyon-rocha-0b055b277)
- 📸 Instagram: [instagram.com/glawkkj](https://www.instagram.com/glawkkj/)

---

## 🔄 Changelog

### v2.0 (Atual)
- ✨ Estrutura JavaScript completamente modularizada
- ✨ Meta tags SEO adicionadas
- ✨ Comentários estruturais no HTML
- ✨ Tailwind config centralizado
- ✨ Removido script Cloudflare (opcional)
- ✨ Adicionado package.json e .gitignore
- ✨ Documentação completa atualizada

### v1.0
- 🎉 Lançamento inicial

---

**Desenvolvido com 💙**
