import createEl from "./util.js";

export default function loadHome() {
    const content = document.querySelector("#content");
    const page = createEl("div", "home");

    const main = createEl("div", "main");
    const hero = createEl("div", "hero");
    const heroImage = createEl("div", "hero-image", "[Photo: signature dish]");
    const topDescription = createEl("p", "top-description", "WOOD-FIRED KITCHEN · SINCE 2012");
    const heroTitle = createEl("h1", "hero-title", "Fire, salt, and good company.");
    const heroDescription = createEl("p", "hero-description", "Simple dishes cooked over open flame with ingredients from farms down the road. Pull up a chair, stay a while.");
    const heroButton = createEl("button", "hero-button", "See the menu");

    const info = createEl("div", "info");
    const features = [
        { title: "Local ingredients", text: "Produce and meat from nearby farms, delivered fresh every morning." },
        { title: "Cooked over fire", text: "Oak and charcoal grills give every plate its smoky character." },
        { title: "Open late", text: "Dinner until 11pm on weekends, because good nights run long." },
    ];

    features.forEach((feature) => {
        const card = createEl("div", "card");
        const title = createEl("h2", "card-title", feature.title);
        const text = createEl("p", "card-text", feature.text);
        card.append(title, text);
        info.appendChild(card);
    });

    hero.append(topDescription, heroTitle, heroDescription, heroButton);
    main.append(hero, heroImage);
    page.append(main, info);
    content.appendChild(page);
}