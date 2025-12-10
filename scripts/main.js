const main = document.querySelector('.main');
const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
const navLinks = document.querySelectorAll('.nav__link');
const buttomHamburger = document.querySelector('.header__hamburger');

let sectionIndex = 1;
let controller = 0;

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
    import('./ui.js')
        .then(module => {
            main.innerHTML = module.renderMenuNav();
            if (controller === 0) {
                main.innerHTML = module.renderMenuNav();
                controller = 1;
            } else {
                if (sectionIndex === 1) {
                    main.innerHTML = module.renderHero();
                }
                controller = 0;
            }
            import('./add-animations.js')
            .then(module => {
                module.animation();
            });
        });
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
        element.classList.remove('nav__link--active');
    });
};

function renderSection(sectionName) {
    import('./ui.js')
    .then(module => {
        switch (sectionName) {
            case 'Inicio':
                main.innerHTML = module.renderHero();
                break;
            case 'Proyectos':
                main.innerHTML = module.renderProjects();
                break;
            case 'Contacto':
                main.innerHTML = module.renderContact();
                const inputEmail = document.querySelector('.form__input-email');
                inputEmail.addEventListener("blur", () => {
                    inputEmail.classList.add('form__input--touched');
                });
                break;
        }
        import('./add-animations.js')
        .then(module => {
            module.animation();
        });
    });
};