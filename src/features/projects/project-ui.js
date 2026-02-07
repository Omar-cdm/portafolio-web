export function projects() {
    return `
        <section class="p-4 sm:w-5/6 sm:p-8 proyects">
          <div class="mt-2 mb-18 sm:mb-0">
            <div class="h-10 bg-black-bluish text-black-bluish px-2 flex justify-center items-end relative border-b-1 border-green-400 rounded-t-xl">
              <h1 class="text-2xl text-white-green font-bold absolute -bottom-1 pl-1 lg:text-4xl lg:bottom-0 about__title">Proyectos de Práctica</h1>
              <div class="w-5/6 h-3 absolute -bottom-[12px] bg-black-bluish border-x-1 border-b-1 border-green-400 rounded-b-full"></div>
            </div>
            <p class="text-center p-4 mt-2 mb-6 sm:mt-4 lg:text-lg projects__description">
              Cada proyecto representa el progreso de mi aprendizaje, implementando conceptos aprendidos, ya que siempre busco hacer código de calidad y fácil de mantener.
            </p>
            <div class="p-2 m-4 grid grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2 lg:gap-y-14 lg:gap-x-0 projects-list"></div>
          </div>
        </section> 
    `;
}