/*
 * Grupo MIAC · mapa de comportamiento
 * 01. Preloader y restauración inicial en Inicio.
 * 02. Menú móvil accesible y cierre por enlace, exterior o Escape.
 * 03. Carrusel del equipo y catálogo independiente del portafolio.
 * 04. Visor a pantalla completa, bloqueo y restauración del scroll.
 * 05. Formulario y estados de envío; microinteracciones de cursor.
 * 06. Curva ambiental con parallax RAF y observador/scrollspy de secciones.
 */
/* Copy catalog and language controls for Grupo MIAC. Spanish remains the canonical source copy. */
const miacEnglishCopy = {
    'Construyendo': 'Building',
    'Inicio': 'Home', 'Servicios': 'Services', 'Proceso': 'Process', 'Portafolio': 'Portfolio', 'Nosotros': 'About', 'Contacto': 'Contact',
    'Abrir menú': 'Open menu', 'Cerrar menú': 'Close menu',
    'Contactar por WhatsApp al +52 1 55 4401 7796': 'Contact Grupo MIAC on WhatsApp at +52 1 55 4401 7796',
    'Sistemas de construcción ligera': 'Lightweight construction systems',
    'Construcción ligera.': 'Lightweight construction.',
    'Acabados que elevan tus espacios.': 'Finishes that elevate your space.',
    'Sistemas de Tablaroca y paneles de yeso, Durock, Permabase y DensGlass, con bastidores, Redimix, estuco y pintura cuidada hasta el último detalle.': 'Drywall and gypsum board systems, Durock, Permabase and DensGlass, with framing, Redimix, stucco and careful painting through the final detail.',
    'Cotiza tu proyecto': 'Request a quote', 'Explorar servicios': 'Explore services',
    'Especialidades': 'Specialties', 'Tablaroca': 'Drywall', 'Pastas y pintura': 'Joint compound and paint',
    'Servicios Especializados': 'Specialist services',
    'Sistemas bien especificados, ejecución precisa y acabados pensados para cada espacio.': 'Well-specified systems, precise installation and finishes tailored to every space.',
    'Tablaroca y bastidores': 'Drywall and framing',
    'Instalación de paneles de yeso y derivados. Muros, plafones, lambrines, platabandas, cajillos, fachadas y elementos decorativos a medida.': 'Installation of gypsum board and related panels for walls, ceilings, cladding, soffits, fascias, façades and custom architectural details.',
    'Durock y paneles técnicos': 'Durock and specialty panels',
    'Sistemas con Durock o Permabase, y paneles DensGlass, Glass y derivados, elegidos según el área y las condiciones del proyecto.': 'Durock or Permabase systems, plus DensGlass, Glass and related panels selected for each area and project conditions.',
    'Redimix, estuco y acabados': 'Redimix, stucco and finishes',
    'Tratamiento de juntas con Redimix del nivel 1 al 5 o superior, resanes, estuco y preparación profesional de superficies.': 'Joint finishing with Redimix from Level 1 through Level 5 or beyond, repairs, stucco and professional surface preparation.',
    'Pintura profesional': 'Professional painting',
    'Preparación y aplicación de pintura para lograr superficies uniformes, cortes limpios y una terminación lista para disfrutarse.': 'Surface preparation and painting for consistent coverage, clean lines and a polished final result.',
    'Cotizar este servicio': 'Request a quote for this service',
    'De la idea al último detalle': 'From the first idea to the final detail',
    'Un proceso claro.': 'A clear process.', 'Un resultado bien resuelto.': 'A result built with care.',
    'Cada proyecto tiene sus propios retos. Trabajamos por etapas para cuidar la ejecución y mantener claras las decisiones.': 'Every project has its own challenges. We work in clear stages to guide the work and keep decisions straightforward.',
    'Definimos el alcance': 'We define the scope', 'Alineamos necesidades, espacio y acabados para establecer una ruta de trabajo.': 'We align your needs, the space and the finishes to set a clear plan.',
    'Preparamos la estructura': 'We prepare the structure', 'Organizamos los sistemas y materiales de acuerdo con las características de cada área.': 'We select systems and materials to suit each area.',
    'Cuidamos cada acabado': 'We refine every finish', 'Integramos tratamiento de juntas, pastas y pintura para lograr una terminación uniforme.': 'We coordinate joint treatment, compounds and paint for a consistent finish.',
    'Revisamos los detalles': 'We review every detail', 'Hacemos una revisión visual de continuidad, limpieza y terminaciones antes de concluir.': 'Before completion, we check continuity, cleanliness and finish quality.',
    '¿Tienes un espacio en mente?': 'Have a space in mind?', 'Hablemos de tu proyecto': 'Let’s discuss your project',
    'Trabajo real, detalle en cada acabado': 'Real projects, care in every finish', 'Portafolio de': 'Portfolio of', 'proyectos MIAC.': 'MIAC projects.',
    'Explora nuestros trabajos de estuco, pasta Redimix, tablaroca, Durock, pintura y sistemas derivados. Cada obra refleja el cuidado en la preparación, la ejecución y los acabados. Explora las fotografías por especialidad y abre Videos para ver el trabajo en movimiento.': 'Explore our stucco, Redimix compound, drywall, Durock and painting work. Each project reflects care in preparation, execution and finishes. Browse photos by specialty, with videos coming soon.',
    'Elegir especialidad del portafolio': 'Choose a portfolio specialty', 'Estuco': 'Stucco', 'Redimix': 'Redimix compound',
    'Tablaroca y derivados': 'Drywall and related systems', 'Videos': 'Videos',
    '¿Tienes un proyecto similar?': 'Planning a similar project?', 'Hablemos': 'Let’s talk',
    'Fotografías de obra y acabados MIAC.': 'MIAC project and finish photos.',
    'Galería del equipo de trabajo': 'Team photo gallery', 'Controles de la galería': 'Gallery controls', 'Ver foto anterior': 'View previous photo', 'Ver foto siguiente': 'View next photo', 'Anterior': 'Previous', 'Siguiente': 'Next',
    'Portafolio de proyectos Grupo MIAC': 'Grupo MIAC project portfolio', 'Controles del portafolio': 'Portfolio controls', 'Ver foto anterior': 'View previous photo', 'Ver foto siguiente': 'View next photo',
    'Fotografía ampliada': 'Expanded photo', 'Cerrar vista a pantalla completa': 'Close full-screen view', 'Cerrar': 'Close', 'Presiona Esc o selecciona Cerrar para volver a la página.': 'Press Esc or select Close to return to the page.', 'Video del portafolio': 'Portfolio video',
    'El equipo MIAC en obra': 'The MIAC team at work', 'Personas y trabajo real detrás de cada acabado.': 'The people and hands-on work behind every finish.',
    'En obra': 'Work in progress', 'Acabados': 'Finished work', 'Foto 1 de 4: Miguel Contreras.': 'Photo 1 of 4: Miguel Contreras.',
    'Miguel Contreras instalando estructura de plafón en una obra': 'Miguel Contreras installing a ceiling frame on site', 'Ángel Contreras trabajando en los acabados de un plafón': 'Ángel Contreras working on a ceiling finish',
    'Miguel Contreras aplicando acabado en un muro': 'Miguel Contreras applying a wall finish', 'Ángel Contreras realizando trabajos de acabado en altura': 'Ángel Contreras completing elevated finishing work',
    'La Diferencia MIAC': 'The MIAC difference',
    'En Grupo MIAC nos especializamos en transformar espacios con los más altos estándares de calidad. Contamos con personal altamente calificado en sistemas de construcción ligera, asegurando estructuras sólidas y niveladas.': 'At Grupo MIAC, we transform spaces with a strong focus on quality. Our team is experienced in lightweight construction systems and builds solid, level structures.',
    'Nuestro compromiso es entregar proyectos impecables, a tiempo y con acabados que superan las expectativas. Cuidamos cada detalle desde el bastidor hasta la última capa de pintura. Tu visión es nuestro plano de trabajo.': 'We are committed to delivering polished projects on schedule, with finishes that exceed expectations. We care for every detail, from the frame to the final coat of paint. Your vision guides our work.',
    'Hablemos de tu espacio': 'Let’s talk about your space', 'Inicia tu proyecto con MIAC': 'Start your project with MIAC',
    'Cuéntanos qué necesitas construir o renovar. Te ayudamos a explorar una solución para tu espacio.': 'Tell us what you want to build or renovate. We’ll help you find a solution for your space.',
    'Solicitud directa': 'Direct inquiry', 'Cuéntanos qué tienes en mente.': 'Tell us what you have in mind.', 'Comparte los detalles y prepararemos el siguiente paso para tu proyecto.': 'Share the details and we’ll help plan the next step for your project.',
    'Envío seguro': 'Secure submission', 'Nombre': 'Name', 'Correo de contacto': 'Contact email', 'opcional': 'optional', 'Asunto': 'Subject', 'Archivos': 'Files',
    'opcional · máximo 4 MB en total': 'optional · 4 MB total maximum', 'Adjunta planos, fotos o referencias': 'Attach plans, photos or references', 'PDF, imágenes, Word, Excel o DWG': 'PDF, images, Word, Excel or DWG', 'Explorar': 'Browse',
    'Cuéntanos tu proyecto': 'Tell us about your project', 'Qué espacio quieres transformar, qué necesitas y cualquier detalle que nos ayude a entender tu idea…': 'Describe the space, what you need and any details that will help us understand your project…',
    'Incluye medidas aproximadas, ubicación o fecha ideal si ya las tienes.': 'Include approximate measurements, location or your preferred date if available.', 'No completar': 'Leave this blank',
    'Tus datos se usan únicamente para responder a esta solicitud.': 'Your information will only be used to respond to this inquiry.', 'Enviar solicitud': 'Send inquiry', 'Hablemos de tu proyecto': 'Let’s discuss your project',
    'Cercanos desde el primer mensaje': 'Here for you from the first message', 'Tu idea merece una buena conversación.': 'Your idea deserves a thoughtful conversation.',
    'Elige el canal que te resulte más cómodo. Estamos listos para ayudarte a aterrizarla.': 'Choose the channel that works best for you. We’re ready to help shape your idea.',
    'Necesito una cotización': 'I need a quote', 'Conversemos por WhatsApp': 'Chat with us on WhatsApp',
    'Visitar Grupo MIAC en Facebook': 'Visit Grupo MIAC on Facebook', 'Visita nuestra página de Facebook': 'Visit our Facebook page', 'Ideas y acabados en detalle': 'Ideas and finish details',
    'Solicitar servicios y cotización por correo a mc603459@gmail.com': 'Request services and a quote by email at mc603459@gmail.com', 'Cotiza nuestros servicios': 'Request a service quote', 'Describe tu proyecto por correo': 'Tell us about your project by email',
    '¿Quieres saber cómo trabajamos?': 'Want to know how we work?', 'Conoce las etapas de cada proyecto.': 'Explore the stages of each project.',
    'Construcción ligera, acabados con intención.': 'Lightweight construction, thoughtful finishes.', 'Todos los derechos reservados.': 'All rights reserved.',
    'Solicitar cotización': 'Request a quote', 'Solicitar una cotización por WhatsApp al +52 1 55 4401 7796': 'Request a quote on WhatsApp at +52 1 55 4401 7796',
    'Logo Grupo MIAC': 'Grupo MIAC logo', 'Trabajador de Grupo MIAC realizando acabados de construcción ligera': 'Grupo MIAC worker completing a lightweight construction finish',
    'Cambiar idioma a inglés': 'Switch language to English', 'Switch language to Spanish': 'Cambiar idioma a español',
    'Encuéntranos en': 'Find us in', 'Colonia La Pila': 'La Pila neighborhood',
    'Carretera México Toluca, km. 30. Colonia La Pila, 05750, Cuajimalpa de Morelos, CDMX.': 'Mexico-Toluca Road, km 30, La Pila, 05750, Cuajimalpa de Morelos, Mexico City.',
    'Explora el mapa interactivo y abre indicaciones a nuestra ubicación en La Pila.': 'Explore the interactive map and get directions to our location in La Pila.',
    'Zona Grupo MIAC': 'Grupo MIAC location', 'Mapa interactivo': 'Interactive map', 'Arrastra para explorar': 'Drag to explore',
    'Abrir mapa e indicaciones': 'Open map and directions', 'Ubicación: Carretera México Toluca, km. 30, Colonia La Pila, Cuajimalpa de Morelos.': 'Location: Mexico-Toluca Road, km 30, La Pila, Cuajimalpa de Morelos.',
    'Mapa interactivo de Grupo MIAC, Carretera México Toluca km 30, Colonia La Pila, Cuajimalpa': 'Interactive map of Grupo MIAC, Mexico-Toluca Road km 30, La Pila, Cuajimalpa',
    'Aplicación y acabado de pasta Redimix.': 'Redimix joint-compound application and finishing.', 'Sistemas ligeros, estructura y acabados.': 'Lightweight systems, framing and finishes.', 'Recorridos y procesos MIAC en movimiento.': 'MIAC project tours and processes in motion.',
    'Ampliar': 'Expand', 'Reproducir': 'Play', 'Ampliar foto': 'Expand photo', 'Reproducir video': 'Play video',
    'Ver fotografía a pantalla completa': 'View photo full screen', 'Reproducir video a pantalla completa': 'Play video full screen',
    'La galería de Estuco todavía no tiene fotografías.': 'The Stucco gallery does not have photos yet.', 'La galería de Redimix todavía no tiene fotografías.': 'The Redimix gallery does not have photos yet.',
    'Sección Estuco, foto 1 de 14.': 'Stucco section, photo 1 of 14.',
    'Revisa los archivos: admite PDF, JPG, PNG, WebP, Word, Excel o DWG.': 'Check your files: PDF, JPG, PNG, WebP, Word, Excel and DWG are supported.',
    'Los archivos superan 4 MB en conjunto. Reduce su tamaño y vuelve a adjuntarlos.': 'Your files exceed the 4 MB total limit. Reduce their size and attach them again.',
    'El formulario está preparado. Para activar el envío a Gmail falta conectar el endpoint de FormSubmit en el atributo action de este formulario.': 'The form is ready, but its FormSubmit endpoint still needs to be connected before it can send email.',
    'Enviando tu solicitud…': 'Sending your inquiry…', 'Estamos enviando tu mensaje y tus archivos de forma segura.': 'Your message and files are being sent securely.',
    'No pudimos enviar el formulario. Inténtalo de nuevo.': 'We could not send the form. Please try again.', '¡Listo! Recibimos tu mensaje. En breve nos pondremos en contacto.': 'Thanks! We received your message and will be in touch soon.',
    'Solicitud enviada': 'Inquiry sent', 'Reintentar envío': 'Try sending again', 'No se pudo completar el envío. Revisa tu conexión e inténtalo nuevamente.': 'Your inquiry could not be sent. Check your connection and try again.',
    'archivo seleccionado': 'file selected', 'archivos seleccionados': 'files selected',
    'Agregamos información de proyectos, categorías, fotos y videos para mostrar cada etapa y acabado.': 'We added project details, categories, photos and videos to show every stage and finish.'
};

const miacSpanishCopy = Object.fromEntries(Object.entries(miacEnglishCopy).map(([spanish, english]) => [english, spanish]));
let miacLanguage = (() => {
    try { return localStorage.getItem('miac-language') === 'en' ? 'en' : 'es'; }
    catch (error) { return 'es'; }
})();
const miacTextSource = new WeakMap();
const miacAttributeSource = new WeakMap();
const miacCopyText = (value, language = miacLanguage) => {
    const text = String(value ?? '');
    if (language === 'en') return miacEnglishCopy[text.trim()] || text;
    return miacSpanishCopy[text.trim()] || text;
};

function setMiacLanguage(language) {
    miacLanguage = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = miacLanguage;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) {
        const parent = textNode.parentElement;
        if (!parent || parent.closest('script,style,noscript,[data-no-translate]')) continue;
        if (!miacTextSource.has(textNode)) miacTextSource.set(textNode, textNode.nodeValue);
        const original = miacTextSource.get(textNode);
        const trimmed = original.trim();
        if (!trimmed) continue;
        const translated = miacCopyText(trimmed, miacLanguage);
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        textNode.nodeValue = leading + translated + trailing;
    }
    const attributeNames = ['aria-label', 'placeholder', 'title', 'alt'];
    document.body.querySelectorAll('*').forEach(element => {
        attributeNames.forEach(name => {
            if (!element.hasAttribute(name)) return;
            let saved = miacAttributeSource.get(element);
            if (!saved) { saved = {}; miacAttributeSource.set(element, saved); }
            if (!(name in saved)) saved[name] = element.getAttribute(name);
            element.setAttribute(name, miacCopyText(saved[name], miacLanguage));
        });
    });

    document.title = miacLanguage === 'en'
        ? 'Grupo MIAC | Drywall systems and professional finishes in Cuajimalpa, Mexico City'
        : 'Grupo MIAC | Sistemas de tablaroca y acabados profesionales en Cuajimalpa, CDMX';
    const metadata = miacLanguage === 'en' ? {
        description: 'Grupo MIAC in Cuajimalpa, Mexico City: drywall and gypsum systems, Durock, Permabase, DensGlass, framing, Redimix, stucco and professional painting.',
        ogTitle: 'Grupo MIAC | Drywall systems and finishes in Cuajimalpa',
        ogDescription: 'Drywall, Durock, Permabase, DensGlass, Redimix, stucco and professional painting in Cuajimalpa, Mexico City.',
        twitterTitle: 'Grupo MIAC | Construction systems and finishes',
        twitterDescription: 'Explore our drywall, specialty panels, framing, Redimix, stucco and painting services in Cuajimalpa.'
    } : {
        description: 'Grupo MIAC en Cuajimalpa, CDMX: sistemas de tablaroca y paneles de yeso, Durock, Permabase, DensGlass, bastidores, Redimix, estuco y pintura profesional.',
        ogTitle: 'Grupo MIAC | Sistemas de tablaroca y acabados en Cuajimalpa',
        ogDescription: 'Tablaroca y paneles de yeso, Durock, Permabase, DensGlass, Redimix, estuco y pintura profesional en Cuajimalpa, CDMX.',
        twitterTitle: 'Grupo MIAC | Construcción ligera y acabados',
        twitterDescription: 'Tablaroca, paneles técnicos, bastidores, Redimix, estuco y pintura en Cuajimalpa, CDMX.'
    };
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.ogDescription);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', miacLanguage === 'en' ? 'en_US' : 'es_MX');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.twitterTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.twitterDescription);
    const languageButton = document.querySelector('[data-language-toggle]');
    if (languageButton) {
        languageButton.classList.toggle('is-english', miacLanguage === 'en');
        languageButton.setAttribute('aria-pressed', String(miacLanguage === 'en'));
        languageButton.setAttribute('aria-label', miacLanguage === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a inglés');
    }
    try { localStorage.setItem('miac-language', miacLanguage); } catch (error) { /* Language still works for this visit. */ }
    document.dispatchEvent(new CustomEvent('miac:languagechange', { detail: { language: miacLanguage } }));
}

window.MIAC_I18N = {
    get language() { return miacLanguage; },
    t: miacCopyText,
    setLanguage: setMiacLanguage
};
setMiacLanguage(miacLanguage);

document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    setMiacLanguage(miacLanguage === 'es' ? 'en' : 'es');
});

// Mantener la página en Inicio mientras se muestra la carga.
        try {
            if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
            if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        } catch (error) {
            // The preloader must still release scrolling if the browser blocks URL-state updates.
        }
        window.scrollTo(0, 0);

        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            window.setTimeout(() => {
                preloader.style.opacity = '0';
                window.setTimeout(() => {
                    preloader.style.display = 'none';
                    window.scrollTo(0, 0);
                    document.documentElement.classList.remove('preloading');
                    document.body.classList.remove('preloading');
                    document.body.classList.add('loaded');
                }, 600);
            }, 5000);
        });

        // Menú desplegable móvil con transición suave
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        const glassNav = document.querySelector('.glass-nav');
        const setMobileMenu = (open) => {
            mobileMenu.classList.toggle('open', open);
            glassNav.classList.toggle('menu-open', open);
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label', MIAC_I18N.t(open ? 'Cerrar menú' : 'Abrir menú'));
            mobileMenu.setAttribute('aria-hidden', String(!open));
        };

        menuBtn.addEventListener('click', () => {
            setMobileMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
        });

        mobileLinks.forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
        document.addEventListener('click', event => {
            if (!glassNav.contains(event.target) && menuBtn.getAttribute('aria-expanded') === 'true') setMobileMenu(false);
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
                setMobileMenu(false);
                menuBtn.focus();
            }
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 960) setMobileMenu(false);
        });

        

        // Carrusel apilado con navegación circular y controles de teclado.
        const teamGallery = document.querySelector('[data-team-gallery]');
        if (teamGallery) {
            const teamCards = Array.from(teamGallery.querySelectorAll('[data-gallery-card]'));
            const previousButton = teamGallery.querySelector('[data-gallery-prev]');
            const nextButton = teamGallery.querySelector('[data-gallery-next]');
            const currentCounter = teamGallery.querySelector('[data-gallery-current]');
            const totalCounter = teamGallery.querySelector('[data-gallery-total]');
            const galleryStatus = teamGallery.querySelector('[data-gallery-status]');
            const cardStates = ['is-front', 'is-behind-one', 'is-behind-two', 'is-behind-three'];
            const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const transitionDuration = motionReduced ? 0 : 720;
            let activePhotoIndex = 0;
            let galleryIsTransitioning = false;

            const updateTeamGallery = () => {
                teamCards.forEach((card, index) => {
                    card.classList.remove(...cardStates, 'is-entering-front', 'is-leaving-next', 'is-leaving-previous');
                    const offset = (index - activePhotoIndex + teamCards.length) % teamCards.length;
                    card.classList.add(cardStates[offset] || 'is-behind-three');
                    card.setAttribute('aria-hidden', String(offset !== 0));
                });
                if (currentCounter) currentCounter.textContent = String(activePhotoIndex + 1).padStart(2, '0');
                if (totalCounter) totalCounter.textContent = String(teamCards.length).padStart(2, '0');
                if (galleryStatus) {
                    const name = teamCards[activePhotoIndex]?.dataset.galleryName || 'Equipo MIAC';
                    galleryStatus.textContent = MIAC_I18N.language === 'en' ? `Photo ${activePhotoIndex + 1} of ${teamCards.length}: ${name}.` : `Foto ${activePhotoIndex + 1} de ${teamCards.length}: ${name}.`;
                }
            };

            const changeTeamPhoto = direction => {
                if (galleryIsTransitioning || teamCards.length < 2) return;
                galleryIsTransitioning = true;
                previousButton.disabled = true;
                nextButton.disabled = true;

                const currentCard = teamCards[activePhotoIndex];
                const targetIndex = (activePhotoIndex + direction + teamCards.length) % teamCards.length;
                const targetCard = teamCards[targetIndex];
                targetCard.classList.add('is-entering-front');
                currentCard.classList.add(direction > 0 ? 'is-leaving-next' : 'is-leaving-previous');

                window.setTimeout(() => {
                    activePhotoIndex = targetIndex;
                    updateTeamGallery();
                    galleryIsTransitioning = false;
                    previousButton.disabled = false;
                    nextButton.disabled = false;
                }, transitionDuration);
            };

            previousButton.addEventListener('click', () => changeTeamPhoto(-1));
            nextButton.addEventListener('click', () => changeTeamPhoto(1));
            teamGallery.addEventListener('keydown', event => {
                if (event.key === 'ArrowLeft') changeTeamPhoto(-1);
                if (event.key === 'ArrowRight') changeTeamPhoto(1);
            });
            updateTeamGallery();
            document.addEventListener('miac:languagechange', updateTeamGallery);
        }

        // ===== PORTAFOLIO: fotografías y videos por colección =====
        // Una sola fuente de datos mantiene cada pestaña aislada de las demás.
        // Para cargar contenido futuro, añadir objetos al arreglo photos o videos de su categoría.
        const portfolioGallery = document.querySelector('[data-portfolio-gallery]');
        if (portfolioGallery) {
            const portfolioStack = portfolioGallery.querySelector('[data-portfolio-stack]');
            const previousButton = portfolioGallery.querySelector('[data-portfolio-prev]');
            const nextButton = portfolioGallery.querySelector('[data-portfolio-next]');
            const categoryButtons = Array.from(document.querySelectorAll('[data-portfolio-category]'));
            const currentCounter = portfolioGallery.querySelector('[data-portfolio-current]');
            const totalCounter = portfolioGallery.querySelector('[data-portfolio-total]');
            const galleryStatus = portfolioGallery.querySelector('[data-portfolio-status]');
            const activeName = document.querySelector('[data-portfolio-active-name]');
            const activeDescription = document.querySelector('[data-portfolio-active-description]');
            const cardStates = ['is-front', 'is-behind-one', 'is-behind-two', 'is-behind-three'];
            const transitionDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 720;
            const portfolioCatalog = {
                estuco: {
                    label: 'Estuco', labelEn: 'Stucco', description: 'Fotografías de obra y acabados MIAC.', descriptionEn: 'MIAC project and finish photos.', type: 'photo',
                    photos: [
                        { file: '20261002_120348.webp', stage: 'acabados', alt: 'Aplicación de acabado con llana sobre un muro.' },
                        { file: '20261002_120354.webp', stage: 'acabados', alt: 'Trabajador alisando el acabado de un muro.' },
                        { file: '20261002_120357.webp', stage: 'acabados', alt: 'Detalle de la textura aplicada en un muro.' },
                        { file: '20261002_120411.webp', stage: 'en-obra', alt: 'Trabajador realizando labores de acabado desde una escalera.' },
                        { file: 'IMG-20260929-WA0002.webp', stage: 'en-obra', alt: 'Materiales y herramientas dentro de la obra.' },
                        { file: 'IMG-20260929-WA0003.webp', stage: 'en-obra', alt: 'Área interior en preparación para sus acabados.' },
                        { file: 'IMG-20261003-WA0015.webp', stage: 'acabados', alt: 'Detalle de plafón y encuentro de superficies.' },
                        { file: 'IMG-20261003-WA0042.webp', stage: 'en-obra', alt: 'Muro interior en preparación para recibir sus acabados.' },
                        { file: 'IMG-20261003-WA0043.webp', stage: 'en-obra', alt: 'Espacio interior con los acabados en proceso.' },
                        { file: 'IMG-20261003-WA0049.webp', stage: 'en-obra', alt: 'Material de trabajo dentro del espacio.' },
                        { file: 'IMG-20261003-WA0051.webp', stage: 'acabados', alt: 'Mostrador y muro con superficies acabadas.' },
                        { file: 'IMG-20261003-WA0052.webp', stage: 'acabados', alt: 'Vista de un espacio interior terminado.' },
                        { file: 'IMG-20261004-WA0002.webp', stage: 'en-obra', alt: 'Equipo trabajando en acabados de plafón.' },
                        { file: 'IMG-20261004-WA0003.webp', stage: 'en-obra', alt: 'Equipo MIAC en una obra durante la ejecución.' }
                    ], videos: []
                },
                redimix: {
                    label: 'Redimix',
                    labelEn: 'Redimix compound',
                    description: 'Aplicación y acabado de pasta Redimix.',
                    descriptionEn: 'Redimix joint-compound application and finishing.',
                    type: 'photo',
                    photos: [
          {
                    "file": "FB_IMG_1791211241305.webp",
                    "thumb": "FB_IMG_1791211241305-mini.webp",
                    "stage": "en-obra",
                    "alt": "Plafón seccionado con luminarias durante el proceso de instalación.",
                    "altEn": "Sectioned ceiling with lighting during installation.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "FB_IMG_1791211246613.webp",
                    "thumb": "FB_IMG_1791211246613-mini.webp",
                    "stage": "acabados",
                    "alt": "Plafón iluminado y acabados interiores en un espacio comercial.",
                    "altEn": "Illuminated ceiling and interior finishes in a commercial space.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "FB_IMG_1791211252350.webp",
                    "thumb": "FB_IMG_1791211252350-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muros interiores preparados para recibir tratamiento de juntas.",
                    "altEn": "Interior walls prepared for joint treatment.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "FB_IMG_1791211256252.webp",
                    "thumb": "FB_IMG_1791211256252-mini.webp",
                    "stage": "en-obra",
                    "alt": "Cuarto en proceso con plafón y muros de tablaroca.",
                    "altEn": "Room in progress with drywall walls and ceiling.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "FB_IMG_1791211262553.webp",
                    "thumb": "FB_IMG_1791211262553-mini.webp",
                    "stage": "acabados",
                    "alt": "Sala amplia con muros lisos y plafón terminado.",
                    "altEn": "Spacious room with smooth walls and a finished ceiling.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "FB_IMG_1791211268771.webp",
                    "thumb": "FB_IMG_1791211268771-mini.webp",
                    "stage": "acabados",
                    "alt": "Pasillo interior con plafón iluminado y acabado uniforme.",
                    "altEn": "Interior hallway with an illuminated ceiling and even finish.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20260907-WA0002.webp",
                    "thumb": "IMG-20260907-WA0002-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro de tablaroca con juntas visibles en proceso de acabado.",
                    "altEn": "Drywall wall with joints visible during finishing.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20260907-WA0003.webp",
                    "thumb": "IMG-20260907-WA0003-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro de tablaroca en obra junto a andamios y materiales.",
                    "altEn": "Drywall wall on site beside scaffolding and materials.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20260907-WA0004.webp",
                    "thumb": "IMG-20260907-WA0004-mini.webp",
                    "stage": "en-obra",
                    "alt": "Paneles instalados y tratamiento de juntas en un muro alto.",
                    "altEn": "Installed panels and joint treatment on a tall wall.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20260907-WA0010.webp",
                    "thumb": "IMG-20260907-WA0010-mini.webp",
                    "stage": "acabados",
                    "alt": "Plafón con luminarias integradas en un espacio terminado.",
                    "altEn": "Ceiling with integrated lighting in a finished space.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20261003-WA0004.webp",
                    "thumb": "IMG-20261003-WA0004-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro interior con pasta aplicada en las juntas.",
                    "altEn": "Interior wall with compound applied to the joints.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0008.webp",
                    "thumb": "IMG-20261003-WA0008-mini.webp",
                    "stage": "en-obra",
                    "alt": "Trabajador realizando acabados en un espacio interior.",
                    "altEn": "Worker completing finishes in an interior space.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0010.webp",
                    "thumb": "IMG-20261003-WA0010-mini.webp",
                    "stage": "en-obra",
                    "alt": "Detalle de plafón con juntas y líneas de compuesto.",
                    "altEn": "Ceiling detail with joints and compound lines.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0011.webp",
                    "thumb": "IMG-20261003-WA0011-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro en preparación alrededor de una instalación eléctrica.",
                    "altEn": "Wall being prepared around an electrical installation.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0013.webp",
                    "thumb": "IMG-20261003-WA0013-mini.webp",
                    "stage": "en-obra",
                    "alt": "Tablaroca instalada en un muro largo con uniones visibles.",
                    "altEn": "Drywall installed on a long wall with visible joints.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0017.webp",
                    "thumb": "IMG-20261003-WA0017-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro amplio en proceso con paneles y andamio.",
                    "altEn": "Wide wall in progress with panels and scaffolding.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0019.webp",
                    "thumb": "IMG-20261003-WA0019-mini.webp",
                    "stage": "en-obra",
                    "alt": "Andamio junto a un muro durante trabajos de acabado.",
                    "altEn": "Scaffolding beside a wall during finishing work.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0020.webp",
                    "thumb": "IMG-20261003-WA0020-mini.webp",
                    "stage": "en-obra",
                    "alt": "Superficie de muro en preparación para pasta y pintura.",
                    "altEn": "Wall surface being prepared for compound and paint.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0021.webp",
                    "thumb": "IMG-20261003-WA0021-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro de tablaroca y andamio durante la instalación.",
                    "altEn": "Drywall wall and scaffolding during installation.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0025.webp",
                    "thumb": "IMG-20261003-WA0025-mini.webp",
                    "stage": "acabados",
                    "alt": "Interior claro con plafón e iluminación al finalizar los acabados.",
                    "altEn": "Bright interior with ceiling and lighting after finishing.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20261003-WA0026.webp",
                    "thumb": "IMG-20261003-WA0026-mini.webp",
                    "stage": "en-obra",
                    "alt": "Área amplia con paneles, materiales y andamio en obra.",
                    "altEn": "Large work area with panels, materials and scaffolding.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0034.webp",
                    "thumb": "IMG-20261003-WA0034-mini.webp",
                    "stage": "en-obra",
                    "alt": "Apertura de puerta con marco y muro en proceso.",
                    "altEn": "Door opening with frame and wall under construction.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0035.webp",
                    "thumb": "IMG-20261003-WA0035-mini.webp",
                    "stage": "acabados",
                    "alt": "Pasillo con iluminación y superficies interiores lisas.",
                    "altEn": "Hallway with lighting and smooth interior surfaces.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20261003-WA0036.webp",
                    "thumb": "IMG-20261003-WA0036-mini.webp",
                    "stage": "en-obra",
                    "alt": "Trabajador sobre andamio preparando un muro interior.",
                    "altEn": "Worker on scaffolding preparing an interior wall.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0038.webp",
                    "thumb": "IMG-20261003-WA0038-mini.webp",
                    "stage": "en-obra",
                    "alt": "Trabajador en zancos realizando acabados en un interior.",
                    "altEn": "Worker on stilts completing interior finishes.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0039.webp",
                    "thumb": "IMG-20261003-WA0039-mini.webp",
                    "stage": "acabados",
                    "alt": "Pasillo largo con luminarias y acabado interior uniforme.",
                    "altEn": "Long hallway with lighting and an even interior finish.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20261003-WA0040.webp",
                    "thumb": "IMG-20261003-WA0040-mini.webp",
                    "stage": "en-obra",
                    "alt": "Marco de acceso y muro interior en preparación.",
                    "altEn": "Entry frame and interior wall being prepared.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0044.webp",
                    "thumb": "IMG-20261003-WA0044-mini.webp",
                    "stage": "acabados",
                    "alt": "Pasillo iluminado con superficies de muro uniformes.",
                    "altEn": "Illuminated hallway with even wall surfaces.",
                    "title": "Acabado Redimix",
                    "titleEn": "Redimix finished work"
          },
          {
                    "file": "IMG-20261003-WA0046.webp",
                    "thumb": "IMG-20261003-WA0046-mini.webp",
                    "stage": "en-obra",
                    "alt": "Trabajador en zancos trabajando en muro y plafón.",
                    "altEn": "Worker on stilts working on a wall and ceiling.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0047.webp",
                    "thumb": "IMG-20261003-WA0047-mini.webp",
                    "stage": "en-obra",
                    "alt": "Escalera protegida junto a superficies en preparación.",
                    "altEn": "Protected staircase beside surfaces being prepared.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0050.webp",
                    "thumb": "IMG-20261003-WA0050-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro de tablaroca con zonas preparadas para acabado.",
                    "altEn": "Drywall wall with areas prepared for finishing.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0053.webp",
                    "thumb": "IMG-20261003-WA0053-mini.webp",
                    "stage": "en-obra",
                    "alt": "Aplicación de pasta con herramienta en un muro interior.",
                    "altEn": "Compound being applied to an interior wall with a finishing tool.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0055.webp",
                    "thumb": "IMG-20261003-WA0055-mini.webp",
                    "stage": "en-obra",
                    "alt": "Pasillo y muros preparados para el acabado final.",
                    "altEn": "Hallway and walls prepared for the final finish.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0056.webp",
                    "thumb": "IMG-20261003-WA0056-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro y plafón en proceso de acabado interior.",
                    "altEn": "Wall and ceiling during interior finishing work.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0058.webp",
                    "thumb": "IMG-20261003-WA0058-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro amplio con juntas de tablaroca visibles para aplicar pasta.",
                    "altEn": "Wide wall with visible drywall joints ready for compound.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0062.webp",
                    "thumb": "IMG-20261003-WA0062-mini.webp",
                    "stage": "en-obra",
                    "alt": "Pasillo interior con paneles y uniones por terminar.",
                    "altEn": "Interior hallway with panels and joints still to finish.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0064.webp",
                    "thumb": "IMG-20261003-WA0064-mini.webp",
                    "stage": "en-obra",
                    "alt": "Muro con estructura y materiales durante la obra.",
                    "altEn": "Wall framing and materials during construction.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0069.webp",
                    "thumb": "IMG-20261003-WA0069-mini.webp",
                    "stage": "en-obra",
                    "alt": "Plafón con juntas y luminarias durante el proceso de acabado.",
                    "altEn": "Ceiling with joints and lighting during the finishing process.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0072.webp",
                    "thumb": "IMG-20261003-WA0072-mini.webp",
                    "stage": "en-obra",
                    "alt": "Apertura de puerta y superficies interiores en preparación.",
                    "altEn": "Door opening and interior surfaces being prepared.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0073.webp",
                    "thumb": "IMG-20261003-WA0073-mini.webp",
                    "stage": "en-obra",
                    "alt": "Detalle de plafón con juntas visibles durante la construcción.",
                    "altEn": "Ceiling detail with visible joints during construction.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0075.webp",
                    "thumb": "IMG-20261003-WA0075-mini.webp",
                    "stage": "en-obra",
                    "alt": "Esquina de plafón y muro con pasta aplicada.",
                    "altEn": "Ceiling and wall corner with compound applied.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261003-WA0077.webp",
                    "thumb": "IMG-20261003-WA0077-mini.webp",
                    "stage": "en-obra",
                    "alt": "Trabajador realizando acabados en un muro interior.",
                    "altEn": "Worker finishing an interior wall.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261008-WA0003.webp",
                    "thumb": "IMG-20261008-WA0003-mini.webp",
                    "stage": "en-obra",
                    "alt": "Plafón seccionado con paneles en proceso de acabado.",
                    "altEn": "Sectioned ceiling with panels being finished.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261008-WA0004.webp",
                    "thumb": "IMG-20261008-WA0004-mini.webp",
                    "stage": "en-obra",
                    "alt": "Uniones visibles en un plafón de tablaroca.",
                    "altEn": "Visible joints on a drywall ceiling.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261008-WA0005.webp",
                    "thumb": "IMG-20261008-WA0005-mini.webp",
                    "stage": "en-obra",
                    "alt": "Plafón interior en proceso con pasta y luminarias.",
                    "altEn": "Interior ceiling in progress with compound and lighting.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          },
          {
                    "file": "IMG-20261008-WA0013.webp",
                    "thumb": "IMG-20261008-WA0013-mini.webp",
                    "stage": "en-obra",
                    "alt": "Plafón y muros durante la instalación de sistemas ligeros.",
                    "altEn": "Ceiling and walls during lightweight system installation.",
                    "title": "Proceso Redimix",
                    "titleEn": "Redimix application in progress"
          }
],
                    videos: []
                },
                // Fotos WebP únicas: file y thumb son rutas relativas a img/portafolio/tablaroca; stage controla distintivo e icono.
            tablaroca: {
                    label: 'Tablaroca y derivados',
                    labelEn: 'Drywall and related systems',
                    description: 'Fotos de decoraciones, domos, sistemas Durock, muros y plafones.',
                    descriptionEn: 'Photos of custom interiors, domes, Durock systems, walls and ceilings.',
                    type: 'photo',
                    photos: [
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0000.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0000-mini.webp",
                                "stage": "acabados",
                                "alt": "Clóset empotrado de panel de yeso con repisas integradas, visto desde el pasillo.",
                                "altEn": "Built-in gypsum-board closet with integrated shelving, seen from the hallway.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0001.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0001-mini.webp",
                                "stage": "acabados",
                                "alt": "Detalle de nichos y repisas de tablaroca para almacenamiento interior.",
                                "altEn": "Drywall niches and shelving for interior storage.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0002.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0002-mini.webp",
                                "stage": "acabados",
                                "alt": "Módulo empotrado de tablaroca con compartimentos y superficie lisa.",
                                "altEn": "Built-in drywall unit with compartments and a smooth surface.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0003.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0003-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajadores montan una división interior con paneles y bastidor.",
                                "altEn": "Workers install an interior partition with framing and panels.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0004.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0004-mini.webp",
                                "stage": "en-obra",
                                "alt": "Revestimiento de panel de yeso en un muro junto a una escalera.",
                                "altEn": "Gypsum-board cladding on a wall beside a staircase.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0005.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0005-mini.webp",
                                "stage": "en-obra",
                                "alt": "Tablaroca y entrepaños en una zona interior durante la ejecución.",
                                "altEn": "Drywall and shelving in an interior area during construction.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0006.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0006-mini.webp",
                                "stage": "en-obra",
                                "alt": "Escalera de trabajo frente a muros de panel de yeso en instalación.",
                                "altEn": "Work ladder beside gypsum-board walls being installed.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0007.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0007-mini.webp",
                                "stage": "en-obra",
                                "alt": "Muro de tablaroca con recortes y detalles de instalación en un cuarto.",
                                "altEn": "Drywall wall with openings and installation details in a room.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0008.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0008-mini.webp",
                                "stage": "en-obra",
                                "alt": "Instalación de tablaroca en un interior con escalera de trabajo.",
                                "altEn": "Drywall installation in an interior space with a work ladder.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0009.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0009-mini.webp",
                                "stage": "acabados",
                                "alt": "Clóset empotrado de panel de yeso con repisas y superficies terminadas.",
                                "altEn": "Built-in gypsum-board closet with shelving and finished surfaces.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0010.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0010-mini.webp",
                                "stage": "en-obra",
                                "alt": "Andamio frente a muros de panel de yeso durante la instalación.",
                                "altEn": "Scaffolding in front of gypsum-board walls during installation.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0011.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260825-WA0011-mini.webp",
                                "stage": "en-obra",
                                "alt": "Dos trabajadores realizan detalles de tablaroca dentro de una vivienda.",
                                "altEn": "Two workers complete drywall details inside a home.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0002.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0002-mini.webp",
                                "stage": "acabados",
                                "alt": "Mueble empotrado de tablaroca con entrepaños dentro de una habitación.",
                                "altEn": "Built-in drywall shelving unit inside a room.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0003.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0003-mini.webp",
                                "stage": "en-obra",
                                "alt": "Esquina revestida con panel de yeso antes del acabado final.",
                                "altEn": "Gypsum-board corner before the final finish.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0004.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20260831-WA0004-mini.webp",
                                "stage": "acabados",
                                "alt": "Recámara con clóset integrado y muros de tablaroca terminados.",
                                "altEn": "Bedroom with a built-in closet and finished drywall walls.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0004.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0004-mini.webp",
                                "stage": "acabados",
                                "alt": "Plafón de tablaroca con cajillos y puntos de iluminación empotrados.",
                                "altEn": "Drywall ceiling with recessed details and lighting points.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0041.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0041-mini.webp",
                                "stage": "en-obra",
                                "alt": "Paneles de yeso ajustados al descanso de una escalera interior.",
                                "altEn": "Gypsum panels fitted to an interior staircase landing.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0059.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0059-mini.webp",
                                "stage": "acabados",
                                "alt": "Muro de panel de yeso con vano de acceso y superficie lisa.",
                                "altEn": "Smooth gypsum-board wall with a doorway opening.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0068.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0068-mini.webp",
                                "stage": "en-obra",
                                "alt": "Cajillo y nicho de tablaroca junto a una escalera, listos para pintura.",
                                "altEn": "Drywall soffit and niche beside a staircase, ready for paint.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0070.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0070-mini.webp",
                                "stage": "acabados",
                                "alt": "Detalle decorativo curvo realizado en tablaroca dentro de un espacio interior.",
                                "altEn": "Curved decorative drywall detail in an interior space.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0071.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261003-WA0071-mini.webp",
                                "stage": "en-obra",
                                "alt": "Divisiones de tablaroca y área de paso durante la ejecución de obra.",
                                "altEn": "Drywall partitions and passageway during construction.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0009.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0009-mini.webp",
                                "stage": "en-obra",
                                "alt": "Estructura y paneles de plafón con luminarias durante la instalación.",
                                "altEn": "Ceiling framing and panels with lights during installation.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0010.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0010-mini.webp",
                                "stage": "acabados",
                                "alt": "Plafón de tablaroca con luminarias empotradas en un espacio interior.",
                                "altEn": "Drywall ceiling with recessed lights in an interior space.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0011.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0011-mini.webp",
                                "stage": "acabados",
                                "alt": "Plafón decorativo con iluminación y acabado interior uniforme.",
                                "altEn": "Decorative ceiling with lighting and an even interior finish.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0012.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0012-mini.webp",
                                "stage": "acabados",
                                "alt": "Plafón amplio de panel de yeso con iluminación integrada.",
                                "altEn": "Large gypsum-board ceiling with integrated lighting.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0014.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0014-mini.webp",
                                "stage": "acabados",
                                "alt": "Cajillos de tablaroca y luminarias empotradas en el plafón.",
                                "altEn": "Drywall ceiling details and recessed lighting.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0015.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0015-mini.webp",
                                "stage": "en-obra",
                                "alt": "Estructura de plafón visible junto a paneles en proceso de montaje.",
                                "altEn": "Ceiling framing visible beside panels being installed.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0016.webp",
                                "thumb": "decoraciones/cuartos-y-entrepanos/IMG-20261008-WA0016-mini.webp",
                                "stage": "en-obra",
                                "alt": "Bastidor metálico y paneles en un interior antes del cierre.",
                                "altEn": "Metal framing and panels in an interior before closure.",
                                "title": "Entrepaños y espacios a medida",
                                "titleEn": "Built-ins and custom interiors"
                },
                {
                                "file": "domos/FB_IMG_1791211210591.webp",
                                "thumb": "domos/FB_IMG_1791211210591-mini.webp",
                                "stage": "en-obra",
                                "alt": "Estructura metálica para domo en azotea, con perfiles expuestos.",
                                "altEn": "Exposed metal framing for a rooftop dome.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211213036.webp",
                                "thumb": "domos/FB_IMG_1791211213036-mini.webp",
                                "stage": "en-obra",
                                "alt": "Cubierta de domo durante la instalación de paneles y estructura.",
                                "altEn": "Dome roof during panel and framing installation.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211218521.webp",
                                "thumb": "domos/FB_IMG_1791211218521-mini.webp",
                                "stage": "en-obra",
                                "alt": "Paneles ligeros instalados sobre bastidor abierto en una cubierta.",
                                "altEn": "Lightweight panels installed over open roof framing.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211221127.webp",
                                "thumb": "domos/FB_IMG_1791211221127-mini.webp",
                                "stage": "en-obra",
                                "alt": "Estructura de cubierta ligera sobre un espacio exterior en construcción.",
                                "altEn": "Lightweight roof framing over an exterior area under construction.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211230570.webp",
                                "thumb": "domos/FB_IMG_1791211230570-mini.webp",
                                "stage": "en-obra",
                                "alt": "Detalle de instalación de cubierta en pendiente y bastidor metálico.",
                                "altEn": "Sloped roof installation detail with metal framing.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211230703.webp",
                                "thumb": "domos/FB_IMG_1791211230703-mini.webp",
                                "stage": "en-obra",
                                "alt": "Cubierta inclinada de domo sobre un área exterior durante la obra.",
                                "altEn": "Sloped dome roof over an exterior area during construction.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211230980.webp",
                                "thumb": "domos/FB_IMG_1791211230980-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajador ajusta la estructura y los paneles de un domo en altura.",
                                "altEn": "Worker adjusts dome framing and panels at height.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "domos/FB_IMG_1791211232098.webp",
                                "thumb": "domos/FB_IMG_1791211232098-mini.webp",
                                "stage": "en-obra",
                                "alt": "Instalador sobre plataforma coloca paneles en un plafón decorativo.",
                                "altEn": "Installer on a platform placing panels on a decorative ceiling.",
                                "title": "Domos y cubiertas ligeras",
                                "titleEn": "Domes and lightweight roofs"
                },
                {
                                "file": "durock/IMG-20261003-WA0029.webp",
                                "thumb": "durock/IMG-20261003-WA0029-mini.webp",
                                "stage": "en-obra",
                                "alt": "Panel Durock instalado en una cubierta interior, listo para tratamiento de juntas.",
                                "altEn": "Durock panel installed on an interior ceiling, ready for joint treatment.",
                                "title": "Sistemas Durock",
                                "titleEn": "Durock systems"
                },
                {
                                "file": "durock/IMG-20261003-WA0054.webp",
                                "thumb": "durock/IMG-20261003-WA0054-mini.webp",
                                "stage": "en-obra",
                                "alt": "Plafón de panel Durock montado sobre una estructura metálica.",
                                "altEn": "Durock ceiling panels mounted on a metal frame.",
                                "title": "Sistemas Durock",
                                "titleEn": "Durock systems"
                },
                {
                                "file": "durock/IMG-20261003-WA0057.webp",
                                "thumb": "durock/IMG-20261003-WA0057-mini.webp",
                                "stage": "en-obra",
                                "alt": "Detalle de panel Durock colocado bajo una estructura de cubierta.",
                                "altEn": "Durock panel fitted beneath roof framing.",
                                "title": "Sistemas Durock",
                                "titleEn": "Durock systems"
                },
                {
                                "file": "durock/IMG-20261003-WA0060.webp",
                                "thumb": "durock/IMG-20261003-WA0060-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajador instala panel Durock y bastidor en una terraza cubierta.",
                                "altEn": "Worker installs Durock panels and framing on a covered terrace.",
                                "title": "Sistemas Durock",
                                "titleEn": "Durock systems"
                },
                {
                                "file": "muros-y-plafones/FB_IMG_1791211308074.webp",
                                "thumb": "muros-y-plafones/FB_IMG_1791211308074-mini.webp",
                                "stage": "en-obra",
                                "alt": "Plafón de tablaroca instalado en una estancia con remates aún visibles.",
                                "altEn": "Drywall ceiling installed in a room with visible unfinished joints.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0014.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0014-mini.webp",
                                "stage": "en-obra",
                                "alt": "Técnico sobre plataforma de trabajo durante el montaje de un plafón.",
                                "altEn": "Technician on a work platform while installing a ceiling.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0018.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0018-mini.webp",
                                "stage": "en-obra",
                                "alt": "Instalador ajusta la estructura del plafón junto a una ventana.",
                                "altEn": "Installer adjusts ceiling framing beside a window.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0031.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0031-mini.webp",
                                "stage": "en-obra",
                                "alt": "División de tablaroca y vano interior durante la construcción.",
                                "altEn": "Drywall partition and interior opening during construction.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0048.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0048-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajador instala paneles de plafón sobre una estructura suspendida.",
                                "altEn": "Worker installs ceiling panels on a suspended frame.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0061.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0061-mini.webp",
                                "stage": "en-obra",
                                "alt": "Muros interiores y perfilería expuesta durante la construcción.",
                                "altEn": "Interior walls and exposed framing during construction.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261003-WA0067.webp",
                                "thumb": "muros-y-plafones/IMG-20261003-WA0067-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajador sobre andamio coloca paneles de yeso en el techo.",
                                "altEn": "Worker on scaffolding installs gypsum panels on a ceiling.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261008-WA0006.webp",
                                "thumb": "muros-y-plafones/IMG-20261008-WA0006-mini.webp",
                                "stage": "en-obra",
                                "alt": "Instalación de plafón de panel de yeso en una estancia amplia.",
                                "altEn": "Gypsum-board ceiling installation in a spacious room.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261008-WA0007.webp",
                                "thumb": "muros-y-plafones/IMG-20261008-WA0007-mini.webp",
                                "stage": "acabados",
                                "alt": "Plafón liso con luminarias lineales en un espacio interior.",
                                "altEn": "Smooth ceiling with linear lights in an interior space.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                },
                {
                                "file": "muros-y-plafones/IMG-20261008-WA0008.webp",
                                "thumb": "muros-y-plafones/IMG-20261008-WA0008-mini.webp",
                                "stage": "en-obra",
                                "alt": "Trabajadores cierran un plafón y muros de tablaroca dentro del espacio.",
                                "altEn": "Workers close a drywall ceiling and walls inside the room.",
                                "title": "Muros y plafones",
                                "titleEn": "Walls and ceilings"
                }
],
                    videos: []
                },
                videos: { label: 'Videos de obra', labelEn: 'Project videos', description: 'Recorridos y procesos MIAC en movimiento.', descriptionEn: 'MIAC project tours and processes in motion.', type: 'video', photos: [], videos: [] }
            };
            const localizedPortfolioLabel = category => MIAC_I18N.language === 'en' ? (category.labelEn || MIAC_I18N.t(category.label)) : category.label;
            const localizedPortfolioDescription = category => MIAC_I18N.language === 'en' ? (category.descriptionEn || MIAC_I18N.t(category.description)) : category.description;
            const portfolioRoot = 'img/portafolio';
            let activeCategoryId = 'estuco';
            let activePhotoIndex = 0;
            let galleryIsTransitioning = false;
            const getCategoryItems = category => category.type === 'video' ? category.videos : category.photos;

            // Crea una tarjeta visualmente uniforme para fotos y clips.
            const createPortfolioCard = (item, index, category) => {
                const isVideo = category.type === 'video';
                const isWork = item.stage === 'en-obra';
                const card = document.createElement('figure');
                card.className = 'team-photo-card is-out-of-stack' + (isVideo ? ' is-video-card' : '');
                card.dataset.portfolioCard = '';
                card.dataset.galleryName = MIAC_I18N.language === 'en' ? (item.titleEn || localizedPortfolioLabel(category)) : (item.title || category.label);
                card.setAttribute('aria-hidden', 'true');
                let media;
                if (isVideo) {
                    media = document.createElement('video');
                    media.className = 'portfolio-card-video';
                    media.dataset.src = portfolioRoot + '/' + activeCategoryId + '/' + item.file;
                    if (item.poster) media.poster = portfolioRoot + '/' + activeCategoryId + '/' + item.poster;
                    media.preload = 'none';
                    media.muted = true;
                    media.playsInline = true;
                    media.setAttribute('aria-label', item.alt);
                } else {
                    media = document.createElement('img');
                    media.dataset.src = portfolioRoot + '/' + activeCategoryId + '/' + (item.thumb || item.file);
                    media.dataset.fullSrc = portfolioRoot + '/' + activeCategoryId + '/' + item.file;
                    media.alt = MIAC_I18N.language === 'en' ? (item.altEn || 'Grupo MIAC ' + localizedPortfolioLabel(category) + ' project photo ' + (index + 1)) : item.alt;
                    media.loading = index < 4 ? 'eager' : 'lazy';
                    media.decoding = 'async';
                }
                const expand = document.createElement('button');
                expand.className = 'portfolio-fullscreen-button';
                expand.type = 'button';
                expand.dataset.portfolioFullscreen = '';
                expand.setAttribute('aria-label', (isVideo ? (MIAC_I18N.language === 'en' ? 'Play video ' : 'Reproducir video ') : (MIAC_I18N.language === 'en' ? 'Expand photo ' : 'Ampliar foto ')) + (index + 1) + (MIAC_I18N.language === 'en' ? ' of ' : ' de ') + localizedPortfolioLabel(category));
                expand.title = MIAC_I18N.t(isVideo ? 'Reproducir video a pantalla completa' : 'Ver fotografía a pantalla completa');
                expand.innerHTML = '<i class="fas ' + (isVideo ? 'fa-play' : 'fa-expand') + '" aria-hidden="true"></i><span>' + MIAC_I18N.t(isVideo ? 'Reproducir' : 'Ampliar') + '</span>'; 
                const caption = document.createElement('figcaption');
                caption.className = 'team-photo-caption';
                caption.innerHTML = '<span><span>' + MIAC_I18N.t(isWork ? 'En obra' : 'Acabados') + '</span><strong>' + (MIAC_I18N.language === 'en' ? (item.titleEn || localizedPortfolioLabel(category)) : (item.title || category.label)) + '</strong></span><i class="fas ' + (isWork ? 'fa-helmet-safety' : 'fa-trowel') + '" aria-hidden="true"></i>'; 
                card.append(media, expand, caption);
                return card;
            };

            // Mantiene una pila de cuatro medios y carga recursos conforme se acercan al frente.
            function updatePortfolioPhotoStack() {
                const cards = Array.from(portfolioStack.querySelectorAll('[data-portfolio-card]'));
                cards.forEach((card, index) => {
                    card.classList.remove(...cardStates, 'is-entering-front', 'is-leaving-next', 'is-leaving-previous', 'is-out-of-stack');
                    const offset = (index - activePhotoIndex + cards.length) % cards.length;
                    card.classList.add(cardStates[offset] || 'is-out-of-stack');
                    card.setAttribute('aria-hidden', String(offset !== 0));
                    if (offset < 4) {
                        const media = card.querySelector('img, video');
                        if (media && !media.hasAttribute('src')) media.src = media.dataset.src;
                        if (media instanceof HTMLVideoElement && !media.hasAttribute('preload')) media.preload = 'metadata';
                    }
                });
            }

            // Sincroniza contador, etiquetas accesibles y estado de los controles.
            const updatePortfolioControls = () => {
                const category = portfolioCatalog[activeCategoryId];
                const items = getCategoryItems(category);
                const hasItems = items.length > 0;
                const kind = MIAC_I18N.language === 'en' ? 'video' : (category.type === 'video' ? 'video' : 'foto');
                const categoryLabel = localizedPortfolioLabel(category);
                if (activeName) activeName.textContent = categoryLabel;
                if (activeDescription) activeDescription.textContent = localizedPortfolioDescription(category);
                if (currentCounter) currentCounter.textContent = hasItems ? String(activePhotoIndex + 1).padStart(2, '0') : '00';
                if (totalCounter) totalCounter.textContent = String(items.length).padStart(2, '0');
                previousButton.disabled = items.length < 2;
                nextButton.disabled = items.length < 2;
                if (galleryStatus) {
                    galleryStatus.textContent = hasItems
                        ? (MIAC_I18N.language === 'en' ? categoryLabel + ' section, ' + kind + ' ' + (activePhotoIndex + 1) + ' of ' + items.length + '. ' + (items[activePhotoIndex].stage === 'en-obra' ? 'Work in progress.' : 'Finished work.') : 'Sección ' + categoryLabel + ', ' + kind + ' ' + (activePhotoIndex + 1) + ' de ' + items.length + '. ' + (items[activePhotoIndex].stage === 'en-obra' ? 'En obra.' : 'Acabados.'))
                        : (MIAC_I18N.language === 'en' ? categoryLabel + ' does not have ' + (category.type === 'video' ? 'videos' : 'photos') + ' yet.' : 'La sección ' + categoryLabel + ' todavía no tiene ' + (category.type === 'video' ? 'videos.' : 'fotografías.'));
                }
            };

            // Cada pestaña sustituye solo los medios de su propia colección.
            const renderPortfolioCategory = categoryId => {
                if (!portfolioCatalog[categoryId]) return;
                activeCategoryId = categoryId;
                activePhotoIndex = 0;
                galleryIsTransitioning = false;
                const category = portfolioCatalog[categoryId];
                const items = getCategoryItems(category);
                categoryButtons.forEach(button => {
                    const selected = button.dataset.portfolioCategory === activeCategoryId;
                    button.classList.toggle('is-active', selected);
                    button.setAttribute('aria-pressed', String(selected));
                    button.disabled = false;
                });
                portfolioStack.replaceChildren();
                if (items.length) {
                    portfolioStack.append(...items.map((item, index) => createPortfolioCard(item, index, category)));
                    updatePortfolioPhotoStack();
                } else {
                    const empty = document.createElement('div');
                    empty.className = 'portfolio-empty-state';
                    empty.innerHTML = '<i class="fas ' + (category.type === 'video' ? 'fa-circle-play' : 'fa-images') + '" aria-hidden="true"></i><strong>' + (MIAC_I18N.language === 'en' ? 'Coming soon' : 'Próximamente') + '</strong><span>' + (MIAC_I18N.language === 'en' ? (category.type === 'video' ? 'Project videos will appear here.' : 'Photos for this specialty will appear here.') : (category.type === 'video' ? 'Los videos de obra se agregarán aquí.' : 'Las fotografías de esta especialidad se agregarán aquí.')) + '</span>'; 
                    portfolioStack.append(empty);
                }
                portfolioStack.classList.remove('is-category-changing');
                void portfolioStack.offsetWidth;
                portfolioStack.classList.add('is-category-changing');
                updatePortfolioControls();
            };

            // Anterior y siguiente recorren circularmente la colección activa.
            const changePortfolioPhoto = direction => {
                const items = getCategoryItems(portfolioCatalog[activeCategoryId]);
                if (galleryIsTransitioning || items.length < 2) return;
                const targetIndex = (activePhotoIndex + direction + items.length) % items.length;
                if (targetIndex === activePhotoIndex) return;
                galleryIsTransitioning = true;
                previousButton.disabled = true;
                nextButton.disabled = true;
                categoryButtons.forEach(button => { button.disabled = true; });
                const cards = Array.from(portfolioStack.querySelectorAll('[data-portfolio-card]'));
                const currentCard = cards[activePhotoIndex];
                const targetCard = cards[targetIndex];
                const targetMedia = targetCard.querySelector('img, video');
                if (targetMedia && !targetMedia.hasAttribute('src')) targetMedia.src = targetMedia.dataset.src;
                targetCard.classList.remove('is-out-of-stack', ...cardStates);
                targetCard.classList.add('is-entering-front');
                currentCard.classList.add(direction > 0 ? 'is-leaving-next' : 'is-leaving-previous');
                window.setTimeout(() => {
                    activePhotoIndex = targetIndex;
                    updatePortfolioPhotoStack();
                    updatePortfolioControls();
                    galleryIsTransitioning = false;
                    categoryButtons.forEach(button => { button.disabled = false; });
                }, transitionDuration);
            };
            previousButton.addEventListener('click', () => changePortfolioPhoto(-1));
            nextButton.addEventListener('click', () => changePortfolioPhoto(1));
            categoryButtons.forEach(button => button.addEventListener('click', () => renderPortfolioCategory(button.dataset.portfolioCategory)));
            portfolioGallery.addEventListener('keydown', event => {
                if (event.key === 'ArrowLeft') changePortfolioPhoto(-1);
                if (event.key === 'ArrowRight') changePortfolioPhoto(1);
            });

            // El visor comparte su marco entre fotos y video y siempre devuelve el scroll.
            const lightbox = document.querySelector('[data-portfolio-lightbox]');
            const lightboxImage = lightbox.querySelector('[data-portfolio-lightbox-image]');
            const lightboxVideo = lightbox.querySelector('[data-portfolio-lightbox-video]');
            const lightboxTitle = lightbox.querySelector('[data-portfolio-lightbox-title]');
            const lightboxClose = lightbox.querySelector('[data-portfolio-lightbox-close]');
            let returnFocus = null;
            let savedScrollY = 0;
            const closeLightbox = () => {
                if (lightbox.hidden) return;
                lightbox.classList.remove('is-open');
                lightbox.hidden = true;
                lightbox.setAttribute('aria-hidden', 'true');
                document.documentElement.classList.remove('portfolio-lightbox-open');
                document.body.classList.remove('portfolio-lightbox-open');
                document.body.style.removeProperty('--portfolio-scroll-lock-top');
                lightboxImage.removeAttribute('src');
                lightboxImage.hidden = false;
                lightboxVideo.pause();
                lightboxVideo.removeAttribute('src');
                lightboxVideo.load();
                lightboxVideo.hidden = true;
                window.scrollTo(0, savedScrollY);
                if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
            };
            portfolioStack.addEventListener('click', event => {
                const expand = event.target.closest('[data-portfolio-fullscreen]');
                if (!expand) return;
                const card = expand.closest('[data-portfolio-card]');
                const sourceVideo = card?.querySelector('video');
                const sourceImage = card?.querySelector('img');
                if (!sourceVideo && !sourceImage) return;
                returnFocus = expand;
                savedScrollY = window.scrollY;
                document.body.style.setProperty('--portfolio-scroll-lock-top', '-' + savedScrollY + 'px');
                document.documentElement.classList.add('portfolio-lightbox-open');
                document.body.classList.add('portfolio-lightbox-open');
                if (sourceVideo) {
                    lightboxImage.hidden = true;
                    lightboxVideo.hidden = false;
                    lightboxVideo.src = sourceVideo.currentSrc || sourceVideo.src || sourceVideo.dataset.src;
                    lightboxVideo.poster = sourceVideo.poster || '';
                    lightboxVideo.load();
                } else {
                    lightboxVideo.pause();
                    lightboxVideo.removeAttribute('src');
                    lightboxVideo.hidden = true;
                    lightboxImage.hidden = false;
                    lightboxImage.src = sourceImage.dataset.fullSrc || sourceImage.currentSrc || sourceImage.src;
                    lightboxImage.alt = sourceImage.alt;
                }
                lightboxTitle.textContent = localizedPortfolioLabel(portfolioCatalog[activeCategoryId]) + ' · ' + (card.dataset.galleryName || (MIAC_I18N.language === 'en' ? 'MIAC project' : 'Proyecto MIAC'));
                lightbox.hidden = false;
                lightbox.setAttribute('aria-hidden', 'false');
                requestAnimationFrame(() => {
                    lightbox.classList.add('is-open');
                    lightboxClose.focus({ preventScroll: true });
                    if (sourceVideo) lightboxVideo.play().catch(() => {});
                });
            });
            lightboxClose.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
            document.addEventListener('keydown', event => {
                if (lightbox.hidden) return;
                if (event.key === 'Escape') closeLightbox();
                if (event.key === 'Tab') { event.preventDefault(); lightboxClose.focus(); }
            });
            renderPortfolioCategory(activeCategoryId);
            document.addEventListener('miac:languagechange', () => renderPortfolioCategory(activeCategoryId));
        }
        // ===== CONTACTO: envío asíncrono, adjuntos y estado accesible =====
        const contactForm = document.querySelector('[data-contact-form]');
        if (contactForm) {
            const contactStatus = contactForm.querySelector('[data-contact-form-status]');
            const submitButton = contactForm.querySelector('[data-contact-submit]');
            const submitLabel = contactForm.querySelector('[data-contact-submit-label]');
            const fileInput = contactForm.querySelector('input[type="file"]');
            const fileLabel = contactForm.querySelector('[data-contact-file-label]');
            const fileList = contactForm.querySelector('[data-contact-file-list]');
            const subjectField = contactForm.querySelector('[name="subject"]');
            const emailSubject = contactForm.querySelector('[data-contact-email-subject]');
            const timestampField = contactForm.querySelector('[data-contact-timestamp]');
            const uploadArea = contactForm.querySelector('[data-contact-upload]');
            const maxAttachmentBytes = 4 * 1024 * 1024;
            timestampField.value = String(Date.now());

            const showContactStatus = (message, state) => {
                contactStatus.textContent = MIAC_I18N.t(message);
                contactStatus.dataset.state = state;
                contactStatus.hidden = false;
            };
            const formatBytes = bytes => bytes < 1024 * 1024 ? Math.ceil(bytes / 1024) + ' KB' : (bytes / (1024 * 1024)).toFixed(1) + ' MB';
            const updateSelectedFiles = files => {
                fileList.replaceChildren();
                const chosenFiles = Array.from(files || []);
                const totalBytes = chosenFiles.reduce((sum, file) => sum + file.size, 0);
                fileLabel.textContent = chosenFiles.length ? chosenFiles.length + ' ' + MIAC_I18N.t(chosenFiles.length === 1 ? 'archivo seleccionado' : 'archivos seleccionados') + ' · ' + formatBytes(totalBytes) : MIAC_I18N.t('Adjunta planos, fotos o referencias');
                fileList.hidden = chosenFiles.length === 0;
                chosenFiles.forEach(file => {
                    const item = document.createElement('li');
                    item.textContent = file.name + ' · ' + formatBytes(file.size);
                    fileList.append(item);
                });
            };
            fileInput.addEventListener('change', () => updateSelectedFiles(fileInput.files));
            ['dragenter', 'dragover'].forEach(type => uploadArea.addEventListener(type, event => {
                event.preventDefault();
                uploadArea.classList.add('is-dragging');
            }));
            ['dragleave', 'drop'].forEach(type => uploadArea.addEventListener(type, event => {
                event.preventDefault();
                uploadArea.classList.remove('is-dragging');
            }));
            uploadArea.addEventListener('drop', event => {
                if (!event.dataTransfer?.files?.length) return;
                fileInput.files = event.dataTransfer.files;
                updateSelectedFiles(fileInput.files);
            });

            // El servicio entrega el correo y admite adjuntos con FormData/AJAX.
            contactForm.addEventListener('submit', async event => {
                event.preventDefault();
                if (!contactForm.reportValidity()) return;
                const files = Array.from(fileInput.files || []);
                const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
                const allowedFile = /\.(pdf|jpe?g|png|webp|docx?|xlsx?|dwg)$/i;
                if (files.some(file => !allowedFile.test(file.name))) {
                    showContactStatus('Revisa los archivos: admite PDF, JPG, PNG, WebP, Word, Excel o DWG.', 'error');
                    return;
                }
                if (totalBytes > maxAttachmentBytes) {
                    showContactStatus('Los archivos superan 4 MB en conjunto. Reduce su tamaño y vuelve a adjuntarlos.', 'error');
                    return;
                }
                emailSubject.value = MIAC_I18N.language === 'en' ? 'Grupo MIAC | Project inquiry: ' + subjectField.value.trim() : 'Grupo MIAC | ' + subjectField.value.trim();
                submitButton.disabled = true;
                submitButton.classList.remove('is-success');
                submitButton.classList.add('is-sending');
                submitLabel.textContent = MIAC_I18N.t('Enviando tu solicitud…');
                showContactStatus('Estamos enviando tu mensaje y tus archivos de forma segura.', 'sending');
                const startedAt = performance.now();
                try {
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: new FormData(contactForm),
                        headers: { Accept: 'application/json' }
                    });
                    const result = await response.json();
                    if (!response.ok || !result.ok) throw new Error('No pudimos enviar el formulario. Inténtalo de nuevo.');
                    const animationRemainder = Math.max(0, 700 - (performance.now() - startedAt));
                    await new Promise(resolve => window.setTimeout(resolve, animationRemainder));
                    contactForm.reset();
                    timestampField.value = String(Date.now());
                    updateSelectedFiles([]);
                    submitButton.classList.remove('is-sending');
                    submitButton.classList.add('is-success');
                    submitLabel.textContent = MIAC_I18N.t('Solicitud enviada');
                    showContactStatus(result.message || '¡Listo! Recibimos tu mensaje. En breve nos pondremos en contacto.', 'success');
                    window.setTimeout(() => {
                        submitButton.classList.remove('is-success');
                        submitLabel.textContent = MIAC_I18N.t('Enviar solicitud');
                    }, 3200);
                } catch (error) {
                    submitButton.classList.remove('is-sending');
                    submitLabel.textContent = MIAC_I18N.t('Reintentar envío');
                    showContactStatus(error.message || 'No se pudo completar el envío. Revisa tu conexión e inténtalo nuevamente.', 'error');
                } finally {
                    submitButton.disabled = false;
                }
            });
        }

        // Las tarjetas llevan el servicio elegido al asunto del formulario.
        document.querySelectorAll('[data-service-quote]').forEach(link => {
            link.addEventListener('click', () => {
                const subject = document.querySelector('[data-contact-form] [name="subject"]');
                if (subject) subject.value = MIAC_I18N.t(link.dataset.serviceQuote);
            });
        });

        // Inclinación leve con puntero fino; no se ejecuta en touch ni con movimiento reducido.
        const serviceCards = document.querySelectorAll('[data-service-card]');
        if (serviceCards.length && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            serviceCards.forEach(card => {
                let tiltFrame = 0;
                card.addEventListener('pointermove', event => {
                    if (event.pointerType !== 'mouse') return;
                    if (tiltFrame) window.cancelAnimationFrame(tiltFrame);
                    tiltFrame = window.requestAnimationFrame(() => {
                        const bounds = card.getBoundingClientRect();
                        const x = (event.clientX - bounds.left) / bounds.width;
                        const y = (event.clientY - bounds.top) / bounds.height;
                        card.style.setProperty('--service-tilt-x', ((0.5 - y) * 3).toFixed(2) + 'deg');
                        card.style.setProperty('--service-tilt-y', ((x - 0.5) * 3).toFixed(2) + 'deg');
                        tiltFrame = 0;
                    });
                }, { passive: true });
                card.addEventListener('pointerleave', () => {
                    if (tiltFrame) window.cancelAnimationFrame(tiltFrame);
                    tiltFrame = 0;
                    card.style.removeProperty('--service-tilt-x');
                    card.style.removeProperty('--service-tilt-y');
                });
            });
        }

        // Aura discreta de cursor en pantallas con puntero fino; se conserva la flecha nativa.
        const cursorAura = document.querySelector('[data-cursor-aura]');
        if (cursorAura && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const interactiveSelector = 'a,button,input,textarea,select,label,[role="button"]';
            document.addEventListener('pointermove', event => {
                if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
                cursorAura.style.transform = 'translate3d(' + event.clientX + 'px,' + event.clientY + 'px,0) translate(-50%,-50%)';
                cursorAura.classList.add('is-visible');
            }, { passive: true });
            document.addEventListener('pointerover', event => {
                cursorAura.classList.toggle('is-interactive', Boolean(event.target.closest(interactiveSelector)));
            });
            document.addEventListener('pointerdown', () => cursorAura.classList.add('is-pressed'));
            document.addEventListener('pointerup', () => cursorAura.classList.remove('is-pressed'));
            document.addEventListener('pointerleave', () => cursorAura.classList.remove('is-visible', 'is-interactive', 'is-pressed'));
        }

        // Fondo ambiental: deriva continua y parallax medido en scroll/puntero.
        const ambientCurves = document.querySelector('[data-ambient-curves]');
        if (ambientCurves) {
            const reduceAmbientMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            let ambientPointerX = 0;
            let ambientPointerY = 0;
            let ambientFramePending = false;
            const updateAmbientCurves = () => {
                const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
                const scrollProgress = window.scrollY / scrollRange;
                const scrollShift = (scrollProgress - 0.5) * 38;
                ambientCurves.style.setProperty('--ambient-shift-x', (ambientPointerX * 28).toFixed(1) + 'px');
                ambientCurves.style.setProperty('--ambient-shift-y', (ambientPointerY * 20 + scrollShift).toFixed(1) + 'px');
                ambientFramePending = false;
            };
            const scheduleAmbientUpdate = () => {
                if (ambientFramePending) return;
                ambientFramePending = true;
                window.requestAnimationFrame(updateAmbientCurves);
            };
            if (!reduceAmbientMotion) {
                document.addEventListener('pointermove', event => {
                    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
                    ambientPointerX = event.clientX / window.innerWidth - 0.5;
                    ambientPointerY = event.clientY / window.innerHeight - 0.5;
                    scheduleAmbientUpdate();
                }, { passive: true });
                window.addEventListener('scroll', scheduleAmbientUpdate, { passive: true });
                window.addEventListener('resize', scheduleAmbientUpdate);
                scheduleAmbientUpdate();
            }
        }

        // IntersectionObserver dual: Animaciones de sección recurrentes + Scrollspy activo
        document.addEventListener("DOMContentLoaded", () => {
            // 1. Fade-in-up persistente (entra y sale de pantalla)
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(element => {
                fadeObserver.observe(element);
            });

            // 2. Mantener sincronizado el estado activo del menú fijo y el desplegable.
            const sections = Array.from(document.querySelectorAll('section[id]'));
            const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link');
            let scrollTicking = false;

            const updateActiveNavigation = () => {
                const probe = window.scrollY + document.querySelector('.glass-nav > div').offsetHeight + window.innerHeight * 0.34;
                let activeId = sections[0]?.id;
                sections.forEach(section => {
                    if (section.offsetTop <= probe) activeId = section.id;
                });
                allNavLinks.forEach(link => {
                    const active = link.getAttribute('href') === `#${activeId}`;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'location');
                    else link.removeAttribute('aria-current');
                });
            };

            const scheduleNavigationUpdate = () => {
                if (scrollTicking) return;
                scrollTicking = true;
                window.requestAnimationFrame(() => {
                    updateActiveNavigation();
                    scrollTicking = false;
                });
            };

            window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
            window.addEventListener('resize', scheduleNavigationUpdate);
            updateActiveNavigation();

        });

