let array = [
    {
        name: "Website Design",
        category: "web development",
        oldPrice: "£899,99",
        newPrice: "£699.99",
        img: "../img/webdesign.jpg"
    },
    {
        name: "Website Development",
        category: "web development",
        oldPrice: "£2199,99",
        newPrice: "£1250",
        img: "../img/development.jpg"
    },
    {
        name: "Website Maintenance",
        category: "maintenance",
        oldPrice: "£200",
        newPrice: "£150",
        img: "../img/maintenance.jpg"
    },
    {
        name: "Enhance your computer's performance",
        category: "maintenance",
        oldPrice: "£80",
        newPrice: "£60",
        img: "../img/performance.jpg"
    },
    {
        name: "Install Drivers & Programs",
        category: "maintenance",
        oldPrice: "£70",
        newPrice: "£32",
        img: "../img/install.webp"
    },
    {
        name: "Online Error Solution. Troubleshooting",
        category: "maintenance",
        oldPrice: "£30",
        newPrice: "£15",
        img: "../img/troubleshooting.webp"
    },
    {
        name: "PC Repair",
        category: "maintenance",
        oldPrice: "£75",
        newPrice: "£60",
        img: "../img/repair.jpg"
    }
]

let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "service");
}
