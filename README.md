# Will Portfolio

Sitio web portfolio moderno y responsivo construido con React y Vite. Muestra experiencia profesional, habilidades y proyectos, con soporte completo de internacionalización (español, inglés y francés).

## Características

- **Diseño responsivo**: Escritorio, tablet y móvil
- **Interfaz moderna**: Paleta inspirada en el design system de NgRx (morado/rosa)
- **Modo oscuro/claro**: Toggle con persistencia en `localStorage` y detección de preferencia del sistema
- **Internacionalización**: Español (por defecto), inglés y francés
- **Navegación interactiva**: Scroll suave y menú móvil
- **Secciones incluidas**:
  - Acerca de mí con estadísticas personales
  - Línea de tiempo de experiencia laboral
  - Habilidades con barras de progreso
  - Showcase de proyectos destacados
  - Contacto con enlaces sociales
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

| Token | Oscuro | Claro |
|-------|--------|-------|
| Primary | `#fface6` | `#a91794` |
| Secondary | `#a91794` | `#cf8fc5` |
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

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run preview` | Build + preview local con Wrangler |
| `npm run deploy` | Build + despliegue a Cloudflare Workers |

## Personalización

### Información personal

1. **Traducciones** (`src/i18n/locales/`): `es.json`, `en.json`, `fr.json`
2. **About**: descripción y estadísticas en los JSON de i18n
3. **Experience**: trabajos en `experience.jobs` dentro de cada locale
4. **Skills**: categorías y niveles en `Skills.jsx`
5. **Projects**: listado en `Projects.jsx` + textos en locales
6. **Contact**: email ofuscado y redes en `Contact.jsx`

### Agregar nuevos idiomas

1. Crea `src/i18n/locales/<codigo>.json` copiando la estructura de `es.json`
2. Regístralo en `src/i18n/index.js` dentro de `resources`
3. Añade la opción en `LanguageSelector.jsx`

### Estilos

- CSS por componente en `src/components/`
- Variables globales en `src/index.css` y `src/App.css`
- Guía de temas en `THEMES.md`

### Foto de perfil

1. Coloca la imagen en `src/assets/` (recomendado: WebP, máx. ~600px)
2. Impórtala en `src/components/About.jsx`

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
├── contexts/
│   ├── themeContext.js      # Contexto React del tema
│   └── ThemeProvider.jsx    # Provider del tema
├── hooks/
│   ├── useClickOutside.js   # Cerrar dropdowns al click externo
│   └── useTheme.js          # Hook de consumo del tema
├── i18n/
│   ├── index.js
│   ├── config.js
│   └── locales/             # es, en, fr
└── components/              # Header, About, Experience, Skills, Projects, Contact, Footer
```

## Licencia

Código abierto bajo la [Licencia MIT](LICENSE).
