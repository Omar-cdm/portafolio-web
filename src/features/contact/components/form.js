export function form() {
    return `
        <form class="w-5/6 flex bg-white/2 backdrop-blur-sm flex-col gap-2 p-4 rounded-md relative lg:w-3/5 contact__form" action="https://formspree.io/f/mvzpbarl" method="POST">
            <label class="lg:text-lg" for="text">Nombre</label>
            <input class="w-3/4 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:border-green-dark focus:bg-white/2 focus:backdrop-blur-sm form__input-text" type="text" name="nombre" id="text" required></input>
            <label class="p-1 lg:text-lg form__text-email" for="email">Email</label>
            <input class="w-3/4 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:valid:border-green-dark focus:invalid:border-red-500 focus:bg-white/2 focus:backdrop-blur-sm form__input-email" type="email" name="email" id="email" autocomplete="on" required></input>
            <label class="lg:text-lg form__text-message" for="message">Mensaje</label>
            <textarea class="w-5/6 p-1 text-sm outline-none border-1 border-green-400 rounded-sm hover:border-green-dark focus:border-green-dark focus:bg-white/2 focus:backdrop-blur-sm form__input-message" name="mensaje" id="message" rows="5" required></textarea>
            <div class="mt-4 flex justify-end px-2 form__button-container">
                <button class="text-sm w-24 h-8 border-1 border-b-4 border-r-4 border-green-400 hover:cursor-pointer lg:text-base lg:h-9 form__button" type="submit">Enviar</button>
            </div>

            <div class="size-8 absolute border-t-2 border-l-2 border-green-400 -top-2 -left-2 rounded-tl-md"></div>
            <div class="size-8 absolute border-t-2 border-r-2 border-green-400 -top-2 -right-2 rounded-tr-md"></div>
            <div class="size-8 absolute border-b-2 border-l-2 border-green-400 -bottom-2 -left-2 rounded-bl-md"></div>
            <div class="size-8 absolute border-b-2 border-r-2 border-green-400 -bottom-2 -right-2 rounded-br-md"></div>

        </form>
    `;
};