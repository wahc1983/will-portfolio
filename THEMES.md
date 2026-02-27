# Guía de Personalización de Temas

Este documento explica cómo personalizar los temas claro y oscuro del portfolio.

## Variables CSS de Tema

El sistema de temas utiliza variables CSS que se definen en `src/index.css` y `src/App.css`. Estas variables cambian automáticamente cuando se alterna entre temas.

### Variables Principales

```css
/* Colores primarios */
--primary-color: Color principal del sitio
--primary-hover: Color principal en hover
--secondary-color: Color secundario

/* Fondos */
--background-color: Fondo principal
--background-alt: Fondo alternativo (secciones pares)
--card-bg: Fondo de tarjetas y componentes

/* Textos */
--text-color: Color de texto principal
--text-secondary: Color de texto secundario
--text-muted: Color de texto atenuado

/* Bordes y sombras */
--border-color: Color de bordes
--border-hover: Color de bordes en hover
--shadow: Sombra principal
--shadow-hover: Sombra en hover

/* Componentes específicos */
--header-bg: Fondo del header
--footer-bg: Fondo del footer
--footer-text: Texto del footer
```

## Personalizar Colores

### Tema Claro
Para personalizar el tema claro, modifica las variables en `:root.light-theme`:

```css
:root.light-theme {
  --primary-color: #your-color;
  --primary-hover: #your-hover-color;
  /* ... más variables */
}
```

### Tema Oscuro
Para personalizar el tema oscuro, modifica las variables en `:root.dark-theme`:

```css
:root.dark-theme {
  --primary-color: #your-dark-color;
  --primary-hover: #your-dark-hover-color;
  /* ... más variables */
}
```

## Ejemplos de Esquemas de Color

### Esquema Azul (Actual)
```css
/* Claro */
--primary-color: #007bff;
--primary-hover: #0056b3;

/* Oscuro */
--primary-color: #4dabf7;
--primary-hover: #339af0;
```

### Esquema Verde
```css
/* Claro */
--primary-color: #28a745;
--primary-hover: #1e7e34;

/* Oscuro */
--primary-color: #51cf66;
--primary-hover: #40c057;
```

### Esquema Púrpura
```css
/* Claro */
--primary-color: #6f42c1;
--primary-hover: #5a32a3;

/* Oscuro */
--primary-color: #9775fa;
--primary-hover: #845ef7;
```

### Esquema Naranja
```css
/* Claro */
--primary-color: #fd7e14;
--primary-hover: #e8590c;

/* Oscuro */
--primary-color: #ff922b;
--primary-hover: #fd7e14;
```

## Agregar Nuevos Temas

Para agregar un tema completamente nuevo (ej: tema sepia):

1. **Crear nuevas variables CSS:**
```css
:root.sepia-theme {
  --primary-color: #8b4513;
  --primary-hover: #654321;
  --background-color: #f5f5dc;
  --background-alt: #f0e68c;
  --text-color: #2f1b14;
  /* ... más variables */
}
```

2. **Actualizar el ThemeContext:**
```jsx
// En src/contexts/ThemeContext.jsx
const [theme, setTheme] = useState('light') // 'light', 'dark', 'sepia'

const applyTheme = (themeName) => {
  document.documentElement.className = `${themeName}-theme`
}
```

3. **Actualizar el ThemeToggle:**
```jsx
// En src/components/ThemeToggle.jsx
// Cambiar de botón toggle a selector dropdown para múltiples temas
```

## Transiciones y Animaciones

Todas las transiciones de tema están configuradas con:
```css
transition: background-color 0.3s ease, color 0.3s ease;
```

Para cambiar la velocidad de transición, modifica el valor `0.3s` en los archivos CSS.

## Detección Automática de Tema

El tema se detecta automáticamente usando:
```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches
```

Para deshabilitar la detección automática, modifica el `ThemeContext.jsx`:
```jsx
const [isDarkMode, setIsDarkMode] = useState(false) // Siempre empezar en claro
```

## Persistencia

El tema seleccionado se guarda en `localStorage` con la clave `'theme'`. Para cambiar esto:
```jsx
localStorage.setItem('your-custom-key', theme)
```

## Consejos de Accesibilidad

- Mantén un contraste mínimo de 4.5:1 entre texto y fondo
- Usa herramientas como WebAIM Contrast Checker
- Prueba ambos temas con lectores de pantalla
- Asegúrate de que los colores no sean la única forma de transmitir información

## Herramientas Útiles

- [Coolors.co](https://coolors.co/) - Generador de paletas
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design Color Tool](https://material.io/resources/color/)
- [Adobe Color](https://color.adobe.com/)

## Solución de Problemas

### El tema no cambia
- Verifica que las variables CSS estén definidas correctamente
- Asegúrate de que la clase del tema se aplique al `document.documentElement`
- Revisa la consola del navegador por errores

### Colores inconsistentes
- Verifica que todos los componentes usen variables CSS en lugar de colores hardcodeados
- Asegúrate de que las variables estén definidas en ambos temas

### Transiciones bruscas
- Agrega `transition` a los elementos que cambian de color
- Verifica que las transiciones no estén siendo sobrescritas por otros estilos