import { navbar } from './components/nav-menu.js';
import { iconLogo } from '/src/components/icons/logo-robot.js';

export function header() {
    return `
        <header class="w-5/6 h-14 bg-white/2 backdrop-blur-sm sticky z-1 top-1 inset-x-1/12 flex justify-between items-center border-x-1 border-y-1 border-green-400 border-b-green-dark rounded-tl-xl rounded-br-xl px-4 py-2 animate-entrance sm:h-15 header">

            <div class="w-12 h-1 absolute bottom-0 left-8 bg-green-dark"></div>
            <div class="w-14 h-1 absolute top-0 right-0 bg-green-400"></div>
            <div class="w-1 h-2 absolute top-0 right-0 bg-green-400"></div>

            <div class="flex items-center gap-1 header__logo">
                <h1 class="text-2xl font-extrabold">OmarDev</h1>
                ${iconLogo()}
            </div>

            <button class="w-7 h-7 flex flex-col justify-center items-center gap-[4px] border-1 border-green-400 rounded-lg px-1 relative hover:cursor-pointer header__hamburger menu-exit" id="btn-menu" aria-haspopup="true" aria-expanded="false" aria-controls="menu-desplegable">
                
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                <div class="w-full h-[2px] bg-green-400 rounded-full bg-black hamburger__line"></div>
                ${navbar()}
            </button>
        </header>
    `;
};