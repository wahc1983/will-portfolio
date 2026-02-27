# Will Portfolio

Un sitio web portfolio moderno y responsivo construido con React y Vite para mostrar tu experiencia profesional, habilidades y proyectos. Incluye soporte completo para internacionalización (i18n) con español, inglés y francés.

## Características

- **Diseño Responsivo**: Funciona perfectamente en escritorio, tablet y dispositivos móviles
- **Interfaz Moderna**: Diseño limpio y profesional con animaciones suaves
- **Modo Oscuro/Claro**: Toggle completo entre tema claro y oscuro con persistencia
- **Internacionalización**: Soporte completo para español (por defecto), inglés y francés
- **Navegación Interactiva**: Navegación con desplazamiento suave y menú móvil
- **Secciones Incluidas**:
  - Acerca de Mí con estadísticas personales
  - Línea de tiempo de experiencia laboral
  - Habilidades con barras de progreso
  - Showcase de proyectos destacados
  - Formulario de contacto
  - Enlaces sociales
  - Selector de idioma y tema

## Idiomas Soportados

- 🇪🇸 **Español** (idioma por defecto)
- 🇺🇸 **Inglés**
- 🇫🇷 **Francés**

El sitio detecta automáticamente el idioma del navegador y permite cambiar entre idiomas usando el selector en el header.

## Temas Soportados

- 🌞 **Modo Claro** (por defecto)
- 🌙 **Modo Oscuro**

El sitio detecta automáticamente la preferencia de tema del sistema y permite alternar entre modos usando el botón toggle en el header. La preferencia se guarda en localStorage.

## Comenzando

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Navega al directorio del proyecto:
   ```bash
   cd will_portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador y visita `http://localhost:5173`

## Personalización

### Información Personal

Actualiza los siguientes archivos con tu información personal:

1. **Archivos de Traducción** (`src/i18n/locales/`):
   - `es.json`: Contenido en español
   - `en.json`: Contenido en inglés  
   - `fr.json`: Contenido en francés

2. **Sección About** - Actualiza en los archivos de traducción:
   - Tu descripción, estadísticas e información personal

3. **Sección Experience** - Reemplaza con tu experiencia laboral real:
   - Títulos de trabajo, empresas, fechas y descripciones

4. **Sección Skills** - Modifica según tu experiencia:
   - Categorías de habilidades y niveles de competencia
   - Agrega o quita tecnologías según tu expertise

5. **Sección Projects** - Reemplaza con tus proyectos reales:
   - Descripciones de proyectos, tecnologías y enlaces

6. **Sección Contact** - Actualiza tu información de contacto:
   - Email real, teléfono y enlaces de redes sociales

### Agregar Nuevos Idiomas

Para agregar un nuevo idioma:

1. Crea un nuevo archivo JSON en `src/i18n/locales/` (ej: `de.json` para alemán)
2. Copia la estructura de `es.json` y traduce el contenido
3. Agrega el idioma en `src/i18n/index.js` en el objeto `resources`
4. Actualiza el componente `LanguageSelector.jsx` para incluir el nuevo idioma

### Estilos

- Cada componente tiene su propio archivo CSS en el directorio `src/components/`
- Estilos globales están en `src/App.css` y `src/index.css`
- El esquema de colores se puede personalizar actualizando las propiedades CSS personalizadas

### Agregar tu Foto

Reemplaza el placeholder en la sección About:
1. Agrega tu foto al directorio `src/assets/`
2. Impórtala y úsala en `src/components/About.jsx`

## Construir para Producción

```bash
npm run build
```

Los archivos construidos estarán en el directorio `dist/`, listos para despliegue.

## Despliegue

Puedes desplegar este portfolio en varias plataformas:

- **Netlify**: Arrastra y suelta la carpeta `dist`
- **Vercel**: Conecta tu repositorio de GitHub
- **GitHub Pages**: Usa GitHub Actions para despliegue automático
- **Cualquier servicio de hosting estático**

## Tecnologías Utilizadas

- React 19
- Vite
- react-i18next (internacionalización)
- Context API (gestión de tema)
- CSS3 con Variables CSS y Flexbox/Grid
- JavaScript moderno (ES6+)
- Diseño responsivo
- Google Fonts (Inter)
- LocalStorage (persistencia de preferencias)

## Estructura de Internacionalización y Temas

```
src/
├── contexts/
│   └── ThemeContext.jsx     # Contexto para gestión de tema
├── i18n/
│   ├── index.js             # Configuración de i18next
│   └── locales/
│       ├── es.json          # Traducciones en español
│       ├── en.json          # Traducciones en inglés
│       └── fr.json          # Traducciones en francés
├── hooks/
│   └── useClickOutside.js   # Hook para cerrar dropdowns
└── components/
    ├── LanguageSelector.jsx # Selector de idioma
    └── ThemeToggle.jsx      # Toggle de tema oscuro/claro
```

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## Soporte

Si necesitas ayuda personalizando tu portfolio, no dudes en contactar o crear un issue en el repositorio.