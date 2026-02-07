import { Skill } from "../../core/domain/skill-model.js";

const skillHtml = new Skill(
    1,
    'Html',
    '/assets/html-5.svg'
);

const skillCss = new Skill(
    2,
    'Css',
    '/assets/css-3.svg'
);

const skillJs = new Skill(
    3,
    'JavaScript',
    '/assets/javascript.svg'
);

const skillTailwind = new Skill(
    1,
    'Tailwind',
    '/assets/tailwind.svg'
);

export const skills = [
    skillHtml,
    skillCss,
    skillJs,
    skillTailwind
];