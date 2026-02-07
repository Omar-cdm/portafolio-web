import { Project } from "../../core/domain/project-model.js";

const profile = new Project(
    1,
    'Portafolio Personal',
    '/assets/portafolio-1.webp',
    'Aqui comparto infromación acerba de mi, mis proyectos de practica y mis habilidades. En este portafolio practique y aprendi sobre la arquitectura hexagonal para el frontend, separando distintas responsabilidades haciendo que el codigo se mas facil de entender y escalable.',
    'https://omar-cdm.github.io/portafolio-web/',
    'https://github.com/Omar-cdm/portafolio-web/'
);

const superPokemon = new Project(
    2,
    'Super Pokemon',
    '/assets/pokemon.webp',
    'Mi primer proyecto de practica, aqui comence a dar mis primeros pasos mientras aprendia, cabe destacar que este juego lo hice en base al jueo Super Mokepon de platzi, solo que con una logica mas personalizada de juego.',
    'https://omar-cdm.github.io/mini-juego-pokemon/',
    'https://github.com/Omar-cdm/mini-juego-pokemon/'
);

const AdivinaLaFrase = new Project(
    3,
    'Adivina La Frase',
    '/assets/Adivina_la_frase.webp',
    'Este pryecto de practica nace de una auto-propuesta, la cual constaba en que debia consumir la The Simpsons API trayendo objetos usando la interfaz (req) de el metodo FECTH en JavaScript, pero luego pensando decidi crear un mini-juego en el cual adivinaran la frase de su personaje favorito lo cual puso mas interesante el reto.',
    'https://omar-cdm.github.io/mini-juego-adivina-la-frase/',
    'https://github.com/Omar-cdm/mini-juego-adivina-la-frase/'
);

const heladosRone = new Project(
    4,
    'Helados Rone',
    '/assets/helados-rone.webp',
    'Esta es una pequeña pagina de aterrizaje o landing page, super sencilla en realidad es el principio de un proyecto con la finalidad de ser una app web para esta misma heladeria la cual es un emprendimiento de mi compañera sentimental. Otro proyecto de practica en el cual tengo como vision hacerlo una app web en el cual se puedan hacer pedidos en liena y mucho más.',
    'https://omar-cdm.github.io/helados-rony/',
    'https://github.com/Omar-cdm/helados-rony/'
);

export const myProjects = [
    profile,
    superPokemon,
    AdivinaLaFrase,
    heladosRone
];