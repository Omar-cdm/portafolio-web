const main = document.querySelector('.main');
const navList = document.querySelector('.nav__list');
const robot = document.querySelector('.robot');
const navLinks = document.querySelectorAll('.nav__link');
const buttomHamburger = document.querySelector('.header__hamburger');
const menuExit = document.querySelector('.menu__exit');
const menuNav = document.querySelector('.menu__nav');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.list__link')

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
    menuNav.style.opacity = '1';
    menuNav.style.top = '0px';
});

menuExit.addEventListener("click", () => {
    menuNav.style.top = '-100vh';
    menuNav.style.opacity = '0';
})

menuList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('list__link')) return;
    event.preventDefault();
    window.scrollTo(0, 0);

    try {
        robot.classList.toggle('robot__jump');
        main.innerHTML = "";
        renderSection(event.target.textContent);
        removeClass(menuLinks);
        event.target.classList.toggle('list__link--active');
        menuNav.style.opacity = '0';
        menuNav.style.top = '-100vh';
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
    const linkProject = document.querySelector(".hero__button--click");
    linkProject.addEventListener("click", () => {
        main.innerHTML = "";
        main.innerHTML = module.renderProjects();
        removeClass(menuLinks);
        removeClass(navLinks);
        menuLinks[1].classList.toggle('list__link--active');
        navLinks[1].classList.toggle('nav__link--active');
    });
});

function removeClass(elements) {
    elements.forEach(element => {
        if (element.classList.contains( 'nav__link--active')) {
            element.classList.remove('nav__link--active');   
        } else if (element.classList.contains( 'list__link--active')) {
            element.classList.remove('list__link--active');
        }
    });
};

function renderSection(sectionName) {
    import('./ui.js')
    .then(module => {
        switch (sectionName) {
            case 'Inicio':
                main.innerHTML = module.renderHero();
                const linkProject = document.querySelector(".hero__button--click");
                linkProject.addEventListener("click", () => {
                    main.innerHTML = "";
                    main.innerHTML = module.renderProjects();
                    removeClass(menuLinks);
                    removeClass(navLinks);
                    menuLinks[1].classList.toggle('list__link--active');
                    navLinks[1].classList.toggle('nav__link--active');
                });
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