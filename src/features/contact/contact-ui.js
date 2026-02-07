import { form } from "./components/form.js";

export function contact() {
    return `
      <section class="p-4 sm:w-5/6 sm:p-8 contact">
        <div class="mt-2 mb-18 lg:mb-0 contact__container">
          <div class="h-10 bg-black-bluish text-black-bluish px-2 flex justify-center items-end relative border-b-1 border-green-400 rounded-t-xl">
              <h1 class="text-2xl text-white-green font-bold absolute -bottom-1 pl-1 lg:text-4xl sm:bottom-0 about__title">Contacto</h1>
              <div class="w-3/5 h-3 absolute -bottom-[12px] bg-black-bluish border-x-1 border-b-1 border-green-400 rounded-b-full"></div>
          </div>
          <p class="text-center p-4 my-2 lg:text-lg lg:mt-4 lg:mb-6 contact__description">
            Disponible para participar en proyectos de desarrollo web frontend y crear páginas web básicas.
          </p>
          <div class="grid place-items-center sm:m-4">
            ${form()}
          </div>
        </div>
      </section> 
    `;
};