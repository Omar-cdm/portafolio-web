import { renderHero, renderProjects, renderContact } from './ui.js';
import { animationLeft } from './add-animations.js';

const main = document.querySelector('.main');

const navList = document.querySelector('.nav__list');
let navLinks = document.querySelectorAll('.nav__link');
console.log(navLinks)
navList.addEventListener('click', (event) => {
    if (event.target.className == 'nav__list') return;
    event.preventDefault();
    main.innerHTML = "";
    removeClass(navLinks);
    addClass(event)
    window.scrollTo(0, 0);

    
    switch (event.target.textContent) {
        case 'Inicio':
            main.appendChild(renderHero());
            break;
        case 'Proyectos':
            main.appendChild(renderProjects());
            break;
        case 'Contacto':
            main.appendChild(renderContact());
            const inputEmail = document.querySelector('.form__input-email');
            inputEmail.addEventListener("blur", () => {
                inputEmail.classList.add('form__input--touched');
                console.log(inputEmail);
            });
            break;
    }
    animationLeft()
})  
main.appendChild(renderHero());

function removeClass(elements) {
    elements.forEach(element => {
        element.classList.remove('nav__link--active');
    });
}

function addClass(event) {
    if (event.target.className != 'nav__list') {
        event.target.classList.toggle('nav__link--active');
    }
}

animationLeft();