import { header } from "./header-ui.js";
import { listenerBtnMenu, listenersLinks } from "./header-listeners.js";

export function initHeader() {
    const root = document.querySelector('#root');

    root.innerHTML = header();

    listenerBtnMenu()
    listenersLinks();
};