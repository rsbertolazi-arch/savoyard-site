# Savoyard — Site Institucional

Site institucional da Savoyard — Curadoria de Laticínios Extraordinários, Experiências e Cultura Gastronômica.

## Estrutura

```
savoyard-site/
├── index.html              # Home
├── css/
│   └── style.css           # Design system completo
├── js/
│   └── main.js             # Interações (menu, scroll, form)
├── images/                 # Imagens (placeholders incluídos)
└── pages/
    ├── a-savoyard.html     # A Savoyard (manifesto)
    ├── fernando-bertolazi.html  # Fundador & Curador
    ├── manteigas.html      # Manteigas de Origem
    ├── le-rituel.html      # Le Rituel du Beurre
    ├── experiencias.html   # Experiências & Eventos
    ├── reflexoes.html      # Reflexões à Mesa (blog)
    ├── imprensa.html       # Imprensa
    ├── parceiros.html      # Parceiros
    └── contato.html        # Contato
```

## Tecnologia

- HTML5 semântico
- CSS3 com Custom Properties (design tokens)
- JavaScript vanilla (sem dependências)
- Google Fonts: Cormorant Garamond + Montserrat
- Responsivo (mobile-first breakpoints)

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Savoyard | `#1a2744` | Backgrounds, headers, textos |
| Champagne Gold | `#c9a96e` | Destaques, CTAs, subtítulos |
| Off-white | `#f8f6f2` | Backgrounds claros, base |

## Como usar

1. Clone o repositório
2. Abra `index.html` no navegador (ou use um servidor local)
3. Substitua as imagens placeholder por fotos reais

### Servidor local (opcional)
```bash
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

## Imagens a substituir

Todas as imagens na pasta `images/` são placeholders coloridos. Substitua por:
- `hero-home.jpg` — Fotografia principal (manteiga, mesa, hospitalidade)
- `about-preview.jpg` — Imagem da seção "sobre" na home
- `manteiga-*.jpg` — Fotos de cada manteiga (200x200, circular)
- `fernando-portrait.jpg` — Retrato do fundador
- `logo-savoyard-white.png` — Logo branco da marca
- `og-image.jpg` — Imagem para compartilhamento em redes sociais

## SEO

- Meta tags OpenGraph configuradas
- Canonical URLs em todas as páginas
- Descrições únicas por página
- Estrutura semântica (header, nav, main, footer)
- URLs amigáveis

## Integrações preparadas

- **WhatsApp**: Link direto para wa.me
- **Instagram**: Link para perfil
- **Google Analytics**: Adicionar tag GA4 no `<head>` de cada página
- **Formulário**: Conectar a backend (PHP, Formspree, etc)

## Fases futuras

- Fase 2: Integração de vídeos, galerias avançadas, área de parceiros expandida
- Fase 3: E-commerce, Clube Savoyard, área exclusiva para membros
