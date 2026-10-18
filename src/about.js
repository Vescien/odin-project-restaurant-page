import createEl from "./util.js";

export default function loadAbout() {
    const content = document.querySelector("#content");
    const btn = document.querySelector("#about");
    btn.classList.add("active");
    const page = createEl("div", "home");

    const title = createEl("h1", "title", "Visit us");
    const subtext = createEl("p", "subtext", "Walk-ins are always welcome. Call ahead for groups of six or more.")
    const addressCard = createEl("div", "card");
    const hoursCard = createEl("div", "card");
    const mapCard = createEl("div", "card");

    const findUs = createEl("p", "card-title", "Find us");
    const hours = createEl("p", "card-title", "Hours");
    const map = createEl("p", "", "[Map or storefront photo]")

    addressCard.append(findUs);
    hoursCard.append(hours);
    mapCard.append(map);

    page.append(title, subtext, addressCard, hoursCard, mapCard);
    content.append(page);
}