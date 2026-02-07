import { footer } from "./footer-ui.js";

export function initFooter() {
    const root = document.querySelector('#root');

    root.insertAdjacentHTML('beforeend', footer());
};