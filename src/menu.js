import createEl from "./util.js";

export default function loadHome() {
    const content = document.querySelector("#content");
    const btn = document.querySelector("#menu");
    btn.classList.add("active");
    const page = createEl("div", "home");

    const title = createEl("h1", "title", "Menu");
    const subtext = createEl("p", "subtext", "Everything is cooked to order over the fire");
    const menuContainer = createEl("div", "menu-container");

    const menu = [
        { name: "Charred Octopus", price: 18, description: "Smoked paprika, crushed potatoes, lemon oil." },
        { name: "Roasted Beet Salad", price: 13, description: "Goat cheese, toasted walnuts, sherry vinaigrette." },
        { name: "Oak-Grilled Ribeye", price: 34, description: "Chimichurri, charred onions, hand-cut fries." },
        { name: "Wood-Fired Chicken", price: 24, description: "Half bird, garlic butter, seasonal greens." },
        { name: "Smoked Mushroom Flatbread", price: 16, description: "Thyme, fontina, caramelized shallots." },
        { name: "Burnt Honey Flan", price: 9, description: "Sea salt, cinnamon cream." },
    ];

    menu.forEach((item) => {
        const card = createEl("div", "card");
        const cardUpper = createEl("div", "menu-top");
        const name = createEl("p", "name", item.name);
        const price = createEl("p", "price", `$${item.price}`);
        const cardLower = createEl("div", "menu-lower", item.description);
        cardUpper.append(name, price);
        card.append(cardUpper, cardLower);
        menuContainer.append(card);
    });

    page.append(title, subtext, menuContainer);
    content.appendChild(page);
}