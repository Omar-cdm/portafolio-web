import { elementHeroContainer, elementBlockquote, elementLiValue, elementSkill, elementArticle, elementFormContact } from './components-ui.js';

const values = [
    { name: "Dedicación", description: "Comprometido con mi aprendizaje diario" },
    { name: "Curiosidad", description: "Siempre explorando nuevas tecnologias." },
    { name: "Comunidad", description: "Aprendiendo y compartiendo" },
    { name: "Creatividad", description: "Buscando soluciones innovadoras" }, 
];

const skills = [
    { title: "HTML5", class: "skill__progress skill__progress--html", percentage: "80" },
    { title: "CSS3", class: "skill__progress skill__progress--css", percentage: "70" },
    { title: "JavaScript", class: "skill__progress skill__progress--js", percentage: "50" },
    { title: "Python", class: "skill__progress skill__progress--python", percentage: "30" }, 
];

const projects = [
    { title: "Super Pokemon", description: "Mi primer proyecto desarrollado localmente usando HTML, CSS y JavaScript. Un juego sencillo basado en el juego Super Mokepon del curso de programación basica de Platzi. Con una logica mejorada y ataques dinamicos en el campo de batalla, brindando una experiencia entretenida y divertida.", img: "./assets/pokrmon-2.webp", technologies: "HTML5 CSS3 JavaScript" },
    { title: "Portafolio Personal", description: "Este mismo portfolio en donde use HTML, CSS y un poco de JavaScript, en el cual comparto sobre mi, mis conocimientos, mis proyectos y mi contacto para conectar con la comunidad y el ambiente del desarrollo web.", img: "./assets/portafolio.webp", technologies: "HTML5 CSS3 JavaScript" },
    { title: "Free Math", description: "Una apk hecha con MIT App Inventor, con bloques de codigo una forma de hacer apk para Android e IOS sin escribir codigo solo pero aplicando la logica necesaria para el buen funcionamiento de la apk. Free Math es una apk pensada facilitar el calculo de angulos y longitud de lados de un triangulo implementando formulas trigonometricas.", img: "./assets/pokemon3.webp", technologies: "MIT App Inventor" },
];

const heroContainer = elementHeroContainer();
const blockquote = elementBlockquote();

const form = elementFormContact();  

export function renderHero() {
    const valuesElements = values.map(value => elementLiValue(value.name, value.description));
    const newValuesElements = valuesElements.join("");

    const skillsElements = skills.map(skill => elementSkill(skill.title, skill.class, skill.percentage));
    const newSkillsElements = skillsElements.join("");
    
    return `
      <section class="hero">
        ${heroContainer}
        <div class="about__container">
          <h1 class="about__title">Sobre mi</h1>

          <p class="about__intro">
            Mi nombre es Omar Junior Rodriguez Perez, tengo 23 y soy de Barranquilla-Colombia. Actualmente estoy formandome como <strong>Desarrollador web</strong> de forma autodidacta.
          </p>

          <p class="about__intro">
            Soy un joven apasionado por la tecnologia, me gusta aprender temas de desarrollo web y bunas practicas. Ademas del <strong>Desarrollo Web</strong> tambien me gusta aprender de <strong>Linux</strong> en tiempos libres, me considero una persona que ama a Linux y el software Open Source.
          </p>
          ${blockquote}
          <div class="values">
            <h2 class="values__title">Mis valores</h2>
            <ul class="values__list">
              ${newValuesElements}
            </ul>
          </div>
          <div class="skills">
            <h2 class="skills__subtitle">Tecnologias que estoy aprendiendo</h2>

            <div class="skills__list">
              ${newSkillsElements}
            </div>
          </div>
        </div>
      </section> 
    `;
}

export function renderProjects() {
    const projectsElements = projects.map(project => elementArticle(project.title, project.description, project.img, project.technologies));
    const newprojectsElements = projectsElements.join("");
  
    return `
      <section class="proyects">
        <div class="projects__container">
          <h1 class="projects__title">Mis Proyectos de Práctica</h1>
          <p class="projects__description">
            Cada proyecto representa el progreso de mi aprendizaje, implementando conceptos aprendidos y buenas practicas aprendidas, ya que siempre busco hacer codigo de calidad y facil de mantener.
          </p>
          <div class="projects__grid">
            ${newprojectsElements}
          </div>
        </div>
      </section> 
    `;
}

export function renderContact() {
    return `
      <section class="contact">
        <div class="contact__container">
          <h1 class="contact__title">¿Te gustaría conectar?</h1>
          <p class="contact__description">
            Siempre estoy buscando aprender de otros desarrolladores,
            compartir experiencias y tal vez colaborar en proyectos
            interesantes.
          </p>
          ${form}
        </div>
      </section> 
    `;
}

export function renderMenuNav() {
    return `
      <section class="menu">
        <nav class="menu__nav">
            <ul class="menu__list">
                <li>
                    <a href="./" class="list__link">Inicio</a>        
                </li>
                <li>
                    <a href="./" class="list__link">Proyectos</a>
                </li>
                <li>
                    <a href="./" class="list__link">Contacto</a>
                </li>
            </ul>
        </nav>
      </section>
    `
}