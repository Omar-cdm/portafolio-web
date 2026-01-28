import { elementHeroContainer, elementBlockquote, elementLiValue, elementSkill, newprojectsElements, elementFormContact } from './components-ui.js';

const values = [
    { name: "Dedicación", description: "Comprometido con mi aprendizaje diario" },
    { name: "Curiosidad", description: "Siempre explorando nuevas tecnologias." },
    { name: "Pro-actividad", description: "Aprendiendo y haciendo" },
    { name: "Creatividad", description: "Buscando soluciones innovadoras" }, 
];

const skills = [
    { img: "./assets/html-5.svg" },
    { img: "./assets/css-3.svg"  },
    { img: "./assets/javascript.svg" },
    { img: "./assets/tailwind.svg" },
];

const heroContainer = elementHeroContainer();
const blockquote = elementBlockquote();

const form = elementFormContact();

export function welcome() {
    return `
        <section class="w-full h-svh flex justify-center items-center section-welcome">
            <h1 class="text-green-400 sm:text-xl">@ThinkPad-T480<span class="text-white-green">:</span></h1>
            <p class="text-green-dark ml-1 sm:text-xl">~</p>
            <p class="mr-2 sm:text-xl sm:mr-3">$</p>
            <p class="sm:text-xl written-text-js"></p>  
        </section>
    `;
};

export function renderHero() {
    return `
      <section class="px-6 lg:grid lg:grid-cols-2 lg:place-items-center lg:w-5/6 lg:gap-x-10 lg:pb-8 lg:mb-6 hero">
        ${heroContainer}
        ${renderAboutMe()}  
        ${renderValues()}
        
        <div class="lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:col-start-2 lg:row-start-1 sm:row-span-2">
          ${blockquote}
          ${renderSkills()}
        <div>
      </section> 
    `;
}

function renderAboutMe() {
    return `
      <div class="bg-white/2 backdrop-blur-sm border-1 border-r-2 border-green-400 px-6 py-2 rounded-bl-2xl rounded-tr-xl lg:w-5/6 relative">
        <div class="size-8 absolute z-1 -top-2 -left-2 border-t-1 border-l-1 border-green-400"></div>
        <div class="size-8 absolute -bottom-2 -right-2 border-b-1 border-r-1 border-green-400"></div>
        <div class="w-2 h-1/3 absolute z-1 bottom-2 -left-1 bg-green-400"></div>
        <div class="w-2 h-1/3 absolute z-1 top-2 -right-1 bg-green-400"></div>

        <div class="w-1/2 h-7 absolute top-0 left-0 bg-green-400 text-black-bluish px-2 rounded-br-md">
          <h1 class="text-lg font-bold pl-1 about__title">Información</h1>
        </div>
        

        <ul class="mt-8 about__intro center">
          <li class="mb-2">
            <h4 class="font-semibold">Nombre</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <p class="text-sm ml-1">Omar Junior Rodríguez Pérez</p>
            </div>
          </li>
          <li class="mb-2">
            <h4 class="font-semibold">Edad</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <p class="text-sm ml-1">23 Años</p>
            </div>
          </li>
          <li class="mb-2">
            <h4 class="font-semibold">Ubicación</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <p class="text-sm ml-1">Barranquilla-Colombia</p>
            </div>
          </li>
          <li class="mb-2">
            <h4 class="font-semibold">Ocupación</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <p class="text-sm ml-1">Estudiante Autodidacta</p>
            </div>
          </li>
          <li class="mb-2">
            <h4 class="font-semibold">Enfoque</h4>
            <div class="ml-2 flex items-center">
              <img src="./assets/arrow-2.svg" class="size-2"/>
              <p class="text-sm ml-1">Desarrollo Web Frontend</p>
            </div>
          </li>
        </ul>
      </div>
    `;
};

function renderValues() {
    const valuesElements = values.map(value => elementLiValue(value.name));
    const newValuesElements = valuesElements.join("");

    return `
      <div class="bg-white/2 backdrop-blur-sm border-1 border-l-2 border-green-400 px-6 py-2 my-18 rounded-br-2xl rounded-tl-xl relative lg:w-5/6 lg:m-0">
        <div class="size-8 absolute z-1 -top-2 -right-2 border-t-1 border-r-1 border-green-400"></div>
        <div class="size-8 absolute -bottom-2 -left-2 border-b-1 border-l-1 border-green-400"></div>
        <div class="w-2 h-1/3 absolute z-1 bottom-2 -right-1 bg-green-400"></div>
        <div class="w-2 h-1/3 absolute z-1 top-2 -left-1 bg-green-400"></div>

        <div class="w-1/2 h-7 absolute top-0 right-0 bg-green-400 text-black-bluish px-2 rounded-bl-md">
          <h2 class="text-end text-lg font-semibold pr-1 values__title">Habilidades</h2>
        </div>
        <ul class="mt-8 values__list">
          ${newValuesElements}
        </ul>
      </div>
    `;
};

function renderSkills() {
    const skillsElements = skills.map(skill => elementSkill(skill.img));
    const newSkillsElements = skillsElements.join("");

    return `
      <div class="w-full bg-white/2 backdrop-blur-sm px-4 py-6 my-18 flex justify-center items-center border-1 border-green-400 rounded-md relative lg:w-5/6 lg:h-1/3 lg:m-0 skills">
        <div class="h-7 absolute top-0 inset-x-1/4 bg-green-400 text-black-bluish px-2 rounded-b-lg">
          <h1 class="text-lg text-center font-bold pl-1 about__title">Herramientas</h1>
        </div>

        <div class="grid grid-cols-3 place-items-center gap-4 mt-6 mb-2 sm:grid-cols-4 skills__list">
          ${newSkillsElements}
        </div>

        <div class="h-2 absolute bottom-0 inset-x-1/4 bg-green-400 text-black-bluish px-2 rounded-t-md"></div>
        <div class="w-2 absolute left-0 inset-y-1/3 bg-green-400 text-black-bluish rounded-r-md"></div>
        <div class="w-2 absolute right-0 inset-y-1/3 bg-green-400 text-black-bluish rounded-l-md"></div>

      </div>
    `;
};

export function renderProjects() {
    return `
        <section class="p-4 sm:w-5/6 sm:p-8 proyects">
          <div class="mt-2 mb-18 sm:mb-0">
            <div class="h-10 bg-black-bluish text-black-bluish px-2 flex justify-center items-end relative border-b-1 border-green-400 rounded-t-xl">
              <h1 class="text-2xl text-white-green font-bold absolute -bottom-1 pl-1 lg:text-4xl lg:bottom-0 about__title">Proyectos de Práctica</h1>
              <div class="w-5/6 h-3 absolute -bottom-[12px] bg-black-bluish border-x-1 border-b-1 border-green-400 rounded-b-full"></div>
            </div>
            <p class="text-center p-4 mt-2 sm:mt-4 mb-6 projects__description">
              Cada proyecto representa el progreso de mi aprendizaje, implementando conceptos aprendidos, ya que siempre busco hacer código de calidad y fácil de mantener.
            </p>
            <div class="p-2 m-4 grid grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2 lg:gap-y-14 lg:gap-x-0 projects__grid">
              ${newprojectsElements}
            </div>
          </div>
        </section> 
    `;
}

export function renderContact() {
    return `
      <section class="p-4 sm:w-5/6 sm:p-8 contact">
        <div class="mt-2 mb-18 lg:mb-0 contact__container">
          <div class="h-10 bg-black-bluish text-black-bluish px-2 flex justify-center items-end relative border-b-1 border-green-400 rounded-t-xl">
              <h1 class="text-2xl text-white-green font-bold absolute -bottom-1 pl-1 lg:text-4xl sm:bottom-0 about__title">Contacto</h1>
              <div class="w-3/5 h-3 absolute -bottom-[12px] bg-black-bluish border-x-1 border-b-1 border-green-400 rounded-b-full"></div>
          </div>
          <p class="text-center p-4 my-2 lg:mt-4 lg:mb-6 contact__description">
            Disponible para participar en proyectos de desarrollo web frontend y crear páginas web básicas.
          </p>
          <div class="grid place-items-center sm:m-4">
            ${form}
          </div>
        </div>
      </section> 
    `;
};