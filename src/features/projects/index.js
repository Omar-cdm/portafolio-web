import { projects } from "./project-ui.js";
import { myProjects } from "../../infrastructure/data/projects-data.js";
import { elementArticle } from "./components/project.js";

export function initProject() {
    const main = document.querySelector('main');

    main.innerHTML = projects();
    renderContent();
};

function renderContent() {
    const projectsList = document.querySelector('.projects-list');
    const cardProject = myProjects.map(p => elementArticle(p.name, p.img, p.demo, p.github)).join('');


    projectsList.innerHTML = cardProject;
};