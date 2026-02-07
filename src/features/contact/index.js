import { contact } from "./contact-ui.js";

export function initContact() {
    const main = document.querySelector('main');

    main.innerHTML = contact();
};