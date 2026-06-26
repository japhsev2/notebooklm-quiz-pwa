# Actualización 1.18

Esta versión corrige la sustitución anterior y reemplaza el `index.html` del paquete por `index_moodle_52_v334_revision_menu_editor_herramientas_contraido_por_defecto_v133(5).html`, conservando intacta la envoltura PWA ya existente: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos CG, favicon invisible en PC, `.nojekyll`, `.gitignore` y compatibilidad con GitHub Pages/iPhone.

Cambios principales incorporados en el HTML:

- evolución del HTML a la línea `Moodle 5.2 / v334`;
- ajustes recientes en revisión, menú del editor y herramientas contraídas por defecto;
- conservación de las mejoras previas del proyecto: Word/Aiken ampliado, multimedia, revisión, duplicados, bilingüismo, modo oscuro, navegación, exportaciones y PWA.

El proyecto deriva de un fork modificado de `https://github.com/Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`.

# Actualización 1.14

Esta versión sustituye el `index.html` anterior por `index_moodle_51_quiz_navblock_v100_carrousel_flick_extremo.html`, conservando intacta la envoltura PWA ya existente: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos CG, favicon invisible en PC y compatibilidad con GitHub Pages/iPhone.

Cambios principales incorporados en el HTML:

- corrección del botón de traducción en el pop-up de preguntas omitidas para que no reinicie la navegación;
- eliminación de desplazamientos laterales fantasma al traducir dentro de la revisión de duplicados;
- botones laterales anterior/siguiente sin invadir el contenido de las tarjetas;
- modal de revisión de duplicados centrado y estable;
- comparación paralela para duplicados múltiples o variantes relacionadas;
- trazabilidad documental completa con número `(#N en documento)`;
- checkbox uniforme `Añadir esta versión omitida` dentro de la tarjeta correspondiente;
- carrusel móvil de revisión de omitidas con gesto táctil tipo flick;
- salto de múltiples tarjetas con gestos enérgicos, hasta un máximo práctico de 32 posiciones;
- conservación de la animación suave de los botones laterales.

El proyecto deriva de un fork modificado de `https://github.com/Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`.

# Actualización 1.12

Esta versión sustituye el `index.html` anterior por `index_moodle_51_quiz_navblock_v74_revision_duplicados_importada_izquierda.html`, conservando la envoltura PWA ya existente: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos CG, favicon invisible en PC y compatibilidad con GitHub Pages/iPhone.

Cambios principales incorporados en el HTML:

- botones globales de traducción en Editor y Revisión;
- eliminación de la redirección automática al Editor tras importar;
- ajuste de la marca de pregunta señalada para que quede debajo del botón de traducción en Revisión;
- botón de traducción del cuadro celeste reducido, recolocado, con radio `0.35rem`, área táctil restaurada y colores nocturnos suavizados;
- revisión interactiva de preguntas omitidas por duplicado desde el aviso inferior derecho;
- comparación entre pregunta ya importada y pregunta omitida;
- selección de preguntas omitidas para añadirlas, importarlas todas o no añadir ninguna;
- revisión doble de duplicados en modo bilingüe;
- botones de traducción en el pop-up de duplicados;
- navegación lateral anterior/siguiente dentro de la revisión de duplicados;
- orden final de comparación: `Ya importada #N` a la izquierda y `Omitida en esta importación` a la derecha.

El proyecto deriva de un fork modificado de `https://github.com/Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`.

# Actualización 1.11

Esta versión sustituye el `index.html` anterior por `index_moodle_51_quiz_navblock_v64_bilingue_idioma_persistente_revision.html`, conservando la envoltura PWA ya existente: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos CG, favicon invisible en PC y compatibilidad con GitHub Pages/iPhone.

Cambios principales incorporados en el HTML:

- tarjeta NOTA/NOTE más compacta, con icono reducido, etiqueta en mayúsculas y menor separación;
- depuración de títulos, encabezados y frases ajenas a preguntas al importar Word Aiken ampliado;
- mezcla avanzada: sólo preguntas, sólo respuestas, o preguntas y respuestas;
- modo bilingüe con segundo documento Word vinculado por posición;
- botón de traducción en cuestionario, editor y revisión;
- persistencia configurable del idioma durante el cuestionario;
- revisión bilingüe corregida para enunciado, respuesta del usuario, respuesta correcta, explicación, justificación, nota y elementos asociados.

El proyecto deriva de un fork modificado de `https://github.com/Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`.

# Generador de cuestionarios NotebookLM — PWA para iPhone

Aplicación web progresiva basada en el HTML original del generador de cuestionarios. El proyecto está preparado para publicarse directamente en GitHub Pages y para instalarse en iPhone desde Safari mediante **Añadir a pantalla de inicio**.

## Procedencia y atribución

Este trabajo procede de un fork del proyecto de GitHub `Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`:

```text
https://github.com/Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer
```

Sobre ese proyecto se han realizado modificaciones de interfaz, adaptación visual tipo Moodle 5.1 / Boost, empaquetado PWA para iPhone, iconografía propia y ajustes de instalación mediante GitHub Pages.

## Principio de conversión

El archivo `index.html` conserva la aplicación original. Sólo se han añadido elementos envolventes de PWA en el `<head>`:

- metadatos de instalación para iOS;
- enlace a `manifest.json`;
- iconos;
- hoja `pwa-safe-area.css`;
- registro de `service-worker.js`;
- ajuste del viewport con `viewport-fit=cover`.

En esta integración no se han reescrito las funciones ni la lógica del nuevo HTML: se ha incorporado como `index.html` y sólo se han preservado las adiciones envolventes necesarias para la PWA.

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

## Nota de versión 1.5: iconos CG, pestaña sin icono y fondo exterior

- Los iconos de instalación se han rediseñado con un símbolo simple `CG`, por `Generador de cuestionarios`.
- Se mantienen iconos para iPhone y PWA: 120, 152, 167, 180, 192 y 512 px, incluido icono maskable.
- En escritorio, la pestaña del navegador no muestra icono visible: se fuerza un favicon vacío mediante `rel="icon" href="data:,"` y un `favicon.ico` transparente.
- El fondo exterior al reducir zoom u overscroll se fuerza a la paleta de la página (`#f8f9fa` en modo claro y `#1d2125` en modo oscuro), evitando la aparición del azul del tema.
- La caché del service worker se ha actualizado a `notebooklm-quiz-pwa-v4` para que los dispositivos recojan los nuevos recursos.


## Versión 1.6

Cambios de esta entrega:

- Iconos renovados con las letras **CG** de “Generador de cuestionarios”.
- Borde azul completo en todos los iconos, respetando la paleta Moodle/Boost usada por la aplicación.
- Se mantiene el favicon invisible en escritorio para que la pestaña del navegador en PC no muestre icono.
- Corrección reforzada del fondo exterior en modo oscuro cuando se reduce el zoom o aparece el área exterior del documento.
- Caché PWA actualizada a `notebooklm-quiz-pwa-v5` para forzar la renovación en iPhone.

## Versión 1.8

Cambios de esta entrega:

- Sustitución del `index.html` anterior por el nuevo HTML actualizado, conservando la envoltura PWA, iconos, manifiesto, hoja de áreas seguras, favicon invisible en PC y funcionamiento offline.
- Incorporación documental de la procedencia del trabajo como fork modificado del proyecto `Tony-Myers/NotebookLM-Quiz-extractor-and-enhancer`.
- Conservación de los cambios añadidos previamente en este paquete: instalación en iPhone, iconos CG con borde azul ancho, ausencia de favicon visible en PC, fondo exterior correcto en modo claro/oscuro y corrección del scroll bajo la barra de estado.
- Actualización de la caché PWA a `notebooklm-quiz-pwa-v7` para forzar que iPhone y GitHub Pages recojan el nuevo HTML.

Resumen funcional del nuevo HTML integrado:

- Apariencia tipo Moodle 5.1 / Boost.
- Preguntas de respuesta única con radios, letras `a.`, `b.`, `c.`, `d.` y sin animaciones de hover.
- Cuadro celeste de formulación de pregunta.
- Funciones “Quitar mi elección” y “Marcar / Desmarcar pregunta”.
- Cajetilla lateral de estado de pregunta ajustada a 7,845rem.
- Bloque de navegación por el cuestionario.
- Eliminación de barra de progreso superior.
- Botones con paleta final en modo claro y modo oscuro.
- Retroalimentación inmediata fuera del cuadro celeste y con espacio estable.
- Modo oscuro refinado.
- Tipografía Manrope reforzada.
- Adaptación móvil para iPhone.
- Revisión final con filtros por correctas, incorrectas y sin responder.
- Estados visuales diferenciados en la revisión, incluidas banderas.
- Exportación HTML independiente con los mismos cambios principales.


## Versión 1.9

Cambios de esta entrega:

- Sustitución del `index.html` de la versión 1.8 por el nuevo HTML `v42_word_aiken_imagenes_multimedia_separacion_acciones`, conservando la envoltura PWA, iconos, manifiesto, hoja de áreas seguras, favicon invisible en PC y publicación directa en GitHub Pages.
- Incorporación de la nueva opción de importación **MS Word Aiken con imágenes**, orientada a documentos `.docx` con estructura Aiken ampliada.
- Soporte para subida de documentos Word mediante selector de archivo y arrastrar/soltar.
- Reconocimiento ampliado de opciones Aiken: `a)`, `A)`, `a.`, `A.` y listas procedentes de la numeración automática de Microsoft Word.
- Conservación de imágenes colocadas antes de las opciones y también después de las opciones o de `ANSWER:`.
- Soporte para tablas de Word, incluidas tablas con texto, listas, viñetas e imágenes en celdas.
- Soporte para enlaces y recursos multimedia externos: YouTube, JoVE, PDF, audio, vídeo, páginas web y enlaces generales.
- Tarjetas multimedia con enlace principal, acción de previsualización desplegable y botón de apertura externa.
- Reconocimiento de justificaciones tras `ANSWER:` mediante `Justificación:`, `Explicación:`, `Reasoning:` o `Explanation:`.
- Visualización de la justificación sólo en **Realizar cuestionario → Modo estudio**, con tarjeta de fondo crema, borde naranja y compatibilidad con modo oscuro.
- Propagación de estas mejoras al editor, al cuestionario, a la revisión final, al HTML independiente exportado y al XML Moodle cuando corresponde.
- Caché PWA actualizada a `notebooklm-quiz-pwa-v8` para forzar que iPhone y GitHub Pages recojan el nuevo HTML.

Nota técnica: el nuevo HTML carga `mammoth.browser.min.js` desde jsDelivr para leer documentos `.docx`. Se ha conservado esa referencia externa para no alterar la lógica del HTML recibido. La app PWA sigue cacheando sus archivos locales esenciales; la importación Word/Aiken necesita que esa librería esté disponible en el navegador.

## Versión 1.10

Cambios de esta entrega:

- Sustitución del `index.html` de la versión 1.9 por el nuevo HTML `v42_word_aiken_imagenes_multimedia_separacion_acciones_plus`, conservando intacta la envoltura PWA previa: iconos CG, manifiesto, hoja de áreas seguras, favicon invisible en PC, fondo exterior claro/oscuro y publicación directa en GitHub Pages.
- Conservación de la importación **MS Word Aiken con imágenes**, con soporte para `.docx`, arrastrar/soltar, imágenes, tablas, enlaces, recursos multimedia, justificaciones pedagógicas y exportaciones enriquecidas.
- Ajuste fino de las tarjetas multimedia: se mantiene la acción de previsualización como texto desplegable y se incrementa la separación respecto al botón de apertura externa mediante el ajuste v57.
- Caché PWA actualizada a `notebooklm-quiz-pwa-v9` para forzar que iPhone y GitHub Pages recojan el nuevo HTML.

Nota técnica: se conserva la carga de `mammoth.browser.min.js` desde jsDelivr exactamente como viene en el HTML recibido, para no alterar la lógica del importador Word/Aiken.



## Actualización 1.13

Se sustituye `index.html` por `index_moodle_51_quiz_navblock_v76_quiz_nav_bajo_pregunta_ventana_reducida.html`, conservando la envoltura PWA previa. Esta versión corrige la disposición del bloque «Navegación por el cuestionario» en ventana reducida de escritorio: cuando el ancho disponible es reducido, el bloque pasa debajo del cuadro de la pregunta, como en móvil.

El `service-worker.js` se actualiza a `notebooklm-quiz-pwa-v12` para forzar la renovación de caché en Safari/iPhone.


## Versión 1.15 — HTML v101 correcto: toast móvil centrado

Esta versión sustituye únicamente el `index.html` del paquete anterior por el HTML correcto `index_moodle_51_quiz_navblock_v101_toast_movil_centrado _ v2.html`. Se conserva la envoltura PWA previa: iconos CG, `manifest.json`, `pwa-safe-area.css`, `offline.html`, favicon invisible en PC, `.nojekyll`, `.gitignore`, compatibilidad iPhone y GitHub Pages.

Cambio principal del HTML v101:

- En iPhone y pantallas móviles, el aviso inferior de importación (`.toast`) queda centrado horizontalmente, con anchura adaptada a la pantalla y respeto del `safe-area-inset-bottom`.
- En escritorio se conserva el comportamiento anterior del aviso inferior derecho.

La caché del service worker se ha actualizado a `notebooklm-quiz-pwa-v14` para forzar la renovación del HTML en Safari/iPhone.


## Actualización 1.16

Esta versión sustituye el `index.html` por `index_moodle_51_quiz_navblock_v102_toast_movil_margenes.html`, conservando la envoltura PWA anterior: iconos CG, manifiesto, service worker, área segura iOS, favicon invisible en PC y despliegue en GitHub Pages.

El cambio funcional del HTML correcto es el ajuste v102: en iPhone/móvil el aviso inferior de importación queda centrado, pero con márgenes laterales algo mayores para que no roce los extremos de la pantalla. En escritorio se conserva el aviso inferior derecho.


## Actualización 1.17

Se corrige la sustitución anterior del HTML y se integra como `index.html` el archivo correcto `index_moodle_51_quiz_navblock_v103_toast_click_aislado_quiz.html`.

Esta versión conserva la envoltura PWA previa: iconos CG, manifiesto, service worker, favicon invisible en PC, `pwa-safe-area.css`, `offline.html`, `.nojekyll`, `.gitignore`, compatibilidad con GitHub Pages e instalación en iPhone desde Safari.

El service worker se ha actualizado a `notebooklm-quiz-pwa-v16` para forzar la renovación de la caché en iPhone/Safari.

## Versión 1.19

Corrección de integración: se sustituye únicamente `index.html` por el HTML correcto `index_moodle_52_v334_revision_menu_editor_herramientas_contraido_por_defecto_v133(10).html`, conservando la envoltura PWA anterior: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos, favicon invisible y estructura para GitHub Pages/iPhone.

El `service-worker.js` se actualiza a la caché `notebooklm-quiz-pwa-v18` para forzar la renovación del HTML en Safari/iPhone.

## Versión 1.20 — HTML v133(11) correcto

Esta versión corrige la entrega anterior sustituyendo únicamente `index.html` por el archivo correcto:

`index_moodle_52_v334_revision_menu_editor_herramientas_contraido_por_defecto_v133(11).html`

Se conserva la envoltura PWA acumulada del paquete: `manifest.json`, `service-worker.js`, `pwa-safe-area.css`, `offline.html`, iconos, favicon invisible, `.nojekyll` y `.gitignore`.

El `service-worker.js` actualiza la caché a `notebooklm-quiz-pwa-v19` para forzar que Safari/iPhone recoja el HTML nuevo.
