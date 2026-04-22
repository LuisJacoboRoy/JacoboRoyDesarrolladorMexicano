# 🚀 INICIO RÁPIDO - 5 MINUTOS

## ¿Primeros pasos? Empieza aquí.

---

## PASO 1: Verificar Requisitos (1 min)

Abre PowerShell/CMD y ejecuta:

```bash
node --version
npm --version
```

Si no tienes Node.js 18+, descárgalo de: https://nodejs.org/

---

## PASO 2: Instalar Dependencias (2 min)

En la carpeta del proyecto:

```bash
npm install
```

Espera a que termine (verás `up to date` al final).

---

## PASO 3: Ver en Vivo (1 min)

```bash
npm run dev
```

Abre en navegador: **http://localhost:3000**

---

## PASO 4: Personalizar Tu Información (1 min)

Abre estos archivos y cambia tu info:

### Email
Reemplaza `jacobo@example.com` en:
- `src/components/Header.jsx`
- `src/pages/Index.jsx`
- `src/pages/About.jsx`
- `index.html`

### Experiencia
Edita: `src/pages/Index.jsx`
```jsx
const experiences = [
  {
    company: 'TU EMPRESA',
    position: 'TU PUESTO',
    period: 'FECHAS',
    description: 'DESCRIPCION',
    achievements: ['Logro 1', 'Logro 2']
  }
];
```

### Proyectos
Edita: `src/pages/Index.jsx`
```jsx
const projects = [
  {
    title: 'TU PROYECTO',
    description: 'DESCRIPCION',
    image: '/projects/imagen.jpg',
    tags: ['React', 'Node.js'],
    link: 'https://demo.com',
    sourceLink: 'https://github.com'
  }
];
```

---

## SIGUIENTE: Desplegar a GitHub Pages

Ver instrucciones completas en: **[INSTALACION.md](INSTALACION.md)**

---

## ❓ Problemas Rápidos

### "npm: comando no encontrado"
→ Instala Node.js desde https://nodejs.org/

### "npm install falla"
→ Elimina `node_modules` y `package-lock.json`, intenta nuevamente

### "npm run dev no funciona"
→ Espera unos segundos, a veces tarda en iniciar

### "Cambios no se ven"
→ Actualiza el navegador (Ctrl+Shift+R para borrar cache)

---

## 📚 Documentación Completa

| Necesitas | Lee |
|-----------|-----|
| Instalación completa | [INSTALACION.md](INSTALACION.md) |
| Personalizar todo | [PERSONALIZACION.md](PERSONALIZACION.md) |
| Entender el código | [MEJORES_PRACTICAS.md](MEJORES_PRACTICAS.md) |
| Resumen del proyecto | [RESUMEN.md](RESUMEN.md) |
| Navegar documentación | [INDICE.md](INDICE.md) |
| Información detallada | [contexto.txt](contexto.txt) |

---

**¡Eso es! Ahora tienes tu portafolio corriendo localmente.** 🎉

Próximo: Lee [INSTALACION.md](INSTALACION.md) para desplegar a GitHub Pages.

---

**Versión 1.0.0 | Abril 2026**
