import { main } from "./main-ui.js";

export function initMain() {
    const root = document.querySelector('#root');

    root.insertAdjacentHTML('beforeend', main());
};
