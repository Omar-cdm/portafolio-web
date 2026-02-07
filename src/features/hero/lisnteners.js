import { renderSection } from "../../infrastructure/router/router.js";

export function activeBtnProject() {
    const btnProject = document.querySelector('.button-project');

    btnProject.addEventListener('click', () => {
        renderSection('Proyectos')
    });
};