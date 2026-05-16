# Generador de cuestionarios NotebookLM — PWA para iPhone

Aplicación web progresiva basada en el HTML original del generador de cuestionarios. El proyecto está preparado para publicarse directamente en GitHub Pages y para instalarse en iPhone desde Safari mediante **Añadir a pantalla de inicio**.

## Principio de conversión

El archivo `index.html` conserva la aplicación original. Sólo se han añadido elementos envolventes de PWA en el `<head>`:

- metadatos de instalación para iOS;
- enlace a `manifest.json`;
- iconos;
- hoja `pwa-safe-area.css`;
- registro de `service-worker.js`;
- ajuste del viewport con `viewport-fit=cover`.

No se han modificado funciones, colores, textos, interacciones, cálculos, animaciones ni lógica de la aplicación.

## Estructura

```text
.
├── index.html
├── manifest.json
├── service-worker.js
├── pwa-safe-area.css
├── offline.html
├── icons/
│   ├── apple-touch-icon-180.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── maskable-icon-512.png
│   └── icon.svg
├── .gitignore
├── .nojekyll
└── README.md
```

## Archivos principales

### `index.html`

Aplicación original con las mínimas adiciones de PWA en el `<head>`. Debe permanecer como archivo principal de GitHub Pages.

### `manifest.json`

Define el nombre, iconos, ámbito, color de tema, URL de inicio y modo `standalone` de la PWA.

### `service-worker.js`

Cachea los archivos locales esenciales para que la aplicación pueda abrirse sin conexión después de la primera carga correcta.

### `pwa-safe-area.css`

Añade una capa externa para respetar las áreas seguras de iPhone: notch, Dynamic Island, laterales y borde inferior.

### `offline.html`

Página mínima de respaldo si el documento principal todavía no se ha cacheado.

### `icons/`

Iconos necesarios para instalación en iOS y para navegadores compatibles con manifiesto PWA.

### `.nojekyll`

Evita que GitHub Pages procese el repositorio con Jekyll. Esto es útil para publicar archivos estáticos exactamente como están.

## Despliegue en GitHub Pages

1. Cree un repositorio nuevo en GitHub.
2. Copie todos los archivos de este proyecto en la raíz del repositorio.
3. Desde la carpeta del proyecto, ejecute:

```bash
git init
git add .
git commit -m "Convertir HTML a PWA instalable"
git branch -M main
git remote add origin https://github.com/USUARIO/NOMBRE_DEL_REPOSITORIO.git
git push -u origin main
```

4. En GitHub, abra el repositorio.
5. Entre en **Settings** → **Pages**.
6. En **Build and deployment**, seleccione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
7. Pulse **Save**.
8. Abra la URL publicada:

```text
https://USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/
```

## Instalación en iPhone

1. Abra la URL de GitHub Pages en **Safari**.
2. Espere a que la página cargue completamente una vez.
3. Toque el botón **Compartir**.
4. Seleccione **Añadir a pantalla de inicio**.
5. Confirme el nombre de la aplicación.
6. Abra la aplicación desde el icono creado en la pantalla de inicio.

## Uso sin conexión

Después de la primera visita con conexión, el `service-worker.js` guarda en caché:

- `index.html`;
- `manifest.json`;
- `pwa-safe-area.css`;
- `offline.html`;
- iconos locales.

La aplicación podrá abrirse sin conexión desde el icono de la pantalla de inicio, siempre que Safari/iOS no haya purgado la caché del sitio.

## Actualización de la aplicación

Cuando cambie algún archivo, suba los cambios a GitHub. Para forzar una nueva caché, cambie el valor de `CACHE_NAME` en `service-worker.js`, por ejemplo:

```js
const CACHE_NAME = 'notebooklm-quiz-pwa-v2';
```

Después, abra de nuevo la app con conexión para que se actualice.

## Nota sobre tipografía

El HTML original contiene una importación de Google Fonts para Manrope. No se ha eliminado ni sustituido para no alterar la estética del documento original. En modo sin conexión, si iOS no conserva esa fuente en caché, el navegador usará la familia alternativa declarada por el propio HTML.

## Lista de comprobación

- [ ] `index.html` abre correctamente en navegador de escritorio.
- [ ] El diseño es visualmente idéntico al HTML original.
- [ ] No hay errores en la consola al cargar desde GitHub Pages.
- [ ] `manifest.json` responde con código 200.
- [ ] `service-worker.js` se registra correctamente.
- [ ] La aplicación carga bajo HTTPS desde GitHub Pages.
- [ ] En iPhone, Safari permite **Añadir a pantalla de inicio**.
- [ ] Al abrir desde el icono, la app se muestra en modo independiente.
- [ ] El contenido no queda oculto por notch, Dynamic Island o borde inferior.
- [ ] Tras una primera carga online, la app abre sin conexión.
