const main = document.querySelector('.main');
const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
const navLinks = document.querySelectorAll('.nav__link');
const buttomHamburger = document.querySelector('.header__hamburger');
const menuNav = document.querySelector('.menu__nav');
const menuList = document.querySelector('.menu__list');

let sectionIndex = 1;
let controllerClick = 0;

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
    } catch(error) { 
        console.error("Ocurrio un error al renderizar la sección seleccionada", error.message);
    };
});

buttomHamburger.addEventListener("click", () => {
    if (controllerClick === 0) {
        controllerClick = 1;
        menuNav.style.opacity = '1';
        menuNav.style.top = '0px';
    } else {
        controllerClick = 0;
        menuNav.style.top = '-80vh';
        menuNav.style.opacity = '0';
    };
});

menuList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('list__link')) return;
    event.preventDefault();

    try {
        robot.classList.toggle('robot__jump');
        main.innerHTML = "";
        renderSection(event.target.textContent);
        menuNav.style.opacity = '0';
        menuNav.style.top = '-80vh';
    } catch(error) { 
        console.error("Ocurrio un error al renderizar la sección seleccionada", error.message);
    }
});

import('./ui.js')
.then(module => {
    main.innerHTML = module.renderHero('Inicio');
    import('./add-animations.js')
    .then(module => {
        module.animation();
    });
});

function removeClass(elements) {
    elements.forEach(element => {
        if (element.classList.contains( 'nav__link--active')) {
            element.classList.remove('nav__link--active');   
        }
    });
};

function renderSection(sectionName) {
    controllerClick = 0;
    import('./ui.js')
    .then(module => {
        switch (sectionName) {
            case 'Inicio':
                main.innerHTML = module.renderHero();
                sectionIndex = 1;
                break;
            case 'Proyectos':
                main.innerHTML = module.renderProjects();
                sectionIndex = 2;
                break;
            case 'Contacto':
                main.innerHTML = module.renderContact();
                const inputEmail = document.querySelector('.form__input-email');
                inputEmail.addEventListener("blur", () => {
                    inputEmail.classList.add('form__input--touched');
                });
                sectionIndex = 3;
                break;
        }
        import('./add-animations.js')
        .then(module => {
            module.animation();
        });
    });
};