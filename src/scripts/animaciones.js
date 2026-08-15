import SplitType from "split-type";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ejecutarAnimacion() { // Funcion que ejecuta las animaciones cada vez que entramos en la pagina
    
    function getTriggerConfig(el) { // Determinamos el tipo de trigger del elemento
        const triggerType = el.dataset.trigger; // 'immediate' | 'scroll'

        if (triggerType === 'immediate') {
            return {
                trigger: el,
                start: "top 100%", // se dispara nada mas asomar al viewport
            };
        }
        return {
            trigger: el,
            start: "top 95%", // tarda mas, hay que scrollear más para verlo
        };
    }

    const titleText = document.querySelectorAll('.anim-title'); // Aplicamos a los titulos con esa etiqueta la siguiente animacion
    titleText.forEach((el) => {
        let textInstance = new SplitType(el); // Dividimos en caracteres los titulos y los hacemos invisibles al comienzo
        if (textInstance) textInstance.revert();
        textInstance = new SplitType(el);

        gsap.set(el, { visibility: 'visible' });

        // Animación del texto
        gsap.from(textInstance.chars, { // Bloque para el titulo
        y: '100%',
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
        ease: 'power2.out',
        autoAlpha: 0,

        scrollTrigger: getTriggerConfig(el)
    });
    });

    const projectCards = document.querySelectorAll('.anim-project-card');
    projectCards.forEach((card) => {
        gsap.fromTo(card, { // Bloque para el contenido
        x: '-200%'
        },
        {
        x:0,
        delay: 1.0,
        duration: 1.5,
        ease: 'power2.out',
        autoAlpha: 1,
        clearProps: 'transform',
        scrollTrigger: getTriggerConfig(card)
    });
    });

    const colorBars = document.querySelectorAll('.anim-color-bar'); 
    colorBars.forEach((bar) => {
        gsap.from(bar, { // Bloque para la linea de color
        y: '100%',
        delay: 1.0,
        duration: 1.0,
        autoAlpha: 0,
        scrollTrigger: getTriggerConfig(bar)
        });
    });

    const texts = document.querySelectorAll('.anim-texts');
    texts.forEach((texts) => {
    gsap.from(texts, { // Bloque de los parrafos
        y: '100%',
        delay: 0.8,
        duration: 1.0,
        ease: 'power2.out',
        autoAlpha: 0,
        scrollTrigger: getTriggerConfig(texts)
        });
    });

    const buttons = document.querySelectorAll('.anim-button');
    buttons.forEach((but) => {
    gsap.to(but, { // Bloque de los botones
        y: '-50%',
        delay: 1.2,
        autoAlpha: 1,
        ease: 'power2.out',
        scrollTrigger: getTriggerConfig(but)
        });
    });

    const form = document.querySelectorAll('.anim-form');
    form.forEach((form) => {
    gsap.fromTo(form, { // Bloque del formulario
        x: '-300%'
        },
        {
        x:0,
        delay: 2.0,
        duration: 1.5,
        ease: 'power2.out',
        autoAlpha: 1,
        clearProps: 'transform',
        scrollTrigger: getTriggerConfig(form)
        });
    });
        ScrollTrigger.refresh();
    }

    document.addEventListener('astro:page-load', ejecutarAnimacion);

    document.addEventListener('astro:before-swap', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Limpiamos elementos sueltos y ejecutamos la animacion cada vez que cargue la pagina
    });