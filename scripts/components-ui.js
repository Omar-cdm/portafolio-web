const projects = [
    { title: "Super Pokemon", description: "Mi primer proyecto web funcional, desarrollado como un juego interactivo inspirado en Super Mokepon. El enfoque principal fue la implementación de lógica de juego avanzada y ataques dinámicos en el campo de batalla. Actualmente, estoy en fase de refactorización activa, optimizando el código JS para mejorar la UX y solucionar bugs.", img: "./assets/pokrmon-2.webp", technologies: "HTML5 CSS3 JavaScript" },
    { title: "Portafolio Personal", description: "Este mismo portafolio, en donde usé HTML, CSS y JavaScript, es un espacio donde comparto información sobre mí, mis conocimientos, mis proyectos y mi contacto para conectar con la comunidad del desarrollo web.", img: "./assets/portafolio-1.webp", technologies: "HTML5 CSS3 JavaScript" },
];

const projectsElements = projects.map(project => elementArticle(project.title, project.description, project.img, project.technologies));

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

function elementArticle(title, description, img, technologies) {
    return `
        <article class="project">
            <h2 class="project__title">${title}</h2>
            <p class="project__description">
              ${description}
            </p>

            <img class="project__image" src="${img}">

            <div class="project__technologies">
                <span class="tag">${technologies}</span>
            </div>
        </article>
    `;
};

export function elementFormContact() {
    return `
        <form class="contact__form" action="https://formspree.io/f/xdkqzykq" method="POST">
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