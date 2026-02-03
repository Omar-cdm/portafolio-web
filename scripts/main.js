import { welcome,renderHero, renderProjects, renderContact } from './ui.js';
import { header, footer } from './components-ui.js';
import { animation } from './add-animations.js';

const root = document.querySelector('#root');

renderLayout();

const main = document.querySelector('main');
const links = document.querySelectorAll('.link');
const btnMenu = document.querySelector('#btn-menu');
const menuDesplegable = document.querySelector('#menu-desplegable');

writeText()
animation()

document.addEventListener('click', (e) => {
  if (!btnMenu.contains(e.target) && !btnMenu.contains(e.target)) {
    menuDesplegable.classList.add('hidden');
    btnMenu.setAttribute('aria-expanded', 'false');
  }
});

btnMenu.addEventListener('click', () => {
    const expandir = btnMenu.getAttribute('aria-expanded') === 'true';
    btnMenu.setAttribute('aria-expanded', !expandir);
    menuDesplegable.classList.toggle('hidden');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        renderSection(e.target.innerText)
    })
});

function renderLayout() {
    root.innerHTML =  `
        ${header()}
        <main class="flex justify-center">
            ${welcome()}
        </main>
        ${footer()}
    `;
};

function writeText() {
    const writtenText = document.querySelector('.written-text-js');
    let text = 'cat ./profile/index.html';
    let count = 0

    let nInterval = setInterval(() => {
        if(count <= (text.length - 1)) {
            setTimeout(() => {
                writtenText.innerHTML += text.charAt(count);
                count++
            }, 140);
        } else {
            clearInterval(nInterval);
            setTimeout(() => {
                renderSection('Inicio');
                //activeBtnProject();   
            }, 400);
        }
    }, 140);
};

function renderSection(section) {
    main.innerHTML = "";
    window.scrollTo(0,0);
    if (section == 'Inicio') {
        main.innerHTML = renderHero();
        activeBtnProject();
    } else if (section == 'Proyectos') {
        main.innerHTML = renderProjects();
    } else {
        main.innerHTML = renderContact();
    };
};

function activeBtnProject() {
    const btnProject = document.querySelector('.button-project');

    btnProject.addEventListener('click', () => {
        renderSection('Proyectos')
    });
};