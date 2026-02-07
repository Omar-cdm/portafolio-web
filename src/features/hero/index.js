import { home } from "./hero-ui.js";
import { activeBtnProject } from './lisnteners.js';
import { skills } from "../../infrastructure/data/skills-data.js";
import { skill } from "./components/skill.js";

export function initHero() {
    const main = document.querySelector('main');

    main.innerHTML = home();
    renderContent();
    activeBtnProject();
};

function renderContent() {
    const skillsList = document.querySelector('.skills-list');
    const cardSkills = skills.map(s => skill(s.img)).join('');


    skillsList.innerHTML = cardSkills;
};