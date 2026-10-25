# Mantenimiento del sitio Grupo MIAC

## Archivos

- index.html: estructura, contenido accesible, metadatos y datos estructurados.
- style/style.css: componentes, responsive, animaciones y preferencias de movimiento.
- script/script.js: idioma ES/EN, navegación, galerías, formulario y microinteracciones.
- img/marca, img/inicio, img/nosotros: recursos optimizados.
- img/portafolio/estuco y redimix: colecciones existentes.
- img/portafolio/tablaroca: fotos de decoraciones, domos, Durock, muros y plafones.
- netlify/functions/contact.mjs: proxy del formulario, solo servidor.
- scripts/build.mjs: genera la carpeta pública dist.
- netlify.toml: configuración de build, Functions y cabeceras de seguridad.

El HTML, JavaScript y CSS están documentados por secciones. Reutiliza los componentes y añade estilos responsive junto a su bloque. Las tarjetas de servicio rellenan el asunto del formulario, pero el visitante debe completar y enviar la solicitud.

## Ubicación y mapa

El mapa muestra Carretera México Toluca, km. 30, Colonia La Pila, 05750, Cuajimalpa de Morelos, CDMX. El pin usa las coordenadas confirmadas 19.3054068, -99.3372985; el botón abre indicaciones a la dirección proporcionada.

## Galerías y fotos

La colección Tablaroca contiene 50 fotos únicas, agrupadas bajo img/portafolio/tablaroca/decoraciones/cuartos-y-entrepanos/, domos/, durock/ y muros-y-plafones/. Los directorios conservan la especialidad de origen; el carrusel las presenta como una sola colección y los botones de categoría siguen separando Estuco, Redimix, Tablaroca y Videos.

Los archivos se convirtieron de PNG a WebP con miniaturas para las cards. La resolución original se conserva; no se amplió artificialmente a 4K porque el material fuente no tiene esos píxeles. El lote pesaba 16.9 MB; las versiones full y mini suman aproximadamente 2.7 MB.

Los duplicados se dejaron en una sola aparición: siete copias exactas entre Decoraciones y Muros y plafones; nueve imágenes ya presentes visualmente en Redimix (ocho coincidencias y una toma equivalente); y un archivo de prueba duplicado. Los originales de Descargas no se modificaron.

Al incorporar más fotos, registra cada elemento en el arreglo photos de tablaroca dentro de portfolioCatalog en script/script.js. Cada objeto usa rutas file y thumb relativas a img/portafolio/tablaroca/, stage (en-obra o acabados), alt, altEn, title y titleEn. El stage cambia el distintivo entre “EN OBRA” con casco y “ACABADOS” con cuchara.

1. Guarda el original bajo la subcarpeta de su especialidad.
2. Genera versión WebP y miniatura optimizada sin agrandar fuentes pequeñas.
3. Comprueba duplicados en las demás colecciones antes de añadir el objeto a portfolioCatalog.
4. Usa alt descriptivo, título de especialidad e idioma inglés equivalente.

Para video usa file, poster, stage, title y alt; añade clips cuando estén disponibles.

## Formulario y despliegue

El formulario llama a /.netlify/functions/contact. Configura FORMSUBMIT_ENDPOINT como variable secreta en Netlify con scope Functions. Nunca pegues el endpoint en el HTML, JS o documentación. El receptor se administra en FormSubmit. Para desarrollo local usa Netlify CLI con el secreto de entorno; file:// no ejecuta Functions.

Netlify publica solo dist/. En la raíz del proyecto permanecen fuentes, documentación y función privada. Los recursos que necesita el navegador, incluidos HTML/JS/CSS y fotos, siempre son inspeccionables desde el navegador. Lee SEGURIDAD-NETLIFY.md y SEO-PUBLICACION.md antes de publicar.

## Referencias SEO

- Google Search Central: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitios multilingües: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
