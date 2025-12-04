import { renderHero, renderProjects, renderContact } from './ui.js';
import { animation } from './add-animations.js';

const main = document.querySelector('.main');
const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
const navLinks = document.querySelectorAll('.nav__link');

robot.addEventListener("animationend", () => {
    robot.classList.remove('robot__jump');
});


navList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('nav__link')) return;
    window.scrollTo(0, 0);
    event.preventDefault();

    try {
        robot.classList.toggle('robot__jump');
        main.innerHTML = "";
        removeClass(navLinks);
        event.target.classList.toggle('nav__link--active');

        renderSection(event.target.textContent);
        animation();
    } catch(error) { 
        console.error("Ocurrio un error al renderizar la sección seleccionada", error.message);
    }
    
}); 

renderSection('Inicio')
animation();

function removeClass(elements) {
    elements.forEach(element => {
        element.classList.remove('nav__link--active');
    });
};

function renderSection(sectionName) {
    switch (sectionName) {
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
            });
            break;
    };
};