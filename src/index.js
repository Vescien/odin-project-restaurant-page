import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const dropdown = document.querySelector(".dropdown");
const navBar = document.querySelector("nav");

function showTab(loadFn) {
    content.textContent = "";
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    loadFn();

    navBar.classList.add("nav-bar");

    if (loadFn === loadHome) {
        enableMenuBtn();
    }
}

function enableMenuBtn() {
    const seeMenuBtn = document.querySelector(".hero-button");
    seeMenuBtn.addEventListener("click", () => showTab(loadMenu));
}

const mobileQuery = window.matchMedia("(max-width: 700px)");

mobileQuery.addEventListener("change", () => {
    navBar.classList.add("nav-bar");
});

homeBtn.addEventListener("click", () => showTab(loadHome));
menuBtn.addEventListener("click", () => showTab(loadMenu));
aboutBtn.addEventListener("click", () => showTab(loadAbout));
dropdown.addEventListener("click", () => navBar.classList.toggle("nav-bar"));

showTab(loadHome);