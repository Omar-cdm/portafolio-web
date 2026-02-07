import { welcome } from "./welcome-ui.js";
import { writeText } from "../../infrastructure/utils/write-text.js";

export function initWelcome() {
    const main = document.querySelector('main');

    main.innerHTML = welcome();
    writeText();
};