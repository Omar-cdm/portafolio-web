import { renderHero, renderProjects, renderContact } from './ui.js';
import { animation } from './add-animations.js';

const main = document.querySelector('.main');

const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
robot.addEventListener("animationend", () => {
    robot.classList.remove('robot__jump');
});
const navLinks = document.querySelectorAll('.nav__link');

navList.addEventListener('click', (event) => {
    if (event.target.className == 'nav__list') return;
    event.preventDefault();
    main.innerHTML = "";
    removeClass(navLinks);
    addClass(event)
    window.scrollTo(0, 0);
    robot.classList.toggle('robot__jump');

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
    animation()
})  
main.appendChild(renderHero());

function removeClass(elements) {
    elements.forEach(element => {
        element.classList.remove('nav__link--active');
    });
}

function addClass(event) {
    if (event.target.className === 'nav__list') {
        event.target.classList.toggle('nav__link--active');
    }
}

animation();