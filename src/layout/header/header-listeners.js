import { renderSection } from "../../infrastructure/router/router.js";

export function listenerBtnMenu() {
    const btnMenu = document.querySelector('#btn-menu');
    const menuDesplegable = document.querySelector('#menu-desplegable');

    console.log(btnMenu);

    btnMenu.addEventListener('click', () => {
        console.log('hola')
        const expandir = btnMenu.getAttribute('aria-expanded') === 'true';
        btnMenu.setAttribute('aria-expanded', !expandir);
        menuDesplegable.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !btnMenu.contains(e.target)) {
            menuDesplegable.classList.add('hidden');
            btnMenu.setAttribute('aria-expanded', 'false');
        }
    })
};

export function listenersLinks() {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            renderSection(e.target.innerText)
        })
    });
};