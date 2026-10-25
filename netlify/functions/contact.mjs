/**
 * Private contact-form proxy. Keep the FormSubmit endpoint in Netlify environment.
 */
const MAX_TOTAL_FILE_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = 5 * 1024 * 1024;
const MAX_FILES = 8;
const ALLOWED_FILE = /\.(pdf|jpe?g|png|webp|docx?|xlsx?|dwg)$/i;
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' }
});
const cleanLine = (value, max) => String(value ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);

export default async (request) => {
  if (request.method !== 'POST') return json({ ok: false, message: 'Método no permitido.' }, 405);
  const endpoint = process.env.FORMSUBMIT_ENDPOINT;
  if (!endpoint) return json({ ok: false, message: 'El formulario aún no está configurado en el servidor.' }, 503);

  const siteURL = new URL(request.url);
  const origin = request.headers.get('origin');
  try {
    if (!origin || new URL(origin).origin !== siteURL.origin) return json({ ok: false, message: 'Solicitud no válida.' }, 403);
  } catch {
    return json({ ok: false, message: 'Solicitud no válida.' }, 403);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) return json({ ok: false, message: 'El envío supera el tamaño permitido.' }, 413);

  let incoming;
  try { incoming = await request.formData(); }
  catch { return json({ ok: false, message: 'No se pudieron leer los datos del formulario.' }, 400); }

  // Bots that fill the off-screen field receive a success-shaped response without an email.
  if (cleanLine(incoming.get('_gotcha'), 200)) return json({ ok: true, message: 'Solicitud recibida.' });
  const elapsed = Date.now() - Number(incoming.get('_ts'));
  if (!Number.isFinite(elapsed) || elapsed < 1000 || elapsed > 86400000) {
    return json({ ok: false, message: 'La solicitud expiró. Actualiza la página e inténtalo de nuevo.' }, 400);
  }

  const name = cleanLine(incoming.get('name'), 100);
  const email = cleanLine(incoming.get('email'), 254);
  const subject = cleanLine(incoming.get('subject'), 120);
  const message = String(incoming.get('message') ?? '').replace(/\u0000/g, '').trim().slice(0, 4000);
  if (name.length < 2 || subject.length < 3 || message.length < 12) {
    return json({ ok: false, message: 'Revisa los campos obligatorios e inténtalo de nuevo.' }, 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, message: 'Revisa el correo de contacto.' }, 400);

  const files = incoming.getAll('archivos').filter(file => file instanceof File && file.name);
  if (files.length > MAX_FILES || files.some(file => !ALLOWED_FILE.test(file.name))) {
    return json({ ok: false, message: 'Revisa el tipo o la cantidad de archivos adjuntos.' }, 400);
  }
  if (files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL_FILE_BYTES) {
    return json({ ok: false, message: 'Los archivos superan 4 MB en conjunto.' }, 413);
  }

  const outgoing = new FormData();
  outgoing.set('name', name);
  if (email) outgoing.set('email', email);
  outgoing.set('subject', subject);
  outgoing.set('message', message);
  outgoing.set('_subject', 'Grupo MIAC | ' + subject);
  outgoing.set('_ts', String(incoming.get('_ts')));
  outgoing.set('_gotcha', '');
  for (const file of files) {
    const safeName = file.name.replace(/[^\p{L}\p{N}._-]+/gu, '-').slice(0, 120);
    outgoing.append('archivos', new Blob([await file.arrayBuffer()], { type: file.type || 'application/octet-stream' }), safeName);
  }

  let endpointURL;
  try { endpointURL = new URL(endpoint); } catch { return json({ ok: false, message: 'La configuración del formulario no es válida.' }, 503); }
  if (endpointURL.protocol !== 'https:' || endpointURL.hostname !== 'formsubmit.app' || !endpointURL.pathname.startsWith('/f/')) {
    return json({ ok: false, message: 'La configuración del formulario no es válida.' }, 503);
  }

  try {
    const referer = request.headers.get('referer');
    const safeReferer = referer && new URL(referer).origin === siteURL.origin ? referer : siteURL.origin + '/';
    const upstream = await fetch(endpointURL, {
      method: 'POST',
      body: outgoing,
      headers: { accept: 'application/json', origin: siteURL.origin, referer: safeReferer },
      signal: AbortSignal.timeout(20000)
    });
    const raw = await upstream.text();
    let result = {};
    try { result = JSON.parse(raw); } catch { /* A 2xx response can be a plain-text success. */ }
    if (!upstream.ok || result.ok === false) return json({ ok: false, message: 'No pudimos entregar el mensaje. Inténtalo nuevamente.' }, 502);
    return json({ ok: true, message: '¡Listo! Recibimos tu mensaje. En breve nos pondremos en contacto.' });
  } catch {
    return json({ ok: false, message: 'No pudimos conectar con el servicio de correo. Inténtalo nuevamente.' }, 502);
  }
};
