const projects = [
    { title: "Super Pokemon", description: "Mi primer proyecto web funcional, desarrollado como un juego interactivo inspirado en Super Mokepon. El enfoque principal fue la implementación de lógica de juego avanzada y ataques dinámicos en el campo de batalla. Actualmente, estoy en fase de refactorización activa, optimizando el código JS para mejorar la UX y solucionar bugs.", img: "./assets/pokemon.webp", demo: "https://omar-cdm.github.io/mini-juego-pokemon/", codigo: "https://github.com/Omar-cdm/mini-juego-pokemon" },
    { title: "Portafolio Personal", description: "Este mismo portafolio, en donde usé HTML, CSS y JavaScript, es un espacio donde comparto información sobre mí, mis conocimientos, mis proyectos y mi contacto para conectar con la comunidad del desarrollo web.", img: "./assets/portafolio-1.webp", demo: "https://omar-cdm.github.io/portafolio-web/", codigo: "https://github.com/Omar-cdm/portafolio-web/" },
];

const projectsElements = projects.map(project => elementArticle(project.title, project.description, project.img, project.demo, project.codigo));

export const newprojectsElements = projectsElements.join("");

export function elementHeroContainer() {
    return `
        <div class="hero__container">
            <div class="hero__image-container">
                <img class="hero__image" src="./assets/img-profile-3.webp">
            </div>
            <div class="hero__content">
                <p class="hero__text">Hola, soy</p>
                <h1 class="hero__title">Omar Rodriguez</h1>
                <p class="hero__description">Desarrollador web en formación, con mucho amor por la tecnologia y el software</p>            
                <button class="hero__button--click">Ver mis proyectos</button>
            </div>
        </div>
    `;
};

export function elementBlockquote() {
    return `
        <blockquote class="quote">
          <h2 class="quote__subtitle">"Nunca pares de aprender"</h2>
          <p class="quote__text">
            Esta frase muy sonada en la comunidad de Platzi, no solo me ha motivado tambien me ha enseñado a ser constante con el aprendizaje. Creando en mi el habito y la necesidad de siempre querer aprender temas nuevos acerca del desarro web.
          </p>
          <cite class="quote__author">— Platzi</cite>
        </blockquote>
    `;
};

export function elementLiValue(valueName, description) {
    return `
        <li class="values__item">
            <svg class="values__icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/></svg>
            <strong>${valueName}</strong>
            <span>${description}</span>
        </li>
    `;
};

export function elementSkill(title, classBar, percentage) {
    return `
        <div class="skill">
            <h4 class="skill__name">${title}</h4>
            <div class="skill__bar">
                <div class="${classBar}"></div>
            </div>
            <p><span class="skill__percentage">${percentage}</span>%</p>
        </div>
    `;
}

function elementArticle(title, description, img, demo, codigo) {
    return `
        <article class="project">
            <h2 class="project__title">${title}</h2>
            <p class="project__description">
              ${description}
            </p>

            <img class="project__image" src="${img}">

            <div class="project__technologies">
                <a class="project__technologies--demo" href="${demo}" target="_blank">
                    <svg class="technologies--icon-demo" viewBox="0 0 24 24" id="curve-arrow-right-9" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="secondary" d="M21.71,8.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,8H16.71a11.78,11.78,0,0,0-10.6,6.55,1,1,0,0,0,.44,1.34A.93.93,0,0,0,7,16a1,1,0,0,0,.89-.55A9.81,9.81,0,0,1,16.71,10h1.88l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,8.29Z"></path><path id="primary" d="M20,21H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3h8a1,1,0,0,1,0,2H4V19H20V16a1,1,0,0,1,2,0v3A2,2,0,0,1,20,21Z"></path></svg>

                    Demo
                </a>
                <a class="project__technologies--codigo" href="${codigo}" target="_blank">
                    <svg class="technologies--icon-codigo" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
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
        <form class="contact__form" action="https://formspree.io/f/mvzpbarl" method="POST">
            <label class="form__text-name" for="text">Nombre</label>
            <input class="form__input-text" type="text" name="nombre" id="text" required></input>
            <label class="form__text-email" for="email">Email</label>
            <input class="form__input-email" type="email" name="email" id="email" autocomplete="on" required></input>
            <label class="form__text-message" for="message">Mensaje</label>
            <textarea class="form__input-message" name="mensaje" id="message" rows="5" required></textarea>
            <div class="form__button-container">
                <button class="form__button" type="submit">Enviar</button>
            </div>
        </form>
    `;
};