# Guía de Instalación y Despliegue en GitHub Pages

## Paso 1: Preparar tu Entorno Local

### Requisitos
- Git instalado: https://git-scm.com/download/win
- Node.js 18+ instalado: https://nodejs.org/
- Cuenta GitHub: https://github.com

### Verificar Instalación

Abre PowerShell/CMD y ejecuta:

```bash
node --version
npm --version
git --version
```

Deberías ver versiones similares a:
```
v20.11.0
10.2.4
git version 2.43.0
```

---

## Paso 2: Clonar o Descargar el Repositorio

### Opción A: Via Git (Recomendado)

```bash
cd tu-carpeta-de-proyectos
git clone https://github.com/jacobo-roy/portfolio.git
cd portfolio
```

### Opción B: Descargar ZIP

1. Ve a GitHub del repo
2. Haz clic en Code → Download ZIP
3. Extrae en tu carpeta de proyectos
4. Abre PowerShell en esa carpeta

---

## Paso 3: Instalar Dependencias

En la carpeta del proyecto:

```bash
npm install
```

Espera a que se descarguen e instalen todas las dependencias. Verás una carpeta `node_modules` creada.

---

## Paso 4: Desarrollo Local

### Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Deberías ver:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

Abre http://localhost:3000 en tu navegador.

### Detener el Servidor

Presiona `Ctrl + C` en la terminal.

---

## Paso 5: Personalizar tu Portafolio

Ver archivo `PERSONALIZACION.md` para:
- Cambiar información personal
- Actualizar proyectos
- Modificar estilos y colores
- Agregar/remover secciones

### Cambios Críticos a Hacer

1. **Email de contacto:** Reemplaza `jacobo@example.com`
2. **Redes sociales:** Actualiza URLs en `Header.jsx` y `Index.jsx`
3. **Experiencia:** Actualiza array `experiences` en `Index.jsx`
4. **Proyectos:** Actualiza array `projects` en `Index.jsx`
5. **Información de About:** Modifica `src/pages/About.jsx`

---

## Paso 6: Compilar para Producción

Una vez que hayas hecho cambios:

```bash
npm run build
```

Esto crea una carpeta `dist/` con los archivos optimizados para producción.

### Verificar Build Localmente

```bash
npm run preview
```

Abre http://localhost:4173 para ver cómo se vería en producción.

---

## Paso 7: Validar Código

Antes de hacer push:

```bash
npm run lint
```

Esto verifica que no haya errores de código.

---

## Paso 8: Subir a GitHub

### Opción A: Si clonaste el repo

```bash
git add .
git commit -m "Actualizar portafolio personal"
git push origin main
```

### Opción B: Si creaste repo nuevo

1. Crea nuevo repositorio en GitHub
2. No agregues README.md al crear
3. Copia las instrucciones que GitHub te muestra:

```bash
git init
git add .
git commit -m "Initial commit: Portafolio profesional"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git push -u origin main
```

---

## Paso 9: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. En el menú izquierdo, ve a **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Espera a que aparezca "Your site is published"

El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente.

---

## Paso 10: Verificar Despliegue

1. Ve a **Settings → Pages**
2. Bajo "Your site is live at" verás la URL
3. Formato: `https://tu-usuario.github.io/nombre-repo/`
4. Haz clic para verificar que funciona

### Ejemplo
Si tu usuario es `jacobo-roy` y repo es `portfolio`:
```
https://jacobo-roy.github.io/portfolio/
```

---

## Paso 11: (Opcional) Usar Dominio Personalizado

Si tienes un dominio personalizado (ej: jacobo-roy.com):

### Configurar DNS

En tu proveedor de dominios, crea estos registros DNS:

```
Tipo: CNAME
Nombre: www
Valor: tu-usuario.github.io

Tipo: A
Nombre: @
Valor: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

### Configurar en GitHub

1. Ve a **Settings → Pages**
2. En **Custom domain**, escribe: `jacobo-roy.com`
3. Espera verificación de DNS (puede tomar 24h)
4. Habilita **Enforce HTTPS**

---

## Monitorear el Despliegue

### Ver Estado del Workflow

1. Ve a **Actions** en tu repositorio
2. Verás el workflow `Deploy to GitHub Pages`
3. Verifica que esté en ✅ **Success**

Si hay ❌ **Failed**:
1. Haz clic en el workflow
2. Lee los logs para identificar el error
3. Corrige el error localmente
4. Haz push nuevamente

---

## Actualizar el Sitio

Cada vez que hagas cambios:

```bash
# En tu carpeta local
npm run dev          # Ver cambios localmente
npm run lint         # Validar código
npm run build        # Compilar
git add .
git commit -m "Describe tus cambios"
git push origin main
```

GitHub Actions automáticamente:
1. Descarga tu código
2. Instala dependencias
3. Valida con ESLint
4. Compila el proyecto
5. Despliega a GitHub Pages

---

## Troubleshooting

### El sitio muestra error 404

**Solución:**
1. Verifica que `vite.config.js` tenga `base: '/'`
2. Si usas subdirectorio, cambia a: `base: '/nombre-repo/'`
3. Ejecuta `npm run build` nuevamente
4. Haz push a GitHub

### GitHub Actions falla

**Comprobar:**
1. Tienes Node.js 18+ instalado
2. No hay errores en `npm run lint`
3. No hay errores en `npm run build` localmente
4. El package.json existe en la raíz

### Los estilos no se cargan

**Solución:**
1. Asegúrate de que todos los imports CSS estén en los componentes
2. Verifica que las rutas de importación sean correctas
3. Ejecuta `npm run build` para compilar

### Las imágenes no aparecen

**Solución:**
1. Coloca imágenes en carpeta `public/`
2. Referencia con: `src="/nombre-imagen.jpg"`
3. No usar `./` ni rutas relativas en public

---

## Checklist de Despliegue

- [ ] Node.js 18+ instalado
- [ ] npm install ejecutado sin errores
- [ ] npm run dev funciona
- [ ] Cambios personalizados completados
- [ ] npm run lint sin errores
- [ ] npm run build sin errores
- [ ] Cambios pusheados a GitHub
- [ ] GitHub Pages configurado en Settings
- [ ] Workflow ejecutado exitosamente
- [ ] Sitio accesible en URL de GitHub Pages
- [ ] Contenido y estilos visible correctamente

---

## URLs Útiles

- **Documentación React:** https://react.dev
- **Documentación Vite:** https://vitejs.dev
- **GitHub Pages:** https://pages.github.com
- **Configurar DNS:** Depende de tu proveedor
- **Verificar SSL:** https://www.sslshopper.com

---

## Soporte

Si encuentras problemas:

1. **Leer los logs de GitHub Actions**
   - Actions → Deploy to GitHub Pages → último run

2. **Ejecutar npm run build localmente**
   - Te mostrará los errores exactos

3. **Verificar archivo .gitignore**
   - Asegúrate de no subir `node_modules/`

4. **Preguntar en GitHub Discussions**
   - Tu repositorio → Discussions → Nueva pregunta

---

**¡Tu portafolio está en línea!** 🎉

Acceso: `https://tu-usuario.github.io/portfolio/`
