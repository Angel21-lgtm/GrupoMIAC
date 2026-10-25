# SEO y publicación de Grupo MIAC

## Configuración incluida

- Dominio canónico: https://grupomiac.netlify.app/.
- Canonical, Open Graph, Twitter Cards, título, descripción y metadatos ES/EN.
- Sitemap y robots.txt para la página principal.
- Datos estructurados con los datos proporcionados: Carretera México Toluca, km. 30, Colonia La Pila, 05750, Cuajimalpa de Morelos, CDMX; coordenadas 19.3054068, -99.3372985; teléfono, correo y Facebook.
- Mapa de OpenStreetMap con el pin confirmado y botón de indicaciones a la dirección compartida.
- Contenido de tablaroca y paneles de yeso, Durock, Permabase, DensGlass, bastidores, Redimix, estuco y pintura.
- Galería de Tablaroca con 50 fotos WebP únicas, organizadas por decoraciones, domos, sistemas Durock, muros y plafones.

Las fotos de Tablaroca se optimizaron en WebP y se acompañan de miniaturas. Se conservó su resolución original; las fuentes no son 4K y no se ampliaron artificialmente. Las copias exactas o visuales ya presentes en Redimix o en otra carpeta se muestran una sola vez.

## Antes y después del deploy

1. Publica con netlify.toml; el directorio público es dist/.
2. En Netlify, configura FORMSUBMIT_ENDPOINT como variable secreta con scope Functions, usando el endpoint FormSubmit que ya proporcionó el propietario. Vuelve a desplegar después de configurarla.
3. Confirma el dominio y HTTPS en Netlify.
4. Verifica el sitio en Google Search Console y Bing Webmaster Tools; envía https://grupomiac.netlify.app/sitemap.xml.
5. Revisa que la ficha pública de Google Business Profile use la dirección y el pin correctos, junto con teléfono, correo y área de servicio.
6. Revisa la versión móvil y las métricas de experiencia cuando el deploy esté disponible.

El sitio abierto desde file:// no puede llamar a una función de Netlify ni puede ser indexado. Ningún cambio técnico garantiza la primera posición; influyen competencia, reputación, contenido útil, enlaces, ubicación verificada y experiencia.

## Fuentes oficiales

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
