# Mejores Prácticas - Desarrollo del Portafolio

## 1. Estructura de Componentes

### Anatomía de un Componente

```jsx
// 1. Imports
import React from 'react';
import PropTypes from 'prop-types'; // (Opcional)
import '../styles/componente.css';

// 2. Componente Funcional
function MiComponente({ prop1, prop2 }) {
  // 3. Estado y efectos (si aplica)
  // const [state, setState] = useState(null);

  // 4. Lógica
  const handleClick = () => {
    // Lógica aquí
  };

  // 5. Render
  return (
    <div className="container">
      <button onClick={handleClick}>{prop1}</button>
      <p>{prop2}</p>
    </div>
  );
}

// 6. PropTypes (Opcional)
// MiComponente.propTypes = {
//   prop1: PropTypes.string.isRequired,
//   prop2: PropTypes.string
// };

export default MiComponente;
```

### Convenciones de Nombres

- **Componentes:** `PascalCase` (MiComponente.jsx)
- **Funciones:** `camelCase` (miFunction)
- **Constantes:** `UPPER_CASE` (MI_CONSTANTE)
- **Archivos CSS:** `kebab-case` (mi-estilo.css)
- **Archivos JS:** `PascalCase` (MiArchivo.jsx)

---

## 2. Estilos CSS

### Organización

```css
/* 1. Variables (en global.css) */
:root {
  --color-primary: #0f172a;
}

/* 2. Selectores básicos */
.elemento {
  color: var(--color-primary);
}

/* 3. Estados (hover, focus, etc) */
.elemento:hover {
  opacity: 0.8;
}

/* 4. Media queries (al final) */
@media (max-width: 768px) {
  .elemento {
    font-size: 0.9rem;
  }
}
```

### Convenciones de Clases

- Usar `kebab-case`: `.mi-clase`
- Ser específico: `.experience-card-title`
- Evitar números iniciales: `.mi-clase-1` ❌
- Usar nombres descriptivos: `.btn-primary` ✅ vs `.btn-blue` ❌

### Propiedades CSS Recomendadas

```css
/* Orden recomendado */
.elemento {
  /* 1. Display & Box Model */
  display: flex;
  margin: 1rem;
  padding: 1rem;
  
  /* 2. Dimensiones */
  width: 100%;
  height: auto;
  
  /* 3. Colores */
  background-color: var(--color-primary);
  color: var(--text-primary);
  
  /* 4. Tipografía */
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  
  /* 5. Borders & Shadows */
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* 6. Transform & Transition */
  transition: all 0.3s ease;
  transform: translateY(0);
}
```

---

## 3. React Best Practices

### Hooks

**useState - Manejar Estado**
```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(prev => prev + 1);
};
```

**useEffect - Efectos Secundarios**
```jsx
useEffect(() => {
  // Código ejecutado después del render
  return () => {
    // Limpieza (opcional)
  };
}, []); // Dependencias
```

### Props

```jsx
// ✅ Bueno: Props específicos
function Card({ title, description, image }) {
  return <div>{title}</div>;
}

// ❌ Malo: Pasar objeto completo
function Card(props) {
  return <div>{props.data.title}</div>;
}

// ✅ Bueno: Destructuración
const { title, ...rest } = props;

// ❌ Malo: Pasar funciones directas
<button onClick={() => handleClick()}>Click</button>

// ✅ Bueno: Pasar referencia de función
<button onClick={handleClick}>Click</button>
```

### Renderizado Condicional

```jsx
// ✅ Bueno
return (
  <>
    {isLoading && <Spinner />}
    {!isLoading && items.length > 0 && (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </>
);

// ❌ Malo
return isLoading ? <Spinner /> : null;

// ❌ Evitar
{items && items.length && ...}
```

### Keys en Listas

```jsx
// ❌ Malo: Usar índice
{items.map((item, index) => <li key={index}>{item}</li>)}

// ✅ Bueno: Usar ID único
{items.map(item => <li key={item.id}>{item}</li>)}

// ✅ Aceptable: ID único generado
{items.map(item => <li key={`${item.id}-${item.name}`}>{item}</li>)}
```

---

## 4. Performance

### Evitar Renders Innecesarios

```jsx
// ❌ Malo: Nueva función en cada render
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Bueno: Función memoizada
const handleClick = useCallback(() => {
  // ...
}, [id]);
```

### Lazy Loading

```jsx
const About = React.lazy(() => import('./pages/About'));

<Suspense fallback={<div>Cargando...</div>}>
  <About />
</Suspense>
```

### Optimizar Imágenes

```jsx
// ✅ Bueno: Especificar dimensiones
<img 
  src="/profile.jpg" 
  alt="Perfil"
  width="200"
  height="200"
  loading="lazy"
/>
```

---

## 5. Accesibilidad (a11y)

### Atributos ARIA

```jsx
// ✅ Bueno: Descripción accesible
<button aria-label="Cerrar diálogo">×</button>

<div role="navigation" aria-label="Principal">
  {/* Navegación */}
</div>
```

### Semántica HTML

```jsx
// ❌ Malo
<div onClick={handleClick} role="button">Haz clic</div>

// ✅ Bueno
<button onClick={handleClick}>Haz clic</button>

// ❌ Malo
<span className="heading">Título</span>

// ✅ Bueno
<h1>Título</h1>
```

### Contraste de Colores

- Texto normal: Mínimo 4.5:1
- Texto grande: Mínimo 3:1
- Usar https://webaim.org/resources/contrastchecker/

---

## 6. SEO

### Meta Tags

```html
<!-- En index.html -->
<meta name="description" content="Descripción clara y concisa" />
<meta name="keywords" content="palabra1, palabra2" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="author" content="Tu Nombre" />
```

### Schema.org JSON-LD

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tu Nombre",
  "url": "https://tu-sitio.com",
  "sameAs": [
    "https://linkedin.com/in/tu-perfil",
    "https://github.com/tu-usuario"
  ]
}
</script>
```

### Imagen para Social Sharing

```html
<!-- Open Graph -->
<meta property="og:image" content="https://tu-sitio.com/imagen.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter -->
<meta name="twitter:image" content="https://tu-sitio.com/imagen.jpg" />
```

---

## 7. Git Commits

### Formato de Mensaje

```
<tipo>: <descripción corta>

<descripción detallada (opcional)>
```

**Tipos:**
- `feat:` Nueva característica
- `fix:` Corrección de error
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no código)
- `refactor:` Refactorización
- `perf:` Mejora de performance
- `test:` Agregar tests

**Ejemplos:**
```bash
git commit -m "feat: agregar sección de proyectos"
git commit -m "fix: corregir responsive en móvil"
git commit -m "docs: actualizar guía de instalación"
git commit -m "refactor: optimizar componente Header"
```

---

## 8. Testing

### Estructura de Archivos

```
src/
├── components/
│   ├── Header.jsx
│   └── Header.test.jsx
├── pages/
│   ├── Index.jsx
│   └── Index.test.jsx
```

### Ejemplo Test

```jsx
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('debe renderizar el logo', () => {
    render(<Header />);
    expect(screen.getByText('Luis Jacobo')).toBeInTheDocument();
  });
});
```

---

## 9. Documentación

### Comentarios en Código

```jsx
// ✅ Bueno: Explica el "por qué"
// Usamos useCallback para evitar re-renders innecesarios
const handleFilter = useCallback(() => {
  // ...
}, [items]);

// ❌ Malo: Obvio
// Incrementar contador
setCount(count + 1);
```

### JSDoc

```jsx
/**
 * Renderiza una tarjeta de experiencia laboral
 * @param {Object} props
 * @param {string} props.company - Nombre de la empresa
 * @param {string} props.position - Puesto desempeñado
 * @param {string} props.period - Período de trabajo
 * @returns {JSX.Element}
 */
function ExperienceCard({ company, position, period }) {
  // ...
}
```

---

## 10. Mantenibilidad

### DRY (Don't Repeat Yourself)

```jsx
// ❌ Repetido
<div className="card"><h2>Proyecto 1</h2></div>
<div className="card"><h2>Proyecto 2</h2></div>
<div className="card"><h2>Proyecto 3</h2></div>

// ✅ Reutilizable
{projects.map(project => (
  <ProjectCard key={project.id} {...project} />
))}
```

### SOLID Principles

**Single Responsibility:** Cada componente hace una cosa
**Open/Closed:** Abierto a extensión, cerrado a modificación
**Liskov Substitution:** Los componentes son intercambiables
**Interface Segregation:** Props específicas no genéricas
**Dependency Inversion:** Inyectar dependencias

---

## Checklist de Código

- [ ] Componentes no son muy grandes (< 200 líneas)
- [ ] Props están documentadas o usamos TypeScript
- [ ] CSS está separado del componente
- [ ] No hay variables globales innecesarias
- [ ] Nombres claros y descriptivos
- [ ] Código pasó ESLint
- [ ] Funciona en móvil, tablet y desktop
- [ ] Accesible (keyboard, screen reader)
- [ ] Meta tags SEO presentes
- [ ] Imágenes optimizadas

---

**Mantén el código limpio, mantenible y accesible** ✨
