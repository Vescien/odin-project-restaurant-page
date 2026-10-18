import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function showTab(loadFn) {
    content.textContent = "";
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    loadFn();
}

document.querySelector("#home").addEventListener("click", () => showTab(loadHome));
document.querySelector("#menu").addEventListener("click", () => showTab(loadMenu));
document.querySelector("#about").addEventListener("click", () => showTab(loadAbout));

loadHome();

