# Seguridad y despliegue en Netlify

## Recursos y secretos

Netlify publica únicamente dist/, que contiene HTML, CSS, JavaScript y medios que el navegador necesita. La función privada vive en netlify/functions/contact.mjs y queda fuera de la salida pública. El endpoint de FormSubmit no se escribe en HTML, JavaScript, documentación ni netlify.toml: se guarda en una variable de entorno de Netlify llamada FORMSUBMIT_ENDPOINT, con alcance Functions.

Configuración: Netlify → proyecto grupomiac → Site configuration → Environment variables → Add a variable. Usa el endpoint de FormSubmit que compartió el propietario, limita el scope a Functions y vuelve a desplegar.

## Validación del formulario

El navegador envía a /.netlify/functions/contact. La función comprueba el origen, valida campos y archivos, limita los adjuntos a 4 MB en conjunto, filtra extensiones, aplica un campo trampa y una comprobación de tiempo, y reenvía solo campos permitidos al endpoint configurado. FormSubmit mantiene sus controles propios de spam. No se guardan solicitudes ni archivos en este sitio.

Al abrir index.html con file://, el formulario no puede llamar a una función de Netlify. Para desarrollo local usa Netlify CLI con la variable de entorno configurada; en producción usa el dominio desplegado.

## Límites de una web estática

HTML, CSS, JavaScript e imágenes visibles deben descargarse en el navegador. Por eso, un visitante puede inspeccionar o guardar los recursos públicos; no se puede impedir de manera fiable desde una página web. Este proyecto no incluye secretos en esos archivos ni usa bloqueos de clic derecho. La lógica del proxy y el endpoint se mantienen del lado servidor; las fotos visibles siguen siendo recursos públicos.

La política CSP conserva permisos para el CDN de Tailwind que la página usa actualmente. Para endurecerla más, compila Tailwind durante el build y elimina el script CDN y la excepción unsafe-eval; revisa la política frente a las integraciones antes de endurecerla.
