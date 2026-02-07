import { initFooter } from "./footer/index.js";
import { initHeader } from "./header/index.js";
import { initMain } from "./main/index.js";

export function initLayout() {
    initHeader();
    initMain();
    initFooter();
};