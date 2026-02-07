export function navbar() {
    return `
        <nav class="w-27 hidden bg-black-bluish text-white-green p-2 rounded-md border-1 border-green-400 absolute -top-1 -right-1 lg:w-32  menu__nav" id="menu-desplegable">
            <ul class="text-sm my-2 flex flex-col items-center gap-3 menu__list">
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 lg:px-2 lg:text-lg link">Inicio</a>        
                </li>
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 lg:px-2 lg:text-lg link">Proyectos</a>
                </li>
                <li>
                    <a href="./" class="px-1 border-1 border-b-3 border-r-3 border-green-400 lg:px-2 lg:text-lg link">Contacto</a>
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
