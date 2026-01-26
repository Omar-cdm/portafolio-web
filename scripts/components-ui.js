const projects = [
    { title: "Super Pokemon", img: "./assets/pokemon.webp", demo: "https://omar-cdm.github.io/mini-juego-pokemon/", codigo: "https://github.com/Omar-cdm/mini-juego-pokemon" },
    { title: "Portafolio Personal", img: "./assets/portafolio-1.webp", demo: "https://omar-cdm.github.io/portafolio-web/", codigo: "https://github.com/Omar-cdm/portafolio-web/" }, { title: "Adivina La Frase", img: "./assets/Adivina_la_frase.webp", demo: "https://omar-cdm.github.io/mini-juego-adivina-la-frase/", codigo: "https://github.com/Omar-cdm/mini-juego-adivina-la-frase" },
];

const projectsElements = projects.map(project => elementArticle(project.title, project.img, project.demo, project.codigo));

export const newprojectsElements = projectsElements.join("");

export function header() {
    return `
        <header class="w-5/6 h-14 bg-white/2 backdrop-blur-sm sticky z-1 top-1 inset-x-1/12 flex justify-between items-center border-x-1 border-y-1 border-green-400 border-b-green-dark rounded-tl-xl rounded-br-xl px-4 py-2 animate-entrance header">

            <div class="w-12 h-1 absolute bottom-0 left-8 bg-green-dark"></div>
            <div class="w-14 h-1 absolute top-0 right-0 bg-green-400"></div>
            <div class="w-1 h-2 absolute top-0 right-0 bg-green-400"></div>

            <div class="flex items-center gap-1 header__logo">
                <h1 class="text-2xl font-extrabold">OmarDev</h1>
                <svg class="size-6 animate-effect-float transform-gpu  robot1" viewBox="0 -77.5 1179 1179" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M597.215632 994.574713h403.714943s43.549425-8.945287 43.549425-114.64092 94.16092-577.677241-459.976092-577.677241-457.151264 541.425287-457.151264 541.425287-25.423448 160.77977 54.848735 157.013333 415.014253-6.12046 415.014253-6.120459z" fill="#0B0C10" /><path d="M1071.786667 712.798161h72.503908v136.297931h-72.503908zM36.016552 712.798161h72.503908v136.297931H36.016552z" fill="#00d981" /><path d="M305.68366 559.40926l556.254412-1.165018 0.398364 190.20464-556.254412 1.165018-0.398364-190.20464Z" fill="#00d981" /><path d="M1129.931034 680.312644h-59.556781c-3.295632-152.069885-67.56046-258.942529-172.079081-324.384368l115.347127-238.462529a47.08046 47.08046 0 1 0-42.372414-20.48l-114.640919 236.57931a625.934713 625.934713 0 0 0-269.30023-53.200919 625.228506 625.228506 0 0 0-270.006437 54.848736l-115.817931-235.402299a47.08046 47.08046 0 1 0-42.372414 20.715402l117.701149 238.462529c-103.812414 65.441839-167.135632 173.02069-169.960459 324.61977H47.786667a47.08046 47.08046 0 0 0-47.08046 47.08046v117.701149a47.08046 47.08046 0 0 0 47.08046 47.08046h58.615172v57.908965a70.62069 70.62069 0 0 0 70.62069 70.62069l823.908046-1.647816a70.62069 70.62069 0 0 0 70.620689-70.62069v-57.908965h59.085977a47.08046 47.08046 0 0 0 47.08046-47.08046v-117.701149A47.08046 47.08046 0 0 0 1129.931034 680.312644zM94.16092 847.212874H47.08046v-117.70115h47.08046v117.70115z m929.83908 103.106206a23.54023 23.54023 0 0 1-23.54023 23.54023l-823.908046 1.647816a23.54023 23.54023 0 0 1-23.54023-23.540229v-258.942529c0-329.563218 303.668966-365.57977 434.788046-365.815173s435.494253 34.604138 436.20046 363.931954z m105.46023-105.224827h-47.08046v-117.70115h47.08046v117.70115z" fill="#00d981" /><path class="" d="M464.684138 135.827126l22.363218-19.53839 40.018391 62.381609a30.131494 30.131494 0 0 0 25.423448 13.888735h2.824828a30.131494 30.131494 0 0 0 25.188046-19.067586l20.715402-79.095172 21.186207 74.387126v2.118621a30.366897 30.366897 0 0 0 52.494713 6.826667l30.366896-57.202759 13.182529 12.947126a30.131494 30.131494 0 0 0 21.186207 8.709886h57.673563a23.54023 23.54023 0 0 0 23.54023-23.54023 23.54023 23.54023 0 0 0-23.54023-23.54023h-50.140689l-23.54023-23.54023a30.366897 30.366897 0 0 0-45.668046 3.766437l-21.42161 40.01839L629.465747 19.302989a30.131494 30.131494 0 0 0-28.012873-19.067587 30.131494 30.131494 0 0 0-28.012874 19.067587l-26.60046 101.693793-29.660689-47.08046a30.366897 30.366897 0 0 0-20.48-13.653333 30.837701 30.837701 0 0 0-23.54023 6.826666l-32.250115 28.248276h-60.027586a23.54023 23.54023 0 0 0-23.54023 23.54023 23.54023 23.54023 0 0 0 23.54023 23.54023h66.148046a31.308506 31.308506 0 0 0 17.655172-6.591265zM776.121379 532.950805H404.421149A121.232184 121.232184 0 0 0 282.482759 639.352644a117.701149 117.701149 0 0 0 117.701149 129.000459h371.70023a121.232184 121.232184 0 0 0 121.938391-106.401839 117.701149 117.701149 0 0 0-117.70115-129.000459z m0 188.321839H402.302529a72.503908 72.503908 0 0 1-72.268506-56.496552 70.62069 70.62069 0 0 1 68.972874-84.744828h373.81885a72.503908 72.503908 0 0 1 72.268506 56.496552 70.62069 70.62069 0 0 1-68.502069 84.744828z" /></svg>
            </div>

            <nav class="hidden header__nav">
                <ul class="flex gap-2 nav__list">
                    <li>
                        <a href="./" class="nav__link nav__link--active">Inicio</a>        
                    </li>
                    <li>
                        <a href="./" class="nav__link">Proyectos</a>
                    </li>
                    <li>
                        <a href="./" class="nav__link">Contacto</a>
                    </li>
                </ul>
            </nav>

            <button class="w-7 h-7 flex flex-col justify-center items-center gap-[4px] border-1 border-green-400 rounded-lg px-1 relative hover:cursor-pointer header__hamburger menu-exit" id="btn-menu" aria-haspopup="true" aria-expanded="false" aria-controls="menu-desplegable">
                
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                
                ${navbar()}
            </button>
        </header>
    `;
};

function navbar() {
    return `
        <nav class="w-27 hidden bg-black-bluish text-white-green p-2 rounded-md border-1 border-green-400 absolute -top-1 -right-1  menu__nav" id="menu-desplegable">
            <ul class="text-sm my-2 flex flex-col items-center gap-3 menu__list">
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 link">Inicio</a>        
                </li>
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 link">Proyectos</a>
                </li>
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 link">Contacto</a>
                </li>
            </ul>

            <div class="size-5 text-black-bluish bg-green-400 flex justify-center items-center rounded-tr-sm absolute top-0 right-0">X</div>

            <div class="size-3 absolute border-t-2 border-l-2 border-green-400 -top-1 -left-1 rounded-tl-md"></div>
            <div class="size-3 absolute border-t-2 border-r-2 border-green-400 -top-1 -right-1 rounded-tr-md"></div>
            <div class="size-3 absolute border-b-2 border-l-2 border-green-400 -bottom-1 -left-1 rounded-bl-lg"></div>
            <div class="size-3 absolute border-b-2 border-r-2 border-green-400 -bottom-1 -right-1 rounded-br-lg"></div>

        </nav>
    `;
};

export function elementHeroContainer() {
    return `
            <div class="w-full h-svh flex flex-col justify-center items-center gap-12 sm:col-span-1 sm:row-span-2 hero__container">
                <div class="w-1/2 h-50 relative border-1 border-green-400 hero__image-container sm:w-1/3 sm:h-1/3">
                    <div class="size-8 absolute -top-2 -left-2 border-t-1 border-l-1 border-green-400"></div>
                    <div class="size-8 absolute -top-2 -right-2 border-t-1 border-r-1 border-green-400"></div>
                    <div class="size-8 absolute -bottom-2 -left-2 border-b-1 border-l-1 border-green-400"></div>
                    <div class="size-8 absolute -bottom-2 -right-2 border-b-1 border-r-1 border-green-400"></div>

                    <img class="hero__image" src="./assets/img-profile.webp" fetchpriority="high" alt="Omar Rodriguez">
                </div>
                <div class="bg-white/2 backdrop-blur-sm flex flex-col justify-center p-4 border-y-2 border-green-400 rounded-tl-xl rounded-br-xl relative sm:w-5/6 sm:h-1/3  hero__content">
                    <div class="w-1/3 h-3 bg-green-400 rounded-b-md absolute top-0 left-6"></div>
                    <h1 class="w-full text-3xl text-end text-green-400 text-center font-bold py-1 mb-2 hero__title">Omar Rodriguez</h1>
                    <p class="pb-5 hero__description">Desarrollador web en formación, con mucho amor por la tecnologia y el software.</p>            
                    <button class="text-sm text-black-bluish font-semibold absolute bottom-0 right-8 bg-green-400 rounded-t-xl px-4 py-1 hover:cursor-pointer button-project">Proyectos</button>
                </div>
            </div>
    `;
};

export function elementBlockquote() {
    return `
        <blockquote class="bg-white/2 backdrop-blur-sm  px-4 py-2 mt-10 flex justify-center items-center border-1 border-green-400 sm:w-5/6 sm:h-1/3 sm:m-0 sm:mb-12">
            <div class="">
                <div class="size-10 absolute -top-1 -left-1 border-t-3 border-l-3 border-green-400"></div>
                <div class="size-10 absolute -top-1 -right-1 border-t-3 border-r-3 border-green-400"></div>
                <div class="size-10 absolute -bottom-1 -left-1 border-b-3 border-l-3 border-green-400"></div>
                <div class="size-10 absolute -bottom-1 -right-1 border-b-3 border-r-3 border-green-400"></div>
                <h2 class="text-center text-2xl font-extrabold my-2 sm:text-xl sm:my-2 quote__subtitle">¡NUNCA PARES DE APRENDER!</h2>

                <p class="text-center text-sm quote__text">
                    Esta frase muy sonada en la comunidad de Platzi, no solo me ha motivado tambien me ha enseñado a ser constante con el aprendizaje. Creando en mi el habito de siempre querer aprender.
                </p>
                
                <cite class="text-sm text-green-dark quote__author">— Platzi</cite>
            </div>
        </blockquote>
    `;
};

export function elementLiValue(valueName) {
    return `
        <li class="mb-3 values__item">
            <h4 class="font-semibold mb-1">${valueName}</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <div class="w-40 h-3 bg-green-400 mx-1"></div>
              <p class="text-green-dark">100%</p>
        </li>
    `;
};

export function elementSkill(img) {
    return `
        <div class="size-18 rounded-full grid place-items-center relative overflow-hidden sm:size-16">
            <div class="absolute bg-hacker-border inset-[-50%] animate-hacker-spin flex justify-center items-center skill">
            </div>
            <div class="size-16 bg-black-bluish rounded-full relative z-1 rotate-none grid place-items-center sm:size-14 skill__bar">
                <img src="${img}" class="size-10 sm:size-8"/>
            </div>
        </div>
    `;
}

function elementArticle(title, img, demo, codigo) {
    return `
        <article class="w-5/6 p-2 bg-white/2 backdrop-blur-sm border-1 border-b-2 border-green-400 rounded-xl sm:max-w-3/4 project">
            <div class="h-7 absolute -top-4 left-0 bg-green-400 text-black-bluish px-2 rounded-t-md rounded-tr-xl">
                <h2 class="text-center text-base font-semibold pr-1 values__title">${title}</h2>
            </div>
            <p class="project__description">
            </p>

            <div class="w-full grid place-items-center mt-4 project__container-image"><img class="w-5/6 project__image" src="${img}"></div>

            <div class="px-1 flex gap-3 justify-end my-3 project__technologies">
                <a class="text-xs flex items-center gap-1 p-1 border-1 border-r-3 border-b-3 border-green-400 project__technologies--demo" href="${demo}" target="_blank">
                    <svg class="size-4 fill-green-dark technologies--icon-demo" viewBox="0 0 24 24" id="curve-arrow-right-9" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="secondary" d="M21.71,8.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,8H16.71a11.78,11.78,0,0,0-10.6,6.55,1,1,0,0,0,.44,1.34A.93.93,0,0,0,7,16a1,1,0,0,0,.89-.55A9.81,9.81,0,0,1,16.71,10h1.88l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,8.29Z"></path><path id="primary" d="M20,21H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3h8a1,1,0,0,1,0,2H4V19H20V16a1,1,0,0,1,2,0v3A2,2,0,0,1,20,21Z"></path></svg>

                    Demo
                </a>
                <a class="text-xs flex items-center p-1 gap-1 border-1 border-r-3 border-b-3 border-green-400 project__technologies--codigo" href="${codigo}" target="_blank">
                    <svg class="size-4 fill-green-dark technologies--icon-codigo" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                    </svg>

                    Codigo
                </a>
            </div>
        </article>
    `;
};

export function elementFormContact() {
    return `
        <form class="w-5/6 flex bg-white/2 backdrop-blur-sm flex-col gap-2 p-4 rounded-md relative sm:w-3/5 contact__form" action="https://formspree.io/f/mvzpbarl" method="POST">
            <label class="form__text-name" for="text">Nombre</label>
            <input class="w-3/4 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:border-green-dark focus:bg-white/2 focus:backdrop-blur-sm form__input-text" type="text" name="nombre" id="text" required></input>
            <label class="p-1 form__text-email" for="email">Email</label>
            <input class="w-3/4 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:valid:border-green-dark focus:invalid:border-red-500 focus:bg-white/2 focus:backdrop-blur-sm form__input-email" type="email" name="email" id="email" autocomplete="on" required></input>
            <label class="form__text-message" for="message">Mensaje</label>
            <textarea class="w-5/6 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:border-green-dark focus:bg-white/2 focus:backdrop-blur-sm form__input-message" name="mensaje" id="message" rows="5" required></textarea>
            <div class="mt-4 flex justify-end px-2 form__button-container">
                <button class="text-sm w-24 h-8 border-1 border-b-4 border-r-4 border-green-400 hover:cursor-pointer form__button" type="submit">Enviar</button>
            </div>

            <div class="size-8 absolute border-t-2 border-l-2 border-green-400 -top-2 -left-2 rounded-tl-md"></div>
            <div class="size-8 absolute border-t-2 border-r-2 border-green-400 -top-2 -right-2 rounded-tr-md"></div>
            <div class="size-8 absolute border-b-2 border-l-2 border-green-400 -bottom-2 -left-2 rounded-bl-md"></div>
            <div class="size-8 absolute border-b-2 border-r-2 border-green-400 -bottom-2 -right-2 rounded-br-md"></div>

        </form>
    `;
};

export function footer() {
    return `
        <footer class="bg-white/2 backdrop-blur-sm px-6 py-8 mx-3 border-4 border-green-400 relative rounded-xl opacity-0 sm:mt-16 footer">
            <div class="sm:grid sm:place-items-center sm:grid-cols-3 footer__container">
                <div class="my-3 sm:h-full sm:m-0 footer__phone">
                    <h4 class="font-semibold footer__title">Teléfono</h4>
                    <p class="text-sm sm:h-9 sm:flex sm:items-end footer__text">+57 304 301 5421</p>
                </div>
                <div class="mb-3 sm:h-full sm:m-0 footer__phone">
                    <h4 class="font-semibold  footer__title">Gmail</h4>
                    <p class="text-sm sm:h-9 sm:flex sm:items-end footer__text">omardev332@gmail.com</p>
                </div>
                <div class="mb-3 footer__redes">
                    <h4 class="font-semibold mb-1 footer__title">Redes</h4>
                    <div class="flex gap-2">
                        <a href="https://www.instagram.com/omar_jr_05_02/" target="_blank" rel="noopener noreferrer">
                        <svg class="size-7 fill-green-dark hover:fill-green-400 footer__red" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                        </a>
                        <a href="https://github.com/Omar-cdm" target="_blank" rel="noopener noreferrer">
                            <svg class="size-7 fill-green-dark hover:fill-green-400 footer__red" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                        <a href="https://www.facebook.com/omar.j.rodriguez.12327" target="_blank" rel="noopener noreferrer">
                            <svg class="size-7 fill-green-dark hover:fill-green-400 footer__red"role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                        </a>
                    </div>
                </div>
                <div class="flex text-xs mb-1 sm:col-span-3 sm:w-full sm:gap-6 sm:mt-4 footer__credits">
                    <button popovertarget="info-privacidad" class="w-1/2 sm:text-end underline hover:cursor-pointer footer__credits-link">Política de Privacidad</button>

                    <div id="info-privacidad" popover class="footer__credits-dialog">
                        <h3 class="credits__dialog-title">Política de Privacidad</h3>
                        <p>
                        Uso <strong>Formspree</strong> para recibir tus correos. No guardo ni vendo tus datos.
                        Al usar el formulario de la sección contacto, aceptas este flujo de comunicación técnica con <strong>Formspree</strong>. 
                        </p>
                    </div>
                    <p class="w-1/2 footer__credits-text">© 2025 Hecho con ❤️</p>
                </div>
            </div>
            
            <div class=" h-2 bg-black-bluish absolute -top-1 inset-x-1/6 border-b-1 border-x-1 border-green-400 rounded-b-full"></div>
            <div class="h-2 bg-black-bluish absolute -bottom-1 inset-x-1/6 border-t-1 border-x-1 border-green-400 rounded-t-full"></div>
            <div class="w-2 bg-black-bluish absolute -left-1 inset-y-1/6 border-r-1 border-y-1 border-green-400 rounded-r-full"></div>
            <div class="w-2 bg-black-bluish absolute -right-1 inset-y-1/6 border-l-1 border-y-1 border-green-400 rounded-l-full"></div>

        </footer>
    `;
};
//
