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
    
    if (loadFn === loadHome) {
        enableMenuBtn();
    }
}

function enableMenuBtn() {
    const seeMenuBtn = document.querySelector(".hero-button");
    seeMenuBtn.addEventListener("click", () => showTab(loadMenu));
}

homeBtn.addEventListener("click", () => showTab(loadHome));
menuBtn.addEventListener("click", () => showTab(loadMenu));
aboutBtn.addEventListener("click", () => showTab(loadAbout));

showTab(loadHome);