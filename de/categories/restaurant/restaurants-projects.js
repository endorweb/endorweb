// Projects
const projects = [
    // Restaurant Website

    {
        img: "../../imgs/projects-background/candy.jpg",
        titel: "Hausgemachte Desserts zum Verkauf",
        desc: "Eine elegante Website für Desserts, um maßgeschneiderte Süßigkeiten zu präsentieren und einfache Bestellungen für Veranstaltungen und Feiern zu ermöglichen.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/Restaurant.jpg",
        titel: "Restaurant Website",
        desc: "Restaurant-Website, die das Fast-Food-Angebot des Restaurants durch ein sauberes, reaktionsschnelles Design hervorhebt, um lokalen Kunden ein schnelles und nahtloses Surferlebnis zu bieten.",
        link: "https://endorweb.github.io/Restaurant/",
    },
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
    container.innerHTML = `
    <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
    <img src="${project.img}" alt="${project.titel}">

    <div class="switch-dark">
    <h3>${project.titel}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank"><button>View Demo</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});