# Will Portfolio

Sitio web portfolio moderno y responsivo construido con React y Vite. Muestra experiencia profesional, habilidades y proyectos, con soporte completo de internacionalización (español, inglés y francés).

## Características

- **Diseño responsivo**: Escritorio, tablet y móvil
- **Interfaz moderna**: Paleta inspirada en el design system de NgRx (morado/rosa)
- **Modo oscuro/claro**: Toggle con persistencia en `localStorage` y detección de preferencia del sistema
- **Internacionalización**: Español (por defecto), inglés y francés
- **Navegación interactiva**: Scroll suave y menú móvil
- **Secciones incluidas**:
  - Hero con ilustración, CTAs y enlaces sociales
  - Acerca de mí con estadísticas
  - Línea de tiempo de experiencia con ilustraciones
  - Habilidades en grid de tarjetas con iconos
  - Showcase de proyectos destacados
  - Contacto con ilustración, datos y CTA
  - Selector de idioma y tema

## Idiomas soportados

- 🇪🇸 **Español** (idioma por defecto)
- 🇺🇸 **Inglés**
- 🇫🇷 **Francés**

El sitio detecta automáticamente el idioma del navegador y permite cambiar entre idiomas usando el selector en el header.

## Temas soportados

- 🌙 **Modo oscuro** (variables CSS por defecto en `:root`)
- 🌞 **Modo claro**

Si no hay preferencia guardada, se usa `prefers-color-scheme` del sistema. El toggle del header guarda la elección en `localStorage`.

### Paleta de colores (NgRx)

| Token      | Oscuro    | Claro     |
| ---------- | --------- | --------- |
| Primary    | `#fface6` | `#a91794` |
| Secondary  | `#a91794` | `#cf8fc5` |
| Background | `#17111a` | `#f5f3f4` |

Ver `src/index.css` y `THEMES.md` para personalizar variables CSS.

## Comenzando

### Prerrequisitos

- Node.js 18 o superior
- npm

### Instalación

1. Navega al directorio del proyecto:

   ```bash
   cd will-portfolio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Scripts disponibles

| Comando           | Descripción                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Servidor de desarrollo Vite             |
| `npm run build`   | Build de producción                     |
| `npm run lint`    | ESLint                                  |
| `npm run preview` | Build + preview local con Wrangler      |
| `npm run deploy`  | Build + despliegue a Cloudflare Workers |

## Personalización

### Información personal

1. **Traducciones** (`src/i18n/locales/`): `es.json`, `en.json`, `fr.json`
2. **Datos estáticos** (`src/data/`): skills, projects y experience (metadatos + imágenes)
3. **Contacto** (`src/constants/contact.js`): email y ubicación
4. **Hero**: textos en i18n; ilustración en `src/assets/illustrations/hero-william.webp`
5. **About**: descripción y estadísticas en los JSON de i18n
6. **Experience / Skills / Projects**: textos en i18n + datos en `src/data/`

### Ilustraciones

Las imágenes optimizadas (WebP) viven en `src/assets/illustrations/`:

| Archivo                                                    | Uso                     |
| ---------------------------------------------------------- | ----------------------- |
| `hero-william.webp`                                        | Sección Hero            |
| `experience-*.webp`                                        | Timeline de experiencia |
| `contact-william-light.webp` / `contact-william-dark.webp` | Contacto (según tema)   |

### Agregar nuevos idiomas

1. Crea `src/i18n/locales/<codigo>.json` copiando la estructura de `es.json`
2. Regístralo en `src/i18n/index.js` dentro de `resources`
3. Añade la entrada en `src/i18n/config.js` (`AVAILABLE_LANGUAGES`)

### Estilos

- CSS por componente en `src/components/`
- Variables globales en `src/index.css` y `src/App.css`
- Guía de temas en `THEMES.md`
- Layout escritorio: sidebar fijo a la derecha + contenido principal a la izquierda

## Construir para producción

```bash
npm run build
```

Los artefactos quedan en `dist/`.

## Despliegue (Cloudflare Workers)

El proyecto está configurado para **Cloudflare Workers** con assets estáticos:

```bash
npm run deploy
```

Requiere [Wrangler](https://developers.cloudflare.com/workers/wrangler/) autenticado (`wrangler login`). La configuración está en `wrangler.jsonc`.

Cabeceras de seguridad (CSP, HSTS, etc.) en `public/_headers`.

## Tecnologías

- React 19
- Vite 8 + Rolldown
- react-i18next
- Context API + hook `useTheme`
- CSS3 (variables, Flexbox/Grid)
- Cloudflare Workers (`@cloudflare/vite-plugin`, Wrangler)
- Google Fonts (Oxanium, Roboto, Space Mono)

## Estructura del proyecto

```
src/
├── assets/
│   └── illustrations/       # Ilustraciones WebP (Hero, Experience, Contact)
├── constants/
│   └── contact.js           # Email y ubicación
├── data/
│   ├── experience.js        # Metadatos + imágenes del timeline
│   ├── projects.js          # Tecnologías, URLs y gradientes
│   └── skills.js            # Listado de habilidades
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Hero, About, Experience, Skills, Projects, Contact
│   └── ui/                  # ThemeToggle, LanguageSelector, SocialLinks, SocialIcons
├── contexts/
│   ├── themeContext.js      # Contexto React del tema
│   └── ThemeProvider.jsx    # Provider del tema
├── hooks/
│   ├── useClickOutside.js   # Cerrar dropdowns al click externo
│   └── useTheme.js          # Hook de consumo del tema
├── i18n/
│   ├── config.js            # Idiomas disponibles y detección
│   ├── index.js
│   └── locales/             # es, en, fr
```

## Licencia

Código abierto bajo la [Licencia MIT](LICENSE).
