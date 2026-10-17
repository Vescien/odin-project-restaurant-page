import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");

function showTab(loadFn) {
    content.textContent = "";
    loadFn();
}

document.querySelector("#home").addEventListener("click", () => showTab(loadHome));
document.querySelector("#menu").addEventListener("click", () => showTab(loadMenu));
document.querySelector("#about").addEventListener("click", () => showTab(loadAbout));

loadHome();

