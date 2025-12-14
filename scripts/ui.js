import { elementHeroContainer, elementBlockquote, elementLiValue, elementSkill, newprojectsElements, elementFormContact } from './components-ui.js';

const values = [
    { name: "Dedicación", description: "Comprometido con mi aprendizaje diario" },
    { name: "Curiosidad", description: "Siempre explorando nuevas tecnologias." },
    { name: "Pro-activo", description: "Aprendiendo y haciendo" },
    { name: "Creatividad", description: "Buscando soluciones innovadoras" }, 
];

const skills = [
    { title: "HTML5", class: "skill__progress skill__progress--html", percentage: "80" },
    { title: "CSS3", class: "skill__progress skill__progress--css", percentage: "70" },
    { title: "JavaScript", class: "skill__progress skill__progress--js", percentage: "50" },
    { title: "Python", class: "skill__progress skill__progress--python", percentage: "30" }, 
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

          <p class="about__intro center">
            Hola, soy Omar Junior Rodríguez Pérez, un aprendiz de Desarrollo Web autodidacta de 23 años, residente en Barramquilla, Colombia.
          </p>

          <p class="about__intro">
            Soy un joven apasionado por la tecnología y enfocado en el desarrollo frontend. Busco constantemente oportunidades para aprender de otros desarrolladores, compartir conocimientos y colaborar en proyectos.
          </p>

          <p class="about__intro">
            Actualmente, me especializo en crear soluciones web sencillas y de alto impacto, como el diseño e implementación de landing pages rápidas para negocios. Estas páginas incluyen una clara llamada a la acción mediante un botón de contacto directo a WhatsApp para generar resultados inmediatos.
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
          <h1 class="contact__title">Contactame</h1>
          <p class="contact__description">
            Si en tu proyecto de desarrollo frontend necesitas un par de manos extra, estoy listo para participar. También me encargo de crear landing pages sencillas y optimizadas para pequeños comerciantes.
          </p>
          ${form}
        </div>
      </section> 
    `;
}