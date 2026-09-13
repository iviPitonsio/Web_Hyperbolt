HYPERBOLT STUDIO - Web Portfolio
================================

Sitio web oficial de Hyperbolt Studio, un equipo de animación 
especializado en videoclips musicales y visualizers. La web es un
portfolio interactivo donde se muestran los trabajos del estudio, los
servicios ofrecidos y un formulario de contacto.

El proyecto está construido con Astro y estilizado con Tailwind CSS, con
animaciones de scroll creadas con GSAP y fundamentadas en un diseño oscuro
con partículas de fondo y transiciones fluidas entre páginas.

CARACTERÍSTICAS
---------------
- Página de inicio con reel de fondo a pantalla completa (video).
- Sección "About me": presentación del equipo.
- Portafolio de proyectos con videos integrados de YouTube (astro-embed).
- Demoreel con reproducción de video integrada.
- Página de servicios, incluyendo precio y tiempo estimado.
- Formulario de contacto funcional mediante Web3Forms.
- Animaciones de scroll (títulos, textos, tarjetas, botones) con GSAP y
  ScrollTrigger.
- Efecto de partículas flotantes en el fondo.
- Menú de navegación responsive con menú hamburguesa en móvil.
- Enlaces a redes sociales: YouTube, Instagram, TikTok y LinkedIn.

TECNOLOGÍAS
-----------
- Astro 7
- Tailwind CSS 4
- JavaScript
- GSAP (con ScrollTrigger) + SplitType
- astro-embed (YouTube)
- Web3Forms (contacto por email)

ESTRUCTURA DEL PROYECTO
-----------------------
/
├── public/               # Recursos estáticos (video reel, imágenes, gifs)
├── src/
│   ├── components/       # Componentes Astro (Header, Menu, Footer, etc.)
│   ├── layouts/          # Layout principal de la web
│   ├── pages/            # Páginas: index, about, works, services
│   ├── scripts/          # Lógica de animaciones (GSAP)
│   └── styles/           # Estilos globales
├── astro.config.mjs      # Configuración de Astro
└── package.json


CONFIGURACIÓN
-------------
La web necesita una variable de entorno para el formulario de contacto.
Crea un archivo .env en la raíz del proyecto con:

    PUBLIC_WEB3FORMS_KEY=tu_clave_de_web3forms

Para obtener una clave, regístrate en https://web3forms.com

LICENCIA
--------
© Hyperbolt Studio - Todos los derechos reservados.
