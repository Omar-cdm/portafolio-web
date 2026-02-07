import { initHero } from "../../features/hero/index.js";
import { initProject } from "../../features/projects/index.js";
import { initContact } from "../../features/contact/index.js";

export function renderSection(section) {
    const main = document.querySelector('main');
    main.innerHTML = "";
    window.scrollTo(0,0);
    if (section == 'Inicio') {
        initHero()
    } else if (section == 'Proyectos') {
        initProject()
    } else {
        initContact()
    };
};