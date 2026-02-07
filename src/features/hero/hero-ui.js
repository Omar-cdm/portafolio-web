import { info } from "./components/info.js";
import { value } from "./components/value.js";

export function home() {
    return `
      <section class="px-6 lg:grid lg:grid-cols-2 lg:place-items-center lg:w-5/6 lg:gap-x-10 lg:pb-8 lg:mb-6 hero">

        <div class="w-full h-svh flex flex-col justify-center items-center gap-12 lg:col-span-1 lg:row-span-2 hero__container">
            <div class="w-1/2 h-1/4 bg-white/2 backdop-blur-sm flex items-end relative border-1 border-green-400 sm:w-2/5 sm:h-1/3 hero__image-container">
                <span class="size-8 absolute -top-2 -left-2 border-t-1 border-l-1 border-green-400"></span>
                <span class="size-8 absolute -top-2 -right-2 border-t-1 border-r-1 border-green-400"></span>
                <span class="size-8 absolute -bottom-2 -left-2 border-b-1 border-l-1 border-green-400"></span>
                <span class="size-8 absolute -bottom-2 -right-2 border-b-1 border-r-1 border-green-400"></span>
                    
                <img class="object-fill hero__image" src="./assets/img-profile1.webp" fetchpriority="high" alt="Omar Rodriguez">
                    
            </div>
            <div class="w-full bg-white/2 backdrop-blur-sm flex flex-col justify-center p-4 border-y-2 border-green-400 rounded-tl-xl rounded-br-xl relative lg:w-5/6 lg:h-1/3  hero__content">
                <div class="w-1/3 h-3 bg-green-400 rounded-b-md absolute top-0 left-6"></div>
                    <h1 class="w-full text-3xl text-end text-green-400 text-center font-bold py-1 mb-2 sm:text-4xl hero__title">Omar Rodriguez</h1>
                    <p class="pb-5 sm:text-lg hero__description">Desarrollador web en formación, con mucho amor por la tecnología y el software.</p>            
                    <button class="text-sm text-black-bluish font-semibold absolute bottom-0 right-8 bg-green-400 rounded-t-xl px-4 py-1 sm:text-base hover:cursor-pointer button-project">Proyectos</button>
                </div>
            </div>
        </div>

        <div class="bg-white/2 backdrop-blur-sm border-1 border-r-2 border-green-400 px-6 py-2 rounded-bl-2xl rounded-tr-xl lg:w-5/6 relative">

            <span class="size-8 absolute z-1 -top-2 -left-2 border-t-1 border-l-1 border-green-400"></span>
            <span class="size-8 absolute -bottom-2 -right-2 border-b-1 border-r-1 border-green-400"></span>
            <span class="w-2 h-1/3 absolute z-1 bottom-2 -left-1 bg-green-400"></span>
            <span class="w-2 h-1/3 absolute z-1 top-2 -right-1 bg-green-400"></span>

            <div class="w-1/2 h-7 absolute top-0 left-0 bg-green-400 text-black-bluish px-2 rounded-br-md">
                <h1 class="text-lg font-bold pl-1 lg:text-xl about__title">Información</h1>
            </div>
            
            ${info()}

        </div>

        <div class="bg-white/2 backdrop-blur-sm border-1 border-l-2 border-green-400 px-6 py-2 my-18 rounded-br-2xl rounded-tl-xl relative lg:w-5/6 lg:h-full lg:m-0">

            <span class="size-8 absolute z-1 -top-2 -right-2 border-t-1 border-r-1 border-green-400"></span>
            <span class="size-8 absolute -bottom-2 -left-2 border-b-1 border-l-1 border-green-400"></span>
            <span class="w-2 h-1/3 absolute z-1 bottom-2 -right-1 bg-green-400"></span>
            <span class="w-2 h-1/3 absolute z-1 top-2 -left-1 bg-green-400"></span>

            <div class="w-1/2 h-7 absolute top-0 right-0 bg-green-400 text-black-bluish px-2 rounded-bl-md">
                <h2 class="text-end text-lg font-semibold pr-1 lg:text-xl values__title">Habilidades</h2>
            </div>
            
            ${value()}

        </div>
        
        <div class="lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:col-start-2 lg:row-start-1 sm:row-span-2">
            <blockquote class="bg-white/2 backdrop-blur-sm  px-4 py-2 mt-10 flex justify-center items-center border-1 border-green-400 lg:w-5/6 lg:h-1/3 lg:m-0 lg:mb-12">
                <div class="">
                    <span class="size-10 absolute -top-1 -left-1 border-t-3 border-l-3 border-green-400"></span>
                    <span class="size-10 absolute -top-1 -right-1 border-t-3 border-r-3 border-green-400"></span>
                    <span class="size-10 absolute -bottom-1 -left-1 border-b-3 border-l-3 border-green-400"></span>
                    <span class="size-10 absolute -bottom-1 -right-1 border-b-3 border-r-3 border-green-400"></span>
                    <h2 class="text-center text-2xl font-extrabold my-2 lg:text-xl lg:my-1 quote__subtitle">¡NUNCA PARES DE APRENDER!</h2>

                    <p class="text-center text-sm lg:text-base quote__text">
                        Esta frase muy sonada en la comunidad de Platzi no solo me ha motivado, también me ha enseñado a ser constante con el aprendizaje.
                    </p>
                    
                    <cite class="text-sm text-green-dark quote__author">— Platzi</cite>
                </div>
            </blockquote>
            <div class="w-full bg-white/2 backdrop-blur-sm px-4 py-6 my-18 flex justify-center items-center border-1 border-green-400 rounded-md relative lg:w-5/6 lg:h-1/3 lg:m-0 skills">
                <div class="h-7 absolute top-0 inset-x-1/4 bg-green-400 text-black-bluish px-2 rounded-b-lg">
                    <h1 class="text-lg text-center font-bold pl-1 lg:text-xl about__title">Herramientas</h1>
                </div>

                <div class="grid grid-cols-3 place-items-center gap-4 mt-6 mb-2 sm:grid-cols-4 skills-list"></div>

                <span class="h-2 absolute bottom-0 inset-x-1/4 bg-green-400 text-black-bluish px-2 rounded-t-md"></span>
                <span class="w-2 absolute left-0 inset-y-1/3 bg-green-400 text-black-bluish rounded-r-md"></span>
                <span class="w-2 absolute right-0 inset-y-1/3 bg-green-400 text-black-bluish rounded-l-md"></span>
            </div>
        </div>
      </section> 
    `;
};