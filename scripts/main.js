const main = document.querySelector('.main');
const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
const navLinks = document.querySelectorAll('.nav__link');
const buttomHamburger = document.querySelector('.header__hamburger');
const footer = document.querySelector('.footer__container');

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
    footer.style.display = 'none';
    import('./ui.js')
        .then(module => {
            if (controllerClick === 0) {
                controllerClick = 1;
                main.innerHTML = module.renderMenuNav();
                let section = document.querySelector('.menu');
                section.style.display = 'grid';
                const menuList = document.querySelector('.menu__list');
                menuList.addEventListener('click', (event) => {
                    if (!event.target.classList.contains('list__link')) return;
                    event.preventDefault();

                    try {
                        robot.classList.toggle('robot__jump');
                        main.innerHTML = "";
                        renderSection(event.target.textContent);
                        controllerClick = 0;
                    } catch(error) { 
                        console.error("Ocurrio un error al renderizar la sección seleccionada", error.message);
                    };
                });
            } else {
                footer.style.display = 'flex';
                controllerClick = 0;
                if (sectionIndex === 1) {
                    main.innerHTML = module.renderHero();
                } else if (sectionIndex == 2) {
                    main.innerHTML = module.renderProjects();
                } else if (sectionIndex === 3) {
                    main.innerHTML = module.renderContact();
                };
            };
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
        if (element.classList.contains( 'nav__link--active')) {
            element.classList.remove('nav__link--active');   
        } else if (element.classList.contains('list__link--active')) {
            element.classList.remove('list__link--active');
        }
    });
};

function renderSection(sectionName) {
    footer.style.display = 'flex';
    controllerClick = 1;
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