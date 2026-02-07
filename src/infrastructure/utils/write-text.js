import { renderSection } from "../router/router.js";

export function writeText() {
    const writtenText = document.querySelector('.written-text-js');
    let text = 'cat ./profile/index.html';
    let count = 0

    let nInterval = setInterval(() => {
        if(count <= (text.length - 1)) {
            setTimeout(() => {
                writtenText.innerHTML += text.charAt(count);
                count++
            }, 140);
        } else {
            clearInterval(nInterval);
            setTimeout(() => {
                renderSection('Inicio');
            }, 400);
        }
    }, 140);
};