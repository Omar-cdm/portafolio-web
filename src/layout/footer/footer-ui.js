import { politicPrivacy } from './components/politic-privacy.js';
import { iconGitHub, iconInstagram, iconFacebook } from '/src/components/icons/icons-social-red.js';

export function footer() {
    return `
        <footer class="bg-white/2 backdrop-blur-sm px-6 py-8 mx-3 border-4 border-green-400 relative rounded-xl opacity-0 sm:mt-16 footer">
            <div class="sm:grid sm:place-items-center sm:grid-cols-3 footer__container">
                <div class="my-3 sm:h-full sm:m-0 footer__phone">
                    <h4 class="font-semibold lg:text-xl footer__title">Teléfono</h4>
                    <p class="text-sm sm:h-9 sm:flex sm:items-end lg:text-base footer__text">+57 304 301 5421</p>
                </div>
                <div class="mb-3 sm:h-full sm:m-0 footer__phone">
                    <h4 class="font-semibold lg:text-xl footer__title">Email</h4>
                    <p class="text-sm sm:h-9 sm:flex sm:items-end lg:text-lg footer__text">omardev332@gmail.com</p>
                </div>
                <div class="mb-3 footer__redes">
                    <h4 class="font-semibold mb-1 lg:text-xl footer__title">Redes</h4>
                    <div class="flex gap-2">
                        <a href="https://www.instagram.com/omar_jr_05_02/" target="_blank" rel="noopener noreferrer">
                            ${iconInstagram()}
                        </a>
                        <a href="https://github.com/Omar-cdm" target="_blank" rel="noopener noreferrer">
                            ${iconGitHub()}
                        </a>
                        <a href="https://www.facebook.com/omar.j.rodriguez.12327" target="_blank" rel="noopener noreferrer">
                            ${iconFacebook()}
                        </a>
                    </div>
                </div>
                <div class="flex text-xs mb-1 sm:col-span-3 sm:w-full sm:gap-6 sm:mt-4 footer__credits">
                    <button popovertarget="info-privacidad" class="w-1/2 sm:text-end underline lg:text-sm hover:cursor-pointer footer__credits-link">Política de Privacidad</button>

                    ${politicPrivacy()}

                    <p class="w-1/2 lg:text-sm footer__credits-text">© 2026 Hecho con ❤️</p>
                </div>
            </div>
            
            <span class=" h-2 bg-black-bluish absolute -top-1 inset-x-1/6 border-b-1 border-x-1 border-green-400 rounded-b-full"></span>
            <span class="h-2 bg-black-bluish absolute -bottom-1 inset-x-1/6 border-t-1 border-x-1 border-green-400 rounded-t-full"></span>
            <span class="w-2 bg-black-bluish absolute -left-1 inset-y-1/6 border-r-1 border-y-1 border-green-400 rounded-r-full"></span>
            <span class="w-2 bg-black-bluish absolute -right-1 inset-y-1/6 border-l-1 border-y-1 border-green-400 rounded-l-full"></span>

        </footer>
    `;
};