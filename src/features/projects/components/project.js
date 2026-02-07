import { iconDemo, iconGitHub2 } from '/src/components/icons/icons-btn-projects.js';

export function elementArticle(title, img, demo, codigo) {
    return `
        <article class="w-5/6 p-2 bg-white/2 backdrop-blur-sm grid place-items-center border-1 border-b-2 border-green-400 rounded-xl lg:max-w-3/4 project">
            <div class="h-7 absolute -top-4 left-0 bg-green-400 text-black-bluish px-2 rounded-t-md rounded-tr-xl">
                <h2 class="text-center text-base font-semibold pr-1 lg:text-lg values__title">${title}</h2>
            </div>
            <p class="project__description">
            </p>

            <div class="w-46 h-26 mt-4 flex items-center sm:w-80 sm:h-46 lg:w-58 lg:h-36 project__container-image"><img class="project__image" src="${img}"></div>

            <div class="w-full px-1 flex gap-3 justify-end my-3 project__technologies">
                <a class="text-xs flex items-center gap-1 p-1 border-1 border-r-3 border-b-3 border-green-400 lg:text-sm project__technologies--demo" href="${demo}" target="_blank">
                    ${iconDemo()}
                    Demo
                </a>
                <a class="text-xs flex items-center p-1 gap-1 border-1 border-r-3 border-b-3 border-green-400 lg:text-sm project__technologies--codigo" href="${codigo}" target="_blank">
                    ${iconGitHub2()}
                    Codigo
                </a>
            </div>
        </article>
    `;
};