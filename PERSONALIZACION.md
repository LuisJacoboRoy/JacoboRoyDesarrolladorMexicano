# Guía de Personalización - Portafolio de Luis Jacobo Santos Roy

## Cambios Rápidos

### 1. Actualizar Información Personal

**Archivo:** `src/pages/Index.jsx`  
**Líneas:** 30-50

Modifica el arreglo `experiences` con tu información laboral:

```jsx
const experiences = [
  {
    company: 'Tu Empresa',
    position: 'Tu Puesto',
    period: 'Fecha Inicio — Fecha Fin',
    description: 'Descripción del rol',
    achievements: [
      'Logro 1',
      'Logro 2',
      'Logro 3'
    ]
  },
  // Más experiencias...
];
```

### 2. Agregar Proyectos

**Archivo:** `src/pages/Index.jsx`  
**Líneas:** 55-85

Modifica el arreglo `projects`:

```jsx
const projects = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto',
    image: '/projects/imagen.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://demo-proyecto.com',
    sourceLink: 'https://github.com/usuario/proyecto'
  },
  // Más proyectos...
];
```

### 3. Actualizar Página About

**Archivo:** `src/pages/About.jsx`

Modifica:
- Educación (línea ~35)
- Competencias técnicas (línea ~15)
- Información de ubicación (línea ~280)

### 4. Cambiar Email de Contacto

**Buscar y Reemplazar:**
```
jacobo@example.com → tu-email@example.com
```

En archivos:
- `src/components/Header.jsx`
- `src/pages/Index.jsx`
- `src/pages/About.jsx`
- `index.html`

---

## Cambios de Diseño

### 5. Modificar Colores

**Archivo:** `src/styles/global.css`  
**Líneas:** 3-13

Actualiza las variables CSS:

```css
:root {
  --primary-color: #0f172a;         /* Color de fondo principal */
  --secondary-color: #1e293b;       /* Color de fondo secundario */
  --accent-color: #3b82f6;          /* Color destacado (botones, links) */
  --accent-hover: #2563eb;          /* Color hover del acento */
  --text-primary: #f1f5f9;          /* Color de texto principal */
  --text-secondary: #cbd5e1;        /* Color de texto secundario */
  --text-muted: #94a3b8;            /* Color de texto apagado */
  --border-color: #334155;          /* Color de bordes */
  --bg-card: #1e293b;               /* Color de fondo de tarjetas */
}
```

### 6. Cambiar Font

**Archivo:** `src/styles/global.css`  
**Línea:** 18

```css
body {
  font-family: 'Tu Fuente', sans-serif;
}
```

### 7. Ajustar Espacios/Padding

Busca `padding` y `margin` en los archivos de estilos para ajustar espacios.

---

## Configuración Técnica

### 8. Configurar para Tu Dominio

**Archivo:** `vite.config.js`

Si usas un dominio personalizado:

```javascript
export default defineConfig({
  base: '/',  // Cambiar si no es en raíz
  // ... resto de config
});
```

### 9. Agregar Google Analytics

**Archivo:** `index.html`  
**Antes de `</head>`**

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 10. Actualizar Metadatos

**Archivo:** `index.html`

```html
<meta name="description" content="Tu descripción aquí" />
<meta property="og:title" content="Tu Título" />
<meta property="og:description" content="Tu descripción" />
```

---

## Imágenes

### 11. Agregar Imágenes de Proyecto

1. Guarda las imágenes en `public/projects/`
2. Referencia en `projects` array:
   ```javascript
   image: '/projects/tu-imagen.jpg'
   ```

### 12. Cambiar Imagen de Perfil

Si agregas una imagen de perfil:
1. Coloca en `public/profile.jpg`
2. Actualiza `index.html`:
   ```html
   "image": "https://tu-dominio.com/profile.jpg"
   ```

---

## Compilación y Deploy

### 13. Compilar Localmente

```bash
npm run build
npm run preview
```

### 14. Verificar Antes de Push

```bash
npm run lint
```

### 15. Deploy Automático

Una vez que hagas push a `main`:

```bash
git add .
git commit -m "Mensaje descriptivo"
git push origin main
```

El GitHub Action se ejecutará automáticamente.

---

## Estructura de Rutas

**Páginas Disponibles:**
- `/` - Página principal (Index)
- `/about` - Página acerca de (About)

Para agregar más páginas:
1. Crea nuevo archivo en `src/pages/`
2. Importa en `src/App.jsx`
3. Agrega ruta en `<Routes>`
4. Actualiza navegación en `Header.jsx`

---

## Componentes Reutilizables

### ExperienceCard
```jsx
<ExperienceCard
  company="Empresa"
  position="Puesto"
  period="Inicio — Fin"
  description="Descripción"
  achievements={['Logro 1', 'Logro 2']}
/>
```

### ProjectCard
```jsx
<ProjectCard
  title="Título"
  description="Descripción"
  image="/ruta-imagen.jpg"
  tags={['React', 'Node.js']}
  link="https://demo.com"
  sourceLink="https://github.com"
/>
```

---

## Troubleshooting

### Problema: Los estilos no se cargan
**Solución:** Ejecuta `npm run build` nuevamente

### Problema: El sitio se ve roto después de deploy
**Solución:** Verifica que `vite.config.js` tenga `base: '/'` correcto

### Problema: Los enlaces no funcionan
**Solución:** Revisa que `<BrowserRouter>` esté en `main.jsx`

---

## Checklist Antes de Deploy

- [ ] Reemplazaste todos los `jacobo@example.com` por tu email
- [ ] Actualizaste la información de experiencia
- [ ] Agregaste tus proyectos
- [ ] Cambiaste URLs de redes sociales
- [ ] Verificaste estilos localmente (`npm run dev`)
- [ ] Corriste linting (`npm run lint`)
- [ ] Compilaste sin errores (`npm run build`)
- [ ] Revisaste `README.md` con tu info
- [ ] Configuraste GitHub Pages en Settings

---

## Soporte

Para más información sobre:
- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **React Router:** https://reactrouter.com
- **GitHub Pages:** https://pages.github.com

---

**¡Tu portafolio está listo para personalizar!** 🚀
