import createEl from "./util.js";

export default function loadAbout() {
    const content = document.querySelector("#content");
    const btn = document.querySelector("#about");
    btn.classList.add("active");
    const page = createEl("div", "home");

    const title = createEl("h1", "title", "Visit us");
    const subtext = createEl("p", "subtext", "Walk-ins are always welcome. Call ahead for groups of six or more.")
    const infoContainer = createEl("div", "info-container");
    const addressCard = createEl("div", "card");
    const hoursCard = createEl("div", "card");
    const mapCard = createEl("div", "card");
    mapCard.classList.add("map-card");

    const findUs = createEl("p", "card-title", "Find us");
    const hours = createEl("p", "card-title", "Hours");
    const map = createEl("p", "", "[Map or storefront photo]")

    addressCard.append(findUs);
    hoursCard.append(hours);
    mapCard.append(map);
    infoContainer.append(addressCard, hoursCard, mapCard);

    page.append(title, subtext, infoContainer);
    content.append(page);
}